// src/admin/pages/AdminLogin.jsx
// Separate admin login — POST /admin/login
// On success: saves token + role="ADMIN" → redirects to /admin/dashboard

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await API.post("/admin/login", form);
      const { token, role } = res.data;

      // ── Save to localStorage ──────────────────────────────────────────────
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);   // must be "ADMIN"

      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid credentials. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{loginCSS}</style>
      <div className="login-shell">
        <div className="login-card">

          {/* Logo */}
          <div className="login-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>

          <h1 className="login-title">Admin Console</h1>
          <p className="login-sub">FitVision — restricted access</p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="field-wrap">
              <label className="field-label" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input"
                placeholder="admin@fitvision.com"
                value={form.email}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>

            <div className="field-wrap">
              <label className="field-label" htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                className="field-input"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className="login-error">{error}</p>}

            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="login-back">
            <a href="/" className="login-back-link">← Back to site</a>
          </p>
        </div>
      </div>
    </>
  );
}

const loginCSS = `
  .login-shell {
    min-height: 100vh;
    background: #f5f0eb;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    font-family: 'Inter', system-ui, sans-serif;
  }
  .login-card {
    background: #fff;
    border: 1px solid rgba(0,0,0,0.09);
    border-radius: 16px;
    padding: 40px 36px;
    width: 100%;
    max-width: 380px;
    text-align: center;
  }
  .login-logo {
    width: 44px; height: 44px;
    background: #1a1a1a;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 20px;
  }
  .login-title {
    font-size: 20px; font-weight: 700;
    color: #1a1a1a; margin-bottom: 4px;
    font-family: 'Playfair Display', Georgia, serif;
  }
  .login-sub  { font-size: 13px; color: #9a948e; margin-bottom: 28px; }
  .login-form { text-align: left; display: flex; flex-direction: column; gap: 16px; }
  .field-wrap { display: flex; flex-direction: column; gap: 5px; }
  .field-label { font-size: 12px; font-weight: 500; color: #6b6460; text-transform: uppercase; letter-spacing: 0.5px; }
  .field-input {
    height: 40px; padding: 0 12px;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 9px;
    background: #f9f7f5; color: #1a1a1a;
    font-size: 14px; font-family: inherit;
    outline: none; transition: border-color 0.15s;
  }
  .field-input:focus { border-color: #1a1a1a; }
  .login-error { font-size: 13px; color: #c62828; background: #fdecea; padding: 8px 12px; border-radius: 8px; }
  .login-btn {
    height: 42px; background: #1a1a1a; color: #fff;
    border: none; border-radius: 10px;
    font-size: 14px; font-weight: 600; font-family: inherit;
    cursor: pointer; transition: opacity 0.15s; margin-top: 4px;
  }
  .login-btn:hover:not(:disabled) { opacity: 0.85; }
  .login-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .login-back { margin-top: 20px; font-size: 13px; }
  .login-back-link { color: #9a948e; text-decoration: none; }
  .login-back-link:hover { color: #1a1a1a; }
`;
