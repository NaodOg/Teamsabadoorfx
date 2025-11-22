"use client";

import { motion } from "framer-motion";

export default function GoogleForm({ formUrl, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="bg-[#111111] rounded-xl p-6 w-full max-w-4xl max-h-[80vh] overflow-auto"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-neutral-400 mt-2">{description}</p>
      </div>
      <div className="w-full h-[60vh]">
        <iframe 
          src={formUrl} 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
          className="rounded-lg"
          title={title}
        >
          Loading Google Form...
        </iframe>
      </div>
    </motion.div>
  );
}