import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { GoogleIcon } from './common/GoogleIcon';

export const HowItWorksSection: React.FC = () => {
  const { isRTL, t } = useLanguage();

  const steps = isRTL ? [
    {
      number: '01',
      icon: 'checklist',
      title: 'اختيار الباقة أو الاستشارة',
      description: 'اختاري بين باقات الـ 4، 9، أو 12 أسبوعاً للمتابعة السريرية، أو الكتيبات التخصصية، أو جلسة استشارة تشخيصية مباشرة مع دانا.',
      highlight: 'تأكيد فوري ونموذج التقييم الصحي',
    },
    {
      number: '02',
      icon: 'medical_services',
      title: 'التقييم الصحي والتحاليل',
      description: 'تقوم دانا بمراجعة التاريخ الطبي، الفحوصات المخبرية، المؤشرات الحيوية، حساسيات الطعام، والروتين اليومي بدقة متناهية.',
      highlight: 'تحليل سريري مخصص 100%',
    },
    {
      number: '03',
      icon: 'monitoring',
      title: 'الخطة والمتابعة الأسبوعية',
      description: 'استلام خطتك الغذائية خلال 24-48 ساعة، مع جلسات زوم ومتابعة مستمرة أسبوعياً عبر واتساب لتعديل الخطط بمرونة.',
      highlight: 'رعاية ومتابعة شخصية مستمرة',
    },
  ] : [
    {
      number: '01',
      icon: 'checklist',
      title: 'Select Your Plan or Consultation',
      description: 'Choose between 4, 9, or 12-week clinical coaching packages, instant digital meal protocols, or a 1-on-1 diagnostic consultation with Dana.',
      highlight: 'Instant Confirmation & Intake Form',
    },
    {
      number: '02',
      icon: 'medical_services',
      title: 'Comprehensive Health Assessment',
      description: 'Dana evaluates your medical history, metabolic profile, laboratory biomarkers, food intolerances, daily routine, and personal preferences.',
      highlight: '100% Bespoke Clinical Analysis',
    },
    {
      number: '03',
      icon: 'monitoring',
      title: 'Personalized Protocol & Weekly Follow-Up',
      description: 'Receive your custom roadmap within 24–48 hours. Benefit from direct weekly WhatsApp check-ins, biometric tracking, and iterative adjustments.',
      highlight: 'Continuous Accountability & Care',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-3 border border-brand-coral/20"
          >
            <GoogleIcon name="alt_route" className="text-sm" />
            <span>{t('howItWorks.badge')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4"
          >
            {t('howItWorks.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed font-normal"
          >
            {t('howItWorks.subtitle')}
          </motion.p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-mint/40 via-brand-gold/40 to-brand-coral/40 -z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-surface-subtle/80 hover:bg-white p-8 rounded-3xl border border-surface-border hover:border-brand-mint/60 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between relative group z-10"
            >
              <div>
                {/* Step Number Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-brand-coral/30 group-hover:text-brand-coral transition-colors font-sans">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-brand-coral/10 text-brand-navy group-hover:text-brand-coral shadow-soft-sm flex items-center justify-center transition-colors">
                    <GoogleIcon name={step.icon} className="text-2xl" />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-brand-navy mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm text-brand-navy/75 leading-relaxed font-normal mb-6">
                  {step.description}
                </p>
              </div>

              {/* Highlight Pill */}
              <div className="pt-4 border-t border-brand-navy/10 flex items-center gap-2 text-xs font-bold text-brand-mint-dark">
                <GoogleIcon name="verified" className="text-sm" />
                <span>{step.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all duration-300 hover:scale-[1.02]"
          >
            <span>{isRTL ? 'ابدأ خطتك السريرية اليوم' : 'Begin Your Clinical Protocol Today'}</span>
            <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-base" />
          </Link>
        </div>

      </div>
    </section>
  );
};
