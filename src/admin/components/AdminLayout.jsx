// src/admin/components/AdminLayout.jsx
import { NavLink, useLocation } from "react-router-dom";
import "../admin.css";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function LogoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--bg)">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3"  />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"  />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"  y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─── Nav Item ─────────────────────────────────────────────────────────────────

function NavItem({ to, icon, label }) {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <button
          className={`nav-btn${isActive ? " nav-btn--active" : ""}`}
          aria-label={label}
          aria-current={isActive ? "page" : undefined}
        >
          {icon}
          <span className="nav-tooltip">{label}</span>
        </button>
      )}
    </NavLink>
  );
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function AdminLayout({ theme, toggleTheme, children }) {
  const location = useLocation();

  const pageLabel = location.pathname.includes("users") ? "Users" : "Dashboard";

  return (
    <div style={styles.shell}>

      {/* ── Sidebar ── */}
      <nav style={styles.sidebar} aria-label="Admin navigation">
        <div style={styles.logo}>
          <LogoIcon />
        </div>

        <NavItem to="/admin/dashboard" icon={<DashboardIcon />} label="Dashboard" />
        <NavItem to="/admin/users"     icon={<UsersIcon />}     label="Users" />

        <div style={{ flex: 1 }} />

        <button
          style={styles.navBtn}
          className="nav-btn"
          aria-label="Settings (coming soon)"
          onClick={() => alert("Settings — coming soon")}
        >
          <SettingsIcon />
          <span className="nav-tooltip">Settings</span>
        </button>
      </nav>

      {/* ── Main ── */}
      <div style={styles.main}>

        {/* ── Topbar ── */}
        <header style={styles.topbar}>
          {/* Brand */}
          <div style={styles.orgWrap}>
            <div style={styles.orgIcon}>FV</div>
            <span style={styles.orgName}>FitVision</span>
            <span style={{ color: "var(--hint)" }}><ChevronDownIcon /></span>
          </div>

          {/* Breadcrumb — shows current page on mobile */}
          <span style={styles.breadcrumb}>{pageLabel}</span>

          <div style={{ flex: 1 }} />

          {/* Credits pill */}
          <div style={styles.creditsPill}>
            <span style={styles.freeBadge}>FREE</span>
            <span style={styles.creditsText}>Admin Panel</span>
          </div>

          {/* System status dot */}
          <div style={styles.statusDot} title="All systems operational">
            <span style={styles.statusGreen} />
            <span style={styles.statusLabel}>All systems up</span>
          </div>

          {/* Theme toggle */}
          <button
            style={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </header>

        {/* ── Page Content ── */}
        <main style={styles.content}>
          {children}
        </main>
      </div>

      <style>{layoutCSS}</style>
    </div>
  );
}

// ─── Inline styles (layout-level only, theme-aware via CSS vars) ──────────────

const styles = {
  shell: {
    display:    "flex",
    minHeight:  "100vh",
    background: "var(--bg)",
    color:      "var(--text)",
    transition: "background 0.2s, color 0.2s",
  },
  sidebar: {
    width:          "var(--sidebar-w, 64px)",
    minHeight:      "100vh",
    background:     "var(--surface)",
    borderRight:    "1px solid var(--border)",
    display:        "flex",
    flexDirection:  "column",
    alignItems:     "center",
    padding:        "16px 0",
    position:       "fixed",
    top: 0, left: 0,
    zIndex: 100,
    gap: 4,
  },
  logo: {
    width: 36, height: 36,
    background:    "var(--text)",
    borderRadius:  10,
    display:       "flex",
    alignItems:    "center",
    justifyContent:"center",
    marginBottom:  20,
    flexShrink:    0,
  },
  navBtn: {
    width: 40, height: 40,
    borderRadius: "var(--radius-sm, 8px)",
    display:       "flex",
    alignItems:    "center",
    justifyContent:"center",
    cursor:        "pointer",
    color:         "var(--muted)",
    border:        "none",
    background:    "transparent",
  },
  main: {
    marginLeft:    64,
    flex:          1,
    display:       "flex",
    flexDirection: "column",
    minHeight:     "100vh",
  },
  topbar: {
    height:        56,
    background:    "var(--surface)",
    borderBottom:  "1px solid var(--border)",
    display:       "flex",
    alignItems:    "center",
    padding:       "0 28px",
    gap:           14,
    position:      "sticky",
    top: 0,
    zIndex: 50,
  },
  orgWrap: {
    display:    "flex",
    alignItems: "center",
    gap:        8,
    fontSize:   13,
    fontWeight: 500,
    color:      "var(--text)",
  },
  orgIcon: {
    width:          24,
    height:         24,
    borderRadius:   6,
    background:     "var(--surface2)",
    border:         "1px solid var(--border)",
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
    fontSize:       11,
    fontWeight:     600,
  },
  orgName: { fontSize: 13, fontWeight: 600 },
  breadcrumb: {
    fontSize:   13,
    color:      "var(--hint)",
    display:    "none",    // shown via CSS on mobile
  },
  creditsPill: {
    display:       "flex",
    alignItems:    "center",
    gap:           6,
    background:    "var(--surface2)",
    border:        "1px solid var(--border)",
    borderRadius:  20,
    padding:       "5px 12px",
    fontSize:      12,
    fontWeight:    500,
    color:         "var(--text)",
  },
  freeBadge: {
    background:    "var(--text)",
    color:         "var(--bg)",
    fontSize:      10,
    fontWeight:    600,
    padding:       "2px 6px",
    borderRadius:  10,
    letterSpacing: "0.3px",
  },
  creditsText: { fontSize: 12 },
  statusDot: {
    display:    "flex",
    alignItems: "center",
    gap:        6,
  },
  statusGreen: {
    display:       "inline-block",
    width:         7,
    height:        7,
    borderRadius:  "50%",
    background:    "#43a047",
    flexShrink:    0,
  },
  statusLabel: {
    fontSize: 12,
    color:    "var(--muted)",
    whiteSpace: "nowrap",
  },
  themeBtn: {
    width:         34,
    height:        34,
    borderRadius:  8,
    border:        "1px solid var(--border)",
    background:    "var(--surface2)",
    cursor:        "pointer",
    display:       "flex",
    alignItems:    "center",
    justifyContent:"center",
    color:         "var(--muted)",
    transition:    "all 0.15s",
    flexShrink:    0,
  },
  content: {
    padding: 28,
    flex:    1,
  },
};

// ─── CSS (only for interactive states & responsive) ───────────────────────────

const layoutCSS = `
  :root { --sidebar-w: 64px; --radius: 12px; --radius-sm: 8px; }

  .nav-btn {
    width: 40px; height: 40px;
    border-radius: var(--radius-sm);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: var(--muted);
    border: none; background: transparent;
    transition: background 0.15s, color 0.15s;
    position: relative;
  }
  .nav-btn:hover { background: var(--surface2); color: var(--text); }
  .nav-btn--active { background: var(--text) !important; color: var(--bg) !important; }

  .nav-tooltip {
    position: absolute;
    left: calc(100% + 10px);
    background: var(--text);
    color: var(--bg);
    font-size: 11px;
    padding: 4px 8px;
    border-radius: 6px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
    z-index: 200;
  }
  .nav-btn:hover .nav-tooltip { opacity: 1; }

  @media (max-width: 640px) {
    nav[aria-label="Admin navigation"] { display: none; }
    main { padding: 16px !important; }
    .topbar { padding: 0 16px !important; }
  }
  @media (max-width: 640px) {
    [style*="margin-left: 64"] { margin-left: 0 !important; }
  }
`;
