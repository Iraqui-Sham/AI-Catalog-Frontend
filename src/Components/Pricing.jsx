import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Pricing() {
    const [modalOpen, setModalOpen] = useState(false);
    const [photoCount, setPhotoCount] = useState(50);
    const navigate = useNavigate();

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const updateCost = (e) => {
        setPhotoCount(Number(e.target.value));
    };

    const plans = [
        {
            variant: "free",
            name: "Free",
            price: "₹0",
            duration: "2 months free",
            desc: "10 credits instantly on signup",
            features: [
                "10 credits — instant on registration",
                "100 credits/month — after adding phone",
                "Free for 2 full months",
                "No card required",
            ],
            button: "Register Free",
            onClick: () => navigate("/createAccount"),
        },
        {
            variant: "dark",
            name: "Growth",
            price: "₹299",
            duration: "per month",
            desc: "100 credits/month",
            features: [
                "100 photoshoots/ads",
                "100 Images",
                "20 Video reels",
                "Priority WhatsApp Support",
            ],
            button: "Select Plan",
            tag: "Most Popular",
            onClick: openModal,
        },
        {
            variant: "light",
            name: "Pro",
            price: "₹499",
            duration: "per month",
            desc: "200 credits/month",
            features: [
                "200 photoshoots/ads",
                "200 Images",
                "40 Video reels",
                "Dedicated Account Manager",
            ],
            button: "Select Plan",
            onClick: openModal,
        },
    ];

    return (
        <>
            <section className="relative overflow-hidden bg-[#fafafa] pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-50/50 via-transparent to-transparent -z-10"></div>

                {/* Free-credits offer banner */}
                <div className="text-center mb-5 px-2">
                    <p className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm px-4 py-2.5 rounded-2xl font-semibold leading-relaxed max-w-sm sm:max-w-none">
                        🎁 Register for <strong>10 free credits</strong> instantly — add your phone number to unlock <strong>100 credits/month, free for 2 months</strong>
                    </p>
                </div>

                <div className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                        Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-pink-600">transparent</span> pricing
                    </h1>
                    <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto">
                        Choose a plan that fits your scale. Upgrade or cancel anytime.
                        <span className="block font-medium text-brand-600 mt-1.5">No hidden fees.</span>
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                    {plans.map((plan, i) => {
                        const isFree = plan.variant === "free";
                        const isPopular = plan.variant === "dark"; // Growth plan — now light-themed, just highlighted

                        return (
                            <div
                                key={i}
                                className={`group relative p-5 sm:p-6 rounded-3xl transition-all duration-500 hover:-translate-y-2 bg-white text-slate-900 ${isFree
                                        ? "bg-gradient-to-b from-emerald-50/60 to-white border-2 border-emerald-200 shadow-md hover:shadow-2xl hover:shadow-emerald-100 hover:border-emerald-300"
                                        : isPopular
                                            ? "bg-gradient-to-b from-brand-50/50 to-white border-2 border-brand-300 shadow-lg sm:scale-105 z-10 hover:shadow-2xl hover:shadow-brand-200"
                                            : "border border-slate-100 shadow-md hover:shadow-2xl hover:shadow-brand-100"
                                    }`}
                            >
                                {plan.tag && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-500 to-pink-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap transition-transform duration-300 group-hover:scale-105">
                                        {plan.tag}
                                    </span>
                                )}
                                {isFree && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap transition-transform duration-300 group-hover:scale-105">
                                        ✅ Free for 2 Months
                                    </span>
                                )}

                                <h3 className={`text-lg font-bold mb-1.5 mt-2 ${isFree ? "text-emerald-600" : isPopular ? "text-brand-600" : "text-slate-900"}`}>
                                    {plan.name}
                                </h3>

                                <div className="mb-3">
                                    <span className="text-3xl font-black">{plan.price}</span>
                                    <span className="text-xs ml-2 text-slate-400">{plan.duration}</span>
                                </div>

                                <p className="text-xs mb-5 text-slate-500">{plan.desc}</p>

                                <div
                                    className={`p-3 rounded-xl mb-5 ${isFree ? "bg-emerald-50 border border-emerald-100" : "bg-brand-50 border border-brand-100"
                                        }`}
                                >
                                    <p
                                        className={`text-[9px] font-bold uppercase mb-2 tracking-widest ${isFree ? "text-emerald-600" : "text-brand-600"
                                            }`}
                                    >
                                        Capability
                                    </p>
                                    <ul className="space-y-1.5">
                                        {plan.features.slice(0, 2).map((feat, idx) => (
                                            <li key={idx} className="text-[12px] flex items-center gap-2 font-medium">
                                                <span className={isFree ? "text-emerald-500" : "text-brand-500"}>⚡</span>{" "}
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <ul className="space-y-2.5 mb-6">
                                    {plan.features.slice(2).map((feat, idx) => (
                                        <li key={idx} className="flex items-center text-[12px] gap-2.5">
                                            <div
                                                className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${isFree ? "bg-emerald-100 text-emerald-600" : "bg-green-100 text-green-600"
                                                    }`}
                                            >
                                                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-slate-600">{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={plan.onClick}
                                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 active:scale-95 ${isFree
                                            ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-md hover:shadow-lg hover:shadow-emerald-200"
                                            : isPopular
                                                ? "bg-gradient-to-r from-brand-500 to-brand-600 hover:brightness-110 text-white shadow-lg shadow-brand-500/30 hover:shadow-xl"
                                                : "bg-surface-800 hover:bg-surface-900 text-white shadow-md hover:shadow-lg"
                                        }`}
                                >
                                    {plan.button}
                                </button>
                            </div>
                        );
                    })}
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
                        <div className="bg-gradient-to-r from-brand-500 to-brand-600 p-4 px-5 sm:p-6 sm:px-8 flex justify-between items-center">
                            <div>
                                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                    Get Started
                                </h2>
                                <p className="text-brand-100 text-[11px] sm:text-xs">
                                    Transform your business with AI photography
                                </p>
                            </div>
                            <button onClick={closeModal} className="text-white/80 hover:text-white text-lg">
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
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                                        Photos Needed *
                                    </label>
                                    <select
                                        value={photoCount}
                                        onChange={updateCost}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
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
                            <button className="w-full bg-brand-500 hover:bg-brand-600 active:scale-[0.98] text-white font-semibold py-3 rounded-xl transition shadow-lg text-sm">
                                Continue →
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
