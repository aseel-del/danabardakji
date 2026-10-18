import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';

export const AboutIndexPage: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-4 border border-brand-coral/20"
          >
            <GoogleIcon name="medical_services" className="text-sm" />
            <span>{isRTL ? 'أخصائية التغذية العلاجية والسريرية' : 'Clinical Dietitian & Consultant'}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-4"
          >
            {isRTL ? 'عن دانا بردقجي' : 'About Dana Bardakji'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed font-normal"
          >
            {isRTL 
              ? 'أكثر من 15 عاماً من الممارسة الإكلينيكية بين عمّان وأبوظبي، تجمع بين بروتوكولات التغذية العلاجية الدقيقة والتوجيه السلوكي الواقعي والمستدام.'
              : 'Over 15 years of clinical practice across Amman and Abu Dhabi, blending rigorous medical nutrition therapy with empathetic, sustainable behavioral guidance.'}
          </motion.p>

          {/* Sub-Navigation Pills */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <Link
              to="/about/meet"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-brand-coral hover:text-white text-brand-navy border border-brand-navy/10 shadow-soft-xs transition-all cursor-pointer"
            >
              {isRTL ? 'عن دانا ومؤهلاتها' : 'Meet Dana & Background'}
            </Link>
            <Link
              to="/about/who"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-brand-coral hover:text-white text-brand-navy border border-brand-navy/10 shadow-soft-xs transition-all cursor-pointer"
            >
              {isRTL ? 'الحالات التي نتابعها' : 'Who She Works With'}
            </Link>
            <Link
              to="/about/more"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-brand-coral hover:text-white text-brand-navy border border-brand-navy/10 shadow-soft-xs transition-all cursor-pointer"
            >
              {isRTL ? 'أكثر من مجرد حمية' : 'More Than Nutrition'}
            </Link>
          </div>
        </div>

        {/* Hero About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Portrait Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative max-w-sm w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-mint/40 to-brand-gold/30 rounded-3xl -rotate-3 scale-105" />
              <img
                src="/dana-bardakji.jpg"
                alt="Dana Bardakji - Certified Dietitian"
                className="relative rounded-3xl shadow-soft-xl object-cover w-full h-[460px] border-4 border-white z-10"
              />
              <div className={`absolute -bottom-4 ${isRTL ? '-left-4' : '-right-4'} bg-brand-navy text-white px-5 py-3 rounded-2xl shadow-soft-lg z-20 border border-brand-mint/30`}>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold block">
                  {isRTL ? 'الخبرة السريرية' : 'Experience'}
                </span>
                <span className="text-base font-extrabold text-white">
                  {isRTL ? '+15 عاماً من الممارسة' : '15+ Years Clinical'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              {isRTL ? 'أخصائية تغذية علاجية معتمدة ومؤلفة' : 'Certified Clinical Dietitian & Author'}
            </h2>

            <p className="text-sm sm:text-base text-brand-navy/85 leading-relaxed font-normal">
              {isRTL 
                ? 'دانا بردقجي أخصائية تغذية معتمدة حاصلة على درجة البكالوريوس في التغذية وتكنولوجيا الغذاء من الجامعة الأردنية، ودبلوم عالي في العلاجات الغذائية السريرية من جامعة ستون بريدج في بريطانيا (Stone Bridge University - UK).'
                : 'Dana is a certified Dietitian with a B.Sc. degree in Nutrition and Food Technology from the University of Jordan and a higher Diploma in clinical Nutritional treatments from Stone Bridge University- UK.'}
            </p>

            <p className="text-sm sm:text-base text-brand-navy/85 leading-relaxed font-normal">
              {isRTL 
                ? 'بدأت مسيرتها المهنية في أبوظبي بدولة الإمارات العربية المتحدة كأخصائية تغذية متخصصة في مركز طبي لأمراض النساء والتوليد، حيث صممت خططاً علاجية مخصصة للأمراض المزمنة مثل السكري، ارتفاع ضغط الدم، الكوليسترول، حساسية الطعام، سوء تغذية الأطفال، والمتابعة بعد جراحات السمنة.'
                : 'She started her career in Abu Dhabi–UAE as a specialized dietitian in Women and Obstetrics medical center, developing customized dietary plans particularly associated with diseases such as diabetes, high blood pressure, high cholesterol, food allergies, children malnutrition, and post-bariatric recovery.'}
            </p>

            <p className="text-sm sm:text-base text-brand-navy/85 leading-relaxed font-normal">
              {isRTL 
                ? 'واصلت دانا مسيرتها بتأسيس NutriCenter في عمّان لتقديم الاستشارات الغذائية العائلية، كما ألفت كتابين معتمدين: "100 سؤال وجواب في التغذية" و"خرافات الحميات"، مع ظهور إعلامي مستمر عبر المحطات التلفزيونية والإذاعية العربية.'
                : 'Dana continued her path by co-founding NutriCenter in Amman-Jordan for family nutritional consultations and has authored two acclaimed books: “100 Questions and answers in Nutrition” and “Myths in Dieting”, alongside frequent appearances on TV and radio.'}
            </p>

            {/* Sub-page Navigation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-brand-navy/10">
              <Link
                to="/about/meet"
                className="p-4 rounded-2xl bg-white hover:bg-surface-subtle border border-surface-border hover:border-brand-coral shadow-soft-xs transition-all group"
              >
                <GoogleIcon name="badge" className="text-2xl text-brand-coral mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-extrabold text-brand-navy group-hover:text-brand-coral flex items-center justify-between">
                  <span>{isRTL ? 'عن دانا ومؤهلاتها' : 'Meet Dana'}</span>
                  <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-xs" />
                </h4>
                <p className="text-[11px] text-brand-navy/60 mt-1">
                  {isRTL ? 'الشهادات والكتب المطبوعة' : 'Credentials & Books'}
                </p>
              </Link>

              <Link
                to="/about/who"
                className="p-4 rounded-2xl bg-white hover:bg-surface-subtle border border-surface-border hover:border-brand-mint-dark shadow-soft-xs transition-all group"
              >
                <GoogleIcon name="medical_services" className="text-2xl text-brand-mint-dark mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-extrabold text-brand-navy group-hover:text-brand-mint-dark flex items-center justify-between">
                  <span>{isRTL ? 'الحالات التي نتابعها' : 'Who She Works With'}</span>
                  <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-xs" />
                </h4>
                <p className="text-[11px] text-brand-navy/60 mt-1">
                  {isRTL ? 'التخصصات العلاجية السريرية' : 'Clinical Specialties'}
                </p>
              </Link>

              <Link
                to="/about/more"
                className="p-4 rounded-2xl bg-white hover:bg-surface-subtle border border-surface-border hover:border-brand-gold shadow-soft-xs transition-all group"
              >
                <GoogleIcon name="eco" className="text-2xl text-brand-gold mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-extrabold text-brand-navy group-hover:text-brand-gold flex items-center justify-between">
                  <span>{isRTL ? 'أكثر من مجرد حمية' : 'More Than Nutrition'}</span>
                  <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-xs" />
                </h4>
                <p className="text-[11px] text-brand-navy/60 mt-1">
                  {isRTL ? 'فلسفة العيش والعادات المستدامة' : 'Philosophy & Habits'}
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
