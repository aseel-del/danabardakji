import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, ShoppingBag, Sparkles, MessageCircle, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PACKAGES_DATA, CONSULTATION_DATA } from '../../data/siteData';
import { useCart } from '../../context/CartContext';

export const PackagesIndexPage: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-3"
          >
            Clinical Dietary Packages
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-brand-coral tracking-tight mb-6"
          >
            Personalized Nutrition Packages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed font-normal"
          >
            Select the clinical package that aligns with your timeline, accountability goals, and health requirements. All plans include 1-on-1 personalized attention directly from Dana.
          </motion.p>
        </div>

        {/* 1-on-1 Consultation Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-brand-mint/40 shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-mint/20 text-brand-navy flex items-center justify-center flex-shrink-0">
              <Calendar className="w-7 h-7 text-brand-mint-dark" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-brand-coral/15 text-brand-coral">
                  Diagnostic Evaluation
                </span>
                <span className="text-xs font-bold text-brand-navy/60">45-60 Mins</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                {CONSULTATION_DATA.name}
              </h2>
              <p className="text-xs sm:text-sm text-brand-navy/75 max-w-2xl mt-1 font-normal">
                {CONSULTATION_DATA.description} <span className="text-brand-coral font-medium">{CONSULTATION_DATA.note}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-shrink-0">
            <div className="text-center md:text-right px-4">
              <div className="text-3xl font-black text-brand-navy">${CONSULTATION_DATA.priceUsd} <span className="text-xs font-bold text-brand-navy/60">USD</span></div>
              <span className="text-[11px] text-brand-navy/60">Single Diagnostic Session</span>
            </div>

            <Link
              to="/packages/consultation"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft transition-all text-center"
            >
              Book Session
            </Link>
          </div>
        </motion.div>

        {/* 3 Main Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {PACKAGES_DATA.map((pkg, index) => {
            const isPopular = pkg.popular;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between shadow-soft hover:shadow-soft-xl relative ${
                  isPopular 
                    ? 'border-brand-mint-dark ring-2 ring-brand-mint/50 lg:-translate-y-2' 
                    : 'border-surface-border hover:border-brand-mint/80'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-3 right-3 z-10 bg-white/95 text-brand-navy text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1 border border-brand-mint/30">
                    <Sparkles className="w-3 h-3 text-brand-gold" />
                    <span>الأكثر طلباً • Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Top Solid Color Header Bar */}
                  <div 
                    className="p-6 text-center text-white relative transition-colors duration-300"
                    style={{ backgroundColor: pkg.headerColor || '#3C7D68' }}
                  >
                    <div className="text-2xl sm:text-3xl font-black mb-1 font-sans">
                      {pkg.arabicName}
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold tracking-widest uppercase opacity-90">
                      {pkg.englishName}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    {/* Price */}
                    <div className="text-center pb-6 mb-6 border-b border-brand-navy/10">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl sm:text-5xl font-black text-brand-navy">
                          {pkg.priceAed}
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-brand-navy/80">
                          درهم إماراتي
                        </span>
                      </div>
                      <span className="text-xs text-brand-navy/60 font-medium block mt-1">
                        {pkg.duration} • اشتراك كامل
                      </span>
                    </div>

                    {/* Features with 🚩 */}
                    <div className="space-y-4 mb-8" dir="rtl">
                      {pkg.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-3 text-right">
                          <span className="text-base select-none flex-shrink-0" aria-hidden="true">
                            🚩
                          </span>
                          <span className="text-sm sm:text-base font-bold text-brand-navy">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 sm:p-8 pt-0 space-y-3">
                  <a
                    href={pkg.gumroadUrl || `#`}
                    className="gumroad-button w-full py-3.5 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all flex items-center justify-center gap-2 cursor-pointer"
                    style={{ backgroundColor: pkg.headerColor || '#3C7D68' }}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>الاشتراك عبر Gumroad ({pkg.priceAed} درهم)</span>
                  </a>

                  <Link
                    to={`/packages/${pkg.slug}`}
                    className="block text-center py-2 text-xs font-semibold rounded-xl text-brand-navy/70 hover:text-brand-navy transition-colors"
                  >
                    عرض كامل تفاصيل الباقة / Full Details →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clinical Assurance Note */}
        <div className="p-8 rounded-3xl bg-white border border-brand-navy/10 text-center max-w-3xl mx-auto space-y-3 shadow-soft-sm">
          <div className="w-12 h-12 rounded-2xl bg-brand-mint/20 text-brand-navy flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6 text-brand-mint-dark" />
          </div>
          <h3 className="text-lg font-bold text-brand-navy">All Clinical Packages Include</h3>
          <p className="text-xs text-brand-navy/75 leading-relaxed font-normal">
            Direct 1-on-1 nutritional guidance from Dana Bardakji, full lab review, weekly WhatsApp follow-ups, flexible food exchange substitutions, and customized progress adaptations.
          </p>
        </div>
      </div>
    </div>
  );
};
