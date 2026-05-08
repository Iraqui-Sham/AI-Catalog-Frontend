import React from 'react';

const steps = [
  { id: 1, label: 'Upload & Select' },
  { id: 2, label: 'Summary' },
  { id: 3, label: 'Results' },
];

export default function StudioStepper({ currentStep }) {
  return (
    <div className="flex items-center mb-12">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.id;
        const isActive    = currentStep === step.id;
        const isPending   = currentStep < step.id;

        return (
          <React.Fragment key={step.id}>
            {/* Step node + label */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Circle */}
              <div
                style={{
                  transition: 'background 0.3s, box-shadow 0.3s, transform 0.2s',
                  transform: isActive ? 'scale(1.08)' : 'scale(1)',
                  boxShadow: isActive
                    ? '0 0 0 5px rgba(17,24,39,0.08)'
                    : isCompleted
                      ? '0 0 0 4px rgba(16,185,129,0.12)'
                      : 'none',
                }}
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0
                  ${isCompleted ? 'bg-emerald-500 text-white'
                    : isActive   ? 'bg-gray-900 text-white'
                    :              'bg-white border-2 border-gray-200 text-gray-400'
                  }`}
              >
                {isCompleted ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : step.id}
              </div>

              {/* Label */}
              <span
                className={`text-sm leading-none hidden sm:block transition-all duration-200
                  ${isCompleted ? 'font-semibold text-emerald-600'
                    : isActive   ? 'font-bold text-gray-900'
                    :              'font-medium text-gray-400'
                  }`}
              >
                {step.label}
              </span>
            </div>

            {/* Connector bar */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-4 h-[2px] rounded-full overflow-hidden bg-gray-200" style={{ minWidth: 28 }}>
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{
                    width: isCompleted ? '100%' : '0%',
                    transition: 'width 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
