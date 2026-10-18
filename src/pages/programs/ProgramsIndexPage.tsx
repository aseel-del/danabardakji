import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROGRAMS_DATA } from '../../data/siteData';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';

export const ProgramsIndexPage: React.FC = () => {
  const { isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredPrograms = activeCategory === 'all'
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter((p) => p.category === activeCategory);

  const filterTabs = [
    { id: 'all', label: isRTL ? `جميع الكتيبات (${PROGRAMS_DATA.length})` : `All Protocols (${PROGRAMS_DATA.length})` },
    { id: 'protocol', label: isRTL ? 'البروتوكولات السريرية' : 'Clinical Protocols' },
    { id: 'meal-plan', label: isRTL ? 'خطط الوجبات المنظمة' : 'Structured Meal Plans' },
    { id: 'guide', label: isRTL ? 'أدلة الحصص والبدائل' : 'Portion & Exchange Handbooks' },
  ];

  const currencyText = isRTL ? 'درهم' : 'AED';

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-4 border border-brand-coral/20"
          >
            <GoogleIcon name="menu_book" className="text-sm" />
            <span>{isRTL ? 'الكتيبات والبرامج الغذائية الرقمية' : 'Digital Meal Plans & Protocols'}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-4"
          >
            {isRTL ? 'دليل البرامج والكتيبات العلاجية' : 'Programmes & Protocols Catalogue'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed font-normal"
          >
            {isRTL 
              ? 'أدلة وبرامج غذائية علاجية سريرية صممتها أخصائية التغذية دانة بردقجي. تحميل فوري بصيغة PDF مع وصفات كاملة وقوائم مشتريات وقواعد توازن الأيض.'
              : 'Self-guided clinical dietary protocols formulated by certified clinical dietitian Dana Bardakji. Instant digital PDF access with comprehensive recipes, grocery checklists, and metabolic rules.'}
          </motion.p>

          {/* Filter Category Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-navy text-white shadow-soft-sm'
                      : 'bg-white text-brand-navy/75 hover:text-brand-navy border border-brand-navy/10 hover:border-brand-mint'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Programmes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {filteredPrograms.map((prog, index) => {
            const title = isRTL ? (prog.arabicTitle || prog.title) : prog.title;
            const subtitle = isRTL ? (prog.arabicSubtitle || prog.subtitle) : prog.subtitle;
            const badge = isRTL ? (prog.arabicBadge || prog.badge) : prog.badge;
            const whatsIncluded = isRTL ? (prog.arabicWhatsIncluded || prog.whatsIncluded) : prog.whatsIncluded;

            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-surface-border hover:border-brand-mint/60 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Header Badge & Price */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-brand-gold/20 text-brand-navy border border-brand-gold/30">
                      {badge}
                    </span>
                    <div className={isRTL ? "text-left" : "text-right"}>
                      <div className="flex items-baseline gap-1 text-brand-navy font-black text-lg">
                        <span className="text-xs font-normal text-brand-navy/60">{isRTL ? 'من' : 'From'}</span>
                        <span>{prog.priceWithoutFollowUpAed || 350}</span>
                        <span className="text-xs font-bold text-brand-navy/70">{currencyText}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <a
                    href={prog.gumroadUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group-hover:text-brand-coral transition-colors"
                  >
                    <h3 className="text-xl font-extrabold text-brand-navy mb-1.5 leading-snug">
                      {title}
                    </h3>
                  </a>
                  <p className="text-xs text-brand-navy/65 font-medium mb-4 leading-relaxed line-clamp-2">
                    {subtitle}
                  </p>

                  {/* 2 Options Pill Box */}
                  <div className="mb-4 p-3 rounded-2xl bg-surface-subtle border border-surface-border text-xs space-y-1.5">
                    <div className="flex items-center justify-between font-semibold text-brand-navy">
                      <span>{isRTL ? 'بدون متابعة (تحميل فوري):' : 'Without Follow-up (PDF):'}</span>
                      <span className="text-brand-coral font-bold">350 {currencyText}</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-brand-navy">
                      <span>{isRTL ? 'مع متابعة أسبوعية:' : 'With Weekly Follow-up:'}</span>
                      <span className="text-brand-navy font-bold">550 {currencyText}</span>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2 mb-5 pt-2 border-t border-brand-navy/5">
                    {whatsIncluded.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-brand-navy/80">
                        <div className="w-4 h-4 rounded-full bg-brand-mint/20 text-brand-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                          <GoogleIcon name="check" className="text-[10px] font-bold" />
                        </div>
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-brand-navy/10 flex flex-col gap-2">
                  <a
                    href={prog.gumroadUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer group/btn"
                  >
                    <span>
                      {isRTL ? 'الحصول على البرنامج' : 'Get Protocol'}
                    </span>
                    <GoogleIcon name="arrow_outward" className="text-sm transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
