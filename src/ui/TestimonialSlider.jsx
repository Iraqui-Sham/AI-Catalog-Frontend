import { useState, useEffect, useCallback } from "react";

/**
 * fashn.ai-style single-card testimonial carousel.
 * Auto-advances, has prev/next arrows and dot indicators.
 */
export default function TestimonialSlider({ testimonials = [] }) {
    const [index, setIndex] = useState(0);

    const next = useCallback(() => {
        setIndex((i) => (i + 1) % testimonials.length);
    }, [testimonials.length]);

    const prev = () => {
        setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance every 6s
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    if (!testimonials.length) return null;
    const t = testimonials[index];

    return (
        <div className="relative max-w-2xl mx-auto">
            {/* Prev / Next arrows — desktop */}
            <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="hidden sm:flex absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-surface-300 items-center justify-center hover:bg-surface-50 transition-colors"
            >
                <svg className="w-4 h-4 text-surface-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={next}
                aria-label="Next testimonial"
                className="hidden sm:flex absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-surface-300 items-center justify-center hover:bg-surface-50 transition-colors"
            >
                <svg className="w-4 h-4 text-surface-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Card */}
            <div
                key={index}
                className="bg-white border border-surface-200 rounded-3xl shadow-xl shadow-surface-500/10 p-8 sm:p-10 text-center animate-[fadeIn_0.4s_ease]"
            >
                <div className="flex justify-center text-amber-400 mb-5 text-lg">
                    {"★".repeat(5)}
                </div>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                    “{t.quote}”
                </p>

                {t.stat && (
                    <div className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold py-2 px-4 rounded-full mb-6">
                        {t.stat}
                    </div>
                )}

                <div className="flex items-center justify-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-brand-100 text-brand-600 font-bold flex items-center justify-center text-sm flex-shrink-0">
                        {t.name.charAt(0)}
                    </div>
                    <div className="text-left">
                        <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                        <p className="text-xs text-slate-400">{t.role} · <span className="text-brand-600 font-medium">{t.company}</span></p>
                    </div>
                </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to testimonial ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === index ? "w-6 bg-brand-500" : "w-1.5 bg-surface-300 hover:bg-surface-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
