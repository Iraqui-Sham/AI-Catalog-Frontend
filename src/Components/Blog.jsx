import React from 'react'

export default function Blog() {
  return (
    <>
    <header className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">FitVersion <span
                className="text-orange-600">Blog</span></h1>
        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Discover the latest insights on AI photography, e-commerce growth,
            and product imaging best practices.
        </p>
        <div className="relative max-w-xl mx-auto mb-10">
            <input type="text" placeholder="Search articles..."
                className="w-full pl-5 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"/>
            <i
                className="fa-solid fa-magnifying-glass absolute right-5 top-4 text-gray-400"></i>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
            <button
                className="px-5 py-2 bg-orange-600 text-white rounded-md text-sm font-medium">All
                Posts</button>
            <button
                className="px-5 py-2 bg-white border border-gray-200 hover:bg-gray-100 rounded-md text-sm font-medium transition"><i
                    className="fa-solid fa-camera mr-2"></i>AI Photography</button>
            <button
                className="px-5 py-2 bg-white border border-gray-200 hover:bg-gray-100 rounded-md text-sm font-medium transition"><i
                    className="fa-solid fa-cart-shopping mr-2"></i>E-commerce</button>
            <button
                className="px-5 py-2 bg-white border border-gray-200 hover:bg-gray-100 rounded-md text-sm font-medium transition"><i
                    className="fa-solid fa-chart-line mr-2"></i>Marketing</button>
            <button
                className="px-5 py-2 bg-white border border-gray-200 hover:bg-gray-100 rounded-md text-sm font-medium transition"><i
                    className="fa-solid fa-book-open mr-2"></i>Tutorials</button>
            <button
                className="px-5 py-2 bg-white border border-gray-200 hover:bg-gray-100 rounded-md text-sm font-medium transition"><i
                    className="fa-solid fa-briefcase mr-2"></i>Case Studies</button>
        </div>
    </header>
    <main className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
            <h2 className="text-2xl font-bold">All Articles</h2>
            <span className="text-gray-400 text-sm">Articles 1-9 of 12</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-56">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600"
                        alt="Blog" className="w-full h-full object-cover"/>
 /                   <span
                        className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Case
                        Study</span>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>February 17, 2024</span> <span
                            className="mx-2">•</span> <span>4 min read</span>
                    </div>
                    <h3
                        className="text-xl font-bold mb-3 hover:text-orange-600 cursor-pointer transition">
                        The Future of Fashion Retail and How AI is
                        Revolutionizing 2024</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">Fashion
                        brands are constantly evolving where customers want
                        faster, personalized experiences.</p>
                    <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=1"
                            className="w-10 h-10 rounded-full mr-3" alt="author"/>
                        <div>
                            <p className="text-sm font-bold">FitVersion Team</p>
                            <p className="text-xs text-gray-400">Founder, CEO</p>
                        </div>
                    </div>
                </div>
            </article>
            <article
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-56">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
                        alt="Blog" className="w-full h-full object-cover"/>
                   <span
                        className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">AI
                        Trends</span>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>February 17, 2024</span> <span
                            className="mx-2">•</span> <span>4 min read</span>
                    </div>
                    <h3
                        className="text-xl font-bold mb-3 hover:text-orange-600 cursor-pointer transition">
                        How to Build a Successful Brand With Stunning AI Ads?
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">Brand
                        visual consistency is key to standing out. AI tools help
                        streamline this process.</p>
                    <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=2"
                            className="w-10 h-10 rounded-full mr-3" alt="author"/>
                        <div>
                            <p className="text-sm font-bold">FitVersion Team</p>
                            <p className="text-xs text-gray-400">Content Lead</p>
                        </div>
                    </div>
                </div>
            </article>
            <article
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-56">
                    <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600"
                        alt="Blog" className="w-full h-full object-cover"/>
 /                   <span
                        className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Tutorial</span>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>February 15, 2024</span> <span
                            className="mx-2">•</span> <span>6 min read</span>
                    </div>
                    <h3
                        className="text-xl font-bold mb-3 hover:text-orange-600 cursor-pointer transition">
                        Mastering Product Photography for Jewelry Brands</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">Learn how
                        to capture the sparkle and detail of high-end jewelry
                        products.</p>
                    <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=3"
                            className="w-10 h-10 rounded-full mr-3" alt="author"/>
                        <div>
                            <p className="text-sm font-bold">FitVersion Team</p>
                            <p className="text-xs text-gray-400">Art Director</p>
                        </div>
                    </div>
                </div>
            </article>
            <article
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-56">
                    <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=600"
                        alt="Blog" className="w-full h-full object-cover"/>
 /                   <span
                        className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">E-commerce</span>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>February 12, 2024</span> <span
                            className="mx-2">•</span> <span>5 min read</span>
                    </div>
                    <h3
                        className="text-xl font-bold mb-3 hover:text-orange-600 cursor-pointer transition">
                        Optimizing Your Checkout Flow for 2x Conversions</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">Small
                        changes to your checkout page can lead to massive
                        revenue growth.</p>
                    <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=4"
                            className="w-10 h-10 rounded-full mr-3" alt="author"/>
                        <div>
                            <p className="text-sm font-bold">FitVersion Team</p>
                            <p className="text-xs text-gray-400">UX Researcher</p>
                        </div>
                    </div>
                </div>
            </article>
            <article
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-56">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
                        alt="Blog" className="w-full h-full object-cover"/>
 /                   <span
                        className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Marketing</span>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>February 10, 2024</span> <span
                            className="mx-2">•</span> <span>3 min read</span>
                    </div>
                    <h3
                        className="text-xl font-bold mb-3 hover:text-orange-600 cursor-pointer transition">
                        The Rise of Social Commerce in 2024</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">How
                        TikTok and Instagram are changing the way people buy
                        products online.</p>
                    <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=5"
                            className="w-10 h-10 rounded-full mr-3" alt="author"/>
                        <div>
                            <p className="text-sm font-bold">FitVersion Team</p>
                            <p className="text-xs text-gray-400">Growth Hacker</p>
                        </div>
                    </div>
                </div>
            </article>
            <article
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-56">
                    <img src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=600"
                        alt="Blog" className="w-full h-full object-cover"/>
 /                   <span
                        className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">AI
                        Tools</span>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>February 08, 2024</span> <span
                            className="mx-2">•</span> <span>8 min read</span>
                    </div>
                    <h3
                        className="text-xl font-bold mb-3 hover:text-orange-600 cursor-pointer transition">
                        10 AI Tools Every Creative Director Needs</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">Automate
                        your workflow and focus on strategy with these essential
                        AI tools.</p>
                    <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=6"
                            className="w-10 h-10 rounded-full mr-3" alt="author"/>
                        <div>
                            <p className="text-sm font-bold">FitVersion Team</p>
                            <p className="text-xs text-gray-400">Design Lead</p>
                        </div>
                    </div>
                </div>
            </article>
            <article
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-56">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
                        alt="Blog" className="w-full h-full object-cover"/>
 /                   <span
                        className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Strategy</span>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>February 05, 2024</span> <span
                            className="mx-2">•</span> <span>5 min read</span>
                    </div>
                    <h3
                        className="text-xl font-bold mb-3 hover:text-orange-600 cursor-pointer transition">
                        Data-Driven Design: Making Better Brand Decisions</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">Don't
                        guess. Use analytics to drive your creative direction
                        and marketing.</p>
                    <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=7"
                            className="w-10 h-10 rounded-full mr-3" alt="author"/>
                        <div>
                            <p className="text-sm font-bold">FitVersion Team</p>
                            <p className="text-xs text-gray-400">Data Analyst</p>
                        </div>
                    </div>
                </div>
            </article>
            <article
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-56">
                    <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=600"
                        alt="Blog" className="w-full h-full object-cover"/>
 /                   <span
                        className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Business</span>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>February 01, 2024</span> <span
                            className="mx-2">•</span> <span>4 min read</span>
                    </div>
                    <h3
                        className="text-xl font-bold mb-3 hover:text-orange-600 cursor-pointer transition">
                        Scaling Your Agency in a Competitive Market</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">How to
                        find your niche and grow your client base effectively.
                    </p>
                    <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=8"
                            className="w-10 h-10 rounded-full mr-3" alt="author"/>
                        <div>
                            <p className="text-sm font-bold">FitVersion Team</p>
                            <p className="text-xs text-gray-400">Project Manager</p>
                        </div>
                    </div>
                </div>
            </article>
            <article
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-56">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
                        alt="Blog" className="w-full h-full object-cover"/>
 /                   <span
                        className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Analytics</span>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>January 28, 2024</span> <span
                            className="mx-2">•</span> <span>7 min read</span>
                    </div>
                    <h3
                        className="text-xl font-bold mb-3 hover:text-orange-600 cursor-pointer transition">
                        Understanding Customer Lifetime Value (CLV)</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">Learn why
                        CLV is the most important metric for your e-commerce
                        store.</p>
                    <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=9"
                            className="w-10 h-10 rounded-full mr-3" alt="author"/>
                        <div>
                            <p className="text-sm font-bold">FitVersion Team</p>
                            <p className="text-xs text-gray-400">Marketing Lead</p>
                        </div>
                    </div>
                </div>
            </article>
            <article
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-56">
                    <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600"
                        alt="Blog" className="w-full h-full object-cover"/>
 /                   <span
                        className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Design</span>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>January 25, 2024</span> <span
                            className="mx-2">•</span> <span>4 min read</span>
                    </div>
                    <h3
                        className="text-xl font-bold mb-3 hover:text-orange-600 cursor-pointer transition">
                        Minimalism in Modern Web Interface Design</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">Why less
                        is often more when it comes to high-converting websites.
                    </p>
                    <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=10"
                            className="w-10 h-10 rounded-full mr-3" alt="author"/>
                        <div>
                            <p className="text-sm font-bold">FitVersion Team</p>
                            <p className="text-xs text-gray-400">Lead Designer</p>
                        </div>
                    </div>
                </div>
            </article>
            <article
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="relative h-56">
                    <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600"
                        alt="Blog" className="w-full h-full object-cover"/>
 /                   <span
                        className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Technology</span>
                </div>
                <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>January 20, 2024</span> <span
                            className="mx-2">•</span> <span>6 min read</span>
                    </div>
                    <h3
                        className="text-xl font-bold mb-3 hover:text-orange-600 cursor-pointer transition">
                        The Impact of 5G on Mobile Shopping</h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2">How
                        faster connectivity speeds are enabling richer AR
                        shopping experiences.</p>
                    <div className="flex items-center">
                        <img src="https://i.pravatar.cc/150?u=11"
                            className="w-10 h-10 rounded-full mr-3" alt="author"/>
                        <div>
                            <p className="text-sm font-bold">FitVersion Team</p>
                            <p className="text-xs text-gray-400">Tech Lead</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </main> 
    </>
  )
}
