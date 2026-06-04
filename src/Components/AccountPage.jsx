import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  Lock,
  Phone,
  ChevronDown,
  Check,
  Eye,
  EyeOff,
  Loader2,
  Gift,
  ArrowRight,
  X,
  Shield,
} from 'lucide-react';

// ─── OTP Input ────────────────────────────────────────────────────────────────
const OtpInput = ({ value, onChange }) => (
  <div className="flex gap-2 justify-center">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <input
        key={i}
        maxLength={1}
        value={value[i] || ''}
        onChange={(e) => {
          const arr = value.split('');
          arr[i] = e.target.value.replace(/\D/, '');
          onChange(arr.join(''));
          if (e.target.value && e.target.nextSibling) e.target.nextSibling.focus();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Backspace' && !value[i] && e.target.previousSibling)
            e.target.previousSibling.focus();
        }}
        className="w-10 h-11 text-center text-base font-semibold text-[#111111] bg-white border border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#111111] focus:ring-2 focus:ring-[#11111115] transition-all duration-150"
      />
    ))}
  </div>
);

// ─── Save Button ──────────────────────────────────────────────────────────────
const SaveBtn = ({ onClick, loading, success, disabled, label = 'Save Changes', fullWidth = false }) => (
  <button
    onClick={onClick}
    disabled={disabled || loading}
    className={`flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200
      ${fullWidth ? 'w-full' : ''}
      ${success
        ? 'bg-[#ECFDF5] text-[#16A34A]'
        : 'bg-[#111111] text-white hover:bg-[#2A2A2A] active:scale-[0.98] disabled:opacity-35 disabled:cursor-not-allowed'
      }`}
  >
    {loading ? (
      <Loader2 size={14} className="animate-spin" />
    ) : success ? (
      <><Check size={14} /> Saved!</>
    ) : label}
  </button>
);

// ─── Section Card ─────────────────────────────────────────────────────────────
const SectionCard = ({ children, className = '', id }) => (
  <div
    id={id}
    className={`bg-white border border-[#E8E8E8] rounded-2xl overflow-hidden
      shadow-[0_1px_3px_rgba(0,0,0,0.05),0_1px_8px_rgba(0,0,0,0.03)]
      hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]
      transition-shadow duration-300 ${className}`}
  >
    {children}
  </div>
);

// ─── Card Header ─────────────────────────────────────────────────────────────
const CardHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center gap-4 px-6 py-4 border-b border-[#F2F2F2]">
    <div className="w-10 h-10 rounded-xl bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
      <Icon size={19} className="text-[#444444]" />
    </div>
    <div className="min-w-0">
      <h2 className="text-base font-semibold text-[#111111]">{title}</h2>
      {subtitle && <p className="text-sm text-[#999999] mt-0.5 leading-snug">{subtitle}</p>}
    </div>
  </div>
);

// ─── Expand Row Button ────────────────────────────────────────────────────────
const ExpandBtn = ({ open, onToggle, label, icon: Icon }) => (
  <button
    onClick={onToggle}
    className="w-full flex items-center justify-between px-7 py-5 text-base text-[#222222] hover:bg-[#FAFAFA] active:bg-[#F5F5F5] transition-colors duration-150 group"
  >
    <div className="flex items-center gap-3">
      {Icon && (
        <div className="w-7 h-7 rounded-lg bg-[#F5F5F5] flex items-center justify-center group-hover:bg-[#EBEBEB] transition-colors">
          <Icon size={14} className="text-[#666666]" />
        </div>
      )}
      <span className="font-medium">{label}</span>
    </div>
    <motion.span
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className="text-[#CCCCCC] group-hover:text-[#888888] transition-colors"
    >
      <ChevronDown size={16} />
    </motion.span>
  </button>
);

