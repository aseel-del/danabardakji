import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Heart, Stethoscope, Dumbbell, Baby, Users, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhoSheWorksWithPage: React.FC = () => {
  const patientGroups = [
    {
      icon: Stethoscope,
      title: 'Chronic & Therapeutic Conditions',
      cases: [
        'Type-1 and Type-2 Diabetes & Pre-Diabetes (Glycemic Management)',
        'Hypertension & Cardiovascular Health (Low-Sodium & DASH Protocols)',
        'High Cholesterol, Hyperlipidemia & Elevated Triglycerides',
        'Fatty Liver Disease (NAFLD) & Elevated Liver Enzymes',
      ],
    },
    {
      icon: Heart,
      title: 'Women’s Health & Hormonal Balance',
      cases: [
        'Polycystic Ovary Syndrome (PCOS) & Insulin Resistance',
        'Pre-Conception Optimization & Fertility Dietary Protocols',
        'Gestational Diabetes & Healthy Pregnancy Nutrition',
        'Postpartum Recovery, Lactation & Safe Weight Loss',
      ],
    },
    {
      icon: ShieldAlert,
      title: 'Digestive Disorders & Food Sensitivities',
      cases: [
        'Irritable Bowel Syndrome (IBS) & Low FODMAP Protocols',
        'Chronic Bloating, SIBO & Gut Dysbiosis',
        'Celiac Disease, Non-Celiac Gluten Sensitivity & Histamine Intolerance',
        'Post-Bariatric Surgery Care (Gastric Sleeve / Bypass Long-term Diet)',
      ],
    },
    {
      icon: Dumbbell,
      title: 'Body Recomposition & Performance',
      cases: [
        'Sustainable Fat Loss with Lean Muscle Preservation',
        'Ketogenic (Keto) Diet Protocols with Medical Supervision',
        'Carb Cycling for Athletes & High-Performance Professionals',
        'Healthy Weight Gain for Underweight & Malnourished Cases',
      ],
    },
    {
      icon: Users,
      title: 'Family & Pediatric Nutrition',
      cases: [
        'Children & Adolescent Picky Eating & Malnutrition',
        'Childhood Obesity & Healthy Household Habit Formation',
        'Elderly Nutritional Optimization & Sarcopenia Prevention',
        'Shared Family Meal Plans & Unified Kitchen Organization',
      ],
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
            Clinical Scope & Patient Profiles
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            Who Dana Works With
          </h1>
          <p className="text-base text-brand-navy/80 leading-relaxed max-w-3xl font-normal">
            Dana provides specialized nutritional therapy for individuals across all life stages, translating complex medical diagnoses and metabolic roadblocks into clear, sustainable eating plans.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-6">
          {patientGroups.map((group, index) => {
            const IconComponent = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-2xl bg-surface-subtle border border-brand-navy/10 flex items-center justify-center text-brand-navy flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-brand-coral" />
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="text-lg font-extrabold text-brand-navy">{group.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {group.cases.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-navy/80">
                        <Check className="w-4 h-4 text-brand-mint-dark flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-brand-navy text-white text-center space-y-4">
          <h3 className="text-2xl font-extrabold text-white">Unsure Which Program Fits Your Case?</h3>
          <p className="text-sm text-brand-mint max-w-xl mx-auto">
            Book a diagnostic consultation or send Dana a message on WhatsApp for direct guidance.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/packages/consultation"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-brand-navy bg-brand-gold hover:bg-white transition-all shadow-soft"
            >
              Book 1-on-1 Consultation ($50)
            </Link>
            <a
              href="https://wa.me/962792222058"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/15 hover:bg-white/25 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
