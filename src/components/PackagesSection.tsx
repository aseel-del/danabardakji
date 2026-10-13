import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CreditCard,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PACKAGES_DATA, CONSULTATION_DATA } from '../data/siteData';

interface PackagesSectionProps {
  onSelectPlan?: (planName: string, price: string, details: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="packages" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-radial from-brand-mint/15 via-brand-gold/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span>باقات الاشتراك والمتابعة السريرية</span>
            <span>•</span>
            <span>Clinical Packages</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4"
          >
            Personalized Dietary Packages
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed font-normal"
          >
            باقات تغذية علاجية مخصصة بإشراف الأخصائية دانا بردقجي. اختاري الباقة المناسبة لأهدافك ومتابعتك.
          </motion.p>
        </div>

        {/* 3 Main Packages Grid (Native UI Cards matching exact visual specifications) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PACKAGES_DATA.map((pkg, index) => {
            const isPopular = pkg.popular;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between shadow-soft hover:shadow-soft-xl relative ${
                  isPopular 
                    ? 'border-brand-mint-dark ring-2 ring-brand-mint/50 lg:-translate-y-2' 
                    : 'border-surface-border hover:border-brand-mint/80'
                }`}
              >
                {/* Popular Pill */}
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

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    {/* Price in UAE Dirhams */}
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

                    {/* Features List with exact 🚩 flag markers */}
                    <div className="space-y-4 mb-8" dir="rtl">
                      {pkg.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3 text-right">
                          <span className="text-base select-none flex-shrink-0" aria-hidden="true">
                            🚩
                          </span>
                          <span className="text-sm sm:text-base font-bold text-brand-navy">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-6 sm:p-8 pt-0 space-y-3">
                  <button
                    onClick={() =>
                      onSelectPlan?.(
                        `${pkg.arabicName} (${pkg.englishName})`,
                        `${pkg.priceAed} درهم إماراتي`,
                        pkg.features.join(' • ')
                      )
                    }
                    className="w-full py-3.5 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white shadow-soft transition-all duration-200 flex items-center justify-center gap-2 group"
                    style={{ backgroundColor: pkg.headerColor || '#3C7D68' }}
                  >
                    <span>اختر الباقة / Select Package</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <Link
                    to={`/packages/${pkg.slug}`}
                    className="block text-center py-2 text-xs font-semibold text-brand-navy/70 hover:text-brand-navy transition-colors"
                  >
                    تفاصيل الباقة الكاملة / Full Breakdown →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 1-on-1 Consultation Standalone Card ($50) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-brand-mint/20 via-brand-gold/15 to-brand-coral/15 rounded-3xl p-8 border border-brand-mint/40 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">
              {CONSULTATION_DATA.name}
            </h3>
            <p className="text-sm text-brand-navy/80 leading-relaxed">
              {CONSULTATION_DATA.description}
            </p>
            <p className="text-xs font-semibold text-brand-coral-dark mt-2 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{CONSULTATION_DATA.note}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <div className="text-center sm:text-right">
              <div className="text-3xl sm:text-4xl font-black text-brand-navy">
                {CONSULTATION_DATA.priceDhs} <span className="text-lg font-bold text-brand-navy/70">درهم</span>
              </div>
              <span className="text-xs text-brand-navy/70 font-medium">~${CONSULTATION_DATA.priceUsd} USD / Session</span>
            </div>

            <button
              onClick={() => onSelectPlan?.(CONSULTATION_DATA.name, `${CONSULTATION_DATA.priceDhs} درهم إماراتي`, CONSULTATION_DATA.tagline)}
              className="py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all duration-300 flex items-center gap-2 group whitespace-nowrap"
            >
              <CreditCard className="w-4 h-4" />
              <span>حجز جلسة استشارة سريرية</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
