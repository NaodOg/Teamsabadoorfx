"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Search, Star, ShoppingCart } from 'lucide-react';
import Navbar from '@/components/navbar';
import HoverFooter from '@/components/ui/hover-footer-demo';

// Sample product data
const products = [
  {
    id: 1,
    name: "Professional Fog Machine",
    price: 250,
    description: "High-output fog machine perfect for large venues",
    category: "SFX Machines",
    rating: 4.8,
    image: "/placeholder.jpg",
    featured: true
  },
  {
    id: 2,
    name: "LED Dance Floor Panels",
    price: 120,
    description: "Customizable LED dance floor panels with multiple color options",
    category: "Glow Gears",
    rating: 4.9,
    image: "/placeholder.jpg",
    featured: true
  },
  {
    id: 3,
    name: "Laser Projector System",
    price: 300,
    description: "Advanced laser system with multiple patterns and colors",
    category: "Laser System",
    rating: 4.7,
    image: "/placeholder.jpg",
    featured: false
  },
  {
    id: 4,
    name: "Haze Machine",
    price: 180,
    description: "Silent haze machine for consistent atmospheric effects",
    category: "SFX Machines",
    rating: 4.6,
    image: "/placeholder.jpg",
    featured: false
  },
  {
    id: 5,
    name: "Moving Head Spotlight",
    price: 400,
    description: "Professional moving head with gobo and color effects",
    category: "Laser System",
    rating: 4.9,
    image: "/placeholder.jpg",
    featured: true
  },
  {
    id: 6,
    name: "UV Reactive Decorations",
    price: 75,
    description: "Special decorations that glow under UV light",
    category: "Glow Gears",
    rating: 4.5,
    image: "/placeholder.jpg",
    featured: false
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  // Filter products based on category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Navbar />
      
      {/* Products Header */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Products
          </h1>
          <p className="text-neutral-300 text-center max-w-2xl mx-auto">
            Premium equipment for all your event needs. Browse our collection of professional-grade SFX machines, laser systems, and glow gear.
          </p>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <div className="py-6 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-gray-800 text-white rounded-full py-3 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category Title */}
      <div className="py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white">
            Stage Effect Machine
          </h2>
          <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Professional SFX equipment for concerts, festivals, and live productions. Engineered for
            reliability and performance, our machines deliver stunning stage visuals and crowd effects
            used by top production teams.
          </p>
        </div>
      </div>

      {/* Rotating Feature Images Section - Marquee Style */}
      <div className="py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-64 md:h-80 overflow-hidden rounded-xl [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-4"
              animate={{
                x: ["-100%", "0%"],
                transition: {
                  ease: "linear",
                  duration: 30,
                  repeat: Infinity,
                },
              }}
            >
              {[
                "/co2image.jpg",
                "/coldsparkimage.jpg",
                "/conffetiimage.jpg",
                "/flameimage.jpg",
                "/co2image.jpg",
                "/coldsparkimage.jpg",
                "/conffetiimage.jpg",
                "/flameimage.jpg"
              ].map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
                  style={{
                    rotate: `${(index % 2 === 0 ? -1 : 2)}deg`,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Stage Effect ${index + 1}`}
                    fill
                    className="object-cover rounded-xl"
                    priority={false}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* SFX Machines Section */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">BUBBLE MACHINE</h3>
              <p className="text-sm text-neutral-300">Create dreamy bubble effects</p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">SNOW MACHINE</h3>
              <p className="text-sm text-neutral-300">Realistic snow effects</p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">FOG MACHINE</h3>
              <p className="text-sm text-neutral-300">Classic atmospheric effects</p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">COLD SPARK MACHINE</h3>
              <p className="text-sm text-neutral-300">Safe, cool sparks up to 3 meters</p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">FLAME MACHINE</h3>
              <p className="text-sm text-neutral-300">Realistic fire effects safely contained</p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">CONFETTI MACHINE</h3>
              <p className="text-sm text-neutral-300">Perfect for celebrations</p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">CO2 JET MACHINE</h3>
              <p className="text-sm text-neutral-300">Dramatic low-lying fog effects</p>
            </div>
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">SFX CONTROLLER &amp; ACCESSORIES</h3>
              <p className="text-sm text-neutral-300">Wireless control systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wristband And Access Section */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Wristband And Access
          </h2>
          <p className="text-center text-neutral-300 mb-8 max-w-3xl mx-auto">
            Event control and identification essentials. Efficient, stylish, and customizable solutions for
            access management and branding.
          </p>

          {/* Rotating Wristband Images Section - Marquee Style */}
          <div className="py-6 mb-12">
            <div className="relative h-64 md:h-80 overflow-hidden rounded-xl [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
              <motion.div
                className="flex gap-4"
                animate={{
                  x: ["-100%", "0%"],
                  transition: {
                    ease: "linear",
                    duration: 30,
                    repeat: Infinity,
                  },
                }}
              >
                {[
                  "/wristband.jpg",
                  "/ledbadge.jpg",
                  "/eventbands2.jpg",
                  "/wristband2.jpg",
                  "/wristband.jpg",
                  "/ledbadge.jpg",
                  "/eventbands2.jpg",
                  "/wristband2.jpg"
                ].map((src, index) => (
                  <div
                    key={index}
                    className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
                    style={{
                      rotate: `${(index % 2 === 0 ? -1 : 2)}deg`,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Wristband ${index + 1}`}
                      fill
                      className="object-cover rounded-xl"
                      priority={false}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Wristband Accessories Section */}
      <div className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">PAPER WRISTBAND</h3>
              <p className="text-sm text-neutral-300">Basic entry and access control</p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">LED WRISTBAND</h3>
              <p className="text-sm text-neutral-300">Light-up for special effects</p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">CUSTOM LANYARD</h3>
              <p className="text-sm text-neutral-300">Branded identification solutions</p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">NAME TAGS</h3>
              <p className="text-sm text-neutral-300">Professional identification</p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">FABRIC / SILICON WRISTBAND</h3>
              <p className="text-sm text-neutral-300">Durable and comfortable</p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">RFID WRISTBAND</h3>
              <p className="text-sm text-neutral-300">Contactless access technology</p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">UV-REACTION WRISTBAND</h3>
              <p className="text-sm text-neutral-300">Glow under blacklight</p>
            </div>

            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-2">LED BADGE</h3>
              <p className="text-sm text-neutral-300">Customizable light-up tags</p>
            </div>
          </div>
        </div>
      </div>

      {/* GlowGear Section */}
      <div className="py-16 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              GlowGear
            </h2>
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              Part of the performance with glowing, flashing, and reactive items designed for music-driven environment.
              Fun, crowd-lighting accessories perfect for night events and festivals. Turn your audience into an
              immersive experience.
            </p>
          </div>

          {/* Rotating GlowGear Images Section - Marquee Style */}
          <div className="py-8">
            <div className="relative h-64 md:h-80 overflow-hidden rounded-xl [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
              <motion.div
                className="flex gap-4"
                animate={{
                  x: ["-100%", "0%"],
                  transition: {
                    ease: "linear",
                    duration: 30,
                    repeat: Infinity,
                  },
                }}
              >
                {[
                  "/bodypaint.jpg",
                  "/glasses.jpg",
                  "/glowpaint.jpg",
                  "/glowshoelace.jpg",
                  "/glowstick.jpg",
                  "/bodypaint.jpg",
                  "/glasses.jpg",
                  "/glowpaint.jpg"
                ].map((src, index) => (
                  <div
                    key={index}
                    className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0"
                    style={{
                      rotate: `${(index % 2 === 0 ? -1 : 2)}deg`,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`GlowGear ${index + 1}`}
                      fill
                      className="object-cover rounded-xl"
                      priority={false}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* GlowGear Categories */}
          <div className="py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">LED GLOW STICK</h3>
                <p className="text-sm text-neutral-300">Classic light-up party accessories</p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">LED FOAM BATONS</h3>
                <p className="text-sm text-neutral-300">Safe glow sticks for dancing</p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">LED NECKLACE</h3>
                <p className="text-sm text-neutral-300">Fashionable light-up jewelry</p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">LED FLOWER CROWNS</h3>
                <p className="text-sm text-neutral-300">Enchanting illuminated headwear</p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">LED GLASSES / SHADES</h3>
                <p className="text-sm text-neutral-300">Light-up eyewear for night events</p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">GLOW PAINT / BODY PAINT</h3>
                <p className="text-sm text-neutral-300">UV reactive body art materials</p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">GLOW BRACELETS & RINGS</h3>
                <p className="text-sm text-neutral-300">Light-up accessories for hands</p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-xl border border-purple-700/50 hover:border-yellow-500 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">GLOW SHOELACES</h3>
                <p className="text-sm text-neutral-300">Illuminated footwear accessories</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HoverFooter />
    </div>
  );
}