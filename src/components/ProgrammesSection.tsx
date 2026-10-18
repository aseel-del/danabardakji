import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROGRAMS_DATA } from '../data/siteData';
import { useLanguage } from '../context/LanguageContext';
import { GoogleIcon } from './common/GoogleIcon';

export const ProgrammesSection: React.FC = () => {
  const { isRTL, t } = useLanguage();

  return (
    <section id="programmes" className="py-24 bg-surface-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-3 border border-brand-coral/20"
            >
              <GoogleIcon name="menu_book" className="text-sm" />
              <span>{t('programs.badge')}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4"
            >
              {t('programs.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-brand-navy/80 leading-relaxed font-normal"
            >
              {t('programs.subtitle')}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-brand-navy bg-white hover:bg-brand-mint/20 border border-brand-navy/10 hover:border-brand-mint shadow-soft transition-all"
            >
              <span>{isRTL ? 'عرض جميع الكتيبات (6)' : 'View All 6 Protocols'}</span>
              <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-base text-brand-coral" />
            </Link>
          </motion.div>
        </div>

        {/* Programmes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROGRAMS_DATA.map((prog, index) => {
            const title = isRTL ? (prog.arabicTitle || prog.title) : prog.title;
            const subtitle = isRTL ? (prog.arabicSubtitle || prog.subtitle) : prog.subtitle;
            const currencyText = isRTL ? 'درهم' : 'AED';

            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-surface-border hover:border-brand-mint/60 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Header Badge & Price */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-brand-gold/20 text-brand-navy border border-brand-gold/30">
                      {prog.badge}
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
                    {prog.whatsIncluded.slice(0, 3).map((feat, i) => (
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
                      {isRTL ? 'الحصول على البرنامج (350 - 550 درهم)' : 'Get Protocol (350 - 550 AED)'}
                    </span>
                    <GoogleIcon name="arrow_outward" className="text-sm transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
