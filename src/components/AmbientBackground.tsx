"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AmbientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Top Center AI Radial Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#7C3AED]/20 via-[#2563EB]/10 to-transparent blur-[120px] rounded-full" />

      {/* Left Purple Orb */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[25%] left-[-10%] w-[550px] h-[550px] bg-[#7C3AED]/12 blur-[140px] rounded-full"
      />

      {/* Right Blue/Cyan Orb */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[50%] right-[-10%] w-[600px] h-[600px] bg-[#06B6D4]/10 blur-[150px] rounded-full"
      />

      {/* Deep Lower Accent */}
      <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[400px] bg-[#2563EB]/08 blur-[160px] rounded-full" />

      {/* Subtle Mouse Following Spotlight */}
      {isClient && (
        <div
          className="transition-transform duration-300 ease-out absolute top-0 left-0 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none opacity-20"
          style={{
            transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(37, 99, 235, 0.1) 45%, transparent 70%)",
          }}
        />
      )}
    </div>
  );
}
