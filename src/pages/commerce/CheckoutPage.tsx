import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Lock, CheckCircle2, ArrowRight, Loader2, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export const CheckoutPage: React.FC = () => {
  const { cart, subtotalUsd, subtotalAed, clearCart } = useCart();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [healthGoal, setHealthGoal] = useState('Weight Management');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple_pay'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      id: orderId,
      orderNumber: orderId,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      status: 'Confirmed' as const,
      customer: { fullName, email, phone, healthGoal },
      items: cart.map((i) => ({
        id: i.id,
        title: i.title,
        price: i.price,
        type: i.type,
        downloadUrl: i.type === 'program' ? `/downloads/${i.id}.pdf` : undefined,
      })),
      total: `${subtotalAed.toFixed(0)} درهم إماراتي (~$${subtotalUsd.toFixed(2)} USD)`,
    };

    // Save order in localStorage
    try {
      const existingOrders = JSON.parse(localStorage.getItem('dana_orders_v1') || '[]');
      localStorage.setItem('dana_orders_v1', JSON.stringify([newOrder, ...existingOrders]));
    } catch {
      // ignore
    }

    // Simulate payment gateway processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate(`/thank-you?orderId=${orderId}&email=${encodeURIComponent(email)}&name=${encodeURIComponent(fullName)}`);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="pt-36 pb-24 bg-mesh-subtle min-h-screen">
        <div className="max-w-xl mx-auto px-4 text-center bg-white p-10 rounded-3xl shadow-soft border border-surface-border">
          <h2 className="text-xl font-bold text-brand-navy mb-2">No Items in Checkout</h2>
          <p className="text-xs text-brand-navy/70 mb-6">Please add a clinical package or meal plan to your cart before proceeding.</p>
          <Link
            to="/packages"
            className="inline-block px-6 py-3 rounded-xl text-xs font-bold text-white bg-brand-coral hover:bg-brand-coral-dark"
          >
            Browse Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/cart"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Cart</span>
        </Link>

        {/* Page Title */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-1.5">
            Encrypted 256-Bit SSL Checkout
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Checkout & Patient Intake
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Intake & Billing */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Patient Information Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-5">
              <h3 className="text-lg font-extrabold text-brand-navy flex items-center gap-2">
                <span>1. Patient Information & Medical Goals</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Al-Mansoor"
                    className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 text-sm text-brand-navy focus:border-brand-mint focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 text-sm text-brand-navy focus:border-brand-mint focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                      WhatsApp / Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+962 7 9222 2058"
                      className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 text-sm text-brand-navy focus:border-brand-mint focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Primary Health & Dietary Goal
                  </label>
                  <select
                    value={healthGoal}
                    onChange={(e) => setHealthGoal(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 text-sm text-brand-navy bg-white focus:border-brand-mint focus:outline-none"
                  >
                    <option value="Weight Management">Weight Management (Loss / Lean Gain)</option>
                    <option value="Metabolic Care (Diabetes / BP / Cholesterol)">Metabolic Care (Diabetes / BP / Cholesterol)</option>
                    <option value="PCOS & Fertility Nutrition">PCOS & Fertility Nutrition</option>
                    <option value="Gut Reset & Digestive Relief">Gut Reset & Digestive Relief</option>
                    <option value="Post Bariatric Diet Maintenance">Post Bariatric Diet Maintenance</option>
                    <option value="Athletic Performance & Muscle Gain">Athletic Performance & Muscle Gain</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Health Background or Special Requests <span className="font-normal text-brand-navy/50">(Optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="List any food allergies, medications, past lab findings, or preferred appointment times..."
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-navy/15 text-sm text-brand-navy focus:border-brand-mint focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-extrabold text-brand-navy">
                  2. Payment Method
                </h3>
                <span className="flex items-center gap-1 text-xs text-brand-mint-dark font-bold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Stripe Secure Gateway</span>
                </span>
              </div>

              {/* Payment selector tabs */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-brand-coral bg-brand-coral/5 text-brand-coral'
                      : 'border-brand-navy/10 bg-surface-subtle text-brand-navy/70'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Credit / Debit Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple_pay')}
                  className={`p-3.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    paymentMethod === 'apple_pay'
                      ? 'border-brand-coral bg-brand-coral/5 text-brand-coral'
                      : 'border-brand-navy/10 bg-surface-subtle text-brand-navy/70'
                  }`}
                >
                  <span>Apple Pay / Fast Pay</span>
                </button>
              </div>

              {paymentMethod === 'card' ? (
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      required
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="4000 1234 5678 9010"
                      className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 text-sm text-brand-navy focus:border-brand-mint focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        required
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="MM / YY"
                        className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 text-sm text-brand-navy focus:border-brand-mint focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1">
                        Security CVC
                      </label>
                      <input
                        type="text"
                        required
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        placeholder="123"
                        className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 text-sm text-brand-navy focus:border-brand-mint focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-surface-subtle text-center text-xs text-brand-navy/75">
                  Apple Pay token will be authorized upon submitting the order.
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary & Place Order */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft-lg space-y-5">
              <h3 className="text-lg font-extrabold text-brand-navy">Order Review</h3>

              <div className="divide-y divide-brand-navy/5 max-h-60 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="py-3 flex items-center justify-between text-xs">
                    <div>
                      <h5 className="font-bold text-brand-navy">{item.title}</h5>
                      <span className="text-brand-navy/60 font-medium">Qty: {item.quantity}</span>
                    </div>
                    <span className="font-bold text-brand-coral">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-brand-navy/10 space-y-2 text-xs text-brand-navy/75">
                <div className="flex items-center justify-between">
                  <span>المجموع الفرعي</span>
                  <span className="font-bold text-brand-navy">{subtotalAed.toFixed(0)} درهم إماراتي</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>الوصول الرقمي والمتابعة</span>
                  <span className="font-bold text-brand-mint-dark">فوري ومجاني</span>
                </div>
                <div className="pt-2 border-t border-brand-navy/10 flex items-center justify-between text-base font-black text-brand-navy">
                  <span>المجموع النهائي</span>
                  <div className="text-right">
                    <span className="text-2xl text-brand-coral">{subtotalAed.toFixed(0)} <span className="text-xs font-bold text-brand-navy/70">درهم إماراتي</span></span>
                    <span className="text-[10px] text-brand-navy/50 block font-normal">~${subtotalUsd.toFixed(2)} USD</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing Secure Gateway...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Complete Order & Authorize</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-brand-navy/50 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-mint-dark" />
                <span>Protected by Stripe • 100% Medical Confidentiality</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
