import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ScrollToTopOnMount } from './components/ScrollToTopOnMount';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { StripeCheckoutModal } from './components/StripeCheckoutModal';

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

import { CartPage } from './pages/commerce/CartPage';
import { CheckoutPage } from './pages/commerce/CheckoutPage';
import { ThankYouPage } from './pages/commerce/ThankYouPage';

import { LoginPage } from './pages/account/LoginPage';
import { OrdersPage } from './pages/account/OrdersPage';

import { RefundPolicyPage } from './pages/policies/RefundPolicyPage';
import { PrivacyPolicyPage } from './pages/policies/PrivacyPolicyPage';
import { TermsPage } from './pages/policies/TermsPage';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({
    name: 'One-on-One Clinical Consultation',
    price: '$50 USD',
    details: 'Direct Clinical Evaluation Session (*Does not include diet plan)',
  });

  const handleOpenConsultation = () => {
    setSelectedPlan({
      name: 'One-on-One Clinical Consultation',
      price: '$50 USD',
      details: 'Direct Clinical Evaluation Session (*Does not include diet plan)',
    });
    setIsModalOpen(true);
  };

  const handleSelectPlan = (name: string, price: string, details: string) => {
    setSelectedPlan({ name, price, details });
    setIsModalOpen(true);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTopOnMount />
        <div className="min-h-screen bg-[#fbfdfd] flex flex-col selection:bg-brand-mint/30 selection:text-brand-navy">
          
          {/* Global Sticky Navigation */}
          <Navbar />

          {/* Global Slide-Over Cart Drawer */}
          <CartDrawer />

          {/* Global WhatsApp Chat Popup */}
          <WhatsAppButton />

          {/* Route Outlet */}
          <main className="flex-grow">
            <Routes>
              {/* Homepage (10 Sections) */}
              <Route
                path="/"
                element={
                  <HomePage
                    onSelectPlan={handleSelectPlan}
                    onOpenConsultation={handleOpenConsultation}
                  />
                }
              />

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

              {/* Cart & Checkout Branch */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />

              {/* My Account Branch */}
              <Route path="/account" element={<OrdersPage />} />
              <Route path="/account/login" element={<LoginPage />} />
              <Route path="/account/orders" element={<OrdersPage />} />

              {/* Policies Branch */}
              <Route path="/policies" element={<RefundPolicyPage />} />
              <Route path="/policies/refund" element={<RefundPolicyPage />} />
              <Route path="/policies/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/policies/terms" element={<TermsPage />} />

              {/* Catch-all fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Global Rich Footer */}
          <Footer />

          {/* Stripe-Ready Checkout / Booking Drawer */}
          <StripeCheckoutModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            planName={selectedPlan.name}
            planPrice={selectedPlan.price}
            planDetails={selectedPlan.details}
          />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
