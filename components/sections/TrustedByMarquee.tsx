"use client";

import React from "react";
import { partners } from "@/data/partners";

export default function TrustedByMarquee() {
  return (
    <section id="trusted-by" className="py-20 bg-gradient-to-b from-white via-slate-50/60 to-white border-y border-gray-100/70 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="inline-block px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[#257f8d] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_2px_10px_rgba(37,127,141,0.06),inset_0_1px_0.5px_rgba(255,255,255,0.9)]">
          Clinical & Research Partners
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Trusted by experts
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
          Supported by renowned research institutions, universities, and healthcare organizations worldwide.
        </p>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex items-center space-x-6 sm:space-x-8 py-2">
          {/* First loop of logos */}
          {partners.map((partner, index) => (
            <div
              key={`partner-1-${partner.id}-${index}`}
              className="shrink-0 flex items-center justify-center px-6 py-3.5 rounded-2xl bg-white/65 backdrop-blur-md border border-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.02),inset_0_1px_0.5px_rgba(255,255,255,0.9)] grayscale opacity-75 hover:grayscale-0 hover:opacity-100 hover:bg-white/90 hover:shadow-xs transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 sm:h-9 w-auto object-contain max-w-[140px]"
                loading="lazy"
              />
            </div>
          ))}

          {/* Duplicate loop for seamless infinite scroll */}
          {partners.map((partner, index) => (
            <div
              key={`partner-2-${partner.id}-${index}`}
              className="shrink-0 flex items-center justify-center px-6 py-3.5 rounded-2xl bg-white/65 backdrop-blur-md border border-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.02),inset_0_1px_0.5px_rgba(255,255,255,0.9)] grayscale opacity-75 hover:grayscale-0 hover:opacity-100 hover:bg-white/90 hover:shadow-xs transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 sm:h-9 w-auto object-contain max-w-[140px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
