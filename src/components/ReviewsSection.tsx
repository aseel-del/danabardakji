import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Quote, Award } from 'lucide-react';
import { REVIEWS_DATA } from '../data/siteData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-3"
          >
            Verified Client Outcomes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-coral tracking-tight mb-6"
          >
            Real Stories, Measurable Transformations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed font-normal"
          >
            Every journey with Dana is rooted in clinical science, compassionate accountability, and sustainable nutritional practices that last a lifetime.
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-subtle rounded-3xl p-8 border border-surface-border hover:border-brand-gold/40 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-brand-navy/10 group-hover:text-brand-coral/20 transition-colors" />
                </div>

                {/* Outcome Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-brand-mint/30 text-brand-navy border border-brand-mint/50 mb-4">
                  <Award className="w-3.5 h-3.5 text-brand-mint-dark" />
                  <span>{rev.result}</span>
                </div>

                {/* Quote */}
                <p className="text-sm text-brand-navy/85 leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-brand-navy/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-brand-navy">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-brand-navy/60 font-medium">
                    {rev.location} • <span className="text-brand-coral font-semibold">{rev.program}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-brand-mint-dark bg-white px-2.5 py-1 rounded-full border border-brand-navy/5 shadow-soft-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Patient</span>
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
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-extrabold text-white mb-1">
              Ready to write your own transformation story?
            </h4>
            <p className="text-xs sm:text-sm text-brand-mint font-medium">
              Join hundreds of clients across Jordan, the UAE, and worldwide.
            </p>
          </div>

          <a
            href="https://wa.me/962792222058"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-navy bg-brand-gold hover:bg-white transition-all shadow-soft duration-200 flex-shrink-0"
          >
            Direct WhatsApp Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};
