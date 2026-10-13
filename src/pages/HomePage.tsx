import React from 'react';
import { Hero } from '../components/Hero';
import { PackagesSection } from '../components/PackagesSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { ProgrammesSection } from '../components/ProgrammesSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FaqSection } from '../components/FaqSection';
import { ClosingCtaSection } from '../components/ClosingCtaSection';

interface HomePageProps {
  onSelectPlan?: (name: string, price: string, details: string) => void;
  onOpenConsultation?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectPlan, onOpenConsultation }) => {
  return (
    <div className="space-y-0">
      {/* 2. Hero Section */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 3. Packages Section */}
      <PackagesSection onSelectPlan={onSelectPlan} />

      {/* 4. How It Works Section */}
      <HowItWorksSection />

      {/* 5. Programmes & Meal Plans Section */}
      <ProgrammesSection />

      {/* 6. Reviews Section */}
      <ReviewsSection />

      {/* 7 & 8. FAQ Heading & Accordion Section */}
      <FaqSection />

      {/* 9. Closing Text & CTA Section */}
      <ClosingCtaSection />
    </div>
  );
};
