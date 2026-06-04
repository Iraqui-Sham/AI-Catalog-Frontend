// src/admin/components/AdminRoute.jsx
// Admin-only protected route.
// Checks localStorage for token AND role === "ADMIN".
// Redirects to /admin/login if not authorized.

import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const role  = localStorage.getItem("role"); // "ADMIN" | "USER"

  // Not logged in at all → admin login page
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Logged in but not admin → back to user dashboard
  if (role !== "ADMIN") {
     return <Navigate to="/admin/login" replace />;
  }

  return children;
}
