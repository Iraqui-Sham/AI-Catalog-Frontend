import React from 'react'

export default function Contact() {
  return (
    <div className="relative bg-[#fafafa] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[280px] sm:h-[320px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent -z-10"></div>

      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 pb-8 sm:pb-10 px-4 sm:px-6 text-center overflow-hidden">
        <span className="inline-block bg-orange-100 text-orange-600 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-3 sm:mb-4 shadow-sm">
          Support Center
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-2.5 sm:mb-3 leading-[1.15]">
          How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">help?</span>
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base font-medium leading-relaxed">
          Have questions about FitVersion? Reach out and our team will get back to you shortly.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
        <div className="bg-white/70 backdrop-blur-2xl rounded-2xl sm:rounded-[1.75rem] shadow-[0_16px_40px_-16px_rgba(0,0,0,0.1)] border border-white p-4 sm:p-6 relative overflow-hidden">

          {/* Subtle Inner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-400/10 blur-[80px] hidden md:block"></div>

          <div className="flex flex-row justify-between items-center gap-3 mb-5 sm:mb-6">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">Get in touch</h2>
              <p className="text-slate-500 text-xs font-medium mt-0.5">Response time: &lt; 24 hours</p>
            </div>
            <div className="flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-lg border border-green-100 flex-shrink-0">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-green-700 text-[9px] font-bold uppercase tracking-wider">Online</span>
            </div>
          </div>

          <div className="grid gap-2 sm:gap-2.5">

            {/* WhatsApp - Priority Card */}
            <a href="https://wa.me/918092492943" target="_blank" rel="noreferrer"
              className="group flex items-center p-3 rounded-xl bg-gradient-to-r from-green-50 to-white border border-green-100 hover:border-green-400 hover:shadow-md hover:shadow-green-100 transition-all duration-300 active:scale-[0.98]">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mr-3 group-hover:scale-110 transition-transform flex-shrink-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-4 h-4 sm:w-5 sm:h-5" alt="WA" />
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[8px] font-black text-green-600 uppercase tracking-widest mb-0.5">Fastest Response</p>
                <p className="font-bold text-slate-800 text-sm truncate">Chat on WhatsApp</p>
              </div>
              <span className="text-green-400 group-hover:translate-x-1 transition-transform hidden sm:block flex-shrink-0">→</span>
            </a>

            {/* Other Contact Methods */}
            {[
              { label: "Phone", value: "+91 8092492943", icon: "📞", link: "tel:+918092492943" },
              { label: "Email", value: "support@fitversion.app", icon: "✉️", link: "mailto:support@fitversion.app" }
            ].map((item, i) => (
              <a key={i} href={item.link}
                className="group flex items-center p-3 rounded-xl bg-slate-50 border border-transparent hover:border-orange-200 hover:bg-white transition-all duration-300 hover:shadow-md hover:shadow-orange-50 active:scale-[0.98]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-sm sm:text-base mr-3 group-hover:scale-110 transition-transform flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="font-bold text-slate-800 text-sm truncate">{item.value}</p>
                </div>
                <span className="text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all hidden sm:block flex-shrink-0">→</span>
              </a>
            ))}

            {/* Address - Non-clickable */}
            <div className="flex items-center p-3 rounded-xl bg-slate-50/50 border border-dashed border-slate-200 mt-0.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/50 rounded-lg flex items-center justify-center text-sm sm:text-base mr-3 flex-shrink-0">
                📍
              </div>
              <div className="min-w-0">
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Office Address</p>
                <p className="font-bold text-slate-700 leading-snug text-xs sm:text-sm">K-2033 CR Park, New Delhi, India</p>
              </div>
            </div>

          </div>

          <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-[11px] font-medium">
              FitVersion Technology Private Limited
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}