import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingBag, ArrowLeft, ShieldCheck, MessageCircle, Calendar, Sparkles, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { PACKAGES_DATA } from '../../data/siteData';

export const PremiumPackagePage: React.FC = () => {
  const pkg = PACKAGES_DATA[1]; // Premium
  const [selectedOption, setSelectedOption] = useState<'single' | 'dual'>('single');
  const { addToCart } = useCart();

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link
          to="/packages"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Packages</span>
        </Link>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold/30 text-brand-navy">
                  8 Weeks • Flagship Plan
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-coral/15 text-brand-coral flex items-center gap-1">
                  <Gift className="w-3.5 h-3.5" />
                  <span>1 Free Bonus Session</span>
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
                {pkg.name}
              </h1>
              <p className="text-base text-brand-navy/80 leading-relaxed font-normal">
                {pkg.description}
              </p>
            </div>

            {/* Option Configuration Switcher */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-base font-bold text-brand-navy">Choose Your Configuration:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedOption('single')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedOption === 'single'
                      ? 'border-brand-coral bg-brand-coral/5 shadow-soft-sm'
                      : 'border-brand-navy/10 bg-surface-subtle hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-brand-navy">Option 1: Single Subscriber</span>
                    {selectedOption === 'single' && <Check className="w-4 h-4 text-brand-coral" />}
                  </div>
                  <p className="text-xs text-brand-navy/70 font-medium">1 Person for 2 Full Months (8 Weeks) + 1 Bonus Session</p>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedOption('dual')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedOption === 'dual'
                      ? 'border-brand-coral bg-brand-coral/5 shadow-soft-sm'
                      : 'border-brand-navy/10 bg-surface-subtle hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-brand-navy">Option 2: Dual Subscribers</span>
                    {selectedOption === 'dual' && <Check className="w-4 h-4 text-brand-coral" />}
                  </div>
                  <p className="text-xs text-brand-navy/70 font-medium">2 People for 1 Full Month (4 Weeks) + 1 Bonus Session</p>
                </button>
              </div>
            </div>

            {/* What is Included */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-gold" />
                <span>What's Included in Your Premium Package</span>
              </h3>
              <div className="space-y-3 pt-2">
                {pkg.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-navy/85">
                    <Check className="w-4 h-4 text-brand-mint-dark flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing & Booking Card Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 border-2 border-brand-gold shadow-soft-xl space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block mb-1">
                  {selectedOption === 'single' ? '1 Subscriber (2 Months)' : '2 Subscribers (1 Month)'}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-gold">{pkg.priceDhs}</span>
                  <span className="text-lg font-bold text-white/80">DHS</span>
                  <span className="text-xs font-semibold text-white/60"> (~${pkg.priceUsd} USD)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-xs text-white/80 space-y-2">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-brand-gold" />
                  <span className="text-white font-bold">Includes 1 Free Bonus Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-mint" />
                  <span>Start Date: Within 24-48h of intake submission</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-brand-mint" />
                  <span>Continuous 1-on-1 WhatsApp Support</span>
                </div>
              </div>

              <button
                onClick={() =>
                  addToCart({
                    id: `${pkg.id}-${selectedOption}`,
                    title: `${pkg.name} (${selectedOption === 'single' ? '1 Sub • 2 Mo' : '2 Subs • 1 Mo'})`,
                    subtitle: `Includes 1 Free Bonus Session • ${pkg.priceDhs} DHS`,
                    price: `${pkg.priceDhs} DHS`,
                    priceNumber: pkg.priceDhs,
                    currency: 'DHS',
                    type: 'package',
                    slug: `/packages/${pkg.slug}`,
                    badge: 'Popular',
                  })
                }
                className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-brand-navy bg-brand-gold hover:bg-white shadow-gold-glow transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart ({pkg.priceDhs} DHS)</span>
              </button>

              <div className="text-center pt-2">
                <a
                  href="https://wa.me/962792222058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-white/80 hover:text-brand-gold transition-colors"
                >
                  Have questions? Chat with Dana on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
