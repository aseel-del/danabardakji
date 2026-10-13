import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingBag, ArrowLeft, ShieldCheck, Download, Sparkles, Clock, FileText, Stethoscope, MessageCircle, UserCheck } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { PROGRAMS_DATA, CONSULTATION_DATA } from '../../data/siteData';

interface ProgramDetailPageProps {
  programSlug?: string;
}

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ programSlug }) => {
  const params = useParams<{ slug: string }>();
  const slug = programSlug || params.slug;
  const { addToCart } = useCart();
  const [withFollowUp, setWithFollowUp] = useState<boolean>(false);

  const program = PROGRAMS_DATA.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const currentPriceAed = withFollowUp 
    ? (program.priceWithFollowUpAed || 550) 
    : (program.priceWithoutFollowUpAed || 350);

  const handleAddToCart = () => {
    addToCart({
      id: withFollowUp ? `${program.id}-with-followup` : `${program.id}-without-followup`,
      title: `${program.arabicTitle || program.title} (${withFollowUp ? 'مع متابعة أسبوعية' : 'بدون متابعة'})`,
      subtitle: withFollowUp ? 'ملف PDF + متابعة أسبوعية مع دانا' : 'ملف PDF فوري بدون متابعة',
      price: `${currentPriceAed} درهم إماراتي`,
      priceNumber: currentPriceAed,
      currency: 'AED',
      type: 'program',
      slug: `/programs/${program.slug}`,
      badge: withFollowUp ? 'مع متابعة' : 'بدون متابعة',
      selectedOption: withFollowUp ? 'with-followup' : 'without-followup',
    });
  };

  const handleAddBundle = () => {
    // Add programme with current selection
    handleAddToCart();

    // Add consultation bundle
    addToCart({
      id: CONSULTATION_DATA.id,
      title: CONSULTATION_DATA.name,
      subtitle: `Diagnostic Session (Bundle with ${program.arabicTitle || program.title})`,
      price: `${CONSULTATION_DATA.priceDhs} درهم إماراتي`,
      priceNumber: CONSULTATION_DATA.priceDhs,
      currency: 'AED',
      type: 'consultation',
      slug: `/packages/${CONSULTATION_DATA.slug}`,
      badge: 'Bundle Add-on',
    });
  };

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link
          to="/programs"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>الرجوع إلى جميع البرامج / Back to All Programmes</span>
        </Link>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold/30 text-brand-navy">
                  {program.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-mint/30 text-brand-navy flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{program.duration}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-1">
                {program.arabicTitle || program.title}
              </h1>
              <div className="text-lg font-bold text-brand-coral mb-3">
                {program.title}
              </div>
              <p className="text-sm font-semibold text-brand-navy/70 mb-4">
                {program.arabicSubtitle || program.subtitle}
              </p>
              <p className="text-sm sm:text-base text-brand-navy/85 leading-relaxed font-normal">
                {program.longDescription}
              </p>
            </div>

            {/* Choose Pricing Option: Without vs With Follow-up */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-mint/40 shadow-soft space-y-4">
              <h3 className="text-base font-bold text-brand-navy flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-coral" />
                <span>اختر نوع الاشتراك في البرنامج:</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Option 1: 350 AED Without Follow-up */}
                <button
                  type="button"
                  onClick={() => setWithFollowUp(false)}
                  className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between ${
                    !withFollowUp
                      ? 'border-brand-coral bg-brand-coral/5 shadow-soft-sm ring-1 ring-brand-coral'
                      : 'border-surface-border bg-surface-subtle hover:bg-white'
                  }`}
                  dir="rtl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black text-sm text-brand-navy">٣٥٠ درهم بدون متابعة</span>
                      {!withFollowUp && <Check className="w-4 h-4 text-brand-coral" />}
                    </div>
                    <p className="text-xs text-brand-navy/75 leading-relaxed">
                      ملف البرنامج السريري كامل بصيغة PDF باللغتين العربية والإنجليزية مع إمكانية التحميل الفوري.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-brand-navy/10 text-xs font-black text-brand-coral">
                    350 درهم إماراتي (تحميل فوري)
                  </div>
                </button>

                {/* Option 2: 550 AED With Follow-up */}
                <button
                  type="button"
                  onClick={() => setWithFollowUp(true)}
                  className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between ${
                    withFollowUp
                      ? 'border-brand-mint-dark bg-brand-mint/10 shadow-soft-sm ring-1 ring-brand-mint-dark'
                      : 'border-surface-border bg-surface-subtle hover:bg-white'
                  }`}
                  dir="rtl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black text-sm text-brand-navy">٥٥٠ درهم مع متابعة أسبوعية</span>
                      {withFollowUp && <Check className="w-4 h-4 text-brand-mint-dark" />}
                    </div>
                    <p className="text-xs text-brand-navy/75 leading-relaxed">
                      ملف البرنامج كامل PDF + متابعة وتوجيه أسبوعي مباشر مع أخصائية التغذية دانا بردقجي.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-brand-navy/10 text-xs font-black text-brand-mint-dark">
                    550 درهم إماراتي (مع المتابعة)
                  </div>
                </button>
              </div>
            </div>

            {/* Who is this suitable for */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-coral" />
                <span>الفئات المستهدفة لهذا البرنامج</span>
              </h3>
              <div className="space-y-3 pt-2">
                {program.suitableFor.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-navy/85">
                    <Check className="w-4 h-4 text-brand-mint-dark flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What is Included in Download Guide */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <Download className="w-5 h-5 text-brand-mint-dark" />
                <span>محتويات الدليل والملف الرقمي</span>
              </h3>
              <div className="space-y-3 pt-2">
                {program.whatsIncluded.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-navy/85">
                    <Check className="w-4 h-4 text-brand-coral flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Day Meal Schedule */}
            {program.sampleMealSchedule && program.sampleMealSchedule.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
                <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-gold" />
                  <span>نموذج ليوم غذائي مقترح من البرنامج</span>
                </h3>
                <div className="space-y-3 pt-2">
                  {program.sampleMealSchedule.map((schedule, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-surface-subtle border border-surface-border flex items-start gap-3">
                      <span className="px-2 py-1 rounded-lg bg-brand-navy text-white text-[11px] font-extrabold flex-shrink-0">
                        {schedule.timing}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-brand-navy">{schedule.meal}</h4>
                        <p className="text-xs text-brand-navy/75 mt-0.5 font-normal">{schedule.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Pricing & Digital Download Sticky Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-mint/40 shadow-soft-xl space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block mb-1">
                  {withFollowUp ? 'خطة رقمية + متابعة أسبوعية' : 'خطة رقمية كاملة (تحميل فوري)'}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-navy">{currentPriceAed}</span>
                  <span className="text-lg font-bold text-brand-navy/70">درهم إماراتي</span>
                </div>
                <span className="text-xs text-brand-navy/60 block mt-1">
                  {withFollowUp ? '٥٥٠ درهم مع متابعة أسبوعية' : '٣٥٠ درهم بدون متابعة'}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border text-xs text-brand-navy/75 space-y-2.5">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-mint-dark" />
                  <span>{program.downloadFormat}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-brand-mint-dark" />
                  <span>تحميل مباشر بصيغة PDF فور إتمام الطلب</span>
                </div>
                {withFollowUp ? (
                  <div className="flex items-center gap-2 font-bold text-brand-mint-dark">
                    <UserCheck className="w-4 h-4" />
                    <span>يشمل المتابعة الأسبوعية عبر الواتساب مع دانا</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-mint-dark" />
                    <span>دليل سريري موثوق من الأخصائية دانا بردقجي</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <a
                  href={program.gumroadUrl || '#'}
                  className="gumroad-button w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>الشراء والتحميل الفوري عبر Gumroad ({currentPriceAed} درهم)</span>
                </a>

                <button
                  onClick={handleAddToCart}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-brand-navy bg-surface-subtle hover:bg-brand-mint/20 border border-brand-navy/10 transition-colors flex items-center justify-center gap-2"
                >
                  <span>إضافة إلى سلة الموقع ({currentPriceAed} درهم)</span>
                </button>
              </div>

              {/* Add Consultation Bundle Option */}
              <div className="pt-4 border-t border-brand-navy/10">
                <div className="p-4 rounded-2xl bg-brand-gold/15 border border-brand-gold/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5 text-brand-navy" />
                      <span>إضافة استشارة سريرية خاصة</span>
                    </span>
                    <span className="text-xs font-black text-brand-navy">+{CONSULTATION_DATA.priceDhs} درهم</span>
                  </div>
                  <p className="text-[11px] text-brand-navy/75 leading-relaxed">
                    احصلي على جلسة تشخيصية وتقييم مباشر (45 دقيقة) مع دانا لمراجعة الفحوصات وتطبيق البرنامج.
                  </p>
                  <button
                    onClick={handleAddBundle}
                    className="w-full py-2 px-3 rounded-xl text-xs font-bold text-brand-navy bg-brand-gold hover:bg-white transition-colors text-center"
                  >
                    طلب البرنامج + جلسة الاستشارة ({currentPriceAed + CONSULTATION_DATA.priceDhs} درهم)
                  </button>
                </div>
              </div>

              <div className="text-center pt-1">
                <a
                  href="https://wa.me/962792222058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-navy hover:text-brand-coral transition-colors"
                >
                  هل لديك استفسار؟ تواصلي مباشرة عبر الواتساب →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
