import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PACKAGES_DATA, CONSULTATION_DATA } from '../../data/siteData';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';

export const PackagesIndexPage: React.FC = () => {
  const { isRTL, t } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-4 border border-brand-coral/20"
          >
            <GoogleIcon name="medical_services" className="text-sm" />
            <span>{t('packages.badge')}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-4"
          >
            {t('packages.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed font-normal"
          >
            {t('packages.subtitle')}
          </motion.p>
        </div>

        {/* 1-on-1 Consultation Standalone Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-brand-mint/40 shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-mint/20 text-brand-navy flex items-center justify-center flex-shrink-0">
              <GoogleIcon name="video_camera_front" className="text-2xl text-brand-navy" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-brand-coral/15 text-brand-coral">
                  {t('consultation.badge')}
                </span>
                <span className="text-xs font-bold text-brand-navy/60">45-60 Mins</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                {t('consultation.title')}
              </h2>
              <p className="text-xs sm:text-sm text-brand-navy/75 max-w-2xl mt-1 font-normal">
                {t('consultation.description')}{' '}
                <span className="text-brand-coral-dark font-medium">{t('consultation.note')}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto flex-shrink-0">
            <div className="text-center md:text-right px-4">
              <div className="text-3xl font-black text-brand-navy">
                $50 <span className="text-xs font-bold text-brand-navy/60">USD</span>
              </div>
              <span className="text-[11px] text-brand-navy/60">{t('consultation.priceUnit')}</span>
            </div>

            <Link
              to="/packages/consultation"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft transition-all text-center flex items-center justify-center gap-2"
            >
              <GoogleIcon name="calendar_today" className="text-sm" />
              <span>{t('consultation.cta')}</span>
            </Link>
          </div>
        </motion.div>

        {/* 3 Main Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {PACKAGES_DATA.map((pkg, index) => {
            const isPopular = pkg.popular;
            
            const packageName = isRTL ? pkg.arabicName : pkg.name;
            const packageDuration = isRTL 
              ? `مدة الاشتراك: ${pkg.durationWeeks} أسابيع` 
              : `Duration: ${pkg.durationWeeks} Weeks`;
            const durationNote = isRTL 
              ? `اشتراك كامل • ${pkg.durationWeeks} أسابيع` 
              : `Full ${pkg.durationWeeks}-Week Clinical Coaching`;
            const currencyText = isRTL ? 'درهم إماراتي' : 'AED';

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
                animate={{ opacity: 1, y: 0 }}
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

                  {/* Features List */}
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

                {/* Actions */}
                <div className="space-y-3 pt-2">
                  <a
                    href={pkg.gumroadUrl || `#`}
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
                    className={`block text-center py-2 text-xs font-semibold transition-colors ${
                      isPopular 
                        ? 'text-white/70 hover:text-brand-gold' 
                        : 'text-brand-navy/60 hover:text-brand-coral'
                    }`}
                  >
                    <span>{t('packages.fullBreakdown')}</span>
                    <span className="inline-block mx-1">{isRTL ? '←' : '→'}</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clinical Assurance Banner */}
        <div className="rounded-3xl p-8 bg-white border border-brand-mint/30 shadow-soft text-center max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-brand-mint/20 text-brand-navy flex items-center justify-center mx-auto mb-4">
            <GoogleIcon name="verified_user" className="text-2xl text-brand-navy" />
          </div>
          <h3 className="text-xl font-extrabold text-brand-navy mb-2">
            {isRTL ? 'معايير سريرية عالية ورعاية متواصلة' : 'Clinical Standards & Continuous Accountability'}
          </h3>
          <p className="text-sm text-brand-navy/70 leading-relaxed font-normal">
            {isRTL 
              ? 'متابعة شخصية مباشرة من الأخصائية دانة بردقجي، مراجعة دقيقة لنتائج الفحوصات المخبرية، متابعة أسبوعية مستمرة عبر واتساب، وبدائل مرنة تتناسب مع يومك وأهدافك الصحية.'
              : 'Direct 1-on-1 nutritional guidance from Dana Bardakji, comprehensive laboratory review, weekly WhatsApp follow-ups, flexible food exchange substitutions, and customized progress adaptations.'}
          </p>
        </div>

      </div>
    </div>
  );
};
