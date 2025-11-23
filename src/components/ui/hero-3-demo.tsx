import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

// A list of local image paths for the demo
const DEMO_IMAGES = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image8.jpg",
  "/image9.jpg",
  "/image10.jpg",
  "/image11.jpg",
  "/image12.jpg",
  "/image13.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image8.jpg",
  "/image9.jpg",
  "/image10.jpg",
  "/image11.jpg",
  "/image12.jpg",
  "/image13.jpg",
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
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 object-contain mx-auto mt-20"
          />
          <div className="mt-1 px-4 w-full">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight sm:leading-normal tracking-wide">
              <div className="text-[#C76F1A] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">WE DON'T JUST SUPPLY EFFECTS</div>
              <div className="text-white">WE CREATE ATMOSPHERES</div>
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