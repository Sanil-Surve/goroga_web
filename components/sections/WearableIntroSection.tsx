"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Feather, Zap } from "lucide-react";

export default function WearableIntroSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden border-t border-gray-100/80 relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -right-28 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-28 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Description & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[#257f8d] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_2px_10px_rgba(37,127,141,0.06),inset_0_1px_0.5px_rgba(255,255,255,0.9)] w-fit">
              Introducing
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              The Wearable
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed mb-8">
              The smallest, lightest, and most elegant{" "}
              <strong className="text-gray-900 font-semibold">
                vagus nerve stimulator
              </strong>{" "}
              in the world. Designed for seamless all-day portability without messy conductive gels or bulky neckbands.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 transition shadow-[0_4px_16px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:bg-white/90 hover:shadow-xs"
              >
                <Feather className="w-5 h-5 text-[#257f8d] mb-2" />
                <h4 className="text-sm font-bold text-gray-900">Ultra-Lightweight</h4>
                <p className="text-xs text-gray-500 mt-1">Weighs under 20 grams, fits in any pocket</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                className="p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 transition shadow-[0_4px_16px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:bg-white/90 hover:shadow-xs"
              >
                <Zap className="w-5 h-5 text-[#257f8d] mb-2" />
                <h4 className="text-sm font-bold text-gray-900">Zero Gel Mess</h4>
                <p className="text-xs text-gray-500 mt-1">Clean, proprietary reusable contact pads</p>
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#Product-Purchase"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-semibold text-white bg-[#257f8d] hover:bg-[#1e6874] backdrop-blur-md shadow-[0_8px_25px_-4px_rgba(37,127,141,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/20 transition"
              >
                Shop Now — ₹25000
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#science"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-base font-semibold text-gray-700 bg-white/60 hover:bg-white/85 backdrop-blur-md border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.8)] transition"
              >
                View Science
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: 360 Spinning Device Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden bg-white/70 backdrop-blur-2xl p-8 flex items-center justify-center shadow-[0_20px_50px_-10px_rgba(0,0,0,0.07),inset_0_1px_2px_rgba(255,255,255,0.95)] border border-white/80 group">
              <img
                src="https://files.tryflowdrive.com/org-cbd70f53-cb13-488f-8787-bbc375ad2408/file-58d4bc6c-546d-4119-9415-a50d81c09cf7_spinning-roga-device.gif"
                alt="Spinning Roga Device 3D view"
                className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/85 backdrop-blur-md border border-white/90 text-xs font-semibold text-gray-800 shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_0.5px_rgba(255,255,255,0.9)]">
                360° Ergonomic Design
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

