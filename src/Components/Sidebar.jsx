// components/Sidebar.jsx
import { useState } from 'react';

const menuItems = [
  { icon: '📊', label: 'Overview', href: '/' },
  { icon: '🎨', label: 'Studio', href: '/studio' },
  { icon: '🖼️', label: 'Images', href: '/images' },
  { icon: '📜', label: 'History', href: '/history' },
  { icon: '💳', label: 'Billing', href: '/billing' },
  { icon: '👤', label: 'Profile', href: '/profile' },
  { icon: '❓', label: 'Help', href: '/help' },
];

export default function Sidebar({ isOpen, onToggle }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden" 
          onClick={onToggle}
        />
      )}
      
      <aside className={`
        fixed left-0 top-0 z-50 h-full w-64 bg-white/80 backdrop-blur-xl 
        border-r border-gray-200 shadow-xl transition-all duration-300
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:w-20 lg:hover:w-64 lg:group-hover:w-64
      `}>
        {/* Mobile toggle button */}
        <div className="lg:hidden p-4">
          <button
            onClick={onToggle}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <nav className="mt-8 space-y-2 px-4">
          {menuItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`
                flex items-center space-x-3 p-3 rounded-xl transition-all duration-200
                group hover:bg-orange-50 hover:text-orange-600
                ${index === 0 ? 'bg-gradient-to-r from-orange-50 to-orange-100 text-orange-600 border border-orange-200' : 'text-gray-600 hover:shadow-md'}
              `}
            >
              <span className="w-8 flex-shrink-0 text-xl">{item.icon}</span>
              <span className="font-medium whitespace-nowrap lg:group-hover:block hidden">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}