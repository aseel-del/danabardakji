import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { GoogleIcon } from './common/GoogleIcon';

export const ContactSection: React.FC = () => {
  const { isRTL } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-wider mb-3 border border-brand-coral/20">
                <GoogleIcon name="contact_support" className="text-sm" />
                <span>{isRTL ? 'تواصل مع العيادة' : 'Get in Touch'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
                {isRTL ? 'ابدأ رحلتك نحو صحة أفضل اليوم' : 'Start Your Health Journey Today'}
              </h2>

              <p className="text-base text-brand-navy/80 leading-relaxed font-normal">
                {isRTL 
                  ? 'سواء كانت لديك استفسارات حول باقات المتابعة، أو ترغب في تقييم حالتك الصحية، أو حجز جلسة استشارية مع دانا، يسعدنا التواصل معك.'
                  : 'Whether you have questions regarding our clinical packages, need nutritional guidance, or wish to schedule a consultation, Dana is available to assist you.'}
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-4">
              
              {/* Email */}
              <a
                href="mailto:hello@danabardakji.com"
                className="p-5 rounded-2xl bg-surface-subtle hover:bg-brand-gold/25 border border-surface-border hover:border-brand-gold transition-all duration-300 flex items-center justify-between group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/30 flex items-center justify-center text-brand-navy group-hover:scale-105 transition-transform flex-shrink-0">
                    <GoogleIcon name="mail" className="text-2xl text-brand-navy" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block">
                      {isRTL ? 'البريد الإلكتروني المباشر' : 'Email Inquiries'}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-brand-navy break-all">
                      hello@danabardakji.com
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-navy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shadow-soft-sm flex-shrink-0">
                  <GoogleIcon name="arrow_outward" className="text-base text-brand-navy" />
                </div>
              </a>

              {/* Consultation Availability */}
              <div className="p-5 rounded-2xl bg-surface-subtle border border-surface-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy flex-shrink-0">
                  <GoogleIcon name="language" className="text-2xl text-brand-navy" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block">
                    {isRTL ? 'نطاق الخدمة والعيادات' : 'Practice Locations & Reach'}
                  </span>
                  <p className="text-sm font-bold text-brand-navy mt-0.5">
                    {isRTL ? 'عمّان (الأردن) • أبوظبي (الإمارات) • استشارات أونلاين حول العالم' : 'Amman (Jordan) • Abu Dhabi (UAE) • Online Worldwide'}
                  </p>
                  <p className="text-xs text-brand-navy/70 mt-1">
                    {isRTL ? 'مواعيد مرنة تناسب جميع المناطق الزمنية في دول الخليج، أوروبا، ومختلف دول العالم.' : 'Flexible appointment scheduling across all GCC, European & International time zones.'}
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <a
                href="https://wa.me/962792222058"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all duration-300 flex items-center justify-between group block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                    <GoogleIcon name="chat" className="text-2xl" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                      {isRTL ? 'تنسيق فوري عبر واتساب' : 'WhatsApp Support'}
                    </span>
                    <span dir="ltr" className="text-base sm:text-lg font-extrabold text-brand-navy">
                      (+962 7 9222 2058)
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-emerald-700 shadow-soft-sm flex-shrink-0">
                  <GoogleIcon name="arrow_outward" className="text-base" />
                </div>
              </a>

            </div>
          </motion.div>

          {/* Quick Message Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-surface-subtle p-8 sm:p-10 rounded-3xl border border-surface-border shadow-soft"
          >
            <h3 className="text-2xl font-bold text-brand-navy mb-2">
              {isRTL ? 'إرسال استفسار مباشر' : 'Send a Direct Message'}
            </h3>
            <p className="text-sm text-brand-navy/70 mb-6">
              {isRTL 
                ? 'يرجى تعبئة النموذج التالي وستتواصل معك دانا مباشرة لتأكيد التفاصيل ومواعيد المتابعة.'
                : 'Fill out the form below and Dana will respond directly with consultation openings.'}
            </p>

            {submitted ? (
              <div className="bg-white p-8 rounded-2xl border border-brand-mint text-center space-y-3">
                <div className="w-14 h-14 bg-brand-mint/25 rounded-full flex items-center justify-center mx-auto text-brand-navy">
                  <GoogleIcon name="check_circle" className="text-3xl text-emerald-600" filled />
                </div>
                <h4 className="text-xl font-bold text-brand-navy">
                  {isRTL ? 'تم استلام استفسارك بنجاح' : 'Message Received'}
                </h4>
                <p className="text-sm text-brand-navy/80">
                  {isRTL 
                    ? 'شكراً لتواصلك معنا! ستقوم الأخصائية دانا بمراجعة رسالتك والرد عليك عبر الواتساب أو البريد الإلكتروني خلال 24 ساعة.'
                    : 'Thank you for reaching out! Dana will review your message and reply via email or WhatsApp within 24 hours.'}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 text-xs font-bold text-brand-navy bg-surface-subtle hover:bg-brand-mint/20 rounded-xl transition-colors cursor-pointer"
                >
                  {isRTL ? 'إرسال رسالة أخرى' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy/80 mb-1.5">
                      {isRTL ? 'الاسم الكامل *' : 'Your Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isRTL ? 'مثال: سارة أحمد' : 'e.g. Layla Mansour'}
                      className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none text-sm text-brand-navy bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy/80 mb-1.5">
                      {isRTL ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      dir="ltr"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 50 ... or +962 7 ..."
                      className={`w-full px-4 py-3 rounded-xl border border-brand-navy/15 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none text-sm text-brand-navy bg-white transition-all ${isRTL ? 'text-right' : 'text-left'}`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy/80 mb-1.5">
                    {isRTL ? 'البريد الإلكتروني *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    dir="ltr"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl border border-brand-navy/15 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none text-sm text-brand-navy bg-white transition-all ${isRTL ? 'text-right' : 'text-left'}`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy/80 mb-1.5">
                    {isRTL ? 'كيف يمكن للأخصائية دانا مساعدتك؟ *' : 'How can Dana help you? *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isRTL ? 'أخبرنا عن أهدافك الصحية، أو أي تشخيص مرضي أو استفسار حول الباقات...' : 'Tell us about your health goals, medical conditions, or any questions regarding the packages...'}
                    className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none text-sm text-brand-navy bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-brand-navy hover:bg-brand-navy-light shadow-soft transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{isRTL ? 'إرسال الاستفسار' : 'Submit Inquiry'}</span>
                  <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-base" />
                </button>
              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};
