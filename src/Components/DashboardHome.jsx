import React from 'react';
import { ImagePlus, Send, PlayCircle, Shirt, UserPlus, RefreshCw, Wand2 } from 'lucide-react';

const FeatureCard = ({ title, desc, icon: Icon, image, badge }) => (
  <div className="relative min-w-[280px] h-[320px] rounded-[32px] overflow-hidden group cursor-pointer border border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
    {/* Background Image Overlay */}
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
    
    {/* Floating Glass Button */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="px-6 py-2.5 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold flex items-center gap-2">
        <Icon size={16} />
        <span>Try Now</span>
      </div>
    </div>

    {/* Bottom Content */}
    <div className="absolute bottom-6 left-6 right-6">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3">
        <Icon size={14} className="text-white" />
        <span className="text-[10px] font-bold text-white uppercase tracking-wider">{badge}</span>
      </div>
      <p className="text-white text-xs font-medium leading-relaxed opacity-90">{desc}</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto space-y-12 pb-20">
      
      {/* Top Section: Heading + Input + Banner */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-7 space-y-8">
          <h1 className="text-5xl font-serif text-slate-900 leading-[1.1] tracking-tight">
            What will your next <br />
            <span className="italic text-slate-400">photoshoot</span> be?
          </h1>

          {/* Main Prompt Box */}
          <div className="relative group">
            <div className="bg-white rounded-[32px] border border-slate-200 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-300 focus-within:border-black focus-within:shadow-xl">
              <textarea 
                placeholder="Describe anything you want to create..."
                className="w-full h-32 resize-none text-xl outline-none placeholder:text-slate-300 font-light"
              />
              <div className="flex items-center justify-between mt-4">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
                  <ImagePlus size={18} />
                  <span className="text-sm font-semibold">Add images</span>
                </button>
                <button className="p-4 rounded-full bg-black text-white hover:bg-slate-800 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-black/20">
                  <Send size={20} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Banner Card: Create a Video */}
        <div className="lg:col-span-5 h-full min-h-[400px] relative rounded-[40px] overflow-hidden group border border-slate-100 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1539109132314-34a9c668b371?q=80&w=2574&auto=format&fit=crop" 
            alt="Video creator" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute top-10 left-10 space-y-4 max-w-[280px]">
            <div className="flex items-center gap-2 text-white/80">
              <PlayCircle size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">New</span>
            </div>
            <h3 className="text-4xl font-serif text-white leading-tight">Create a Video</h3>
            <p className="text-white/80 text-sm leading-relaxed">Turn any image into a short motion clip in seconds.</p>
            <button className="mt-4 flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black font-bold text-sm hover:bg-slate-100 transition-colors">
              Try it now <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Feature Slider Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Featured Workflows</h4>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-black" />
            <div className="w-2 h-2 rounded-full bg-slate-200" />
          </div>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar scroll-smooth">
          <FeatureCard 
            badge="Product to Model"
            title="Professional Models"
            desc="Turn wearable product images into professional model shots."
            icon={Shirt}
            image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000"
          />
          <FeatureCard 
            badge="Try-On"
            title="Virtual Fit"
            desc="Visualize how an outfit looks on different body types."
            icon={UserPlus}
            image="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000"
          />
          <FeatureCard 
            badge="Model Swap"
            title="Face Swap"
            desc="Change the model while preserving pose and garment details."
            icon={RefreshCw}
            image="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1000"
          />
          <FeatureCard 
            badge="Edit"
            title="Quick Refine"
            desc="Change color, pose, background with a single prompt."
            icon={Wand2}
            image="https://images.unsplash.com/photo-1529139513055-07f9f27edcbb?q=80&w=1000"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;