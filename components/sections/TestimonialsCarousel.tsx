"use client";

import React, { useState, useRef } from "react";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft - clientWidth * 0.75,
        behavior: "smooth",
      });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + clientWidth * 0.75,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50/90 via-teal-50/20 to-white overflow-hidden scroll-mt-16 relative">
      {/* Ambient background light for glass refraction */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[#257f8d] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_2px_10px_rgba(37,127,141,0.06),inset_0_1px_0.5px_rgba(255,255,255,0.9)]">
              Customer Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Trusted by users across the globe
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Hear directly from real people transforming their stress, focus, and sleep with Roga.
            </p>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-white/75 backdrop-blur-md text-gray-800 hover:bg-white hover:text-[#257f8d] shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/80 flex items-center justify-center transition-all duration-200"
              aria-label="Previous stories"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-[#257f8d]/95 backdrop-blur-md text-white hover:bg-[#1e6874] shadow-[0_4px_16px_rgba(37,127,141,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/20 flex items-center justify-center transition-all duration-200"
              aria-label="Next stories"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Cards Carousel Track */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-[300px] sm:w-[360px] lg:w-[390px] snap-start flex flex-col bg-white/75 backdrop-blur-xl rounded-3xl p-6 shadow-[0_12px_36px_-8px_rgba(31,38,135,0.06),inset_0_1px_1.5px_rgba(255,255,255,0.95)] hover:shadow-[0_24px_50px_-10px_rgba(37,127,141,0.18)] hover:-translate-y-1.5 border border-white/80 hover:border-white transition-all duration-300 group"
            >
              {/* Review Card Main Image */}
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-gray-100 mb-6 shadow-inner">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  Verified User
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col grow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 grow">
                  {item.quote}
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3.5 pt-4 border-t border-white/70 mt-auto">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-[#257f8d]/25 shadow-2xs"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {item.handle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
