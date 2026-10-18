import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { GoogleIcon } from './common/GoogleIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { isRTL, t } = useLanguage();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 border-t border-brand-navy/30 relative overflow-hidden">
      {/* Decorative gradient glow in background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-mint/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          
          {/* Brand & Bio Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <img
                src="/logo-light.svg"
                alt="Dana Bardakji - Certified Clinical Dietitian"
                className="h-12 w-auto object-contain"
              />
            </Link>
            
            <p className="text-white/75 text-sm leading-relaxed max-w-sm font-normal">
              {t('footer.aboutText')}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/danabardakji/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-coral text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-soft-sm"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/danabardakji/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-soft-sm"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@danabardakji.com"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-mint-dark text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-soft-sm"
                aria-label="Email Dana"
              >
                <GoogleIcon name="mail" className="text-xl" />
              </a>
            </div>
          </div>

          {/* Packages & Booking Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              {isRTL ? 'باقات الاشتراك والمتابعة' : 'Packages & Booking'}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li>
                <Link to="/packages" className="hover:text-brand-coral transition-colors">
                  {isRTL ? 'جميع باقات الاشتراك' : 'All Packages Overview'}
                </Link>
              </li>
              <li>
                <Link to="/packages/standard" className="hover:text-brand-coral transition-colors">
                  {isRTL ? 'الباقة الأساسية — 4 أسابيع (550 درهم)' : 'Standard — 4 Weeks (550 AED)'}
                </Link>
              </li>
              <li>
                <Link to="/packages/premium" className="hover:text-brand-coral transition-colors">
                  {isRTL ? 'الباقة المميزة — 9 أسابيع (1000 درهم)' : 'Premium — 9 Weeks (1000 AED)'}
                </Link>
              </li>
              <li>
                <Link to="/packages/extended" className="hover:text-brand-coral transition-colors">
                  {isRTL ? 'الباقة الموسعة — 12 أسبوعاً (1400 درهم)' : 'Extended — 12 Weeks (1400 AED)'}
                </Link>
              </li>
              <li>
                <Link to="/packages/consultation" className="hover:text-brand-coral font-bold text-white transition-colors">
                  {isRTL ? 'جلسة استشارة سريرية ($50)' : '1-on-1 Consultation ($50 USD)'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes & Meal Plans Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-mint">
              {isRTL ? 'البرامج والكتيبات الرقمية' : 'Programmes & Protocols'}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li>
                <Link to="/programs" className="hover:text-brand-coral transition-colors">
                  {isRTL ? 'جميع البرامج والكتيبات' : 'All Programmes Catalogue'}
                </Link>
              </li>
              <li>
                <a
                  href="https://danabardakji.gumroad.com/l/liquid-diet-protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-coral transition-colors inline-flex items-center gap-1 group"
                >
                  <span>{isRTL ? 'برنامج الديتوكس والسوائل (350 درهم)' : 'Liquid Diet Protocol (350 AED)'}</span>
                  <GoogleIcon name="arrow_outward" className="text-[10px] text-brand-mint group-hover:text-brand-coral" />
                </a>
              </li>
              <li>
                <a
                  href="https://danabardakji.gumroad.com/l/gut-reset-protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-coral transition-colors inline-flex items-center gap-1 group"
                >
                  <span>{isRTL ? 'برنامج صحة الجهاز الهضمي (350 درهم)' : 'Gut Reset & Microbiome (350 AED)'}</span>
                  <GoogleIcon name="arrow_outward" className="text-[10px] text-brand-mint group-hover:text-brand-coral" />
                </a>
              </li>
              <li>
                <a
                  href="https://danabardakji.gumroad.com/l/fertility-diet-protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-coral transition-colors inline-flex items-center gap-1 group"
                >
                  <span>{isRTL ? 'برنامج تعزيز الخصوبة وتكيس المبايض' : 'Fertility & Hormonal Diet (350 AED)'}</span>
                  <GoogleIcon name="arrow_outward" className="text-[10px] text-brand-mint group-hover:text-brand-coral" />
                </a>
              </li>
              <li>
                <a
                  href="https://danabardakji.gumroad.com/l/carb-cycling-protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-coral transition-colors inline-flex items-center gap-1 group"
                >
                  <span>{isRTL ? 'برنامج تدوير الكربوهيدرات' : 'Carb Cycling Protocol (350 AED)'}</span>
                  <GoogleIcon name="arrow_outward" className="text-[10px] text-brand-mint group-hover:text-brand-coral" />
                </a>
              </li>
            </ul>
          </div>

          {/* About & Policies Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-coral">
              {isRTL ? 'عن الأخصائية والسياسات' : 'About & Policies'}
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li>
                <Link to="/about/meet" className="hover:text-brand-coral transition-colors">
                  {isRTL ? 'عن دانة ومؤهلاتها' : 'Meet Dana'}
                </Link>
              </li>
              <li>
                <Link to="/about/who" className="hover:text-brand-coral transition-colors">
                  {isRTL ? 'الحالات التي نتابعها' : 'Who She Works With'}
                </Link>
              </li>
              <li>
                <Link to="/about/more" className="hover:text-brand-coral transition-colors">
                  {isRTL ? 'فلسفة العيش المستدام' : 'More Than Nutrition'}
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link to="/policies/refund" className="hover:text-white transition-colors">
                  {isRTL ? 'سياسة الاسترجاع والإلغاء' : 'Refund & Cancellation Policy'}
                </Link>
              </li>
              <li>
                <Link to="/policies/privacy" className="hover:text-white transition-colors">
                  {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link to="/policies/terms" className="hover:text-white transition-colors">
                  {isRTL ? 'الشروط وإخلاء المسؤولية الطبية' : 'Terms & Medical Disclaimer'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with PiXL4 Attribution */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <span>
              {isRTL 
                ? `© ${currentYear} دانة بردقجي. جميع الحقوق محفوظة.`
                : `© ${currentYear} Dana Bardakji. All rights reserved.`}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <GoogleIcon name="verified" className="text-sm text-brand-mint" />
              <span>{isRTL ? 'أخصائية تغذية علاجية معتمدة' : 'Certified Clinical Nutritionist'}</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-white/75">
            <span>{isRTL ? 'تصميم وتطوير بواسطة' : 'Designed by'}</span>
            <a
              href="https://pixl4.com"
              target="_blank"
              rel="noopener noreferrer"
              dir="ltr"
              className="text-brand-gold hover:text-white font-bold transition-colors underline decoration-brand-gold/40 hover:decoration-white"
            >
              PiXL4
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
