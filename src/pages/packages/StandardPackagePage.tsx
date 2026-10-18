import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PACKAGES_DATA } from '../../data/siteData';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';

export const StandardPackagePage: React.FC = () => {
  const pkg = PACKAGES_DATA[0]; // Standard
  const { isRTL, t } = useLanguage();

  const features = isRTL ? [
    'مشترك واحد',
    'متابعة عبر زوم (جلسة واحدة)',
    '4 خطط غذائية مخصصة',
    'مدة الاشتراك: 4 أسابيع كاملة',
  ] : [
    '1 Dedicated Subscriber',
    '1 Zoom Follow-Up Session',
    '4 Customized Clinical Diet Plans',
    'Duration: 4 Full Weeks',
  ];

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/packages"
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8"
        >
          <GoogleIcon name={isRTL ? "arrow_forward" : "arrow_back"} className="text-base" />
          <span>{isRTL ? 'الرجوع إلى جميع الباقات' : 'Back to All Packages'}</span>
        </Link>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-coral/15 text-brand-coral mb-3 inline-block">
                {isRTL ? 'مدة الاشتراك: 4 أسابيع' : 'Duration: 4 Weeks'}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
                {isRTL ? pkg.arabicName : pkg.name}
              </h1>
              <p className="text-base text-brand-navy/80 leading-relaxed font-normal">
                {isRTL ? pkg.description : 'A personalized clinical coaching package designed for targeted dietary transformation over 4 weeks, featuring 1-on-1 direct guidance, customized weekly meal protocols, and dedicated Zoom tracking.'}
              </p>
            </div>

            {/* What is Included */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <GoogleIcon name="task_alt" className="text-brand-coral text-xl" />
                <span>{isRTL ? 'المميزات المشمولة في الباقة' : "What's Included in Your 4 Weeks"}</span>
              </h3>
              <div className="space-y-3 pt-2">
                {features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-semibold text-brand-navy">
                    <div className="w-5 h-5 rounded-full bg-brand-mint/25 text-brand-navy flex items-center justify-center flex-shrink-0">
                      <GoogleIcon name="check" className="text-xs font-bold" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Week Journey Timeline */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy">
                {isRTL ? 'المراحل الزمنية لخطة الـ 4 أسابيع' : 'Your 4-Week Journey Timeline'}
              </h3>
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    W1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">
                      {isRTL ? 'التقييم الشامل والخطة الأولى' : 'Intake & Initial Meal Protocol'}
                    </h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">
                      {isRTL 
                        ? 'مراجعة التحاليل المخبرية والتاريخ الغذائي، وإعداد أول خطة غذائية أسبوعية مفصلة.'
                        : 'Comprehensive dietary evaluation, lab analysis, and delivery of your customized 7-day starter plan.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-mint/40 text-brand-navy text-xs font-bold flex items-center justify-center flex-shrink-0">
                    W2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">
                      {isRTL ? 'متابعة القياسات وضبط الشهية' : 'Biometric Check-in & Craving Control'}
                    </h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">
                      {isRTL 
                        ? 'قياس استجابة الجسم ومستوى الطاقة، وتعديل الوجبات وبدائل الطعام بما يتناسب مع روتينك.'
                        : 'First biometric review, hunger adaptation check, and recipe substitutions for dining out.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-gold/40 text-brand-navy text-xs font-bold flex items-center justify-center flex-shrink-0">
                    W3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">
                      {isRTL ? 'تحفيز الحرق ومواجهة الثبات' : 'Metabolic Acceleration'}
                    </h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">
                      {isRTL 
                        ? 'إعادة توزيع السعرات والماكروز لكسر أي ثبات وتنشيط الحرق بأسلوب صحي آمن.'
                        : 'Refined calorie and macronutrient distribution to sustain fat loss and optimize metabolic energy.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-coral/20 text-brand-coral text-xs font-bold flex items-center justify-center flex-shrink-0">
                    W4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">
                      {isRTL ? 'مراجعة النتائج وخطة التثبيت' : 'Transformation Review & Maintenance Plan'}
                    </h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">
                      {isRTL 
                        ? 'مقارنة القياسات والنتائج النهائية وتزويدك بإرشادات الاستمرارية وتثبيت الوزن.'
                        : 'Final 30-day assessment, measurement comparison, and post-diet sustainable maintenance blueprint.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Booking Card Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-mint/40 shadow-soft-xl space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block mb-1">
                  {isRTL ? 'اشتراك كامل • 4 أسابيع • مشترك واحد' : 'Full Subscription • 4 Weeks • 1 Subscriber'}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-navy">{pkg.priceAed}</span>
                  <span className="text-lg font-bold text-brand-navy/70">
                    {isRTL ? 'درهم إماراتي' : 'AED'}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border text-xs text-brand-navy/80 space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <GoogleIcon name="calendar_month" className="text-brand-mint-dark text-base" />
                  <span>{isRTL ? 'مدة الاشتراك: 4 أسابيع' : 'Duration: 4 Weeks'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GoogleIcon name="videocam" className="text-brand-mint-dark text-base" />
                  <span>{isRTL ? 'متابعة عبر زوم (جلسة واحدة)' : '1 Zoom Follow-Up Session'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GoogleIcon name="description" className="text-brand-mint-dark text-base" />
                  <span>{isRTL ? '4 خطط غذائية أسبوعية مخصصة' : '4 Customized Clinical Diet Plans'}</span>
                </div>
              </div>

              <a
                href={pkg.gumroadUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>
                  {isRTL ? 'اختر الباقة' : 'Choose Package'}
                </span>
                <GoogleIcon 
                  name={isRTL ? "arrow_back" : "arrow_forward"} 
                  className={`text-base transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} 
                />
              </a>

              <div className="text-center pt-2">
                <a
                  href="https://wa.me/962792222058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-navy hover:text-brand-coral transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{isRTL ? 'لديك استفسار؟ تحدث مع دانة عبر واتساب' : 'Have questions? Chat with Dana on WhatsApp'}</span>
                  <span dir="ltr" className="font-semibold text-brand-navy/70">(+962 7 9222 2058)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
