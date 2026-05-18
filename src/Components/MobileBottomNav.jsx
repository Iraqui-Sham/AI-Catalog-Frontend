import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Home,
  Camera,
  Images,
  MoreHorizontal,
  Code2,
  HelpCircle,
  CreditCard,
  Sun,
  Moon,
  LogOut,
  User,
  ScrollText,
  X,
} from 'lucide-react';

const mainItems = [
  { icon: <Home size={22} />, label: 'Home', path: '/' },
  { icon: <Camera size={22} />, label: 'Studio', path: '/studio' },
  { icon: <Images size={22} />, label: 'Gallery', path: '/gallery' },
  { icon: <MoreHorizontal size={22} />, label: 'More', isMore: true },
];

export default function MobileBottomNav() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const containerRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
    >
      {/* ── MORE POPUP ── */}
      <AnimatePresence>
        {moreOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setMoreOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{
                duration: 0.18,
                ease: 'easeOut',
              }}
              className="absolute bottom-[calc(100%+8px)] right-3 z-50 w-60 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.14)] border border-[#E8E8E8] overflow-hidden"
            >
              {/* Popup header */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#F2F2F2]">
                <span className="text-sm font-semibold text-[#111111] tracking-tight">
                  More
                </span>

                <button
                  onClick={() => setMoreOpen(false)}
                  className="w-6 h-6 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#EBEBEB] active:bg-[#E0E0E0] transition-colors"
                >
                  <X size={11} className="text-[#777777]" />
                </button>
              </div>

              {/* Menu items */}
              <div className="py-1">
                {[
                  { icon: <User size={15} />, label: 'Account' },
                  { icon: <Code2 size={15} />, label: 'API' },
                  { icon: <HelpCircle size={15} />, label: 'Help' },
                  { icon: <CreditCard size={15} />, label: 'Billing' },
                  { icon: <ScrollText size={15} />, label: 'Changelog' },
                ].map((item) => (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-[#222222] hover:bg-[#F7F7F7] active:bg-[#F0F0F0] transition-colors duration-100"
                  >
                    <span className="text-[#888888]">{item.icon}</span>

                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}

                {/* Theme toggle row */}
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3 text-sm text-[#222222]">
                    <span className="text-[#888888]">
                      {darkMode ? (
                        <Moon size={15} />
                      ) : (
                        <Sun size={15} />
                      )}
                    </span>

                    <span className="font-medium">Theme</span>
                  </div>

                  <button
                    onClick={() => setDarkMode((v) => !v)}
                    className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                      darkMode ? 'bg-[#111111]' : 'bg-[#DDDDDD]'
                    }`}
                  >
                    <span
                      className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                        darkMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Logout */}
              <div className="border-t border-[#F2F2F2] py-1">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-[#EF4444] hover:bg-[#FFF5F5] active:bg-[#FEE2E2] transition-colors duration-100">
                  <LogOut size={15} />

                  <span className="font-medium">Log out</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── BOTTOM NAV BAR ── */}
      <nav
        className="relative z-50 bg-white border-t border-[#E8E8E8] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] rounded-t-2xl flex items-center justify-around px-2 pt-2 pb-safe"
        style={{
          paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
        }}
      >
        {mainItems.map((item) => {
          const isActive = item.path
            ? location.pathname === item.path
            : false;

          const isMoreActive = item.isMore && moreOpen;

          return (
            <button
              key={item.label}
              onClick={() => {
                if (item.isMore) {
                  setMoreOpen((v) => !v);
                } else if (item.path) {
                  navigate(item.path);
                }
              }}
              className={`relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-150 min-w-[56px] ${
                isActive || isMoreActive
                  ? 'text-[#111111]'
                  : 'text-[#BBBBBB] hover:text-[#888888] active:text-[#555555]'
              }`}
            >
              {/* Active indicator dot */}
              {(isActive || isMoreActive) && (
                <motion.span
                  layoutId="mobile-nav-active"
                  className="absolute -top-0.5 w-1 h-1 rounded-full bg-[#111111]"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span
                className={`transition-transform duration-150 ${
                  isActive || isMoreActive
                    ? 'scale-110'
                    : 'scale-100'
                }`}
              >
                {item.icon}
              </span>

              <span className="text-[10px] font-semibold tracking-tight leading-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}