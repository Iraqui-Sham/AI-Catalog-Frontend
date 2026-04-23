// components/StudioPage.jsx
import { useState } from 'react';

const templates = [
  { id: 'fashion', name: 'Fashion Model', icon: '👗', description: 'Professional fashion photography', color: 'from-rose-400 to-pink-500' },
  { id: 'product', name: 'Product Shot', icon: '📦', description: 'Clean product photography', color: 'from-emerald-400 to-teal-500' },
  { id: 'model', name: 'Lifestyle Model', icon: '🧍‍♀️', description: 'Natural lifestyle portraits', color: 'from-purple-400 to-indigo-500' },
];

const styles = [
  'Realistic', 'Cinematic', 'Studio', 'Vintage', 'Cyberpunk', 'Minimalist', 'Luxury', 'Artistic'
];

export default function StudioPage() {
  const [prompt, setPrompt] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const clearUpload = () => {
    setUploadedImage(null);
    setImagePreview(null);
    document.getElementById('image-upload').value = '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent mb-6">
            AI Image Studio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create professional images with simple prompts. Powered by cutting-edge AI.
          </p>
        </div>

        {/* Main Studio Interface */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Prompt & Controls */}
          <div className="space-y-8">
            {/* Prompt Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4 tracking-wide uppercase">
                Your Prompt
              </label>
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your image in detail...&#10;&#10;Examples:&#10;'Professional fashion model wearing red dress, studio lighting, full body shot'&#10;'Luxury watch on marble surface, dramatic lighting, product photography'"
                  rows={8}
                  className="w-full p-8 text-lg bg-white/70 backdrop-blur-xl border-2 border-gray-200 
                            rounded-3xl shadow-xl focus:border-orange-400 focus:ring-4 focus:ring-orange-100/50
                            resize-none transition-all duration-300 placeholder-gray-500 
                            hover:shadow-2xl hover:border-gray-300 hover:bg-white/90"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                  {prompt.length}/1000
                </div>
              </div>
            </div>

            {/* Templates */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-6 tracking-wide uppercase">
                Quick Templates
              </label>
              <div className="grid grid-cols-3 gap-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id === selectedTemplate ? null : template.id)}
                    className={`
                      group relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                      hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
                      ${selectedTemplate === template.id 
                        ? 'border-orange-400 bg-gradient-to-br from-orange-50 to-orange-100 shadow-orange-200 ring-2 ring-orange-200/50' 
                        : 'border-gray-200 bg-white/70 hover:border-gray-300 hover:bg-white/90'
                      }
                    `}
                  >
                    <div className={`
                      absolute inset-0 bg-gradient-to-br ${template.color} opacity-0 group-hover:opacity-10 
                      rounded-2xl transition-opacity duration-300
                    `} />
                    
                    <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                      <div className={`w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg
                                     ${selectedTemplate === template.id ? 'ring-2 ring-white/50 scale-110' : ''}`}>
                        <span className="text-2xl">{template.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{template.name}</h4>
                        <p className="text-xs text-gray-500">{template.description}</p>
                      </div>
                    </div>
                    
                    {selectedTemplate === template.id && (
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                        ✓
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Styles */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-6 tracking-wide uppercase">
                Style
              </label>
              <div className="flex flex-wrap gap-3">
                {styles.map((style) => (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(selectedStyle === style ? '' : style)}
                    className={`
                      px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300
                      shadow-lg hover:shadow-xl hover:-translate-y-0.5
                      ${selectedStyle === style
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-300/50'
                        : 'bg-white/70 text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-white/90'
                      }
                    `}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Upload & Generate */}
          <div className="space-y-8 lg:sticky lg:top-24 self-start">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-6 tracking-wide uppercase">
                Reference Image (Optional)
              </label>
              <div className="relative group">
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className={`
                  w-full aspect-video rounded-3xl border-2 border-dashed border-gray-300
                  bg-gradient-to-br from-gray-50 to-white/50 backdrop-blur-sm shadow-xl
                  hover:border-orange-400 hover:shadow-2xl transition-all duration-300 cursor-pointer
                  flex flex-col items-center justify-center text-center p-12
                  ${imagePreview ? 'bg-cover bg-center' : ''}
                  ${imagePreview ? 'border-orange-400 bg-orange-50/80' : 'group-hover:bg-orange-50/50'}
                `}
                style={imagePreview ? { backgroundImage: `url(${imagePreview})` } : {}}
                >
                  {imagePreview ? (
                    <>
                      <div className="absolute inset-0 bg-black/20 rounded-3xl" />
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-lg font-semibold text-white mb-2">Image Uploaded!</p>
                        <p className="text-white/90 text-sm">Click to change</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 bg-gray-200 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Reference</h3>
                        <p className="text-gray-600 text-sm">PNG, JPG up to 10MB</p>
                      </div>
                    </>
                  )}
                </div>
                
                {imagePreview && (
                  <button
                    onClick={clearUpload}
                    className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-2xl shadow-xl border border-gray-200
                              hover:bg-red-50 hover:border-red-300 flex items-center justify-center text-red-500
                              transition-all duration-200 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Generate Button */}
            <div className="pt-4">
              <button
                onClick={handleGenerate}
                disabled={isGenerating || (!prompt && !selectedTemplate)}
                className="w-full group bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 
                          hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white 
                          font-bold py-8 px-12 rounded-3xl shadow-2xl hover:shadow-3xl 
                          transform hover:-translate-y-2 transition-all duration-500 relative overflow-hidden
                          disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                          disabled:from-gray-400 disabled:to-gray-500"
              >
                <div className="absolute inset-0 bg-white/20 rotate-12 group-hover:rotate-0 transition-all duration-1000 opacity-0 group-hover:opacity-100" />
                
                <div className="relative flex items-center justify-center space-x-3">
                  {isGenerating ? (
                    <>
                      <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="font-semibold">Generating your image...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">Generate Image</span>
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Preview Area */}
            <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 shadow-xl text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Image Preview</h3>
                <p className="text-sm text-gray-600">Your generated image will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}