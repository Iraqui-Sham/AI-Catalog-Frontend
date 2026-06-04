import { useState, useEffect, useCallback, useMemo } from "react";
import API from "../services/api"; // adjust to your axios instance path

// ─── Constants ────────────────────────────────────────────────────────────────

const STATUS_OPTIONS = [
  { label: "All statuses", value: "all" },
  { label: "Active",       value: "active" },
  { label: "Inactive",     value: "inactive" },
];

const CREDIT_OPTIONS = [
  { label: "All credits",    value: "all" },
  { label: "Low  (< 50)",    value: "low" },
  { label: "Medium (50–150)", value: "mid" },
  { label: "High  (> 150)",  value: "high" },
];

const DEFAULT_CREDITS = 200; // change if your signup default changes

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getInitials = (name = "") =>
  name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-IN", {
    day: "2-digit", month: "short", year: "2-digit",
  });

const creditTier = (c) => {
  if (c > 150) return "high";
  if (c >= 50)  return "mid";
  return "low";
};

const creditPct = (c) => Math.min(100, Math.round((c / DEFAULT_CREDITS) * 100));

const matchesCredit = (credits, filter) => {
  if (filter === "low")  return credits < 50;
  if (filter === "mid")  return credits >= 50 && credits <= 150;
  if (filter === "high") return credits > 150;
  return true;
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ label, value, delta, negative }) {
  return (
    <div className="stat-card">
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
      {delta && (
        <p className={`stat-delta${negative ? " negative" : ""}`}>{delta}</p>
      )}
    </div>
  );
}

function Avatar({ name }) {
  return <span className="avatar">{getInitials(name)}</span>;
}

function StatusBadge({ active }) {
  return (
    <span className={`badge ${active ? "badge-active" : "badge-inactive"}`}>
      <span className="badge-dot" />
      {active ? "Active" : "Inactive"}
    </span>
  );
}

