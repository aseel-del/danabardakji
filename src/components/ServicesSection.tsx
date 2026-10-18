import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { GoogleIcon } from './common/GoogleIcon';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { isRTL } = useLanguage();

  const services = [
    {
      id: 'weight-management',
      title: isRTL ? 'خطة إدارة وتنزيل الوزن' : 'Weight Management Plan',
      category: 'lifestyle',
      icon: 'nutrition',
      color: 'border-brand-mint/60 hover:border-brand-mint',
      description: isRTL 
        ? 'موازنة علمية دقيقة للسعرات والمغذيات الكبرى لخسارة دهون آمنة ومستدامة بدون حرمان شديد.'
        : 'Science-backed caloric and macronutrient balancing designed for safe, sustainable fat loss without extreme deprivation.',
      focusAreas: isRTL ? [
        'تنشيط معدل الأيض الأساسي',
        'تعديل العادات الغذائية على المدى الطويل',
        'جداول حصص وبدائل مرنة',
        'متابعة تكوين الجسم ونسبة الدهون'
      ] : [
        'Metabolic rate optimization',
        'Long-term habit transformation',
        'Customized portion guides',
        'Body composition tracking'
      ]
    },
    {
      id: 'muscle-gain',
      title: isRTL ? 'خطة بناء الكتلة العضلية' : 'Muscle Gain Plan',
      category: 'performance',
      icon: 'fitness_center',
      color: 'border-brand-coral/40 hover:border-brand-coral',
      description: isRTL 
        ? 'تغذية علاجية عالية البروتين ومغذيات دقيقة مكثفة لتمارين المقاومة وتسريع الاستشفاء العضلي.'
        : 'High-protein, nutrient-dense nutrition tailored to resistance training, hypertrophy goals, and accelerated recovery.',
      focusAreas: isRTL ? [
        'التوقيت الأمثل لتناول البروتين',
        'تغذية ما قبل وما بعد التمرين',
        'زيادة الكتلة العضلية الصافية',
        'استراتيجيات الطاقة المستدامة'
      ] : [
        'Optimal protein timing & intake',
        'Pre & post workout fueling',
        'Lean muscle mass development',
        'Nutrient timing strategies'
      ]
    },
    {
      id: 'pregnant-lactating',
      title: isRTL ? 'خطة الحوامل والمرضعات' : 'Pregnant & Lactating Plan',
      category: 'clinical',
      icon: 'pregnant_woman',
      color: 'border-brand-gold/60 hover:border-brand-gold',
      description: isRTL 
        ? 'رعاية غذائية متخصصة تدعم نمو الجنين، وتلبي احتياجات الرضاعة الطبيعية، وتمنع النواقص الحيوية.'
        : 'Nourishing dietary support designed for healthy fetal development, maternal postpartum recovery, and milk supply.',
      focusAreas: isRTL ? [
        'تأمين حمض الفوليك والحديد والكالسيوم',
        'إدارة غثيان الحمل وسكر الحمل',
        'دعم جودة وغزارة الحليب',
        'استعادة وزن ما بعد الولادة بأمان'
      ] : [
        'Folate, iron, & calcium optimization',
        'Gestational blood sugar management',
        'Postpartum recovery nutrition',
        'Breast milk quality & supply'
      ]
    },
    {
      id: 'childhood-malnutrition',
      title: isRTL ? 'خطة تغذية ونمو الأطفال' : 'Childhood Nutrition & Growth',
      category: 'clinical',
      icon: 'child_care',
      color: 'border-brand-mint/60 hover:border-brand-mint',
      description: isRTL 
        ? 'حلول إكلينيكية متخصصة للتعامل مع انتقائية الطعام، وتأخر النمو، وتصحيح نقص المغذيات الحيوية للأطفال.'
        : 'Targeted pediatric nutrition addressing picky eating, growth stunting, micronutrient deficiencies, and healthy eating habits.',
      focusAreas: isRTL ? [
        'علاج انتقائية الأطعمة وصعوبات الإطعام',
        'تصحيح فقر الدم ونقص الحديد',
        'تطوير علاقة إيجابية مع الغذاء',
        'متابعة منحنيات النمو العالمية'
      ] : [
        'Picky eating interventions',
        'Iron & vitamin deficiency recovery',
        'Positive mealtime relationship',
        'Pediatric growth curve tracking'
      ]
    },
    {
      id: 'chronic-diseases',
      title: isRTL ? 'إدارة الأمراض المزمنة (السكري والضغط)' : 'Chronic Disease Nutrition (Diabetes & BP)',
      category: 'clinical',
      icon: 'monitor_heart',
      color: 'border-brand-coral/40 hover:border-brand-coral',
      description: isRTL 
        ? 'علاج تغذوي طبي للسيطرة على السكر التراكمي، وتنظيم ضغط الدم، وخفض الكوليسترول الضار والدهنيات الثلاثية.'
        : 'Medical nutrition therapy for glycemic control, blood pressure moderation, and healthy lipid panel stabilization.',
      focusAreas: isRTL ? [
        'استراتيجيات خفض السكر التراكمي (HbA1c)',
        'بروتوكولات تقليل الصوديوم للضغط',
        'تحسين توازن الكوليسترول',
        'الحد من التهابات الأوعية الدموية'
      ] : [
        'Glycemic index & HbA1c control',
        'Sodium-conscious cardiovascular plans',
        'Triglycerides & LDL optimization',
        'Anti-inflammatory whole food protocols'
      ]
    },
    {
      id: 'food-allergies',
      title: isRTL ? 'حساسيات الطعام والقولون' : 'Food Allergies & Gut Health',
      category: 'clinical',
      icon: 'science',
      color: 'border-brand-mint/60 hover:border-brand-mint',
      description: isRTL 
        ? 'حميات الإقصاء وإعادة الإدخال لاكتشاف المحسسات الغذائية، وعلاج الارتشاح المعوي، وتهدئة القولون العصبي.'
        : 'Elimination protocols and functional meal plans that soothe intestinal dysbiosis, identify triggers, and heal gut lining.',
      focusAreas: isRTL ? [
        'بدائل الجلوتين واللاكتوز الآمنة',
        'بروتوكول الفودماب المنخفض (Low-FODMAP)',
        'تقوية الحاجز المعوي والميكروبيوم',
        'التخلص من الانتفاخ والغازات'
      ] : [
        'Gluten, dairy, & allergen substitution',
        'Low-FODMAP protocol integration',
        'Microbiome barrier restoration',
        'Elimination of chronic gas & bloating'
      ]
    },
    {
      id: 'post-bariatric',
      title: isRTL ? 'رعاية ما بعد جراحات السمنة والتكميم' : 'Post-Bariatric Surgery Care',
      category: 'clinical',
      icon: 'medical_services',
      color: 'border-brand-gold/60 hover:border-brand-gold',
      description: isRTL 
        ? 'متابعة سريرية تدريجية (سوائل، مهروس، أطعمة لينة، ثم صلبة) لضمان الشفاء التام وتجنب نقص الفيتامينات أو الترهل.'
        : 'Phased dietary transitions ensuring optimal protein absorption, micronutrient replenishment, and dumping syndrome prevention.',
      focusAreas: isRTL ? [
        'التدرج من السوائل للأطعمة الصلبة',
        'الوصول لحصة البروتين اليومية الإلزامية',
        'الوقاية من متلازمة الإفراغ السريع',
        'تعويض المغذيات الدقيقة والفيتامينات'
      ] : [
        'Liquid-to-solid phase transition',
        'Protein prioritization strategies',
        'Dumping syndrome prevention',
        'Micronutrient supplementation'
      ]
    },
    {
      id: 'hormonal-pcos',
      title: isRTL ? 'التوازن الهرموني وتكيس المبايض (PCOS)' : 'Hormonal Balance & PCOS',
      category: 'clinical',
      icon: 'female',
      color: 'border-brand-coral/40 hover:border-brand-coral',
      description: isRTL 
        ? 'تغذية سريرية مستهدفة لعلاج مقاومة الأنسولين، وتنظيم الدورة الشهرية، والحد من حب الشباب وتساقط الشعر الهرموني.'
        : 'Nutritional intervention focused on reversing insulin resistance, reducing androgens, and restoring regular ovulatory cycles.',
      focusAreas: isRTL ? [
        'علاج مقاومة الأنسولين بدون حرمان',
        'دعم التوازن الهرموني للتبويض',
        'تقليل الالتهاب الجهازي المرتبط بالـ PCOS',
        'تغذية خمول الغدة الدرقية'
      ] : [
        'Insulin resistance reversal',
        'Ovulatory cycle regulation',
        'Androgen reduction via functional foods',
        'Thyroid & metabolic optimization'
      ]
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-surface-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-3 border border-brand-coral/20">
            <GoogleIcon name="stethoscope" className="text-sm" />
            <span>{isRTL ? 'الخدمات العلاجية المتخصصة' : 'Clinical Specialties'}</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-4"
          >
            {isRTL ? 'خدمات التغذية السريرية والعلاجية' : 'Specialized Nutrition & Health Services'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed font-normal"
          >
            {isRTL 
              ? 'خطط وبرامج غذائية علاجية مخصصة لحالتك الصحية وأهدافك البدنية، مصممة بإشراف الأخصائية دانا بردقجي.'
              : 'Diet plans and clinical methods personalized to your unique health goals and metabolic needs, designed by Dana Bardakji.'}
          </motion.p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {[
              { id: 'all', label: isRTL ? `جميع الخدمات (${services.length})` : `All Services (${services.length})` },
              { id: 'clinical', label: isRTL ? 'العلاجية والسريرية' : 'Clinical & Therapeutic' },
              { id: 'lifestyle', label: isRTL ? 'نمط الحياة والوزن' : 'Lifestyle & Weight' },
              { id: 'performance', label: isRTL ? 'اللياقة والأداء الرياضي' : 'Fitness & Performance' },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
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
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`bg-white rounded-3xl p-6 sm:p-8 border ${service.color} shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface-subtle flex items-center justify-center text-brand-navy group-hover:scale-110 transition-transform duration-300">
                    <GoogleIcon name={service.icon} className="text-2xl text-brand-navy" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-brand-navy mb-2.5 group-hover:text-brand-coral transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm text-brand-navy/75 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Focus Areas List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-brand-navy/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-navy/60 block mb-2">
                    {isRTL ? 'أبرز محاور الخطة:' : 'Key Highlights:'}
                  </span>
                  {service.focusAreas.map((area: string, i: number) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-brand-navy/85 font-medium">
                      <div className="w-4 h-4 rounded-full bg-brand-mint/25 text-brand-navy flex items-center justify-center flex-shrink-0">
                        <GoogleIcon name="check" className="text-[10px] font-bold" />
                      </div>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectService(service.title)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider text-brand-navy bg-surface-subtle hover:bg-brand-mint/20 border border-brand-navy/15 transition-all duration-200 cursor-pointer"
              >
                <span>{isRTL ? 'حجز هذه الخدمة في الاستشارة' : 'Select in Consultation'}</span>
                <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-sm text-brand-coral" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
