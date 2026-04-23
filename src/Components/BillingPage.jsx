// components/BillingPage.jsx
import { useState } from 'react';

const usageHistory = [
  { id: 1, date: '2024-01-15 14:32', action: 'Image Generation', credits: 25, status: 'completed' },
  { id: 2, date: '2024-01-15 11:20', action: 'Image Generation', credits: 15, status: 'completed' },
  { id: 3, date: '2024-01-14 19:45', action: 'Background Removal', credits: 10, status: 'completed' },
  { id: 4, date: '2024-01-14 16:12', action: 'Image Generation', credits: 25, status: 'completed' },
  { id: 5, date: '2024-01-13 09:30', action: 'Upscale', credits: 5, status: 'completed' },
  { id: 6, date: '2024-01-12 22:18', action: 'Image Generation', credits: 25, status: 'completed' },
];

const plans = [
  {
    name: 'Free',
    price: '$0',
    credits: '50',
    features: ['Basic generations', '512x512 resolution', 'Watermark'],
    popular: false
  },
  {
    name: 'Pro',
    price: '$29',
    credits: '2,000',
    features: ['Unlimited generations', '4K resolution', 'No watermark', 'Priority queue'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$99',
    credits: '10,000',
    features: ['API access', 'Custom models', 'Team accounts', '24/7 support'],
    popular: false
  }
];

export default function BillingPage() {
  const [currentPlan] = useState('Pro');
  const [totalCredits] = useState(2000);
  const [usedCredits] = useState(847);
  const [remainingCredits] = useState(totalCredits - usedCredits);

  const progress = (usedCredits / totalCredits) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent mb-6">
            Billing & Credits
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Manage your subscription and track credit usage. Upgrade anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Plan & Credits */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Plan Card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/50">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full" />
                    <h2 className="text-3xl font-bold text-gray-900">Current Plan</h2>
                  </div>
                  <p className="text-gray-600">You're on the <span className="font-semibold text-gray-900">{currentPlan}</span> plan</p>
                </div>
                <div className={`px-6 py-3 rounded-2xl font-semibold text-sm ${
                  currentPlan === 'Pro' 
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg' 
                    : 'bg-orange-100 text-orange-800 border border-orange-200'
                }`}>
                  Active
                </div>
              </div>

              {/* Credits Usage */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Credits Usage</h3>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-4xl font-bold text-gray-900 mb-1">{usedCredits}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">Used</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-emerald-600 mb-1">{remainingCredits}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">Remaining</div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>Progress</span>
                    <span>{Math.round(progress)}% used</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-orange-600 h-4 rounded-full shadow-lg 
                                transition-all duration-1000 relative overflow-hidden"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Next Renewal */}
                <div className="pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Next renewal</p>
                      <p className="text-xl font-semibold text-gray-900">Jan 25, 2024</p>
                    </div>
                    <button className="px-6 py-2.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 
                                    shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                      Manage Billing
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage History */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Recent Usage</h3>
                <p className="text-gray-600">Credit transactions from the last 30 days</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-6 px-8 text-sm font-semibold text-gray-700">Date & Time</th>
                      <th className="text-left py-6 px-8 text-sm font-semibold text-gray-700">Action</th>
                      <th className="text-right py-6 px-8 text-sm font-semibold text-gray-700">Credits</th>
                      <th className="text-right py-6 px-8 text-sm font-semibold text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usageHistory.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                        <td className="py-6 px-8 text-sm font-medium text-gray-900">{item.date}</td>
                        <td className="py-6 px-8">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <span className="font-medium text-gray-900">{item.action}</span>
                          </div>
                        </td>
                        <td className="py-6 px-8 text-right">
                          <span className="text-xl font-bold text-gray-900">-{item.credits}</span>
                        </td>
                        <td className="py-6 px-8 text-right">
                          <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                            item.status === 'completed' 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Upgrade */}
          <div className="space-y-8">
            {/* Upgrade CTA */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-3xl p-10 shadow-2xl 
                           hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 rotate-6 group-hover:rotate-0 transition-transform duration-1000 opacity-0 group-hover:opacity-100" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-3xl mx-auto mb-6 flex items-center justify-center backdrop-blur-sm shadow-2xl">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Ready to unlock more?</h3>
                <p className="text-orange-100 mb-8 opacity-90">Get 40x more credits and premium features</p>
                <button className="w-full bg-white text-orange-600 font-bold py-4 px-8 rounded-2xl 
                                  shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300
                                  text-lg tracking-wide uppercase">
                  Upgrade to Pro
                </button>
              </div>
            </div>

            {/* Plans Comparison */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
              <h4 className="text-xl font-bold text-gray-900 mb-8 text-center">Compare Plans</h4>
              <div className="space-y-6">
                {plans.map((plan, index) => (
                  <div key={plan.name} className={`
                    group p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                    ${plan.popular ? 'border-orange-400 bg-gradient-to-br from-orange-50 to-orange-25 shadow-orange-200 ring-2 ring-orange-200/50 scale-105' : 'border-gray-200 hover:border-gray-300'}
                  `}>
                    <div className="flex items-start justify-between mb-6">
                      <h5 className="text-2xl font-bold text-gray-900">{plan.name}</h5>
                      {plan.popular && (
                        <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                          Popular
                        </div>
                      )}
                    </div>
                    
                    <div className="text-4xl font-bold text-gray-900 mb-6">{plan.price}</div>
                    <div className="text-2xl font-bold text-gray-900 mb-8">{plan.credits} credits/mo</div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3 text-gray-700">
                          <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-4 px-6 rounded-2xl font-bold shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700' 
                        : 'bg-gray-900 text-white hover:bg-gray-800 border border-gray-800'
                    }`}>
                      {currentPlan === plan.name ? 'Current Plan' : 'Choose Plan'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}