function CreditBar({ credits }) {
  const tier  = creditTier(credits);
  const width = creditPct(credits);
  return (
    <div className="credit-bar-wrap">
      <span className="credit-num">{credits}</span>
      <div className="credit-bar" aria-label={`${credits} credits`}>
        <div className={`credit-fill credit-fill--${tier}`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function IconButton({ icon, label, onClick, danger }) {
  return (
    <button
      className={`icon-btn${danger ? " icon-btn--danger" : ""}`}
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

// ─── Credits Modal ────────────────────────────────────────────────────────────

function CreditsModal({ user, onClose, onSave }) {
  const [value, setValue] = useState(user?.credits ?? DEFAULT_CREDITS);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    const parsed = parseInt(value, 10);
    if (isNaN(parsed) || parsed < 0) return;
    setSaving(true);
    await onSave(user.id, parsed);
    setSaving(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal">
        <div className="modal-header">
          <div>
            <p className="modal-title" id="modal-title">Adjust credits</p>
            <p className="modal-sub">{user?.name} — current balance: {user?.credits}</p>
          </div>
          <button className="icon-btn" aria-label="Close" onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <label className="field-label" htmlFor="credit-input">New credit amount</label>
          <input
            id="credit-input"
            className="field-input"
            type="number"
            min={0}
            max={9999}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
          />
          <div className="credit-presets">
            {[50, 100, 200, 500].map((n) => (
              <button key={n} className="preset-btn" onClick={() => setValue(n)}>+{n}</button>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Skeleton Row ─────────────────────────────────────────────────────────────

function SkeletonRow() {
  return (
    <tr className="skeleton-row">
      {[200, 80, 100, 60, 80, 60].map((w, i) => (
        <td key={i}><div className="skeleton-cell" style={{ width: w }} /></td>
      ))}
    </tr>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function AdminUsers() {
  const [users,        setUsers       ] = useState([]);
  const [isLoading,    setIsLoading   ] = useState(true);
  const [error,        setError       ] = useState(null);
  const [search,       setSearch      ] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [creditFilter, setCreditFilter] = useState("all");
  const [editingUser,  setEditingUser ] = useState(null); // null = modal closed
  const [toastMsg,     setToastMsg    ] = useState("");

  // ── Fetch ──────────────────────────────────────────────────────────────────
  const fetchUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await API.get("/admin/users");
      setUsers(res.data ?? []);
    } catch (err) {
      console.error("Admin users fetch error:", err);
      setError("Failed to load users. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { fetchUsers(); }, [fetchUsers]);

  // ── Stats ──────────────────────────────────────────────────────────────────
  const stats = useMemo(() => {
    const total    = users.length;
    const active   = users.filter((u) => u.active).length;
    const avgCred  = total ? Math.round(users.reduce((s, u) => s + u.credits, 0) / total) : 0;
    const totalGen = users.reduce((s, u) => s + (u.totalGenerations ?? 0), 0);
    return { total, active, avgCred, totalGen };
  }, [users]);

  // ── Filtering ──────────────────────────────────────────────────────────────
  const filtered = useMemo(() =>
    users.filter((u) => {
      const q = search.toLowerCase();
      if (q && !u.name?.toLowerCase().includes(q) && !u.email?.toLowerCase().includes(q)) return false;
      if (statusFilter === "active"   && !u.active)  return false;
      if (statusFilter === "inactive" &&  u.active)  return false;
      if (!matchesCredit(u.credits, creditFilter))    return false;
      return true;
    }),
    [users, search, statusFilter, creditFilter]
  );

  // ── Actions ────────────────────────────────────────────────────────────────
  const toast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 2500);
  };

  const handleToggleStatus = async (user) => {
    try {
      await API.patch(`/admin/users/${user.id}/status`, { active: !user.active });
      setUsers((prev) =>
        prev.map((u) => u.id === user.id ? { ...u, active: !u.active } : u)
      );
      toast(`${user.name} ${user.active ? "deactivated" : "activated"}`);
    } catch (err) {
      console.error("Toggle status error:", err);
      toast("Failed to update status");
    }
  };

  const handleSaveCredits = async (userId, newCredits) => {
    try {
      await API.patch(`/admin/users/${userId}/credits`, { credits: newCredits });
      setUsers((prev) =>
        prev.map((u) => u.id === userId ? { ...u, credits: newCredits } : u)
      );
      toast("Credits updated");
    } catch (err) {
      console.error("Credits update error:", err);
      toast("Failed to update credits");
    }
  };

  const handleExportCSV = () => {
    const headers = ["ID", "Name", "Email", "Credits", "Total Generations", "Status", "Joined"];
    const rows = users.map((u) => [
      u.id, u.name, u.email, u.credits,
      u.totalGenerations ?? 0,
      u.active ? "Active" : "Inactive",
      u.createdAt ?? "",
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = "users.csv"; a.click();
    URL.revokeObjectURL(url);
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{adminStyles}</style>

      <div className="admin-page">

        {/* Toast */}
        {toastMsg && <div className="toast">{toastMsg}</div>}

        {/* Credits Modal */}
        {editingUser && (
          <CreditsModal
            user={editingUser}
            onClose={() => setEditingUser(null)}
            onSave={handleSaveCredits}
          />
        )}

        {/* Page Header */}
        <div className="page-header">
          <div>
            <h1 className="page-title">Users</h1>
            <p className="page-sub">Manage accounts, credits &amp; access</p>
          </div>
          <div className="header-actions">
            <button className="btn" onClick={fetchUsers}>
              <RefreshIcon /> Refresh
            </button>
            <button className="btn" onClick={handleExportCSV}>
              <DownloadIcon /> Export CSV
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          <StatCard label="Total users"        value={stats.total}                   delta={`${stats.active} active`} />
          <StatCard label="Active users"        value={stats.active}                  delta={`${stats.total - stats.active} inactive`} />
          <StatCard label="Avg credits left"   value={stats.avgCred}                 delta="per user" />
          <StatCard label="Total generations"  value={stats.totalGen.toLocaleString()} delta="all time" />
        </div>

        {/* Toolbar */}
        <div className="toolbar">
          <div className="search-wrap">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search by name or email…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            {search && (
              <button className="search-clear" aria-label="Clear search" onClick={() => setSearch("")}>
                <XIcon />
              </button>
            )}
          </div>

          <select
            className="filter-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {STATUS_OPTIONS.map(({ label, value }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>

          <select
            className="filter-select"
            value={creditFilter}
            onChange={(e) => setCreditFilter(e.target.value)}
          >
            {CREDIT_OPTIONS.map(({ label, value }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>

          <span className="results-count">
            {!isLoading && `${filtered.length} of ${users.length} users`}
          </span>
        </div>

        {/* Table */}
        <div className="table-wrap">
          {error ? (
            <div className="state-box">
              <p className="state-msg error-msg">{error}</p>
              <button className="btn btn-primary" onClick={fetchUsers}>Retry</button>
            </div>
          ) : (
            <table className="users-table" aria-label="Users management table">
              <thead>
                <tr>
                  <th className="col-user">User</th>
                  <th className="col-status">Status</th>
                  <th className="col-credits">Credits</th>
                  <th className="col-gens">Images</th>
                  <th className="col-joined">Joined</th>
                  <th className="col-actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  Array.from({ length: 8 }).map((_, i) => <SkeletonRow key={i} />)
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6}>
                      <div className="state-box">
                        <p className="state-msg">
                          {users.length === 0
                            ? "No users registered yet."
                            : `No users match "${search || statusFilter}".`}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filtered.map((user) => (
                    <tr key={user.id} className="user-row">
                      <td className="col-user">
                        <div className="user-cell">
                          <Avatar name={user.name} />
                          <div>
                            <p className="user-name">{user.name}</p>
                            <p className="user-email">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="col-status">
                        <StatusBadge active={user.active} />
                      </td>
                      <td className="col-credits">
                        <CreditBar credits={user.credits} />
                      </td>
                      <td className="col-gens td-muted">
                        {user.totalGenerations ?? 0}
                      </td>
                      <td className="col-joined td-muted td-small">
                        {user.createdAt ? formatDate(user.createdAt) : "—"}
                      </td>
                      <td className="col-actions">
                        <div className="row-actions">
                          <IconButton
                            icon={<CoinIcon />}
                            label="Edit credits"
                            onClick={() => setEditingUser(user)}
                          />
                          <IconButton
                            icon={user.active ? <LockIcon /> : <UnlockIcon />}
                            label={user.active ? "Deactivate user" : "Activate user"}
                            onClick={() => handleToggleStatus(user)}
                            danger={user.active}
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

const SearchIcon  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
const XIcon       = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>;
const DownloadIcon= () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const RefreshIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>;
const CoinIcon    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>;
const LockIcon    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const UnlockIcon  = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>;

// ─── Styles ───────────────────────────────────────────────────────────────────

const adminStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .admin-page {
    min-height: 100vh;
    background: #f7f6f3;
    font-family: 'DM Sans', sans-serif;
    color: #1a1a18;
    padding: 32px 40px 80px;
  }

  /* ── Toast ── */
  .toast {
    position: fixed;
    bottom: 28px;
    right: 28px;
    background: #1a1a18;
    color: #f7f6f3;
    font-size: 13px;
    padding: 10px 18px;
    border-radius: 10px;
    z-index: 999;
    animation: fadeIn .2s ease;
  }
  @keyframes fadeIn { from { opacity:0; transform: translateY(6px) } to { opacity:1; transform: translateY(0) } }

  /* ── Page Header ── */
  .page-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 28px;
  }
  .page-title {
    font-size: 28px;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: #1a1a18;
    line-height: 1.1;
  }
  .page-sub {
    font-size: 14px;
    color: #6b6b67;
    margin-top: 4px;
    font-weight: 300;
  }
  .header-actions { display: flex; gap: 8px; align-items: center; }

  /* ── Buttons ── */
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 36px;
    padding: 0 14px;
    border-radius: 9px;
    border: 1px solid #e2e1dc;
    background: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: #1a1a18;
    cursor: pointer;
    transition: all .15s;
    white-space: nowrap;
  }
  .btn:hover { border-color: #c4c3bc; background: #fafaf8; }
  .btn-primary { background: #1a1a18; color: #f7f6f3; border-color: #1a1a18; }
  .btn-primary:hover { background: #2e2e2b; }
  .btn:disabled { opacity: .5; cursor: not-allowed; }

  /* ── Stats ── */
  .stats-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 20px;
  }
  .stat-card {
    background: #fff;
    border: 1px solid #e8e7e2;
    border-radius: 12px;
    padding: 14px 16px;
  }
  .stat-label { font-size: 11px; color: #9e9e98; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 6px; }
  .stat-value { font-size: 22px; font-weight: 500; color: #1a1a18; line-height: 1; }
  .stat-delta { font-size: 11.5px; color: #6b6b67; margin-top: 4px; }
  .stat-delta.negative { color: #c0392b; }

  /* ── Toolbar ── */
  .toolbar {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    background: #fff;
    border: 1px solid #e8e7e2;
    border-bottom: none;
    border-radius: 12px 12px 0 0;
    padding: 12px 16px;
  }
  .search-wrap {
    position: relative;
    flex: 1;
    min-width: 220px;
    max-width: 320px;
  }
  .search-wrap svg:first-child {
    position: absolute;
    left: 11px;
    top: 50%;
    transform: translateY(-50%);
    color: #9e9e98;
    pointer-events: none;
  }
  .search-input {
    width: 100%;
    height: 34px;
    padding: 0 32px 0 34px;
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    background: #f7f6f3;
    border: 1px solid #e2e1dc;
    border-radius: 8px;
    color: #1a1a18;
    outline: none;
    transition: border-color .15s, box-shadow .15s;
  }
  .search-input::placeholder { color: #aeada6; }
  .search-input:focus { border-color: #b8b3e8; box-shadow: 0 0 0 3px rgba(83,74,183,.08); }
  .search-clear {
    position: absolute;
    right: 9px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: none;
    cursor: pointer;
    color: #9e9e98;
    display: flex;
    align-items: center;
    padding: 0;
  }
  .filter-select {
    height: 34px;
    padding: 0 10px;
    font-size: 12.5px;
    font-family: 'DM Sans', sans-serif;
    background: #f7f6f3;
    border: 1px solid #e2e1dc;
    border-radius: 8px;
    color: #1a1a18;
    outline: none;
    cursor: pointer;
  }
  .results-count {
    margin-left: auto;
    font-size: 12px;
    color: #9e9e98;
    white-space: nowrap;
  }

  /* ── Table ── */
  .table-wrap {
    background: #fff;
    border: 1px solid #e8e7e2;
    border-radius: 0 0 12px 12px;
    overflow-x: auto;
  }
  .users-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
    table-layout: fixed;
  }
  .users-table thead th {
    padding: 10px 14px;
    text-align: left;
    font-size: 11px;
    font-weight: 500;
    color: #9e9e98;
    text-transform: uppercase;
    letter-spacing: .06em;
    border-bottom: 1px solid #e8e7e2;
    background: #fafaf8;
    white-space: nowrap;
  }
  .user-row { border-bottom: 1px solid #f0efe9; transition: background .12s; }
  .user-row:last-child { border-bottom: none; }
  .user-row:hover { background: #fafaf8; }
  .users-table td { padding: 11px 14px; vertical-align: middle; overflow: hidden; text-overflow: ellipsis; }
  .td-muted { color: #6b6b67; }
  .td-small { font-size: 12px; }

  .col-user    { width: 220px; }
  .col-status  { width: 100px; }
  .col-credits { width: 140px; }
  .col-gens    { width: 80px; }
  .col-joined  { width: 100px; }
  .col-actions { width: 90px; }

  /* ── User cell ── */
  .user-cell { display: flex; align-items: center; gap: 10px; }
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ededea;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 500;
    color: #6b6b67;
    flex-shrink: 0;
  }
  .user-name  { font-weight: 500; font-size: 13px; color: #1a1a18; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .user-email { font-size: 11.5px; color: #9e9e98; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  /* ── Badge ── */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 11.5px;
    font-weight: 500;
  }
  .badge-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
  .badge-active   { background: #e8f5e9; color: #2e7d32; }
  .badge-active   .badge-dot { background: #43a047; }
  .badge-inactive { background: #fce8e8; color: #c0392b; }
  .badge-inactive .badge-dot { background: #e53935; }

  /* ── Credit bar ── */
  .credit-bar-wrap { display: flex; align-items: center; gap: 8px; }
  .credit-num { font-size: 12.5px; font-weight: 500; color: #1a1a18; min-width: 30px; }
  .credit-bar { flex: 1; height: 4px; border-radius: 2px; background: #ededea; overflow: hidden; max-width: 64px; }
  .credit-fill { height: 100%; border-radius: 2px; transition: width .3s; }
  .credit-fill--high { background: #43a047; }
  .credit-fill--mid  { background: #f59e0b; }
  .credit-fill--low  { background: #e53935; }

  /* ── Row actions ── */
  .row-actions { display: flex; align-items: center; gap: 5px; justify-content: flex-end; }
  .icon-btn {
    width: 28px;
    height: 28px;
    border-radius: 7px;
    border: 1px solid #e2e1dc;
    background: transparent;
    color: #6b6b67;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all .15s;
  }
  .icon-btn:hover { background: #f0efe9; color: #1a1a18; border-color: #c4c3bc; }
  .icon-btn--danger:hover { background: #fce8e8; color: #c0392b; border-color: #f5c6c6; }

  /* ── Empty / Error state ── */
  .state-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 60px 20px;
    text-align: center;
  }
  .state-msg  { font-size: 14px; color: #9e9e98; }
  .error-msg  { color: #c0392b; }

  /* ── Skeleton ── */
  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }
  .skeleton-row td { padding: 13px 14px; }
  .skeleton-cell {
    height: 12px;
    border-radius: 6px;
    animation: shimmer 1.4s infinite linear;
    background: linear-gradient(90deg, #ededea 25%, #e0dfdb 50%, #ededea 75%);
    background-size: 600px 100%;
  }

  /* ── Modal ── */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(26,26,24,.45);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .modal {
    background: #fff;
    border-radius: 14px;
    border: 1px solid #e2e1dc;
    width: 100%;
    max-width: 340px;
    box-shadow: 0 20px 60px rgba(0,0,0,.12);
  }
  .modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 18px 18px 0;
  }
  .modal-title { font-size: 14px; font-weight: 500; color: #1a1a18; }
  .modal-sub   { font-size: 12px; color: #9e9e98; margin-top: 3px; }
  .modal-body  { padding: 16px 18px; }
  .field-label { font-size: 11px; color: #9e9e98; text-transform: uppercase; letter-spacing: .05em; display: block; margin-bottom: 6px; }
  .field-input {
    width: 100%;
    height: 38px;
    padding: 0 12px;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    background: #f7f6f3;
    border: 1px solid #e2e1dc;
    border-radius: 9px;
    color: #1a1a18;
    outline: none;
    transition: border-color .15s;
    margin-bottom: 12px;
  }
  .field-input:focus { border-color: #b8b3e8; }
  .credit-presets { display: flex; gap: 6px; }
  .preset-btn {
    flex: 1;
    height: 30px;
    font-size: 12px;
    font-family: 'DM Sans', sans-serif;
    border: 1px solid #e2e1dc;
    border-radius: 7px;
    background: #f7f6f3;
    color: #6b6b67;
    cursor: pointer;
    transition: all .12s;
  }
  .preset-btn:hover { background: #ededea; color: #1a1a18; border-color: #c4c3bc; }
  .modal-footer {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    padding: 12px 18px 18px;
    border-top: 1px solid #f0efe9;
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .admin-page { padding: 20px 16px 60px; }
    .stats-row  { grid-template-columns: repeat(2, 1fr); }
    .col-gens, .col-joined { display: none; }
  }
  @media (max-width: 600px) {
    .stats-row { grid-template-columns: 1fr 1fr; }
    .header-actions .btn:first-child { display: none; }
    .filter-select { display: none; }
  }
`;
