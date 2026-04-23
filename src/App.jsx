import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
import Upload from "./Pages/Upload";
import Result from "./Pages/Result";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import Studio from "./pages/Studio";
import Images from "./pages/Images";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import PublicLayout from "./layouts/PublicLayout";
import MainLayout from "./layouts/MainLayout";

function App() {

  const [count, setCount] = useState(0)

  const location = useLocation();

  const hideHeaderRoutes = [
    "/dashboard",
    "/studio",
    "/images",
    "/billing",
    "/profile",
    "/upload",
    "/result"
  ];

  const shouldHideHeader = hideHeaderRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <>

      {!shouldHideHeader && <Header />}

      <Routes>
        <Route path="/" element={
          <PublicLayout>
            <Homepage />
          </PublicLayout>
        }
        />

        <Route path='/blogs' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/aiproduct' element={<Aiproduct />} />
        <Route path='/aifashion' element={<Aifashion />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createAccount' element={<CreateAccount />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/images" element={<Images />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/upload" element={
          <ProtectedRoute>
            <Upload />
          </ProtectedRoute>
        } />

        <Route path="/result" element={
          <ProtectedRoute>
            <Result />
          </ProtectedRoute>
        } />

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

      </Routes>

      {!shouldHideHeader && <Footer />}

    </>
  )
}
export default App
