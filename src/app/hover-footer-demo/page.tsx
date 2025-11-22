"use client";
import React from "react";
import HoverFooter from "@/components/ui/hover-footer-demo";

export default function HoverFooterDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col">
      <header className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-white">Sabador FX</h1>
        <p className="text-gray-400">Modern Trading Platform</p>
      </header>
      
      <main className="flex-grow container mx-auto flex flex-col items-center justify-center p-8">
        <div className="max-w-4xl w-full text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Advanced Forex Trading</h2>
          <p className="text-xl text-gray-300 mb-10">
            Experience cutting-edge trading tools and analytics for the modern trader.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 font-bold py-3 px-6 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
      
      <HoverFooter />
    </div>
  );
}