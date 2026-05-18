import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  Camera,
  Images,
  Code2,
  HelpCircle,
  User,
  CreditCard,
  LogOut,
  ScrollText,
  Sun,
  Moon,
  FileText,
  Shield,
  Scissors,
} from 'lucide-react';

const navItems = [
  { icon: <Home size={20} />, label: 'Home', path: '/dashboard' },
  { icon: <Camera size={20} />, label: 'Studio', path: '/studio' },
  { icon: <Images size={20} />, label: 'Gallery', path: '/gallery' },
  { icon: <Code2 size={20} />, label: 'API', path: '/api-docs' },
  { icon: <HelpCircle size={20} />, label: 'Help', path: '/help' },
];

export default function Sidebar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const dropdownRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <aside className="fixed left-0 top-0 h-full w-16 bg-white border-r border-[#E5E5E5] flex flex-col items-center py-4 z-40 hidden md:flex">
      {/* Logo */}
      <div className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center mb-6 flex-shrink-0">
        <Scissors size={18} className="text-white rotate-45" />
      </div>

      {/* Nav items */}
      <nav className="flex flex-col items-center gap-1 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <motion.button
              key={item.label}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(item.path)}
              className={`relative w-11 h-11 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all duration-150 group ${
                isActive
                  ? 'bg-[#F0F0F0] text-[#111111]'
                  : 'text-[#AAAAAA] hover:bg-[#F5F5F5] hover:text-[#111111]'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-[#F0F0F0]"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 35,
                  }}
                />
              )}

              <span className="relative z-10">{item.icon}</span>

              <span className="relative z-10 text-[9px] font-medium leading-none">
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </nav>

      {/* Avatar + dropdown */}
      <div className="relative" ref={dropdownRef}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setDropdownOpen((v) => !v)}
          className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#E5E5E5] hover:border-[#111111] transition-colors duration-150 bg-gradient-to-br from-[#C9B99A] to-[#8B7355] flex items-center justify-center"
        >
          <span className="text-white text-xs font-semibold">SA</span>
        </motion.button>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, x: -8, y: 4 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -8, y: 4 }}
              transition={{
                duration: 0.18,
                ease: 'easeOut',
              }}
              className="absolute bottom-0 left-14 w-56 bg-white rounded-2xl shadow-xl border border-[#E5E5E5] overflow-hidden"
            >
              {/* User info */}
              <div className="px-4 py-3 border-b border-[#F0F0F0]">
                <p className="text-sm font-semibold text-[#111111]">
                  Shamsher Alam
                </p>

                <p className="text-xs text-[#999999] truncate">
                  alammdshamsher956@gmail.com
                </p>
              </div>

              {/* Menu items */}
              <div className="py-1.5">
                {[
                  { icon: <User size={14} />, label: 'Account' },
                  { icon: <CreditCard size={14} />, label: 'Billing' },
                  { icon: <LogOut size={14} />, label: 'Log out' },
                  { icon: <ScrollText size={14} />, label: 'Changelog' },
                ].map((item) => (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#333333] hover:bg-[#F5F5F5] transition-colors duration-100"
                  >
                    <span className="text-[#777777]">{item.icon}</span>

                    {item.label}
                  </button>
                ))}

                {/* Theme toggle */}
                <div className="flex items-center justify-between px-4 py-2.5">
                  <div className="flex items-center gap-3 text-sm text-[#333333]">
                    <span className="text-[#777777]">
                      {darkMode ? (
                        <Moon size={14} />
                      ) : (
                        <Sun size={14} />
                      )}
                    </span>

                    Theme
                  </div>

                  <button
                    onClick={() => setDarkMode((v) => !v)}
                    className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${
                      darkMode ? 'bg-[#111111]' : 'bg-[#E5E5E5]'
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                        darkMode ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Footer links */}
              <div className="border-t border-[#F0F0F0] px-4 py-2.5 flex gap-3">
                <button className="flex items-center gap-1.5 text-xs text-[#999999] hover:text-[#333333] transition-colors">
                  <FileText size={11} /> Terms
                </button>

                <button className="flex items-center gap-1.5 text-xs text-[#999999] hover:text-[#333333] transition-colors">
                  <Shield size={11} /> Privacy
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}