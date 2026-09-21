import React, { useState } from 'react';
import { DemoBanner } from './components/DemoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceStory } from './components/ExperienceStory';
import { ServicesSection } from './components/ServicesSection';
import { RitualsSection } from './components/RitualsSection';
import { WhyUs } from './components/WhyUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { TheSpaceSection } from './components/TheSpaceSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileActionBar } from './components/MobileActionBar';
import { SERVICES, ServiceItem } from './data/businessData';

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (serviceNameOrId?: string) => {
    if (serviceNameOrId) {
      const match = SERVICES.find(
        (s) =>
          s.id === serviceNameOrId ||
          s.name.toLowerCase().includes(serviceNameOrId.toLowerCase())
      );
      if (match) {
        setPreSelectedService(match);
      } else {
        setPreSelectedService(null);
      }
    } else {
      setPreSelectedService(null);
    }
    setIsBookingModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setPreSelectedService(service);
    setIsBookingModalOpen(true);
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Private Concept Banner */}
      <DemoBanner />

      {/* 2. Sticky Luxury Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        {/* 3. Cinematic Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* 4. The SHE Experience & Brand Story */}
        <ExperienceStory onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Signature Services Catalog */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 6. Specialized Treatments & Botanical Rituals */}
        <RitualsSection onOpenBooking={(name) => handleOpenBooking(name)} />

        {/* 7. Why SHE (5 Brand Pillars) */}
        <WhyUs />

        {/* 8. The Studio Space & Atmosphere */}
        <TheSpaceSection onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Verified Client Testimonials & Google 4.9 Rating */}
        <TestimonialsSection />

        {/* 10. Lookbook Gallery & Lightbox */}
        <GallerySection />

        {/* 11. High-Conversion Booking Section */}
        <BookingSection onOpenBooking={() => handleOpenBooking()} />

        {/* 12. Ogudu Location & Live Hours */}
        <LocationSection />
      </main>

      {/* 13. Luxury Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* 14. Mobile Bottom Action Bar */}
      <MobileActionBar onOpenBooking={() => handleOpenBooking()} />

      {/* 15. Interactive Multi-Step Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => {
          setIsBookingModalOpen(false);
          setPreSelectedService(null);
        }}
        preSelectedService={preSelectedService}
      />
    </div>
  );
};

export default App;
