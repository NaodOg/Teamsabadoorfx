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
        {/* LEFT SIDE - IMAGE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[300px] md:h-[400px] lg:h-[500px] w-full"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full h-full overflow-hidden rounded-lg"
          >
            <Image
              src="/image10.jpeg"
              alt="TeamsabadorFX"
              width={600}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - TEXT CONTENT */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          {/* Small Title */}
          <h3 className="text-white text-xl font-semibold mb-4">
            TeamsabadorFX
          </h3>

          {/* Main Heading */}
          <h1 className="text-white font-extrabold leading-tight text-3xl md:text-4xl lg:text-6xl mb-6">
            Creating Timeless
            <br />
            Impressions.
          </h1>

          {/* Paragraph */}
          <p className="text-neutral-300 text-base md:text-xl leading-relaxed mb-8 max-w-xl">
            Whether you are preparing a festival, club event, corporate function, or private celebration, TeamSabadoorFX.store offers high-quality products designed to brighten, energize, and transform any environment. Our mission is simple: to help your event stand out with creative FX solutions and consistent professional support.
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
      </div>
    </section>
  );
}