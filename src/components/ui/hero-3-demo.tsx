import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

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
  // Google Form URL for booking services
  const bookingFormUrl = "https://forms.gle/kAAdjqfRY2qaafqb9";

  const handleBookNowClick = () => {
    window.open(bookingFormUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatedMarqueeHero
      tagline=""
      title={
        <div className="flex flex-col items-center">
          <img
            src="/FX LOGO.png"
            alt="FX Logo"
            className="w-64 h-64 md:w-80 md:h-80 object-contain mx-auto mt-8"
          />
          <div className="text-center mt-1">
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
              <span className="text-[#C76F1A]">WE DON'T JUST SUPPLY EFFECTS</span>
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              <span className="text-white">WE CREATE ATMOSPHERES</span>
            </div>
          </div>
        </div>
      }
      description="Providing Stage Effect Machines SFX and Event Essentials"
      ctaText="Book Now"
      ctaOnClick={handleBookNowClick}
      images={DEMO_IMAGES}
      className="bg-black"
    />
  );
};

export default AnimatedHeroDemo;