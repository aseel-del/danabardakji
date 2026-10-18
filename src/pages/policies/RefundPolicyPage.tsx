import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';

export const RefundPolicyPage: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8 cursor-pointer"
        >
          <GoogleIcon name={isRTL ? "arrow_forward" : "arrow_back"} className="text-base" />
          <span>{isRTL ? 'الرجوع إلى الرئيسية' : 'Back to Home'}</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-surface-border shadow-soft space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-2">
              <GoogleIcon name="published_with_changes" className="text-xs" />
              <span>{isRTL ? 'الشفافية وحماية المراجعين' : 'Client Protection & Transparency'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-2">
              {isRTL ? 'سياسة الاسترجاع والإلغاء' : 'Refund & Cancellation Policy'}
            </h1>
            <p className="text-xs text-brand-navy/60">
              {isRTL ? 'آخر تحديث: أكتوبر 2026' : 'Last Updated: October 2026'}
            </p>
          </div>

          <div className="space-y-6 text-sm text-brand-navy/85 leading-relaxed font-normal">
            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '1. باقات المتابعة الشخصية (4، 9، 12 أسبوعاً)' : '1. Personalized Clinical Packages (4, 9, 12 Weeks)'}
              </h2>
              <p>
                {isRTL 
                  ? 'نظراً للطبيعة الفردية التخصصية للعلاج الغذائي الإكلينيكي، تتطلب الباقات دراسة مفصلة للحالة وتحليلاً للفحوصات وإعداد خطة غذائية خاصة بك من قِبل دانا بردقجي.'
                  : 'Due to the bespoke nature of personalized medical nutrition therapy, our clinical packages involve extensive case preparation, laboratory analysis, and customized diet formulation by Dana Bardakji.'}
              </p>
              <ul className={`list-disc ${isRTL ? 'pr-5' : 'pl-5'} mt-2 space-y-1.5 text-xs text-brand-navy/80`}>
                <li>
                  <strong>{isRTL ? 'قبل صياغة الخطة الغذائية:' : 'Prior to Plan Formulation:'}</strong> {isRTL ? 'إذا طلبت الإلغاء قبل بدء إعداد خطتك الشخصية (خلال 12 ساعة من الشراء)، يحق لك استرداد المبلغ كاملاً مخصوماً منه رسوم بوابة الدفع الإلكترونية 5%.' : 'If you request a cancellation before Dana begins drafting your personalized plan (within 12 hours of purchase), a full refund minus a 5% administrative gateway fee is granted.'}
                </li>
                <li>
                  <strong>{isRTL ? 'بعد تسليم الخطة وبدء المتابعة:' : 'After Plan Delivery:'}</strong> {isRTL ? 'بمجرد تسليم الخطة الغذائية المخصصة وبدء المتابعة الأسبوعية، تكون الرسوم غير قابلة للاسترجاع.' : 'Once the custom dietary plan has been delivered and weekly consultations have initiated, fees are non-refundable.'}
                </li>
                <li>
                  <strong>{isRTL ? 'تجميد الاشتراك (Freeze):' : 'Freezes & Pauses:'}</strong> {isRTL ? 'في حال حدوث سفر طارئ أو ظرف صحي، يمكنك تجميد باقتك النشطة لمدة تصل إلى 30 يوماً بإشعار مسبق عبر واتساب.' : 'If you experience unexpected travel, illness, or medical emergencies, you may freeze your active package for up to 30 days upon written notice.'}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '2. جلسات الاستشارة الفردية ($50 USD)' : '2. One-on-One Consultations ($50 USD)'}
              </h2>
              <p>
                {isRTL 
                  ? 'يمكن تعديل موعد الجلسة أو إلغاؤها قبل 24 ساعة من الموعد المحدد بدون أي رسوم. الإلغاء قبل أقل من 24 ساعة يخضع لرسوم إعادة جدولة بنسبة 50%.'
                  : 'Consultation appointments can be rescheduled or canceled up to 24 hours prior to the scheduled session without penalty. Cancellations made with less than 24 hours notice are subject to a 50% re-booking fee.'}
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '3. الكتيبات والبرامج الرقمية (تحميل فوري بصيغة PDF)' : '3. Digital Download Guides (Liquid Diet, Gut Reset, etc.)'}
              </h2>
              <p>
                {isRTL 
                  ? 'نظراً لأن الكتيبات والملفات الرقمية يتم تسليمها فورياً وتنزيلها بمجرد إتمام الدفع ولا يمكن إرجاعها، فإن مبيعات البرامج الرقمية نهائية وغير قابلة للاسترداد. إذا واجهت أي صعوبة تقنية في تحميل الملفات، سيعيد فريق الدعم إرسال روابط الوصول المباشرة إليك فوراً.'
                  : 'Because digital PDF products and handbooks are delivered instantly upon purchase and cannot be returned, all digital guide purchases are final and non-refundable. If you experience technical difficulties downloading your files, our support team will promptly email you fresh access links.'}
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '4. التواصل والاستفسارات' : '4. Contact & Inquiries'}
              </h2>
              <p>
                {isRTL ? 'لأي استفسار بخصوص المواعيد أو الاشتراكات، يمكنك التواصل معنا عبر البريد الإلكتروني: ' : 'For refund or rescheduling requests, please email '}
                <a href="mailto:hello@danabardakji.com" className="text-brand-coral font-bold underline">
                  hello@danabardakji.com
                </a>
                {isRTL ? ' أو مراسلتنا مباشرة عبر واتساب على الرقم ' : ' or message via WhatsApp at '}
                <span dir="ltr" className="font-bold text-brand-navy">(+962 7 9222 2058)</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
