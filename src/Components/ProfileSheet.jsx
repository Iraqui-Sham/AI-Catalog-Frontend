import React from 'react';
import { 
  ArrowUpCircle, 
  CreditCard, 
  User, 
  MessageCircle, 
  HelpCircle, 
  LogOut, 
  X,
  Settings,
  Store
} from 'lucide-react';

export default function ProfileSheet({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center px-4 pb-20">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Content Card (Matches Fashn AI Dropdown Style) */}
      <div className="relative w-full max-w-sm bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
        
        {/* Header: User Info */}
        <div className="p-6 flex justify-between items-start border-b border-slate-100">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 leading-none">Shamsher Alam</h3>
            <p className="text-xs text-slate-400 mt-1 truncate">alammdshamsher956@gmail.com</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-black text-slate-700">10 credits</span>
          </div>
        </div>

        <div className="p-2 overflow-y-auto max-h-[60vh]">
          {/* Main Actions */}
          <div className="space-y-1">
            <MenuBtn icon={ArrowUpCircle} label="Subscribe" />
            <MenuBtn icon={CreditCard} label="Billing" />
          </div>

          <div className="h-px bg-slate-100 my-2 mx-4" />

          {/* Organization */}
          <div className="px-4 py-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Organization</span>
            <div className="flex items-center gap-3 mt-2 px-1">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                <Store size={18} className="text-slate-600" />
              </div>
              <span className="text-sm font-bold text-slate-900">Shamsher Alam's Shop</span>
            </div>
          </div>

          <div className="h-px bg-slate-100 my-2 mx-4" />

          {/* Secondary Actions */}
          <div className="space-y-1">
            <MenuBtn icon={MessageCircle} label="Chat with us" />
            <MenuBtn icon={HelpCircle} label="Help Center" />
            <MenuBtn icon={Settings} label="Update Profile" />
            <MenuBtn icon={LogOut} label="Logout" variant="danger" />
          </div>
        </div>

        {/* Close Handle / Button */}
        <button 
          onClick={onClose}
          className="w-full py-4 text-slate-400 flex justify-center hover:text-black transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

function MenuBtn({ icon: Icon, label, variant = "default" }) {
  return (
    <button className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-colors hover:bg-slate-50 ${
      variant === 'danger' ? 'text-red-500' : 'text-slate-700'
    }`}>
      <Icon size={20} strokeWidth={2} />
      <span className="text-sm font-bold">{label}</span>
    </button>
  );
}