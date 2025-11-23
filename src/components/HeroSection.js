"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  // Google Form URL for booking services
  const bookingFormUrl = "https://forms.gle/kAAdjqfRY2qaafqb9";

  const handleBookNowClick = () => {
    window.open(bookingFormUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full bg-[#0b0b0b] py-20 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* LEFT SIDE - TEXT CONTENT */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          {/* Main Title */}
          <h1 className="text-yellow-400 font-extrabold leading-tight text-3xl md:text-4xl lg:text-5xl mb-6">
            TeamSabadoorFX.store-Elevate Every Event
          </h1>

          {/* Paragraph 1 */}
          <p className="text-neutral-300 text-base md:text-xl leading-relaxed mb-4 max-w-xl">
            TeamSabadoorFX.store is your trusted source for premium event FX products, crowd-engagement tools, and modern event essentials. As the newest division of EthioSabadoor Trading PLC, we bring innovation, energy, and reliability to the heart of every celebration. From glow gear and wristbands to stage effects, VIP items, and staff tools, we provide everything you need to enhance your event atmosphere and deliver unforgettable experiences.
          </p>

          {/* Mobile: Image appears here */}
          <div className="lg:hidden mb-6 rounded-xl overflow-hidden">
            <Image
              src="/image3.jpg"
              alt="TeamsabadorFX Products"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Paragraph 2 */}
          <p className="text-neutral-300 text-base md:text-xl leading-relaxed mb-4 max-w-xl">
            Whether you are preparing a festival, club event, corporate function, or private celebration, TeamSabadoorFX.store offers high-quality products designed to brighten, energize, and transform any environment. Our mission is simple: to help your event stand out with creative FX solutions and consistent professional support.
          </p>

          {/* Paragraph 3 */}
          <p className="text-neutral-300 text-base md:text-xl leading-relaxed mb-8 max-w-xl">
            Explore our wide collection, customize your order, and let us power your vision - one effect at a time.
          </p>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookNowClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 text-base md:text-lg"
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE (Desktop only) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[300px] md:h-[400px] lg:h-[500px] w-full hidden lg:block"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full overflow-hidden rounded-lg"
          >
            <Image
              src="/image3.jpg"
              alt="TeamsabadorFX Products"
              width={600}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}