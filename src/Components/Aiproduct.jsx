import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";
import HorizontalCardSlider from "../ui/HorizontalCardSlider";
import TestimonialSlider from "../ui/TestimonialSlider";
import rawBeforeAsset from "../assets/studio/past2.jpg";
import studioAfterAsset from "../assets/cards/product-to-model.jpg";
import variationTryOn from "../assets/cards/try-on.jpg";
import variationModelSwap from "../assets/cards/model-swap.jpg";
import variationEditFashion from "../assets/cards/edit-fashion.jpg";
import variationCreateModel from "../assets/cards/create-model.jpg";
import variationPast1 from "../assets/studio/past1.jpg";
import variationPast3 from "../assets/studio/past3.jpg";

export default function Aiproduct() {
    const [modalOpen, setModalOpen] = useState(false);
    const [photoCount, setPhotoCount] = useState(50);

    const navigate = useNavigate();

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const updateCost = (e) => {
        setPhotoCount(Number(e.target.value));
    };

    return (
        <>
            {/* HEADER */}
            <header className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 pt-10 pb-16 overflow-hidden">
                {/* Background blur shapes */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

                <div className="max-w-4xl mx-auto text-center px-6 relative z-10">

                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-brand-50 text-brand-600 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-brand-100"
                    >
                        ✨ Perfect for Indian Products
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
                    >
                        Increase Sales with <br />
                        <span className="text-slate-900">Professional </span>
                        <span className="text-brand-500">Product Photos</span>
                        <span className="text-slate-900"> in Minutes</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.16 }}
                        className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
                    >
                        Take product photo from phone → studio shots with multiple angles
                        and backgrounds. <br />
                        <span className="font-medium">
                            Ready for Amazon, Flipkart, Meesho, Instagram & more!
                        </span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.24 }}
                    >
                        <button
                            onClick={() => navigate("/createAccount")}
                            className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 px-10 rounded-xl shadow-xl shadow-brand-500/20 hover:scale-105 transition duration-300"
                        >
                            Start Free Trial
                        </button>

                        <p className="text-xs text-gray-400 mt-4">
                            ₹10 per photo, delivered instantly.
                        </p>
                    </motion.div>

                </div>
            </header>
            <main className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 py-16 overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

                    {/* Interactive Before/After slider — the core "wow" feature */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-4"
                    >
                        <h3 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">
                            Drag to Compare
                        </h3>
                        <BeforeAfterSlider
                            beforeImage={rawBeforeAsset}
                            afterImage={studioAfterAsset}
                            beforeLabel="Raw Input"
                            afterLabel="AI Studio"
                            aspect="aspect-[3/4]"
                        />
                        <p className="text-center text-gray-400 text-sm mt-4 italic">
                            Same product — studio-grade result in minutes
                        </p>
                    </motion.div>

                    {/* Variations grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-8"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3
                                className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                AI Studio Outputs</h3>
                            <span className="text-brand-500 text-xs font-bold uppercase">6
                                Variations</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                                { src: variationTryOn, alt: "Virtual try-on variation" },
                                { src: variationModelSwap, alt: "Model swap variation" },
                                { src: variationEditFashion, alt: "Studio edit variation" },
                                { src: variationCreateModel, alt: "AI model variation" },
                                { src: variationPast1, alt: "Lifestyle shoot variation" },
                                { src: variationPast3, alt: "Catalog-ready variation" },
                            ].map((img, i) => (
                                <div
                                    key={i}
                                    className="group aspect-square bg-surface-150 rounded-xl overflow-hidden shadow-sm border border-surface-250 relative cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-brand-200"
                                >
                                    <img
                                        src={img.src}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        alt={img.alt}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="absolute bottom-2 left-2 text-white text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                                        {img.alt}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-400 text-sm mt-6 italic">Made
                            from the same input — ready for ads & marketplaces</p>
                    </motion.div>
                </div>
            </main>
            <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 py-16 overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex justify-center items-center gap-2 mb-8">
                    <span className="text-sm font-semibold text-gray-600">✨ Made with
                        FitVissionAI</span>
                </div>
                <div className="max-w-7xl mx-auto mb-4">
                    <HorizontalCardSlider
                        items={[
                            { src: variationCreateModel, alt: "Outerwear", label: "Outerwear" },
                            { src: variationModelSwap, alt: "Casual Wear", label: "Casual Wear" },
                            { src: variationEditFashion, alt: "Streetwear", label: "Streetwear" },
                            { src: variationTryOn, alt: "Formal Wear", label: "Formal Wear" },
                            { src: variationPast1, alt: "Studio Portraits", label: "Studio Portraits" },
                            { src: variationPast3, alt: "Catalog Ready", label: "Catalog Ready" },
                        ]}
                    />
                </div>
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 mt-10">
                    <div
                        className="flex items-center gap-2 border border-surface-300 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-semibold hover:border-brand-200 transition">
                        <span>⚡</span> Instant Delivery
                    </div>
                    <div
                        className="flex items-center gap-2 border border-surface-300 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-semibold text-brand-600 hover:border-brand-200 transition">
                        <span>🎯</span> Detail Perfect
                    </div>
                    <div
                        className="flex items-center gap-2 border border-surface-300 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-semibold text-brand-600 hover:border-brand-200 transition">
                        <span>📦</span> Amazon Ready
                    </div>
                    <div
                        className="flex items-center gap-2 border border-surface-300 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-semibold text-brand-600 hover:border-brand-200 transition">
                        <span>💎</span> Fashion Specialist
                    </div>
                </div>
            </section>
            {/* Success Stories */}
            <section className="relative bg-white py-16 overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                        Success Stories from Indian Brands
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto text-sm">
                        Join hundreds of Indian brands who've transformed their business with FitVeSionAI.
                    </p>
                </div>

                <TestimonialSlider
                    testimonials={[
                        {
                            quote: "We went from spending ₹50,000 on photoshoots to just ₹1,500 for 100 photos. Our Myntra sales increased by 60%!",
                            stat: "60% increase in sales",
                            name: "Priya Sharma",
                            role: "Founder",
                            company: "Ethnic Elegance",
                        },
                        {
                            quote: "The AI understands Indian fashion perfectly. Our kurta collection photos look so authentic, customers think we hired professional models.",
                            stat: "40% better conversion",
                            name: "Rahul Gupta",
                            role: "Marketing Head",
                            company: "Urban Threads",
                        },
                        {
                            quote: "Perfect for our streetwear brand. The models look exactly like our target audience. Our Instagram engagement doubled!",
                            stat: "2x Instagram engagement",
                            name: "Ananya Patel",
                            role: "Creative Director",
                            company: "Gen-Z Fashion",
                        },
                    ]}
                />

                {/* Stats strip */}
                <div className="max-w-4xl mx-auto mt-14 bg-brand-50/50 border border-brand-100 rounded-3xl p-8 md:p-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-2xl md:text-3xl font-black text-brand-600">500+</p>
                            <p className="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-wider">Happy Brands</p>
                        </div>
                        <div>
                            <p className="text-2xl md:text-3xl font-black text-brand-600">4.9★</p>
                            <p className="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-wider">Average Rating</p>
                        </div>
                        <div>
                            <p className="text-2xl md:text-3xl font-black text-brand-600">50,000+</p>
                            <p className="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-wider">Photos Generated</p>
                        </div>
                        <div>
                            <p className="text-2xl md:text-3xl font-black text-brand-600">₹2Cr+</p>
                            <p className="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-wider">Savings Generated</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 py-16 overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 px-2">
                    <p className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm px-4 py-2.5 rounded-2xl font-semibold mb-5 leading-relaxed max-w-sm sm:max-w-none">
                        🎁 Register for <strong>10 free credits</strong> instantly — add your phone number to unlock <strong>100 credits/month, free for 2 months</strong>
                    </p>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                        Professional Photography at <span className="text-brand-500">₹10
                            per Photo</span>
                    </h2>
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                        Stop spending lakhs on photoshoots. Get the same quality results
                        for a fraction of the cost, delivered instantly.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
                    {/* FREE CARD */}
                    <div className="group relative bg-gradient-to-b from-emerald-50/40 to-white border-2 border-emerald-200 rounded-2xl p-6 pt-7 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-100 hover:-translate-y-1.5 hover:border-emerald-300">
                        <span className="absolute -top-3 left-6 bg-emerald-500 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase shadow-md shadow-emerald-200 transition-transform duration-300 group-hover:scale-105">
                            ✅ Free for 2 Months
                        </span>
                        <h3 className="text-lg font-bold text-slate-800 mb-1">Free Starter Plan</h3>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-3xl font-black text-emerald-600">₹0</span>
                            <span className="text-gray-400 text-sm">/ 2 months</span>
                        </div>
                        <div className="space-y-2.5 mb-6">
                            <div className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="text-emerald-500 mt-0.5">✓</span>
                                <span>Register — get <strong>10 free credits</strong> instantly</span>
                            </div>
                            <div className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="text-emerald-500 mt-0.5">✓</span>
                                <span>Add phone number — unlock <strong>100 credits/month</strong> for 2 months</span>
                            </div>
                            <div className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="text-emerald-500 mt-0.5">✓</span>
                                <span>No card required</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => navigate("/createAccount")}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-emerald-200 active:scale-[0.98] text-sm"
                            >
                                Register Free
                            </button>
                            <button
                                onClick={() => navigate("/createAccount")}
                                className="w-full border border-emerald-300 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-400 font-bold py-2.5 rounded-xl transition-all duration-200 active:scale-[0.98] text-sm"
                            >
                                Add Phone Number
                            </button>
                        </div>
                    </div>
                    {/* PAID CARD */}
                    <div className="group relative bg-gradient-to-b from-brand-50/40 to-white border-2 border-brand-200 rounded-2xl p-6 pt-7 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-brand-100 hover:-translate-y-1.5 hover:border-brand-300">
                        <span className="absolute -top-3 left-6 bg-brand-500 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase shadow-md shadow-brand-200 transition-transform duration-300 group-hover:scale-105">
                            Best Value
                        </span>
                        <h3 className="text-lg font-bold text-slate-800 mb-1">Growth Plan</h3>
                        <div className="flex items-baseline gap-1 mb-4">
                            <span className="text-3xl font-black">₹299</span>
                            <span className="text-gray-400 text-sm">/month</span>
                        </div>
                        <div className="space-y-2.5 mb-6">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <span>⚡</span> 100 Credits / month
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <span>🖼️</span> 100 Images
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <span>💬</span> Priority WhatsApp Support
                            </div>
                        </div>
                        <button
                            onClick={openModal}
                            className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-brand-200 active:scale-[0.98] text-sm"
                        >
                            Select Plan (₹3/photo)
                        </button>
                    </div>
                </div>
                <div
                    className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 shadow-sm text-center">
                    <h4 className="text-lg font-bold text-slate-800 mb-2">
                        Want our team to do the photoshoot? <span
                            className="text-brand-500">Opt for our managed service</span>
                    </h4>
                    <p className="text-gray-400 text-xs mb-6">We'll handle everything
                        end-to-end: products, setup, models, and delivery.</p>
                    <div className="flex flex-col items-center gap-2">
                        <a href="https://wa.me/918092492943" target="_blank"
                            className="contents">
                            <button
                                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition shadow-md text-sm">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.505 3.577 1.386 5.06L2 22l5.06-1.36A9.94 9.94 0 0012.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.13a8.09 8.09 0 01-4.145-1.14l-.297-.176-3.09.83.826-3.017-.194-.31A8.09 8.09 0 013.87 12c0-4.487 3.644-8.13 8.13-8.13 4.486 0 8.13 3.643 8.13 8.13 0 4.486-3.644 8.13-8.13 8.13z" />
                                </svg>
                                Connect with Us
                            </button>
                        </a>
                        <p className="text-[10px] text-gray-400">WhatsApp: +91 8092492943
                        </p>
                    </div>
                </div>
            </section>

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
                        <div className="bg-gradient-to-r from-brand-500 to-brand-600 p-6 px-8 flex justify-between items-center">

                            <div>
                                <h2 className="text-xl font-bold text-white tracking-tight">
                                    Get Started
                                </h2>
                                <p className="text-brand-100 text-xs">
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
              focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
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
              focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
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
              focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
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
              focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
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
                                className="w-full bg-brand-500 hover:bg-brand-600 active:scale-[0.98]
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
