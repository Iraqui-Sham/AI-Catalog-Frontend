import React, { useEffect } from 'react';

export default function ResultModal({ result, onClose }) {
  if (!result) return null;

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = result.image;
    a.download = `${result.name}-result.jpg`;
    a.click();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ animation: 'studioFadeUp 0.25s ease both' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[6px]"
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className="relative bg-white/85 backdrop-blur-2xl rounded-[32px] border border-white/60 w-full max-w-[30rem] max-h-[92vh] overflow-y-auto flex flex-col"
        style={{
          boxShadow: '0 24px 80px rgba(0,0,0,0.22)',
          animation: 'studioFadeUp 0.3s cubic-bezier(0.22,1,0.36,1) both',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
          <div>
            <h3 className="text-[0.9375rem] font-bold text-gray-900 leading-snug">
              {result.name} — Results
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              {new Date(result.timestamp).toLocaleString(undefined, {
                dateStyle: 'medium', timeStyle: 'short',
              })}
            </p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 hover:border-gray-300 transition-all duration-150 whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download All
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700 flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 flex-1">
          <div
            className="rounded-2xl border border-gray-100 overflow-hidden"
            style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#f1f5f9]">
              <img
                src={result.image}
                alt={result.name}
                className="w-full object-contain"
                style={{ maxHeight: '18rem', display: 'block', margin: '0 auto' }}
              />
              {/* Badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-emerald-500 text-white text-[0.6875rem] font-bold px-2.5 py-1 rounded-full shadow-sm">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                1/1
              </div>
            </div>

            {/* Card footer */}
            <div className="px-4 py-4 bg-white border-t border-gray-100">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <p className="text-[0.875rem] font-bold text-gray-900 leading-snug">{result.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Total images: 1 &bull; 100% done</p>
                </div>
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[0.6875rem] font-bold px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  Complete
                </span>
              </div>
              <div className="flex gap-2.5">
                <button
                  onClick={() => window.open(result.image, '_blank')}
                  className="flex items-center justify-center gap-1.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl py-2.5 flex-1 hover:bg-gray-50 hover:border-gray-300 transition-all duration-150"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View in New Tab
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center gap-1.5 text-sm font-bold text-white bg-gray-900 rounded-xl py-2.5 flex-1 hover:bg-gray-700 transition-all duration-150"
                  style={{ boxShadow: '0 3px 10px rgba(17,24,39,0.18)' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
