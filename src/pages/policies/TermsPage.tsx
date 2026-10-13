import React from 'react';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
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
              Legal Terms & Disclaimers
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-2">
              Terms of Service & Clinical Disclaimer
            </h1>
            <p className="text-xs text-brand-navy/60">Last Updated: October 2026</p>
          </div>

          <div className="space-y-6 text-sm text-brand-navy/85 leading-relaxed font-normal">
            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">1. Medical & Nutritional Therapy Disclaimer</h2>
              <p>
                Dana Bardakji is a certified Clinical Dietitian (B.Sc. Nutrition & UK Higher Diploma). The nutritional plans, protocols, and consultations provided are designed for clinical dietary therapy, habit formation, and wellness guidance. They are not intended as a substitute for acute emergency medical care, emergency pharmacological interventions, or surgical diagnoses.
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">2. Patient Responsibility & Health Disclosures</h2>
              <p>
                Clients agree to provide accurate medical histories, current medication lists, and disclosure of pre-existing conditions (e.g. renal disease, type-1 diabetes, pregnancy) to ensure dietary recommendations are safe and effective. You should always notify your primary care physician of significant dietary changes.
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">3. Intellectual Property Rights</h2>
              <p>
                All digital meal plan PDFs, protocol guides, and books authored by Dana Bardakji are protected by international copyright law. Guides purchased are licensed strictly for personal, non-commercial use by the single buyer and may not be distributed, published, or re-sold.
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">4. Governing Law</h2>
              <p>
                These terms are governed by the laws and medical regulations of the Hashemite Kingdom of Jordan and the United Arab Emirates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
