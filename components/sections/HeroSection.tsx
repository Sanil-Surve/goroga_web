"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };


  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-slate-50/80 via-teal-50/20 to-white">
      {/* Ambient Animated Glows for Glassmorphism Refraction */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-teal-200/40 via-cyan-100/40 to-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 right-10 w-80 h-80 bg-gradient-to-bl from-sky-200/35 via-teal-100/30 to-emerald-100/20 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-teal-100/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 text-[#257f8d] text-xs font-semibold tracking-wide uppercase mb-6 shadow-[0_4px_20px_rgba(37,127,141,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)]">
              <Sparkles className="w-3.5 h-3.5 text-[#257f8d] animate-pulse" />
              Clinically Proven Brain Wellness
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-gray-900 tracking-tight leading-[1.1] mb-6"
          >
            Take control of <br />
            <span className="text-[#257f8d] bg-clip-text">your stress</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed mb-8 max-w-2xl"
          >
            New generation of{" "}
            <strong className="text-gray-900 font-semibold">
              Vagus Nerve Stimulation
            </strong>{" "}
            to help you reduce stress and embrace a calmer, more focused life.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#Product-Purchase"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white bg-[#257f8d] hover:bg-[#1e6874] backdrop-blur-md shadow-[0_8px_25px_-4px_rgba(37,127,141,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/20 transition-all"
            >
              Shop Device
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-gray-800 bg-white/60 hover:bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.8)] transition-all"
            >
              Learn more
            </motion.a>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-14 pt-8 border-t border-gray-200/50 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium"
          >
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/65 backdrop-blur-lg border border-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.03),inset_0_1px_0.5px_rgba(255,255,255,0.9)] text-gray-700">
              <ShieldCheck className="w-4 h-4 text-[#257f8d]" />
              <span>Safety Tested & Certified</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/65 backdrop-blur-lg border border-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.03),inset_0_1px_0.5px_rgba(255,255,255,0.9)] text-gray-700">
              <Zap className="w-4 h-4 text-[#257f8d]" />
              <span>Fast 20-Min Daily Sessions</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/65 backdrop-blur-lg border border-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.03),inset_0_1px_0.5px_rgba(255,255,255,0.9)] text-gray-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>HSA / FSA Eligible</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

