import { useState, useEffect, useCallback } from "react";
import API from "../services/api"; // adjust path as per your project

// ─── Constants ────────────────────────────────────────────────────────────────

const FILTER_OPTIONS = [
  { label: "All time", value: "all" },
  { label: "Today",    value: "today" },
  { label: "Week",     value: "week" },
  { label: "Month",    value: "month" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

const isWithinRange = (dateStr, filter) => {
  const date = new Date(dateStr);
  const now  = Date.now();

  if (filter === "today") {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    return date >= startOfDay;
  }
  if (filter === "week")  return date >= new Date(now - 7  * 86_400_000);
  if (filter === "month") return date >= new Date(now - 30 * 86_400_000);
  return true; // "all"
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function LoadMoreIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14m7-7-7 7-7-7" />
    </svg>
  );
}

// ─── Empty State (no images generated yet) ────────────────────────────────────

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-icon-wrap">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      <h3 className="empty-title">No items found</h3>
      <p className="empty-desc">
        It looks like you haven&apos;t generated anything yet.{" "}
        <a href="/studio" className="empty-link">Head to the studio</a>{" "}
        to start creating.
      </p>
    </div>
  );
}

// ─── No Search Results ────────────────────────────────────────────────────────

function NoResults({ query }) {
  return (
    <div className="no-results">
      <p>
        No images match <strong>&ldquo;{query}&rdquo;</strong>. Try a different search.
      </p>
    </div>
  );
}

// ─── Skeleton Card (loading state) ───────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="img-card skeleton-card">
      <div className="img-area skeleton-area" />
      <div className="card-body">
        <div className="skeleton-line wide" />
        <div className="skeleton-line narrow" />
      </div>
    </div>
  );
}

// ─── Image Card ───────────────────────────────────────────────────────────────

