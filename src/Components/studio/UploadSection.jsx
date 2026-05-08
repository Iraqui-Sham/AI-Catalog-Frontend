import React, { useRef, useState } from 'react';
import ProductCard from './ProductCard';
import PastResultsSection from './PastResultsSection';

export default function UploadSection({
    products,
    selectedProductId,
    onProductSelect,
    onProductRemove,
    onProductUpload,
    onNext,
    pastResults,
    onRefresh,
}) {
    const fileInputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const processFiles = (files) => {
        Array.from(files).forEach((file) => {
            if (!file.type.startsWith('image/')) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                onProductUpload({
                    id: `product-${Date.now()}-${Math.random()}`,
                    name: file.name.replace(/\.[^/.]+$/, ''),
                    filename: file.name,
                    preview: ev.target.result,
                });
            };
            reader.readAsDataURL(file);
        });
    };

    const handleFileChange = (e) => {
        processFiles(e.target.files);
        e.target.value = '';
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        processFiles(e.dataTransfer.files);
    };

    return (
        <div>
            {/* ── Main layout ── */}
            <div className="flex flex-col lg:flex-row gap-7">

                {/* ── LEFT: Upload panel ───────────────────────────────────────────── */}
                <div className="w-full lg:w-[17rem] flex-shrink-0">
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        onDrop={handleDrop}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        style={{
                            transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
                            boxShadow: isDragging ? '0 0 0 4px rgba(17,24,39,0.07)' : 'none',
                        }}
                        className={`rounded-[28px] border border-white/60 backdrop-blur-xl p-7 text-center cursor-pointer bg-white/75 shadow-[0_10px_50px_rgba(15,23,42,0.06)]
              ${isDragging ? 'border-gray-600 bg-gray-50' : 'border-gray-200 hover:border-gray-400 hover:bg-gray-50/70'}`}
                    >
                        {/* Stacked card illustration */}
                        <div className="relative w-28 h-[5.5rem] mx-auto mb-6 pointer-events-none">
                            <div className="absolute left-0 top-3 w-[4.25rem] h-[5rem] bg-gray-100 rounded-xl rotate-[-9deg] border border-gray-200/60" />
                            <div className="absolute right-0 top-3 w-[4.25rem] h-[5rem] bg-gray-200/70 rounded-xl rotate-[5deg] border border-gray-200/60" />
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[4.25rem] h-[5rem] bg-white rounded-xl border border-gray-200 shadow-md flex items-center justify-center z-10">
                                <svg className="w-7 h-7 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                        </div>

                        <p className="text-[0.875rem] font-bold text-gray-800 mb-1.5 leading-snug">
                            Add Your Product Photos
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed mb-5 max-w-[13rem] mx-auto">
                            Drag & drop or browse to upload. Max 10 MB per file.
                        </p>

                        {/* Upload button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition-all duration-300 text-sm font-semibold py-2.5 rounded-xl mb-3 hover:bg-gray-700 active:scale-[0.98] transition-all duration-150"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            Upload product
                        </button>

                        {/* Format badges */}
                        <div className="flex items-center justify-center gap-1.5 mt-1">
                            {['PNG', 'JPG', 'WEBP'].map((fmt) => (
                                <span key={fmt} className="text-[0.6875rem] font-semibold bg-gray-100 text-gray-500 rounded-md px-1.5 py-0.5 tracking-wide">
                                    {fmt}
                                </span>
                            ))}
                        </div>
                    </div>

                    <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFileChange} className="hidden" />
                </div>

                {/* ── RIGHT: Product grid ──────────────────────────────────────────── */}
                <div className="flex-1 min-w-0">
                    {products.length === 0 ? (
                        /* ── Premium empty state ── */
                        <div className="relative overflow-hidden flex flex-col items-center justify-center h-full min-h-[18rem] rounded-[32px] border border-white/60 bg-white/70 backdrop-blur-xl text-center px-8 py-14 shadow-[0_10px_50px_rgba(15,23,42,0.05)]">
                            <div className="absolute w-[260px] h-[260px] rounded-full bg-blue-100/40 blur-3xl" />
                            {/* Icon cluster */}
                            <div className="relative mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center shadow-inner">
                                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white">
                                    <svg className="w-2.5 h-2.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-[0.9375rem] font-bold text-gray-700 mb-1.5">No products yet</p>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-[18rem]">
                                Upload your first product image on the left to get started.
                            </p>
                        </div>
                    ) : (
                        <div>
                            {/* Section title */}
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <h3 className="text-[0.9375rem] font-bold text-gray-900">Upload & Select Products</h3>
                                    <p className="text-xs text-gray-400 mt-0.5">Available Products ({products.length})</p>
                                </div>
                                {selectedProductId && (
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                        1 selected
                                    </span>
                                )}
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        isSelected={selectedProductId === product.id}
                                        onSelect={onProductSelect}
                                        onRemove={onProductRemove}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ── Next button ─────────────────────────────────────────────────────── */}
            <div className="flex justify-end mt-9">
                <button
                    onClick={onNext}
                    disabled={!selectedProductId}
                    style={{ transition: 'all 0.2s' }}
                    className={`flex items-center gap-2.5 px-7 py-3 rounded-xl text-[0.875rem] font-bold
            ${selectedProductId
                            ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition-all duration-300 hover:bg-gray-700 shadow-[0_4px_16px_rgba(17,24,39,0.18)] hover:shadow-[0_6px_24px_rgba(17,24,39,0.22)] hover:-translate-y-px active:translate-y-0 active:shadow-none'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                        }`}
                >
                    Next
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* ── Past Results ────────────────────────────────────────────────────── */}
            <PastResultsSection pastResults={pastResults} onRefresh={onRefresh} />
        </div>
    );
}
