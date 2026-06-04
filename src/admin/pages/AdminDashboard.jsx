// src/admin/pages/Dashboard.jsx
import { useState, useEffect, useCallback } from "react";
import API from "../../services/api"; // adjust to your axios instance

// ─── Small reusable components ────────────────────────────────────────────────

function StatCard({ icon, iconBg, iconColor, label, value, note, noteType }) {
  return (
    <div className="stat-card">
      <div
        className="stat-icon"
        style={{ background: `var(${iconBg})`, color: `var(${iconColor})` }}
      >
        {icon}
      </div>
      <p className="stat-label">{label}</p>
      <p className="stat-val">{value}</p>
      {note && (
        <p className={`stat-note${noteType ? ` stat-note--${noteType}` : ""}`}>
          {note}
        </p>
      )}
    </div>
  );
}

function SectionCard({ title, meta, children }) {
  return (
    <div className="section-card">
      <div className="section-head">
        <span className="section-title">{title}</span>
        {meta && <span className="section-meta">{meta}</span>}
      </div>
      {children}
    </div>
  );
}

function Avatar({ initials, bg, color }) {
  return (
    <div
      className="avatar"
      style={{ background: `var(${bg})`, color: `var(${color})` }}
    >
      {initials}
    </div>
  );
}

function CreditBadge({ credits }) {
  const cls =
    credits === 0  ? "cr-zero" :
    credits < 50   ? "cr-low"  :
                     "cr-normal";
  return <span className={`cr-badge ${cls}`}>{credits} cr</span>;
}

// ─── Avatar color pool ────────────────────────────────────────────────────────

const AVATAR_COLORS = [
  { bg: "--blue-bg",   color: "--blue-text"   },
  { bg: "--green-bg",  color: "--green-text"  },
  { bg: "--amber-bg",  color: "--amber-text"  },
  { bg: "--red-bg",    color: "--red-text"    },
  { bg: "--purple-bg", color: "--purple-text" },
];

function getAvatarColor(index) {
  return AVATAR_COLORS[index % AVATAR_COLORS.length];
}

