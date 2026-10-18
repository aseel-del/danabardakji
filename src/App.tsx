import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ScrollToTopOnMount } from './components/ScrollToTopOnMount';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { PackagesIndexPage } from './pages/packages/PackagesIndexPage';
import { StandardPackagePage } from './pages/packages/StandardPackagePage';
import { PremiumPackagePage } from './pages/packages/PremiumPackagePage';
import { ExtendedPackagePage } from './pages/packages/ExtendedPackagePage';
import { ConsultationPage } from './pages/packages/ConsultationPage';

import { ProgramsIndexPage } from './pages/programs/ProgramsIndexPage';
import { ProgramDetailPage } from './pages/programs/ProgramDetailPage';

import { AboutIndexPage } from './pages/about/AboutIndexPage';
import { MeetDanaPage } from './pages/about/MeetDanaPage';
import { WhoSheWorksWithPage } from './pages/about/WhoSheWorksWithPage';
import { MoreThanNutritionPage } from './pages/about/MoreThanNutritionPage';

import { RefundPolicyPage } from './pages/policies/RefundPolicyPage';
import { PrivacyPolicyPage } from './pages/policies/PrivacyPolicyPage';
import { TermsPage } from './pages/policies/TermsPage';

export function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTopOnMount />
        <div className="min-h-screen bg-[#fbfdfd] flex flex-col selection:bg-brand-mint/30 selection:text-brand-navy">
          
          {/* Global Sticky Navigation */}
          <Navbar />

          {/* Global WhatsApp Chat Popup */}
          <WhatsAppButton />

          {/* Scroll to Top Floating Button */}
          <ScrollToTop />

          {/* Route Outlet */}
          <main className="flex-grow">
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<HomePage />} />

              {/* Packages & Consultations Branch */}
              <Route path="/packages" element={<PackagesIndexPage />} />
              <Route path="/packages/standard" element={<StandardPackagePage />} />
              <Route path="/packages/premium" element={<PremiumPackagePage />} />
              <Route path="/packages/extended" element={<ExtendedPackagePage />} />
              <Route path="/packages/consultation" element={<ConsultationPage />} />

              {/* Programmes & Meal Plans Branch */}
              <Route path="/programs" element={<ProgramsIndexPage />} />
              <Route path="/programs/:slug" element={<ProgramDetailPage />} />

              {/* About Dana Branch */}
              <Route path="/about" element={<AboutIndexPage />} />
              <Route path="/about/meet" element={<MeetDanaPage />} />
              <Route path="/about/who" element={<WhoSheWorksWithPage />} />
              <Route path="/about/more" element={<MoreThanNutritionPage />} />

              {/* Policies Branch */}
              <Route path="/policies" element={<RefundPolicyPage />} />
              <Route path="/policies/refund" element={<RefundPolicyPage />} />
              <Route path="/policies/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/policies/terms" element={<TermsPage />} />

              {/* Redirect any legacy cart/account routes directly to packages */}
              <Route path="/cart" element={<Navigate to="/packages" replace />} />
              <Route path="/checkout" element={<Navigate to="/packages" replace />} />
              <Route path="/account/*" element={<Navigate to="/packages" replace />} />
              <Route path="/account" element={<Navigate to="/packages" replace />} />

              {/* Catch-all fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Global Rich Footer */}
          <Footer />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