function ImageCard({ item }) {
  const [hovered, setHovered] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href     = item.imageUrl;
    link.download = item.productName || "generated-image";
    link.click();
  };

  return (
    <div
      className={`img-card${hovered ? " hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Area */}
      <div className="img-area">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.productName || "Generated image"}
            className="img-actual"
            loading="lazy"
          />
        ) : (
          <div className="img-placeholder">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            <span>{item.productName}</span>
          </div>
        )}

        {/* Overlay Actions */}
        <div className="card-overlay">
          <button className="btn-dl" onClick={handleDownload}>
            <DownloadIcon />
            Download
          </button>
          <button className="btn-edit" aria-label="Edit">
            <EditIcon />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <p className="card-prompt">{item.productName || "Untitled"}</p>
        <div className="card-meta">
          <span className="size-tag">{item.size || "Generated"}</span>
          <span className="card-date">{formatDate(item.createdAt)}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const PAGE_SIZE = 12;

export default function ImageGallery() {
  const [history,   setHistory  ] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error,     setError    ] = useState(null);
  const [filter,    setFilter   ] = useState("all");
  const [search,    setSearch   ] = useState("");
  const [visible,   setVisible  ] = useState(PAGE_SIZE);

  // ── Fetch history from backend ─────────────────────────────────────────────
  const fetchHistory = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await API.get("/history");
      setHistory(res.data ?? []);
    } catch (err) {
      console.error("Gallery fetch error:", err);
      setError("Failed to load your gallery. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  // ── Filtering logic ────────────────────────────────────────────────────────
  const filtered = history.filter((item) => {
    if (!isWithinRange(item.createdAt, filter)) return false;
    if (search && !item.productName?.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const shown   = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleFilterChange = (value) => {
    setFilter(value);
    setVisible(PAGE_SIZE);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setVisible(PAGE_SIZE);
  };

  // ── Render states ──────────────────────────────────────────────────────────
  const isEmpty   = !isLoading && !error && history.length === 0;
  const noResults = !isLoading && !error && history.length > 0 && shown.length === 0;

  return (
    <>
      <style>{galleryStyles}</style>

      <div className="gallery-root">

        {/* ── Header ── */}
        <div className="gallery-head">
          <h1>Your image gallery</h1>
          <p>Browse, download, and remix your AI‑generated creations</p>
        </div>

        {/* ── Filters ── */}
        <div className="filters-wrap">
          <div className="search-box">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search your images..."
              value={search}
              onChange={handleSearchChange}
              disabled={isLoading || isEmpty}
            />
          </div>

          <div className="pills">
            {FILTER_OPTIONS.map(({ label, value }) => (
              <button
                key={value}
                className={`pill${filter === value ? " active" : ""}`}
                onClick={() => handleFilterChange(value)}
                disabled={isLoading || isEmpty}
              >
                {label}
              </button>
            ))}
          </div>

          {!isEmpty && !isLoading && (
            <div className="img-count">
              <strong>{filtered.length}</strong>
              <span>images</span>
            </div>
          )}
        </div>

        <hr className="divider" />

        {/* ── Body ── */}
        {error ? (
          <div className="error-state">
            <p>{error}</p>
            <button className="btn-retry" onClick={fetchHistory}>Retry</button>
          </div>
        ) : isLoading ? (
          <div className="grid-wrap">
            <div className="img-grid">
              {Array.from({ length: PAGE_SIZE }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        ) : isEmpty ? (
          <EmptyState />
        ) : (
          <>
            <div className="grid-wrap">
              <div className="img-grid">
                {noResults ? (
                  <NoResults query={search} />
                ) : (
                  shown.map((item) => (
                    <ImageCard key={item.id} item={item} />
                  ))
                )}
              </div>
            </div>

            {hasMore && (
              <div className="load-more-wrap">
                <button
                  className="btn-load-more"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                >
                  <LoadMoreIcon />
                  Load more
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const galleryStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── Root ── */
  .gallery-root {
    min-height: 100vh;
    background: #f7f6f3;
    font-family: 'DM Sans', sans-serif;
    color: #1a1a18;
    padding: 0 0 80px;
  }

  /* ── Header ── */
  .gallery-head {
    padding: 52px 40px 0;
    max-width: 1200px;
    margin: 0 auto;
  }
  .gallery-head h1 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 400;
    color: #1a1a18;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 6px;
  }
  .gallery-head p {
    font-size: 15px;
    color: #6b6b67;
    font-weight: 300;
    letter-spacing: 0.01em;
  }

  /* ── Filters ── */
  .filters-wrap {
    max-width: 1200px;
    margin: 32px auto 0;
    padding: 0 40px;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .search-box {
    position: relative;
    flex: 1;
    min-width: 200px;
    max-width: 360px;
  }
  .search-box svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #9e9e98;
    pointer-events: none;
  }
  .search-box input {
    width: 100%;
    height: 40px;
    padding: 0 14px 0 40px;
    font-size: 13.5px;
    font-family: 'DM Sans', sans-serif;
    background: #fff;
    border: 1px solid #e2e1dc;
    border-radius: 10px;
    color: #1a1a18;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .search-box input::placeholder { color: #aeada6; }
  .search-box input:focus {
    border-color: #b8b3e8;
    box-shadow: 0 0 0 3px rgba(83,74,183,0.08);
  }
  .search-box input:disabled { opacity: 0.5; cursor: not-allowed; }

  .pills { display: flex; gap: 6px; flex-wrap: wrap; }
  .pill {
    height: 36px;
    padding: 0 16px;
    border-radius: 999px;
    border: 1px solid #e2e1dc;
    background: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: #6b6b67;
    cursor: pointer;
    transition: all 0.15s;
    white-space: nowrap;
  }
  .pill:hover:not(:disabled) { border-color: #c4c3bc; color: #1a1a18; }
  .pill.active { background: #1a1a18; border-color: #1a1a18; color: #fff; }
  .pill:disabled { opacity: 0.4; cursor: not-allowed; }

  .img-count { margin-left: auto; text-align: right; white-space: nowrap; }
  .img-count strong { display: block; font-size: 20px; font-weight: 500; line-height: 1; color: #1a1a18; }
  .img-count span { font-size: 11.5px; color: #9e9e98; text-transform: uppercase; letter-spacing: 0.06em; }

  /* ── Divider ── */
  .divider {
    max-width: 1200px;
    margin: 24px auto 0;
    padding: 0 40px;
    border: none;
    border-top: 1px solid #e2e1dc;
  }

  /* ── Grid ── */
  .grid-wrap {
    max-width: 1200px;
    margin: 28px auto 0;
    padding: 0 40px;
  }
  .img-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }

  /* ── Card ── */
  .img-card {
    background: #fff;
    border: 1px solid #e8e7e2;
    border-radius: 14px;
    overflow: hidden;
    transition: border-color 0.2s, transform 0.25s, box-shadow 0.25s;
    cursor: default;
  }
  .img-card.hovered {
    border-color: #d0cfc8;
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.07);
  }
  .img-area {
    aspect-ratio: 1 / 1;
    position: relative;
    background: #f0efe9;
    overflow: hidden;
  }
  .img-actual {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .img-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
  }
  .img-placeholder svg  { color: #c4c3bc; }
  .img-placeholder span {
    font-size: 11px;
    color: #b0afa8;
    text-align: center;
    line-height: 1.45;
    font-style: italic;
  }
  .card-overlay {
    position: absolute;
    inset: 0;
    background: rgba(26,26,24,0.52);
    display: flex;
    align-items: flex-end;
    padding: 10px;
    gap: 7px;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .img-card.hovered .card-overlay { opacity: 1; }

  .btn-dl {
    flex: 1;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: #fff;
    border: none;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 12.5px;
    font-weight: 500;
    color: #1a1a18;
    cursor: pointer;
    transition: background 0.15s;
  }
  .btn-dl:hover { background: #f0efe9; }

  .btn-edit {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    transition: background 0.15s;
  }
  .btn-edit:hover { background: rgba(255,255,255,0.25); }

  .card-body { padding: 11px 13px 13px; }
  .card-prompt {
    font-size: 12.5px;
    color: #3a3a37;
    line-height: 1.45;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 8px;
  }
  .card-meta { display: flex; align-items: center; justify-content: space-between; }
  .size-tag {
    font-size: 10.5px;
    padding: 3px 9px;
    border-radius: 999px;
    background: #f0efe9;
    color: #6b6b67;
    font-weight: 500;
    letter-spacing: 0.01em;
  }
  .card-date { font-size: 10.5px; color: #aeada6; }

  /* ── Skeleton ── */
  @keyframes shimmer {
    0%   { background-position: -600px 0; }
    100% { background-position:  600px 0; }
  }
  .skeleton-area {
    animation: shimmer 1.4s infinite linear;
    background: linear-gradient(90deg, #ededea 25%, #e0dfdb 50%, #ededea 75%);
    background-size: 600px 100%;
  }
  .skeleton-line {
    height: 10px;
    border-radius: 6px;
    margin-bottom: 8px;
    animation: shimmer 1.4s infinite linear;
    background: linear-gradient(90deg, #ededea 25%, #e0dfdb 50%, #ededea 75%);
    background-size: 600px 100%;
  }
  .skeleton-line.wide  { width: 85%; }
  .skeleton-line.narrow { width: 50%; }

  /* ── Empty State ── */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 20px;
    text-align: center;
  }
  .empty-icon-wrap {
    width: 72px;
    height: 72px;
    border-radius: 18px;
    background: #ededea;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: #9e9e98;
  }
  .empty-title {
    font-family: 'DM Serif Display', serif;
    font-size: 24px;
    font-weight: 400;
    color: #1a1a18;
    margin-bottom: 10px;
  }
  .empty-desc {
    font-size: 14.5px;
    color: #6b6b67;
    line-height: 1.6;
    max-width: 360px;
    font-weight: 300;
  }
  .empty-link {
    color: #1a1a18;
    text-decoration: underline;
    text-underline-offset: 3px;
    font-weight: 400;
  }

  /* ── No Results ── */
  .no-results {
    grid-column: 1 / -1;
    padding: 60px 20px;
    text-align: center;
  }
  .no-results p   { font-size: 14px; color: #9e9e98; }
  .no-results strong { color: #3a3a37; }

  /* ── Error State ── */
  .error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding: 80px 20px;
    text-align: center;
  }
  .error-state p { font-size: 14px; color: #b05050; }
  .btn-retry {
    height: 36px;
    padding: 0 20px;
    background: #1a1a18;
    color: #f7f6f3;
    border: none;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s;
  }
  .btn-retry:hover { background: #2e2e2b; }

  /* ── Load More ── */
  .load-more-wrap {
    max-width: 1200px;
    margin: 36px auto 0;
    padding: 0 40px;
    text-align: center;
  }
  .btn-load-more {
    height: 42px;
    padding: 0 32px;
    background: #1a1a18;
    color: #f7f6f3;
    border: none;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.15s, transform 0.15s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .btn-load-more:hover { background: #2e2e2b; transform: translateY(-1px); }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .gallery-head, .filters-wrap, .divider, .grid-wrap, .load-more-wrap { padding-left: 20px; padding-right: 20px; }
    .search-box { max-width: 100%; }
    .img-count  { display: none; }
    .img-grid   { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  }
  @media (max-width: 420px) {
    .img-grid        { grid-template-columns: 1fr 1fr; gap: 10px; }
    .gallery-head h1 { font-size: 28px; }
    .pills           { gap: 5px; }
    .pill            { height: 32px; padding: 0 13px; font-size: 12px; }
  }
`;
