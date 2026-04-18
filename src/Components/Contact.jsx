import React from 'react'

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-[#fafafa] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] md:h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent -z-10"></div>

      {/* Header Section */}
      <header className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 text-center">
        <span className="inline-block bg-orange-100 text-orange-600 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 shadow-sm">
          Support Center
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 leading-[1.1]">
          How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">help?</span>
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto text-base md:text-lg font-medium leading-relaxed">
          Have questions about FitVersion? Reach out and our team will get back to you shortly.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pb-20 md:pb-32">
        <div className="bg-white/70 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white p-6 md:p-14 relative overflow-hidden">
          
          {/* Subtle Inner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-400/10 blur-[80px] hidden md:block"></div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 md:mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Get in touch</h2>
              <p className="text-slate-500 text-sm md:text-base font-medium mt-1">Response time: &lt; 24 hours</p>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl border border-green-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-700 text-[10px] md:text-xs font-bold uppercase tracking-wider">Online</span>
            </div>
          </div>

          <div className="grid gap-3 md:gap-4">
            
            {/* WhatsApp - Priority Card */}
            <a href="https://wa.me/918092492943" target="_blank" rel="noreferrer" 
               className="group flex items-center p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-r from-green-50 to-white border border-green-100 hover:border-green-400 hover:shadow-xl hover:shadow-green-100 transition-all duration-300 active:scale-[0.98]">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl shadow-md flex items-center justify-center mr-4 md:mr-5 group-hover:scale-110 transition-transform flex-shrink-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 md:w-8 md:h-8" alt="WA"/>
              </div>
              <div className="flex-grow">
                <p className="text-[9px] md:text-[10px] font-black text-green-600 uppercase tracking-widest mb-0.5">Fastest Response</p>
                <p className="font-bold text-slate-800 text-base md:text-lg">Chat on WhatsApp</p>
              </div>
              <span className="text-green-400 group-hover:translate-x-1 transition-transform hidden sm:block">→</span>
            </a>

            {/* Other Contact Methods */}
            {[
              { label: "Phone", value: "+91 8092492943", icon: "📞", link: "tel:+918092492943" },
              { label: "Email", value: "support@firversion.app", icon: "✉️", link: "mailto:support@fitversion.app" }
            ].map((item, i) => (
              <a key={i} href={item.link} 
                 className="group flex items-center p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50 border border-transparent hover:border-orange-200 hover:bg-white transition-all duration-300 hover:shadow-xl hover:shadow-orange-50 active:scale-[0.98]">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center text-xl md:text-2xl mr-4 md:mr-5 group-hover:scale-110 transition-transform flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="font-bold text-slate-800 text-base md:text-lg truncate">{item.value}</p>
                </div>
                <span className="text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all hidden sm:block">→</span>
              </a>
            ))}

            {/* Address - Non-clickable */}
            <div className="flex items-center p-4 md:p-5 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50/50 border border-dashed border-slate-200 mt-2">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/50 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-2xl mr-4 md:mr-5 flex-shrink-0">
                📍
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Office Address</p>
                <p className="font-bold text-slate-700 leading-snug text-sm md:text-base">K-2033 CR Park, New Delhi, India</p>
              </div>
            </div>

          </div>

          <div className="mt-10 md:mt-12 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-xs md:text-sm font-medium">
              FitVersion Technology Private Limited
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}