import React from "react";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="h-20 px-4 md:px-8 flex items-center justify-end gap-4 border-b border-slate-200 bg-white/90 backdrop-blur-md z-40">
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
