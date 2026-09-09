"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Smartphone, Power, Moon } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      stepNumber: "STEP ONE",
      title: "Plug In",
      description:
        "Connect Roga to your smartphone and gently place the comfortable stimulation pads behind your ears.",
      image:
        "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/66e347c62fa9e24fd1e0c7d6_Group%2030Wear%20Device%20(1).png",
      alt: "Wear Your Roga Device",
      icon: Smartphone,
      isReversed: false,
    },
    {
      stepNumber: "STEP TWO",
      title: "Turn On",
      description:
        "Open the Roga app and activate clinically-calibrated gentle electrical pulses tailored to calm your sympathetic nervous system.",
      image:
        "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/6807b37ea276d070ffa8abb2_casual-pink-roga-device.png",
      alt: "Open Roga Stress Library & Device Control",
      icon: Power,
      isReversed: true,
    },
    {
      stepNumber: "STEP THREE",
      title: "Relax",
      description:
        "Sit back and unwind while Roga activates your Vagus Nerve, dropping cortisol, slowing heart rate, and restoring deep mental clarity.",
      image:
        "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/66e347f586ec46fc697b2abf_Group%2066Enjoy%20Relaxation%20(1).png",
      alt: "Enjoy Deep Relaxation and Better Sleep",
      icon: Moon,
      isReversed: false,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/70 to-slate-50/90 scroll-mt-16 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-28 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[#257f8d] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_2px_10px_rgba(37,127,141,0.06),inset_0_1px_0.5px_rgba(255,255,255,0.9)]">
            Simple 3-Step Routine
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Effortlessly integrate neurostimulation into your morning, workday, or bedtime routine.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-20 lg:space-y-28">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  step.isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual Image */}
                <div
                  className={`lg:col-span-6 ${
                    step.isReversed ? "lg:col-start-7" : ""
                  }`}
                >
                  <div className="relative rounded-3xl overflow-hidden bg-white/75 backdrop-blur-xl p-6 sm:p-10 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.05),inset_0_1px_1.5px_rgba(255,255,255,0.95)] border border-white/80 group hover:shadow-[0_24px_50px_-10px_rgba(37,127,141,0.15)] hover:border-white transition-all duration-300">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="w-full h-auto max-h-[420px] object-contain mx-auto group-hover:scale-102 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content Text */}
                <div
                  className={`lg:col-span-6 flex flex-col ${
                    step.isReversed ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs flex items-center justify-center text-[#257f8d]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#257f8d] tracking-widest uppercase">
                      {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                    {step.title}
                  </h3>

                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mb-6">
                    {step.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-2xs text-xs font-semibold text-gray-800 w-fit">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Takes less than 1 minute to setup
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

