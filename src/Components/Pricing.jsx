import React, { useState } from 'react'

export default function Pricing() {
    const [modalOpen, setModalOpen] = useState(false);
    const [photoCount, setPhotoCount] = useState(50);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const updateCost = (e) => {
        setPhotoCount(Number(e.target.value));
    };

    return (
        <>
            <section className="relative overflow-hidden bg-[#fafafa] pt-6 pb-16 sm:pt-8 sm:pb-20 px-4 sm:px-6 lg:px-8">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-transparent to-transparent -z-10"></div>

                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">transparent</span> pricing
                    </h1>
                    <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
                        Choose a plan that fits your scale. Upgrade or cancel anytime.
                        <span className="block font-medium text-orange-600 mt-1.5">No hidden fees.</span>
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

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
                            className={`group relative p-5 sm:p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${plan.premium
                                ? "bg-slate-900 text-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] sm:scale-105 z-10"
                                : "bg-white text-slate-900 border border-slate-100 shadow-md hover:shadow-orange-200/50"
                                }`}
                        >
                            {plan.tag && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                                    {plan.tag}
                                </span>
                            )}

                            <h3 className={`text-lg font-bold mb-1.5 ${plan.premium ? "text-orange-400" : "text-slate-900"}`}>{plan.name}</h3>

                            <div className="mb-3">
                                <span className="text-3xl font-black">{plan.price}</span>
                                <span className="text-xs ml-2 text-slate-400">{plan.duration}</span>
                            </div>

                            <p className={`text-xs mb-5 ${plan.premium ? "text-slate-400" : "text-slate-500"}`}>{plan.desc}</p>

                            <div className={`p-3 rounded-xl mb-5 ${plan.premium ? "bg-white/5 border border-white/10" : "bg-orange-50 border border-orange-100"}`}>
                                <p className={`text-[9px] font-bold uppercase mb-2 tracking-widest ${plan.premium ? "text-orange-400" : "text-orange-600"}`}>Capability</p>
                                <ul className="space-y-1.5">
                                    {plan.features.slice(0, 2).map((feat, idx) => (
                                        <li key={idx} className="text-[12px] flex items-center gap-2 font-medium">
                                            <span className={plan.premium ? "text-orange-400" : "text-orange-500"}>⚡</span> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <ul className="space-y-2.5 mb-6">
                                {plan.features.slice(2).map((feat, idx) => (
                                    <li key={idx} className="flex items-center text-[12px] gap-2.5">
                                        <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${plan.premium ? "bg-orange-500/20 text-orange-400" : "bg-green-100 text-green-600"}`}>
                                            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className={plan.premium ? "text-slate-300" : "text-slate-600"}>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={openModal}
                                className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 ${plan.premium
                                    ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                                    : "bg-slate-900 text-white hover:bg-black"
                                    }`}
                            >
                                {plan.button}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* MODAL */}
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100] flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white w-full max-w-md sm:max-w-xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-slate-200 max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* HEADER */}
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 px-5 sm:p-6 sm:px-8 flex justify-between items-center">
                            <div>
                                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                    Get Started
                                </h2>
                                <p className="text-orange-100 text-[11px] sm:text-xs">
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
                        <div className="p-5 px-5 sm:p-7 sm:px-8 space-y-4">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                        Brand Name *
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Brand Name"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                        Photos Needed *
                                    </label>
                                    <select
                                        value={photoCount}
                                        onChange={updateCost}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                                    >
                                        <option value="50">50 photos</option>
                                        <option value="100">100 photos</option>
                                        <option value="500">500 photos</option>
                                    </select>
                                </div>
                            </div>

                            {/* COST CARD */}
                            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-4 text-white flex justify-between items-center shadow-lg">
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                                        Estimated Cost
                                    </p>
                                    <p className="text-sm text-slate-200">
                                        {photoCount} images × ₹10
                                    </p>
                                </div>
                                <div className="text-xl sm:text-2xl font-bold">
                                    ₹{photoCount * 10}
                                </div>
                            </div>

                            {/* BUTTON */}
                            <button
                                className="w-full bg-orange-600 hover:bg-orange-700 active:scale-[0.98] text-white font-semibold py-3 rounded-xl transition shadow-lg text-sm"
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