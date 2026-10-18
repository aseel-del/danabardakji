import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { GoogleIcon } from './common/GoogleIcon';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { isRTL } = useLanguage();

  const faqs = isRTL ? [
    {
      question: 'كيف تتم الاستشارات والخطط الغذائية السريرية عن بعد؟',
      answer:
        'تتم جميع الاستشارات الفردية مباشرة مع الأخصائية دانا عبر جلسات فيديو آمنة على زوم. بعد دراسة التاريخ الطبي والتحاليل المخبرية والنمط الغذائي المفضل لديك، تعد دانا خطة غذائية أسبوعية مفصلة تتضمن الحصص الدقيقة وبدائل الأطعمة، تليها متابعة مستمرة لتقييم التقدم وتحديث الخطة دورياً.',
    },
    {
      question: 'ما الفرق بين جلسة الاستشارة ($50) وباقات المتابعة؟',
      answer:
        'جلسة الاستشارة ($50) هي جلسة تشخيصية فردية مدتها 45 إلى 60 دقيقة لتقييم التحاليل المخبرية والأعراض السريرية وتقديم استشارة طبية دقيقة (*ولا تشمل جدولاً غذائياً مكتوباً). أما الباقات (الأساسية، المميزة، الموسعة) فتشمل برامج غذائية أسبوعية متجددة، متابعة مباشرة عبر زوم، وتواصلاً مستمراً عبر واتساب.',
    },
    {
      question: 'ما هي الحالات الصحية التي تساعد دانا في إدارتها وعلاجها؟',
      answer:
        'بفضل خبرتها في مراكز صحة المرأة والولادة ودبلومها البريطاني العالي، تعالج دانا حالات السكري، مقاومة الأنسولين، تكيس المبايض (PCOS)، خمول الغدة الدرقية، اضطرابات القولون والجهاز الهضمي، ارتفاع ضغط الدم والدهنيات، تغذية الحمل والرضاعة، وبرامج ما بعد جراحات السمنة والتكميم.',
    },
    {
      question: 'هل يمكنني الاشتراك إذا كنت أقيم خارج دولة الإمارات أو الأردن؟',
      answer:
        'نعم بكل تأكيد. أكثر من 60% من عملاء دانا يقيمون في دول الخليج العربي (الإمارات، السعودية، الكويت، قطر، البحرين، عمان) بالإضافة إلى أوروبا والولايات المتحدة. يتم تنسيق المواعيد حسب فارق التوقيت في بلدك، ويتم التواصل الأسبوعي بمرونة تامة.',
    },
    {
      question: 'كيف تتم عملية الدفع وتفعيل الاشتراك؟',
      answer:
        'يتم الدفع إلكترونياً بأعلى معايير التشفير والأمان بالدرهم الإماراتي أو الدولار. فور إتمام العملية، تتلقين رسالة تأكيد فورية ورابط استبيان التقييم الصحي، ويبدأ التواصل المباشر لتحديد موعد جلستك واستلام خطتك خلال 24-48 ساعة.',
    },
  ] : [
    {
      question: 'How do the online clinical consultations and diet plans work?',
      answer:
        'All consultations are conducted 1-on-1 with Dana via secure Zoom video sessions. After reviewing your lifestyle, clinical biomarkers, daily routine, and personal food preferences, Dana crafts a fully bespoke weekly diet plan with clear portions, grocery swaps, and step-by-step guidance. Follow-up sessions evaluate progress and fine-tune your meal plan.',
    },
    {
      question: 'What is the difference between the $50 Consultation and a Coaching Package?',
      answer:
        'The $50 Consultation is a focused single one-on-one clinical evaluation session designed to answer medical/dietary questions, review bloodwork, or provide nutritional advice (*it does not include a custom diet plan). The Standard, Premium, and Extended packages include multi-week customized diet programs, ongoing progress tracking, and scheduled Zoom follow-ups.',
    },
    {
      question: 'What health conditions can Dana help me manage?',
      answer:
        'With her specialized clinical background at the Women and Obstetrics Medical Center in Abu Dhabi and her UK Postgrad Diploma in Clinical Nutritional Treatments, Dana treats Type 1 & 2 Diabetes, High Blood Pressure, High Cholesterol, Food Allergies & Intolerances, Childhood Malnutrition, Pregnancy/Lactation nutrition, Post-Bariatric surgery recovery, and Underweight/Obesity management.',
    },
    {
      question: 'Can I book a plan if I live outside Jordan or the UAE?',
      answer:
        'Absolutely. Dana works with clients worldwide including the GCC (Saudi Arabia, UAE, Kuwait, Qatar), Europe, UK, and North America. All consultation appointments are coordinated in your local time zone via Zoom, and ongoing communication is maintained over WhatsApp and email.',
    },
    {
      question: 'How does payment and booking confirmation work?',
      answer:
        'Payments are securely processed in AED or USD via encrypted checkout. Once you choose your plan, you receive instant confirmation, direct access to your clinical intake form, and immediate WhatsApp coordination to schedule your kickoff consultation.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-surface-subtle relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-3 border border-brand-coral/20">
            <GoogleIcon name="help" className="text-sm" />
            <span>{isRTL ? 'الأسئلة الأكثر شيوعاً' : 'Help & Clarity'}</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4"
          >
            {isRTL ? 'الأسئلة الشائعة والإجابات' : 'Frequently Asked Questions'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-brand-navy/75 leading-relaxed font-normal"
          >
            {isRTL 
              ? 'كل ما تحتاج معرفته عن باقات الاشتراك، الاستشارات السريرية، وطريقة المتابعة والتواصل.'
              : 'Everything you need to know about our dietary plans, clinical follow-ups, and booking process.'}
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-3xl border border-surface-border shadow-soft overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer ${
                    isRTL ? 'text-right' : 'text-left'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-brand-navy">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-brand-coral text-white rotate-180'
                        : 'bg-surface-subtle text-brand-navy'
                    }`}
                  >
                    <GoogleIcon name="expand_more" className="text-xl" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-brand-navy/80 leading-relaxed border-t border-brand-navy/5 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
