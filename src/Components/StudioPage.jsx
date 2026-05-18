import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload,
  FolderOpen,
  X,
  Check,
  RefreshCw,
  Download,
  Eye,
  ArrowRight,
  ImageIcon,
  ChevronRight,
} from 'lucide-react';

import SummaryStep from '../Components/studio/SummaryStep';
import ResultsStep from '../Components/studio/ResultsStep';

import pastResult1 from '../assets/studio/past1.jpg';
import pastResult2 from '../assets/studio/past2.jpg';
import pastResult3 from '../assets/studio/past3.jpg';
import API from "../services/api";

// ── Stepper ────────────────────────────────────────────────────────────────────
const steps = [
  { num: 1, label: 'Upload & Select' },
  { num: 2, label: 'Summary' },
  { num: 3, label: 'Results' },
];

function Stepper({ currentStep }) {
  return (
    <div className="flex items-center gap-0">
      {steps.map((step, i) => {
        const isActive = step.num === currentStep;
        const isDone = step.num < currentStep;
        return (
          <div key={step.num} className="flex items-center">
            <div className="flex items-center gap-2">
              {/* Circle */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 flex-shrink-0 ${isDone
                  ? 'bg-[#111111] text-white'
                  : isActive
                    ? 'bg-[#111111] text-white ring-4 ring-[#111111]/10'
                    : 'bg-[#F0F0F0] text-[#AAAAAA]'
                  }`}
              >
                {isDone ? <Check size={13} /> : step.num}
              </div>
              {/* Label */}
              <span
                className={`text-sm font-semibold whitespace-nowrap hidden sm:inline ${isActive ? 'text-[#111111]' : isDone ? 'text-[#555555]' : 'text-[#BBBBBB]'
                  }`}
              >
                {step.label}
              </span>
            </div>
            {/* Connector */}
            {i < steps.length - 1 && (
              <div className="flex items-center mx-3">
                <div
                  className={`h-px w-8 md:w-16 transition-colors duration-300 ${step.num < currentStep ? 'bg-[#111111]' : 'bg-[#E0E0E0]'
                    }`}
                />
                <ChevronRight size={12} className="text-[#CCCCCC] -ml-1" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Product Card ───────────────────────────────────────────────────────────────
function ProductCard({
  product,
  onToggle,
  onRemove,
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.88 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onClick={() => onToggle(product.id)}
      className={`relative rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-200 group ${product.selected
        ? 'border-[#111111] shadow-[0_0_0_3px_rgba(17,17,17,0.08)]'
        : 'border-[#E8E8E8] hover:border-[#CCCCCC] hover:shadow-md'
        }`}
    >
      {/* Image */}
      <div className="aspect-[3/4] bg-[#F5F5F5] overflow-hidden">
        <img
          src={product.previewUrl}
          alt={product.file.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Selected checkmark */}
      <AnimatePresence>
        {product.selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center shadow-md"
          >
            <Check size={13} className="text-white" strokeWidth={3} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Remove button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(product.id);
        }}
        className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm border border-[#E0E0E0] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150 hover:bg-red-50 hover:border-red-200"
      >
        <X size={11} className="text-[#555555] hover:text-red-500" />
      </button>

      {/* File name */}
      <div className="p-3 bg-white border-t border-[#F0F0F0]">
        <p className="text-xs font-semibold text-[#222222] truncate">{product.file.name}</p>
        <p className="text-[10px] text-[#AAAAAA] truncate mt-0.5">{product.file.name}</p>
      </div>
    </motion.div>
  );
}

// ── Past Result Card ───────────────────────────────────────────────────────────
function PastResultCard({
  imageSlot,
  name,
  totalImages,
  timeAgo,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F5F5]">
        <img
          src={imageSlot}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
        {/* Count badge */}
        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold">
          {totalImages}/{totalImages}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
          <button className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow hover:bg-white transition-colors">
            <Eye size={15} className="text-[#111111]" />
          </button>
          <button className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow hover:bg-white transition-colors">
            <Download size={15} className="text-[#111111]" />
          </button>
        </div>
        {/* Name overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 pt-6 pb-2.5">
          <p className="text-white text-xs font-semibold truncate">{name}</p>
        </div>
      </div>

      {/* Meta */}
      <div className="px-3.5 py-3 border-t border-[#F5F5F5]">
        <div className="flex items-center justify-between mb-2.5">
          <div className="text-[11px] text-[#888888] space-y-0.5">
            <p>Total images: <span className="font-semibold text-[#444444]">{totalImages}</span></p>
            <p className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              100% done · {timeAgo}
            </p>
          </div>
        </div>
        <button className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl border border-[#E5E5E5] text-xs font-semibold text-[#333333] hover:bg-[#F5F5F5] hover:border-[#CCCCCC] transition-all duration-150">
          <Eye size={13} />
          View Results
        </button>
      </div>
    </motion.div>
  );
}

export default function StudioPage() {
  const [products, setProducts] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [generatedResult, setGeneratedResult] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef(null);

  const processFiles = useCallback((files) => {
    const arr = Array.from(files).filter((f) =>
      ['image/png', 'image/jpeg', 'image/webp'].includes(f.type)
    );
    const newProducts = arr.map((file) => ({
      id: `${Date.now()}-${Math.random()}`,
      file,
      previewUrl: URL.createObjectURL(file),
      selected: false,
    }));
    setProducts((prev) => [...prev, ...newProducts]);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
      processFiles(e.dataTransfer.files);
    },
    [processFiles]
  );

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleFileInput = (e) => {
    if (e.target.files) processFiles(e.target.files);
    e.target.value = '';
  };

  const toggleProduct = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, selected: !p.selected } : p))
    );
  };

  const removeProduct = (id) => {
    setProducts((prev) => {
      const p = prev.find((x) => x.id === id);
      if (p) URL.revokeObjectURL(p.previewUrl);
      return prev.filter((x) => x.id !== id);
    });
  };

  const handleGenerate = async () => {

    try {

      setCurrentStep(3);

      setIsGenerating(true);

      const selectedProduct =
        products.find((p) => p.selected);

      if (!selectedProduct) {

        alert("Select product");

        return;
      }

      // 📦 FORM DATA
      const formData = new FormData();

      formData.append(
        "file",
        selectedProduct.file
      );

      // 🚀 API CALL
      const res = await API.post(
        "/generate",
        formData
      );

      localStorage.setItem(
        "credits",
        res.data.credits
      );

      console.log(res.data);

      setGeneratedResult({
        imageUrl: res.data.imageUrl,
        credits: res.data.credits,
        name: selectedProduct.file.name,
        timestamp: Date.now(),
      });

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data ||
        "Generation failed"
      );

    } finally {

      setIsGenerating(false);
    }
  };

  const selectedCount = products.filter((p) => p.selected).length;

  const pastResults = [
    {
      imageSlot: pastResult1,
      name: 'catalog-image',
      totalImages: 2,
      timeAgo: '20h ago',
    },
    {
      imageSlot: pastResult2,
      name: 'catalog-image',
      totalImages: 1,
      timeAgo: '20h ago',
    },
    {
      imageSlot: pastResult3,
      name: 'testAIImage',
      totalImages: 1,
      timeAgo: '20h ago',
    },
  ];

  return (
    <div className="bg-[#F5F5F5] flex">

      {/* Main area */}
      <div className="flex-1 flex flex-col min-h-screen">

        <main className="flex-1 overflow-y-auto">
          <div className="w-full px-3 md:px-4 py-2">

            {/* ── PAGE HEADER ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mb-6"
            >
              <h1
                className="text-2xl md:text-3xl font-bold text-[#111111] leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Virtual Try-On Studio
              </h1>
              <p className="text-sm text-[#888888] mt-1">
                Generate professional AI fashion catalog images
              </p>
            </motion.div>

            {/* ── STEPPER + NEXT BUTTON ── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05, ease: 'easeOut' }}
              className="bg-white rounded-2xl border border-[#E5E5E5] shadow-sm px-5 py-4 mb-6 flex items-center justify-between gap-4"
            >
              <Stepper currentStep={currentStep} />
              {currentStep === 1 && (
                <button
                  disabled={selectedCount === 0}
                  onClick={() => setCurrentStep(2)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex-shrink-0 ${selectedCount > 0
                    ? 'bg-[#111111] text-white hover:bg-[#2a2a2a] shadow-sm'
                    : 'bg-[#F0F0F0] text-[#BBBBBB] cursor-not-allowed'
                    }`}
                >
                  Next
                  <ArrowRight size={15} />
                </button>
              )}
            </motion.div>

            {/* ── STEP CONTENT ── */}
            <AnimatePresence mode="wait">
              {currentStep === 3 ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <ResultsStep
                    result={generatedResult}
                    isGenerating={isGenerating}
                    onStartNewGeneration={() => {
                      setGeneratedResult(null);
                      setProducts([]);
                      setCurrentStep(1);
                    }}
                  />
                </motion.div>
              ) : currentStep === 2 ? (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <SummaryStep
                    selectedProducts={products.filter((p) => p.selected)}
                    onBack={() => setCurrentStep(1)}
                    onGenerate={handleGenerate}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {/* ── UPLOAD & SELECT SECTION ── */}
                  <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-sm mb-6 overflow-hidden">
                    <div className="flex flex-col md:flex-row">

                      {/* LEFT — Upload panel */}
                      <div className="md:w-64 flex-shrink-0 border-b md:border-b-0 md:border-r border-[#F0F0F0] p-5 flex flex-col gap-4">
                        <div>
                          <h2 className="text-sm font-bold text-[#111111]">Add Your Product Photos</h2>
                          <p className="text-xs text-[#999999] mt-1 leading-relaxed">
                            Drag & drop or browse to upload product images. Max 10MB per file.
                          </p>
                        </div>

                        {/* Drag zone */}
                        <div
                          onDrop={handleDrop}
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onClick={() => fileInputRef.current?.click()}
                          className={`relative flex-1 min-h-[140px] rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all duration-200 overflow-hidden ${isDragging
                            ? 'border-[#111111] bg-[#F5F5F5] scale-[0.99]'
                            : 'border-[#DDDDDD] hover:border-[#AAAAAA] hover:bg-[#FAFAFA]'
                            }`}
                        >
                          <div className="relative w-full h-full flex items-center justify-center py-4">
                            <div className="flex items-end gap-1 opacity-30">
                              <div className="w-10 h-20 bg-[#CCCCCC] rounded-t-full rounded-b-sm" />
                              <div className="w-10 h-24 bg-[#BBBBBB] rounded-t-full rounded-b-sm" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-8 h-8 rounded-full bg-white border-2 border-[#DDDDDD] flex items-center justify-center shadow-sm">
                                <Upload size={14} className="text-[#888888]" />
                              </div>
                            </div>
                          </div>
                          {isDragging && (
                            <div className="absolute inset-0 bg-[#111111]/5 flex items-center justify-center">
                              <p className="text-xs font-semibold text-[#111111]">Drop here</p>
                            </div>
                          )}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#111111] text-white text-sm font-semibold hover:bg-[#2a2a2a] active:bg-black transition-colors duration-150 shadow-sm"
                          >
                            <Upload size={14} />
                            Upload product
                          </button>
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="flex items-center justify-center gap-2 w-full py-2 rounded-xl border border-[#E5E5E5] text-sm font-medium text-[#555555] hover:bg-[#F5F5F5] hover:border-[#CCCCCC] transition-all duration-150"
                          >
                            <FolderOpen size={14} />
                            Upload folder
                          </button>
                        </div>

                        {/* Supported formats */}
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] text-[#AAAAAA] font-medium">Supports:</span>
                          {['PNG', 'JPG', 'WEBP'].map((fmt) => (
                            <span
                              key={fmt}
                              className="text-[10px] font-bold text-[#666666] bg-[#F0F0F0] px-1.5 py-0.5 rounded-md"
                            >
                              {fmt}
                            </span>
                          ))}
                        </div>

                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/png,image/jpeg,image/webp"
                          multiple
                          className="hidden"
                          onChange={handleFileInput}
                        />
                      </div>

                      {/* RIGHT — Product grid */}
                      <div className="flex-1 p-5">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h2 className="text-base font-bold text-[#111111]">
                              Upload & Select Products
                            </h2>
                            <p className="text-xs text-[#999999] mt-0.5">
                              Drag & drop or browse to upload product images
                            </p>
                          </div>
                          {products.length > 0 && (
                            <span className="text-xs font-semibold text-[#888888] bg-[#F5F5F5] px-2.5 py-1 rounded-lg">
                              Available Products ({products.length})
                              {selectedCount > 0 && (
                                <span className="ml-1 text-[#111111]">· {selectedCount} selected</span>
                              )}
                            </span>
                          )}
                        </div>

                        {/* Empty state */}
                        {products.length === 0 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center py-16 text-center"
                          >
                            <div className="w-14 h-14 rounded-2xl bg-[#F5F5F5] border border-[#EBEBEB] flex items-center justify-center mb-3">
                              <ImageIcon size={22} className="text-[#CCCCCC]" />
                            </div>
                            <p className="text-sm font-semibold text-[#888888]">No products yet</p>
                            <p className="text-xs text-[#BBBBBB] mt-1">
                              Upload product images to get started
                            </p>
                            <button
                              onClick={() => fileInputRef.current?.click()}
                              className="mt-4 px-4 py-2 rounded-xl border border-[#E5E5E5] text-xs font-semibold text-[#555555] hover:bg-[#F5F5F5] transition-colors"
                            >
                              Browse files
                            </button>
                          </motion.div>
                        )}

                        {/* Product grid */}
                        {products.length > 0 && (
                          <motion.div
                            layout
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
                          >
                            <AnimatePresence>
                              {products.map((product) => (
                                <ProductCard
                                  key={product.id}
                                  product={product}
                                  onToggle={toggleProduct}
                                  onRemove={removeProduct}
                                />
                              ))}
                            </AnimatePresence>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* ── PAST RESULTS SECTION ── */}
                  <motion.section
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between px-5 py-4 border-b border-[#F0F0F0]">
                        <h2
                          className="text-base font-bold text-[#111111]"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          Past Results
                        </h2>
                        <button className="flex items-center gap-1.5 text-xs font-semibold text-[#666666] hover:text-[#111111] transition-colors px-3 py-1.5 rounded-lg hover:bg-[#F5F5F5]">
                          <RefreshCw size={13} />
                          Refresh
                        </button>
                      </div>
                      <div className="p-5">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                          {pastResults.map((result, i) => (
                            <PastResultCard key={i} {...result} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.section>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </main>
      </div>
    </div>
  );
}

