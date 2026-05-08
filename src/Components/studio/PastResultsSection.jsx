import React, { useState } from 'react';
import ResultModal from './ResultModal';

export default function PastResultsSection({ pastResults, onRefresh }) {
  const [modalResult, setModalResult] = useState(null);
  const [refreshSpin, setRefreshSpin] = useState(false);

  if (!pastResults || pastResults.length === 0) return null;

  const timeAgo = (ts) => {
    const m = Math.floor((Date.now() - ts) / 60000);
    if (m < 1)  return 'just now';
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ago`;
    return `${Math.floor(h / 24)}d ago`;
  };

  const handleRefresh = () => {
    setRefreshSpin(true);
    setTimeout(() => setRefreshSpin(false), 700);
    onRefresh();
  };

  return (
    <>
      <div
        className="mt-12 bg-white/75 backdrop-blur-xl rounded-[32px] border border-white/60 px-7 py-6"
        style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.04)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-[0.9375rem] font-bold text-gray-900">Past Results</h3>
            <p className="text-xs text-gray-400 mt-0.5">{pastResults.length} generation{pastResults.length !== 1 ? 's' : ''}</p>
          </div>
          <button
            onClick={handleRefresh}
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 hover:border-gray-300 transition-all duration-150"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
              style={{ transition: 'transform 0.6s', transform: refreshSpin ? 'rotate(360deg)' : 'rotate(0deg)' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {[...pastResults].reverse().map((result) => (
            <div key={result.id} className="group flex flex-col">
              {/* Image card */}
              <div
                className="relative rounded-xl overflow-hidden aspect-square bg-gray-50 mb-3 border border-gray-100 cursor-pointer"
                style={{ transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={() => setModalResult(result)}
              >
                <img
                  src={result.image}
                  alt={result.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute top-2 right-2 flex items-center gap-1 bg-emerald-500 text-white text-[0.625rem] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  1/1
                </div>
              </div>

              {/* Info */}
              <p className="text-[0.8125rem] font-semibold text-gray-800 truncate leading-snug">{result.name}</p>
              <p className="text-[0.6875rem] text-gray-400 mt-0.5 leading-snug">1 image &bull; {timeAgo(result.timestamp)}</p>

              {/* View button */}
              <button
                onClick={() => setModalResult(result)}
                className="mt-2.5 w-full flex items-center justify-center gap-1.5 text-[0.75rem] font-semibold text-gray-700 border border-gray-200 rounded-xl py-2 hover:bg-gray-50 hover:border-gray-300 transition-all duration-150"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Results
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalResult && <ResultModal result={modalResult} onClose={() => setModalResult(null)} />}
    </>
  );
}
