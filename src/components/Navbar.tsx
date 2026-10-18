import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { GoogleIcon } from './common/GoogleIcon';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage, isRTL, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock body scroll and suppress floating buttons when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-active');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('mobile-menu-active');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('mobile-menu-active');
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-soft-sm py-3'
          : 'bg-white/80 backdrop-blur-md py-4 sm:py-5 border-b border-brand-navy/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src="/logo.svg"
              alt="Dana Bardakji - Certified Clinical Dietitian"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Home */}
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
                location.pathname === '/'
                  ? 'text-brand-coral bg-brand-coral/10'
                  : 'text-brand-navy hover:text-brand-coral hover:bg-surface-subtle'
              }`}
            >
              {t('nav.home')}
            </Link>

            {/* Packages Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('packages')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/packages"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
                  location.pathname.startsWith('/packages')
                    ? 'text-brand-coral bg-brand-coral/10'
                    : 'text-brand-navy hover:text-brand-coral hover:bg-surface-subtle'
                }`}
              >
                <span>{t('nav.packages')}</span>
                <GoogleIcon name="expand_more" className="text-base transition-transform group-hover:rotate-180" />
              </Link>

              {activeDropdown === 'packages' && (
                <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} w-72 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150`}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-brand-navy/10 p-2 space-y-1">
                    <Link
                      to="/packages"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-bold text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-extrabold text-sm">
                        {isRTL ? 'جميع باقات الاشتراك' : 'All Packages Overview'}
                      </div>
                      <div className="text-[11px] font-normal text-brand-navy/60">
                        {isRTL ? 'مقارنة باقات المتابعة السريرية' : 'Compare clinical coaching plans'}
                      </div>
                    </Link>
                    <div className="h-px bg-brand-navy/5 my-1" />
                    <Link
                      to="/packages/standard"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-medium text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-bold">
                        {isRTL ? 'الباقة الأساسية (4 أسابيع)' : 'Standard Package (4 Weeks)'}
                      </div>
                      <div className="text-[11px] text-brand-navy/60">
                        {isRTL ? '550 درهم • متابعة دقيقة' : '550 AED • 1-Month Reset'}
                      </div>
                    </Link>
                    <Link
                      to="/packages/premium"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-medium text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>{isRTL ? 'الباقة المميزة (9 أسابيع)' : 'Premium Package (9 Weeks)'}</span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-brand-gold text-brand-navy font-black">
                          {isRTL ? 'الأكثر طلباً' : 'Popular'}
                        </span>
                      </div>
                      <div className="text-[11px] text-brand-navy/60">
                        {isRTL ? '1000 درهم • جلستان زوم' : '1000 AED • 2 Zoom Sessions'}
                      </div>
                    </Link>
                    <Link
                      to="/packages/extended"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-medium text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-bold">
                        {isRTL ? 'الباقة الموسعة (12 أسبوعاً)' : 'Extended Package (12 Weeks)'}
                      </div>
                      <div className="text-[11px] text-brand-navy/60">
                        {isRTL ? '1400 درهم • 3 أشهر تحول كامل' : '1400 AED • 3 Months Transformation'}
                      </div>
                    </Link>
                    <Link
                      to="/packages/consultation"
                      className="block p-2.5 rounded-xl hover:bg-brand-mint/20 text-xs font-medium text-brand-navy transition-colors"
                    >
                      <div className="font-bold text-brand-navy">
                        {isRTL ? 'استشارة فردية (50$)' : '1-on-1 Consultation ($50)'}
                      </div>
                      <div className="text-[11px] text-brand-navy/60">
                        {isRTL ? 'جلسة تقييم سريري مع دانة' : 'Diagnostic Session with Dana'}
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Programmes & Meal Plans Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('programs')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/programs"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
                  location.pathname.startsWith('/programs')
                    ? 'text-brand-coral bg-brand-coral/10'
                    : 'text-brand-navy hover:text-brand-coral hover:bg-surface-subtle'
                }`}
              >
                <span>{t('nav.programs')}</span>
                <GoogleIcon name="expand_more" className="text-base transition-transform group-hover:rotate-180" />
              </Link>

              {activeDropdown === 'programs' && (
                <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150`}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-brand-navy/10 p-2 space-y-1">
                    <Link
                      to="/programs"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-bold text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-extrabold text-sm flex items-center gap-1.5">
                        <GoogleIcon name="menu_book" className="text-brand-gold text-base" />
                        <span>{isRTL ? 'جميع الكتيبات والبرامج' : 'All Programmes Catalogue'}</span>
                      </div>
                      <div className="text-[11px] font-normal text-brand-navy/60">
                        {isRTL ? 'كتيبات جاهزة للتحميل الفوري بصيغة PDF' : 'Instant downloadable clinical guides'}
                      </div>
                    </Link>
                    <div className="h-px bg-brand-navy/5 my-1" />
                    <a
                      href="https://danabardakji.gumroad.com/l/liquid-diet-protocol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 rounded-xl hover:bg-surface-subtle text-xs text-brand-navy transition-colors group/item"
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>{isRTL ? 'برنامج الديتوكس والسوائل (350 درهم)' : 'Liquid Diet Protocol (350 AED)'}</span>
                        <GoogleIcon name="arrow_outward" className="text-xs text-brand-coral opacity-70 group-hover/item:opacity-100" />
                      </div>
                      <div className="text-[11px] text-brand-navy/60">{isRTL ? 'إراحة الجهاز الهضمي والديتوكس السريري' : 'Digestive rest & inflammation reduction'}</div>
                    </a>
                    <a
                      href="https://danabardakji.gumroad.com/l/gut-reset-protocol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 rounded-xl hover:bg-surface-subtle text-xs text-brand-navy transition-colors group/item"
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>{isRTL ? 'برنامج صحة الجهاز الهضمي والقولون (350 درهم)' : 'Gut Reset Protocol (350 AED)'}</span>
                        <GoogleIcon name="arrow_outward" className="text-xs text-brand-coral opacity-70 group-hover/item:opacity-100" />
                      </div>
                      <div className="text-[11px] text-brand-navy/60">{isRTL ? 'علاج اضطرابات القولون وإعادة التوازن' : 'Heal dysbiosis & eliminate bloating'}</div>
                    </a>
                    <a
                      href="https://danabardakji.gumroad.com/l/fertility-diet-protocol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 rounded-xl hover:bg-surface-subtle text-xs text-brand-navy transition-colors group/item"
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>{isRTL ? 'برنامج التغذية لتعزيز الخصوبة (350 درهم)' : 'Fertility & Hormonal Diet (350 AED)'}</span>
                        <GoogleIcon name="arrow_outward" className="text-xs text-brand-coral opacity-70 group-hover/item:opacity-100" />
                      </div>
                      <div className="text-[11px] text-brand-navy/60">{isRTL ? 'دعم تكيس المبايض والتوازن الهرموني' : 'PCOS, ovulatory & hormonal support'}</div>
                    </a>
                    <a
                      href="https://danabardakji.gumroad.com/l/carb-cycling-protocol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 rounded-xl hover:bg-surface-subtle text-xs text-brand-navy transition-colors group/item"
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>{isRTL ? 'برنامج تدوير الكربوهيدرات (350 درهم)' : 'Carb Cycle Protocol (350 AED)'}</span>
                        <GoogleIcon name="arrow_outward" className="text-xs text-brand-coral opacity-70 group-hover/item:opacity-100" />
                      </div>
                      <div className="text-[11px] text-brand-navy/60">{isRTL ? 'تنشيط الأيض وتسريع حرق الدهون' : 'Metabolic acceleration & fat loss'}</div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* About Dana Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/about"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
                  location.pathname.startsWith('/about')
                    ? 'text-brand-coral bg-brand-coral/10'
                    : 'text-brand-navy hover:text-brand-coral hover:bg-surface-subtle'
                }`}
              >
                <span>{t('nav.about')}</span>
                <GoogleIcon name="expand_more" className="text-base transition-transform group-hover:rotate-180" />
              </Link>

              {activeDropdown === 'about' && (
                <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150`}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-brand-navy/10 p-2 space-y-1">
                    <Link
                      to="/about/meet"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-medium text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-bold">{isRTL ? 'عن دانة ومؤهلاتها' : 'Meet Dana'}</div>
                      <div className="text-[11px] text-brand-navy/60">{isRTL ? 'الشهادات والخبرة السريرية' : 'B.Sc., UK Higher Diploma & Books'}</div>
                    </Link>
                    <Link
                      to="/about/who"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-medium text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-bold">{isRTL ? 'الحالات التي نتابعها' : 'Who She Works With'}</div>
                      <div className="text-[11px] text-brand-navy/60">{isRTL ? 'الحالات السريرية والفئات' : 'Clinical cases & client profiles'}</div>
                    </Link>
                    <Link
                      to="/about/more"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-medium text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-bold">{isRTL ? 'أكثر من مجرد حمية' : 'More Than Nutrition'}</div>
                      <div className="text-[11px] text-brand-navy/60">{isRTL ? 'فلسفة نمط الحياة المستدام' : 'Mindful habits & sustainable living'}</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Icons, Language Switcher & Consultation CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Pill Toggle */}
            <div className="flex items-center bg-surface-subtle p-0.5 rounded-full border border-brand-navy/10">
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  language === 'ar'
                    ? 'bg-brand-navy text-white shadow-soft-sm'
                    : 'text-brand-navy/70 hover:text-brand-navy'
                }`}
                title="العربية"
              >
                عربي
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  language === 'en'
                    ? 'bg-brand-navy text-white shadow-soft-sm'
                    : 'text-brand-navy/70 hover:text-brand-navy'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Direct Consultation CTA */}
            <Link
              to="/packages/consultation"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{isRTL ? 'حجز استشارة ($50)' : 'Book $50 Session'}</span>
              <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-sm" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-brand-navy hover:bg-brand-mint/20 focus:outline-none transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <GoogleIcon name="close" className="text-2xl" /> : <GoogleIcon name="menu" className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[60px] sm:top-[68px] bg-brand-navy/60 backdrop-blur-sm z-40 lg:hidden"
            aria-hidden="true"
          />

          <div className="fixed top-[60px] sm:top-[68px] left-0 right-0 z-50 lg:hidden bg-white border-b border-brand-navy/10 px-5 pt-3 pb-8 shadow-2xl max-h-[calc(100vh-68px)] overflow-y-auto">
            {/* Clean Navigation Links */}
            <div className="flex flex-col divide-y divide-brand-navy/5">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 px-2 text-base font-bold text-brand-navy hover:text-brand-coral transition-colors"
              >
                <span className="flex items-center gap-3">
                  <GoogleIcon name="home" className="text-brand-coral text-xl" />
                  <span>{t('nav.home')}</span>
                </span>
                <GoogleIcon name={isRTL ? "chevron_left" : "chevron_right"} className="text-brand-navy/30 text-lg" />
              </Link>

              <Link
                to="/packages"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 px-2 text-base font-bold text-brand-navy hover:text-brand-coral transition-colors"
              >
                <span className="flex items-center gap-3">
                  <GoogleIcon name="medical_services" className="text-brand-coral text-xl" />
                  <span>{t('nav.packages')}</span>
                </span>
                <GoogleIcon name={isRTL ? "chevron_left" : "chevron_right"} className="text-brand-navy/30 text-lg" />
              </Link>

              <Link
                to="/programs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 px-2 text-base font-bold text-brand-navy hover:text-brand-coral transition-colors"
              >
                <span className="flex items-center gap-3">
                  <GoogleIcon name="menu_book" className="text-brand-coral text-xl" />
                  <span>{t('nav.programs')}</span>
                </span>
                <GoogleIcon name={isRTL ? "chevron_left" : "chevron_right"} className="text-brand-navy/30 text-lg" />
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 px-2 text-base font-bold text-brand-navy hover:text-brand-coral transition-colors"
              >
                <span className="flex items-center gap-3">
                  <GoogleIcon name="person" className="text-brand-coral text-xl" />
                  <span>{t('nav.about')}</span>
                </span>
                <GoogleIcon name={isRTL ? "chevron_left" : "chevron_right"} className="text-brand-navy/30 text-lg" />
              </Link>

              <a
                href="/#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 px-2 text-base font-bold text-brand-navy hover:text-brand-coral transition-colors"
              >
                <span className="flex items-center gap-3">
                  <GoogleIcon name="task_alt" className="text-brand-coral text-xl" />
                  <span>{isRTL ? 'كيف نعمل' : 'How It Works'}</span>
                </span>
                <GoogleIcon name={isRTL ? "chevron_left" : "chevron_right"} className="text-brand-navy/30 text-lg" />
              </a>

              <a
                href="/#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 px-2 text-base font-bold text-brand-navy hover:text-brand-coral transition-colors"
              >
                <span className="flex items-center gap-3">
                  <GoogleIcon name="reviews" className="text-brand-coral text-xl" />
                  <span>{isRTL ? 'آراء المشتركين' : 'Client Reviews'}</span>
                </span>
                <GoogleIcon name={isRTL ? "chevron_left" : "chevron_right"} className="text-brand-navy/30 text-lg" />
              </a>

              <a
                href="/#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 px-2 text-base font-bold text-brand-navy hover:text-brand-coral transition-colors"
              >
                <span className="flex items-center gap-3">
                  <GoogleIcon name="help_outline" className="text-brand-coral text-xl" />
                  <span>{isRTL ? 'الأسئلة الشائعة' : 'FAQs'}</span>
                </span>
                <GoogleIcon name={isRTL ? "chevron_left" : "chevron_right"} className="text-brand-navy/30 text-lg" />
              </a>

              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 px-2 text-base font-bold text-brand-navy hover:text-brand-coral transition-colors"
              >
                <span className="flex items-center gap-3">
                  <GoogleIcon name="mail" className="text-brand-coral text-xl" />
                  <span>{isRTL ? 'تواصل معنا' : 'Contact Us'}</span>
                </span>
                <GoogleIcon name={isRTL ? "chevron_left" : "chevron_right"} className="text-brand-navy/30 text-lg" />
              </a>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-4 border-t border-brand-navy/10 space-y-3">
              <Link
                to="/packages/consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark rounded-2xl shadow-soft transition-all"
              >
                <span>{isRTL ? 'حجز استشارة خاصة ($50)' : 'Book $50 Consultation'}</span>
                <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-sm" />
              </Link>

              <a
                href="https://wa.me/962792222058"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-brand-navy/70 hover:text-brand-coral transition-colors"
              >
                <GoogleIcon name="chat" className="text-base text-emerald-600" />
                <span>{isRTL ? 'واتساب العيادة المباشر:' : 'Direct WhatsApp:'}</span>
                <span dir="ltr" className="font-bold text-brand-navy">(+962 7 9222 2058)</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
