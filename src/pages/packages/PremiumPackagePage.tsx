import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PACKAGES_DATA } from '../../data/siteData';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';

export const PremiumPackagePage: React.FC = () => {
  const pkg = PACKAGES_DATA[1]; // Premium
  const { isRTL, t } = useLanguage();

  const features = isRTL ? [
    'مشترك واحد',
    'متابعة عبر زوم (جلستان)',
    '9 خطط غذائية مخصصة',
    'مدة الاشتراك: 9 أسابيع كاملة',
  ] : [
    '1 Dedicated Subscriber',
    '2 Zoom Follow-Up Sessions',
    '9 Customized Clinical Diet Plans',
    'Duration: 9 Full Weeks',
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
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-navy text-white">
                  {isRTL ? 'مدة الاشتراك: 9 أسابيع' : 'Duration: 9 Weeks'}
                </span>
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold text-brand-navy flex items-center gap-1.5">
                  <GoogleIcon name="verified" className="text-sm font-bold" />
                  <span>{isRTL ? 'الأكثر طلباً' : 'Most Popular'}</span>
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
                {isRTL ? pkg.arabicName : pkg.name}
              </h1>
              <p className="text-base text-brand-navy/80 leading-relaxed font-normal">
                {isRTL 
                  ? 'الباقة الأكثر طلباً للتحول الصحي المستدام وتثبيت الوزن، تشمل مشترك واحد، جلستان متابعة عبر زوم، 9 خطط غذائية متجددة، ومدة اشتراك 9 أسابيع كاملة بإشراف سريري مكثف.' 
                  : 'Our flagship 9-week clinical transformation program designed for progressive, sustainable metabolic recalibration, including 2 Zoom check-in sessions, 9 weekly customized diet plans, and weekly accountability.'}
              </p>
            </div>

            {/* What is Included */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <GoogleIcon name="task_alt" className="text-brand-coral text-xl" />
                <span>{isRTL ? 'المميزات المشمولة في الباقة المميزة' : "What's Included in Your 9 Weeks"}</span>
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

            {/* 9-Week Journey Blueprint */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy">
                {isRTL ? 'خارطة رحلة الـ 9 أسابيع' : 'Your 9-Week Milestone Roadmap'}
              </h3>
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    Phase 1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">
                      {isRTL ? 'الأسابيع 1-3: إعادة التوازن والتهيئة الأيضية' : 'Weeks 1-3: Metabolic Reset & Inflammation Reduction'}
                    </h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">
                      {isRTL 
                        ? 'إراحة الجهاز الهضمي، ضبط هرمونات الجوع والشبع، وتأسيس العادات الغذائية العلاجية.'
                        : 'Gut microbiota restoration, stabilization of insulin spikes, and establishing the foundational metabolic routine.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-gold text-brand-navy text-xs font-bold flex items-center justify-center flex-shrink-0">
                    Phase 2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">
                      {isRTL ? 'الأسابيع 4-6: جلسة زوم الأولى وتكثيف النتائج' : 'Weeks 4-6: Midpoint Zoom Review & Acceleration'}
                    </h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">
                      {isRTL 
                        ? 'جلسة متابعة سريرية مباشرة عبر زوم لمراجعة القياسات، تجاوز ثبات الوزن، وتعديل الماكروز.'
                        : 'Direct clinical video review with Dana to evaluate body composition changes and refine diet plans.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-coral text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    Phase 3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">
                      {isRTL ? 'الأسابيع 7-9: جلسة زوم الثانية وتثبيت النتائج' : 'Weeks 7-9: Final Zoom Consultation & Sustainable Maintenance'}
                    </h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">
                      {isRTL 
                        ? 'جلسة زوم ثانية لتحديد استراتيجية التثبيت مدى الحياة وضمان عدم عودة الوزن المفقود.'
                        : 'Second direct Zoom session focusing on long-term lifestyle autonomy and preventing weight rebound.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Booking Card Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 border-2 border-brand-gold shadow-gold-glow space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-light block mb-1">
                  {isRTL ? 'اشتراك كامل • 9 أسابيع • مشترك واحد' : 'Full Subscription • 9 Weeks • 1 Subscriber'}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-gold">{pkg.priceAed}</span>
                  <span className="text-lg font-bold text-white/80">
                    {isRTL ? 'درهم إماراتي' : 'AED'}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-white/90 space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <GoogleIcon name="calendar_month" className="text-brand-gold text-base" />
                  <span>{isRTL ? 'مدة الاشتراك: 9 أسابيع' : 'Duration: 9 Weeks'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GoogleIcon name="videocam" className="text-brand-gold text-base" />
                  <span>{isRTL ? 'متابعة عبر زوم (جلستان)' : '2 Zoom Follow-Up Sessions'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GoogleIcon name="description" className="text-brand-gold text-base" />
                  <span>{isRTL ? '9 خطط غذائية أسبوعية مخصصة' : '9 Customized Clinical Diet Plans'}</span>
                </div>
              </div>

              <a
                href={pkg.gumroadUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-brand-navy bg-brand-gold hover:bg-brand-gold-dark shadow-soft transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>
                  {isRTL ? `اختر الباقة (${pkg.priceAed} درهم)` : `Choose Package (${pkg.priceAed} AED)`}
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
                  className="text-xs font-bold text-white/80 hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{isRTL ? 'لديك استفسار؟ تحدث مع دانة عبر واتساب' : 'Have questions? Chat with Dana on WhatsApp'}</span>
                  <span dir="ltr" className="font-semibold text-white/90">(+962 7 9222 2058)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
