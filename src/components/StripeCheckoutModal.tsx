import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, ShieldCheck, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate Stripe Checkout session dispatch
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-brand-navy/10 overflow-hidden z-10 my-8"
        >
          {/* Airy, Elegant Header */}
          <div className="bg-brand-navy p-6 sm:p-7 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Plan Title */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight pr-10 mb-4">
              {planName || 'Consultation Booking'}
            </h3>

            {/* Price & Details Bar */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              {renderFormattedPrice(planPrice)}
              <div className="text-xs text-white/80 font-medium sm:text-right max-w-xs leading-relaxed">
                {planDetails}
              </div>
            </div>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-8">
            {isSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-brand-mint/25 text-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9 text-brand-mint-dark" />
                </div>
                <h4 className="text-2xl font-bold text-brand-navy mb-2">Booking Registered</h4>
                <p className="text-sm text-brand-navy/80 leading-relaxed mb-6">
                  Thank you, <strong>{fullName}</strong>. Your consultation request for <strong>{planName}</strong> has been received. Dana will reach out directly via WhatsApp or Email within 24 hours to schedule your session.
                </p>

                <div className="bg-surface-subtle p-4 rounded-xl text-xs text-brand-navy/75 border border-surface-border text-left mb-6 space-y-1.5">
                  <div><strong className="text-brand-navy">Email:</strong> {email}</div>
                  <div><strong className="text-brand-navy">Phone:</strong> {phone}</div>
                  <div><strong className="text-brand-navy">Selected Plan:</strong> {planName} ({planPrice})</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/962792222058?text=Hello%20Dana,%20I%20have%20selected%20the%20${encodeURIComponent(planName)}%20(${encodeURIComponent(planPrice)}).%20My%20name%20is%20${encodeURIComponent(fullName)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-brand-navy hover:bg-brand-navy-light transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Message on WhatsApp Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={handleReset}
                    className="py-3.5 px-5 rounded-xl text-xs font-bold text-brand-navy bg-surface-subtle hover:bg-brand-mint/20 border border-brand-navy/15 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy/80 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Al-Ahmad"
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-navy/20 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none text-sm text-brand-navy transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy/80 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-navy/20 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none text-sm text-brand-navy transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy/80 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 ... or +962 7 ..."
                      className="w-full px-4 py-2.5 rounded-xl border border-brand-navy/20 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none text-sm text-brand-navy transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy/80 mb-1.5">
                    Primary Health Focus
                  </label>
                  <select
                    value={healthGoal}
                    onChange={(e) => setHealthGoal(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-navy/20 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none text-sm text-brand-navy bg-white transition-all"
                  >
                    <option value="Weight Management">Weight Management (Fat Loss / Healthy Gain)</option>
                    <option value="Muscle Gain">Muscle Gain & Athletic Nutrition</option>
                    <option value="Pregnant & Lactating">Pregnant & Lactating Nutrition</option>
                    <option value="Keto Diet">Keto Plan</option>
                    <option value="Post Bariatric">Post Bariatric Surgery Plan</option>
                    <option value="Therapeutic / Medical">Therapeutic (Diabetes, Hypertension, Cholesterol, Allergies)</option>
                    <option value="Well Being & Reflection">Well Being & Mindful Eating</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy/80 mb-1.5">
                    Notes or Specific Inquiries (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention any allergies, medical conditions, or appointment preferences..."
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-navy/20 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none text-sm text-brand-navy transition-all resize-none"
                  />
                </div>

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
    </AnimatePresence>
  );
};
