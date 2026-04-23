// components/ImageGallery.jsx
import { useState } from 'react';

const generateImages = (count) => {
  const images = [];
  const prompts = [
    'professional fashion model in studio lighting',
    'luxury product photography on marble surface',
    'cyberpunk cityscape at night',
    'minimalist portrait with soft lighting',
    'vintage car in golden hour',
    'abstract geometric art',
    'coffee shop interior cozy atmosphere',
    'futuristic robot portrait',
    'beach sunset landscape',
    'modern architecture aerial view'
  ];

  for (let i = 0; i < count; i++) {
    images.push({
      id: i + 1,
      src: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000) + 1}?w=500&h=500&fit=crop&crop=center&ixlib=rb-4.0.3`,
      prompt: prompts[Math.floor(Math.random() * prompts.length)],
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date in last 30 days
      size: ['512x512', '1024x1024', '768x1152'][Math.floor(Math.random() * 3)]
    });
  }
  return images;
};

const allImages = generateImages(36);

export default function ImageGallery() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const getFilteredImages = () => {
    let filtered = allImages;

    // Time filters
    const now = new Date();
    switch (filter) {
      case 'today':
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        filtered = filtered.filter(img => new Date(img.date) >= today);
        break;
      case 'week':
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        filtered = filtered.filter(img => new Date(img.date) >= weekAgo);
        break;
      case 'month':
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        filtered = filtered.filter(img => new Date(img.date) >= monthAgo);
        break;
    }

    // Search filter
    if (search) {
      filtered = filtered.filter(img => 
        img.prompt.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredImages = getFilteredImages();

  const ImageCard = ({ image }) => {
    const formatDate = (date) => {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    };

    return (
      <div className="group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl 
                      transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden 
                      border border-white/50 hover:border-gray-200">
        
        {/* Image Preview */}
        <div className="relative h-80 w-full overflow-hidden rounded-t-3xl">
          <img 
            src={image.src}
            alt={image.prompt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent 
                         opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </div>

        {/* Content */}
        <div className="p-6 relative z-10">
          {/* Prompt */}
          <p className="text-sm text-gray-600 line-clamp-2 mb-4 group-hover:text-gray-900 
                       transition-colors duration-300 font-medium">
            {image.prompt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">
              {image.size}
            </span>
            <span className="text-xs text-gray-500">
              {formatDate(image.date)}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 
                         transition-all duration-400 delay-150 translate-y-2 group-hover:translate-y-0">
            <button className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 
                              text-white text-sm font-semibold py-3 px-4 rounded-2xl shadow-lg hover:shadow-xl 
                              transition-all duration-300 flex items-center justify-center space-x-2
                              group-hover:scale-105">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download</span>
            </button>
            
            <button className="p-3 bg-white/60 hover:bg-white backdrop-blur-sm rounded-2xl shadow-lg 
                              hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-200
                              hover:border-gray-300">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.5h3m1.5-3l-3-3m0 0l-3 3m3-3v2.5A2.5 2.5 0 019.5 20H5m14-9a2 2 0 00-2-2h-2.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent mb-6">
            Your Image Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse, download, and remix your AI-generated masterpieces. All your creations in one place.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center mb-16 bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search your images..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl bg-white/50 
                        focus:ring-4 focus:ring-indigo-100/50 focus:border-indigo-400 
                        transition-all duration-300 shadow-sm text-lg placeholder-gray-500"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center space-x-2 flex-wrap gap-2">
            {['all', 'today', 'week', 'month'].map((period) => (
              <button
                key={period}
                onClick={() => setFilter(period)}
                className={`
                  px-6 py-3 rounded-2xl font-medium text-sm shadow-lg transition-all duration-300
                  hover:shadow-xl hover:-translate-y-0.5
                  ${filter === period
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-indigo-300/50'
                    : 'bg-white/70 text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-white/90'
                  }
                `}
              >
                {period === 'all' ? 'All Time' : period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="text-right text-sm text-gray-600 lg:min-w-[120px]">
            <div className="font-semibold text-lg text-gray-900">{filteredImages.length}</div>
            <div>images</div>
          </div>
        </div>

        {/* Images Grid */}
        {filteredImages.length === 0 ? (
          <div className="text-center py-32">
            <div className="w-32 h-32 bg-gray-200 rounded-3xl mx-auto mb-8 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">No images found</h3>
            <p className="text-xl text-gray-600 max-w-md mx-auto">
              Try adjusting your search or filter. Your images will appear here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
            {filteredImages.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredImages.length > 0 && (
          <div className="text-center mt-20">
            <button className="px-12 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 
                              text-white font-semibold rounded-3xl shadow-2xl hover:shadow-3xl 
                              transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span>Load More</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}