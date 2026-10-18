import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { GoogleIcon } from './common/GoogleIcon';

export const AboutSection: React.FC = () => {
  const { isRTL, t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-mint/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Image Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative framing layers */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-mint via-brand-gold to-brand-coral opacity-30 blur-lg transform -rotate-1" />
              <div className="absolute -inset-1 rounded-3xl bg-white/80 border border-brand-mint/40" />

              {/* Main Portrait Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-soft-lg bg-brand-navy/5 aspect-[3/4]">
                <img
                  src="/dana-bardakji.jpg"
                  alt="Dana Bardakji - Certified Clinical Dietitian"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>

              {/* Floating Verified Expert Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  initial: { duration: 0.6, delay: 0.3 },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                }}
                className={`absolute -bottom-6 ${isRTL ? '-left-4 sm:-left-6' : '-right-4 sm:-right-6'} bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-soft border border-brand-navy/10 max-w-[240px]`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-brand-coral/15 flex items-center justify-center text-brand-coral flex-shrink-0">
                    <GoogleIcon name="school" className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-navy">
                      {isRTL ? 'دانا بردقجي' : 'Dana Bardakji'}
                    </h4>
                    <p className="text-[11px] text-brand-navy/70">
                      {isRTL ? 'أخصائية تغذية سريرية' : 'Clinical Dietitian'}
                    </p>
                  </div>
                </div>
                <div className="text-[11px] text-brand-navy/80 font-medium leading-tight border-t border-brand-navy/10 pt-2 flex items-center gap-1.5">
                  <GoogleIcon name="verified" className="text-sm text-brand-mint-dark flex-shrink-0" />
                  <span>{isRTL ? 'معتمدة ومرخصة رسمياً' : 'Certified & Licensed Nutritionist'}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-4 border border-brand-coral/20">
              <GoogleIcon name="badge" className="text-sm" />
              <span>{t('about.badge')}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-6">
              {isRTL ? 'عن الأخصائية دانا بردقجي' : 'About Dana Bardakji'}
            </h2>

            <p className="text-base sm:text-lg text-brand-navy/85 leading-relaxed mb-8 font-normal">
              {isRTL
                ? 'دانا أخصائية تغذية علاجية معتمدة حاصلة على درجة البكالوريوس في التغذية وتكنولوجيا الغذاء من الجامعة الأردنية، ودبلوم عالي في العلاجات الغذائية السريرية من كلية ستون بريدج في بريطانيا. بدأت مسيرتها المهنية في أبوظبي بدولة الإمارات كأخصائية تغذية في مركز طبي متخصص لصحة المرأة والتوليد، واكتسبت خبرة عميقة في إعداد الخطط الغذائية العلاجية لحالات السكري، ضغط الدم، اضطرابات الجهاز الهضمي، مقاومة الأنسولين، والسمنة المفرطة.'
                : 'Dana is a certified Dietitian with a B.Sc. degree in Nutrition and Food Technology from the University of Jordan and a higher Diploma in clinical Nutritional treatments from Stonebridge Associated Colleges (UK). She started her clinical practice in Abu Dhabi (UAE) as a specialized dietitian in a Women & Obstetrics medical center, developing tailored dietary therapies for metabolic conditions, diabetes, hypertension, food intolerances, and sustainable body recomposition.'}
            </p>

            {/* Highlighted Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-brand-navy/10">
              <motion.div
                whileHover={{ scale: 1.02, x: isRTL ? -3 : 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-subtle border border-surface-border cursor-default hover:shadow-soft-sm transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-gold/30 flex items-center justify-center text-brand-navy flex-shrink-0 mt-0.5">
                  <GoogleIcon name="menu_book" className="text-base" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy mb-0.5">
                    {isRTL ? 'مؤلفة كتابين في التغذية' : 'Author of 2 Nutrition Books'}
                  </h4>
                  <p className="text-xs text-brand-navy/70 leading-snug">
                    {isRTL ? '«100 سؤال وجواب في التغذية» و «خرافات في الرجيم»' : '“100 Questions & Answers in Nutrition” & “Myths in Dieting”'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: isRTL ? -3 : 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-subtle border border-surface-border cursor-default hover:shadow-soft-sm transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-coral/20 flex items-center justify-center text-brand-coral flex-shrink-0 mt-0.5">
                  <GoogleIcon name="live_tv" className="text-base" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy mb-0.5">
                    {isRTL ? 'حضور إعلامي وتلفزيوني' : 'Media & TV Guest'}
                  </h4>
                  <p className="text-xs text-brand-navy/70 leading-snug">
                    {isRTL ? 'مشاركات دورية في أبرز البرامج الصحية في عمّان وأبوظبي' : 'Featured in leading television & radio health programs in Amman & Abu Dhabi'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: isRTL ? -3 : 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-subtle border border-surface-border cursor-default hover:shadow-soft-sm transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-mint/30 flex items-center justify-center text-brand-navy flex-shrink-0 mt-0.5">
                  <GoogleIcon name="apartment" className="text-base" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy mb-0.5">
                    {isRTL ? 'تأسيس نوتري سنتر' : 'NutriCenter Founder'}
                  </h4>
                  <p className="text-xs text-brand-navy/70 leading-snug">
                    {isRTL ? 'شريك مؤسس لمركز استشارات تغذوية متخصص في عمّان' : 'Co-founded specialized nutritional consultancy in Amman'}
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: isRTL ? -3 : 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-subtle border border-surface-border cursor-default hover:shadow-soft-sm transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-brand-navy/15 flex items-center justify-center text-brand-navy flex-shrink-0 mt-0.5">
                  <GoogleIcon name="medical_information" className="text-base" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy mb-0.5">
                    {isRTL ? 'تخصص سريري متقدم' : 'Clinical Specialization'}
                  </h4>
                  <p className="text-xs text-brand-navy/70 leading-snug">
                    {isRTL ? 'علاج غذائي طبي قائم على تحاليل الدم والبيوماركرز' : 'Specialized Medical Nutrition Therapy & clinical dietary management'}
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
