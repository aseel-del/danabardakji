import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';

export const TermsPage: React.FC = () => {
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
              <GoogleIcon name="gavel" className="text-xs" />
              <span>{isRTL ? 'الشروط القانونية وإخلاء المسؤولية' : 'Legal Terms & Disclaimers'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-2">
              {isRTL ? 'شروط الخدمة وإخلاء المسؤولية الطبية' : 'Terms of Service & Clinical Disclaimer'}
            </h1>
            <p className="text-xs text-brand-navy/60">
              {isRTL ? 'آخر تحديث: أكتوبر 2026' : 'Last Updated: October 2026'}
            </p>
          </div>

          <div className="space-y-6 text-sm text-brand-navy/85 leading-relaxed font-normal">
            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '1. إخلاء المسؤولية الطبية والعلاجية' : '1. Medical & Nutritional Therapy Disclaimer'}
              </h2>
              <p>
                {isRTL 
                  ? 'دانة بردقجي أخصائية تغذية علاجية معتمدة (بكالوريوس تغذية وتكنولوجيا غذاء ودبلوم عالي بريطاني). الخطط الغذائية والاستشارات والبرامج المقدمة مصممة للعلاج الغذائي الإكلينيكي وبناء نمط حياة صحي. ولا تُعد بديلاً عن الرعاية الطبية الطارئة أو التدخلات الدوائية والجراحية التي يقررها طبيبك المعالج.'
                  : 'Dana Bardakji is a certified Clinical Dietitian (B.Sc. Nutrition & UK Higher Diploma). The nutritional plans, protocols, and consultations provided are designed for clinical dietary therapy, habit formation, and wellness guidance. They are not intended as a substitute for acute emergency medical care, emergency pharmacological interventions, or surgical diagnoses.'}
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '2. مسؤولية المراجع والإفصاح الصحي' : '2. Patient Responsibility & Health Disclosures'}
              </h2>
              <p>
                {isRTL 
                  ? 'يوافق المشترك على تقديم معلومات صحية وتاريخ مرضي دقيق وقائمة الأدوية الموصوفة له وأي حالات خاصة (مثل أمراض الكلى، السكري، أو الحمل)، لضمان أن تكون التوصيات الغذائية آمنة وفعالة بالكامل. ويجب دائماً إخطار طبيبك المعالج بأي تغييرات جذرية في نظامك الغذائي.'
                  : 'Clients agree to provide accurate medical histories, current medication lists, and disclosure of pre-existing conditions (e.g. renal disease, type-1 diabetes, pregnancy) to ensure dietary recommendations are safe and effective. You should always notify your primary care physician of significant dietary changes.'}
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '3. حقوق الملكية الفكرية' : '3. Intellectual Property Rights'}
              </h2>
              <p>
                {isRTL 
                  ? 'جميع كتيبات الوجبات بصيغة PDF، الأدلة العلاجية، والكتب التي ألفتها دانة بردقجي محمية بموجب قوانين الملكية الفكرية وحقوق النشر الدولية. النسخ التي يتم شراؤها مرخصة حصراً للاستخدام الشخصي للمشتري ولا يجوز إعادة بيعها أو توزيعها أو نشرها.'
                  : 'All digital meal plan PDFs, protocol guides, and books authored by Dana Bardakji are protected by international copyright law. Guides purchased are licensed strictly for personal, non-commercial use by the single buyer and may not be distributed, published, or re-sold.'}
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">
                {isRTL ? '4. القانون المعمول به' : '4. Governing Law'}
              </h2>
              <p>
                {isRTL 
                  ? 'تخضع هذه الشروط وتفسر وفقاً للأنظمة واللوائح الطبية المعمول بها في المملكة الأردنية الهاشمية ودولة الإمارات العربية المتحدة.'
                  : 'These terms are governed by the laws and medical regulations of the Hashemite Kingdom of Jordan and the United Arab Emirates.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
