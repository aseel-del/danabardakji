import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, BookOpen, Stethoscope, Building2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

const HIGHLIGHT_WORDS = [
  'Your Health',
  'Your Life',
  'Your Body',
  'Your Goals',
];

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HIGHLIGHT_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-40 pb-28 sm:pt-48 sm:pb-36 lg:pt-56 lg:pb-44 overflow-hidden bg-mesh-subtle">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-brand-mint/20 via-brand-gold/15 to-brand-coral/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main Display Headline with 100% Static Anchor and Uncropped Smooth Crossfade */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.25] mb-10 sm:mb-12"
          >
            <span className="block mb-2 sm:mb-3">Personalized Clinical Nutrition</span>
            <span className="inline-flex items-baseline justify-center gap-2.5 sm:gap-3.5">
              <span className="text-brand-navy flex-shrink-0">Designed for</span>
              <span className="relative inline-grid grid-cols-1 grid-rows-1 text-brand-coral align-baseline text-left">
                {HIGHLIGHT_WORDS.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={false}
                    animate={{
                      opacity: i === index ? 1 : 0,
                      y: i === index ? 0 : 6,
                      scale: i === index ? 1 : 0.96,
                      filter: i === index ? 'blur(0px)' : 'blur(4px)',
                    }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="col-start-1 row-start-1 whitespace-nowrap"
                  >
                    {word}
                  </motion.span>
                ))}
                <span className="absolute left-0 bottom-1 w-full h-[6px] bg-brand-gold/40 -z-10 rounded-full"></span>
              </span>
            </span>
          </motion.h1>

          {/* Subtitle with Generous Spacing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-brand-navy/75 leading-relaxed max-w-2xl mx-auto mb-16 sm:mb-20 font-normal"
          >
            Evidence-based dietary programs tailored to your biochemistry, clinical health needs, and personal lifestyle. Guided by 15+ years of specialized medical practice in Abu Dhabi & Amman.
          </motion.p>

          {/* Action CTAs with Generous Margin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-24 sm:mb-28"
          >
            <a
              href="#packages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-brand-coral hover:bg-brand-coral-dark rounded-xl shadow-soft hover:shadow-coral-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explore Diet Packages</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-brand-navy bg-white hover:bg-brand-gold/15 border border-brand-navy/20 hover:border-brand-navy/40 rounded-xl shadow-soft-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Book 1-on-1 Consultation ($50)</span>
            </button>
          </motion.div>

          {/* Key Clinical Credentials & Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="bg-white/85 backdrop-blur-sm p-5 rounded-2xl border border-brand-mint/30 shadow-soft-sm hover:shadow-soft flex flex-col items-center justify-center text-center min-h-[110px] cursor-default group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-mint/20 flex items-center justify-center text-brand-navy mb-2.5 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5 text-brand-mint-dark" />
              </div>
              <span className="text-sm font-bold text-brand-navy">B.Sc. & UK Higher Diploma</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="bg-white/85 backdrop-blur-sm p-5 rounded-2xl border border-brand-gold/40 shadow-soft-sm hover:shadow-soft flex flex-col items-center justify-center text-center min-h-[110px] cursor-default group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-gold/25 flex items-center justify-center text-brand-navy mb-2.5 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-5 h-5 text-brand-navy" />
              </div>
              <span className="text-sm font-bold text-brand-navy">Women & Obstetrics Center</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="bg-white/85 backdrop-blur-sm p-5 rounded-2xl border border-brand-coral/25 shadow-soft-sm hover:shadow-soft flex flex-col items-center justify-center text-center min-h-[110px] cursor-default group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-coral/15 flex items-center justify-center text-brand-coral mb-2.5 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-5 h-5 text-brand-coral-dark" />
              </div>
              <span className="text-sm font-bold text-brand-navy">2 Published Books</span>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="bg-white/85 backdrop-blur-sm p-5 rounded-2xl border border-brand-mint/30 shadow-soft-sm hover:shadow-soft flex flex-col items-center justify-center text-center min-h-[110px] cursor-default group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-mint/20 flex items-center justify-center text-brand-navy mb-2.5 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-5 h-5 text-brand-mint-dark" />
              </div>
              <span className="text-sm font-bold text-brand-navy">Co-founder NutriCenter</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
