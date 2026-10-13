import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ShoppingBag, ArrowLeft, ShieldCheck, Calendar, Clock, Stethoscope, Video, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { CONSULTATION_DATA } from '../../data/siteData';

export const ConsultationPage: React.FC = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (09:00 - 12:00)');
  const [consultationMode, setConsultationMode] = useState('Online Video Call (Zoom / Google Meet)');

  const handleBookNow = () => {
    addToCart({
      id: CONSULTATION_DATA.id,
      title: CONSULTATION_DATA.name,
      subtitle: `${consultationMode} • ${CONSULTATION_DATA.duration}`,
      price: `$${CONSULTATION_DATA.priceUsd} USD`,
      priceNumber: CONSULTATION_DATA.priceUsd,
      currency: 'USD',
      type: 'consultation',
      slug: `/packages/${CONSULTATION_DATA.slug}`,
      badge: 'Evaluation Session',
    });
    navigate('/checkout');
  };

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link
          to="/packages"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Packages</span>
        </Link>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-coral/15 text-brand-coral mb-3 inline-block">
                Direct Clinical Session
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
                {CONSULTATION_DATA.name}
              </h1>
              <p className="text-base text-brand-navy/80 leading-relaxed font-normal">
                {CONSULTATION_DATA.description}
              </p>
              <div className="mt-3 p-3.5 rounded-xl bg-brand-coral/10 border border-brand-coral/20 text-xs text-brand-coral font-bold">
                {CONSULTATION_DATA.note}
              </div>
            </div>

            {/* What is Included */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-brand-mint-dark" />
                <span>What Happens During Your Consultation</span>
              </h3>
              <div className="space-y-3 pt-2">
                {CONSULTATION_DATA.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-navy/85">
                    <Check className="w-4 h-4 text-brand-mint-dark flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Session Format */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-base font-bold text-brand-navy">Consultation Delivery Options</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border space-y-2">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Video className="w-4 h-4 text-brand-coral" />
                    <span>Online Worldwide (HD Video)</span>
                  </div>
                  <p className="text-xs text-brand-navy/70 leading-relaxed font-normal">
                    Secure private video consultation via Google Meet or Zoom. Accessible from anywhere in the world.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border space-y-2">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Calendar className="w-4 h-4 text-brand-mint-dark" />
                    <span>In-Person Clinic (Amman / Abu Dhabi)</span>
                  </div>
                  <p className="text-xs text-brand-navy/70 leading-relaxed font-normal">
                    Available by appointment at partner clinical centers in Amman (Jordan) and Abu Dhabi (UAE).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking / Appointment Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-coral/30 shadow-soft-xl space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 block mb-1">
                  1-on-1 Clinical Session ({CONSULTATION_DATA.duration})
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-navy">${CONSULTATION_DATA.priceUsd}</span>
                  <span className="text-lg font-bold text-brand-navy/70">USD</span>
                  <span className="text-xs font-semibold text-brand-navy/50"> (~{CONSULTATION_DATA.priceDhs} DHS)</span>
                </div>
              </div>

              {/* Booking Intake Inputs */}
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Consultation Mode
                  </label>
                  <select
                    value={consultationMode}
                    onChange={(e) => setConsultationMode(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/15 text-xs text-brand-navy bg-surface-subtle focus:bg-white focus:outline-none"
                  >
                    <option value="Online Video Call (Zoom / Google Meet)">Online Video Call (Zoom / Google Meet)</option>
                    <option value="In-Person Clinic (Amman / Abu Dhabi)">In-Person Clinic (Amman / Abu Dhabi)</option>
                    <option value="Direct Audio / Phone Call">Direct Audio / Phone Call</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                    Preferred Time of Day
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/15 text-xs text-brand-navy bg-surface-subtle focus:bg-white focus:outline-none"
                  >
                    <option value="Morning (09:00 - 12:00 GMT+3)">Morning (09:00 - 12:00 GMT+3)</option>
                    <option value="Afternoon (12:00 - 16:00 GMT+3)">Afternoon (12:00 - 16:00 GMT+3)</option>
                    <option value="Evening (16:00 - 20:00 GMT+3)">Evening (16:00 - 20:00 GMT+3)</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-subtle border border-surface-border text-xs text-brand-navy/75 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-mint-dark" />
                  <span>Duration: 45 - 60 Minutes Dedicated Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-mint-dark" />
                  <span>Dana will confirm exact slot on WhatsApp</span>
                </div>
              </div>

              <button
                onClick={handleBookNow}
                className="w-full py-4 px-6 rounded-2xl text-sm font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft hover:shadow-coral-glow transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Book & Proceed to Checkout ($50 USD)</span>
              </button>

              <div className="text-center pt-2">
                <a
                  href="https://wa.me/962792222058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand-navy hover:text-brand-coral transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
