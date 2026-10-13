import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingBag, ArrowLeft, ShieldCheck, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { PACKAGES_DATA } from '../../data/siteData';

export const StandardPackagePage: React.FC = () => {
  const pkg = PACKAGES_DATA[0]; // Standard
  const { addToCart } = useCart();

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link
          to="/packages"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Packages</span>
        </Link>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-coral/15 text-brand-coral mb-3 inline-block">
                {pkg.duration}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
                {pkg.name}
              </h1>
              <p className="text-base text-brand-navy/80 leading-relaxed font-normal">
                {pkg.description}
              </p>
            </div>

            {/* What is Included */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-gold" />
                <span>What's Included in Your 4 Weeks</span>
              </h3>
              <div className="space-y-3 pt-2">
                {pkg.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-navy/85">
                    <Check className="w-4 h-4 text-brand-mint-dark flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Week Progression Roadmap */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy">Your 4-Week Journey Timeline</h3>
              <div className="space-y-4 pt-2">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    W1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Intake & Initial Meal Protocol</h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">Comprehensive dietary evaluation, lab analysis, and delivery of your customized 7-day starter plan.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-mint/30 text-brand-navy text-xs font-bold flex items-center justify-center flex-shrink-0">
                    W2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Biometric Check-in & Craving Control</h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">First biometric review, hunger adaptation check, and recipe substitutions for dining out.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-gold/30 text-brand-navy text-xs font-bold flex items-center justify-center flex-shrink-0">
                    W3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Metabolic Acceleration</h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">Refined calorie/macro distribution to push through plateau and optimize energy levels.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-xl bg-brand-coral/20 text-brand-coral text-xs font-bold flex items-center justify-center flex-shrink-0">
                    W4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy">Transformation Review & Maintenance Plan</h4>
                    <p className="text-xs text-brand-navy/70 mt-0.5">Final 30-day assessment, measurement comparison, and post-diet sustainable maintenance blueprint.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Booking Card Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-mint/40 shadow-soft-xl space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block mb-1">
                  مدة الاشتراك: 4 أسابيع • مشترك واحد
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-navy">{pkg.priceAed}</span>
                  <span className="text-lg font-bold text-brand-navy/70">درهم إماراتي</span>
                  <span className="text-xs font-semibold text-brand-navy/50"> (~${pkg.priceUsd} USD)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border text-xs text-brand-navy/75 space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-mint-dark" />
                  <span>مدة الاشتراك: 4 أسابيع</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-brand-mint-dark" />
                  <span>متابعة عبر زوم (جلسة واحدة) ومتابعة مباشرة عبر الواتساب</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-mint-dark" />
                  <span>4 خطط غذائية مخصصة سريرياً</span>
                </div>
              </div>

              <button
                onClick={() =>
                  addToCart({
                    id: pkg.id,
                    title: `${pkg.arabicName} (${pkg.englishName})`,
                    subtitle: `${pkg.duration} • مشترك واحد`,
                    price: `${pkg.priceAed} درهم إماراتي`,
                    priceNumber: pkg.priceAed || 550,
                    currency: 'AED',
                    type: 'package',
                    slug: `/packages/${pkg.slug}`,
                  })
                }
                className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all flex items-center justify-center gap-2"
                style={{ backgroundColor: pkg.headerColor || undefined }}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>اختر الباقة ({pkg.priceAed} درهم إماراتي)</span>
              </button>

              <div className="text-center pt-2">
                <a
                  href="https://wa.me/962792222058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-navy hover:text-brand-coral transition-colors"
                >
                  Have questions? Chat with Dana on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
