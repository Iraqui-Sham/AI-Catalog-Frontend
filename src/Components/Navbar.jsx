// components/Navbar.jsx
import { useState } from 'react';

export default function Navbar({ credits = 847, maxCredits = 1000 }) {
  const [search, setSearch] = useState('');

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Search/Prompt Input */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Type your prompt here..."
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-2xl bg-gray-50/50 
                          focus:ring-2 focus:ring-orange-500 focus:border-orange-500 
                          transition-all duration-200 shadow-sm text-lg"
              />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Credits */}
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center p-3 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-bold text-orange-600">{credits}</span>
                <span className="text-sm text-gray-500">/ {maxCredits}</span>
              </div>
              <div className="w-20 bg-gray-200 rounded-full h-2 mt-1 overflow-hidden">
                <div 
                  className="h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500"
                  style={{ width: `${(credits / maxCredits) * 100}%` }}
                />
              </div>
            </div>

            {/* Upgrade Button */}
            <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transform hover:-translate-y-0.5 transition-all duration-200">
              Upgrade
            </button>

            {/* Profile Avatar */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-semibold text-sm">JD</span>
              </div>
              <svg className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}