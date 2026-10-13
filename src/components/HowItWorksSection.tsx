import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Stethoscope, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: ClipboardList,
      title: 'Select Your Plan or Consultation',
      description: 'Choose between 4, 8, or 12-week dietary transformation packages, instant digital meal protocols, or a 1-on-1 diagnostic consultation with Dana.',
      highlight: 'Instant Confirmation & Intake Form',
    },
    {
      number: '02',
      icon: Stethoscope,
      title: 'Comprehensive Health Assessment',
      description: 'Dana evaluates your medical history, metabolic profile, laboratory biomarkers, food intolerances, daily routine, and personal taste preferences.',
      highlight: '100% Bespoke Clinical Analysis',
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Personalized Protocol & Weekly Follow-Up',
      description: 'Receive your custom roadmap within 24–48 hours. Benefit from direct weekly WhatsApp check-ins, biometric tracking, and iterative adjustments.',
      highlight: 'Continuous Accountability & Care',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-3"
          >
            Clinical Roadmap
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-coral tracking-tight mb-6"
          >
            How Your Journey Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed font-normal"
          >
            A clear, evidence-based process engineered to replace guesswork with structured clinical guidance, sustainable habits, and measurable health outcomes.
          </motion.p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-brand-mint/40 via-brand-gold/40 to-brand-coral/40 -z-0" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-surface-subtle rounded-3xl p-8 border border-surface-border hover:border-brand-mint shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group z-10"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-soft-sm border border-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-coral group-hover:text-white transition-all duration-300 group-hover:scale-105">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-black text-brand-navy/15 group-hover:text-brand-coral/25 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-brand-navy mb-3 group-hover:text-brand-coral transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-brand-navy/75 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-navy/10 flex items-center justify-between text-xs font-bold text-brand-mint-dark">
                  <span>{step.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-navy hover:bg-brand-navy-light shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Transformation Packages</span>
            <ArrowRight className="w-4 h-4 text-brand-gold" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
