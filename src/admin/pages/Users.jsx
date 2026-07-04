// src/admin/pages/Users.jsx
import { useState, useEffect, useCallback, useMemo } from "react";
import API from "../../services/api"; // adjust to your axios instance

// ─── Helpers ──────────────────────────────────────────────────────────────────

const AVATAR_COLORS = [
  { bg: "--blue-bg", color: "--blue-text" },
  { bg: "--green-bg", color: "--green-text" },
  { bg: "--amber-bg", color: "--amber-text" },
  { bg: "--red-bg", color: "--red-text" },
  { bg: "--purple-bg", color: "--purple-text" },
];

function getInitials(name = "") {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function getAvatarColor(index) {
  return AVATAR_COLORS[index % AVATAR_COLORS.length];
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "2-digit", month: "short", year: "numeric",
  });
}

// ─── Credit badge ─────────────────────────────────────────────────────────────

function CreditBadge({ credits }) {
  const cls =
    credits === 0 ? "badge cr-zero" :
      credits < 50 ? "badge cr-low" :
        "badge cr-normal";
  return <span className={cls}>{credits} cr</span>;
}

// ─── Status badge ─────────────────────────────────────────────────────────────

function StatusBadge({ active }) {
  return (
    <span className={`badge ${active ? "badge-active" : "badge-inactive"}`}>
      {active ? "Active" : "Inactive"}
    </span>
  );
}

// ─── Skeleton row ─────────────────────────────────────────────────────────────

function SkeletonRow() {
  return (
    <tr>
      <td><div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div className="skel" style={{ width: 32, height: 32, borderRadius: "50%", flexShrink: 0 }} />
        <div className="skel skel-line" style={{ width: 120 }} />
      </div></td>
      <td><div className="skel skel-line" style={{ width: 160 }} /></td>
      <td><div className="skel skel-line" style={{ width: 60 }} /></td>
      <td><div className="skel skel-line" style={{ width: 60 }} /></td>
      <td><div className="skel skel-line" style={{ width: 40 }} /></td>
      <td><div className="skel skel-line" style={{ width: 80 }} /></td>
    </tr>
  );
}

