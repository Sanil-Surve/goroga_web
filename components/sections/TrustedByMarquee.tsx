"use client";

import React from "react";
import Image from "next/image";
import { partners } from "@/data/partners";

export default function TrustedByMarquee() {
  // Duplicate partners so each 50% loop spans at least 6000px,
  // ensuring edge-to-edge continuity without gaps even on ultra-wide 4K/5K screens.
  const loopItems = [...partners, ...partners];

  return (
    <section
      id="trusted-by"
      className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-y border-gray-100/80 overflow-hidden relative"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
        <span className="inline-block px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-teal-600/15 text-[#257f8d] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_2px_10px_rgba(37,127,141,0.06),inset_0_1px_0.5px_rgba(255,255,255,0.9)]">
          Clinical &amp; Research Partners
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          Trusted by experts
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-xl mx-auto px-2">
          Supported by renowned research institutions, universities, and healthcare organizations worldwide.
        </p>
      </div>

      {/* Seamless Infinite Scrolling Marquee */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="animate-marquee-slow flex items-center space-x-4 sm:space-x-6 py-3">
          {/* Loop A (0% to -50%) */}
          {loopItems.map((partner, index) => (
            <div
              key={`partner-a-${partner.id}-${index}`}
              className="shrink-0 flex items-center justify-center h-18 sm:h-22 md:h-24 px-5 sm:px-7 md:px-8 min-w-[150px] sm:min-w-[190px] md:min-w-[220px] rounded-2xl bg-white/85 backdrop-blur-md border border-gray-200/60 shadow-[0_4px_16px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-300 hover:bg-white hover:border-teal-300/70 hover:shadow-[0_8px_24px_rgba(37,127,141,0.14)] group"
            >
              <div className="relative w-full flex items-center justify-center h-10 sm:h-12 md:h-14">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={60}
                  className="max-h-9 sm:max-h-11 md:max-h-12 w-auto max-w-[120px] sm:max-w-[150px] md:max-w-[180px] object-contain transition-all duration-300 filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}

          {/* Loop B (duplicate for seamless looping) */}
          {loopItems.map((partner, index) => (
            <div
              key={`partner-b-${partner.id}-${index}`}
              className="shrink-0 flex items-center justify-center h-18 sm:h-22 md:h-24 px-5 sm:px-7 md:px-8 min-w-[150px] sm:min-w-[190px] md:min-w-[220px] rounded-2xl bg-white/85 backdrop-blur-md border border-gray-200/60 shadow-[0_4px_16px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-300 hover:bg-white hover:border-teal-300/70 hover:shadow-[0_8px_24px_rgba(37,127,141,0.14)] group"
            >
              <div className="relative w-full flex items-center justify-center h-10 sm:h-12 md:h-14">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={60}
                  className="max-h-9 sm:max-h-11 md:max-h-12 w-auto max-w-[120px] sm:max-w-[150px] md:max-w-[180px] object-contain transition-all duration-300 filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
