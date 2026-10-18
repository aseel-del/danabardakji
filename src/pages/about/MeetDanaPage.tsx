import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';

export const MeetDanaPage: React.FC = () => {
  const { isRTL } = useLanguage();

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
            {isRTL ? 'المؤهلات العلمية والمسيرة المهنية' : 'Clinical Background & Career Journey'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            {isRTL ? 'عن الأخصائية دانة بردقجي' : 'Meet Dana Bardakji'}
          </h1>
          <p className="text-base text-brand-navy/80 leading-relaxed max-w-3xl font-normal">
            {isRTL 
              ? 'أخصائية تغذية علاجية معتمدة بمؤهلات أكاديمية وسريرية من الجامعة الأردنية وجامعة ستون بريدج في المملكة المتحدة، مكرسة للرعاية القائمة على البراهين العلمية ونمط الحياة الواقعي.'
              : 'Certified Dietitian with academic and clinical credentials from the University of Jordan and Stone Bridge University UK, dedicated to evidence-based nutrition and practical living.'}
          </p>
        </div>

        {/* Biography & Key Milestones */}
        <div className="space-y-8">
          
          {/* Milestone 1: Education */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-brand-mint/20 text-brand-navy flex items-center justify-center flex-shrink-0">
              <GoogleIcon name="school" className="text-2xl text-brand-mint-dark" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-mint-dark">
                {isRTL ? 'المؤهلات الأكاديمية' : 'Academic Credentials'}
              </span>
              <h3 className="text-xl font-extrabold text-brand-navy">
                {isRTL ? 'بكالوريوس ودبلوم عالي بريطاني في التغذية العلاجية' : 'B.Sc. & UK Clinical Higher Diploma'}
              </h3>
              <p className="text-sm text-brand-navy/80 leading-relaxed font-normal">
                {isRTL 
                  ? 'حصلت دانة على درجة البكالوريوس في التغذية وتكنولوجيا الغذاء من الجامعة الأردنية، تلاها دبلوم عالي في العلاجات الغذائية السريرية من جامعة ستون بريدج في المملكة المتحدة (Stone Bridge University - UK).'
                  : 'Dana earned her Bachelor of Science degree in Nutrition and Food Technology from the University of Jordan, followed by a post-graduate Higher Diploma in Clinical Nutritional Treatments from Stone Bridge University in the United Kingdom.'}
              </p>
            </div>
          </div>

          {/* Milestone 2: Women & Obstetrics */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-brand-coral/15 text-brand-coral flex items-center justify-center flex-shrink-0">
              <GoogleIcon name="medical_services" className="text-2xl text-brand-coral" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-coral">
                {isRTL ? 'الخبرة الإكلينيكية في أبوظبي' : 'Clinical Practice in Abu Dhabi'}
              </span>
              <h3 className="text-xl font-extrabold text-brand-navy">
                {isRTL ? 'مركز طبي متخصص بأمراض النساء والولادة' : 'Women & Obstetrics Medical Center'}
              </h3>
              <p className="text-sm text-brand-navy/80 leading-relaxed font-normal">
                {isRTL 
                  ? 'بدأت مسيرتها المهنية في أبوظبي بدولة الإمارات كأخصائية تغذية في مركز طبي رائد لأمراض النساء والتوليد. صقلت خبرتها العملية بتصميم برامج علاجية مخصصة للسكري، سكري الحمل، ارتفاع ضغط الدم، الكوليسترول، حساسية الطعام، سوء تغذية الأطفال، وما بعد عمليات التكميم والسمنة.'
                  : 'She started her professional career in Abu Dhabi–UAE as a specialized dietitian in a premier Women and Obstetrics medical center. Her hands-on expertise was strongly forged through developing customized therapeutic plans for patients with diabetes, gestational diabetes, hypertension, high cholesterol, food allergies, pediatric malnutrition, and morbid obesity.'}
              </p>
            </div>
          </div>

          {/* Milestone 3: NutriCenter */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-brand-gold/25 text-brand-navy flex items-center justify-center flex-shrink-0">
              <GoogleIcon name="domain" className="text-2xl text-brand-navy" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                {isRTL ? 'المؤسس المشارك في عمّان' : 'Amman Founder'}
              </span>
              <h3 className="text-xl font-extrabold text-brand-navy">
                {isRTL ? 'تأسيس نيوترسنتر NutriCenter للاستشارات الغذائية' : 'Co-Founder of NutriCenter'}
              </h3>
              <p className="text-sm text-brand-navy/80 leading-relaxed font-normal">
                {isRTL 
                  ? 'انطلاقاً من رسالتها في نشر الوعي الصحي الأسري، شاركت دانة في تأسيس NutriCenter في عمّان–الأردن، لتقديم الاستشارات الغذائية للعائلات، وتدريب الكوادر، والمتابعة الإكلينيكية المستمرة.'
                  : 'Continuing her mission to empower families with practical health education, Dana co-founded NutriCenter in Amman–Jordan, providing family consultations, specialized training, and clinical metabolic monitoring.'}
              </p>
            </div>
          </div>

          {/* Milestone 4: Books & Media */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-brand-navy/10 text-brand-navy flex items-center justify-center flex-shrink-0">
              <GoogleIcon name="menu_book" className="text-2xl text-brand-navy" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60">
                {isRTL ? 'مؤلفة وإعلامية معتمدة' : 'Published Author & Media'}
              </span>
              <h3 className="text-xl font-extrabold text-brand-navy">
                {isRTL ? 'مؤلفة كتابين وظهور إعلامي عربي واسع' : '2 Published Books & Media Voice'}
              </h3>
              <p className="text-sm text-brand-navy/80 leading-relaxed font-normal">
                {isRTL 
                  ? 'ألفت دانة كتابين واسعي الانتشار: "100 سؤال وجواب في التغذية" و"خرافات الحميات"، لتصحيح المفاهيم الخاطئة وتوضيح العادات الصحية القائمة على الأبحاث. وحلت ضيفة خبيرة على كبرى البرامج التلفزيونية والإذاعية في عمّان وأبوظبي.'
                  : 'Dana has authored two widely read books: “100 Questions and answers in Nutrition” and “Myths in Dieting”, debunking fads and clarifying evidence-based habits. She has been a regular invited guest expert on major TV and radio programs in Amman and Abu Dhabi.'}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-brand-navy text-white text-center space-y-4">
          <h3 className="text-2xl font-extrabold text-white">
            {isRTL ? 'ابدأ رحلتك الصحية مباشرة مع دانة' : 'Work Directly with Dana'}
          </h3>
          <p className="text-sm text-brand-mint max-w-xl mx-auto">
            {isRTL 
              ? 'اختبر فرق المتابعة السريرية الدقيقة القائمة على تحاليلك واحتياجاتك الفردية.'
              : 'Experience the difference of evidence-based clinical dietary guidance tailored specifically to you.'}
          </p>
          <div className="pt-2">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider bg-brand-coral hover:bg-brand-coral-dark text-white shadow-soft transition-all"
            >
              <span>{isRTL ? 'استعراض باقات المتابعة' : 'Explore Consultation Packages'}</span>
              <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-sm" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
