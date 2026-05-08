import React, { useState } from 'react';
import { 
  Home, 
  Sparkles, 
  Image as ImageIcon, 
  MoreHorizontal, 
  ArrowUpCircle, 
  CreditCard, 
  User, 
  MessageCircle, 
  HelpCircle, 
  Settings, 
  LogOut,
  X
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

export default function MobileBottomNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: Sparkles, label: 'Studio', path: '/studio' },
    { icon: ImageIcon, label: 'Gallery', path: '/gallery' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* 1. BACKDROP (MINIMAL - ONLY DISMISS) */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[50] transition-opacity"
          onClick={toggleMenu}
        />
      )}

      {/* 2. FLOATING DROPDOWN CARD (COMPACT POPUP - BOTTOM RIGHT) */}
      <div 
        className={`fixed bottom-[88px] right-4 z-[65] w-[280px] bg-white rounded-xl shadow-lg transition-all duration-300 ease-out border border-slate-200 overflow-hidden ${
          isMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* HEADER SECTION */}
        <div className="px-5 pt-5 pb-4 flex justify-between items-start">
          <div className="overflow-hidden">
            <h3 className="text-[16px] font-bold text-slate-900 leading-tight">Shamsher Alam</h3>
            <p className="text-[12px] text-slate-400 truncate">alammdshamsher956@gmail.com</p>
          </div>
          {/* <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md shrink-0">10 credits</span> */}
        </div>

        <div className="h-[1px] bg-slate-100 mx-4" />

        {/* SECTION 1: SUBSCRIPTION */}
        <div className="p-2 space-y-0.5">
          <DropdownItem icon={<ArrowUpCircle size={19} />} label="Subscribe" />
          <DropdownItem icon={<CreditCard size={19} />} label="Billing" />
        </div>

        <div className="h-[1px] bg-slate-100 mx-4" />

        {/* SECTION 2: ORGANIZATION */}
        <div className="px-5 py-3">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Organization</p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
              <User size={18} />
            </div>
            <span className="text-[14px] font-semibold text-slate-800 truncate">Shamsher Alam's Shop</span>
          </div>
        </div>

        <div className="h-[1px] bg-slate-100 mx-4" />

        {/* SECTION 3: HELP & PROFILE */}
        <div className="p-2 space-y-0.5">
          {/* <DropdownItem icon={<MessageCircle size={19} />} label="Chat with us" /> */}
          <DropdownItem icon={<HelpCircle size={19} />} label="Help Center" />
          <DropdownItem icon={<Settings size={19} />} label="Update Profile" />
          <DropdownItem icon={<LogOut size={19} />} label="Logout" variant="danger" />
        </div>

        {/* CLOSE BUTTON */}
        <button 
          onClick={toggleMenu}
          className="w-full flex justify-center pb-3 text-slate-300 active:text-slate-500"
        >
          <X size={20} strokeWidth={3} />
        </button>
      </div>

      {/* 3. BOTTOM NAVBAR - FIXED */}
      <div className="flex items-center justify-around py-3 px-2 h-[72px] flex-shrink-0">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={() => 
                `flex flex-col items-center gap-1 transition-all ${
                  isActive ? 'text-black' : 'text-slate-400'
                }`
              }
            >
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[11px] font-bold">{item.label}</span>
            </NavLink>
          );
        })}

        <button 
          onClick={toggleMenu}
          className={`flex flex-col items-center gap-1 transition-all ${
            isMenuOpen ? 'text-black' : 'text-slate-400'
          }`}
        >
          <MoreHorizontal size={22} strokeWidth={isMenuOpen ? 2.5 : 2} />
          <span className="text-[11px] font-bold">More</span>
        </button>
      </div>
    </>
  );
}

function DropdownItem({ icon, label, variant = "default" }) {
  const isDanger = variant === "danger";
  return (
    <button className="w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-all active:scale-[0.98]">
      <span className={isDanger ? 'text-red-500' : 'text-slate-500'}>{icon}</span>
      <span className={`text-[14px] font-semibold ${isDanger ? 'text-red-500' : 'text-slate-700'}`}>
        {label}
      </span>
    </button>
  );
}