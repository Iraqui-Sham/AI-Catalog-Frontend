import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-[#fafafa] pt-24 pb-12 px-6 md:px-12 border-t border-slate-200/60 overflow-hidden">
      {/* Background Decor - Matching the Pricing Section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-orange-50/40 via-transparent to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Brand Section */}
        <div className="mb-16">
          <div className="flex items-center gap-1 mb-4">
            <span className="text-4xl font-black tracking-tighter text-slate-900">FitVersion</span>
            <span className="text-2xl text-orange-500 animate-pulse">✦</span>
          </div>
          <p className="text-slate-500 text-base max-w-sm leading-relaxed font-medium">
            The fastest way to create D2C ads that sell. 
            <span className="text-slate-900 block mt-1">Engineered for the next generation of Indian brands.</span>
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-y-12 gap-x-8 mb-20">
          
          {/* Column Logic - Reusable for all sections */}
          {[
            {
              title: "Use Cases",
              links: ["AI Background Change", "AI Background Removal", "Bulk Product Photography", "D2C Photography", "Image Upscaling", "UGC Ads Creation"]
            },
            {
              title: "Garments",
              links: ["Saree Photography", "Dress Photography", "Kurta Photography", "Lehenga Photography", "Shirt Photography", "Jeans Photography"]
            },
            {
              title: "Marketplaces",
              links: ["Amazon India", "Flipkart Shop", "Myntra Fashion", "Shopify Store", "Instagram Shop", "Nykaa Fashion"]
            },
            {
              title: "Ad Platforms",
              links: ["Facebook Ads", "Instagram Reels", "Google Display", "TikTok Ads", "Pinterest Pins", "YouTube Shorts"]
            },
            {
              title: "Industries",
              links: ["E-commerce", "Fashion Brands", "Beauty & Care", "Jewelry", "Retail", "Home Decor"]
            },
            {
              title: "Products",
              links: ["Carousel Ads", "Social Media", "Website Images", "Landing Pages", "Seasonal Shoots", "Editorial"]
            },
            {
              title: "Versus",
              links: ["vs ChatGPT", "vs PhotoRoom", "vs Botika", "vs Hiring Pro", "vs Gemini", "vs Traditional"]
            }
          ].map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="font-bold text-slate-900 text-[14px] uppercase tracking-widest mb-6">{section.title}</h4>
              <ul className="space-y-3.5">
                {section.links.map((link, i) => (
                  <li key={i} className="text-slate-500 text-[13px] font-medium hover:text-orange-600 hover:translate-x-1 transition-all duration-200 cursor-pointer">
                    {link}
                  </li>
                ))}
                <li className="text-orange-600 font-bold text-[12px] cursor-pointer pt-2 group">
                  Explore All <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Legal Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-t border-slate-200/60 pt-12">
          
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-sm mb-4">Get in touch</h4>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-slate-500 text-sm font-medium">
              <a href="tel:+919429694717" className="hover:text-slate-900 transition-colors flex items-center gap-2">
                <span className="text-orange-500 text-lg">📞</span> +91 9429694717
              </a>
              <a href="mailto:support@FitVersion.app" className="hover:text-slate-900 transition-colors flex items-center gap-2">
                <span className="text-orange-500 text-lg">✉</span> support@FitVersion.app
              </a>
            </div>
            <p className="text-slate-400 text-xs mt-4">
              FitVersion Technology Private Limited • K-2035 CR Park, New Delhi
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 w-full lg:w-auto">
            <div className="flex gap-8 text-[13px] font-bold text-slate-500">
              <a href="#" className="hover:text-orange-600 transition-colors">Blog</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Terms</a>
            </div>
            <p className="text-[13px] text-slate-400 font-medium">
              © 2026 <span className="text-slate-900 font-bold">FitVersion</span>. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}