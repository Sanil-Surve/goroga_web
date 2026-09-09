"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { scienceMetrics } from "@/data/scienceData";
import { Info } from "lucide-react";

export default function ScienceResultsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-teal-50/25 to-[#257f8d]/10 border-y border-gray-100 relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Metrics List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-3"
          >
            <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-6 sm:p-8 shadow-[0_16px_40px_rgba(31,38,135,0.05),inset_0_1px_1.5px_rgba(255,255,255,0.9)] divide-y divide-gray-100">
              {scienceMetrics.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ x: 4 }}
                  className="py-4.5 first:pt-0 last:pb-4 flex items-center justify-between gap-4 transition-all duration-200"
                >
                  {/* Left: Icon & Label */}
                  <div className="flex items-center space-x-3.5 sm:space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-50/80 border border-teal-100/80 flex items-center justify-center shrink-0 p-2 shadow-2xs">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={24}
                        height={24}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <span className="text-base sm:text-lg font-semibold text-gray-800">
                      {item.title}
                    </span>
                  </div>

                  {/* Right: Percent badge */}
                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-xl text-sm font-semibold text-gray-900 bg-[#257f8d]/15 border border-[#257f8d]/25 shadow-2xs hover:bg-[#257f8d] hover:text-white transition-all duration-200 cursor-default">
                      {item.stat}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Disclaimer */}
              <div className="pt-5 flex items-start space-x-2 text-xs text-gray-500 font-normal">
                <Info className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <p>
                  Results are from specific study populations. Individual results may vary.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Section Heading */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-100/60 border border-teal-200 text-[#257f8d] text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
              Clinical Validation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-6">
              Roga Results from Clinical Studies
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Quantitative neuroimaging, heart rate variability tracking, and validated psychometric scales reveal systemic reductions in anxiety and stress biomarkers across independent controlled trials.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
