import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, subtotalUsd } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError?: boolean } | null>(null);
  const navigate = useNavigate();

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'DANA10' || code === 'WELCOME10') {
      setDiscountPercent(10);
      setPromoMessage({ text: '10% Promotional discount applied successfully!' });
    } else if (code === 'HEALTH20') {
      setDiscountPercent(20);
      setPromoMessage({ text: '20% Special clinical discount applied!' });
    } else {
      setPromoMessage({ text: 'Invalid promo code. Try DANA10', isError: true });
    }
  };

  const discountAmount = (subtotalUsd * discountPercent) / 100;
  const finalTotal = Math.max(0, subtotalUsd - discountAmount);

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-2">
            Review Your Selection
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Shopping Cart ({totalItems})
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center max-w-xl mx-auto shadow-soft border border-surface-border">
            <div className="w-16 h-16 rounded-2xl bg-surface-subtle border border-surface-border flex items-center justify-center text-brand-navy/40 mx-auto mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-brand-navy mb-2">Your Cart is Currently Empty</h2>
            <p className="text-xs text-brand-navy/70 max-w-sm mx-auto mb-8 font-normal">
              Discover our personalized clinical packages and instant downloadable dietary protocols to begin your health journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/packages"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft transition-colors"
              >
                Explore Packages
              </Link>
              <Link
                to="/programs"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold text-brand-navy bg-surface-subtle hover:bg-brand-mint/20 border border-brand-navy/10 transition-colors"
              >
                Browse Meal Plans
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Items List Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-brand-navy/10 text-xs font-bold uppercase tracking-wider text-brand-navy/60">
                  <span>Product / Program</span>
                  <span>Quantity & Price</span>
                </div>

                <div className="divide-y divide-brand-navy/5">
                  {cart.map((item) => (
                    <div key={item.id} className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      
                      <div className="flex-1">
                        {item.badge && (
                          <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-brand-gold/25 text-brand-navy mb-1.5">
                            {item.badge}
                          </span>
                        )}
                        <h3 className="text-base font-extrabold text-brand-navy">
                          {item.title}
                        </h3>
                        <p className="text-xs text-brand-navy/65 mt-0.5">
                          {item.subtitle}
                        </p>
                        <span className="text-sm font-bold text-brand-coral block mt-1">
                          {item.price}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-brand-navy/15 rounded-xl bg-surface-subtle overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-white text-brand-navy/70 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-bold text-brand-navy min-w-[28px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-white text-brand-navy/70 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Remove item */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2.5 rounded-xl text-brand-navy/40 hover:text-red-500 hover:bg-red-50 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-brand-navy/10 flex items-center justify-between">
                  <button
                    onClick={clearCart}
                    className="text-xs font-semibold text-brand-navy/50 hover:text-red-500 transition-colors"
                  >
                    Clear All Items
                  </button>
                  <Link
                    to="/programs"
                    className="text-xs font-bold text-brand-coral hover:underline"
                  >
                    + Add More Programmes
                  </Link>
                </div>
              </div>

              {/* Promo Code Box */}
              <div className="bg-white rounded-3xl p-6 border border-surface-border shadow-soft">
                <form onSubmit={handleApplyPromo} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 text-brand-navy/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Have a Promo Code? (e.g. DANA10)"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-navy/15 text-xs text-brand-navy uppercase focus:outline-none focus:border-brand-mint font-bold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-brand-navy bg-surface-subtle hover:bg-brand-mint/20 border border-brand-navy/10 transition-colors"
                  >
                    Apply Code
                  </button>
                </form>

                {promoMessage && (
                  <p className={`text-xs mt-2 font-semibold ${promoMessage.isError ? 'text-red-500' : 'text-emerald-600'}`}>
                    {promoMessage.text}
                  </p>
                )}
              </div>
            </div>

            {/* Order Summary Column */}
            <div className="lg:col-span-4 sticky top-28 space-y-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft-lg space-y-6">
                <h3 className="text-lg font-extrabold text-brand-navy">Order Summary</h3>

                <div className="space-y-3 text-xs text-brand-navy/75">
                  <div className="flex items-center justify-between">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-bold text-brand-navy">${subtotalUsd.toFixed(2)} USD</span>
                  </div>

                  {discountPercent > 0 && (
                    <div className="flex items-center justify-between text-emerald-600 font-semibold">
                      <span>Discount ({discountPercent}%)</span>
                      <span>-${discountAmount.toFixed(2)} USD</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span>Digital Delivery</span>
                    <span className="font-bold text-brand-mint-dark">Instant (Free)</span>
                  </div>

                  <div className="pt-3 border-t border-brand-navy/10 flex items-center justify-between">
                    <span className="text-sm font-extrabold text-brand-navy">Estimated Total</span>
                    <span className="text-2xl font-black text-brand-coral">
                      ${finalTotal.toFixed(2)} USD
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-brand-navy/50 pt-1">
                  <ShieldCheck className="w-4 h-4 text-brand-mint-dark" />
                  <span>256-Bit SSL Encrypted & Instant Delivery</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
