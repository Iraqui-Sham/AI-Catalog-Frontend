import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  Home,
  Camera,
  Images,
  MoreHorizontal,
  LogOut,
  User,
  X,
  MessageCircle,
  Zap,
  CreditCard,
} from 'lucide-react';

const mainItems = [
  { icon: <Home size={22} />, label: 'Home', path: '/dashboard' },
  { icon: <Camera size={22} />, label: 'Studio', path: '/studio' },
  { icon: <Images size={22} />, label: 'Gallery', path: '/images' },
];

export default function MobileBottomNav() {

  const [moreOpen, setMoreOpen] = useState(false);

  const containerRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const name = user?.name || "User";
  const email = user?.email || "";

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("credits");

    localStorage.removeItem("user");

    navigate("/login");
  };

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
              {/* Popup header - User Info */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-[#F2F2F2]">
                <div>
                  <p className="text-sm font-bold text-[#111111] tracking-tight">{name}</p>
                  <p className="text-xs text-[#999999] truncate max-w-[160px]">{email}</p>
                </div>

                <button
                  onClick={() => setMoreOpen(false)}
                  className="w-6 h-6 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#EBEBEB] active:bg-[#E0E0E0] transition-colors"
                >
                  <X size={11} className="text-[#777777]" />
                </button>
              </div>

              {/* Menu items */}
              <div className="py-1">

                {/* Update Account */}
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-[#222222] hover:bg-[#F7F7F7] active:bg-[#F0F0F0] transition-colors duration-100"
                  onClick={() => { navigate('/account'); setMoreOpen(false); }}
                >
                  <span className="text-[#888888]"><User size={15} /></span>
                  <span className="font-medium">Update Account</span>
                </button>

                {/* Billing */}
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-[#222222] hover:bg-[#F7F7F7] active:bg-[#F0F0F0] transition-colors duration-100"
                  onClick={() => { navigate('/billing'); setMoreOpen(false); }}
                >
                  <span className="text-[#888888]"><CreditCard size={15} /></span>
                  <span className="font-medium">Billing</span>
                </button>

                {/* Upgrade Plan */}
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] active:scale-[0.98] transition-all duration-200"
                  onClick={() => { navigate('/upgrade'); setMoreOpen(false); }}
                >
                  <div className="flex items-center gap-3">
                    <Zap size={15} className="text-yellow-300" />
                    <span className="font-semibold">Upgrade Plan</span>
                  </div>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full text-white/90">PRO</span>
                </button>

                {/* WhatsApp Support */}
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm text-[#222222] hover:bg-[#F7F7F7] active:bg-[#F0F0F0] transition-colors duration-100"
                  onClick={() => window.open('https://wa.me/919110112197', '_blank')}
                >
                  <span className="text-[#25D366]"><MessageCircle size={15} /></span>
                  <span className="font-medium">WhatsApp Support</span>
                </button>

              </div>

              {/* Logout */}
              <div className="border-t border-[#F2F2F2] py-1">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-[#EF4444] hover:bg-[#FFF5F5] active:bg-[#FEE2E2] transition-colors duration-100" onClick={handleLogout}>
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
        {/* Regular nav items */}
        {mainItems.map((item) => {
          const isActive = item.path
            ? location.pathname === item.path
            : false;

          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-150 min-w-[56px] ${isActive
                ? 'text-[#111111]'
                : 'text-[#666666] hover:text-[#333333] active:text-[#111111]'
                }`}
            >
              {isActive && (
                <motion.span
                  layoutId="mobile-nav-active"
                  className="absolute -top-0.5 w-1 h-1 rounded-full bg-[#111111]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`transition-transform duration-150 ${isActive ? 'scale-110' : 'scale-100'}`}>
                {item.icon}
              </span>
              <span className="text-[10px] font-semibold tracking-tight leading-none">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Avatar Button — More dropdown trigger */}
        <button
          onClick={() => setMoreOpen((v) => !v)}
          className="relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-150 min-w-[56px]"
        >
          {/* Active ring jab dropdown open ho */}
          <div className={`relative transition-all duration-150 ${moreOpen ? 'scale-110' : 'scale-100'}`}>
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-[#C9B99A] to-[#8B7355] flex items-center justify-center transition-all duration-150 ${moreOpen
              ? 'ring-2 ring-[#111111] ring-offset-1'
              : 'ring-2 ring-[#E5E5E5]'
              }`}>
              <span className="text-white text-[11px] font-bold">
                {name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
              </span>
            </div>
          </div>
          <span className={`text-[10px] font-semibold tracking-tight leading-none transition-colors duration-150 ${moreOpen ? 'text-[#111111]' : 'text-[#666666]'
            }`}>
            More
          </span>
        </button>
      </nav>
    </div>
  );
}