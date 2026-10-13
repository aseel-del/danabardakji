import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowLeft, ShieldCheck, MessageCircle, Calendar, Sparkles, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { PACKAGES_DATA } from '../../data/siteData';

export const PremiumPackagePage: React.FC = () => {
  const pkg = PACKAGES_DATA[1]; // Premium
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
          <span>الرجوع إلى جميع الباقات / Back to All Packages</span>
        </Link>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: pkg.headerColor || '#3C7D68' }}>
                  {pkg.duration} • مدة الاشتراك: 9 أسابيع
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold/30 text-brand-navy flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold-dark" />
                  <span>الأكثر طلباً • Most Popular</span>
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-2">
                {pkg.arabicName} ({pkg.englishName})
              </h1>
              <p className="text-base text-brand-navy/80 leading-relaxed font-normal">
                {pkg.description}
              </p>
            </div>

            {/* What is Included (Exact match to reference sheet) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-gold" />
                <span>المميزات المشمولة في الباقة المميزة</span>
              </h3>
              <div className="space-y-3 pt-2" dir="rtl">
                {pkg.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-base text-brand-navy font-bold">
                    <span className="text-base select-none flex-shrink-0" aria-hidden="true">🚩</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline details */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy">تفاصيل الرحلة والمتابعة (9 أسابيع)</h3>
              <div className="space-y-4 pt-2 text-xs sm:text-sm text-brand-navy/80">
                <p>• <strong>مشترك واحد:</strong> إشراف فردي خاص يراعي حالتك الصحية والفيزيولوجية ونمط يومك.</p>
                <p>• <strong>متابعة عبر زوم (2):</strong> جلستان استشاريتان عبر زوم لمراجعة التقدم وتعديل الأهداف.</p>
                <p>• <strong>9 خطط غذائية:</strong> خطة غذائية متجددة لكل أسبوع لمنع ثبات الوزن وتجديد الروتين.</p>
                <p>• <strong>مدة الاشتراك:</strong> 9 أسابيع من الالتزام والمتابعة المستمرة لضمان أفضل النتائج المستدامة.</p>
              </div>
            </div>
          </div>

          {/* Pricing & Booking Card Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-mint/50 shadow-soft-xl space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block mb-1">
                  مدة الاشتراك: 9 أسابيع • مشترك واحد
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
                  <span>مدة الاشتراك: 9 أسابيع كاملة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-brand-mint-dark" />
                  <span>متابعة عبر زوم (2 جلسات) + متابعة واتساب أسبوعية</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-mint-dark" />
                  <span>9 خطط غذائية مخصصة سريرياً</span>
                </div>
              </div>

              <button
                onClick={() =>
                  addToCart({
                    id: pkg.id,
                    title: `${pkg.arabicName} (${pkg.englishName})`,
                    subtitle: `${pkg.duration} • مشترك واحد`,
                    price: `${pkg.priceAed} درهم إماراتي`,
                    priceNumber: pkg.priceAed || 1000,
                    currency: 'AED',
                    type: 'package',
                    slug: `/packages/${pkg.slug}`,
                    badge: 'Popular',
                  })
                }
                className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white shadow-soft hover:shadow-soft-lg transition-all flex items-center justify-center gap-2"
                style={{ backgroundColor: pkg.headerColor || '#3C7D68' }}
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
                  هل لديك استفسار؟ تواصلي مباشرة عبر الواتساب →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
