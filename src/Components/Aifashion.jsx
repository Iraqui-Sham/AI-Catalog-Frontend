import React, { useState } from 'react'

export default function Aifashion() {
      const [modalOpen, setModalOpen] = useState(false);
          const [photoCount, setPhotoCount] = useState(50);
      
          const openModal = () => setModalOpen(true);
          const closeModal = () => setModalOpen(false);
      
          const updateCost = (e) => {
              setPhotoCount(Number(e.target.value));
          };
  return (
    <>
          <nav class="flex justify-center pt-6">
        <span
            class="bg-blue-50 text-blue-600 border border-blue-100 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm">
            🇮🇳 Made for India
        </span>
    </nav>
    <header class="max-w-4xl mx-auto text-center px-6 py-12 md:py-16">
        <h1
            class="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6 leading-tight">
            Turn Any Raw Product Photo<br/>
            into <span class="text-[#FF6B35]">Studio Photoshoot</span> — in
            Minutes
        </h1>
        <p
            class="text-slate-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Take photo from phone → photoshoot with multiple poses and
            backgrounds.
            <span class="block mt-2 font-medium text-slate-800">Ready for
                Myntra, Flipkart, Meesho, Instagram & more!</span>
        </p>
        <div class="flex flex-col items-center gap-4">
            <button onClick={openModal}
                class="bg-[#FF4D00] hover:bg-[#E64500] text-white font-bold py-4 px-12 rounded-lg text-lg transition-all shadow-lg hover:shadow-orange-200 active:scale-95">
                Start Free Trial
            </button>
            <p class="text-slate-400 text-sm font-medium">₹10 per photo,
                delivered instantly.</p>
        </div>
    </header>
    <main class="max-w-6xl mx-auto px-6 pb-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-4 flex flex-col items-center">
                <span
                    class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 self-start">Before</span>
                <div
                    class="relative w-full rounded-3xl overflow-hidden bg-white shadow-2xl shadow-slate-200 border border-slate-100">
                    <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800"
                        alt="Raw product" class="w-full h-[600px] object-cover"/>
                    <div
                        class="absolute top-6 left-6 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-2">
                        <span class="w-2 h-2 bg-white rounded-full"></span>
                        INPUT
                    </div>
                </div>
            </div>
            <div class="hidden lg:flex lg:col-span-1 justify-center pt-[300px]">
                <div
                    class="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm">
                    <i class="fa-solid fa-arrow-right text-slate-300" ></i>
                </div>
            </div>
            <div class="lg:col-span-7 flex flex-col">
                <span
                    class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">AI
                    Photoshoot Output</span>
                <div class="grid grid-cols-2 gap-4">
                    <div
                        class="rounded-2xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100">
                        <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600"
                            class="h-80 w-full object-cover"/>
                    </div>
                    <div
                        class="rounded-2xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100">
                        <img src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600"
                            class="h-80 w-full object-cover"/>
                    </div>
                    <div
                        class="rounded-2xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100">
                        <img src="https://images.unsplash.com/photo-1599032909756-5dee8c9583d1?auto=format&fit=crop&q=80&w=600"
                            class="h-80 w-full object-cover"/>
                    </div>
                    <div
                        class="rounded-2xl overflow-hidden shadow-xl shadow-slate-200 border border-slate-100">
                        <img src="https://images.unsplash.com/photo-1617143777034-fe4c261ac738?auto=format&fit=crop&q=80&w=600"
                            class="h-80 w-full object-cover"/>
                    </div>
                </div>
                <p class="text-center text-slate-400 mt-6 text-sm">
                    Made from the same input — ready for ads & marketplaces.
                </p>
            </div>
        </div>
    </main>
    <section
        class="max-w-6xl mx-auto px-6 pb-24 border-t border-slate-100 pt-16">
        <div class="text-center mb-10">
            <p
                class="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
                ✨ Made with FitVisionAI
            </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="space-y-3">
                <img src="https://images.unsplash.com/photo-1610030469668-93510cb2801e?auto=format&fit=crop&q=80&w=400"
                    class="rounded-2xl aspect-[3/4] object-cover shadow-lg border border-slate-100"/>
            </div>
            <div class="space-y-3">
                <img src="https://images.unsplash.com/photo-1622243504165-12824ee79a56?auto=format&fit=crop&q=80&w=400"
                    class="rounded-2xl aspect-[3/4] object-cover shadow-lg border border-slate-100"/>
            </div>
            <div class="space-y-3">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400"
                    class="rounded-2xl aspect-[3/4] object-cover shadow-lg border border-slate-100"/>
            </div>
            <div class="space-y-3">
                <img src="https://images.unsplash.com/photo-1539008835657-9e8e81839201?auto=format&fit=crop&q=80&w=400"
                    class="rounded-2xl aspect-[3/4] object-cover shadow-lg border border-slate-100"/>
            </div>
        </div>
        <div class="flex flex-wrap justify-center gap-4 mt-16">
            <div
                class="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm text-xs font-semibold text-slate-600">
                <span class="text-orange-500">⚡</span> Instant Delivery
            </div>
            <div
                class="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm text-xs font-semibold text-slate-600">
                <span class="text-orange-500">🎯</span> Perfect Pattern
            </div>
            <div
                class="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm text-xs font-semibold text-slate-600">
                <span class="text-orange-500">🛒</span> Ready for Myntra
            </div>
            <div
                class="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm text-xs font-semibold text-slate-600">
                <span class="text-orange-500">👗</span> Saree Specialist
            </div>
        </div>
    </section>
    <section class="max-w-6xl mx-auto px-6 py-20 border-t border-slate-100">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-slate-900 mb-4">From One Photo to
                Multiple Shots</h2>
            <p class="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
                Upload a single garment photo — get the same model in multiple
                professional poses, perfect for variety in your catalog,
                lookbooks, and ads.
            </p>
        </div>
        <div class="space-y-12">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="relative group">
                    <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400"
                        class="rounded-xl aspect-[3/4] object-cover border-2 border-orange-100"/>
                    <span
                        class="absolute top-2 left-2 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase">Your
                        Photo</span>
                </div>
                <div class="relative group">
                    <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400"
                        class="rounded-xl aspect-[3/4] object-cover bg-green-50 border border-green-100"/>
                    <span
                        class="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase">Pose
                        1</span>
                </div>
                <div class="relative group">
                    <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400"
                        class="rounded-xl aspect-[3/4] object-cover bg-green-50 border border-green-100"/>
                    <span
                        class="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase">Pose
                        2</span>
                </div>
                <div class="relative group">
                    <img src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=400"
                        class="rounded-xl aspect-[3/4] object-cover bg-green-50 border border-green-100"/>
                    <span
                        class="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase">Pose
                        3</span>
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="relative group">
                    <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=400"
                        class="rounded-xl aspect-[3/4] object-cover border-2 border-orange-100"/>
                    <span
                        class="absolute top-2 left-2 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase">Your
                        Photo</span>
                </div>
                <div class="relative group">
                    <img src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=400"
                        class="rounded-xl aspect-[3/4] object-cover bg-amber-50 border border-amber-100"/>
                    <span
                        class="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase">Pose
                        1</span>
                </div>
                <div class="relative group">
                    <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=400"
                        class="rounded-xl aspect-[3/4] object-cover bg-amber-50 border border-amber-100"/>
                    <span
                        class="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase">Pose
                        2</span>
                </div>
                <div class="relative group">
                    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400"
                        class="rounded-xl aspect-[3/4] object-cover bg-amber-50 border border-amber-100"/>
                    <span
                        class="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase">Pose
                        3</span>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-16">
            <button onClick={openModal}
                class="bg-[#FF4D00] hover:bg-[#E64500] text-white font-bold py-3 px-8 rounded-lg transition-all shadow-md active:scale-95">
                Get Started Now
            </button>
        </div>
    </section>
    <section class="max-w-6xl mx-auto px-6 py-20 border-t border-slate-100">
    <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">Success Stories from Indian Brands</h2>
        <p class="text-slate-500 max-w-2xl mx-auto text-base">
            Join hundreds of Indian fashion brands who've transformed their business with FitVersion's AI fashion photography.
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex text-yellow-400 mb-4">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                FitVersion transformed our saree business. We went from spending ₹50,000 on photoshoots to just ₹1,500 for 100 photos. Our Myntra sales increased by 60%!
            </p>
            <div class="bg-green-50 text-green-700 text-xs font-bold py-2 px-4 rounded-lg text-center mb-6">
                60% increase in sales
            </div>
            <div class="flex justify-between items-end">
                <div>
                    <p class="font-bold text-slate-900">Priya Sharma</p>
                    <p class="text-xs text-slate-400">Founder</p>
                    <p class="text-xs text-orange-600 font-medium">Ethnic Elegance</p>
                </div>
                <span class="text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded">Traditional Wear</span>
            </div>
        </div>

        <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex text-yellow-400 mb-4">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                The AI understands Indian fashion perfectly. Our kurta collection photos look so authentic, customers think we hired professional models.
            </p>
            <div class="bg-green-50 text-green-700 text-xs font-bold py-2 px-4 rounded-lg text-center mb-6">
                40% better conversion
            </div>
            <div class="flex justify-between items-end">
                <div>
                    <p class="font-bold text-slate-900">Rahul Gupta</p>
                    <p class="text-xs text-slate-400">Marketing Head</p>
                    <p class="text-xs text-orange-600 font-medium">Urban Threads</p>
                </div>
                <span class="text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded">Modern Indian</span>
            </div>
        </div>

        <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex text-yellow-400 mb-4">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            </div>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Perfect for our streetwear brand. The models look exactly like our target audience. Our Instagram engagement doubled!
            </p>
            <div class="bg-green-50 text-green-700 text-xs font-bold py-2 px-4 rounded-lg text-center mb-6">
                2x Instagram engagement
            </div>
            <div class="flex justify-between items-end">
                <div>
                    <p class="font-bold text-slate-900">Ananya Patel</p>
                    <p class="text-xs text-slate-400">Creative Director</p>
                    <p class="text-xs text-orange-600 font-medium">Gen-Z Fashion</p>
                </div>
                <span class="text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded">Streetwear</span>
            </div>
        </div>
    </div>

    <div class="mt-20 bg-orange-50/50 border border-orange-100 rounded-3xl p-8 md:p-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <p class="text-2xl md:text-3xl font-black text-orange-600">500+</p>
                <p class="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-wider">Happy Brands</p>
            </div>
            <div>
                <p class="text-2xl md:text-3xl font-black text-orange-600">4.9<i class="fas fa-star text-lg ml-1"></i></p>
                <p class="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-wider">Average Rating</p>
            </div>
            <div>
                <p class="text-2xl md:text-3xl font-black text-orange-600">50,000+</p>
                <p class="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-wider">Photos Generated</p>
            </div>
            <div>
                <p class="text-2xl md:text-3xl font-black text-orange-600">₹2Cr+</p>
                <p class="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-wider">Savings Generated</p>
            </div>
        </div>
    </div>
    
</section>
  <div id="modal-overlay"
        class="hidden fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100] flex items-center justify-center p-4">
        <div
            class="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-200 relative">
            <div
                class="bg-slate-50 border-b border-slate-100 p-5 px-8 flex justify-between items-center">
                <div>
                    <h2 class="text-xl font-bold text-slate-900 tracking-tight">
                        Get Started</h2>
                    <p class="text-slate-500 text-xs">Transform your business
                        with AI photography.</p>
                </div>
                <button onclick="closeModal()"
                    class="text-slate-400 hover:text-slate-600 transition-colors p-1">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="p-6 px-8 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Brand
                            Name *</label>
                        <input type="text" placeholder="Brand Name"
                            class="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-300" />
                    </div>
                    <div>
                        <label
                            class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Email
                            Address *</label>
                        <input type="email" placeholder="name@company.com"
                            class="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-300" />
                    </div>
                    <div>
                        <label
                            class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Phone
                            Number *</label>
                        <input type="tel" placeholder="+91 00000 00000"
                            class="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder:text-slate-300" />
                    </div>
                    <div>
                        <label
                            class="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Photos
                            Needed *</label>
                        <div class="relative">
                            <select id="photo-count" onchange="updateCost()"
                                class="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-900 outline-none transition-all appearance-none cursor-pointer">
                                <option value="50">50 photos</option>
                                <option value="100">100 photos</option>
                                <option value="500">500 photos</option>
                            </select>
                            <div
                                class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                                <svg class="w-3 h-3" fill="none"
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
                    class="bg-slate-900 rounded-xl p-4 text-white flex justify-between items-center">
                    <div>
                        <p
                            class="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-0.5">
                            Estimated Cost</p>
                        <p class="text-sm font-medium text-slate-200">
                            <span id="display-count">50</span> images <span
                                class="text-slate-500 mx-1">×</span> ₹10
                        </p>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold text-white">₹<span
                                id="total-price">500</span></p>
                        <p class="text-[10px] text-emerald-400 font-medium">Save
                            ₹5,500 vs Studio</p>
                    </div>
                </div>
                <div class="space-y-3">
                    <button
                        class="w-full bg-slate-900 text-white py-3.5 rounded-lg font-bold text-sm hover:bg-slate-800 transition-all active:scale-[0.98] shadow-lg shadow-slate-200">
                        Get Started Now
                    </button>
                    <div class="flex items-center justify-between px-1">
                        <p
                            class="text-[10px] text-slate-400 flex items-center gap-1">
                            <svg class="w-3 h-3" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            Secure Encryption
                        </p>
                        <p
                            class="text-[10px] text-slate-400 font-medium uppercase tracking-tighter italic">
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