function getInitials(name = "") {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const min  = Math.floor(diff / 60000);
  if (min < 60)  return `${min || 1} min ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24)   return `${hr} hr ago`;
  return "yesterday";
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const [stats,   setStats  ] = useState(null);
  const [recent,  setRecent ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError  ] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const [statsRes, recentRes] = await Promise.all([
        API.get("/admin/stats"),
        API.get("/admin/users/recent"),
      ]);
      setStats(statsRes.data);
      setRecent(recentRes.data ?? []);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
      setError("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  // ── Stat cards config ──────────────────────────────────────────────────────
  const statCards = [
    {
      label:      "Total users",
      value:      stats?.totalUsers?.toLocaleString() ?? "—",
      note:       stats ? `↑ ${stats.newThisMonth} this month` : "",
      noteType:   "up",
      iconBg:     "--blue-bg",
      iconColor:  "--blue-text",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      label:     "Active users",
      value:     stats?.activeUsers?.toLocaleString() ?? "—",
      note:      stats ? `${Math.round((stats.activeUsers / stats.totalUsers) * 100)}% of total` : "",
      noteType:  "up",
      iconBg:    "--green-bg",
      iconColor: "--green-text",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
    },
    {
      label:     "New this month",
      value:     stats?.newThisMonth?.toLocaleString() ?? "—",
      note:      new Date().toLocaleString("en-IN", { month: "long", year: "numeric" }),
      iconBg:    "--amber-bg",
      iconColor: "--amber-text",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
    },
    {
      label:     "Zero credit users",
      value:     stats?.zeroCreditUsers?.toLocaleString() ?? "—",
      note:      "needs attention",
      noteType:  "warn",
      iconBg:    "--red-bg",
      iconColor: "--red-text",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/>
        </svg>
      ),
    },
  ];

  // ── Credit overview mini-stats ─────────────────────────────────────────────
  const creditMiniStats = [
    {
      label: "Total distributed",
      val:   stats ? `${(stats.totalUsers * 200).toLocaleString()}` : "—",
      note:  "200 × users",
      color: "var(--muted)",
    },
    {
      label: "Inactive users",
      val:   stats?.inactiveUsers?.toLocaleString() ?? "—",
      note:  "no activity",
      color: "var(--amber-text)",
    },
    {
      label: "Avg credits / user",
      val:   stats?.avgCredits ?? "—",
      note:  "of 200 max",
      color: "var(--muted)",
    },
    {
      label: "Zero credits",
      val:   stats?.zeroCreditUsers?.toLocaleString() ?? "—",
      note:  "all consumed",
      color: "var(--red-text)",
    },
  ];

  return (
    <>
      <style>{dashboardCSS}</style>

      <div className="page-header">
        <p className="page-eyebrow">Overview</p>
        <h1 className="page-title">Dashboard</h1>
        <p className="page-sub">
          Welcome back — here&apos;s what&apos;s happening with FitVision.
        </p>
      </div>

      {/* Stats Grid */}
      {error ? (
        <div className="error-state">
          <p>{error}</p>
          <button className="retry-btn" onClick={fetchData}>Retry</button>
        </div>
      ) : (
        <>
          <div className="stats-grid">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="stat-card stat-card--skeleton">
                    <div className="skel skel-icon" />
                    <div className="skel skel-line short" />
                    <div className="skel skel-line wide" />
                    <div className="skel skel-line mid" />
                  </div>
                ))
              : statCards.map((c) => <StatCard key={c.label} {...c} />)
            }
          </div>

          {/* Two-column section */}
          <div className="two-col">
            {/* Recent registrations */}
            <SectionCard title="Recent registrations" meta="last 5 signups">
              {loading ? (
                <div className="reg-list">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="reg-row">
                      <div className="skel skel-avatar" />
                      <div style={{ flex: 1 }}>
                        <div className="skel skel-line short" style={{ marginBottom: 6 }} />
                        <div className="skel skel-line mid" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : recent.length === 0 ? (
                <p className="empty-msg">No recent registrations.</p>
              ) : (
                <div className="reg-list">
                  {recent.map((user, i) => {
                    const col = getAvatarColor(i);
                    return (
                      <div className="reg-row" key={user.id}>
                        <Avatar
                          initials={getInitials(user.name)}
                          bg={col.bg}
                          color={col.color}
                        />
                        <div className="reg-info">
                          <p className="reg-name">{user.name}</p>
                          <p className="reg-email">{user.email}</p>
                        </div>
                        <span className="reg-time">{timeAgo(user.createdAt)}</span>
                        <CreditBadge credits={user.credits} />
                      </div>
                    );
                  })}
                </div>
              )}
            </SectionCard>

            {/* Credit overview */}
            <SectionCard title="Credit overview">
              <div className="mini-stats">
                {creditMiniStats.map((m) => (
                  <div key={m.label} className="mini-stat">
                    <p className="mini-stat-label">{m.label}</p>
                    <p className="mini-stat-val">{m.val}</p>
                    <p className="mini-stat-note" style={{ color: m.color }}>{m.note}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        </>
      )}
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const dashboardCSS = `
  /* ── Page header ── */
  .page-header    { margin-bottom: 28px; }
  .page-eyebrow   { font-size: 11px; font-weight: 600; letter-spacing: 1.2px; text-transform: uppercase; color: var(--muted); margin-bottom: 6px; }
  .page-title     { font-family: var(--font-display, 'Playfair Display', serif); font-size: 32px; font-weight: 800; color: var(--text); line-height: 1.1; }
  .page-sub       { font-size: 14px; color: var(--muted); margin-top: 6px; }

  /* ── Stats grid ── */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 14px;
    margin-bottom: 28px;
  }
  .stat-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius, 12px);
    padding: 20px 22px;
    transition: transform 0.18s, box-shadow 0.18s;
    cursor: default;
  }
  .stat-card:hover { transform: translateY(-2px); box-shadow: var(--shadow); }
  .stat-icon {
    width: 34px; height: 34px;
    border-radius: 9px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 14px;
  }
  .stat-label { font-size: 12px; color: var(--muted); margin-bottom: 4px; }
  .stat-val   { font-family: var(--font-display, 'Playfair Display', serif); font-size: 28px; font-weight: 700; color: var(--text); line-height: 1; }
  .stat-note  { font-size: 12px; color: var(--hint); margin-top: 6px; }
  .stat-note--up   { color: var(--green-text); }
  .stat-note--warn { color: var(--amber-text); }

  /* ── Two-col ── */
  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }

  /* ── Section card ── */
  .section-card  { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius, 12px); overflow: hidden; margin-bottom: 0; }
  .section-head  { padding: 16px 22px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
  .section-title { font-size: 14px; font-weight: 600; color: var(--text); }
  .section-meta  { font-size: 12px; color: var(--hint); }

  /* ── Recent registrations ── */
  .reg-list {}
  .reg-row {
    display: flex; align-items: center; gap: 14px;
    padding: 13px 22px;
    border-bottom: 1px solid var(--border);
    transition: background 0.15s;
    cursor: default;
  }
  .reg-row:last-child { border-bottom: none; }
  .reg-row:hover      { background: var(--surface2); }
  .avatar {
    width: 36px; height: 36px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 600;
    flex-shrink: 0;
  }
  .reg-info  { flex: 1; min-width: 0; }
  .reg-name  { font-size: 13px; font-weight: 500; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .reg-email { font-size: 12px; color: var(--muted); margin-top: 1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .reg-time  { font-size: 11px; color: var(--hint); flex-shrink: 0; }
  .cr-badge  { padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 500; flex-shrink: 0; }
  .cr-normal { background: var(--blue-bg);  color: var(--blue-text);  }
  .cr-low    { background: var(--amber-bg); color: var(--amber-text); }
  .cr-zero   { background: var(--red-bg);   color: var(--red-text);   }

  /* ── Mini stats ── */
  .mini-stats       { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 18px 22px; }
  .mini-stat        { background: var(--surface2); border-radius: var(--radius-sm, 8px); padding: 14px 16px; transition: transform 0.15s; }
  .mini-stat:hover  { transform: translateY(-1px); }
  .mini-stat-label  { font-size: 11px; color: var(--muted); margin-bottom: 4px; }
  .mini-stat-val    { font-family: var(--font-display, 'Playfair Display', serif); font-size: 22px; font-weight: 700; color: var(--text); }
  .mini-stat-note   { font-size: 11px; margin-top: 3px; }

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
  .skel-icon   { width: 34px; height: 34px; border-radius: 9px; margin-bottom: 14px; }
  .skel-avatar { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; }
  .skel-line   { height: 12px; margin-bottom: 8px; }
  .skel-line.short { width: 40%; }
  .skel-line.mid   { width: 65%; }
  .skel-line.wide  { width: 55%; }
  .stat-card--skeleton { pointer-events: none; }

  /* ── Empty / Error ── */
  .empty-msg  { padding: 32px 22px; text-align: center; font-size: 13px; color: var(--hint); }
  .error-state { padding: 40px; text-align: center; }
  .error-state p { font-size: 14px; color: var(--red-text); margin-bottom: 12px; }
  .retry-btn {
    padding: 8px 20px; border-radius: var(--radius-sm, 8px);
    border: 1px solid var(--border);
    background: var(--surface2); color: var(--text);
    font-size: 13px; cursor: pointer;
  }
  .retry-btn:hover { background: var(--border); }

  /* ── Responsive ── */
  @media (max-width: 860px) { .two-col { grid-template-columns: 1fr; } }
  @media (max-width: 640px) {
    .stats-grid { grid-template-columns: 1fr 1fr; }
    .page-title { font-size: 24px; }
  }
  @media (max-width: 400px) { .stats-grid { grid-template-columns: 1fr; } }
`;
