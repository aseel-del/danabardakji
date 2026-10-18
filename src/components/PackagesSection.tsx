import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PACKAGES_DATA, CONSULTATION_DATA } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { GoogleIcon } from './common/GoogleIcon';

interface PackagesSectionProps {
  onSelectPlan?: (planName: string, price: string, details: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPlan }) => {
  const { language, isRTL, t } = useLanguage();

  return (
    <section id="packages" className="py-24 bg-surface-subtle relative overflow-hidden">
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-radial from-brand-mint/15 via-brand-gold/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-4 border border-brand-coral/20"
          >
            <GoogleIcon name="medical_services" className="text-sm" />
            <span>{t('packages.badge')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4"
          >
            {t('packages.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed font-normal"
          >
            {t('packages.subtitle')}
          </motion.p>
        </div>

        {/* 3 Main Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PACKAGES_DATA.map((pkg, index) => {
            const isPopular = pkg.popular;
            
            // Language-specific localized data
            const packageName = isRTL ? pkg.arabicName : pkg.name;
            const packageDuration = isRTL 
              ? `مدة الاشتراك: ${pkg.durationWeeks} أسابيع` 
              : `Duration: ${pkg.durationWeeks} Weeks`;
            const durationNote = isRTL 
              ? `اشتراك كامل • ${pkg.durationWeeks} أسابيع` 
              : `Full ${pkg.durationWeeks}-Week Clinical Coaching`;
            const currencyText = isRTL ? 'درهم إماراتي' : 'AED';
            
            // Features in pure language without mixed text or emojis
            const features = isRTL ? [
              'مشترك واحد',
              `متابعة عبر زوم (${pkg.zoomFollowUps === 1 ? 'جلسة واحدة' : pkg.zoomFollowUps === 2 ? 'جلستان' : `${pkg.zoomFollowUps} جلسات`})`,
              `${pkg.dietPlansCount} خطط غذائية مخصصة`,
              `مدة الاشتراك: ${pkg.durationWeeks} أسابيع`,
            ] : [
              '1 Dedicated Subscriber',
              `${pkg.zoomFollowUps || 1} Zoom Follow-Up Session${(pkg.zoomFollowUps || 1) > 1 ? 's' : ''}`,
              `${pkg.dietPlansCount} Customized Diet Plans`,
              `Duration: ${pkg.durationWeeks} Weeks`,
            ];

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative ${
                  isPopular
                    ? 'bg-brand-navy text-white shadow-soft-lg lg:-translate-y-2 border-2 border-brand-gold ring-4 ring-brand-gold/20'
                    : 'bg-white text-brand-navy border border-surface-border hover:border-brand-mint/60 shadow-soft hover:shadow-soft-lg'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className={`absolute -top-3.5 ${isRTL ? 'right-6' : 'left-6'} bg-brand-gold text-brand-navy text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5`}>
                    <GoogleIcon name="verified" className="text-sm font-bold" />
                    <span>{t('packages.mostPopular')}</span>
                  </div>
                )}

                <div>
                  {/* Card Title & Duration */}
                  <div className="mb-6">
                    <h3 className={`text-2xl sm:text-3xl font-extrabold mb-1.5 ${isPopular ? 'text-white' : 'text-brand-navy'}`}>
                      {packageName}
                    </h3>
                    <p className={`text-xs font-medium ${isPopular ? 'text-brand-gold-light' : 'text-brand-navy/60'}`}>
                      {packageDuration}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className={`pb-6 mb-6 border-b ${isPopular ? 'border-white/15' : 'border-brand-navy/10'}`}>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl sm:text-5xl font-black ${isPopular ? 'text-brand-gold' : 'text-brand-navy'}`}>
                        {pkg.priceAed}
                      </span>
                      <span className={`text-base font-bold ${isPopular ? 'text-white/80' : 'text-brand-navy/70'}`}>
                        {currencyText}
                      </span>
                    </div>
                    <span className={`text-xs font-medium block mt-1.5 ${isPopular ? 'text-white/70' : 'text-brand-navy/60'}`}>
                      {durationNote}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    {features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isPopular 
                            ? 'bg-brand-gold/20 text-brand-gold' 
                            : 'bg-brand-mint/25 text-brand-navy'
                        }`}>
                          <GoogleIcon name="check" className="text-xs font-bold" />
                        </div>
                        <span className={`text-sm font-semibold ${isPopular ? 'text-white/95' : 'text-brand-navy'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="space-y-3 pt-2">
                  <a
                    href={pkg.gumroadUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider shadow-soft transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                      isPopular
                        ? 'bg-brand-gold hover:bg-brand-gold-dark text-brand-navy shadow-gold-glow'
                        : 'bg-brand-coral hover:bg-brand-coral-dark text-white shadow-coral-glow'
                    }`}
                  >
                    <span>
                      {isRTL 
                        ? `اختر الباقة (${pkg.priceAed} درهم)` 
                        : `Choose Package (${pkg.priceAed} AED)`}
                    </span>
                    <GoogleIcon 
                      name={isRTL ? "arrow_back" : "arrow_forward"} 
                      className={`text-base transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} 
                    />
                  </a>

                  <Link
                    to={`/packages/${pkg.slug}`}
                    className={`inline-flex items-center justify-center gap-1 w-full text-center py-2 text-xs font-semibold transition-colors ${
                      isPopular 
                        ? 'text-white/70 hover:text-brand-gold' 
                        : 'text-brand-navy/60 hover:text-brand-coral'
                    }`}
                  >
                    <span>{t('packages.fullBreakdown')}</span>
                    <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-xs" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 1-on-1 Consultation Standalone Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-mint/40 shadow-soft flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-mint/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint/20 text-brand-navy text-xs font-bold mb-3">
              <GoogleIcon name="video_camera_front" className="text-sm" />
              <span>{t('consultation.badge')}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-2.5">
              {t('consultation.title')}
            </h3>
            
            <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed font-normal mb-3">
              {t('consultation.description')}
            </p>
            
            <p className="text-xs font-semibold text-brand-coral-dark flex items-center gap-1.5">
              <GoogleIcon name="info" className="text-sm flex-shrink-0" />
              <span>{t('consultation.note')}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5 flex-shrink-0 relative z-10 w-full sm:w-auto">
            <div className="text-center sm:text-right">
              <div className="text-3xl sm:text-4xl font-black text-brand-navy">
                {t('consultation.price')}
              </div>
              <span className="text-xs text-brand-navy/60 font-medium">
                {t('consultation.priceUnit')}
              </span>
            </div>

            <Link
              to="/packages/consultation"
              className="w-full sm:w-auto py-4 px-8 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-navy hover:bg-brand-navy-dark shadow-soft transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer"
            >
              <GoogleIcon name="calendar_today" className="text-base" />
              <span>{t('consultation.cta')}</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
