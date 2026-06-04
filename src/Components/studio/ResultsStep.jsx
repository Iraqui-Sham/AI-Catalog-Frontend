import React, { useEffect, useState } from 'react';

/* ─── Animated loading screen ──────────────────────────────────────────────── */
function GeneratingView() {
    const [progress, setProgress] = useState(0);
    const [stage, setStage] = useState(0);

    const stages = [
        'Analysing product image…',
        'Generating composition…',
        'Rendering final output…',
    ];

    useEffect(() => {
        // Smooth progress from 0 → 92 over ~2.2 s, then hold
        const start = Date.now();
        const duration = 2200;
        let raf;
        const tick = () => {
            const elapsed = Date.now() - start;
            const p = Math.min(92, Math.round((elapsed / duration) * 92));
            setProgress(p);
            if (p < 92) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        // Cycle stage label
        const t1 = setTimeout(() => setStage(1), 700);
        const t2 = setTimeout(() => setStage(2), 1600);
        return () => { cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2); };
    }, []);

    return (
        <div className="flex items-center justify-center min-h-[26rem]">
            <div className="text-center max-w-sm w-full px-6">
                {/* Layered spinner */}
                <div className="relative w-20 h-20 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full border-[3px] border-gray-100" />
                    <div className="absolute inset-0 rounded-full border-[3px] border-t-gray-800 border-r-gray-200 border-b-gray-200 border-l-gray-200 animate-spin" />
                    <div
                        className="absolute rounded-full border-[3px] border-t-emerald-400 border-r-transparent border-b-transparent border-l-transparent animate-spin"
                        style={{ inset: 7, animationDuration: '1.2s', animationDirection: 'reverse' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01" />
                        </svg>
                    </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1.5">Generating Results</h3>

                {/* Stage label with fade */}
                <p
                    key={stage}
                    className="text-sm text-gray-400 mb-7 leading-relaxed"
                    style={{ animation: 'studioFadeUp 0.3s ease both' }}
                >
                    {stages[stage]}
                </p>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                    <div
                        className="h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-full"
                        style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}
                    />
                </div>
                <p className="text-xs text-gray-400 font-medium">{progress}%</p>

                {/* Step dots */}
                <div className="flex items-center justify-center gap-6 mt-7">
                    {['Analyse', 'Generate', 'Render'].map((label, i) => (
                        <div key={label} className="flex flex-col items-center gap-1.5">
                            <div
                                className={`w-2 h-2 rounded-full transition-all duration-500 ${stage >= i ? 'bg-gray-900 scale-125' : 'bg-gray-200'
                                    }`}
                            />
                            <span className={`text-[0.625rem] font-semibold uppercase tracking-widest transition-colors duration-300 ${stage >= i ? 'text-gray-700' : 'text-gray-300'}`}>
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── Results view ──────────────────────────────────────────────────────────── */
export default function ResultsSection({ result, isGenerating, onStartNewGeneration }) {
    const handleDownload = () => {
        if (!result) return;
        const a = document.createElement('a');
        a.href = imageSrc;
        a.download = `${result.name}-generated.jpg`;
        a.click();
    };

    if (isGenerating || !result) return <GeneratingView />;

    const generatedDate = new Date(result.timestamp).toLocaleDateString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric',
    });

    const stats = [
        { label: 'Total Images', value: '1', color: '#111827' },
        { label: 'Completed', value: '1', color: '#059669' },
        { label: 'Processing', value: '0', color: '#2563eb' },
        { label: 'Failed', value: '0', color: '#dc2626' },
    ];

    const imageSrc = result?.imageUrl || "";

    return (
        <div
            className="pb-32 sm:pb-10"
            style={{
                animation:
                    'studioFadeUp 0.4s cubic-bezier(0.22,1,0.36,1) both'
            }}
        >
            {/* ── Header card ──────────────────────────────────────────────────────── */}
            <div
                className="bg-white/75 backdrop-blur-xl rounded-[28px] border border-white/60 px-7 py-6 mb-5"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.04)' }}
            >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                        <div className="flex items-center gap-2.5 mb-1">
                            <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center text-sm">🖼️</div>
                            <h2 className="text-[1.0625rem] font-bold text-gray-900">Generation Results</h2>
                        </div>
                        <p className="text-sm text-gray-400 ml-[2.375rem]">Product Studio — {generatedDate}</p>
                    </div>
                    <button
                        onClick={onStartNewGeneration}
                        className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 border border-gray-200 rounded-xl px-4 py-2 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] transition-all duration-150 self-start"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                    </button>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-4 gap-2 sm:gap-4 bg-gray-50/70 rounded-xl p-4 mb-5">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center">
                            <p className="text-2xl font-extrabold leading-none" style={{ color: s.color }}>{s.value}</p>
                            <p className="text-[0.6875rem] text-gray-400 mt-1.5 font-medium leading-tight">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Progress + status */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-gray-500">Progress</span>
                        <span className="text-xs font-bold text-gray-800">100%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3.5">
                        <div
                            className="h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-full"
                            style={{ width: '100%', transition: 'width 0.8s ease' }}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            Completed
                        </div>
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 hover:border-gray-300 transition-all duration-150"
                        >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download All (1)
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Result image card ─────────────────────────────────────────────────── */}
            <div
                className="bg-white/75 backdrop-blur-xl rounded-[28px] border border-white/60 overflow-hidden mb-5"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.07)' }}
            >
                {/* Image stage */}
                <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#f1f5f9] min-h-[520px] flex items-center justify-center" style={{ minHeight: '18rem' }}>
                    <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-200/30 blur-3xl" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_60%)]" />
                    <img
                        src={imageSrc}
                        alt={result.name}
                        className="relative z-10 max-h-[480px] w-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.18)] transition-transform duration-700 hover:scale-[1.02]"
                        style={{ maxHeight: '28rem', display: 'block', margin: '0 auto' }}
                    />
                    {/* Completion pill */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        1 / 1
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-100">
                    <div>
                        <p className="text-[0.9375rem] font-bold text-gray-900 leading-snug">{result.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">Total images: 1 &bull; 100% complete</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <button
                            onClick={() => window.open(
                                imageSrc,
                                '_blank'
                            )}
                            className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl px-4 py-2.5 hover:bg-gray-50 hover:border-gray-300 transition-all duration-150"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View
                        </button>
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-1.5 text-sm font-bold text-white bg-gray-900 rounded-xl px-5 py-2.5 hover:bg-gray-700 hover:-translate-y-px active:translate-y-0 transition-all duration-150"
                            style={{ boxShadow: '0 4px 14px rgba(17,24,39,0.18)' }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(17,24,39,0.26)'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 14px rgba(17,24,39,0.18)'}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Start new generation ──────────────────────────────────────────────── */}
            <div
                className="bg-white/75 backdrop-blur-xl rounded-[28px] border border-white/60 px-7 py-6 text-center mb-28 sm:mb-8 pb-[calc(env(safe-area-inset-bottom)+24px)]"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)' }}>
                <button
                    onClick={onStartNewGeneration}
                    className="inline-flex items-center gap-2.5 bg-gray-900 text-white text-[0.875rem] font-bold px-8 py-3 rounded-xl hover:bg-gray-700 hover:-translate-y-px active:translate-y-0 transition-all duration-150"
                    style={{ boxShadow: '0 4px 16px rgba(17,24,39,0.2)' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(17,24,39,0.28)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(17,24,39,0.2)'}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                    Start New Generation
                </button>
            </div>

        </div>
    );
}
