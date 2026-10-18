import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';

export const WhoSheWorksWithPage: React.FC = () => {
  const { isRTL } = useLanguage();

  const patientGroups = [
    {
      iconName: 'stethoscope',
      title: isRTL ? 'الأمراض المزمنة والحالات العلاجية السريرية' : 'Chronic & Therapeutic Conditions',
      cases: isRTL ? [
        'مرضى السكري من النوعين الأول والثاني ومرحلة ما قبل السكري (ضبط مستويات السكر)',
        'ارتفاع ضغط الدم وصحة القلب والشرايين (بروتوكولات DASH وحميات قليلة الصوديوم)',
        'ارتفاع الكوليسترول والدهون الثلاثية واضطراب دهون الدم',
        'الكبد الدهني وارتفاع إنزيمات الكبد',
      ] : [
        'Type-1 and Type-2 Diabetes & Pre-Diabetes (Glycemic Management)',
        'Hypertension & Cardiovascular Health (Low-Sodium & DASH Protocols)',
        'High Cholesterol, Hyperlipidemia & Elevated Triglycerides',
        'Fatty Liver Disease (NAFLD) & Elevated Liver Enzymes',
      ],
    },
    {
      iconName: 'favorite',
      title: isRTL ? 'صحة المرأة والتوازن الهرموني' : 'Women’s Health & Hormonal Balance',
      cases: isRTL ? [
        'متلازمة تكيس المبايض (PCOS) ومقاومة الإنسولين',
        'تحسين جودة البويضات والخصوبة والتجهيز للحمل أو التلقيح الصناعي',
        'سكري الحمل وتغذية الحمل الصحية المتوازنة',
        'التعافي بعد الولادة، الرضاعة الطبيعية ونزول الوزن الآمن',
      ] : [
        'Polycystic Ovary Syndrome (PCOS) & Insulin Resistance',
        'Pre-Conception Optimization & Fertility Dietary Protocols',
        'Gestational Diabetes & Healthy Pregnancy Nutrition',
        'Postpartum Recovery, Lactation & Safe Weight Loss',
      ],
    },
    {
      iconName: 'health_and_safety',
      title: isRTL ? 'اضطرابات الجهاز الهضمي والقولون وحساسية الطعام' : 'Digestive Disorders & Food Sensitivities',
      cases: isRTL ? [
        'القولون العصبي (IBS) وبروتوكولات Low FODMAP',
        'الانتفاخ المزمن، فرط نمو البكتيريا (SIBO) واستعادة توازن الميكروبيوم',
        'حساسية القمح (السيلياك)، حساسية الغلوتين وحساسية الهستامين',
        'المتابعة الغذائية بعد عمليات التكميم وتحويل المسار وجراحات السمنة',
      ] : [
        'Irritable Bowel Syndrome (IBS) & Low FODMAP Protocols',
        'Chronic Bloating, SIBO & Gut Dysbiosis',
        'Celiac Disease, Non-Celiac Gluten Sensitivity & Histamine Intolerance',
        'Post-Bariatric Surgery Care (Gastric Sleeve / Bypass Long-term Diet)',
      ],
    },
    {
      iconName: 'fitness_center',
      title: isRTL ? 'إعادة تشكيل الجسم وتنشيط الأيض' : 'Body Recomposition & Performance',
      cases: isRTL ? [
        'خسارة الدهون المستدامة مع الحفاظ على الكتلة العضلية',
        'حمية الكيتو (Keto) تحت إشراف طبي وسريري دقيق',
        'تدوير الكربوهيدرات (Carb Cycling) للرياضيين وكسر ثبات الوزن',
        'زيادة الوزن الصحية لمن يعانون من النحافة ونقص الكتلة العضلية',
      ] : [
        'Sustainable Fat Loss with Lean Muscle Preservation',
        'Ketogenic (Keto) Diet Protocols with Medical Supervision',
        'Carb Cycling for Athletes & High-Performance Professionals',
        'Healthy Weight Gain for Underweight & Malnourished Cases',
      ],
    },
    {
      iconName: 'groups',
      title: isRTL ? 'تغذية الأسرة والأطفال وكبار السن' : 'Family & Pediatric Nutrition',
      cases: isRTL ? [
        'انتقائية الطعام لدى الأطفال وسوء التغذية ونقص الفيتامينات',
        'سمنة الأطفال وبناء عادات غذائية عائلية صحية',
        'تغذية كبار السن والوقاية من ضمور العضلات (Sarcopenia)',
        'تنظيم مطبخ الأسرة وخطط وجبات مشتركة تلائم جميع أفراد العائلة',
      ] : [
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
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8 cursor-pointer"
        >
          <GoogleIcon name={isRTL ? "arrow_forward" : "arrow_back"} className="text-base" />
          <span>{isRTL ? 'الرجوع إلى صفحة عن دانة' : 'Back to About Dana'}</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-2">
            {isRTL ? 'النطاق الإكلينيكي والحالات التي نتابعها' : 'Clinical Scope & Patient Profiles'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            {isRTL ? 'الحالات التي تتابعها دانة بردقجي' : 'Who Dana Works With'}
          </h1>
          <p className="text-base text-brand-navy/80 leading-relaxed max-w-3xl font-normal">
            {isRTL 
              ? 'تقدم دانة علاجاً غذائياً إكلينيكياً تخصصياً لمختلف المراحل العمرية، محولةً التشخيصات الطبية المعقدة إلى خطط غذائية يومية واضحة ومستدامة.'
              : 'Dana provides specialized nutritional therapy for individuals across all life stages, translating complex medical diagnoses and metabolic roadblocks into clear, sustainable eating plans.'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-6">
          {patientGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-surface-subtle border border-brand-navy/10 flex items-center justify-center text-brand-navy flex-shrink-0">
                <GoogleIcon name={group.iconName} className="text-2xl text-brand-coral" />
              </div>

              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-extrabold text-brand-navy">
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {group.cases.map((caseItem, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-navy/80">
                      <div className="w-4 h-4 rounded-full bg-brand-mint/25 text-brand-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                        <GoogleIcon name="check" className="text-[10px] font-bold" />
                      </div>
                      <span>{caseItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="mt-14 p-8 rounded-3xl bg-white border-2 border-brand-mint/40 shadow-soft text-center space-y-4">
          <h3 className="text-2xl font-extrabold text-brand-navy">
            {isRTL ? 'هل لديك حالة طبية أو تشخيص خاص؟' : 'Have a Specific Medical Diagnosis?'}
          </h3>
          <p className="text-sm text-brand-navy/75 max-w-xl mx-auto">
            {isRTL 
              ? 'احجز جلسة استشارة سريرية تشخيصية مباشرة عبر الفيديو مع دانة لتقييم تاريخك المرضي وفحوصاتك المخبرية.'
              : 'Book a direct 1-on-1 clinical consultation with Dana to evaluate your lab biomarkers and discuss your customized therapeutic roadmap.'}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/packages/consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider bg-brand-coral hover:bg-brand-coral-dark text-white shadow-soft transition-all"
            >
              <span>{isRTL ? 'حجز جلسة استشارة' : 'Book 1-on-1 Consultation'}</span>
              <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-sm" />
            </Link>
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider bg-surface-subtle hover:bg-brand-mint/20 text-brand-navy border border-brand-navy/10 transition-all"
            >
              <span>{isRTL ? 'استعراض باقات المتابعة' : 'View Coaching Packages'}</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
