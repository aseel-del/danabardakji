import React from 'react';
import { Mail, Instagram, Facebook, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
              B.Sc. in Clinical Nutrition (Univ. of Jordan) & Higher Diploma in Clinical Nutritional Treatments (Stone Bridge Univ, UK). Specialized in sustainable fat loss, therapeutic dietary protocols, and women’s health.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/danabardakji/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-coral text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-soft-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/danabardakji/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-soft-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@danabardakji.com"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-mint-dark text-white flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-soft-sm"
                aria-label="Email Dana"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Packages & Consultations Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold">
              Packages & Booking
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li>
                <Link to="/packages" className="hover:text-brand-coral transition-colors">
                  All Packages
                </Link>
              </li>
              <li>
                <Link to="/packages/standard" className="hover:text-brand-coral transition-colors">
                  Standard — 4 Weeks (500 DHS)
                </Link>
              </li>
              <li>
                <Link to="/packages/premium" className="hover:text-brand-coral transition-colors">
                  Premium — 8 Weeks (1000 DHS)
                </Link>
              </li>
              <li>
                <Link to="/packages/extended" className="hover:text-brand-coral transition-colors">
                  Extended — 12 Weeks (1400 DHS)
                </Link>
              </li>
              <li>
                <Link to="/packages/consultation" className="hover:text-brand-coral font-bold text-white transition-colors">
                  1-on-1 Consultation ($50 USD)
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes & Meal Plans Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-mint">
              Programmes & Meal Plans
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li>
                <Link to="/programs" className="hover:text-brand-coral transition-colors">
                  All Programmes Collection
                </Link>
              </li>
              <li>
                <Link to="/programs/liquid-diet" className="hover:text-brand-coral transition-colors">
                  Liquid Diet Protocol ($35)
                </Link>
              </li>
              <li>
                <Link to="/programs/gut-reset" className="hover:text-brand-coral transition-colors">
                  Gut Reset & Microbiome ($45)
                </Link>
              </li>
              <li>
                <Link to="/programs/fertility-diet" className="hover:text-brand-coral transition-colors">
                  Fertility & Hormonal Diet ($45)
                </Link>
              </li>
              <li>
                <Link to="/programs/carb-cycle" className="hover:text-brand-coral transition-colors">
                  Carb Cycling Protocol ($40)
                </Link>
              </li>
              <li>
                <Link to="/programs/ramadan" className="hover:text-brand-coral transition-colors">
                  Ramadan Fasting Plan ($35)
                </Link>
              </li>
              <li>
                <Link to="/programs/exchange-list" className="hover:text-brand-coral transition-colors">
                  Food Exchange Handbook ($25)
                </Link>
              </li>
            </ul>
          </div>

          {/* About, Account & Policies Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-coral">
              About & Client Portal
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li>
                <Link to="/about/meet" className="hover:text-brand-coral transition-colors">
                  Meet Dana
                </Link>
              </li>
              <li>
                <Link to="/about/who" className="hover:text-brand-coral transition-colors">
                  Who She Works With
                </Link>
              </li>
              <li>
                <Link to="/about/more" className="hover:text-brand-coral transition-colors">
                  More Than Nutrition
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link to="/account/orders" className="hover:text-brand-coral font-bold text-white transition-colors">
                  My Orders & Downloads
                </Link>
              </li>
              <li>
                <Link to="/policies/refund" className="hover:text-white transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/policies/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policies/terms" className="hover:text-white transition-colors">
                  Terms of Service & Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with PiXL4 Attribution */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Dana Bardakji. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-mint" />
              <span>Certified Clinical Nutritionist</span>
            </span>
          </div>

          <div className="flex items-center gap-1 text-white/75">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-brand-coral fill-brand-coral inline" />
            <span>by</span>
            <a
              href="https://pixl4.com"
              target="_blank"
              rel="noopener noreferrer"
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
