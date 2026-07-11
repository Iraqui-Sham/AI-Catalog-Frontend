import React from 'react'

export default function Contact() {
  return (
    <div className="relative bg-[#fafafa] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[280px] sm:h-[320px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent -z-10"></div>

      {/* Header Section */}
      <header className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 pt-10 sm:pt-14 pb-8 sm:pb-10 px-4 sm:px-6 text-center overflow-hidden">
        <span className="inline-block bg-brand-100 text-brand-600 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-3 sm:mb-4 shadow-sm">
          Support Center
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-2.5 sm:mb-3 leading-[1.15]">
          How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-pink-600">help?</span>
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base font-medium leading-relaxed">
          Have questions about FitVersion? Reach out and our team will get back to you shortly.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
        <div className="bg-white/70 backdrop-blur-2xl rounded-2xl sm:rounded-[1.75rem] shadow-[0_16px_40px_-16px_rgba(0,0,0,0.1)] border border-white p-4 sm:p-6 relative overflow-hidden">

          {/* Subtle Inner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-400/10 blur-[80px] hidden md:block"></div>

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
            <a href="https://wa.me/919110112197" target="_blank" rel="noreferrer"
              className="group flex items-center p-3 rounded-xl bg-gradient-to-r from-green-50 to-white border border-green-100 hover:border-green-400 hover:shadow-md hover:shadow-green-100 transition-all duration-300 active:scale-[0.98]">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mr-3 group-hover:scale-110 transition-transform flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.505 3.577 1.386 5.06L2 22l5.06-1.36A9.94 9.94 0 0012.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.13a8.09 8.09 0 01-4.145-1.14l-.297-.176-3.09.83.826-3.017-.194-.31A8.09 8.09 0 013.87 12c0-4.487 3.644-8.13 8.13-8.13 4.486 0 8.13 3.643 8.13 8.13 0 4.486-3.644 8.13-8.13 8.13z" />
                </svg>
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-[8px] font-black text-green-600 uppercase tracking-widest mb-0.5">Fastest Response</p>
                <p className="font-bold text-slate-800 text-sm truncate">Chat on WhatsApp</p>
              </div>
              <span className="text-green-400 group-hover:translate-x-1 transition-transform hidden sm:block flex-shrink-0">→</span>
            </a>

            {/* Other Contact Methods */}
            {[
              { label: "Phone", value: "+91 91101 12197", icon: "📞", link: "tel:+919110112197" },
              { label: "Email", value: "alammdshamsher956@gmail.com", icon: "✉️", link: "mailto:alammdshamsher956@gmail.com" }
            ].map((item, i) => (
              <a key={i} href={item.link}
                className="group flex items-center p-3 rounded-xl bg-slate-50 border border-transparent hover:border-brand-200 hover:bg-white transition-all duration-300 hover:shadow-md hover:shadow-brand-50 active:scale-[0.98]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-sm sm:text-base mr-3 group-hover:scale-110 transition-transform flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="font-bold text-slate-800 text-sm truncate">{item.value}</p>
                </div>
                <span className="text-slate-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all hidden sm:block flex-shrink-0">→</span>
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

            {/* Business Hours */}
            <div className="flex items-center p-3 rounded-xl bg-slate-50/50 border border-dashed border-slate-200">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/50 rounded-lg flex items-center justify-center text-sm sm:text-base mr-3 flex-shrink-0">
                🕐
              </div>
              <div className="min-w-0">
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Business Hours</p>
                <p className="font-bold text-slate-700 leading-snug text-xs sm:text-sm">Mon – Sat, 10 AM – 7 PM IST</p>
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
