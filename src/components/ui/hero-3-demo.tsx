import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import Modal from '@/components/Modal';
import GoogleForm from '@/components/GoogleForm';
import { useState } from 'react';

// A list of local image paths for the demo
const DEMO_IMAGES = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
];

const AnimatedHeroDemo = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Google Form URL for booking services
  const bookingFormUrl = "https://forms.gle/kAAdjqfRY2qaafqb9";

  const handleBookNowClick = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <>
      <AnimatedMarqueeHero
        tagline=""
        title={
          <img
            src="/FX LOGO.png"
            alt="FX Logo"
            className="w-64 h-64 md:w-80 md:h-80 object-contain mx-auto my-2"
          />
        }
        description="Providing Stage Effect Machines SFX and Event Essentials"
        ctaText="Book Now"
        ctaOnClick={handleBookNowClick}
        images={DEMO_IMAGES}
        className="bg-black"
      />
      {/* Booking Modal */}
      <Modal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)}>
        <GoogleForm
          formUrl={bookingFormUrl}
          title="Booking Form"
          description="Please fill out all required fields"
        />
      </Modal>
    </>
  );
};

export default AnimatedHeroDemo;