import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Sparkles, Compass, ShieldCheck, Sun, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MoreThanNutritionPage: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Mindful Relationship with Food',
      description: 'Moving away from guilt, deprivation, and rigid restriction. We teach you to understand physiological hunger cues, emotional triggers, and satiety signals.',
    },
    {
      icon: Sun,
      title: 'Behavioral Habit Architecture',
      description: 'Diets fail when they demand radical, unsustainable changes overnight. We build small, consistent daily micro-habits that integrate effortlessly into your family and work life.',
    },
    {
      icon: Sparkles,
      title: 'Real-Life Adaptability',
      description: 'You shouldn’t have to avoid restaurants, social gatherings, or travel to stay healthy. Our food exchange system empowers you to make intuitive, confident food choices anywhere.',
    },
    {
      icon: ShieldCheck,
      title: 'Metabolic & Hormonal Preservation',
      description: 'Severe calorie restriction crashes your metabolism and elevates stress hormones. We nourish your cells with balanced macronutrients to protect lean muscle and thyroid health.',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link
          to="/about"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to About Dana</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-2">
            Philosophy & Mindset
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            More Than Nutrition
          </h1>
          <p className="text-base text-brand-navy/80 leading-relaxed max-w-3xl font-normal">
            Real health is not about temporary perfection on a sheet of paper. It is about creating a peaceful, educated, and sustainable way of living that honors your body and mind.
          </p>
        </div>

        {/* Philosophy Intro Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-surface-border shadow-soft mb-12 space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-gold/25 text-brand-navy flex items-center justify-center">
            <Heart className="w-6 h-6 text-brand-coral" />
          </div>

          <h2 className="text-2xl font-extrabold text-brand-navy">
            Why Restrictive Diets Fail — And What Works Instead
          </h2>

          <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed font-normal">
            In her two books, <em>“Myths in Dieting”</em> and <em>“100 Questions and Answers in Nutrition”</em>, Dana Bardakji explores how aggressive fads damage metabolic rate and create an exhausting cycle of restriction and rebound.
          </p>

          <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed font-normal">
            Dana’s clinical approach combines rigorous biochemical precision with profound compassion. By understanding your unique physiology and psychological relationship with food, we transform eating from a source of daily stress into a powerful tool for energy, vitality, and self-care.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-surface-subtle border border-brand-navy/10 flex items-center justify-center text-brand-coral">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-brand-navy">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-brand-navy/75 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-brand-navy text-white text-center space-y-4">
          <h3 className="text-2xl font-extrabold text-white">Experience Compassionate Clinical Guidance</h3>
          <p className="text-sm text-brand-mint max-w-xl mx-auto">
            Ready to break free from dieting cycles and achieve lasting peace with food?
          </p>
          <div className="pt-2">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-brand-navy bg-brand-gold hover:bg-white transition-all shadow-soft"
            >
              <span>Explore Personalized Packages</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
