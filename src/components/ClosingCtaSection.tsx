import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ClosingCtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-surface-subtle via-white to-surface-subtle relative overflow-hidden">
      {/* Decorative ambient blurred blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-radial from-brand-mint/20 via-brand-gold/15 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-coral/10 border border-brand-coral/20 text-brand-coral text-xs font-bold mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sustainable Living • Clinical Excellence</span>
        </motion.div>

        {/* Closing Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.2] mb-6"
        >
          Take the First Step Toward Your <span className="text-brand-coral">Healthiest Self</span>
        </motion.h2>

        {/* Closing Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-brand-navy/80 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          Whether you need a dedicated 12-week clinical disease management plan or a single diagnostic consultation, Dana Bardakji provides the evidence-based care and empathy you deserve.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8"
        >
          <Link
            to="/packages/consultation"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Book Consultation ($50 USD)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/packages"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider text-brand-navy bg-white hover:bg-surface-subtle border border-brand-navy/15 shadow-soft-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Browse Packages</span>
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-brand-navy/60">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-brand-mint-dark" />
            <span>Strict Client Confidentiality</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="w-4 h-4 text-brand-mint-dark" />
            <span>Continuous WhatsApp Accountability</span>
          </div>
        </div>
      </div>
    </section>
  );
};
