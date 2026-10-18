import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';
import { PROGRAMS_DATA } from '../../data/siteData';

interface ProgramDetailPageProps {
  programSlug?: string;
}

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ programSlug }) => {
  const params = useParams<{ slug: string }>();
  const slug = programSlug || params.slug;
  const { isRTL, t } = useLanguage();
  const [withFollowUp, setWithFollowUp] = useState<boolean>(false);

  const program = PROGRAMS_DATA.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const currentPriceAed = withFollowUp 
    ? (program.priceWithFollowUpAed || 550) 
    : (program.priceWithoutFollowUpAed || 350);

  const title = isRTL ? (program.arabicTitle || program.title) : program.title;
  const subtitle = isRTL ? (program.arabicSubtitle || program.subtitle) : program.subtitle;
  const currencyText = isRTL ? 'درهم إماراتي' : 'AED';

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8"
        >
          <GoogleIcon name={isRTL ? "arrow_forward" : "arrow_back"} className="text-base" />
          <span>{isRTL ? 'الرجوع إلى جميع البرامج والكتيبات' : 'Back to All Protocols'}</span>
        </Link>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-brand-coral/15 text-brand-coral">
                  {program.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-surface-subtle text-brand-navy/70 border border-brand-navy/10">
                  {program.duration}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-2">
                {title}
              </h1>
              <p className="text-sm font-semibold text-brand-navy/70 mb-4">
                {subtitle}
              </p>
              <p className="text-sm sm:text-base text-brand-navy/85 leading-relaxed font-normal">
                {program.longDescription}
              </p>
            </div>

            {/* Choose Pricing Option: Without vs With Follow-up */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-mint/40 shadow-soft space-y-4">
              <h3 className="text-base font-bold text-brand-navy flex items-center gap-2">
                <GoogleIcon name="tune" className="text-brand-coral text-lg" />
                <span>{isRTL ? 'اختر نوع الاشتراك في البرنامج:' : 'Select Your Protocol Tier:'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Option 1: 350 AED Without Follow-up */}
                <button
                  type="button"
                  onClick={() => setWithFollowUp(false)}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer ${
                    !withFollowUp
                      ? 'border-brand-coral bg-brand-coral/5 shadow-soft-sm ring-2 ring-brand-coral/20'
                      : 'border-surface-border bg-surface-subtle hover:bg-white'
                  } ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-sm text-brand-navy">
                        {isRTL ? '350 درهم بدون متابعة' : '350 AED Without Follow-up'}
                      </span>
                      {!withFollowUp && <GoogleIcon name="check_circle" className="text-brand-coral text-base" filled />}
                    </div>
                    <p className="text-xs text-brand-navy/75 leading-relaxed">
                      {isRTL 
                        ? 'ملف البرنامج السريري كامل بصيغة PDF باللغتين مع إمكانية التحميل الفوري بعد الدفع.'
                        : 'Complete clinical protocol guide in PDF format with instant digital download.'}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-brand-navy/10 text-xs font-black text-brand-coral">
                    350 {currencyText} ({isRTL ? 'تحميل فوري' : 'Instant Access'})
                  </div>
                </button>

                {/* Option 2: 550 AED With Follow-up */}
                <button
                  type="button"
                  onClick={() => setWithFollowUp(true)}
                  className={`p-4 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer ${
                    withFollowUp
                      ? 'border-brand-navy bg-brand-navy/5 shadow-soft-sm ring-2 ring-brand-navy/20'
                      : 'border-surface-border bg-surface-subtle hover:bg-white'
                  } ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-sm text-brand-navy">
                        {isRTL ? '550 درهم مع متابعة أسبوعية' : '550 AED With Weekly Follow-up'}
                      </span>
                      {withFollowUp && <GoogleIcon name="check_circle" className="text-brand-navy text-base" filled />}
                    </div>
                    <p className="text-xs text-brand-navy/75 leading-relaxed">
                      {isRTL 
                        ? 'ملف البرنامج كامل PDF + متابعة وتوجيه أسبوعي مباشر عبر واتساب مع دانة بردقجي.'
                        : 'Full PDF Protocol Guide + direct weekly WhatsApp accountability check-ins with Dana.'}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-brand-navy/10 text-xs font-black text-brand-navy">
                    550 {currencyText} ({isRTL ? 'مع المتابعة' : 'With Check-ins'})
                  </div>
                </button>
              </div>
            </div>

            {/* Who is this suitable for */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <GoogleIcon name="groups" className="text-brand-coral text-lg" />
                <span>{isRTL ? 'الفئات المستهدفة لهذا البرنامج' : 'Who This Protocol Is Designed For'}</span>
              </h3>
              <div className="space-y-3 pt-2">
                {program.suitableFor.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-navy/85">
                    <div className="w-5 h-5 rounded-full bg-brand-mint/25 text-brand-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GoogleIcon name="check" className="text-xs font-bold" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What is Included */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <GoogleIcon name="checklist" className="text-brand-coral text-lg" />
                <span>{isRTL ? 'محتويات الدليل والملف الرقمي' : "What's Included in the Clinical Guide"}</span>
              </h3>
              <div className="space-y-3 pt-2">
                {program.whatsIncluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-navy/85">
                    <div className="w-5 h-5 rounded-full bg-brand-mint/25 text-brand-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GoogleIcon name="check" className="text-xs font-bold" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Checkout & Sticky Sidebar */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-mint/40 shadow-soft-xl space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block mb-1">
                  {withFollowUp 
                    ? (isRTL ? 'البرنامج + متابعة أسبوعية' : 'Protocol Guide + Weekly Follow-up') 
                    : (isRTL ? 'البرنامج الرقمي (تحميل فوري)' : 'Digital Protocol Guide (Instant Download)')}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-navy">{currentPriceAed}</span>
                  <span className="text-lg font-bold text-brand-navy/70">{currencyText}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border text-xs text-brand-navy/80 space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <GoogleIcon name="description" className="text-brand-mint-dark text-base" />
                  <span>{isRTL ? 'دليل إرشادي وجدول وجبات متكامل بصيغة PDF' : 'Complete Meal Schedules & Guidelines in PDF'}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GoogleIcon name="download" className="text-brand-mint-dark text-base" />
                  <span>{isRTL ? 'تحميل مباشر فور إتمام الطلب' : 'Instant Direct Download Post-Payment'}</span>
                </div>
                {withFollowUp ? (
                  <div className="flex items-center gap-2.5 font-bold text-brand-navy">
                    <GoogleIcon name="support_agent" className="text-brand-mint-dark text-base" />
                    <span>{isRTL ? 'متابعة أسبوعية مستمرة عبر واتساب مع دانة' : 'Direct weekly WhatsApp accountability with Dana'}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2.5">
                    <GoogleIcon name="verified" className="text-brand-mint-dark text-base" />
                    <span>{isRTL ? 'دليل سريري موثوق من الأخصائية دانة بردقجي' : 'Clinical guide certified by Dana Bardakji'}</span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <a
                  href={program.gumroadUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all flex items-center justify-center gap-2 cursor-pointer text-center group"
                >
                  <span>
                    {isRTL 
                      ? `الحصول على البرنامج (${currentPriceAed} درهم)` 
                      : `Get Protocol (${currentPriceAed} AED)`}
                  </span>
                  <GoogleIcon 
                    name={isRTL ? "arrow_back" : "arrow_forward"} 
                    className={`text-base transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} 
                  />
                </a>
              </div>

              <div className="text-center pt-2">
                <a
                  href="https://wa.me/962792222058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-navy hover:text-brand-coral transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{isRTL ? 'استفسار عبر واتساب' : 'Questions? Chat on WhatsApp'}</span>
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
