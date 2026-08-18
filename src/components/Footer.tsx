import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-12 relative overflow-hidden">
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-coral" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Bio Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <img
                src="/logo-light.svg"
                alt="Dana Bardakji Clinical Nutrition"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-white/75 leading-relaxed max-w-md font-normal">
              Certified Clinical Dietitian offering evidence-based, customized nutrition therapy for weight management, metabolic conditions, women's health, and family nutrition.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-brand-mint font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>B.Sc. Nutrition & Food Tech • Postgrad Diploma UK</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://www.instagram.com/danabardakji/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dana Bardakji on Instagram"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-coral hover:text-white flex items-center justify-center text-white/80 transition-all duration-300 hover:scale-110 shadow-soft-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/danabardakji/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dana Bardakji on Facebook"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-coral hover:text-white flex items-center justify-center text-white/80 transition-all duration-300 hover:scale-110 shadow-soft-sm"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#about" className="hover:text-brand-mint transition-colors">
                  About Dana
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-mint transition-colors">
                  Specialized Services
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-brand-mint transition-colors">
                  Packages & Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-mint transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-mint transition-colors">
                  Contact & Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-mint flex-shrink-0" />
                <a href="https://wa.me/962792222058" target="_blank" rel="noopener noreferrer" className="hover:text-brand-mint transition-colors font-medium">
                  +962 7 9222 2058 (WhatsApp / Call)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="mailto:hello@danabardakji.com" className="hover:text-brand-gold transition-colors font-medium break-all">
                  hello@danabardakji.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-white/70">
                <MapPin className="w-4 h-4 text-brand-coral flex-shrink-0 mt-0.5" />
                <span>Consultations available in Amman, Jordan • Abu Dhabi, UAE • Worldwide Online (Zoom)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Dana Bardakji. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>
              Designed by{' '}
              <a
                href="https://pixl4.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-mint hover:text-brand-gold transition-colors font-semibold underline underline-offset-2"
              >
                PiXL4
              </a>
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-brand-gold transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
