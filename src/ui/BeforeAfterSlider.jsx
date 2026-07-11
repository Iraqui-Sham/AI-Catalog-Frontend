import { useState, useRef, useCallback, useEffect } from "react";

/**
 * Reusable drag-to-compare Before/After image slider.
 *
 * Usage:
 * <BeforeAfterSlider
 *   beforeImage={rawPhoto}
 *   afterImage={studioPhoto}
 *   beforeLabel="Raw Input"
 *   afterLabel="AI Studio Output"
 * />
 */
export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
  aspect = "aspect-[4/5]",
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    pos = Math.max(0, Math.min(100, pos));
    setSliderPos(pos);
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      if (!draggingRef.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateFromClientX(clientX);
    };
    const handleUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [updateFromClientX]);

  const startDrag = (e) => {
    draggingRef.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    updateFromClientX(clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-xs sm:max-w-sm md:max-w-sm mx-auto ${aspect} select-none overflow-hidden rounded-3xl border border-surface-300 shadow-lg shadow-surface-500/10 transition-shadow duration-300 hover:shadow-2xl ${className}`}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      {/* AFTER — bottom layer, always full visible */}
      <img
        src={afterImage}
        alt={afterLabel}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* BEFORE — clipped from the right via clip-path so it never resizes/distorts */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover grayscale-[15%] brightness-95 contrast-95"
        />
      </div>

      {/* Divider + drag handle */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)] cursor-ew-resize"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize transition-transform duration-200 hover:scale-110 active:scale-95">
          <svg
            className="w-5 h-5 text-surface-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.2"
              d="M8 9l-4 4 4 4m8-12l4 4-4 4"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 bg-black/55 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 bg-brand-500 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase shadow-md shadow-brand-500/30">
        {afterLabel}
      </span>
    </div>
  );
}
