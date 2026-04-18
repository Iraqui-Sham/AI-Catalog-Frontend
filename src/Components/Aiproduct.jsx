import React, { useState } from 'react'

export default function Aiproduct() {
    const [modalOpen, setModalOpen] = useState(false);
    const [photoCount, setPhotoCount] = useState(50);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const updateCost = (e) => {
        setPhotoCount(Number(e.target.value));
    };

    return (
        <>
            {/* HEADER */}
            <header className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 py-20 overflow-hidden">
                {/* Background blur shapes */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

                <div className="max-w-4xl mx-auto text-center px-6 relative z-10">

                    <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-100">
                        ✨ Perfect for Indian Products
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                        Increase Sales with <br />
                        <span className="text-slate-900">Professional </span>
                        <span className="text-orange-600">Product Photos</span>
                        <span className="text-slate-900"> in Minutes</span>
                    </h1>

                    <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                        Take product photo from phone → studio shots with multiple angles
                        and backgrounds. <br />
                        <span className="font-medium">
                            Ready for Amazon, Flipkart, Meesho, Instagram & more!
                        </span>
                    </p>

                    <button
                        onClick={openModal}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:scale-105 transition duration-300"
                    >
                        Start Free Trial
                    </button>

                    <p className="text-xs text-gray-400 mt-4">
                        ₹10 per photo, delivered instantly.
                    </p>

                </div>
            </header>
            <main className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 py-20 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                        <h3
                            className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">
                            Before</h3>
                        <div
                            className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden border border-gray-200">
                            <span
                                className="absolute top-4 left-4 bg-black/60 text-white text-[10px] px-2 py-1 rounded z-10">●
                                Input</span>
                            <img src="http://googleusercontent.com/image_collection/image_retrieval/5251380877304200814_0"
                                alt="Raw product necklace"
                                className="w-4/5 mix-blend-multiply transition-transform hover:scale-105 duration-300" />
                        </div>
                    </div>
                    <div className="md:col-span-8">
                        <div className="flex justify-between items-center mb-4">
                            <h3
                                className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                                AI Studio Outputs</h3>
                            <span className="text-orange-600 text-xs font-bold uppercase">6
                                Variations</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            <div
                                className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                <img src="http://googleusercontent.com/image_collection/image_retrieval/75883506111662612_0"
                                    className="w-full h-full object-cover"
                                    alt="Model variation 1" />
                            </div>
                            <div
                                className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400&h=400&fit=crop"
                                    className="w-full h-full object-cover"
                                    alt="Model variation 2" />
                            </div>
                            <div
                                className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                <img src="http://googleusercontent.com/image_collection/image_retrieval/10866626756516545999_0"
                                    className="w-full h-full object-cover"
                                    alt="Studio variation" />
                            </div>
                            <div
                                className="aspect-square bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center p-4">
                                <img src="http://googleusercontent.com/image_collection/image_retrieval/5251380877304200814_0"
                                    className="w-full h-auto object-contain"
                                    alt="White background variation" />
                            </div>
                            <div
                                className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                <img src="https://images.unsplash.com/photo-1610492314415-430339203197?q=80&w=400&h=400&fit=crop"
                                    className="w-full h-full object-cover"
                                    alt="Close up variation" />
                            </div>
                            <div
                                className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                <img src="http://googleusercontent.com/image_collection/image_retrieval/12690483190088303870_0"
                                    className="w-full h-full object-cover"
                                    alt="Lifestyle variation" />
                            </div>
                        </div>
                        <p className="text-center text-gray-400 text-sm mt-6 italic">Made
                            from the same input — ready for ads & marketplaces</p>
                    </div>
                </div>
            </main>
            <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 py-20 overflow-hidden">
                <div className="flex justify-center items-center gap-2 mb-8">
                    <span className="text-sm font-semibold text-gray-600">✨ Made with
                        FitVissionAI</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                    <div className="relative group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&h=500&fit=crop"
                            className="rounded-xl w-full h-64 object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-300 shadow-md"
                            alt="Jewellery" />
                        <span
                            className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Jewellery</span>
                    </div>
                    <div className="relative group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&h=500&fit=crop"
                            className="rounded-xl w-full h-64 object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-300 shadow-md"
                            alt="Furniture" />
                        <span
                            className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Furniture</span>
                    </div>
                    <div className="relative group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&h=500&fit=crop"
                            className="rounded-xl w-full h-64 object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-300 shadow-md"
                            alt="Jewellery" />
                        <span
                            className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Jewellery</span>
                    </div>
                    <div className="relative group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1631254316082-f5c71658f8b6?q=80&w=400&h=500&fit=crop"
                            className="rounded-xl w-full h-64 object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-300 shadow-md"
                            alt="Fashion" />
                        <span
                            className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Jewellery</span>
                    </div>
                    <div className="relative group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400&h=500&fit=crop"
                            className="rounded-xl w-full h-64 object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-300 shadow-md"
                            alt="Home Decor" />
                        <span
                            className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider">Home
                            Decor</span>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <div
                        className="flex items-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-semibold hover:border-orange-200 transition">
                        <span>⚡</span> Instant Delivery
                    </div>
                    <div
                        className="flex items-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-semibold text-red-500 hover:border-red-200 transition">
                        <span>🎯</span> Detail Perfect
                    </div>
                    <div
                        className="flex items-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-semibold text-emerald-600 hover:border-emerald-200 transition">
                        <span>📦</span> Amazon Ready
                    </div>
                    <div
                        className="flex items-center gap-2 border border-gray-200 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm font-semibold text-blue-600 hover:border-blue-200 transition">
                        <span>💎</span> Jewellery Specialist
                    </div>
                </div>
            </section>
            <main className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 py-20 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 space-y-8">
                        <div className="max-w-md">
                            <h1
                                className="text-3xl font-extrabold text-slate-900 leading-tight mb-4">
                                From One Photo to an <br />
                                <span className="text-slate-900">Amazon-Ready Listing</span>
                            </h1>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Upload a single product image — Scallo automatically
                                generates every visual Amazon needs to approve, rank,
                                and sell your product.
                            </p>
                        </div>
                        <div
                            className="relative p-6 border-2 border-dashed border-yellow-200 rounded-3xl bg-white shadow-sm">
                            <span
                                className="absolute top-4 left-4 bg-white border border-yellow-400 text-yellow-700 text-[10px] px-3 py-1 rounded-full font-bold uppercase z-10">
                                Your Uploaded Photo
                            </span>
                            <div
                                className="aspect-[4/5] flex items-center justify-center overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1621996659490-3275b4d0d951?q=80&w=500"
                                    alt="Uploaded Sandals"
                                    className="w-full h-full object-contain" />
                            </div>
                        </div>
                        <p className="text-center text-xs text-gray-400">Upload any product
                            image — AI handles the rest.</p>
                    </div>
                    <div className="lg:col-span-8">
                        <h3
                            className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 text-center lg:text-left">
                            AI-Generated Amazon-Ready Set
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div
                                className="bg-white p-2 rounded-3xl shadow-md border border-gray-50">
                                <div
                                    className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3">
                                    <span
                                        className="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">1</span>
                                    <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&h=400&fit=crop"
                                        className="w-full h-full object-cover" />
                                </div>
                                <div className="px-2 pb-2">
                                    <h4 className="text-xs font-bold text-slate-800">Main
                                        Listing Image</h4>
                                    <p className="text-[10px] text-gray-400 mt-1 uppercase">
                                        Amazon-compliant • 1500x2000 • Auto-cropped</p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-2 rounded-3xl shadow-md border border-gray-50">
                                <div
                                    className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3">
                                    <span
                                        className="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">2</span>
                                    <img src="https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=400&h=400&fit=crop"
                                        className="w-full h-full object-contain p-4" />
                                </div>
                                <div className="px-2 pb-2">
                                    <h4 className="text-xs font-bold text-slate-800">White
                                        Background Image</h4>
                                    <p className="text-[10px] text-gray-400 mt-1 uppercase">
                                        Amazon-compliant • 1500x2000 • Auto-cropped</p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-2 rounded-3xl shadow-md border border-gray-50">
                                <div
                                    className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3">
                                    <span
                                        className="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">3</span>
                                    <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=400&h=400&fit=crop"
                                        className="w-full h-full object-cover" />
                                </div>
                                <div className="px-2 pb-2">
                                    <h4 className="text-xs font-bold text-slate-800">
                                        Lifestyle Scene</h4>
                                    <p className="text-[10px] text-gray-400 mt-1 uppercase">
                                        Amazon-compliant • 1500x2000 • Auto-cropped</p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-2 rounded-3xl shadow-md border border-gray-50">
                                <div
                                    className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3">
                                    <span
                                        className="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">4</span>
                                    <img src="https://images.unsplash.com/photo-1621996659490-3275b4d0d951?q=80&w=400&h=400&fit=crop"
                                        className="w-full h-full object-cover scale-150" />
                                </div>
                                <div className="px-2 pb-2">
                                    <h4 className="text-xs font-bold text-slate-800">Zoom
                                        Detail</h4>
                                    <p className="text-[10px] text-gray-400 mt-1 uppercase">
                                        Amazon-compliant • 1500x2000 • Auto-cropped</p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-2 rounded-3xl shadow-md border border-gray-50">
                                <div
                                    className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3 flex items-center justify-center">
                                    <span
                                        className="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">5</span>
                                    <div className="text-center px-4">
                                        <p
                                            className="text-[8px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                                            Effortless Elegance</p>
                                        <img src="https://images.unsplash.com/photo-1621996659490-3275b4d0d951?q=80&w=200&h=200&fit=crop"
                                            className="w-full h-auto" />
                                    </div>
                                </div>
                                <div className="px-2 pb-2">
                                    <h4 className="text-xs font-bold text-slate-800">
                                        Infographic / Feature Callout</h4>
                                    <p className="text-[10px] text-gray-400 mt-1 uppercase">
                                        Amazon-compliant • 1500x2000 • Auto-cropped</p>
                                </div>
                            </div>
                            <div
                                className="bg-white p-2 rounded-3xl shadow-md border border-gray-50">
                                <div
                                    className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-3">
                                    <span
                                        className="absolute top-2 left-2 bg-white w-6 h-6 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">6</span>
                                    <img src="https://images.unsplash.com/photo-1481016570479-9eab6349fef7?q=80&w=400&h=400&fit=crop"
                                        className="w-full h-full object-cover" />
                                </div>
                                <div className="px-2 pb-2">
                                    <h4 className="text-xs font-bold text-slate-800">Group
                                        or Packaging Shot</h4>
                                    <p className="text-[10px] text-gray-400 mt-1 uppercase">
                                        Amazon-compliant • 1500x2000 • Auto-cropped</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-[10px] text-gray-400 mt-10">
                            Compliant with Amazon listing standards • Trusted by 400+
                            brands • Drives ₹10 Cr+ sales
                        </p>
                    </div>
                </div>
            </main>
            <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 py-20 overflow-hidden">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                        Professional Photography at <span className="text-orange-600">₹10
                            per Photo</span>
                    </h2>
                    <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                        Stop spending lakhs on photoshoots. Get the same quality results
                        for a fraction of the cost, delivered instantly.
                    </p>
                    <p className="text-[10px] text-gray-400 mt-2">Billed monthly. Credits
                        are consumed for images/videos.</p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
                    <div
                        className="relative bg-white border-2 border-orange-200 rounded-3xl p-8 shadow-sm">
                        <span
                            className="absolute top-4 right-6 bg-orange-100 text-orange-600 text-[10px] px-3 py-1 rounded-full font-bold uppercase">Best
                            Value</span>
                        <h3 className="text-lg font-bold text-slate-800 mb-1">Monthly Growth
                            Plan</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-3xl font-black">₹999</span>
                            <span className="text-gray-400 text-sm">/month</span>
                        </div>
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                <span>⚡</span> 100 Credits
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                <span>🖼️</span> 100 Images
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                <span>🎬</span> 20 Videos
                            </div>
                        </div>
                        <button onClick={openModal}
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition shadow-md text-sm">
                            Select Plan (₹10/photo)
                        </button>
                    </div>
                    <div
                        className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-800 mb-1">Monthly Lite
                            Plan</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-3xl font-black">₹449</span>
                            <span className="text-gray-400 text-sm">/month</span>
                        </div>
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                <span>⚡</span> 35 Credits
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                <span>🖼️</span> 35 Images
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                <span>🎬</span> 12 Videos
                            </div>
                        </div>
                        <button onClick={openModal}
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition shadow-md text-sm">
                            Select Plan (₹13/photo)
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 mb-16">
                    <div
                        className="bg-orange-50 border border-orange-100 text-orange-700 text-[10px] px-4 py-1 rounded-full font-bold flex items-center gap-2">
                        🎁 5 credits free trial
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div
                            className="flex items-center gap-2 border border-gray-100 bg-white px-4 py-2 rounded-full shadow-sm text-[11px] font-medium text-gray-600">
                            <span className="text-gray-400">💬</span> Priority WhatsApp
                            Support
                        </div>
                        <div
                            className="flex items-center gap-2 border border-gray-100 bg-white px-4 py-2 rounded-full shadow-sm text-[11px] font-medium text-gray-600">
                            <span className="text-yellow-500">💛</span> Dedicated Account
                            Manager
                        </div>
                        <div
                            className="flex items-center gap-2 border border-gray-100 bg-white px-4 py-2 rounded-full shadow-sm text-[11px] font-medium text-gray-600">
                            <span className="text-blue-500">🎧</span> 24/7 Support
                        </div>
                    </div>
                    <div className="text-[10px] text-gray-400">➕ Addon Credits at ₹10/credit
                    </div>
                </div>
                <div
                    className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 shadow-sm text-center">
                    <h4 className="text-lg font-bold text-slate-800 mb-2">
                        Want our team to do the photoshoot? <span
                            className="text-orange-600">Opt for our managed service</span>
                    </h4>
                    <p className="text-gray-400 text-xs mb-6">We'll handle everything
                        end-to-end: products, setup, models, and delivery.</p>
                    <div className="flex flex-col items-center gap-2">
                        <a href="https://wa.me/918092492943" target="_blank"
                            className="contents">
                            <button
                                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition shadow-md text-sm">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    className="w-5 h-5 invert" alt="WhatsApp" />
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
