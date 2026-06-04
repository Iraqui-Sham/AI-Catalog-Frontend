// src/admin/AdminApp.jsx
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout    from "./components/AdminLayout";
import AdminRoute     from "./components/AdminRoute";
import AdminLogin     from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Users          from "./pages/Users";

export default function AdminApp() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div data-theme={theme} style={{ minHeight: "100vh" }}>
      <Routes>

        <Route index element={<AdminRoute><Navigate to="/admin/dashboard" replace /></AdminRoute>} />

        {/* ── Public: /admin/login ── */}
        <Route path="login" element={<AdminLogin />} />

        {/* ── Protected: /admin/dashboard ── */}
        <Route
          path="dashboard"
          element={
            <AdminRoute>
              <AdminLayout theme={theme} toggleTheme={toggleTheme}>
                <AdminDashboard />
              </AdminLayout>
            </AdminRoute>
          }
        />

        {/* ── Protected: /admin/users ── */}
        <Route
          path="users"
          element={
            <AdminRoute>
              <AdminLayout theme={theme} toggleTheme={toggleTheme}>
                <Users />
              </AdminLayout>
            </AdminRoute>
          }
        />

        {/* ── /admin or /admin/* → check auth then redirect ── */}
        <Route
          index
          element={
            <AdminRoute>
              <Navigate to="/admin/dashboard" replace />
            </AdminRoute>
          }
        />
        <Route
          path="*"
          element={
            <AdminRoute>
              <Navigate to="/admin/dashboard" replace />
            </AdminRoute>
          }
        />

      </Routes>
    </div>
  );
}
