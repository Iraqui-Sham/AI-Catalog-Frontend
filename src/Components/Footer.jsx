import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-[#fafafa] pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-orange-50/40 via-transparent to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* Brand + Newsletter Row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-10 pb-10 border-b border-slate-200/60">
          <div className="max-w-sm">
            <div className="flex items-center gap-1 mb-2">
              <span className="text-2xl font-black tracking-tighter text-slate-900">FitVersion</span>
              <span className="text-base text-orange-500">✦</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              The fastest way to create D2C ads that sell.
              <span className="text-slate-900 block mt-0.5">Engineered for the next generation of Indian brands.</span>
            </p>
          </div>

          {/* Newsletter — industry-standard footer staple */}
          <div className="w-full lg:max-w-xs">
            <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-widest mb-3">
              Stay in the loop
            </h4>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@brand.com"
                className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition"
              />
              <button
                type="submit"
                className="bg-slate-900 hover:bg-black text-white text-xs font-bold px-4 rounded-xl transition-all active:scale-95"
              >
                Join
              </button>
            </form>
            <p className="text-slate-400 text-[11px] mt-2">Product tips, no spam. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Links Grid — focused, industry-relevant columns only */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 mb-10">

          {[
            {
              title: "Product",
              links: ["AI Background Change", "Bulk Photography", "D2C Photography", "Image Upscaling"]
            },
            {
              title: "Use Cases",
              links: ["Saree Photography", "Dress Photography", "Jewelry Shoots", "Home Decor"]
            },
            {
              title: "Marketplaces",
              links: ["Amazon India", "Flipkart Shop", "Myntra Fashion", "Shopify Store"]
            },
            {
              title: "Company",
              links: ["About Us", "Pricing", "Blog", "Contact"]
            }
          ].map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-widest mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i} className="text-slate-500 text-[12px] font-medium hover:text-orange-600 transition-colors cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Legal Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-t border-slate-200/60 pt-6">

          <div className="space-y-1.5">
            <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-slate-500 text-xs font-medium">
              <a href="tel:+919429694717" className="hover:text-slate-900 transition-colors flex items-center gap-1.5">
                <span className="text-orange-500">📞</span> +91 9429694717
              </a>
              <a href="mailto:support@FitVersion.app" className="hover:text-slate-900 transition-colors flex items-center gap-1.5">
                <span className="text-orange-500">✉</span> support@FitVersion.app
              </a>
            </div>
            <p className="text-slate-400 text-[11px]">
              FitVersion Technology Private Limited • K-2035 CR Park, New Delhi
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            {/* Social icons — standard footer element, easy to wire up later */}
            <div className="flex gap-3">
              {["instagram", "linkedin", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:border-orange-200 transition-colors text-xs"
                >
                  {social === "instagram" && "📷"}
                  {social === "linkedin" && "in"}
                  {social === "twitter" && "𝕏"}
                </a>
              ))}
            </div>

            <div className="flex gap-5 text-[12px] font-bold text-slate-500">
              <a href="#" className="hover:text-orange-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Terms</a>
            </div>
            <p className="text-[12px] text-slate-400 font-medium">
              © 2026 <span className="text-slate-900 font-bold">FitVersion</span>. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}