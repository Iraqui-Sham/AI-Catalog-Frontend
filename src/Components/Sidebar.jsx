import React, { useState, useRef, useEffect } from 'react';
import {
  Home,
  Sparkles,
  Image as ImageIcon,
  CreditCard,
  MessageCircle,
  HelpCircle,
  Settings,
  LogOut,
  Store,
  ArrowUpCircle
} from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { createPortal } from "react-dom";

const navItems = [
  { id: 'Home', icon: Home, label: 'Home', path: '/dashboard' },
  { id: 'Studio', icon: Sparkles, label: 'Studio', path: '/studio' },
  { id: 'Gallery', icon: ImageIcon, label: 'Gallery', path: '/gallery' },
  { id: 'Billing', icon: CreditCard, label: 'Billing', path: '/billing' },
  { id: 'Chat', icon: MessageCircle, label: 'Chat', path: '/chat' },
  { id: 'Help', icon: HelpCircle, label: 'Help Center', path: '/help' },
];

function DropdownItem({ icon: Icon, label, className = "" }) {
  return (
    <button
      className={`
        group w-full flex items-center gap-3 px-3 py-2 text-[13px]
        rounded-lg transition-all duration-200
        hover:bg-slate-100 
        hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]
        hover:scale-[1.02]
        active:scale-[0.98]
        ${className}
      `}
    >
      <Icon size={16} className="text-slate-500 group-hover:text-black transition" />
      <span className="flex-1 text-left">{label}</span>
    </button>
  );
}

export default function Sidebar({ isCollapsed }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef();
  const dropdownRef = useRef();


  // 👉 POSITION CALCULATION (REAL FIX)
  const handleToggle = () => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();

      setPos({
        top: rect.top + window.scrollY,
        left: rect.right + window.scrollX + 8,
      });
    }
    setOpen(!open);
  };

  // 👉 CLICK OUTSIDE
  useEffect(() => {
    const handleClick = (e) => {
      if (!btnRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-white/90 backdrop-blur-xl border-r border-slate-200">

      {/* LOGO */}
      <div className="h-20 flex items-center justify-center border-b border-slate-200">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-200/30">
          <Sparkles className="text-white w-5 h-5" />
        </div>
      </div>

      {/* NAV - NO SCROLL */}
      <nav className="flex-1 overflow-hidden px-3 py-6 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-slate-100 text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon size={20} className="flex-shrink-0" />
              {!isCollapsed && (
                <span className="text-sm font-medium truncate">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* PROFILE - COMPACT */}
      <div className="px-3 py-4 flex justify-center">
        <button
          ref={btnRef}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const dropdownWidth = 220;
            const dropdownHeight = dropdownRef.current?.offsetHeight || 400;

            let top = rect.bottom + window.scrollY - dropdownHeight;
            let left = rect.right + window.scrollX + 8;

            if (top < 10) top = 10;
            if (top + dropdownHeight > window.innerHeight + window.scrollY) {
              top = window.innerHeight + window.scrollY - dropdownHeight - 10;
            }
            if (left + dropdownWidth > window.innerWidth) {
              left = rect.left - dropdownWidth - 8;
            }

            setPos({ top, left });
            setOpen((prev) => !prev);
          }}
          className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 hover:border-slate-300 transition-all active:scale-95 flex-shrink-0"
        >
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* PROFILE DROPDOWN MENU */}
      {open && createPortal(
        <div
          ref={dropdownRef}
          style={{
            top: pos.top,
            left: pos.left,
          }}
          className="fixed w-[240px] bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-[9999] animate-in fade-in duration-150"
        >
          <div className="px-4 py-3 border-b border-slate-100">
            <p className="text-sm font-semibold text-slate-900">Shamsher Alam</p>
            <p className="text-xs text-slate-500 truncate">alammdshamsher956@gmail.com</p>
          </div>

          <div className="px-1 py-1">
            <DropdownItem icon={ArrowUpCircle} label="Subscribe" />
            <DropdownItem icon={CreditCard} label="Billing" />
          </div>

          <div className="h-px bg-slate-100 mx-2 my-1" />

          <div className="px-3 py-2 text-xs text-slate-500 font-bold uppercase tracking-wide">Organization</div>
          <div className="px-4 py-2 flex items-center gap-2 text-sm text-slate-700">
            <Store size={16} className="text-slate-400" />
            <span>My Fashion Shop</span>
          </div>

          <div className="h-px bg-slate-100 mx-2 my-1" />

          <div className="px-1 py-1">
            <DropdownItem icon={MessageCircle} label="Chat with us" />
            <DropdownItem icon={HelpCircle} label="Help Center" />
            <DropdownItem icon={Settings} label="Update Profile" />
          </div>

          <div className="h-px bg-slate-100 mx-2 my-1" />

          <div className="px-1 py-1">
            <DropdownItem icon={LogOut} label="Logout" className="text-red-500 hover:bg-red-50" />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}