"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Modal from '@/components/Modal';
import GoogleForm from '@/components/GoogleForm';
import { useState } from 'react';

export default function HeroSection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Google Form URL for booking services
  const bookingFormUrl = "https://forms.gle/kAAdjqfRY2qaafqb9";

  return (
    <section className="w-full bg-[#0b0b0b] py-20 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - IMAGE */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[500px] w-full"
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
          <h1 className="text-white font-extrabold leading-tight text-5xl lg:text-6xl mb-6">
            Creating Timeless
            <br />
            Impressions.
          </h1>

          {/* Paragraph */}
          <p className="text-neutral-300 text-xl md:text-2xl leading-relaxed mb-8 max-w-xl">
            Whether you are preparing a festival, club event, corporate function, or private celebration, TeamSabadoorFX.store offers high-quality products designed to brighten, energize, and transform any environment. Our mission is simple: to help your event stand out with creative FX solutions and consistent professional support.
          </p>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-all duration-200"
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <Modal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)}>
        <GoogleForm
          formUrl={bookingFormUrl}
          title="Booking Form"
          description="Please fill out all required fields"
        />
      </Modal>
    </section>
  );
}