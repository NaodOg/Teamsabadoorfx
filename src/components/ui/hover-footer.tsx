"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: 150, cy: 50 }); // Default to center of viewBox (300x100)

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      // Convert percentage to actual coordinates based on viewBox (0 0 300 100)
      const cx = (cxPercentage / 100) * 300;
      const cy = (cyPercentage / 100) * 100;
      setMaskPosition({
        cx: cx,
        cy: cy,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#FDE047" /> {/* Yellow-300 */}
              <stop offset="20%" stopColor="#F59E0B" /> {/* Amber-500 */}
              <stop offset="40%" stopColor="#EF4444" /> {/* Red-500 */}
              <stop offset="60%" stopColor="#10B981" /> {/* Emerald-500 */}
              <stop offset="80%" stopColor="#3B82F6" /> {/* Blue-500 */}
              <stop offset="100%" stopColor="#8B5CF6" /> {/* Violet-500 */}
            </>
          )}
        </linearGradient>

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur2" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur3" />

          <feMerge>
            <feMergeNode in="blur3" />
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <mask id="textMask">
          <rect width="100%" height="100%" fill="black" />
          <circle
            cx={maskPosition.cx}
            cy={maskPosition.cy}
            r="40"
            fill="white"
          />
        </mask>
      </defs>
      {/* Base blurred text - always visible but blurred */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-gray-600 font-[helvetica] text-6xl font-bold dark:stroke-gray-700 opacity-30"
        filter="url(#glow)"
      >
        {text}
      </text>
      {/* Animated border text that appears on hover */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-yellow-500 font-[helvetica] text-6xl font-bold
        dark:stroke-yellow-600"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {text}
      </motion.text>
      {/* Gradient text with mask that follows cursor */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-6xl font-bold"
        filter={hovered ? "url(#glow)" : "none"}
      >
        {text}
      </text>
    </svg>
  );
};


export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #0F0F1166 50%, #3ca2fa33 100%)",
      }}
    />
  );
};