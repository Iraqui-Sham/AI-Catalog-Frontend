import { useState, useEffect } from 'react';
import { CreditCard, ArrowRight, Zap } from 'lucide-react';

export default function BillingPage() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [credits, setCredits] = useState(
    localStorage.getItem('credits') || user?.credits || 0
  );

  useEffect(() => {
    const sync = () => {
      const c = localStorage.getItem('credits');
      if (c) setCredits(Number(c));
    };
    window.addEventListener("creditsUpdated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("creditsUpdated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const [loadingPortal, setLoadingPortal] = useState(false);

  const handleManageBilling = () => {
    setLoadingPortal(true);
    setTimeout(() => setLoadingPortal(false), 1500);
  };

  return (
    <div className="w-full min-h-full bg-[#F6F6F4]">
      <div className="px-6 sm:px-8 lg:px-12 pt-8 pb-32 md:pb-12">

        {/* ── PAGE TITLE — left aligned, same as fashn.ai ── */}
        <div className="mb-6 text-left">
          <h1
            className="text-[26px] font-bold text-[#111111] leading-tight"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            App Billing
          </h1>
          <p className="text-[14px] text-[#777777] mt-1">
            Manage your subscription and credits
          </p>
        </div>

        {/* ── TWO CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* CARD 1 — Plan Details */}
          <div className="bg-white border border-[#E8E8E8] rounded-2xl overflow-hidden
            shadow-[0_1px_4px_rgba(0,0,0,0.04)]
            hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)]
            transition-shadow duration-300">

            {/* Card Header */}
            {/* Card Header — LEFT aligned */}
            <div className="px-6 pt-6 pb-5 text-left">
              <h2
                className="text-[18px] font-bold text-[#111111]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Plan Details
              </h2>
            </div>

            {/* Current Plan row */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#F0F0F0]">
              <span className="text-[14px] text-[#666666]">Current Plan</span>
              <span className="text-[14px] font-bold text-[#111111]">FREE</span>
            </div>

            {/* Manage Billing button */}
            <div className="px-6 pt-4 pb-6 border-t border-[#F0F0F0]">
              <button
                onClick={handleManageBilling}
                disabled={loadingPortal}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#E0E0E0] text-[14px] font-medium text-[#444444] bg-white hover:bg-[#F5F5F5] transition-colors duration-150 disabled:opacity-50"
              >
                <CreditCard size={15} className="text-[#666666]" />
                {loadingPortal ? 'Loading...' : 'Manage Billing'}
              </button>
            </div>

          </div>

          {/* CARD 2 — Credits Usage */}
          <div className="bg-white border border-[#E8E8E8] rounded-2xl overflow-hidden
            shadow-[0_1px_4px_rgba(0,0,0,0.04)]
            hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)]
            transition-shadow duration-300">

            {/* Card Header — LEFT aligned */}
            <div className="px-6 pt-6 pb-5 text-left">
              <h2
                className="text-[18px] font-bold text-[#111111]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Credits Usage
              </h2>
            </div>

            {/* Available Credits row */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#F0F0F0]">
              <span className="text-[14px] text-[#666666]">Available Credits</span>
              <span className="text-[14px] font-bold text-[#111111]">{credits}</span>
            </div>

            {/* Upgrade message + button */}
            <div className="px-6 pt-4 pb-6 border-t border-[#F0F0F0] space-y-3">
              <p className="text-[14px] text-[#666666] leading-relaxed">
                Get more credits with subscriptions starting at only{' '}
                <span className="font-semibold text-[#111111]">$19</span>.
              </p>
              <button
                onClick={() => window.location.href = '/upgrade'}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[14px] font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] hover:shadow-lg hover:shadow-purple-200 active:scale-[0.99] transition-all duration-200"
              >
                <Zap size={15} className="text-yellow-300" />
                Upgrade Plan
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
