import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RefundPolicyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-surface-border shadow-soft space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-1">
              Client Protection & Transparency
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-2">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs text-brand-navy/60">Last Updated: October 2026</p>
          </div>

          <div className="space-y-6 text-sm text-brand-navy/85 leading-relaxed font-normal">
            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">1. Personalized Clinical Packages (4, 8, 12 Weeks)</h2>
              <p>
                Due to the bespoke nature of personalized medical nutrition therapy, our clinical packages involve extensive case preparation, laboratory analysis, and customized diet formulation by Dana Bardakji.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-brand-navy/80">
                <li><strong>Prior to Plan Formulation:</strong> If you request a cancellation before Dana begins drafting your personalized plan (within 12 hours of purchase), a full refund minus a 5% administrative gateway fee is granted.</li>
                <li><strong>After Plan Delivery:</strong> Once the custom dietary plan has been delivered and weekly consultations have initiated, fees are non-refundable.</li>
                <li><strong>Freezes & Pauses:</strong> If you experience unexpected travel, illness, or medical emergencies, you may freeze your active package for up to 30 days upon written notice.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">2. One-on-One Consultations ($50 USD)</h2>
              <p>
                Consultation appointments can be rescheduled or canceled up to 24 hours prior to the scheduled session without penalty. Cancellations made with less than 24 hours' notice are subject to a 50% re-booking fee.
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">3. Digital Download Guides (Liquid Diet, Gut Reset, etc.)</h2>
              <p>
                Because digital PDF products and handbooks are delivered instantly upon purchase and cannot be returned, all digital guide purchases are final and non-refundable. If you experience technical difficulties downloading your files, our support team will promptly email you fresh access links.
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">4. Contact & Inquiries</h2>
              <p>
                For refund or rescheduling requests, please email <a href="mailto:hello@danabardakji.com" className="text-brand-coral font-bold underline">hello@danabardakji.com</a> or message our clinical coordinator via WhatsApp at <strong>+962 7 9222 2058</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
