import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';

export const PrivacyPolicyPage: React.FC = () => {
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
              <GoogleIcon name="lock" className="text-xs" />
              <span>{isRTL ? 'أمن البيانات والسرية الطبية' : 'Data Security & Medical Privacy'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-2">
              {isRTL ? 'سياسة الخصوصية والسرية الطبية' : 'Privacy Policy & Medical Confidentiality'}
            </h1>
            <p className="text-xs text-brand-navy/60">
              {isRTL ? 'آخر تحديث: أكتوبر 2026' : 'Last Updated: October 2026'}
            </p>
          </div>

          <div className="space-y-6 text-sm text-brand-navy/85 leading-relaxed font-normal">
            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '1. السرية الطبية لبيانات المراجعين' : '1. Patient Medical Confidentiality'}
              </h2>
              <p>
                {isRTL 
                  ? 'تلتزم أخصائية التغذية دانا بردقجي بأعلى معايير حماية البيانات السريرية والصحية. جميع الاستبيانات، نتائج التحاليل المخبرية، قياسات مكونات الجسم، والملاحظات الغذائية التي تقدمها تعامل بسرية طبية تامة ولا تتم مشاركتها أو بيعها لأي جهة.'
                  : 'Dana Bardakji adheres to the highest standards of clinical and medical data protection. All health questionnaires, lab results, body composition data, and dietary notes you provide are held in strict medical confidence and are never shared, sold, or disclosed to third parties.'}
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '2. البيانات التي يتم جمعها' : '2. Information We Collect'}
              </h2>
              <p>
                {isRTL ? 'عند اشتراكك في باقة أو شراء برنامج رقمي أو حجز استشارة، نجمع:' : 'When you purchase a package, programme, or book a consultation, we collect:'}
              </p>
              <ul className={`list-disc ${isRTL ? 'pr-5' : 'pl-5'} mt-2 space-y-1.5 text-xs text-brand-navy/80`}>
                <li>
                  <strong>{isRTL ? 'بيانات التواصل:' : 'Contact Data:'}</strong> {isRTL ? 'الاسم الكامل، البريد الإلكتروني، ورقم الواتساب / الهاتف.' : 'Full Name, Email Address, WhatsApp / Phone Number.'}
                </li>
                <li>
                  <strong>{isRTL ? 'البيانات الصحية والسريرية:' : 'Clinical & Health Data:'}</strong> {isRTL ? 'الطول، الوزن، العمر، التاريخ المرضي، الحساسيات الغذائية، وقائمة الأدوية والمكملات.' : 'Height, weight, age, medical diagnoses, food allergies, medication history, and lifestyle patterns provided during intake.'}
                </li>
                <li>
                  <strong>{isRTL ? 'بيانات الدفع:' : 'Payment Data:'}</strong> {isRTL ? 'تتم معالجة المدفوعات بصورة آمنة ومحمية عبر منصة Gumroad العالمية المشفرة، ولا نحتفظ ببيانات بطاقتك الائتمانية على خوادمنا.' : 'Payment details are processed securely via Gumroad encrypted gateway. We do not store credit card numbers on our servers.'}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '3. كيف نستخدم بياناتك' : '3. How We Use Your Information'}
              </h2>
              <p>
                {isRTL 
                  ? 'تُستخدم بياناتك فقط لتصميم خطتك الغذائية العلاجية المخصصة، إجراء الجلسات الاستشارية، ومتابعة تطورك الصحي، وإرسال فواتير الشراء وروابط تحميل الكتيبات الرقمية.'
                  : 'Your data is used solely to formulate your personalized clinical nutrition plan, provide direct consultations, process transactions, and send order confirmation receipts and digital download files.'}
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '4. حماية وتشفير البيانات' : '4. Data Security & Retention'}
              </h2>
              <p>
                {isRTL 
                  ? 'نستخدم بروتوكول التشفير SSL 256-bit عبر كامل الموقع. تحفظ ملفات التقييم ومتابعات المراجعين في مجلدات مشفرة لا يمكن الوصول إليها إلا من قِبل الأخصائية دانا بردقجي حصراً.'
                  : 'We employ 256-bit SSL encryption across all web interactions. Your intake documents and progress check-ins are stored in encrypted client folders accessible only by certified dietitian Dana Bardakji.'}
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '5. طلب حذف أو تصدير السجلات' : '5. Inquiries & Rights'}
              </h2>
              <p>
                {isRTL 
                  ? 'يمكنك طلب نسخة من سجلاتك أو طلب حذف بياناتك بالكامل في أي وقت عبر التواصل معنا على البريد: '
                  : 'You may request a copy of your records or request complete deletion of your data at any time by contacting '}
                <a href="mailto:hello@danabardakji.com" className="text-brand-coral font-bold underline">
                  hello@danabardakji.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
