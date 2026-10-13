import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingBag, ArrowLeft, ShieldCheck, Download, Sparkles, Clock, FileText, Stethoscope } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { PROGRAMS_DATA, CONSULTATION_DATA } from '../../data/siteData';

interface ProgramDetailPageProps {
  programSlug?: string;
}

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ programSlug }) => {
  const params = useParams<{ slug: string }>();
  const slug = programSlug || params.slug;
  const { addToCart } = useCart();

  const program = PROGRAMS_DATA.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  const handleAddBundle = () => {
    // Add programme
    addToCart({
      id: program.id,
      title: program.title,
      subtitle: program.subtitle,
      price: `$${program.priceUsd} USD`,
      priceNumber: program.priceUsd,
      currency: 'USD',
      type: 'program',
      slug: `/programs/${program.slug}`,
      badge: program.badge,
    });

    // Add consultation bundle
    addToCart({
      id: CONSULTATION_DATA.id,
      title: CONSULTATION_DATA.name,
      subtitle: `Diagnostic Session (Bundle with ${program.title})`,
      price: `$${CONSULTATION_DATA.priceUsd} USD`,
      priceNumber: CONSULTATION_DATA.priceUsd,
      currency: 'USD',
      type: 'consultation',
      slug: `/packages/${CONSULTATION_DATA.slug}`,
      badge: 'Bundle Add-on',
    });
  };

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link
          to="/programs"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Programmes</span>
        </Link>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold/30 text-brand-navy">
                  {program.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-mint/30 text-brand-navy flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{program.duration}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-2">
                {program.title}
              </h1>
              <p className="text-base font-semibold text-brand-coral mb-4">
                {program.subtitle}
              </p>
              <p className="text-sm sm:text-base text-brand-navy/85 leading-relaxed font-normal">
                {program.longDescription}
              </p>
            </div>

            {/* Who is this suitable for */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-coral" />
                <span>Who This Protocol is Designed For</span>
              </h3>
              <div className="space-y-3 pt-2">
                {program.suitableFor.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-navy/85">
                    <Check className="w-4 h-4 text-brand-mint-dark flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What is Included in Download Guide */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <Download className="w-5 h-5 text-brand-mint-dark" />
                <span>What's Inside the Digital Guide</span>
              </h3>
              <div className="space-y-3 pt-2">
                {program.whatsIncluded.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-navy/85">
                    <Check className="w-4 h-4 text-brand-coral flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Day Meal Schedule */}
            {program.sampleMealSchedule && program.sampleMealSchedule.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
                <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-gold" />
                  <span>Sample Protocol Day Schedule</span>
                </h3>
                <div className="space-y-3 pt-2">
                  {program.sampleMealSchedule.map((schedule, i) => (
                    <div key={i} className="p-3.5 rounded-2xl bg-surface-subtle border border-surface-border flex items-start gap-3">
                      <span className="px-2 py-1 rounded-lg bg-brand-navy text-white text-[11px] font-extrabold flex-shrink-0">
                        {schedule.timing}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-brand-navy">{schedule.meal}</h4>
                        <p className="text-xs text-brand-navy/75 mt-0.5 font-normal">{schedule.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Pricing & Digital Download Sticky Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-mint/40 shadow-soft-xl space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block mb-1">
                  Instant Download Guide
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-navy">${program.priceUsd}</span>
                  <span className="text-lg font-bold text-brand-navy/70">USD</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border text-xs text-brand-navy/75 space-y-2.5">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-mint-dark" />
                  <span>{program.downloadFormat}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-brand-mint-dark" />
                  <span>Instant access upon checkout & account dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-mint-dark" />
                  <span>Verified Clinical Protocol by Dana Bardakji</span>
                </div>
              </div>

              <button
                onClick={() =>
                  addToCart({
                    id: program.id,
                    title: program.title,
                    subtitle: program.subtitle,
                    price: `$${program.priceUsd} USD`,
                    priceNumber: program.priceUsd,
                    currency: 'USD',
                    type: 'program',
                    slug: `/programs/${program.slug}`,
                    badge: program.badge,
                  })
                }
                className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart (${program.priceUsd} USD)</span>
              </button>

              {/* Add Consultation Bundle Option */}
              <div className="pt-4 border-t border-brand-navy/10">
                <div className="p-4 rounded-2xl bg-brand-gold/15 border border-brand-gold/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-navy flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5 text-brand-navy" />
                      <span>Bundle with 1-on-1 Consultation</span>
                    </span>
                    <span className="text-xs font-black text-brand-navy">+$50 USD</span>
                  </div>
                  <p className="text-[11px] text-brand-navy/75 leading-relaxed">
                    Add a private 45-minute clinical diagnostic consultation with Dana to review this protocol together.
                  </p>
                  <button
                    onClick={handleAddBundle}
                    className="w-full py-2 px-3 rounded-xl text-xs font-bold text-brand-navy bg-brand-gold hover:bg-white transition-colors text-center"
                  >
                    Add Programme + Consultation (${program.priceUsd + 50} USD)
                  </button>
                </div>
              </div>

              <div className="text-center pt-1">
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
