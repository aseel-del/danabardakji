import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PACKAGES_DATA } from '../../data/siteData';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';

export const ExtendedPackagePage: React.FC = () => {
  const pkg = PACKAGES_DATA[2]; // Extended
  const { isRTL, t } = useLanguage();

  const features = isRTL ? [
    'مشترك واحد',
    'متابعة عبر زوم (3 جلسات)',
    '12 خطة غذائية مخصصة',
    'مدة الاشتراك: 12 أسبوعاً كاملة',
  ] : [
    '1 Dedicated Subscriber',
    '3 Zoom Follow-Up Sessions',
    '12 Customized Clinical Diet Plans',
    'Duration: 12 Full Weeks',
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
                {isRTL ? 'مدة الاشتراك: 12 أسبوعاً' : 'Duration: 12 Weeks'}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
                {isRTL ? pkg.arabicName : pkg.name}
              </h1>
              <p className="text-base text-brand-navy/80 leading-relaxed font-normal">
                {isRTL 
                  ? 'برنامج التحول المتكامل للحالات السريرية وتغيير نمط الحياة بالكامل، يشمل 3 جلسات متابعة زوم، 12 خطة غذائية أسبوعية متجددة، ومدة اشتراك 12 أسبوعاً كاملة بإشراف مباشر ومكثف.' 
                  : 'Our comprehensive 12-week clinical program engineered for deep metabolic transformation, bariatric post-op recovery, chronic condition management, and complete dietary habit restructuring.'}
              </p>
            </div>

            {/* What is Included */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <GoogleIcon name="task_alt" className="text-brand-coral text-xl" />
                <span>{isRTL ? 'المميزات المشمولة في الباقة الموسعة' : "What's Included in Your 12 Weeks"}</span>
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

            {/* 12-Week Roadmap */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy">
                {isRTL ? 'مراحل التحول في 12 أسبوعاً' : '12-Week Clinical Transformation Phases'}
              </h3>
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    M1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">
                      {isRTL ? 'الشهر الأول: إعادة التوازن والتحكم في الأنسولين' : 'Month 1: Foundation & Metabolic Stabilization'}
                    </h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">
                      {isRTL 
                        ? 'مراجعة التحاليل الشاملة وجلسة زوم الأولى وتأسيس برنامج غذائي مضاد للالتهاب.'
                        : 'Baseline diagnostic assessment, initial Zoom consultation, and inflammatory detox protocols.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-mint/40 text-brand-navy text-xs font-bold flex items-center justify-center flex-shrink-0">
                    M2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">
                      {isRTL ? 'الشهر الثاني: تكثيف حرق الدهون وتعديل الماكروز' : 'Month 2: Fat Oxidation & Midpoint Zoom Review'}
                    </h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">
                      {isRTL 
                        ? 'جلسة زوم ثانية لمراجعة التطور البدني والفحوصات، وتجديد الخطط لكسر ثبات الوزن.'
                        : 'Second direct Zoom session with Dana, customized cyclic carb adjustments, and metabolic acceleration.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-coral/20 text-brand-coral text-xs font-bold flex items-center justify-center flex-shrink-0">
                    M3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">
                      {isRTL ? 'الشهر الثالث: تثبيت النمط الحياتي والاستقلالية' : 'Month 3: Final Zoom Evaluation & Lifetime Autonomy'}
                    </h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">
                      {isRTL 
                        ? 'جلسة زوم ثالثة لوضع استراتيجية التثبيت الدائمة وتمكينك من إدارة غذائك بثقة تامة.'
                        : 'Third Zoom consultation, lifelong maintenance blueprint, and empowering sustainable health independence.'}
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
                  {isRTL ? 'اشتراك كامل • 12 أسبوعاً • مشترك واحد' : 'Full Subscription • 12 Weeks • 1 Subscriber'}
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
                  <span>{isRTL ? 'مدة الاشتراك: 12 أسبوعاً' : 'Duration: 12 Weeks'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GoogleIcon name="videocam" className="text-brand-mint-dark text-base" />
                  <span>{isRTL ? 'متابعة عبر زوم (3 جلسات)' : '3 Zoom Follow-Up Sessions'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GoogleIcon name="description" className="text-brand-mint-dark text-base" />
                  <span>{isRTL ? '12 خطة غذائية أسبوعية مخصصة' : '12 Customized Clinical Diet Plans'}</span>
                </div>
              </div>

              <a
                href={pkg.gumroadUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all flex items-center justify-center gap-2 cursor-pointer group"
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
                  className="text-xs font-bold text-brand-navy hover:text-brand-coral transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{isRTL ? 'لديك استفسار؟ تحدث مع دانا عبر واتساب' : 'Have questions? Chat with Dana on WhatsApp'}</span>
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
