import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Download, ArrowRight, Calendar, MessageCircle, FileText } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

export const ThankYouPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId') || `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  const name = searchParams.get('name') || 'Valued Client';
  const email = searchParams.get('email') || 'your email';

  const handleDownloadDemo = (filename: string) => {
    // Generate a quick downloadable blob text file as a realistic download trigger
    const content = `Dana Bardakji - Clinical Nutrition Protocol Guide\nOrder ID: ${orderId}\nLicensed to: ${name}\n\nThank you for purchasing this clinical protocol. Please consult Dana on WhatsApp (+962 7 9222 2058) for personalized adjustments.`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Animated Checkmark Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 200 }}
          className="w-20 h-20 bg-brand-mint/30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft-lg"
        >
          <CheckCircle2 className="w-12 h-12 text-brand-mint-dark" />
        </motion.div>

        {/* Confirmation Heading */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-2"
        >
          Order Confirmed • Receipt #{orderId}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4"
        >
          Thank You, {name}!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-brand-navy/80 max-w-xl mx-auto leading-relaxed mb-10 font-normal"
        >
          Your order has been registered and a confirmation receipt has been sent to <strong>{email}</strong>.
        </motion.p>

        {/* Next Steps Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft text-left space-y-6 mb-8">
          <h3 className="text-lg font-extrabold text-brand-navy border-b border-brand-navy/10 pb-3">
            What Happens Next:
          </h3>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-coral/15 text-brand-coral flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-navy">1. Direct WhatsApp Outreach</h4>
                <p className="text-xs text-brand-navy/70 mt-0.5">
                  Dana will contact you directly on WhatsApp within 24 hours to review your medical goals and coordinate your first clinical session.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-mint/20 text-brand-navy flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-brand-mint-dark" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-navy">2. Intake Evaluation & Lab Review</h4>
                <p className="text-xs text-brand-navy/70 mt-0.5">
                  You can share your recent blood tests, food logs, and medical history directly via secure WhatsApp message.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/25 text-brand-navy flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-brand-navy" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-navy">3. Instant Digital Downloads</h4>
                <p className="text-xs text-brand-navy/70 mt-0.5">
                  If your order includes digital protocols (Liquid Diet, Gut Reset, Food Exchange Guide), your PDF guides are ready below.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Download Buttons */}
          <div className="pt-4 border-t border-brand-navy/10 flex flex-wrap gap-3">
            <button
              onClick={() => handleDownloadDemo('Dana_Bardakji_Clinical_Starter_Kit')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-brand-navy bg-surface-subtle hover:bg-brand-mint/20 border border-brand-navy/10 transition-colors"
            >
              <Download className="w-4 h-4 text-brand-coral" />
              <span>Download Clinical Starter Kit (PDF)</span>
            </button>
            <button
              onClick={() => handleDownloadDemo('Dana_Bardakji_Food_Exchange_List')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-brand-navy bg-surface-subtle hover:bg-brand-mint/20 border border-brand-navy/10 transition-colors"
            >
              <Download className="w-4 h-4 text-brand-mint-dark" />
              <span>Download Food Exchange Tables (PDF)</span>
            </button>
          </div>
        </div>

        {/* Return / Account Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/account/orders"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft transition-colors"
          >
            View in Client Account
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold text-brand-navy bg-white hover:bg-surface-subtle border border-brand-navy/15 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};
