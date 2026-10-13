import React from 'react';
import { motion } from 'framer-motion';
import { User, Download, Calendar, MessageCircle, FileText, CheckCircle2, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const OrdersPage: React.FC = () => {
  const handleDownload = (filename: string) => {
    const content = `Dana Bardakji - Official Clinical Guide\nFile: ${filename}\nIssued: October 2026\nLicensed to: Sarah Al-Mansoor\n\nFor personalized adjustments, contact Dana on WhatsApp (+962 7 9222 2058).`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloads = [
    {
      title: 'Gut Reset & Microbiome Protocol Guide',
      pages: '36 Pages (PDF)',
      tag: 'Clinical Protocol',
      filename: 'Dana_Bardakji_Gut_Reset_Protocol_Guide',
    },
    {
      title: 'Food Exchange & Portion Master Handbook',
      pages: '40 Pages (PDF)',
      tag: 'Reference Manual',
      filename: 'Dana_Bardakji_Food_Exchange_Handbook',
    },
    {
      title: 'Liquid Diet & Detox Rest Roadmap',
      pages: '28 Pages (PDF)',
      tag: 'Protocol Guide',
      filename: 'Dana_Bardakji_Liquid_Diet_Guide',
    },
  ];

  const orderHistory = [
    {
      id: 'ORD-849201',
      date: 'Oct 02, 2026',
      items: 'Premium Package (8 Weeks) + Gut Reset Protocol',
      total: '1,000 DHS + $45 USD',
      status: 'Active',
    },
    {
      id: 'ORD-729103',
      date: 'Sep 15, 2026',
      items: 'One-on-One Diagnostic Consultation',
      total: '$50.00 USD',
      status: 'Completed',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-1">
              Client Portal Dashboard
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              My Account & Digital Downloads
            </h1>
          </div>

          <a
            href="https://wa.me/962792222058"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-soft-sm transition-colors w-fit"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Dana Directly</span>
          </a>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Active Protocol & Digital Downloads */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Active Protocol Status Banner */}
            <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 shadow-soft-lg space-y-4 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold text-brand-navy">
                  Active Clinical Protocol
                </span>
                <span className="text-xs text-brand-mint font-semibold">Week 3 of 8</span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white mb-1">
                  Premium Package (8 Weeks)
                </h3>
                <p className="text-xs text-white/75 font-normal">
                  Personalized Metabolic Balance & Gut Restoration Plan
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-xs space-y-1">
                  <span className="text-white/60 block font-medium">Next Weekly Check-in:</span>
                  <span className="text-white font-bold flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-brand-gold" />
                    <span>Wednesday (WhatsApp Biometric Form)</span>
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/10 border border-white/10 text-xs space-y-1">
                  <span className="text-white/60 block font-medium">Included Bonus Sessions:</span>
                  <span className="text-white font-bold flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand-mint" />
                    <span>1 Bonus Consultation Available</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Downloadable Library */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <div className="flex items-center justify-between border-b border-brand-navy/10 pb-3">
                <h3 className="text-lg font-extrabold text-brand-navy flex items-center gap-2">
                  <Download className="w-5 h-5 text-brand-mint-dark" />
                  <span>My Digital Guides & PDF Library</span>
                </h3>
                <span className="text-xs text-brand-navy/60 font-semibold">{downloads.length} Resources</span>
              </div>

              <div className="space-y-3 pt-2">
                {downloads.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-surface-subtle border border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-brand-mint transition-colors"
                  >
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-brand-gold/25 text-brand-navy mb-1">
                        {item.tag}
                      </span>
                      <h4 className="text-sm font-bold text-brand-navy">
                        {item.title}
                      </h4>
                      <p className="text-xs text-brand-navy/60">{item.pages}</p>
                    </div>

                    <button
                      onClick={() => handleDownload(item.filename)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-brand-navy bg-white hover:bg-brand-coral hover:text-white border border-brand-navy/10 shadow-soft-xs transition-all flex-shrink-0"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order History */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <h3 className="text-lg font-extrabold text-brand-navy border-b border-brand-navy/10 pb-3">
                Order History & Invoices
              </h3>

              <div className="divide-y divide-brand-navy/5">
                {orderHistory.map((order) => (
                  <div key={order.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-brand-navy text-sm">{order.id}</span>
                        <span className="text-brand-navy/50">• {order.date}</span>
                      </div>
                      <p className="text-brand-navy/70 mt-0.5">{order.items}</p>
                    </div>

                    <div className="flex items-center gap-3 justify-between sm:justify-end">
                      <span className="font-extrabold text-brand-coral">{order.total}</span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-brand-mint/30 text-brand-navy">
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Client Profile & Quick Booking */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            
            {/* Profile Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center font-extrabold text-lg">
                  S
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-brand-navy">Sarah Al-Mansoor</h4>
                  <p className="text-xs text-brand-navy/60 font-medium">sarah@example.com</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-brand-navy/75 space-y-1.5">
                <div><strong className="text-brand-navy">Status:</strong> Active Patient</div>
                <div><strong className="text-brand-navy">Location:</strong> Abu Dhabi, UAE</div>
                <div><strong className="text-brand-navy">Goal:</strong> PCOS & Metabolic Health</div>
              </div>
            </div>

            {/* Quick Add-on Consultation CTA */}
            <div className="bg-white rounded-3xl p-6 border border-brand-coral/30 shadow-soft space-y-3">
              <h4 className="text-sm font-extrabold text-brand-navy">Need an Extra Diagnostic Session?</h4>
              <p className="text-xs text-brand-navy/75 leading-relaxed font-normal">
                Book a direct 45-minute follow-up session with Dana to review new laboratory results or adjust your protocol.
              </p>
              <Link
                to="/packages/consultation"
                className="block w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark text-center shadow-soft transition-colors"
              >
                Book Session ($50 USD)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
