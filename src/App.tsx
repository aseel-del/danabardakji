import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { StripeCheckoutModal } from './components/StripeCheckoutModal';

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

  const handleSelectService = (serviceTitle: string) => {
    setSelectedPlan({
      name: `${serviceTitle} Consultation`,
      price: '$50 USD',
      details: `1-on-1 assessment and guidance for ${serviceTitle}`,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fbfdfd] flex flex-col selection:bg-brand-mint/30 selection:text-brand-navy">
      {/* Sticky Header Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenConsultation={handleOpenConsultation} />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />
        <PackagesSection onSelectPlan={handleSelectPlan} />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive WhatsApp Chat Widget */}
      <WhatsAppButton />

      {/* Stripe-Ready Checkout / Booking Drawer */}
      <StripeCheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan.name}
        planPrice={selectedPlan.price}
        planDetails={selectedPlan.details}
      />
    </div>
  );
}

export default App;
