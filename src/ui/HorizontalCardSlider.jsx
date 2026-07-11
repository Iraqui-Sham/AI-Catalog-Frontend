import { useRef, useState, useCallback } from "react";

/**
 * fashn.ai-style horizontal drag/scroll card slider.
 * - Mouse drag-to-scroll on desktop
 * - Native touch swipe on mobile
 * - Snap-to-card scrolling
 * - Optional prev/next arrow buttons (desktop only)
 *
 * Usage:
 * <HorizontalCardSlider
 *   items={[{ src, alt, label }, ...]}
 *   cardWidth="w-[180px] sm:w-[210px]"
 * />
 */
export default function HorizontalCardSlider({
  items = [],
  cardWidth = "w-[170px] sm:w-[200px] md:w-[210px]",
  cardAspect = "aspect-[4/5]",
}) {
  const trackRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const [dragging, setDragging] = useState(false);

  const onPointerDown = useCallback((e) => {
    const el = trackRef.current;
    if (!el) return;
    isDown.current = true;
    setDragging(true);
    startX.current = e.clientX;
    startScroll.current = el.scrollLeft;
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!isDown.current || !trackRef.current) return;
    const dx = e.clientX - startX.current;
    trackRef.current.scrollLeft = startScroll.current - dx;
  }, []);

  const endDrag = useCallback(() => {
    isDown.current = false;
    setDragging(false);
  }, []);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = card ? card.offsetWidth + 16 : 220;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="relative group/slider">
      {/* Left/Right arrows — desktop only, appear on hover */}
      <button
        onClick={() => scrollByCard(-1)}
        aria-label="Scroll left"
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-surface-300 items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-surface-50"
      >
        <svg className="w-4 h-4 text-surface-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => scrollByCard(1)}
        aria-label="Scroll right"
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-lg border border-surface-300 items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-surface-50"
      >
        <svg className="w-4 h-4 text-surface-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div
        ref={trackRef}
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        className={`flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {items.map((item, i) => (
          <div
            key={i}
            data-card
            className={`group relative flex-shrink-0 snap-start ${cardWidth} ${cardAspect} rounded-xl overflow-hidden shadow-sm border border-surface-250 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
          >
            <img
              src={item.src}
              alt={item.alt}
              draggable={false}
              className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 pointer-events-none"
            />
            <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
