import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalItems, subtotalUsd } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsCartOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isCartOpen, setIsCartOpen]);

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-xs transition-opacity"
            aria-hidden="true"
          />

          {/* Slide-over Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 bg-brand-navy text-white flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-white">Your Cart</h3>
                    <p className="text-xs text-brand-mint font-medium">
                      {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 overscroll-contain">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-2xl bg-surface-subtle border border-surface-border flex items-center justify-center text-brand-navy/40 mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-brand-navy mb-2">Your Cart is Empty</h4>
                    <p className="text-xs text-brand-navy/60 max-w-xs mb-6">
                      Explore our personalized clinical packages and downloadable digital meal plans.
                    </p>
                    <div className="flex flex-col gap-2 w-full max-w-xs">
                      <button
                        onClick={() => {
                          setIsCartOpen(false);
                          navigate('/packages');
                        }}
                        className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft transition-colors"
                      >
                        Explore Packages
                      </button>
                      <button
                        onClick={() => {
                          setIsCartOpen(false);
                          navigate('/programs');
                        }}
                        className="w-full py-3 px-4 rounded-xl text-xs font-bold text-brand-navy bg-surface-subtle hover:bg-brand-mint/20 border border-brand-navy/10 transition-colors"
                      >
                        Browse Meal Plans
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl bg-surface-subtle border border-surface-border flex items-center justify-between gap-3 group"
                      >
                        <div className="flex-1 min-w-0">
                          {item.badge && (
                            <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-brand-gold/25 text-brand-navy mb-1">
                              {item.badge}
                            </span>
                          )}
                          <h5 className="text-sm font-bold text-brand-navy truncate">
                            {item.title}
                          </h5>
                          <p className="text-xs text-brand-navy/60 truncate mb-2">
                            {item.subtitle}
                          </p>

                          <div className="flex items-center gap-3">
                            <span className="text-sm font-extrabold text-brand-coral">
                              {item.price}
                            </span>

                            {/* Quantity Adjusters */}
                            <div className="flex items-center border border-brand-navy/15 rounded-lg bg-white overflow-hidden">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 hover:bg-brand-navy/5 text-brand-navy/70 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-bold text-brand-navy min-w-[20px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 hover:bg-brand-navy/5 text-brand-navy/70 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Remove item button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 rounded-xl text-brand-navy/40 hover:text-red-500 hover:bg-red-50 transition-colors flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {cart.length > 0 && (
                <div className="p-6 bg-white border-t border-brand-navy/10 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-brand-navy/70">
                      <span>Subtotal</span>
                      <span className="font-extrabold text-brand-navy">
                        ${subtotalUsd.toFixed(2)} USD
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-brand-navy/70">
                      <span>Delivery / Instant Access</span>
                      <span className="font-bold text-brand-mint-dark">Free Digital Access</span>
                    </div>
                    <div className="pt-2 border-t border-brand-navy/10 flex items-center justify-between">
                      <span className="text-sm font-extrabold text-brand-navy">Estimated Total</span>
                      <span className="text-xl font-black text-brand-navy">
                        ${subtotalUsd.toFixed(2)} USD
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      onClick={handleCheckout}
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all flex items-center justify-center gap-2"
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <Link
                      to="/cart"
                      onClick={() => setIsCartOpen(false)}
                      className="block text-center py-2.5 text-xs font-semibold text-brand-navy/75 hover:text-brand-navy transition-colors"
                    >
                      View Detailed Cart Page
                    </Link>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-brand-navy/50">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-mint-dark" />
                    <span>Instant Digital Access & Secure Checkout</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
