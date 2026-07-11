import React, { useState } from 'react'

const categories = [
    { key: "all", label: "All Posts", icon: "📚" },
    { key: "photography", label: "AI Photography", icon: "📸" },
    { key: "ecommerce", label: "E-commerce", icon: "🛒" },
    { key: "fashion", label: "AI Fashion", icon: "👗" },
    { key: "case-study", label: "Case Studies", icon: "💼" },
];

const posts = [
    {
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600",
        tag: "Case Study",
        category: "case-study",
        date: "February 17, 2024",
        read: "4 min read",
        title: "How an Indian D2C Brand Cut Photoshoot Costs by 90% With AI",
        desc: "A jewellery brand replaced their monthly studio shoots with AI photography — here's the exact before/after breakdown.",
        author: "FitVeSion Team",
        role: "Founder, CEO",
        avatar: 1,
    },
    {
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
        tag: "AI Photography",
        category: "photography",
        date: "February 17, 2024",
        read: "4 min read",
        title: "From Raw Phone Photo to Studio Shot: How the AI Pipeline Works",
        desc: "A behind-the-scenes look at how a single phone photo becomes a studio-quality, marketplace-ready image.",
        author: "FitVeSion Team",
        role: "Content Lead",
        avatar: 2,
    },
    {
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600",
        tag: "Tutorial",
        category: "photography",
        date: "February 15, 2024",
        read: "6 min read",
        title: "Mastering Product Photography for Jewellery Brands",
        desc: "Learn how AI captures the sparkle and fine detail of high-end jewellery — no macro lens required.",
        author: "FitVeSion Team",
        role: "Art Director",
        avatar: 3,
    },
    {
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=600",
        tag: "E-commerce",
        category: "ecommerce",
        date: "February 12, 2024",
        read: "5 min read",
        title: "Amazon & Flipkart Image Compliance: The Complete Checklist",
        desc: "White backgrounds, resolution, crop ratios — everything your listing images need to get approved fast.",
        author: "FitVeSion Team",
        role: "UX Researcher",
        avatar: 4,
    },
    {
        image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=600",
        tag: "AI Fashion",
        category: "fashion",
        date: "February 10, 2024",
        read: "3 min read",
        title: "Virtual Try-On: The Future of Fashion Shopping",
        desc: "How AI-generated models are letting shoppers 'see it on' before they buy — without a single photoshoot.",
        author: "FitVeSion Team",
        role: "Growth Lead",
        avatar: 5,
    },
    {
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
        tag: "AI Photography",
        category: "photography",
        date: "February 08, 2024",
        read: "8 min read",
        title: "One Photo, Six Ad-Ready Variations: A Practical Guide",
        desc: "Angles, backgrounds, and poses — how to get a full catalog set out of a single product shot.",
        author: "FitVeSion Team",
        role: "Design Lead",
        avatar: 6,
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        tag: "Case Study",
        category: "case-study",
        date: "February 05, 2024",
        read: "5 min read",
        title: "From 2 Photoshoots a Year to Weekly Drops: A Fashion Brand's Story",
        desc: "How a small fashion label scaled its catalog output without scaling its budget.",
        author: "FitVeSion Team",
        role: "Project Manager",
        avatar: 7,
    },
    {
        image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=600",
        tag: "E-commerce",
        category: "ecommerce",
        date: "February 01, 2024",
        read: "4 min read",
        title: "Why Studio-Quality Photos Directly Increase Conversions",
        desc: "The data behind product imagery and its impact on add-to-cart and checkout rates.",
        author: "FitVeSion Team",
        role: "Marketing Lead",
        avatar: 8,
    },
    {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        tag: "Marketing",
        category: "ecommerce",
        date: "January 28, 2024",
        read: "3 min read",
        title: "Instagram-Ready: Preparing Product Shots for Social Commerce",
        desc: "Formatting, backgrounds, and crops that actually perform in Reels and Stories.",
        author: "FitVeSion Team",
        role: "Social Lead",
        avatar: 9,
    },
    {
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=600",
        tag: "AI Fashion",
        category: "fashion",
        date: "January 25, 2024",
        read: "4 min read",
        title: "Choosing the Right AI Model for Your Fashion Catalog",
        desc: "Body type, pose, and background — how to pick AI-generated models that match your brand.",
        author: "FitVeSion Team",
        role: "Creative Director",
        avatar: 10,
    },
    {
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600",
        tag: "Tutorial",
        category: "photography",
        date: "January 20, 2024",
        read: "5 min read",
        title: "5 Common Mistakes in DIY Product Photography (and Fixes)",
        desc: "Lighting, shadows, and background clutter — the most common issues AI photography solves instantly.",
        author: "FitVeSion Team",
        role: "Tech Lead",
        avatar: 11,
    },
];

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredPosts = activeCategory === "all"
        ? posts
        : posts.filter((p) => p.category === activeCategory);

    return (
        <>
            <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    FitVeSion <span className="text-brand-500">Blog</span>
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto mb-8">
                    Discover the latest insights on AI photography, e-commerce growth,
                    and product imaging best practices.
                </p>
                <div className="relative max-w-xl mx-auto mb-10">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        className="w-full pl-5 pr-12 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
                    />
                    <span className="absolute right-5 top-3.5 text-gray-400">🔍</span>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={`px-5 py-2 rounded-md text-sm font-medium transition ${
                                activeCategory === cat.key
                                    ? "bg-brand-500 text-white"
                                    : "bg-white border border-gray-200 hover:bg-gray-100"
                            }`}
                        >
                            <span className="mr-2">{cat.icon}</span>
                            {cat.label}
                        </button>
                    ))}
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 pb-20">
                <div className="flex justify-between items-center mb-8 border-b pb-4">
                    <h2 className="text-2xl font-bold">All Articles</h2>
                    <span className="text-gray-400 text-sm">
                        {filteredPosts.length} of {posts.length} articles
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, i) => (
                        <article
                            key={i}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <span className="absolute top-4 left-4 bg-brand-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
                                    {post.tag}
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-xs text-gray-400 mb-3">
                                    <span>{post.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.read}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-600 cursor-pointer transition">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-2">{post.desc}</p>
                                <div className="flex items-center">
                                    <img
                                        src={`https://i.pravatar.cc/150?u=${post.avatar}`}
                                        className="w-10 h-10 rounded-full mr-3"
                                        alt="author"
                                    />
                                    <div>
                                        <p className="text-sm font-bold">{post.author}</p>
                                        <p className="text-xs text-gray-400">{post.role}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <p className="text-center text-gray-400 py-16">No articles in this category yet.</p>
                )}
            </main>
        </>
    )
}
