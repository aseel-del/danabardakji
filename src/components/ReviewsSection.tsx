import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { GoogleIcon } from './common/GoogleIcon';

export const ReviewsSection: React.FC = () => {
  const { isRTL } = useLanguage();

  const reviews = isRTL ? [
    {
      id: 'rev-1',
      name: 'رانيا ك.',
      location: 'عمّان، الأردن',
      program: 'الباقة المميزة (9 أسابيع)',
      result: 'خسارة 11.5 كغ وانتظام دهنيات الدم',
      quote: 'تجربتي مع دانا غيرت علاقتي بالطعام تماماً. كنت أعاني من ارتفاع الكوليسترول والوزن الزائد لسنوات. وضعت لي دانا خطة واقعية تناسب عملي ومناسبات عائلتي دون حرمان، والمتابعة الأسبوعية عبر واتساب كانت مفتاح التزامي ونجاحي.',
      rating: 5,
    },
    {
      id: 'rev-2',
      name: 'مها الزعابي',
      location: 'أبوظبي، الإمارات',
      program: 'برنامج الخصوبة والتوازن الهرموني',
      result: 'علاج أعراض تكيس المبايض والحمل الطبيعي',
      quote: 'بعد تشخيصي بتكيس المبايض وعدم انتظام الدورة، كان تخصص دانا في مركز صحة المرأة والولادة بأبوظبي علامة فارقة. ركزت على علاج مقاومة الأنسولين بتوليفات غذائية علمية دقيقة. انتظمت دورتي تماماً ونحن الآن ننتظر مولودنا الأول بفضل الله!',
      rating: 5,
    },
    {
      id: 'rev-3',
      name: 'طارق س.',
      location: 'دبي، الإمارات',
      program: 'الباقة الموسعة (12 أسبوعاً)',
      result: 'نزول 16 كغ والتعافي من مرحلة ما قبل السكري',
      quote: 'حذرني طبيبي من وصول السكر التراكمي لمرحلة الخطر (6.4). قامت دانا بدراسة تحاليلي وبنت خطة ذكية لم أشعر معها بالجوع قط. انخفض التراكمي إلى 5.4 واستعدت نشاطي ولياقتي كما كنت قبل عشر سنوات.',
      rating: 5,
    },
    {
      id: 'rev-4',
      name: 'لينا ح.',
      location: 'عمّان، الأردن',
      program: 'برنامج صحة الجهاز الهضمي والقولون',
      result: 'اختفاء الانتفاخ واستعادة راحة الهضم',
      quote: 'كنت أعاني من انتفاخ وألم مزمن بعد كل وجبة وإجهاد مستمر. برنامج الـ 21 يوماً للقولون أراح معدتي بالكامل، وجداول الوجبات وقوائم التسوق كانت عملية جداً ودقيقة.',
      rating: 5,
    },
  ] : [
    {
      id: 'rev-1',
      name: 'Rania K.',
      location: 'Amman, Jordan',
      program: 'Premium Package (9 Weeks)',
      result: '-11.5 kg & Normalized Blood Lipids',
      quote: 'Working with Dana completely transformed my relationship with food. I had struggled with high cholesterol and weight gain for 4 years. Dana created a realistic plan that worked around my busy work schedule and family dinners. Her weekly support gave me the exact accountability I needed.',
      rating: 5,
    },
    {
      id: 'rev-2',
      name: 'Maha Al-Zaabi',
      location: 'Abu Dhabi, UAE',
      program: 'Fertility & Hormonal Protocol',
      result: 'PCOS Symptoms Regulated & Natural Conception',
      quote: 'After being diagnosed with PCOS and irregular cycles, Dana’s specialized background in Women’s Obstetrics was a breath of fresh air. She targeted my insulin resistance with the right food combinations. Within 3 months, my cycles normalized, and we are now expecting our first baby!',
      rating: 5,
    },
    {
      id: 'rev-3',
      name: 'Tareq S.',
      location: 'Dubai, UAE',
      program: 'Extended Package (12 Weeks)',
      result: '-16 kg & Off Pre-Diabetes Range',
      quote: 'My doctor warned me that my HbA1c was creeping into type 2 diabetes territory. Dana took my lab results, analyzed my lifestyle, and built an iterative plan that never felt like starvation. My HbA1c dropped from 6.4 to 5.4, and my energy is higher than it was a decade ago.',
      rating: 5,
    },
    {
      id: 'rev-4',
      name: 'Lina H.',
      location: 'Amman, Jordan',
      program: 'Gut Reset & Microbiome Protocol',
      result: 'Zero Bloating & Restored Digestion',
      quote: 'I used to bloat after every single meal and suffered from chronic fatigue. The 21-day Gut Reset protocol healed my stomach completely. The grocery guide and re-introduction steps were crystal clear. Dana’s clinical expertise is truly unmatched.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-3 border border-brand-coral/20">
            <GoogleIcon name="star" className="text-sm text-brand-gold" filled />
            <span>{isRTL ? 'تجارب العملاء الموثقة' : 'Verified Client Outcomes'}</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4"
          >
            {isRTL ? 'قصص نجاح وتحولات صحية حقيقية' : 'Real Stories, Measurable Transformations'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed font-normal"
          >
            {isRTL 
              ? 'كل رحلة صحية مع دانا مبنية على العلم السريري، المتابعة الإنسانية الصادقة، والعادات الغذائية المستدامة.'
              : 'Every journey with Dana is rooted in clinical science, compassionate accountability, and sustainable nutritional practices.'}
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-subtle rounded-3xl p-8 border border-surface-border hover:border-brand-gold/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <GoogleIcon key={i} name="star" className="text-brand-gold text-lg" filled />
                    ))}
                  </div>
                  <GoogleIcon name="format_quote" className="text-3xl text-brand-navy/15 group-hover:text-brand-coral/30 transition-colors" />
                </div>

                {/* Outcome Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-brand-mint/30 text-brand-navy border border-brand-mint/50 mb-4">
                  <GoogleIcon name="verified" className="text-sm text-brand-mint-dark" />
                  <span>{rev.result}</span>
                </div>

                {/* Quote */}
                <p className="text-sm text-brand-navy/85 leading-relaxed italic mb-6 font-normal">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-brand-navy/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-brand-navy">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-brand-navy/60 font-medium mt-0.5">
                    {rev.location} • <span className="text-brand-coral font-semibold">{rev.program}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-brand-mint-dark bg-white px-2.5 py-1 rounded-full border border-brand-navy/5 shadow-soft-xs">
                  <GoogleIcon name="check_circle" className="text-sm" />
                  <span>{isRTL ? 'عميل موثق' : 'Verified Patient'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clinical Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-brand-navy text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft-lg"
        >
          <div className={isRTL ? "text-right" : "text-left"}>
            <h4 className="text-lg sm:text-xl font-extrabold text-white mb-1">
              {isRTL ? 'جاهزة لبدء قصة تحولك الصحي؟' : 'Ready to write your own transformation story?'}
            </h4>
            <p className="text-xs sm:text-sm text-brand-mint font-medium">
              {isRTL ? 'انضم إلى مئات العملاء في دولة الإمارات والأردن وحول العالم.' : 'Join hundreds of clients across Jordan, the UAE, and worldwide.'}
            </p>
          </div>

          <a
            href="https://wa.me/962792222058"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-navy bg-brand-gold hover:bg-white transition-all shadow-soft duration-200 flex-shrink-0 inline-flex items-center gap-2"
          >
            <GoogleIcon name="chat" className="text-base" />
            <span>{isRTL ? 'استشارة مباشرة عبر واتساب' : 'Direct WhatsApp Consultation'}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