// ─── Users Page ───────────────────────────────────────────────────────────────

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // ── Fetch ──────────────────────────────────────────────────────────────────
  const fetchUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await API.get("/admin/users");
      setUsers(res.data ?? []);
    } catch (err) {
      console.error("Users fetch error:", err);
      setError("Failed to load users. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { fetchUsers(); }, [fetchUsers]);

  // ── Filter ─────────────────────────────────────────────────────────────────
  const filtered = useMemo(() =>
    users.filter((u) => {
      const q = search.toLowerCase();
      if (q && !u.name?.toLowerCase().includes(q) && !u.email?.toLowerCase().includes(q)) return false;
      if (statusFilter === "active" && !u.active) return false;
      if (statusFilter === "inactive" && u.active) return false;
      return true;
    }),
    [users, search, statusFilter]
  );

  return (
    <>
      <style>{usersCSS}</style>

      <div className="page-header">
        <p className="page-eyebrow">Management</p>
        <h1 className="page-title">Users</h1>
        <p className="page-sub">
          All registered users — search, filter and review credit status.
        </p>
      </div>

      <div className="section-card">
        {/* Filter bar */}
        <div className="section-head">
          <div className="filter-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Search name or email…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <span className="count-label">
              {!isLoading && `${filtered.length} user${filtered.length !== 1 ? "s" : ""}`}
            </span>
          </div>
        </div>

        {/* Table — desktop/tablet */}
        {error ? (
          <div className="state-box">
            <p className="state-err">{error}</p>
            <button className="retry-btn" onClick={fetchUsers}>Retry</button>
          </div>
        ) : (
          <>
            <div className="table-wrap desktop-only">
              <table className="users-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Credits left</th>
                    <th>Used</th>
                    <th>Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
                  ) : filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6}>
                        <div className="state-box">
                          <p className="state-empty">
                            {users.length === 0
                              ? "No users registered yet."
                              : `No users match "${search || statusFilter}".`}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filtered.map((user, i) => {
                      const col = getAvatarColor(i);
                      const creditsUsed = 200 - user.credits;
                      return (
                        <tr key={user.id}>
                          <td>
                            <div className="user-cell">
                              <div
                                className="avatar"
                                style={{ background: `var(${col.bg})`, color: `var(${col.color})` }}
                              >
                                {getInitials(user.name)}
                              </div>
                              <span className="user-name">{user.name}</span>
                            </div>
                          </td>
                          <td className="email-cell">{user.email}</td>
                          <td><StatusBadge active={user.active} /></td>
                          <td><CreditBadge credits={user.credits} /></td>
                          <td className="used-cell">{user.totalGenerations ?? creditsUsed}</td>
                          <td className="date-cell">{user.createdAt ? formatDate(user.createdAt) : "—"}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Card list — mobile only */}
            <div className="mobile-only user-card-list">
              {isLoading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="user-card">
                    <div className="skel" style={{ width: 40, height: 40, borderRadius: "50%" }} />
                    <div style={{ flex: 1 }}>
                      <div className="skel skel-line" style={{ width: "60%", marginBottom: 8 }} />
                      <div className="skel skel-line" style={{ width: "80%" }} />
                    </div>
                  </div>
                ))
              ) : filtered.length === 0 ? (
                <div className="state-box">
                  <p className="state-empty">
                    {users.length === 0
                      ? "No users registered yet."
                      : `No users match "${search || statusFilter}".`}
                  </p>
                </div>
              ) : (
                filtered.map((user, i) => {
                  const col = getAvatarColor(i);
                  const creditsUsed = 200 - user.credits;
                  return (
                    <div className="user-card" key={user.id}>
                      <div className="user-card-top">
                        <div
                          className="avatar"
                          style={{ background: `var(${col.bg})`, color: `var(${col.color})` }}
                        >
                          {getInitials(user.name)}
                        </div>
                        <div className="user-card-identity">
                          <p className="user-card-name">{user.name}</p>
                          <p className="user-card-email">{user.email}</p>
                        </div>
                        <StatusBadge active={user.active} />
                      </div>
                      <div className="user-card-divider"></div>
                      <div className="user-card-grid">
                        <div>
                          <span className="user-card-label">Credits left</span>
                          <CreditBadge credits={user.credits} />
                        </div>
                        <div>
                          <span className="user-card-label">Used</span>
                          <span className="used-cell">{user.totalGenerations ?? creditsUsed}</span>
                        </div>
                        <div>
                          <span className="user-card-label">Joined</span>
                          <span className="date-cell">{user.createdAt ? formatDate(user.createdAt) : "—"}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const usersCSS = `
  /* ── Page header ── */
  .page-header  { margin-bottom: 28px; }
  .page-eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 1.2px; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
  .page-title   { font-family: var(--font-display, 'Playfair Display', serif); font-size: 32px; font-weight: 800; color: var(--text); line-height: 1.1; }
  .page-sub     { font-size: 14px; color: var(--muted); margin-top: 6px; }

  /* ── Section card ── */
  .section-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius, 12px); overflow: hidden; }
  .section-head { padding: 16px 22px; border-bottom: 1px solid var(--border); }

  /* ── Filter bar ── */
  .filter-bar   { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
  .search-input {
    padding: 8px 12px;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm, 8px);
    background: var(--surface2); color: var(--text);
    font-size: 13px; font-family: var(--font-body, 'Inter', sans-serif);
    width: 220px; outline: none;
    transition: border-color 0.15s;
  }
  .search-input:focus { border-color: var(--text); }
  .filter-select {
    padding: 8px 10px;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm, 8px);
    background: var(--surface2); color: var(--text);
    font-size: 13px; font-family: var(--font-body, 'Inter', sans-serif);
    outline: none; cursor: pointer;
  }
  .count-label { font-size: 12px; color: var(--hint); margin-left: auto; }

  /* ── Table ── */
  .table-wrap  { overflow-x: auto; }
  .users-table { width: 100%; border-collapse: collapse; font-size: 13px; min-width: 640px; }
  .users-table th {
    padding: 11px 16px;
    text-align: left;
    font-size: 11px; font-weight: 600; letter-spacing: 0.4px; text-transform: uppercase;
    color: var(--muted);
    background: var(--surface2);
    border-bottom: 1px solid var(--border);
    white-space: nowrap;
  }
  .users-table td {
    padding: 13px 16px;
    border-bottom: 1px solid var(--border);
    color: var(--text);
    transition: background 0.12s;
  }
  .users-table tr:last-child td { border-bottom: none; }
  .users-table tbody tr:hover td { background: var(--surface2); }

  .user-cell  { display: flex; align-items: center; gap: 10px; }
  .avatar     { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 600; flex-shrink: 0; }
  .user-name  { font-weight: 500; }
  .email-cell { color: var(--muted); font-size: 12px; }
  .date-cell  { color: var(--muted); font-size: 12px; white-space: nowrap; }
  .used-cell  { color: var(--muted); font-size: 12px; }

  /* ── Badges ── */
  .badge         { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 500; }
  .badge-active  { background: var(--green-bg);  color: var(--green-text);  }
  .badge-inactive{ background: var(--red-bg);    color: var(--red-text);    }
  .cr-normal     { background: var(--blue-bg);   color: var(--blue-text);   }
  .cr-low        { background: var(--amber-bg);  color: var(--amber-text);  }
  .cr-zero       { background: var(--red-bg);    color: var(--red-text);    }

  /* ── Skeleton ── */
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position:  400px 0; }
  }
  .skel {
    border-radius: 6px;
    animation: shimmer 1.4s infinite linear;
    background: linear-gradient(90deg, var(--surface2) 25%, var(--border) 50%, var(--surface2) 75%);
    background-size: 400px 100%;
  }
  .skel-line { height: 12px; }

  /* ── Empty / Error ── */
  .state-box   { padding: 40px; text-align: center; }
  .state-empty { font-size: 13px; color: var(--hint); }
  .state-err   { font-size: 14px; color: var(--red-text); margin-bottom: 12px; }
  .retry-btn {
    padding: 8px 20px; border-radius: var(--radius-sm, 8px);
    border: 1px solid var(--border);
    background: var(--surface2); color: var(--text);
    font-size: 13px; cursor: pointer;
  }
  .retry-btn:hover { background: var(--border); }

  /* ── Mobile user cards ── */
  .user-card-list { display: flex; flex-direction: column; padding: 8px; gap: 8px; }
  .user-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius, 12px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .user-card:active { transform: scale(0.99); }

  .user-card-top { display: flex; align-items: flex-start; gap: 12px; }
  .user-card-top .avatar { width: 40px; height: 40px; font-size: 13px; }
  .user-card-identity { flex: 1; min-width: 0; padding-top: 1px; }
  .user-card-name {
    font-size: 14px; font-weight: 600; color: var(--text);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .user-card-email {
    font-size: 12px; color: var(--muted); margin-top: 2px;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }

  .user-card-divider { height: 1px; background: var(--border); margin: 0 -16px; }

  .user-card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4px;
  }
  .user-card-grid > div {
    display: flex; flex-direction: column; gap: 6px;
    align-items: flex-start;
  }
  .user-card-grid > div:nth-child(2) { align-items: center; }
  .user-card-grid > div:nth-child(3) { align-items: flex-end; }
  .user-card-label {
    font-size: 10px; font-weight: 600; color: var(--hint);
    text-transform: uppercase; letter-spacing: 0.4px;
  }
  .user-card-grid .used-cell,
  .user-card-grid .date-cell {
    font-size: 13px; font-weight: 500; color: var(--text);
  }

  /* ── Responsive ── */

   /* ── Desktop / Mobile visibility toggle ── */
  .desktop-only { display: block; }
  .mobile-only  { display: none; }

  @media (max-width: 640px) {
    .page-title    { font-size: 24px; }
    .search-input  { width: 100%; }
    .filter-bar    { flex-direction: column; align-items: flex-start; }
    .count-label   { margin-left: 0; }
    .section-head  { padding: 14px 16px; }
    .desktop-only { display: none; }
    .mobile-only  { display: block; }
  }
`;
