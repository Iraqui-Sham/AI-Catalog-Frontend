// components/DashboardHome.jsx
import { useState } from 'react';

const quickActions = [
  {
    title: 'Generate Fashion Model',
    description: 'Create professional fashion models',
    icon: '👗',
    color: 'from-rose-500 to-pink-500',
    prompt: 'professional fashion model wearing trendy outfit, studio lighting, high fashion photography'
  },
  {
    title: 'Product to Model',
    description: 'Place your product on a model',
    icon: '📸',
    color: 'from-emerald-500 to-teal-500',
    prompt: 'product on fashion model hand, lifestyle photography, natural lighting'
  },
  {
    title: 'Background Change',
    description: 'Replace backgrounds instantly',
    icon: '🎨',
    color: 'from-purple-500 to-indigo-500',
    prompt: 'remove background, studio white background, product photography'
  }
];

const recentImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1664575197620-516948efa676?w=400&h=400&fit=crop&crop=center',
    prompt: 'futuristic cyberpunk cityscape at night',
    likes: 24,
    downloads: 12
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1558618047-3c8c76fdd7f4?w=400&h=400&fit=crop&crop=center',
    prompt: 'minimalist product photography',
    likes: 18,
    downloads: 8
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center',
    prompt: 'luxury watch on wrist',
    likes: 32,
    downloads: 15
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center',
    prompt: 'fashion model portrait',
    likes: 41,
    downloads: 22
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&crop=center',
    prompt: 'abstract geometric art',
    likes: 15,
    downloads: 7
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop&crop=center',
    prompt: 'coffee shop interior',
    likes: 28,
    downloads: 19
  }
];

export default function DashboardHome() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  const ImageCard = ({ image }) => (
    <div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl 
                    transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-white/50">
      <div className="relative h-64 w-full overflow-hidden rounded-2xl">
        <img 
          src={image.src}
          alt={image.prompt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 group-hover:text-gray-900 transition-colors">
          {image.prompt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>❤️ {image.likes}</span>
            <span>⬇️ {image.downloads}</span>
          </div>
          
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className="p-2 hover:bg-white/50 rounded-xl transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-white/50 rounded-xl transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.5h3m1.5-3l-3-3m0 0l-3 3m3-3v2.5A2.5 2.5 0 019.5 20H5m14-9a2 2 0 00-2-2h-2.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent mb-6">
            Generate Stunning AI Images
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Turn your ideas into breathtaking visuals instantly. Professional quality, zero hassle.
          </p>
        </div>

        {/* Prompt Input */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-1">
            <div className="flex">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your perfect image... e.g., 'futuristic cyberpunk city at sunset, cinematic lighting'"
                className="flex-1 px-8 py-8 text-xl bg-transparent border-0 focus:ring-0 placeholder-gray-500 outline-none"
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
                          text-white font-bold px-12 py-8 rounded-2xl shadow-xl hover:shadow-2xl 
                          transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap
                          disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isGenerating ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Generating...</span>
                  </div>
                ) : (
                  <>
                    <span>Generate</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Quick Actions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start with our popular templates or create from scratch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl 
                      transition-all duration-500 hover:-translate-y-4 cursor-pointer border border-white/50
                      hover:bg-white/90 hover:border-orange-200"
              onClick={() => setPrompt(action.prompt)}
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 
                             bg-gradient-to-br {action.color} rounded-3xl flex items-center justify-center 
                             shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{action.icon}</span>
              </div>
              
              <div className="text-center pt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                  {action.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{action.description}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-orange-600 font-medium">Click to use →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Images */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Recent Creations
            </h2>
            <p className="text-xl text-gray-600 mt-2">Your latest AI-generated masterpieces</p>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:from-orange-600 hover:to-orange-700 transform hover:-translate-y-1 transition-all duration-300">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentImages.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      </section>
    </div>
  );
}