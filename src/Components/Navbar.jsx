import { Building2, ChevronDown, Zap, Scissors } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {

  const [credits, setCredits] = useState(null);
  const [userName, setUserName] = useState("");

  // Credits sync karne ka function
  const syncCredits = () => {
    const savedCredits = localStorage.getItem("credits");
    const savedUser = localStorage.getItem("user");

    if (savedCredits) {
      setCredits(Number(savedCredits));
    }
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setUserName(user?.name || "");
      } catch {}
    }
  };

  useEffect(() => {
    syncCredits();
    window.addEventListener("creditsUpdated", syncCredits);
    window.addEventListener("storage", syncCredits);
    return () => {
      window.removeEventListener("creditsUpdated", syncCredits);
      window.removeEventListener("storage", syncCredits);
    };
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-[#E5E5E5] h-14 flex items-center px-3 md:px-4">

      {/* ── LEFT ── */}
      <div className="flex items-center flex-1 min-w-0">

        {/* Mobile: logo mark only */}
        <div className="md:hidden w-9 h-9 rounded-xl bg-[#111111] flex items-center justify-center flex-shrink-0">
          <Scissors
            size={16}
            className="text-white rotate-45"
          />
        </div>

        {/* Desktop: org selector */}
        <button className="hidden md:flex items-center gap-2.5 px-2.5 py-2 rounded-xl border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-colors duration-150 group max-w-xs">

          <div className="w-6 h-6 rounded-md bg-[#F0F0F0] flex items-center justify-center flex-shrink-0">
            <Building2
              size={13}
              className="text-[#777777]"
            />
          </div>

          <div className="flex flex-col items-start leading-none min-w-0">
            <span className="text-[9px] font-semibold text-[#AAAAAA] tracking-[0.18em] uppercase">
              Organization
            </span>

            <span className="text-sm font-medium text-[#111111] mt-0.5 truncate">
              {userName || "User"}
            </span>
          </div>

          <ChevronDown
            size={14}
            className="text-[#AAAAAA] group-hover:text-[#111111] transition-colors ml-1 flex-shrink-0"
          />
        </button>
      </div>

      {/* ── RIGHT ── */}
      <div className="flex items-center gap-1.5 sm:gap-2">

        {/* Credits badge */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-xl border border-[#E5E5E5] bg-white shadow-sm">

          <span className="text-[10px] font-bold text-white bg-[#111111] px-1.5 py-0.5 rounded-md tracking-wide leading-none">
            FREE
          </span>

          {/* Hide text on very small screens */}
          <span className="text-[11px] sm:text-sm text-[#555555] whitespace-nowrap font-medium">
            {credits ?? 0} credits
          </span>
        </div>

        {/* Upgrade button */}
        <button className="flex items-center gap-1 px-2.5 sm:px-3.5 py-2 rounded-xl bg-[#111111] text-white text-sm font-semibold hover:bg-[#2a2a2a] active:bg-[#000000] transition-colors duration-150 whitespace-nowrap">

          <Zap
            size={13}
            className="fill-white flex-shrink-0"
          />

          <span className="text-xs sm:text-sm">
            Upgrade
          </span>
        </button>
      </div>
    </header>
  );
}