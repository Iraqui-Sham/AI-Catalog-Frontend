import React from "react";
import { Zap, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-16 px-3 md:px-6 flex items-center justify-between gap-4 border-b border-slate-200 bg-white/90 backdrop-blur-md z-40">
      {/* Logo - Left Side */}
      <div className="flex items-center justify-center flex-shrink-0">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md shadow-orange-200/30">
          <Sparkles className="text-white w-5 h-5" />
        </div>
      </div>

      {/* Credits + Upgrade - Right Side */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Free</span>
          <span className="text-xs font-semibold text-slate-700">10 credits</span>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-sm">
          <Zap size={16} />
          <span className="hidden sm:inline">Upgrade</span>
          <span className="sm:hidden">Up</span>
        </button>
      </div>
    </nav>
  );
}
