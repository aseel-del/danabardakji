import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, CheckCheck } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickPrompts = [
    'Book 1-on-1 Consultation ($50)',
    'Inquire about Personalized Diet Packages',
    'Ask about Therapeutic Nutrition (Diabetes, PCOS, etc.)',
  ];

  const handleSendMessage = (textToSend?: string) => {
    const finalMsg = textToSend || message || 'Hello Dana, I would like to inquire about a clinical nutrition consultation.';
    const encoded = encodeURIComponent(finalMsg);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=962792222058&text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Interactive In-Page Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="mb-4 w-[calc(100vw-2.5rem)] sm:w-[360px] bg-white rounded-3xl shadow-soft-xl border border-brand-navy/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-brand-navy p-4 text-white flex items-center justify-between relative overflow-hidden">
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <img
                    src="/dana-bardakji.jpg"
                    alt="Dana Bardakji"
                    className="w-11 h-11 rounded-full object-cover border-2 border-brand-mint"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-brand-navy shadow-sm" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Dana Bardakji
                  </h4>
                  <p className="text-[11px] text-brand-mint font-medium">
                    Clinical Dietitian • Typically replies instantly
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="relative z-10 p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close chat window"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Decorative accent top blur */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-coral/20 rounded-full blur-xl pointer-events-none" />
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-[#f8faf9] flex-1 space-y-3 min-h-[190px] max-h-[260px] overflow-y-auto">
              {/* Timestamp */}
              <div className="text-center">
                <span className="text-[10px] uppercase font-semibold text-brand-navy/40 bg-black/5 px-2.5 py-1 rounded-full">
                  Today
                </span>
              </div>

              {/* Dana's incoming message bubble */}
              <div className="flex flex-col items-start max-w-[88%]">
                <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-soft-sm border border-brand-navy/5 text-xs text-brand-navy leading-relaxed">
                  <p className="font-semibold text-brand-navy mb-1">Dana Bardakji</p>
                  Hello! How can I assist you with your personalized nutrition plan or direct consultation today?
                </div>
                <div className="flex items-center gap-1 text-[10px] text-brand-navy/50 mt-1 ml-1">
                  <span>Just now</span>
                  <CheckCheck className="w-3 h-3 text-brand-mint-dark" />
                </div>
              </div>

              {/* Quick Suggestion Chips */}
              <div className="pt-2 space-y-1.5">
                <p className="text-[11px] font-semibold text-brand-navy/60">Quick Inquiries:</p>
                <div className="flex flex-col gap-1.5">
                  {quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-left text-[11px] font-medium text-brand-navy bg-white hover:bg-brand-mint/20 border border-brand-navy/10 hover:border-brand-mint/50 p-2 rounded-xl transition-all shadow-soft-sm hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Message Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white border-t border-brand-navy/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 bg-surface-subtle border border-brand-navy/15 focus:border-brand-mint focus:bg-white rounded-xl px-3 py-2.5 text-xs text-brand-navy placeholder:text-brand-navy/40 focus:outline-none transition-all"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-soft-sm transition-all hover:scale-105 active:scale-95 flex-shrink-0"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Action Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25D366] text-white shadow-soft-lg hover:shadow-xl transition-shadow group"
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {/* Ambient pulsing ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-2xl bg-[#25D366]/40 animate-ping opacity-30 pointer-events-none" />
        )}

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="w-7 h-7 fill-current transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
