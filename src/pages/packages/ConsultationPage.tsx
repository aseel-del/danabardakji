import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';
import { CONSULTATION_DATA } from '../../data/siteData';

export const ConsultationPage: React.FC = () => {
  const { isRTL } = useLanguage();

  const [consultationMode, setConsultationMode] = useState('Online Video Call (Zoom / Google Meet)');
  const [preferredTime, setPreferredTime] = useState('Morning (09:00 - 12:00)');

  const handleWhatsAppBooking = () => {
    const text = isRTL
      ? `مرحباً دانة، أود حجز جلسة استشارة سريرية فردية ($50 / 185 درهم).\nطريقة الجلسة: ${consultationMode}\nالوقت المفضل: ${preferredTime}`
      : `Hello Dana, I would like to book a 1-on-1 clinical consultation ($50 USD / 185 AED).\nMode: ${consultationMode}\nPreferred Time: ${preferredTime}`;
    const url = `https://api.whatsapp.com/send?phone=962792222058&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const gumroadUrl = 'https://danabardakji.gumroad.com/l/one-on-one-consultation';

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link
          to="/packages"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8 cursor-pointer"
        >
          <GoogleIcon name={isRTL ? "arrow_forward" : "arrow_back"} className="text-base" />
          <span>{isRTL ? 'الرجوع إلى باقات الاشتراك' : 'Back to Packages'}</span>
        </Link>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-coral/15 text-brand-coral mb-3 inline-block">
                {isRTL ? 'جلسة تقييم سريري مباشرة' : 'Direct Clinical Session'}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
                {isRTL ? 'جلسة استشارة سريرية فردية (1-on-1)' : CONSULTATION_DATA.name}
              </h1>
              <p className="text-base text-brand-navy/80 leading-relaxed font-normal">
                {isRTL 
                  ? 'جلسة تشخيصية إكلينيكية متعمقة لتقييم تاريخك الصحي، الفحوصات المخبرية، نمط الحياة، والأهداف العلاجية مع الأخصائية دانة بردقجي.'
                  : CONSULTATION_DATA.description}
              </p>
              <div className="mt-3 p-3.5 rounded-xl bg-brand-coral/10 border border-brand-coral/20 text-xs text-brand-coral font-bold flex items-center gap-2">
                <GoogleIcon name="info" className="text-base flex-shrink-0" />
                <span>
                  {isRTL 
                    ? '* الجلسة لا تتضمن خطة وجبات مكتوبة مفصلة. مثالية للتشخيص الأولي، تقييم الفحوصات، أو الحصول على رأي طبي تخصصي ثانٍ.'
                    : CONSULTATION_DATA.note}
                </span>
              </div>
            </div>

            {/* What is Included */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <GoogleIcon name="checklist" className="text-brand-mint-dark text-lg" />
                <span>{isRTL ? 'ماذا تتضمن الجلسة الاستشارية؟' : 'What Happens During Your Consultation'}</span>
              </h3>
              <div className="space-y-3 pt-2">
                {(isRTL ? [
                  'جلسة خاصة مدتها 45-60 دقيقة عبر الفيديو المباشر أو وجهاً لوجه',
                  'تحليل سريري للفحوصات المخبرية والتاريخ الطبي والوراثي',
                  'تحديد النواقص الغذائية والكتل الأيضية المعيقة لنزول الوزن',
                  'توصيات علاجية ومكملات غذائية مخصصة لحالتك',
                  'خطة عمل واضحة وتوجيهات عملية فورية لتطبيقها',
                ] : CONSULTATION_DATA.features).map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-navy/85">
                    <div className="w-5 h-5 rounded-full bg-brand-mint/25 text-brand-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GoogleIcon name="check" className="text-xs font-bold" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Session Format */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-base font-bold text-brand-navy">
                {isRTL ? 'خيارات إتمام الجلسة' : 'Consultation Delivery Options'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border space-y-2">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <GoogleIcon name="videocam" className="text-brand-coral text-lg" />
                    <span>{isRTL ? 'أونلاين حول العالم (فيديو مباشر)' : 'Online Worldwide (HD Video)'}</span>
                  </div>
                  <p className="text-xs text-brand-navy/70 leading-relaxed font-normal">
                    {isRTL 
                      ? 'جلسة فيديو خاصة وآمنة عبر Zoom أو Google Meet، يمكنك الانضمام إليها من أي دولة.'
                      : 'Secure private video consultation via Google Meet or Zoom. Accessible from anywhere in the world.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border space-y-2">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <GoogleIcon name="calendar_month" className="text-brand-mint-dark text-lg" />
                    <span>{isRTL ? 'عيادة حضورية (عمّان / أبوظبي)' : 'In-Person Clinic (Amman / Abu Dhabi)'}</span>
                  </div>
                  <p className="text-xs text-brand-navy/70 leading-relaxed font-normal">
                    {isRTL 
                      ? 'متاحة بموعد مسبق في المراكز الطبية الشريكة في عمّان (الأردن) وأبوظبي (الإمارات).'
                      : 'Available by appointment at partner clinical centers in Amman (Jordan) and Abu Dhabi (UAE).'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-coral/30 shadow-soft-xl space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block mb-1">
                  {isRTL ? `جلسة فردية (${CONSULTATION_DATA.duration})` : `1-on-1 Clinical Session (${CONSULTATION_DATA.duration})`}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-navy">
                    {isRTL ? '50$' : '$50'}
                  </span>
                  <span className="text-lg font-bold text-brand-navy/70">USD</span>
                  <span className="text-xs font-semibold text-brand-navy/50">
                    {isRTL ? '(185 درهم إماراتي)' : '(~185 AED)'}
                  </span>
                </div>
              </div>

              {/* Booking Intake Inputs */}
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    {isRTL ? 'طريقة عقد الاستشارة' : 'Consultation Mode'}
                  </label>
                  <select
                    value={consultationMode}
                    onChange={(e) => setConsultationMode(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/15 text-xs text-brand-navy bg-surface-subtle focus:bg-white focus:outline-none"
                  >
                    <option value="Online Video Call (Zoom / Google Meet)">
                      {isRTL ? 'فيديو أونلاين (Zoom / Google Meet)' : 'Online Video Call (Zoom / Google Meet)'}
                    </option>
                    <option value="In-Person Clinic (Amman / Abu Dhabi)">
                      {isRTL ? 'عيادة حضورية (عمّان / أبوظبي)' : 'In-Person Clinic (Amman / Abu Dhabi)'}
                    </option>
                    <option value="Direct Audio / Phone Call">
                      {isRTL ? 'مكالمة صوتية مباشرة' : 'Direct Audio / Phone Call'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    {isRTL ? 'الوقت المفضل للجلسة' : 'Preferred Time of Day'}
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/15 text-xs text-brand-navy bg-surface-subtle focus:bg-white focus:outline-none"
                  >
                    <option value="Morning (09:00 - 12:00 GMT+3)">
                      {isRTL ? 'صباحاً (09:00 - 12:00 بتوقيت الخليج)' : 'Morning (09:00 - 12:00 GMT+3)'}
                    </option>
                    <option value="Afternoon (12:00 - 16:00 GMT+3)">
                      {isRTL ? 'ظهراً (12:00 - 16:00 بتوقيت الخليج)' : 'Afternoon (12:00 - 16:00 GMT+3)'}
                    </option>
                    <option value="Evening (16:00 - 20:00 GMT+3)">
                      {isRTL ? 'مساءً (16:00 - 20:00 بتوقيت الخليج)' : 'Evening (16:00 - 20:00 GMT+3)'}
                    </option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border text-xs text-brand-navy/75 space-y-2">
                <div className="flex items-center gap-2">
                  <GoogleIcon name="schedule" className="text-brand-mint-dark text-base" />
                  <span>{isRTL ? 'المدة: 45 - 60 دقيقة تقييم مباشر' : 'Duration: 45 - 60 Minutes Dedicated Session'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GoogleIcon name="verified" className="text-brand-mint-dark text-base" />
                  <span>{isRTL ? 'تأكيد الموعد الدقيق فورياً عبر واتساب' : 'Dana will confirm exact slot on WhatsApp'}</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>
                    {isRTL ? 'حجز الجلسة والدفع عبر المتجر' : 'Book Session via Gumroad'}
                  </span>
                  <GoogleIcon name="arrow_outward" className="text-base" />
                </a>

                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full py-3.5 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider text-brand-navy bg-brand-mint/20 hover:bg-brand-mint/40 border border-brand-mint transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GoogleIcon name="chat" className="text-base text-emerald-600" />
                  <span>{isRTL ? 'تنسيق الموعد عبر واتساب مباشرة' : 'Coordinate via WhatsApp'}</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href="https://wa.me/962792222058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-navy hover:text-brand-coral transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{isRTL ? 'رقم العيادة المباشر:' : 'Direct Clinic WhatsApp:'}</span>
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
