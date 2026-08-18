import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do the online nutrition consultations and diet plans work?',
      answer:
        'All consultations are conducted 1-on-1 with Dana via secure Zoom video sessions. After reviewing your lifestyle, clinical biomarkers, daily routine, and personal food preferences, Dana crafts a fully bespoke weekly diet plan with clear portions, grocery swaps, and step-by-step guidance. Follow-up sessions evaluate progress and fine-tune your meal plan.',
    },
    {
      question: 'What is the difference between the $50 Consultation and a Package?',
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
        'Absolutely. Dana works with clients worldwide including the GCC, Europe, UK, and North America. All consultation appointments are coordinated in your local time zone via Zoom, and ongoing communication is maintained over WhatsApp and email.',
    },
    {
      question: 'How do the payment and Stripe processing work?',
      answer:
        'Payments are securely processed in DHS or USD via Stripe. Once you choose your plan, you will receive an instant confirmation receipt and direct WhatsApp booking coordination to schedule your kickoff consultation.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-surface-subtle relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-brand-coral tracking-tight mb-4"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-brand-navy/75 leading-relaxed"
          >
            Everything you need to know about our dietary plans, clinical follow-ups, and booking process.
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
                className="bg-white rounded-2xl border border-surface-border shadow-soft overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
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
                    <ChevronDown className="w-4 h-4" />
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
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-brand-navy/80 leading-relaxed border-t border-brand-navy/5">
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
