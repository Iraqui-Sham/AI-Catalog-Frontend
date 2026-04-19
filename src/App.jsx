import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/aiproduct' element={<Aiproduct />} />
        <Route path='/aifashion' element={<Aifashion />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createAccount' element={<CreateAccount />} />

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
      <Footer />
    </>
  )
}

export default App
