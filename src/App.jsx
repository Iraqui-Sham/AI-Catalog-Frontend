// src/App.jsx
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Pricing from './Components/Pricing'
import Aiproduct from './Components/Aiproduct'
import Homepage from './Pages/Homepage'
import Aifashion from './Components/Aifashion'
import Login from './Components/Login'
import CreateAccount from "./Components/CreateAccount"
import Upload from "./Pages/Upload"
import Result from "./Pages/Result"
import Dashboard from "./Pages/Dashboard"
import ProtectedRoute from "./Components/ProtectedRoute"
import Studio from "./pages/Studio"
import Images from "./pages/Images"
import Billing from "./pages/Billing"
import Profile from "./pages/Profile"
import PublicLayout from "./layouts/PublicLayout"
import AccountPage from "./Pages/Account"
import AdminApp from "./admin/AdminApp"

function App() {
  const location = useLocation();

  const hideHeaderRoutes = [
    "/admin",
    "/dashboard",
    "/studio",
    "/images",
    "/billing",
    "/profile",
    "/upload",
    "/result",
    "/account",
    "/login",
    "/createAccount",
    "/admin/login",
  ];

  const shouldHideHeader = hideHeaderRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideHeader && <Header />}

      <div className={!shouldHideHeader ? "pt-16 sm:pt-20 [&>*:first-child>*:first-child]:!pt-0" : ""}>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/aiproduct" element={<Aiproduct />} />
          <Route path="/aifashion" element={<Aifashion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createAccount" element={<CreateAccount />} />

          {/* Admin — single wildcard route, AdminApp handles login + protected internally */}
          {/* CHANGE KARO — dono add karo */}
          <Route path="/admin" element={<AdminApp />} />
          <Route path="/admin/*" element={<AdminApp />} />

          {/* User Protected */}
          <Route path="/studio" element={<ProtectedRoute><Studio /></ProtectedRoute>} />
          <Route path="/images" element={<ProtectedRoute><Images /></ProtectedRoute>} />
          <Route path="/billing" element={<ProtectedRoute><Billing /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
          <Route path="/upload" element={<ProtectedRoute><Upload /></ProtectedRoute>} />
          <Route path="/result" element={<ProtectedRoute><Result /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </div>

      {!shouldHideHeader && <Footer />}
    </>
  );
}

export default App;
