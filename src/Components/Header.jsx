import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "AI Product", path: "/aiproduct" },
    { name: "AI Fashion", path: "/aifashion" },
    { name: "Mockups", path: "/mockups" },
    { name: "Blog", path: "/blogs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact us", path: "/contact" },
  ];

  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer no-underline">
            <div className="flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-pink-600 rounded-full animate-pulse"></div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900">
                FitVeSion<span className="italic font-light text-orange-500">AI</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.slice(0, 4).map((link) => (
              <Link key={link.name} to={link.path} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
                {link.name}
              </Link>
            ))}
            <div className="h-4 w-[1px] bg-slate-300 mx-2"></div>
            {navLinks.slice(4).map((link) => (
              <Link key={link.name} to={link.path} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-sm font-bold text-slate-600 px-4 py-2 hover:text-slate-900">Log in</Link>
            <button onClick={() => navigate("/createAccount")} className="bg-[#f05a1a] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-orange-200">
              Try for Free
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU PANEL --- */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-slate-100 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} // Link click hone par menu band ho jaye
              className="block px-4 py-3 text-base font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-all"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3 px-4">
            <Link to="/login" onClick={() => setIsOpen(false)} className="text-center font-bold text-slate-600 py-2">Log in</Link>
            <button className="w-full bg-[#f05a1a] text-white py-3 rounded-xl font-bold shadow-md">
              Try for Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}