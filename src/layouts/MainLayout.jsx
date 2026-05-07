import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import MobileBottomNav from '../Components/MobileBottomNav';

export default function MainLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-full w-full bg-[#F9FAFB]">
      {/* Fixed Navbar at Top */}
      <div className="fixed top-0 left-0 right-0 z-40 lg:left-0">
        <Navbar />
      </div>

      {/* Fixed Sidebar on Desktop */}
      <aside
        className={`hidden lg:flex flex-col fixed left-0 top-20 bottom-0 bg-white border-r border-slate-200 transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-[80px]' : 'w-[180px]'
        }`}
      >
        <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
      </aside>

      {/* Main Content Area: Scrollable only */}
      <div className={`flex-1 flex flex-col min-w-0 h-full pt-20 ${isCollapsed ? 'lg:ml-[80px]' : 'lg:ml-[180px]'} transition-all duration-300 ease-in-out`}>
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="max-w-[1400px] mx-auto p-5 md:p-8 lg:p-10 pb-20 lg:pb-10">
            {children}
          </div>
        </main>

        {/* Mobile Bottom Navigation - Only visible on mobile, positioned above main scroll */}
        <div className="lg:hidden sticky bottom-0 bg-white/80 backdrop-blur-xl border-t border-slate-200 z-40">
          <MobileBottomNav />
        </div>
      </div>
    </div>
  );
}