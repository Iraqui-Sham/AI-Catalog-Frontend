import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import MobileBottomNav from '../Components/MobileBottomNav';

export default function MainLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-full w-full bg-[#F5F5F5]">
      {/* Fixed Navbar at Top */}
      <div className="fixed top-0 left-0 lg:left-16 right-0 z-40">
        <Navbar />
      </div>

      {/* Fixed Sidebar on Desktop */}
      <Sidebar />

      {/* Main Content Area: Scrollable only */}
      <div className="flex-1 flex flex-col min-w-0 h-full pt-[52px] lg:ml-16">
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="w-full">
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