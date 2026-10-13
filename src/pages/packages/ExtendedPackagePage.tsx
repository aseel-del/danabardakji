import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingBag, ArrowLeft, ShieldCheck, MessageCircle, Calendar, Sparkles, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { PACKAGES_DATA } from '../../data/siteData';

export const ExtendedPackagePage: React.FC = () => {
  const pkg = PACKAGES_DATA[2]; // Extended
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
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-mint/30 text-brand-navy">
                  12 Weeks • 3 Full Months
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-coral/15 text-brand-coral flex items-center gap-1">
                  <Gift className="w-3.5 h-3.5" />
                  <span>2 Free Bonus Sessions</span>
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
                {pkg.name}
              </h1>
              <p className="text-base text-brand-navy/80 leading-relaxed font-normal">
                {pkg.description}
              </p>
            </div>

            {/* What is Included */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-gold" />
                <span>What's Included in Your 12-Week Journey</span>
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

            {/* Special Clinical Focus */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-3">
              <h3 className="text-base font-bold text-brand-navy">Recommended For:</h3>
              <p className="text-xs text-brand-navy/75 leading-relaxed font-normal">
                Clients needing ongoing medical nutritional therapy for chronic conditions (Type-2 diabetes reversal, hypertension, severe hormonal dysregulation/PCOS, post-bariatric surgery care, morbid obesity, or severe food allergies).
              </p>
            </div>
          </div>

          {/* Pricing & Booking Card Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-mint/40 shadow-soft-xl space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block mb-1">
                  3 Months Transformation • 1 Subscriber
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-navy">{pkg.priceDhs}</span>
                  <span className="text-lg font-bold text-brand-navy/70">DHS</span>
                  <span className="text-xs font-semibold text-brand-navy/50"> (~${pkg.priceUsd} USD)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border text-xs text-brand-navy/75 space-y-2">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-brand-coral" />
                  <span className="text-brand-navy font-bold">Includes 2 Free Bonus Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-mint-dark" />
                  <span>Start Date: Within 24-48h of intake submission</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-brand-mint-dark" />
                  <span>Priority WhatsApp Follow-up with Dana</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-mint-dark" />
                  <span>Full Lab Biomarker Monitoring</span>
                </div>
              </div>

              <button
                onClick={() =>
                  addToCart({
                    id: pkg.id,
                    title: pkg.name,
                    subtitle: `${pkg.duration} • 2 Bonus Sessions Included`,
                    price: `${pkg.priceDhs} DHS`,
                    priceNumber: pkg.priceDhs,
                    currency: 'DHS',
                    type: 'package',
                    slug: `/packages/${pkg.slug}`,
                  })
                }
                className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart ({pkg.priceDhs} DHS)</span>
              </button>

              <div className="text-center pt-2">
                <a
                  href="https://wa.me/962792222058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-navy hover:text-brand-coral transition-colors"
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
