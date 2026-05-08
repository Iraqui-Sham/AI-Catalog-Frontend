import React from 'react';

export default function ProductCard({ product, isSelected, onSelect, onRemove }) {
    return (
        <div
            onClick={() => onSelect(product.id)}
            style={{
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                transform: isSelected ? 'scale(1.025)' : 'scale(1)',
                boxShadow: isSelected
                    ? '0 0 0 2px #111827, 0 8px 24px rgba(17,24,39,0.12)'
                    : '0 1px 4px rgba(0,0,0,0.05)',
            }}
            className={`
relative group cursor-pointer overflow-hidden rounded-[24px]
transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
border border-white/60 backdrop-blur-xl
bg-white/70

${isSelected
                    ? 'shadow-[0_12px_60px_rgba(15,23,42,0.14)] ring-2 ring-gray-900/70 scale-[1.02]'
                    : 'shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_18px_60px_rgba(15,23,42,0.12)] hover:-translate-y-1 hover:scale-[1.01]'
                }
`}
        >
            {/* Image area */}
            <div className="aspect-square bg-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                    src={product.preview}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />

                {/* Soft vignette on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Selected tick */}
                {isSelected && (
                    <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center shadow-md">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                )}

                {/* Remove button */}
                <button
                    onClick={(e) => { e.stopPropagation(); onRemove(product.id); }}
                    className="absolute top-2.5 left-2.5 w-6 h-6 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-red-50 hover:text-red-500 shadow-sm border border-gray-100"
                    style={{ transform: 'scale(0.9)' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(0.9)'}
                >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Info */}
            <div className="px-3.5 py-3">
                <p className="text-[0.8125rem] font-semibold text-gray-800 truncate leading-snug">{product.name}</p>
                <p className="text-[0.6875rem] text-gray-400 truncate mt-0.5 leading-snug">{product.filename}</p>
            </div>
        </div>
    );
}
