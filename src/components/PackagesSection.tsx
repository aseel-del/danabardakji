import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift,
  ArrowRight, 
  Calendar, 
  Video, 
  FileText, 
  Users, 
  RefreshCw, 
  CreditCard,
  HelpCircle
} from 'lucide-react';

interface PackagesSectionProps {
  onSelectPlan: (planName: string, price: string, details: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPlan }) => {
  // Premium package option switcher: 'single' (1 sub, 2 months) or 'dual' (2 subs, 1 month)
  const [premiumOption, setPremiumOption] = useState<'single' | 'dual'>('single');

  return (
    <section id="packages" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-radial from-brand-mint/15 via-brand-gold/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-coral tracking-tight mb-6"
          >
            Personalized Dietary Packages
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed"
          >
            Select the clinical plan that best matches your timeline, accountability goals, and health requirements. All plans include 1-on-1 personalized attention directly from Dana.
          </motion.p>
        </div>

        {/* 3 Main Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* STANDARD PACKAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-surface-border hover:border-brand-mint shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-brand-navy mb-2">STANDARD</h3>
              <p className="text-xs text-brand-navy/70 mb-6">
                Ideal for individuals looking for a structured 4-week nutritional reset and personalized diet guidelines.
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-brand-navy/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-navy">550</span>
                  <span className="text-lg font-bold text-brand-navy/70">DHS</span>
                </div>
                <span className="text-xs text-brand-navy/60 block mt-1">
                  Single payment • Full 4-week program
                </span>
              </div>

              {/* Feature Checklist (EXACT PDF Match) */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-mint/25 flex items-center justify-center text-brand-navy flex-shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>1</strong> Subscriber</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-mint/25 flex items-center justify-center text-brand-navy flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>1 Month</strong> (4 Weeks Duration)</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-mint/25 flex items-center justify-center text-brand-navy flex-shrink-0">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>4</strong> Customized Diet Plans</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-mint/25 flex items-center justify-center text-brand-navy flex-shrink-0">
                    <Video className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>1</strong> Zoom Follow Up Session</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-mint/25 flex items-center justify-center text-brand-navy flex-shrink-0">
                    <RefreshCw className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>1</strong> Appointment Change Allowed</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan('STANDARD Package', '550 DHS', '1 Subscriber • 4 Weeks • 4 Diet Plans • 1 Zoom Follow Up')}
              className="w-full py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-brand-navy bg-surface-subtle hover:bg-brand-mint/25 border border-brand-navy/15 hover:border-brand-mint transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Choose Standard</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>


          {/* PREMIUM PACKAGE (Featured / Highlighted) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-brand-navy rounded-3xl p-8 text-white shadow-soft-lg border-2 border-brand-gold/60 flex flex-col justify-between relative transform lg:-translate-y-2 overflow-hidden"
          >
            {/* Best Value Badge */}
            <div className="absolute top-0 right-0 bg-brand-gold text-brand-navy text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
              Most Popular
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white mb-2 pt-2">PREMIUM</h3>
              <p className="text-xs text-white/75 mb-5">
                Our most recommended program for lasting metabolic transformation with extended clinical follow-up.
              </p>

              {/* Price */}
              <div className="mb-5 pb-5 border-b border-white/15">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-gold">1000</span>
                  <span className="text-lg font-bold text-white/80">DHS</span>
                </div>
                <span className="text-xs text-white/70 block mt-1">
                  Full package price • Includes free bonus session
                </span>
              </div>

              {/* Interactive Option Switcher (Option 1 vs Option 2) */}
              <div className="mb-6 bg-white/10 p-1 rounded-xl flex items-center gap-1">
                <button
                  onClick={() => setPremiumOption('single')}
                  className={`flex-1 py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                    premiumOption === 'single'
                      ? 'bg-white text-brand-navy shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  1 Subscriber (2 Months)
                </button>
                <button
                  onClick={() => setPremiumOption('dual')}
                  className={`flex-1 py-2 px-2 rounded-lg text-xs font-bold transition-all ${
                    premiumOption === 'dual'
                      ? 'bg-white text-brand-navy shadow-sm'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  2 Subscribers (1 Month)
                </button>
              </div>

              {/* Feature Checklist based on Switcher */}
              <AnimatePresence mode="wait">
                {premiumOption === 'single' ? (
                  <motion.div
                    key="single"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3.5 mb-8"
                  >
                    <div className="flex items-center gap-3 text-sm text-white font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/25 flex items-center justify-center text-brand-gold flex-shrink-0">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>1</strong> Subscriber</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-white font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/25 flex items-center justify-center text-brand-gold flex-shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>2 Months</strong> (8 Weeks Duration)</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-white font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/25 flex items-center justify-center text-brand-gold flex-shrink-0">
                        <Gift className="w-3.5 h-3.5 text-brand-gold" />
                      </div>
                      <span><strong>1 Free Session</strong> (1 Week Bonus)</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-white font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/25 flex items-center justify-center text-brand-gold flex-shrink-0">
                        <Video className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>2</strong> Zoom Follow Ups</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="dual"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3.5 mb-8"
                  >
                    <div className="flex items-center gap-3 text-sm text-white font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/25 flex items-center justify-center text-brand-gold flex-shrink-0">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>2</strong> Subscribers (Couples / Partners)</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-white font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/25 flex items-center justify-center text-brand-gold flex-shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>1 Month</strong> (Per Subscriber)</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-white font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/25 flex items-center justify-center text-brand-gold flex-shrink-0">
                        <Gift className="w-3.5 h-3.5 text-brand-gold" />
                      </div>
                      <span><strong>1 Free Session</strong> (Per Subscriber)</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-white font-medium">
                      <div className="w-5 h-5 rounded-full bg-brand-gold/25 flex items-center justify-center text-brand-gold flex-shrink-0">
                        <Video className="w-3.5 h-3.5" />
                      </div>
                      <span><strong>2</strong> Zoom Follow Ups</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => onSelectPlan(
                `PREMIUM Package (${premiumOption === 'single' ? '1 Sub / 2 Months' : '2 Subs / 1 Month'})`, 
                '1000 DHS', 
                premiumOption === 'single' 
                  ? '1 Subscriber • 2 Months (8 Weeks) • 1 Free Session • 2 Zoom Follow Ups' 
                  : '2 Subscribers • 1 Month per sub • 1 Free Session per sub • 2 Zoom Follow Ups'
              )}
              className="w-full py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-brand-navy bg-brand-gold hover:bg-brand-gold-dark shadow-soft hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Choose Premium</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-navy" />
            </button>
          </motion.div>


          {/* EXTENDED PACKAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-surface-border hover:border-brand-mint shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-extrabold text-brand-navy mb-2">EXTENDED</h3>
              <p className="text-xs text-brand-navy/70 mb-6">
                Complete clinical nutrition coaching designed for substantial medical goals, bariatric recovery, or complete body reset.
              </p>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-brand-navy/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-navy">1400</span>
                  <span className="text-lg font-bold text-brand-navy/70">DHS</span>
                </div>
                <span className="text-xs text-brand-navy/60 block mt-1">
                  Full 12-week comprehensive program
                </span>
              </div>

              {/* Feature Checklist (EXACT PDF Match) */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-mint/25 flex items-center justify-center text-brand-navy flex-shrink-0">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>1</strong> Subscriber</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-mint/25 flex items-center justify-center text-brand-navy flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>3 Months</strong> (12 Weeks Duration)</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-mint/25 flex items-center justify-center text-brand-navy flex-shrink-0">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>12</strong> Customized Diet Plans</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-mint/25 flex items-center justify-center text-brand-navy flex-shrink-0">
                    <Video className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>3</strong> Zoom Follow Ups</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-brand-navy font-medium">
                  <div className="w-5 h-5 rounded-full bg-brand-mint/25 flex items-center justify-center text-brand-navy flex-shrink-0">
                    <RefreshCw className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>1</strong> Appointment Change Allowed</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectPlan('EXTENDED Package', '1400 DHS', '1 Subscriber • 3 Months (12 Weeks) • 12 Diet Plans • 3 Zoom Follow Ups')}
              className="w-full py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-brand-navy bg-surface-subtle hover:bg-brand-mint/25 border border-brand-navy/15 hover:border-brand-mint transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Choose Extended</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>

        {/* 1-on-1 Consultation Standalone Card ($50) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-brand-mint/20 via-brand-gold/15 to-brand-coral/15 rounded-3xl p-8 border border-brand-mint/40 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">
              One-on-One Clinical Consultation
            </h3>
            <p className="text-sm text-brand-navy/80 leading-relaxed">
              Prefer a direct focused assessment before committing to a multi-week package? Discuss your medical history, symptoms, bloodwork, or dietary questions directly with Dana.
            </p>
            <p className="text-xs font-semibold text-brand-coral-dark mt-2 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>*Doesn't include diet plan</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <div className="text-center sm:text-right">
              <div className="text-3xl sm:text-4xl font-black text-brand-navy">50$</div>
              <span className="text-xs text-brand-navy/70">USD / Session</span>
            </div>

            <button
              onClick={() => onSelectPlan('One-on-One Consultation', '$50 USD', 'Direct Clinical Evaluation Session (*Does not include diet plan)')}
              className="py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all duration-300 flex items-center gap-2 group whitespace-nowrap"
            >
              <CreditCard className="w-4 h-4" />
              <span>Book $50 Consultation</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
