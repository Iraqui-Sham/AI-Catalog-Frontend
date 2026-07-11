import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    //{ name: "AI Fashion", path: "/aifashion" },
    { name: "Blog", path: "/blogs" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact us", path: "/contact" },
  ];

  // Lock body scroll when the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 group cursor-pointer no-underline">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-7 sm:h-8 bg-gradient-to-b from-brand-500 to-pink-600 rounded-full shadow-[0_0_10px_rgba(240,90,26,0.35)]"></div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                  FitVeSion<span className="italic font-light text-brand-500">AI</span>
                </h1>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.filter((link) => link.name !== "Contact us").map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-semibold tracking-wide rounded-full transition-all duration-200 ${isActive
                      ? "text-brand-600 bg-brand-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-500" />
                    )}
                  </Link>
                );
              })}
              <div className="h-4 w-[1px] bg-slate-300 mx-2"></div>
              {navLinks.filter((link) => link.name === "Contact us").map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${location.pathname === link.path ? "text-brand-600" : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/login" className="text-sm font-bold text-slate-600 px-4 py-2 hover:text-slate-900">Log in</Link>
              <button onClick={() => navigate("/createAccount")} className="bg-brand-500 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-orange-200">
                Try for Free
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE DRAWER BACKDROP --- */}
      <div
        onClick={closeMenu}
        className={`md:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-[2px] z-[105] transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* --- MOBILE SLIDE-IN DRAWER --- */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[78%] max-w-[300px] bg-white z-[110] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-100 flex-shrink-0">
          <h2 className="text-lg font-black tracking-tight text-slate-900">
            FitVeSion<span className="italic font-light text-orange-500">AI</span>
          </h2>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="p-2 -mr-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        {/* Drawer Links */}
        <div className="py-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`flex items-center justify-between px-5 py-3.5 text-sm font-semibold border-b border-slate-50 transition-colors ${isActive
                  ? "text-brand-600 bg-brand-50 border-l-[3px] border-l-brand-500"
                  : "text-slate-700 hover:bg-brand-50 hover:text-brand-600 active:bg-brand-50"
                  }`}
              >
                {link.name}
                <svg className={`w-4 h-4 ${isActive ? "text-brand-400" : "text-slate-300"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer — sticky CTA */}
        {/* Drawer Footer — sticky CTA */}
        <div className="flex-shrink-0 border-t border-slate-100 p-5 space-y-2.5 bg-white">
          <Link
            to="/login"
            onClick={closeMenu}
            className="block w-full text-center font-bold text-slate-700 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors"
          >
            Log in
          </Link>
          <button
            onClick={() => {
              closeMenu();
              navigate("/createAccount");
            }}
            className="w-full bg-gradient-to-r from-brand-500 to-brand-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-brand-200 active:scale-[0.98] transition-transform hover:shadow-xl"
          >
            Try for Free
          </button>
        </div>
      </div>
    </>
  );
} 