import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Check, Sparkles, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROGRAMS_DATA } from '../data/siteData';
import { useCart } from '../context/CartContext';

export const ProgrammesSection: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section id="programmes" className="py-24 bg-surface-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-3"
            >
              Featured Digital Protocols
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-coral tracking-tight mb-4"
            >
              Specialized Programmes & Meal Plans
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base text-brand-navy/80 leading-relaxed font-normal"
            >
              Clinical, self-guided dietary protocols crafted by Dana Bardakji. Instant downloadable guides packed with meal schedules, recipes, and grocery matrices.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-brand-navy bg-white hover:bg-brand-mint/20 border border-brand-navy/10 hover:border-brand-mint shadow-soft-sm transition-all"
            >
              <span>View All 6 Protocols</span>
              <ArrowRight className="w-4 h-4 text-brand-coral" />
            </Link>
          </motion.div>
        </div>

        {/* Programmes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROGRAMS_DATA.map((prog, index) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-surface-border hover:border-brand-mint shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge & Price */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-brand-gold/25 text-brand-navy border border-brand-gold/30">
                    {prog.badge}
                  </span>
                  <div className="flex items-baseline gap-1 text-brand-navy font-black text-xl">
                    <span>${prog.priceUsd}</span>
                    <span className="text-xs font-semibold text-brand-navy/60">USD</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <Link to={`/programs/${prog.slug}`} className="block group-hover:text-brand-coral transition-colors">
                  <h3 className="text-xl font-extrabold text-brand-navy mb-1.5 leading-snug">
                    {prog.title}
                  </h3>
                </Link>
                <p className="text-xs text-brand-navy/65 font-medium mb-4">
                  {prog.subtitle}
                </p>

                <p className="text-xs text-brand-navy/80 leading-relaxed mb-5 line-clamp-3">
                  {prog.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2 mb-6 pt-4 border-t border-brand-navy/5">
                  {prog.whatsIncluded.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-brand-navy/80">
                      <Check className="w-3.5 h-3.5 text-brand-mint-dark flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-brand-navy/10 flex flex-col gap-2">
                <button
                  onClick={() =>
                    addToCart({
                      id: prog.id,
                      title: prog.title,
                      subtitle: prog.subtitle,
                      price: `$${prog.priceUsd} USD`,
                      priceNumber: prog.priceUsd,
                      currency: 'USD',
                      type: 'program',
                      slug: `/programs/${prog.slug}`,
                      badge: prog.badge,
                    })
                  }
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Cart (${prog.priceUsd})</span>
                </button>

                <Link
                  to={`/programs/${prog.slug}`}
                  className="w-full py-2 px-3 text-center text-xs font-semibold text-brand-navy/70 hover:text-brand-navy hover:bg-surface-subtle rounded-xl transition-colors flex items-center justify-center gap-1"
                >
                  <span>View Details & Sample Day</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
