"use client";

import React, { useRef, useState } from "react";
import { videoReviews } from "@/data/videoReviews";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export default function VideoReviewsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/40 to-white border-b border-gray-100/70 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[#257f8d] text-xs font-bold uppercase tracking-wider mb-2 shadow-[0_2px_10px_rgba(37,127,141,0.06),inset_0_1px_0.5px_rgba(255,255,255,0.9)]">
              Video Reactions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Watch Real Experiences
            </h2>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full bg-white/75 backdrop-blur-md text-gray-800 hover:bg-white hover:text-[#257f8d] shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/80 flex items-center justify-center transition"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full bg-[#257f8d]/95 backdrop-blur-md text-white hover:bg-[#1e6874] shadow-[0_4px_16px_rgba(37,127,141,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/20 flex items-center justify-center transition"
              aria-label="Next video"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Videos Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollContainerRef}
          className="flex space-x-5 overflow-x-auto pb-6 pt-2 no-scrollbar snap-x snap-mandatory"
        >
          {videoReviews.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-[220px] sm:w-[250px] lg:w-[270px] snap-start group"
            >
              <div className="relative aspect-9/16 rounded-2xl overflow-hidden bg-black shadow-[0_12px_32px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-white/20 group-hover:border-teal-400/40 transition-all duration-300">
                <iframe
                  className="w-full h-full object-cover border-0"
                  src={`https://customer-8sfe43bvwq6bm8tn.cloudflarestream.com/${item.streamId}/iframe?controls=true`}
                  loading="lazy"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={item.title}
                />
              </div>
              <div className="mt-3 px-1">
                <h4 className="text-sm font-semibold text-gray-900 truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 font-medium">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