// ─── Password Input ───────────────────────────────────────────────────────────
const PwInput = ({ placeholder, value, onChange, show, onToggle }) => (
  <div className="relative">
    <Lock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#CCCCCC]" />
    <input
      type={show ? 'text' : 'password'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full pl-10 pr-10 py-2.5 text-sm text-[#111111] bg-white border border-[#E8E8E8] rounded-xl focus:outline-none focus:border-[#111111] focus:ring-2 focus:ring-[#11111110] transition-all duration-150 placeholder:text-[#CCCCCC]"
    />
    <button
      type="button"
      onClick={onToggle}
      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#CCCCCC] hover:text-[#666666] transition-colors"
    >
      {show ? <EyeOff size={14} /> : <Eye size={14} />}
    </button>
  </div>
);

// ─── Expand Pane ─────────────────────────────────────────────────────────────
const ExpandPane = ({ open, children }) => (
  <AnimatePresence initial={false}>
    {open && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.22, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-7 pb-7 pt-5 space-y-4 bg-[#FAFAFA] border-t border-[#F2F2F2]">
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AccountPage() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const name = user?.name || 'User';
  const email = user?.email || 'user@example.com';
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();

  const [bannerVisible, setBannerVisible] = useState(true);

  const [pwOpen, setPwOpen] = useState(false);
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [showCur, setShowCur] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [pwOtpSent, setPwOtpSent] = useState(false);
  const [pwOtp, setPwOtp] = useState('');
  const [pwLoading, setPwLoading] = useState(false);
  const [pwSuccess, setPwSuccess] = useState(false);

  const [emOpen, setEmOpen] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [emOtpSent, setEmOtpSent] = useState(false);
  const [emOtp, setEmOtp] = useState('');
  const [emLoading, setEmLoading] = useState(false);
  const [emSuccess, setEmSuccess] = useState(false);

  const [phone, setPhone] = useState('');
  const [phOtpSent, setPhOtpSent] = useState(false);
  const [phOtp, setPhOtp] = useState('');
  const [phLoading, setPhLoading] = useState(false);
  const [phSuccess, setPhSuccess] = useState(false);

  const simulate = (setL, then, ms = 1300) => {
    setL(true);
    setTimeout(() => { setL(false); then(); }, ms);
  };

  const handleSendPwOtp = () => simulate(setPwLoading, () => setPwOtpSent(true));
  const handleSavePw = () => simulate(setPwLoading, () => {
    setPwSuccess(true);
    setTimeout(() => {
      setPwOpen(false); setPwSuccess(false);
      setCurrentPw(''); setNewPw('');
      setPwOtpSent(false); setPwOtp('');
    }, 1500);
  });

  const handleSendEmOtp = () => simulate(setEmLoading, () => setEmOtpSent(true));
  const handleSaveEmail = () => simulate(setEmLoading, () => {
    setEmSuccess(true);
    setTimeout(() => {
      setEmOpen(false); setEmSuccess(false);
      setNewEmail(''); setEmOtpSent(false); setEmOtp('');
    }, 1500);
  });

  const handleSendPhOtp = () => simulate(setPhLoading, () => setPhOtpSent(true));
  const handleSavePh = () => simulate(setPhLoading, () => setPhSuccess(true));

  return (
    <div className="min-h-screen bg-[#F6F6F4]">
      <div className="md:pl-16">
        {/* pb-32 on mobile so bottom nav never overlaps last card */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 pt-6 pb-32 md:pb-12 space-y-4">

          {/* ── BANNER ─────────────────────────────────────────────────────── */}
          <AnimatePresence>
            {bannerVisible && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between gap-3 bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl px-5 py-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* gift icon box */}
                  <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
                    <Gift size={18} className="text-[#D97706]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#92400E] leading-snug">
                      Add your phone number — get{' '}
                      <span className="text-[#D97706]">200 free credits</span> every month!
                    </p>
                    <button
                      onClick={() =>
                        document.getElementById('phone-section')?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="inline-flex items-center gap-1 text-xs text-[#B45309] hover:text-[#92400E] font-medium mt-0.5 transition-colors"
                    >
                      Add phone number <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setBannerVisible(false)}
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[#B45309] hover:bg-[#FEF3C7] transition-colors flex-shrink-0"
                >
                  <X size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── PAGE TITLE ─────────────────────────────────────────────────── */}
          <div className="px-1 pb-1">
            <h1 className="text-2xl font-bold text-[#111111] tracking-tight">Account Settings</h1>
            <p className="text-sm text-[#999999] mt-1">Manage your account information and preferences</p>
          </div>

          {/* ── PROFILE INFORMATION ────────────────────────────────────────── */}
          <SectionCard>
            <CardHeader icon={User} title="Profile Information" subtitle="Your personal account details" />
            <div className="px-6 py-5">
              <div className="flex items-center gap-4 min-w-0">
                {/* avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9B99A] to-[#8B7355] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-white text-base font-bold tracking-wide">{initials}</span>
                </div>
                {/* info — min-w-0 forces flex child to shrink */}
                <div className="flex flex-col gap-2 min-w-0 flex-1">
                  <div className="flex items-center gap-2.5">
                    <User size={15} className="text-[#666666] flex-shrink-0" />
                    <p className="text-sm font-semibold text-[#111111]">{name}</p>
                  </div>
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail size={15} className="text-[#666666] flex-shrink-0" />
                    <p className="text-sm text-[#666666] min-w-0 break-all">{email}</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          {/* ── SECURITY ───────────────────────────────────────────────────── */}
          <SectionCard>
            <CardHeader icon={Shield} title="Security" subtitle="Manage your password and login email" />

            {/* Change Password */}
            <ExpandBtn
              open={pwOpen}
              icon={Lock}
              label="Change Password"
              onToggle={() => { setPwOpen((v) => !v); setEmOpen(false); }}
            />
            <ExpandPane open={pwOpen}>
              <PwInput
                placeholder="Current password"
                value={currentPw}
                onChange={(e) => setCurrentPw(e.target.value)}
                show={showCur}
                onToggle={() => setShowCur((v) => !v)}
              />
              <PwInput
                placeholder="New password"
                value={newPw}
                onChange={(e) => setNewPw(e.target.value)}
                show={showNew}
                onToggle={() => setShowNew((v) => !v)}
              />
              {!pwOtpSent ? (
                <div className="flex justify-end">
                  <SaveBtn
                    onClick={handleSendPwOtp}
                    loading={pwLoading}
                    success={false}
                    disabled={!currentPw || !newPw}
                    label="Send OTP"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs text-[#999999] text-center">
                    6-digit OTP sent to{' '}
                    <span className="font-semibold text-[#555555]">{email}</span>
                  </p>
                  <OtpInput value={pwOtp} onChange={setPwOtp} />
                  <div className="flex items-center justify-between pt-1">
                    <button className="text-xs text-[#AAAAAA] hover:text-[#555555] transition-colors">
                      Resend OTP
                    </button>
                    <SaveBtn
                      onClick={handleSavePw}
                      loading={pwLoading}
                      success={pwSuccess}
                      disabled={pwOtp.length < 6}
                    />
                  </div>
                </div>
              )}
            </ExpandPane>

            <div className="border-t border-[#F2F2F2]" />

            {/* Change Email */}
            <ExpandBtn
              open={emOpen}
              icon={Mail}
              label="Change Email"
              onToggle={() => { setEmOpen((v) => !v); setPwOpen(false); }}
            />
            <ExpandPane open={emOpen}>
              <div className="relative">
                <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#CCCCCC]" />
                <input
                  type="email"
                  placeholder="New email address"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 text-sm text-[#111111] bg-white border border-[#E8E8E8] rounded-xl focus:outline-none focus:border-[#111111] focus:ring-2 focus:ring-[#11111110] transition-all placeholder:text-[#CCCCCC]"
                />
              </div>
              {!emOtpSent ? (
                <div className="flex justify-end">
                  <SaveBtn
                    onClick={handleSendEmOtp}
                    loading={emLoading}
                    success={false}
                    disabled={!newEmail}
                    label="Send OTP"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs text-[#999999] text-center">
                    6-digit OTP sent to{' '}
                    <span className="font-semibold text-[#555555]">{newEmail}</span>
                  </p>
                  <OtpInput value={emOtp} onChange={setEmOtp} />
                  <div className="flex items-center justify-between pt-1">
                    <button className="text-xs text-[#AAAAAA] hover:text-[#555555] transition-colors">
                      Resend OTP
                    </button>
                    <SaveBtn
                      onClick={handleSaveEmail}
                      loading={emLoading}
                      success={emSuccess}
                      disabled={emOtp.length < 6}
                    />
                  </div>
                </div>
              )}
            </ExpandPane>
          </SectionCard>

          {/* ── ADD PHONE NUMBER ───────────────────────────────────────────── */}
          <SectionCard id="phone-section">
            <CardHeader
              icon={Gift}
              title="Add Phone Number"
              subtitle="Verify your number and get 200 free credits every month"
            />

            {phSuccess ? (
              <div className="px-6 py-10 flex flex-col items-center gap-3 text-center">
                <div className="w-14 h-14 rounded-full bg-[#ECFDF5] flex items-center justify-center">
                  <Check size={26} className="text-[#16A34A]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">Phone number verified!</p>
                  <p className="text-xs text-[#999999] mt-1">200 credits have been added to your account 🎉</p>
                </div>
              </div>
            ) : (
              <div className="px-7 py-6 space-y-4">
                {/* credits badge */}
                <div className="flex items-center gap-3 bg-[#FFFBEB] border border-[#FDE68A] rounded-xl px-4 py-3">
                  <span className="text-xl flex-shrink-0">🎁</span>
                  <p className="text-xs text-[#92400E] font-medium leading-snug">
                    Get{' '}
                    <span className="text-[#D97706] font-bold">200 free credits</span>{' '}
                    every month just by verifying your number
                  </p>
                </div>

                {/* phone input row */}
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-2.5 bg-[#F5F5F5] border border-[#E8E8E8] rounded-xl text-sm text-[#444444] font-semibold flex-shrink-0 select-none">
                    🇮🇳 +91
                  </div>
                  <div className="relative flex-1">
                    <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#CCCCCC]" />
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/, ''))}
                      className="w-full pl-10 pr-3 py-2.5 text-sm text-[#111111] bg-white border border-[#E8E8E8] rounded-xl focus:outline-none focus:border-[#111111] focus:ring-2 focus:ring-[#11111110] transition-all placeholder:text-[#CCCCCC]"
                    />
                  </div>
                </div>

                {!phOtpSent ? (
                  /* full-width on mobile — never gets clipped by bottom nav */
                  <SaveBtn
                    onClick={handleSendPhOtp}
                    loading={phLoading}
                    success={false}
                    disabled={phone.length < 10}
                    label="Send OTP"
                    fullWidth
                  />
                ) : (
                  <div className="space-y-4">
                    <p className="text-xs text-[#999999] text-center">
                      6-digit OTP sent to{' '}
                      <span className="font-semibold text-[#555555]">+91 {phone}</span>
                    </p>
                    <OtpInput value={phOtp} onChange={setPhOtp} />
                    <div className="space-y-2">
                      <SaveBtn
                        onClick={handleSavePh}
                        loading={phLoading}
                        success={phSuccess}
                        disabled={phOtp.length < 6}
                        label="Verify & Claim Credits"
                        fullWidth
                      />
                      <button className="w-full text-xs text-[#AAAAAA] hover:text-[#555555] transition-colors py-1">
                        Resend OTP
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </SectionCard>

        </div>
      </div>
    </div>
  );
}
