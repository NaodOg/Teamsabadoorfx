'use client';

import { buttonVariants } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { MobileNav } from '@/components/ui/navbar'
import Link from 'next/link'
import Image from 'next/image'
import HoverFooter from '@/components/ui/hover-footer-demo'
import AnimatedHeroDemo from '@/components/ui/hero-3-demo'
import HeroSection from '@/components/HeroSection'
import { useState, useEffect } from 'react';
import Navbar from '@/components/navbar'
import { motion } from "framer-motion";
import { Calendar, MonitorSpeaker, Settings } from 'lucide-react';


export default function Home() {
    const [showIntro, setShowIntro] = useState(true); // Show intro by default on first render
    const [hasSeenIntro, setHasSeenIntro] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Check if we're on the client side
        if (typeof window !== 'undefined') {
            setIsClient(true);

            // Check if the user has already seen the intro in this session
            const hasSeen = sessionStorage.getItem('hasSeenIntro');

            if (hasSeen) {
                // User has already seen the intro in this session, hide it immediately
                setShowIntro(false);
                setHasSeenIntro(true);
            } else {
                // User hasn't seen the intro, the intro is already showing
                // Set timer to hide the intro after 4 seconds to allow all animations to complete and wait 1 second
                const timer = setTimeout(() => {
                    setShowIntro(false);
                    // Mark that the user has seen the intro in this session
                    sessionStorage.setItem('hasSeenIntro', 'true');
                    setHasSeenIntro(true);
                }, 4000);

                // Clean up the timer when component unmounts
                return () => clearTimeout(timer);
            }
        }
    }, []); // Run only once after component mounts

    // Show the intro if it's set to show (either first visit or client hasn't checked session storage yet)
    if (showIntro) {
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
                    {/* Animated particles */}
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-yellow-500"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 10 + 2}px`,
                                height: `${Math.random() * 10 + 2}px`,
                                opacity: `${Math.random() * 0.5 + 0.1}`,
                                animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`
                            }}
                        />
                    ))}
                </div>

                {/* Main content */}
                <div className="relative z-10 text-center px-4">
                    {/* Logo with entrance animation */}
                    <div className="animate-logo-appear">
                        <img
                            src="/FX LOGO.png"
                            alt="Sabador FX Logo"
                            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain mx-auto"
                        />
                    </div>

                    {/* Main quote with sequential letter animation */}
                    <div className="mt-10 text-center">
                        <div className="mb-4">
                            <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#C76F1A] inline-block tracking-tight drop-shadow-lg">
                                <span className="inline-block animate-char-opacity animate-delay-1">W</span>
                                <span className="inline-block animate-char-opacity animate-delay-2">E</span>
                                <span className="inline-block animate-char-opacity animate-delay-3">&nbsp;</span>
                                <span className="inline-block animate-char-opacity animate-delay-4">D</span>
                                <span className="inline-block animate-char-opacity animate-delay-5">O</span>
                                <span className="inline-block animate-char-opacity animate-delay-6">N</span>
                                <span className="inline-block animate-char-opacity animate-delay-7">'</span>
                                <span className="inline-block animate-char-opacity animate-delay-8">T</span>
                                <span className="inline-block animate-char-opacity animate-delay-9">&nbsp;</span>
                                <span className="inline-block animate-char-opacity animate-delay-10">J</span>
                                <span className="inline-block animate-char-opacity animate-delay-11">U</span>
                                <span className="inline-block animate-char-opacity animate-delay-12">S</span>
                                <span className="inline-block animate-char-opacity animate-delay-13">T</span>
                                <span className="inline-block animate-char-opacity animate-delay-14">&nbsp;</span>
                                <span className="inline-block animate-char-opacity animate-delay-15">S</span>
                                <span className="inline-block animate-char-opacity animate-delay-16">U</span>
                                <span className="inline-block animate-char-opacity animate-delay-17">P</span>
                                <span className="inline-block animate-char-opacity animate-delay-18">P</span>
                                <span className="inline-block animate-char-opacity animate-delay-19">L</span>
                                <span className="inline-block animate-char-opacity animate-delay-20">Y</span>
                                <span className="inline-block animate-char-opacity animate-delay-21">&nbsp;</span>
                                <span className="inline-block animate-char-opacity animate-delay-22">E</span>
                                <span className="inline-block animate-char-opacity animate-delay-23">F</span>
                                <span className="inline-block animate-char-opacity animate-delay-24">F</span>
                                <span className="inline-block animate-char-opacity animate-delay-25">E</span>
                                <span className="inline-block animate-char-opacity animate-delay-26">C</span>
                                <span className="inline-block animate-char-opacity animate-delay-27">T</span>
                                <span className="inline-block animate-char-opacity animate-delay-28">S</span>
                            </span>
                        </div>
                        <div>
                            <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E3F4E9] inline-block tracking-tight drop-shadow-lg">
                                <span className="inline-block animate-char-opacity animate-delay-40">W</span>
                                <span className="inline-block animate-char-opacity animate-delay-44">E</span>
                                <span className="inline-block animate-char-opacity animate-delay-48">&nbsp;</span>
                                <span className="inline-block animate-char-opacity animate-delay-52">C</span>
                                <span className="inline-block animate-char-opacity animate-delay-56">R</span>
                                <span className="inline-block animate-char-opacity animate-delay-60">E</span>
                                <span className="inline-block animate-char-opacity animate-delay-64">A</span>
                                <span className="inline-block animate-char-opacity animate-delay-68">T</span>
                                <span className="inline-block animate-char-opacity animate-delay-72">E</span>
                                <span className="inline-block animate-char-opacity animate-delay-76">&nbsp;</span>
                                <span className="inline-block animate-char-opacity animate-delay-80">A</span>
                                <span className="inline-block animate-char-opacity animate-delay-84">T</span>
                                <span className="inline-block animate-char-opacity animate-delay-88">M</span>
                                <span className="inline-block animate-char-opacity animate-delay-92">O</span>
                                <span className="inline-block animate-char-opacity animate-delay-96">S</span>
                                <span className="inline-block animate-char-opacity animate-delay-100">P</span>
                                <span className="inline-block animate-char-opacity animate-delay-104">H</span>
                                <span className="inline-block animate-char-opacity animate-delay-108">E</span>
                                <span className="inline-block animate-char-opacity animate-delay-112">R</span>
                                <span className="inline-block animate-char-opacity animate-delay-116">E</span>
                                <span className="inline-block animate-char-opacity animate-delay-120">S</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Transition overlay that will fade in before transitioning */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-1000 ease-in ${showIntro ? 'opacity-0' : 'opacity-100'}`}
                    style={{ transitionDelay: showIntro ? '0ms' : '500ms' }}
                />

                {/* Custom CSS for animations */}
                <style jsx>{`
                    @keyframes float {
                        0% { transform: translate(0, 0) rotate(0deg); opacity: 0.1; }
                        25% { transform: translate(20px, -30px) rotate(90deg); opacity: 0.3; }
                        50% { transform: translate(-20px, 30px) rotate(180deg); opacity: 0.5; }
                        75% { transform: translate(10px, -15px) rotate(270deg); opacity: 0.3; }
                        100% { transform: translate(0, 0) rotate(360deg); opacity: 0.1; }
                    }

                    @keyframes logo-appear {
                        0% { opacity: 0; transform: scale(0.8) translateY(20px); }
                        70% { opacity: 1; transform: scale(1.05) translateY(-10px); }
                        100% { opacity: 1; transform: scale(1) translateY(0); }
                    }

                    .animate-logo-appear {
                        animation: logo-appear 1.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
                    }
                    .animate-char-opacity {
                        opacity: 0;
                        animation: char-opacity 0.3s forwards;
                    }

                    @keyframes char-opacity {
                        to { opacity: 1; }
                    }

                    /* Animation delay utilities */
                    .animate-delay-1 { animation-delay: 0.02s; }
                    .animate-delay-2 { animation-delay: 0.04s; }
                    .animate-delay-3 { animation-delay: 0.06s; }
                    .animate-delay-4 { animation-delay: 0.08s; }
                    .animate-delay-5 { animation-delay: 0.1s; }
                    .animate-delay-6 { animation-delay: 0.12s; }
                    .animate-delay-7 { animation-delay: 0.14s; }
                    .animate-delay-8 { animation-delay: 0.16s; }
                    .animate-delay-9 { animation-delay: 0.18s; }
                    .animate-delay-10 { animation-delay: 0.2s; }
                    .animate-delay-11 { animation-delay: 0.22s; }
                    .animate-delay-12 { animation-delay: 0.24s; }
                    .animate-delay-13 { animation-delay: 0.26s; }
                    .animate-delay-14 { animation-delay: 0.28s; }
                    .animate-delay-15 { animation-delay: 0.3s; }
                    .animate-delay-16 { animation-delay: 0.32s; }
                    .animate-delay-17 { animation-delay: 0.34s; }
                    .animate-delay-18 { animation-delay: 0.36s; }
                    .animate-delay-19 { animation-delay: 0.38s; }
                    .animate-delay-20 { animation-delay: 0.4s; }
                    .animate-delay-21 { animation-delay: 0.42s; }
                    .animate-delay-22 { animation-delay: 0.44s; }
                    .animate-delay-23 { animation-delay: 0.46s; }
                    .animate-delay-24 { animation-delay: 0.48s; }
                    .animate-delay-25 { animation-delay: 0.5s; }
                    .animate-delay-26 { animation-delay: 0.52s; }
                    .animate-delay-27 { animation-delay: 0.54s; }
                    .animate-delay-28 { animation-delay: 0.56s; }
                    .animate-delay-29 { animation-delay: 0.58s; }
                    .animate-delay-30 { animation-delay: 0.6s; }
                    .animate-delay-31 { animation-delay: 0.62s; }
                    .animate-delay-32 { animation-delay: 0.64s; }
                    .animate-delay-33 { animation-delay: 0.66s; }
                    .animate-delay-34 { animation-delay: 0.68s; }
                    .animate-delay-35 { animation-delay: 0.7s; }
                    .animate-delay-36 { animation-delay: 0.72s; }
                    .animate-delay-37 { animation-delay: 0.74s; }
                    .animate-delay-38 { animation-delay: 0.76s; }
                    .animate-delay-39 { animation-delay: 0.78s; }
                    .animate-delay-40 { animation-delay: 0.8s; }
                    .animate-delay-41 { animation-delay: 0.82s; }
                    .animate-delay-42 { animation-delay: 0.84s; }
                    .animate-delay-43 { animation-delay: 0.86s; }
                    .animate-delay-44 { animation-delay: 0.88s; }
                    .animate-delay-45 { animation-delay: 0.9s; }
                    .animate-delay-46 { animation-delay: 0.92s; }
                    .animate-delay-47 { animation-delay: 0.94s; }
                    .animate-delay-48 { animation-delay: 0.96s; }
                    .animate-delay-49 { animation-delay: 0.98s; }
                    .animate-delay-50 { animation-delay: 1.0s; }
                    .animate-delay-52 { animation-delay: 1.04s; }
                    .animate-delay-54 { animation-delay: 1.08s; }
                    .animate-delay-56 { animation-delay: 1.12s; }
                    .animate-delay-58 { animation-delay: 1.16s; }
                    .animate-delay-60 { animation-delay: 1.2s; }
                    .animate-delay-62 { animation-delay: 1.24s; }
                    .animate-delay-64 { animation-delay: 1.28s; }
                    .animate-delay-66 { animation-delay: 1.32s; }
                    .animate-delay-68 { animation-delay: 1.36s; }
                    .animate-delay-70 { animation-delay: 1.4s; }
                    .animate-delay-72 { animation-delay: 1.44s; }
                    .animate-delay-76 { animation-delay: 1.52s; }
                    .animate-delay-80 { animation-delay: 1.6s; }
                    .animate-delay-84 { animation-delay: 1.68s; }
                    .animate-delay-88 { animation-delay: 1.76s; }
                    .animate-delay-92 { animation-delay: 1.84s; }
                    .animate-delay-96 { animation-delay: 1.92s; }
                    .animate-delay-100 { animation-delay: 2.0s; }
                    .animate-delay-104 { animation-delay: 2.08s; }
                    .animate-delay-108 { animation-delay: 2.16s; }
                    .animate-delay-112 { animation-delay: 2.24s; }
                    .animate-delay-116 { animation-delay: 2.32s; }
                    .animate-delay-120 { animation-delay: 2.4s; }
                    .animate-fade-in-out {
                        animation: fadeInOut 12s infinite ease-in-out;
                    }

                    @keyframes fadeInOut {
                        0%, 25% { opacity: 1; }
                        30%, 100% { opacity: 0; }
                    }

                    .animate-fade-in-out:nth-child(2) {
                        animation-delay: 3s;
                    }

                    .animate-fade-in-out:nth-child(3) {
                        animation-delay: 6s;
                    }

                    .animate-fade-in-out:nth-child(4) {
                        animation-delay: 9s;
                    }
                `}</style>
            </div>
        );
    }

    // Show main content when intro is done or has been seen before
    return (
        <>
        <div
            className="min-h-screen bg-black pt-24"
        >
            <Navbar />

            {/* Hero Section */}
            <AnimatedHeroDemo />

            {/* Services Section */}
            <div className="py-20 px-6 lg:px-16 bg-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="flex flex-col lg:flex-row"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                    >
                        {/* Column 1 - No border on mobile or desktop */}
                        <motion.div
                            className="flex-1 flex flex-col items-center px-4 py-4"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                        >
                            <Calendar className="w-16 h-16 text-white" />
                            <h3 className="text-white text-xl font-semibold mt-6 mb-2 text-center">Event Production</h3>
                            <p className="text-neutral-300 text-center text-base max-w-xs mx-auto">
                                Full-scale management for corporate and private events.
                            </p>
                        </motion.div>

                        {/* Column 2 - Has left border only on desktop */}
                        <motion.div
                            className="flex-1 flex flex-col items-center border-l border-neutral-700 px-4 py-4"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                        >
                            <MonitorSpeaker className="w-16 h-16 text-white" />
                            <h3 className="text-white text-xl font-semibold mt-6 mb-2 text-center">Equipment Rental</h3>
                            <p className="text-neutral-300 text-center text-base max-w-xs mx-auto">
                                SFX machines, laser systems, and glow gears available for rent.
                            </p>
                        </motion.div>

                        {/* Column 3 - Has left border only on desktop */}
                        <motion.div
                            className="flex-1 flex flex-col items-center border-l border-neutral-700 px-4 py-4"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                        >
                            <Settings className="w-16 h-16 text-white" />
                            <h3 className="text-white text-xl font-semibold mt-6 mb-2 text-center">Technical Support</h3>
                            <p className="text-neutral-300 text-center text-base max-w-xs mx-auto">
                                Skilled technicians for setup and maintenance.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Additional Hero Section */}
            <HeroSection />

            <HoverFooter />
        </div>
        </>
    )
}