"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { sciencePartners } from "@/data/scienceData";

export default function ScienceHero() {
  const scrollToStudies = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("Studies");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-white via-[#257f8d]/10 to-white">
      {/* Background illustration overlay from Roga */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-35 pointer-events-none -z-10 mix-blend-multiply"
        style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b2385334fc0b9ef63fe016_Untitled%20design%20(36).png')`,
        }}
      />

      {/* Ambient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-teal-200/40 via-cyan-100/30 to-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-teal-600/15 text-[#257f8d] text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_2px_12px_rgba(37,127,141,0.08)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#257f8d]" />
            <span>Clinical Neurotechnology</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-[64px] font-bold text-gray-900 tracking-tight leading-[1.12] mb-6"
          >
            Scientific Evidence Supporting Roga
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl mb-8"
          >
            Learn the scientific foundation of Roga’s tVNS technology and its proven benefits.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#Studies"
              onClick={scrollToStudies}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white bg-[#257f8d] hover:bg-[#1e6874] shadow-[0_8px_24px_rgba(37,127,141,0.3)] hover:shadow-[0_12px_28px_rgba(37,127,141,0.4)] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm group"
            >
              See All Studies
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Institution / Research Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-gray-200/70"
        >
          <div className="flex items-center space-x-2.5 mb-6 sm:mb-8 justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-full bg-[#257f8d] shrink-0" />
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-500">
              Evaluated &amp; Published with Leading Research Institutions
            </h2>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap justify-center items-stretch gap-3 sm:gap-4">
            {sciencePartners.map((partner) => (
              <motion.div
                key={partner.id}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="w-[calc(50%-6px)] sm:w-[calc(25%-12px)] lg:w-auto lg:flex-1 lg:min-w-0 h-20 sm:h-22 md:h-24 bg-white/85 backdrop-blur-md rounded-2xl px-3.5 py-3 sm:px-4 sm:py-3.5 border border-gray-200/70 shadow-[0_4px_16px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)] flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-teal-300/70 hover:shadow-[0_8px_24px_rgba(37,127,141,0.14)] group cursor-default"
                title={partner.name}
              >
                <div className="relative w-full flex items-center justify-center h-10 sm:h-12 md:h-14">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={60}
                    className="max-h-9 sm:max-h-11 md:max-h-12 w-auto max-w-[115px] sm:max-w-[135px] md:max-w-[155px] object-contain transition-all duration-300 filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
