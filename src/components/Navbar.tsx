import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { totalItems, setIsCartOpen } = useCart();
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
              Home
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
                <span>Packages</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              {activeDropdown === 'packages' && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-brand-navy/10 p-2 space-y-1">
                    <Link
                      to="/packages"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-bold text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-extrabold text-sm">All Packages Overview</div>
                      <div className="text-[11px] font-normal text-brand-navy/60">Compare all 4 clinical plans</div>
                    </Link>
                    <div className="h-px bg-brand-navy/5 my-1" />
                    <Link
                      to="/packages/standard"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-medium text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-bold">Standard Package (4 Weeks)</div>
                      <div className="text-[11px] text-brand-navy/60">500 DHS • 1 Month Reset</div>
                    </Link>
                    <Link
                      to="/packages/premium"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-medium text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>Premium Package (8 Weeks)</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-brand-gold/30 text-brand-navy font-bold">Popular</span>
                      </div>
                      <div className="text-[11px] text-brand-navy/60">1000 DHS • 1 or 2 Subs + Bonus</div>
                    </Link>
                    <Link
                      to="/packages/extended"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-medium text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-bold">Extended Package (12 Weeks)</div>
                      <div className="text-[11px] text-brand-navy/60">1400 DHS • 3 Months Transformation</div>
                    </Link>
                    <Link
                      to="/packages/consultation"
                      className="block p-2.5 rounded-xl hover:bg-brand-mint/20 text-xs font-medium text-brand-navy transition-colors"
                    >
                      <div className="font-bold text-brand-navy">1-on-1 Consultation ($50)</div>
                      <div className="text-[11px] text-brand-navy/60">Diagnostic Session with Dana</div>
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
                <span>Programmes & Meal Plans</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              {activeDropdown === 'programs' && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-brand-navy/10 p-2 space-y-1">
                    <Link
                      to="/programs"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-bold text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-extrabold text-sm flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                        <span>All Programmes Catalogue</span>
                      </div>
                      <div className="text-[11px] font-normal text-brand-navy/60">Instant downloadable clinical guides</div>
                    </Link>
                    <div className="h-px bg-brand-navy/5 my-1" />
                    <Link
                      to="/programs/liquid-diet"
                      className="block p-2 rounded-xl hover:bg-surface-subtle text-xs text-brand-navy transition-colors"
                    >
                      <div className="font-bold">Liquid Diet Protocol ($35)</div>
                      <div className="text-[11px] text-brand-navy/60">Digestive rest & inflammation reduction</div>
                    </Link>
                    <Link
                      to="/programs/gut-reset"
                      className="block p-2 rounded-xl hover:bg-surface-subtle text-xs text-brand-navy transition-colors"
                    >
                      <div className="font-bold">Gut Reset Protocol ($45)</div>
                      <div className="text-[11px] text-brand-navy/60">Heal dysbiosis & eliminate bloating</div>
                    </Link>
                    <Link
                      to="/programs/fertility-diet"
                      className="block p-2 rounded-xl hover:bg-surface-subtle text-xs text-brand-navy transition-colors"
                    >
                      <div className="font-bold">Fertility & Hormonal Diet ($45)</div>
                      <div className="text-[11px] text-brand-navy/60">PCOS, ovulatory & hormonal support</div>
                    </Link>
                    <Link
                      to="/programs/carb-cycle"
                      className="block p-2 rounded-xl hover:bg-surface-subtle text-xs text-brand-navy transition-colors"
                    >
                      <div className="font-bold">Carb Cycle Protocol ($40)</div>
                      <div className="text-[11px] text-brand-navy/60">Metabolic acceleration & fat loss</div>
                    </Link>
                    <Link
                      to="/programs/ramadan"
                      className="block p-2 rounded-xl hover:bg-surface-subtle text-xs text-brand-navy transition-colors"
                    >
                      <div className="font-bold">Ramadan Fasting Plan ($35)</div>
                      <div className="text-[11px] text-brand-navy/60">Energy & hydration management</div>
                    </Link>
                    <Link
                      to="/programs/exchange-list"
                      className="block p-2 rounded-xl hover:bg-surface-subtle text-xs text-brand-navy transition-colors"
                    >
                      <div className="font-bold">Food Exchange Handbook ($25)</div>
                      <div className="text-[11px] text-brand-navy/60">Flexible portion building system</div>
                    </Link>
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
                <span>About Dana</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-brand-navy/10 p-2 space-y-1">
                    <Link
                      to="/about/meet"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-medium text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-bold">Meet Dana</div>
                      <div className="text-[11px] text-brand-navy/60">B.Sc., UK Higher Diploma & Books</div>
                    </Link>
                    <Link
                      to="/about/who"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-medium text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-bold">Who She Works With</div>
                      <div className="text-[11px] text-brand-navy/60">Clinical cases & client profiles</div>
                    </Link>
                    <Link
                      to="/about/more"
                      className="block p-2.5 rounded-xl hover:bg-surface-subtle text-xs font-medium text-brand-navy hover:text-brand-coral transition-colors"
                    >
                      <div className="font-bold">More Than Nutrition</div>
                      <div className="text-[11px] text-brand-navy/60">Mindful habits & sustainable living</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Account Link */}
            <Link
              to="/account/orders"
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
                location.pathname.startsWith('/account')
                  ? 'text-brand-coral bg-brand-coral/10'
                  : 'text-brand-navy hover:text-brand-coral hover:bg-surface-subtle'
              }`}
            >
              <User className="w-4 h-4" />
              <span>My Account</span>
            </Link>
          </nav>

          {/* Right Action Icons & Consultation CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Cart Button with Live Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-surface-subtle hover:bg-brand-mint/20 text-brand-navy transition-all duration-200"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-coral text-white text-[11px] font-extrabold flex items-center justify-center shadow-soft-sm animate-in zoom-in-50 duration-200">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Direct Consultation CTA */}
            <Link
              to="/packages/consultation"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book $50 Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-brand-navy hover:bg-brand-mint/20 focus:outline-none transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="fixed inset-0 top-[68px] bg-brand-navy/40 backdrop-blur-xs z-40 lg:hidden"
            aria-hidden="true"
          />

          <div className="relative z-50 lg:hidden bg-white border-b border-brand-navy/10 px-4 pt-4 pb-6 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-bold text-brand-navy hover:bg-surface-subtle rounded-xl"
              >
                Home
              </Link>

              {/* Packages Group */}
              <div className="p-3 bg-surface-subtle rounded-2xl space-y-1.5">
                <Link
                  to="/packages"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-black uppercase tracking-wider text-brand-coral mb-1"
                >
                  Packages & Consultations
                </Link>
                <Link
                  to="/packages/standard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-medium text-brand-navy"
                >
                  Standard — 4 Weeks (500 DHS)
                </Link>
                <Link
                  to="/packages/premium"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-medium text-brand-navy"
                >
                  Premium — 8 Weeks (1000 DHS)
                </Link>
                <Link
                  to="/packages/extended"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-medium text-brand-navy"
                >
                  Extended — 12 Weeks (1400 DHS)
                </Link>
                <Link
                  to="/packages/consultation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-bold text-brand-coral"
                >
                  One-on-One Consultation ($50 USD)
                </Link>
              </div>

              {/* Programmes Group */}
              <div className="p-3 bg-surface-subtle rounded-2xl space-y-1.5">
                <Link
                  to="/programs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-black uppercase tracking-wider text-brand-coral mb-1"
                >
                  Programmes & Meal Plans
                </Link>
                <Link
                  to="/programs/liquid-diet"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-medium text-brand-navy"
                >
                  Liquid Diet Protocol ($35)
                </Link>
                <Link
                  to="/programs/gut-reset"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-medium text-brand-navy"
                >
                  Gut Reset Protocol ($45)
                </Link>
                <Link
                  to="/programs/fertility-diet"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-medium text-brand-navy"
                >
                  Fertility & Hormonal Diet ($45)
                </Link>
                <Link
                  to="/programs/carb-cycle"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-medium text-brand-navy"
                >
                  Carb Cycle Protocol ($40)
                </Link>
                <Link
                  to="/programs/ramadan"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-medium text-brand-navy"
                >
                  Ramadan Fasting Plan ($35)
                </Link>
                <Link
                  to="/programs/exchange-list"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-medium text-brand-navy"
                >
                  Food Exchange Handbook ($25)
                </Link>
              </div>

              {/* About Group */}
              <div className="p-3 bg-surface-subtle rounded-2xl space-y-1.5">
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-black uppercase tracking-wider text-brand-coral mb-1"
                >
                  About Dana
                </Link>
                <Link
                  to="/about/meet"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-medium text-brand-navy"
                >
                  Meet Dana & Background
                </Link>
                <Link
                  to="/about/who"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-medium text-brand-navy"
                >
                  Who She Works With
                </Link>
                <Link
                  to="/about/more"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm font-medium text-brand-navy"
                >
                  More Than Nutrition
                </Link>
              </div>

              {/* Account & Cart Buttons */}
              <div className="pt-2 border-t border-brand-navy/10 flex flex-col gap-2.5">
                <Link
                  to="/account/orders"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-brand-navy bg-surface-subtle hover:bg-brand-mint/20 rounded-xl transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>My Account & Downloads</span>
                </Link>

                <Link
                  to="/packages/consultation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white bg-brand-coral hover:bg-brand-coral-dark rounded-xl shadow-soft"
                >
                  <span>Book $50 Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
