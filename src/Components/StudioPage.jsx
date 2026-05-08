import React, { useState } from 'react';
import StudioStepper from './studio/StudioStepper';
import UploadSection from './studio/UploadSection';
import SummarySection from './studio/SummarySection';
import ResultsSection from './studio/ResultsSection';

export default function StudioPage() {
  // ─── State ────────────────────────────────────────────────────────────────
  const [currentStep, setCurrentStep] = useState(1);
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState(null);
  const [pastResults, setPastResults] = useState([]);

  // ─── Derived ──────────────────────────────────────────────────────────────
  const selectedProduct = products.find((p) => p.id === selectedProductId);

  // ─── Handlers ─────────────────────────────────────────────────────────────
  const handleProductUpload = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };
  const handleProductSelect = (productId) => {
    setSelectedProductId((prev) => (prev === productId ? null : productId));
  };
  const handleProductRemove = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    if (selectedProductId === productId) setSelectedProductId(null);
  };
  const handleStepOneNext = () => {
    if (selectedProductId) setCurrentStep(2);
  };
  const handleStepTwoBack = () => {
    setCurrentStep(1);
  };
  const handleStartGeneration = () => {
    setIsGenerating(true);
    setGeneratedResult(null);
    setCurrentStep(3);
    setTimeout(() => {
      if (selectedProduct) {
        const result = {
          id: `result-${Date.now()}`,
          image: selectedProduct.preview,
          name: selectedProduct.name,
          timestamp: Date.now(),
        };
        setGeneratedResult(result);
        setPastResults((prev) => [...prev, result]);
      }
      setIsGenerating(false);
    }, 2500);
  };
  const handleStartNewGeneration = () => {
    setCurrentStep(1);
    setSelectedProductId(null);
    setGeneratedResult(null);
    setIsGenerating(false);
  };
  const handleRefreshPastResults = () => { };

  return (
    <>
      <style>{`
        @keyframes studioFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .studio-enter { animation: studioFadeUp 0.35s cubic-bezier(0.22, 1, 0.36, 1) both; }
      `}</style>

      <div className="min-h-screen relative overflow-hidden bg-[#f5f7fb]">

        {/* Ambient background glow */}
        <div className="absolute top-[-120px] left-[10%] w-[420px] h-[420px] bg-blue-100/40 blur-3xl rounded-full pointer-events-none" />

        <div className="absolute top-[20%] right-[-120px] w-[380px] h-[380px] bg-violet-100/40 blur-3xl rounded-full pointer-events-none" />

        <div className="absolute bottom-[-100px] left-[35%] w-[300px] h-[300px] bg-cyan-100/30 blur-3xl rounded-full pointer-events-none" />

        <div className="relative w-full h-full px-6 py-8">

          {/* ── Header ──────────────────────────────────────────────────────── */}
          <div className="mb-14">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 backdrop-blur-xl px-4 py-1.5 shadow-sm mb-5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-gray-700 tracking-wide">
                AI Powered Product Studio
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-[-0.04em] text-gray-900 leading-tight">
              Create cinematic AI product shots
            </h1>

            <p className="mt-4 text-[15px] md:text-base text-gray-500 max-w-2xl leading-relaxed">
              Generate premium product visuals with AI-powered composition,
              lighting, and studio-quality rendering.
            </p>

          </div>

          {/* ── Stepper ─────────────────────────────────────────────────────── */}
          <StudioStepper currentStep={currentStep} />

          {/* ── Step Content ────────────────────────────────────────────────── */}
          <div key={currentStep} className="studio-enter">
            {currentStep === 1 && (
              <UploadSection
                products={products}
                selectedProductId={selectedProductId}
                onProductSelect={handleProductSelect}
                onProductRemove={handleProductRemove}
                onProductUpload={handleProductUpload}
                onNext={handleStepOneNext}
                pastResults={pastResults}
                onRefresh={handleRefreshPastResults}
              />
            )}
            {currentStep === 2 && selectedProduct && (
              <SummarySection
                selectedProduct={selectedProduct}
                onBack={handleStepTwoBack}
                onStartGeneration={handleStartGeneration}
              />
            )}
            {currentStep === 3 && (
              <ResultsSection
                result={generatedResult}
                isGenerating={isGenerating}
                onStartNewGeneration={handleStartNewGeneration}
              />
            )}
          </div>

        </div>
      </div>
    </>
  );
}
