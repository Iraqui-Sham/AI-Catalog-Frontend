import React, { useState } from 'react'

export default function Pricing() {
    const modal = document.getElementById('modal-overlay');
    const [modalOpen, setModalOpen] = useState(false);
    const [photoCount, setPhotoCount] = useState(50);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const updateCost = (e) => {
        setPhotoCount(Number(e.target.value));
    };
    return (
        <>
            <section className="relative overflow-hidden bg-[#fafafa] py-24 px-4">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-transparent to-transparent -z-10"></div>

                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">transparent</span> pricing
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Choose a plan that fits your scale. Upgrade or cancel anytime.
                        <span className="block font-medium text-orange-600 mt-2">No hidden fees.</span>
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Plan Card Template */}
                    {[
                        {
                            name: "Free",
                            price: "₹0",
                            duration: "for 3 days",
                            desc: "5 credits included • 3-day access",
                            features: ["5 photoshoots or ads", "1 video reels", "Instant Results", "Unlimited Upscale"],
                            button: "Get Started",
                            premium: false
                        },
                        {
                            name: "Monthly",
                            price: "₹999",
                            duration: "per month",
                            desc: "100 credits/month",
                            features: ["100 photoshoots/ads", "25 video reels", "10 x 30s videos", "24/7 Priority Support"],
                            button: "Select Plan",
                            premium: true,
                            tag: "Most Popular"
                        },
                        {
                            name: "Yearly",
                            price: "₹9,990",
                            duration: "per year",
                            desc: "100 credits/month (Billed yearly)",
                            features: ["Same as Monthly", "2 Months Free", "Dedicated Manager", "Addon Credits @ ₹10"],
                            button: "Select Plan",
                            premium: false
                        },
                        {
                            name: "Enterprise",
                            price: "Custom",
                            duration: "for teams",
                            desc: "Unlimited possibilities",
                            features: ["Bulk credits", "API access", "Whitelabel solution", "Client dashboard"],
                            button: "Contact Us",
                            premium: false
                        }
                    ].map((plan, i) => (
                        <div
                            key={i}
                            className={`group relative p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-4 ${plan.premium
                                    ? "bg-slate-900 text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] scale-105 z-10"
                                    : "bg-white text-slate-900 border border-slate-100 shadow-xl hover:shadow-orange-200/50 shadow-slate-200/50"
                                }`}
                        >
                            {plan.tag && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                    {plan.tag}
                                </span>
                            )}

                            <h3 className={`text-xl font-bold mb-2 ${plan.premium ? "text-orange-400" : "text-slate-900"}`}>{plan.name}</h3>

                            <div className="mb-4">
                                <span className="text-4xl font-black">{plan.price}</span>
                                <span className={`text-sm ml-2 ${plan.premium ? "text-slate-400" : "text-slate-400"}`}>{plan.duration}</span>
                            </div>

                            <p className={`text-xs mb-8 ${plan.premium ? "text-slate-400" : "text-slate-500"}`}>{plan.desc}</p>

                            <div className={`p-4 rounded-2xl mb-8 ${plan.premium ? "bg-white/5 border border-white/10" : "bg-orange-50 border border-orange-100"}`}>
                                <p className={`text-[10px] font-bold uppercase mb-3 tracking-widest ${plan.premium ? "text-orange-400" : "text-orange-600"}`}>Capability</p>
                                <ul className="space-y-2">
                                    {plan.features.slice(0, 2).map((feat, idx) => (
                                        <li key={idx} className="text-[13px] flex items-center gap-2 font-medium">
                                            <span className={plan.premium ? "text-orange-400" : "text-orange-500"}>⚡</span> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.slice(2).map((feat, idx) => (
                                    <li key={idx} className="flex items-center text-[13px] gap-3">
                                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.premium ? "bg-orange-500/20 text-orange-400" : "bg-green-100 text-green-600"}`}>
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className={plan.premium ? "text-slate-300" : "text-slate-600"}>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={openModal}
                                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 active:scale-95 ${plan.premium
                                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                                        : "bg-slate-900 text-white hover:bg-black"
                                    }`}
                            >
                                {plan.button}
                            </button>

                            {/* Subtle Decorative Glow on Hover */}
                            {!plan.premium && (
                                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-orange-400/0 to-orange-400/0 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"></div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <div id="modal-overlay"
                className="hidden fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-4">
                <div
                    className="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative">
                    <div
                        className="bg-slate-50 border-b border-slate-100 p-5 px-8 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                                Get Started</h2>
                            <p className="text-slate-500 text-xs">Transform your business
                                with AI photography.</p>
                        </div>
                        <button onClick={closeModal}
                            className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 px-8 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Brand
                                    Name *</label>
                                <input type="text" placeholder="Brand Name"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-300" />
                            </div>
                            <div>
                                <label
                                    className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Email
                                    Address *</label>
                                <input type="email" placeholder="name@company.com"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-300" />
                            </div>
                            <div>
                                <label
                                    className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Phone
                                    Number *</label>
                                <input type="tel" placeholder="+91 00000 00000"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-300" />
                            </div>
                            <div>
                                <label
                                    className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Photos
                                    Needed *</label>
                                <div className="relative">
                                    <select id="photo-count" onchange="updateCost()"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all appearance-none cursor-pointer">
                                        <option value="50">50 photos</option>
                                        <option value="100">100 photos</option>
                                        <option value="500">500 photos</option>
                                    </select>
                                    <div
                                        className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                                        <svg className="w-3 h-3" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 9l-7 7-7-7" stroke-width="2.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-slate-900 rounded-xl p-4 text-white flex justify-between items-center">
                            <div>
                                <p
                                    className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-0.5">
                                    Estimated Cost</p>
                                <p className="text-sm font-medium text-slate-200">
                                    <span id="display-count">50</span> images <span
                                        className="text-slate-500 mx-1">×</span> ₹10
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold text-white">₹<span
                                    id="total-price">500</span></p>
                                <p className="text-[10px] text-emerald-400 font-medium">Save
                                    ₹5,500 vs Studio</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <button
                                className="w-full bg-slate-900 text-white py-3.5 rounded-lg font-bold text-sm hover:bg-slate-800 transition-all active:scale-[0.98] shadow-lg shadow-slate-200">
                                Get Started Now
                            </button>
                            <div className="flex items-center justify-between px-1">
                                <p
                                    className="text-[10px] text-slate-400 flex items-center gap-1">
                                    <svg className="w-3 h-3" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    Secure Encryption
                                </p>
                                <p
                                    className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter italic">
                                    Built for Indian Brands</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL */}
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100] flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-slate-200"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* HEADER */}
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 px-8 flex justify-between items-center">

                            <div>
                                <h2 className="text-xl font-bold text-white tracking-tight">
                                    Get Started
                                </h2>
                                <p className="text-orange-100 text-xs">
                                    Transform your business with AI photography
                                </p>
                            </div>

                            <button
                                onClick={closeModal}
                                className="text-white/80 hover:text-white text-lg"
                            >
                                ✕
                            </button>

                        </div>


                        {/* FORM */}
                        <div className="p-7 px-8 space-y-5">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                {/* Brand */}
                                <div>
                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                        Brand Name *
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Brand Name"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                        Email Address *
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                        Phone Number *
                                    </label>

                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                    />
                                </div>

                                {/* Photos */}
                                <div>
                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                        Photos Needed *
                                    </label>

                                    <select
                                        value={photoCount}
                                        onChange={updateCost}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                    >
                                        <option value="50">50 photos</option>
                                        <option value="100">100 photos</option>
                                        <option value="500">500 photos</option>
                                    </select>
                                </div>

                            </div>


                            {/* COST CARD */}
                            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-5 text-white flex justify-between items-center shadow-lg">

                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                                        Estimated Cost
                                    </p>

                                    <p className="text-sm text-slate-200">
                                        {photoCount} images × ₹10
                                    </p>
                                </div>

                                <div className="text-2xl font-bold">
                                    ₹{photoCount * 10}
                                </div>

                            </div>


                            {/* BUTTON */}
                            <button
                                className="w-full bg-orange-600 hover:bg-orange-700 active:scale-[0.98]
          text-white font-semibold py-3 rounded-xl transition shadow-lg text-sm"
                            >
                                Continue →
                            </button>

                        </div>

                    </div>
                </div>
            )}
        </>
    )
}
