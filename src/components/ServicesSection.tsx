import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Apple, 
  Dumbbell, 
  Heart, 
  Zap, 
  Activity, 
  Stethoscope, 
  Sun,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const services: (ServiceItem & { icon: React.ElementType; color: string; badgeColor: string })[] = [
    {
      id: 'weight-management',
      title: 'Weight Management Plan',
      category: 'lifestyle',
      icon: Apple,
      color: 'border-brand-mint/60 hover:border-brand-mint',
      badgeColor: 'bg-brand-mint/20 text-brand-navy',
      description: 'Science-backed caloric and macronutrient balancing designed for safe, sustainable fat loss or healthy weight gain without extreme deprivation.',
      focusAreas: [
        'Metabolic rate optimization',
        'Long-term habit transformation',
        'Customized portion guides',
        'Body composition tracking'
      ]
    },
    {
      id: 'muscle-gain',
      title: 'Muscle Gain Plan',
      category: 'performance',
      icon: Dumbbell,
      color: 'border-brand-coral/40 hover:border-brand-coral',
      badgeColor: 'bg-brand-coral/15 text-brand-coral-dark',
      description: 'High-protein, nutrient-dense nutrition tailored to resistance training, hypertrophy goals, energy optimization, and accelerated recovery.',
      focusAreas: [
        'Optimal protein timing & intake',
        'Pre & post workout fueling',
        'Lean muscle mass development',
        'Nutrient timing strategies'
      ]
    },
    {
      id: 'pregnant-lactating',
      title: 'Pregnant & Lactating Plan',
      category: 'clinical',
      icon: Heart,
      color: 'border-brand-gold/60 hover:border-brand-gold',
      badgeColor: 'bg-brand-gold/25 text-brand-navy',
      description: 'Comprehensive trimester-specific nutritional care supporting fetal development, maternal vitality, lactation demands, and postpartum recovery.',
      focusAreas: [
        'Essential micronutrient balance (Iron, Folate, DHA)',
        'Gestational health support',
        'Healthy milk supply enhancement',
        'Gentle postpartum nourishment'
      ]
    },
    {
      id: 'keto-plan',
      title: 'Keto Plan',
      category: 'lifestyle',
      icon: Zap,
      color: 'border-brand-coral/40 hover:border-brand-coral',
      badgeColor: 'bg-brand-coral/15 text-brand-coral-dark',
      description: 'Clinically calculated ketogenic protocols that ensure electrolyte balance, nutritional sufficiency, and safe transition into ketosis.',
      focusAreas: [
        'Precision macro ratio calculation',
        'Electrolyte & hydration management',
        'Clean healthy fat selections',
        'Blood biomarker monitoring'
      ]
    },
    {
      id: 'post-bariatric',
      title: 'Post Bariatric Plan',
      category: 'clinical',
      icon: Activity,
      color: 'border-brand-mint/60 hover:border-brand-mint',
      badgeColor: 'bg-brand-mint/20 text-brand-navy',
      description: 'Specialized phased dietary transitions for gastric sleeve and bypass patients to prevent nutrient deficiencies, dumping syndrome, and muscle wasting.',
      focusAreas: [
        'Clear liquid to solid food progression',
        'Micronutrient deficiency prevention',
        'Digestive tolerance monitoring',
        'Long-term pouch maintenance'
      ]
    },
    {
      id: 'therapeutic-plan',
      title: 'Therapeutic Plan',
      category: 'clinical',
      icon: Stethoscope,
      color: 'border-brand-navy/30 hover:border-brand-navy',
      badgeColor: 'bg-brand-navy/10 text-brand-navy',
      description: 'Medical nutrition therapy (MNT) specifically formulated for diabetes management, hypertension, hyperlipidemia (cholesterol), and food allergies.',
      focusAreas: [
        'Glycemic control & insulin sensitivity',
        'Cardiovascular health & lipid panels',
        'Food allergy elimination protocols',
        'Clinical lab result alignment'
      ]
    },
    {
      id: 'wellbeing-reflection',
      title: 'Well Being and Self Reflection',
      category: 'lifestyle',
      icon: Sun,
      color: 'border-brand-gold/60 hover:border-brand-gold',
      badgeColor: 'bg-brand-gold/25 text-brand-navy',
      description: 'Mindful nutrition coaching focused on repairing your relationship with food, overcoming emotional eating, and fostering sustainable physical & mental balance.',
      focusAreas: [
        'Mindful & intuitive eating practices',
        'Stress & craving management',
        'Gut-brain axis nourishment',
        'Daily energy & vitality routines'
      ]
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-surface-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-coral tracking-tight mb-6"
          >
            Specialized Nutrition & Health Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed"
          >
            Diet plans and methods personalized to your different health goals and preferences, designed by clinical dietitian Dana Bardakji.
          </motion.p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {[
              { id: 'all', label: `All Services (${services.length})` },
              { id: 'clinical', label: 'Clinical & Therapeutic' },
              { id: 'lifestyle', label: 'Lifestyle & Wellness' },
              { id: 'performance', label: 'Performance & Fitness' },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-navy text-white shadow-soft-sm'
                      : 'bg-white text-brand-navy/75 hover:text-brand-navy hover:bg-white/90 border border-brand-navy/10'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-white rounded-2xl p-6 sm:p-7 border ${service.color} shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-xl bg-surface-subtle flex items-center justify-center text-brand-navy group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-brand-navy" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-coral transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-brand-navy/75 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Focus Areas List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-brand-navy/10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-navy/60 block mb-2">
                      Key Highlights:
                    </span>
                    {service.focusAreas.map((area: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-brand-navy/85 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-mint-dark flex-shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-brand-navy bg-brand-mint/20 hover:bg-brand-mint/40 border border-brand-mint/40 transition-colors duration-200"
                >
                  <span>Select in Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
