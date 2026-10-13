import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
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
              Data Security & Medical Privacy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-2">
              Privacy Policy & Medical Confidentiality
            </h1>
            <p className="text-xs text-brand-navy/60">Last Updated: October 2026</p>
          </div>

          <div className="space-y-6 text-sm text-brand-navy/85 leading-relaxed font-normal">
            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">1. Patient Medical Confidentiality</h2>
              <p>
                Dana Bardakji adheres to the highest standards of clinical and medical data protection. All health questionnaires, lab results, body composition data, and dietary notes you provide are held in strict medical confidence and are never shared, sold, or disclosed to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">2. Information We Collect</h2>
              <p>When you purchase a package, programme, or book a consultation, we collect:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-brand-navy/80">
                <li><strong>Contact Data:</strong> Full Name, Email Address, WhatsApp / Phone Number.</li>
                <li><strong>Clinical & Health Data:</strong> Height, weight, age, medical diagnoses, food allergies, medication history, and lifestyle patterns provided during intake.</li>
                <li><strong>Payment Data:</strong> Payment details are processed securely via Stripe. We do not store full credit card numbers on our servers.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">3. How We Use Your Information</h2>
              <p>
                Your data is used solely to formulate your personalized clinical nutrition plan, provide direct consultations, process transactions, and send order confirmation receipts and digital download files.
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">4. Data Security & Retention</h2>
              <p>
                We employ 256-bit SSL encryption across all web interactions. Your intake documents and progress check-ins are stored in encrypted client folders accessible only by certified dietitian Dana Bardakji.
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-brand-navy mb-2">5. Inquiries & Rights</h2>
              <p>
                You may request a copy of your records or request complete deletion of your data at any time by contacting <a href="mailto:hello@danabardakji.com" className="text-brand-coral font-bold underline">hello@danabardakji.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
