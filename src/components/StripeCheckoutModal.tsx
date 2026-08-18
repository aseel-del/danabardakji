import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, ShieldCheck, CheckCircle2, Loader2 } from 'lucide-react';

interface StripeCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: string;
  planDetails: string;
}

export const StripeCheckoutModal: React.FC<StripeCheckoutModalProps> = ({
  isOpen,
  onClose,
  planName,
  planPrice,
  planDetails,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [healthGoal, setHealthGoal] = useState('Weight Management');
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate Checkout session dispatch
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  const renderFormattedPrice = (priceStr: string) => {
    const parts = priceStr.trim().split(' ');
    if (parts.length >= 2) {
      return (
        <div className="flex items-baseline gap-1.5 whitespace-nowrap flex-shrink-0">
          <span className="text-2xl sm:text-3xl font-black text-brand-gold tracking-tight">{parts[0]}</span>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-gold/85">{parts.slice(1).join(' ')}</span>
        </div>
      );
    }
    return <span className="text-2xl sm:text-3xl font-black text-brand-gold flex-shrink-0">{priceStr}</span>;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-navy/65 backdrop-blur-sm pointer-events-none"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-brand-navy/10 overflow-hidden z-10 my-auto max-h-[88vh] flex flex-col"
          >
            {/* Header (fixed at top of modal) */}
            <div className="bg-brand-navy p-5 sm:p-7 text-white relative flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Plan Title */}
              <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight pr-10 mb-3 sm:mb-4">
                {planName || 'Consultation Booking'}
              </h3>

              {/* Price & Details Bar */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/10 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                {renderFormattedPrice(planPrice)}
                <div className="text-xs text-white/80 font-medium sm:text-right max-w-xs leading-relaxed">
                  {planDetails}
                </div>
              </div>
            </div>

            {/* Form Body (scrollable on mobile) */}
            <div className="p-5 sm:p-8 overflow-y-auto overscroll-contain flex-1">
              {isSuccess ? (
                <div className="text-center py-4 sm:py-6">
                  <div className="w-16 h-16 bg-brand-mint/25 text-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-9 h-9 text-brand-mint-dark" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-brand-navy mb-2">Booking Registered</h4>
                  <p className="text-xs sm:text-sm text-brand-navy/80 leading-relaxed mb-6">
                    Thank you, <strong>{fullName}</strong>. Your consultation request for <strong>{planName}</strong> has been received. Dana will reach out directly via WhatsApp or Email within 24 hours to schedule your session.
                  </p>

                  <div className="bg-surface-subtle p-4 rounded-xl text-xs text-brand-navy/75 border border-surface-border text-left mb-6 space-y-1.5">
                    <div><strong className="text-brand-navy">Email:</strong> {email}</div>
                    <div><strong className="text-brand-navy">Phone:</strong> {phone}</div>
                    <div><strong className="text-brand-navy">Selected Plan:</strong> {planName} ({planPrice})</div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-brand-navy hover:bg-brand-navy-light transition-colors"
                  >
                    Done & Return
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sarah Al-Mansoor"
                      className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/20 text-sm text-brand-navy placeholder:text-brand-navy/35 outline-none transition-all"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/20 text-sm text-brand-navy placeholder:text-brand-navy/35 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+962 7 9222 2058"
                        className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/20 text-sm text-brand-navy placeholder:text-brand-navy/35 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Primary Goal / Condition */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      Primary Clinical / Dietary Goal
                    </label>
                    <select
                      value={healthGoal}
                      onChange={(e) => setHealthGoal(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/20 text-sm text-brand-navy bg-white outline-none transition-all cursor-pointer"
                    >
                      <option value="Weight Management">Weight Management (Loss / Healthy Gain)</option>
                      <option value="Muscle Gain & Body Composition">Muscle Gain & Body Composition</option>
                      <option value="Pregnancy & Lactation Nutrition">Pregnancy & Lactation Nutrition</option>
                      <option value="Keto Diet Planning">Keto Diet Planning & Monitoring</option>
                      <option value="Post Bariatric Surgery Diet">Post Bariatric Surgery Diet</option>
                      <option value="Therapeutic Care">Therapeutic Care (Diabetes, Blood Pressure, Cholesterol)</option>
                      <option value="Food Allergies & Intolerances">Food Allergies & Digestive Health</option>
                      <option value="Child & Family Nutrition">Child Malnutrition & Family Nutrition</option>
                      <option value="Well Being & Mindful Eating">Well Being & Self Reflection</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      Health Background or Notes <span className="font-normal text-brand-navy/50">(Optional)</span>
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any medical history, dietary restrictions, allergies, or preferred appointment times..."
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-navy/15 focus:border-brand-mint focus:ring-2 focus:ring-brand-mint/20 text-sm text-brand-navy placeholder:text-brand-navy/35 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Connecting to Secure Gateway...</span>
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4" />
                          <span>Proceed to Checkout ({planPrice})</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-brand-navy/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-mint-dark" />
                    <span>256-Bit SSL Encrypted • Powered by Stripe</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
