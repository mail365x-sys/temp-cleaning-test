import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ValueProps from './components/ValueProps';
import Services from './components/Services';
import Calculator from './components/Calculator';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import TrustBadges from './components/TrustBadges';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(219);

  const handleBookNow = (price?: number) => {
    if (price) {
      setSelectedPrice(price);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onBookNowClick={() => handleBookNow()} />
      <Hero />
      <TrustBar />
      <ValueProps />
      <Services />
      <Calculator onBookNow={handleBookNow} />
      <HowItWorks />
      <Testimonials />
      <TrustBadges />
      <FAQ />
      <FinalCTA onBookNow={() => handleBookNow()} />
      <Footer />
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        price={selectedPrice}
      />
    </div>
  );
}

export default App;
