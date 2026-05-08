import React from 'react';

export default function SummarySection({ selectedProduct, onBack, onStartGeneration }) {
  return (
    <div>
      {/* ── Section header ───────────────────────────────────────────────────── */}
      <div
        className="bg-white/75 backdrop-blur-xl rounded-[28px] border border-white/60 px-7 py-5 mb-6 flex items-center justify-between"
        style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)' }}
      >
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-base">🗂️</div>
            <h2 className="text-[1.0625rem] font-bold text-gray-900">Generation Summary</h2>
          </div>
          <p className="text-sm text-gray-400 ml-[2.375rem]">Review your selections and start the generation process</p>
        </div>
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl px-4 py-2 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] transition-all duration-150"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      {/* ── Two-col cards ────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

        {/* ── Cost Breakdown ── */}
        <div
          className="bg-white/75 backdrop-blur-xl rounded-[28px] border border-white/60 p-6"
          style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.04)' }}
        >
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-sm">💵</div>
            <h3 className="text-[0.9375rem] font-bold text-gray-900">Cost Breakdown</h3>
          </div>

          {/* HD Mode row */}
          <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4 mb-5 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-sm">✨</span>
                <span className="text-sm font-semibold text-gray-800">HD Mode</span>
              </div>
              <p className="text-xs text-gray-400">2K Images & Precision Results (2× Credits)</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs text-gray-400">Off</span>
              <span className="text-[0.6875rem] font-bold text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded-md tracking-wide">2×</span>
              <div className="w-10 h-[1.125rem] bg-gray-200 rounded-full opacity-50 cursor-not-allowed" />
            </div>
          </div>

          {/* Line items */}
          <div className="space-y-3.5 mb-5">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Images to generate</span>
              <span className="text-sm font-bold text-gray-800">1</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Cost per image</span>
              <span className="text-sm font-bold text-gray-800">1.00 Credits</span>
            </div>
            <div className="h-px bg-gray-100" />
            <div className="flex justify-between items-center pt-0.5">
              <span className="text-sm font-bold text-gray-900">Total Cost</span>
              <span className="text-[1.0625rem] font-extrabold text-emerald-600">1.00 Credits</span>
            </div>
          </div>

          {/* Gen info box */}
          <div className="bg-[#eff6ff] border border-blue-100 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-sm">⚡</span>
              <span className="text-[0.8125rem] font-bold text-blue-800">Generation Info</span>
            </div>
            <ul className="space-y-2">
              {[
                'Processed in batches of 5 parallel requests',
                'Estimated time: ~2 minutes',
                'High-quality, commercial-use images',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-blue-400 mt-[0.4rem] flex-shrink-0" />
                  <span className="text-xs text-blue-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Selection Summary ── */}
        <div
          className="bg-white/75 backdrop-blur-xl rounded-[28px] border border-white/60 p-6"
          style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.04)' }}
        >
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-sm">🖼️</div>
            <h3 className="text-[0.9375rem] font-bold text-gray-900">Selection Summary</h3>
          </div>

          {/* Selected product row */}
          <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl mb-5 bg-gray-50/50">
            <div className="w-16 h-16 bg-white rounded-xl overflow-hidden flex-shrink-0 border border-gray-100 shadow-sm">
              <img src={selectedProduct.preview} alt={selectedProduct.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[0.875rem] font-semibold text-gray-800 truncate leading-snug">{selectedProduct.filename}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-[0.6875rem] font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(15,23,42,0.24)] transition-all duration-300 px-2 py-0.5 rounded-full">1 image</span>
                <span className="text-xs text-gray-400 font-medium">1.00 Credits</span>
              </div>
              <p className="text-[0.6875rem] text-gray-400 mt-1">Product</p>
            </div>
          </div>

          {/* Shot card */}
          <div>
            <p className="text-[0.6875rem] font-bold text-gray-400 uppercase tracking-widest mb-2.5">1 shot</p>
            <div className="bg-[#eff6ff] border border-blue-100 rounded-xl p-4">
              <p className="text-[0.875rem] font-bold text-blue-900 mb-1">Product shot</p>
              <p className="text-xs text-blue-600 leading-relaxed mb-3">
                AI-generated professional product image with clean background and optimized composition.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-medium">Aspect ratio</span>
                <span className="text-xs font-bold text-gray-700 bg-white border border-gray-200 px-2 py-0.5 rounded-lg shadow-sm">1:1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Start generation bar ─────────────────────────────────────────────── */}
      <div
        className="bg-white/75 backdrop-blur-xl rounded-[28px] border border-white/60 px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-5"
        style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.04)' }}
      >
        <div>
          <p className="text-[0.9375rem] font-semibold text-gray-800">
            Ready to generate{' '}
            <span className="text-gray-900">1 product shot</span>{' '}
            for{' '}
            <span className="text-emerald-600">1.00 Credits</span>
          </p>
          <p className="text-xs text-gray-400 mt-0.5">Processing begins immediately after confirmation</p>
        </div>
        <button
          onClick={onStartGeneration}
          className="flex items-center gap-2.5 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(15,23,42,0.24)] transition-all duration-300 text-[0.875rem] font-bold px-7 py-3 rounded-xl hover:bg-gray-700 hover:-translate-y-px active:translate-y-0 whitespace-nowrap"
          style={{
            transition: 'all 0.18s',
            boxShadow: '0 4px 16px rgba(17,24,39,0.2)',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(17,24,39,0.28)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(17,24,39,0.2)'}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Start Generation
        </button>
      </div>

      {/* ── Process note ────────────────────────────────────────────────────── */}
      <div className="mt-4 px-6 py-4 bg-white/50 border border-gray-200/70 rounded-2xl">
        <p className="text-xs text-gray-500 leading-relaxed">
          <span className="font-semibold text-gray-700">Generation Process: </span>
          Images are generated in batches of 5 parallel requests. You'll be able to monitor progress and download results once complete.
        </p>
        <p className="text-xs text-gray-500 leading-relaxed mt-1.5">
          <span className="font-semibold text-gray-700">Quality: </span>
          All images are rendered at high resolution, suitable for commercial use.
        </p>
      </div>
    </div>
  );
}
