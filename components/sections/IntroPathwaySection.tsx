"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

export default function IntroPathwaySection() {
  const textVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const pathVariant: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.4, ease: "easeInOut" },
    },
  };


  return (
    <section className="bg-gradient-to-b from-[#080d19] via-[#0b1329] to-[#080d19] text-white py-24 sm:py-32 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#257f8d]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Step 1 */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="py-10 px-8 sm:px-12 rounded-3xl bg-slate-900/45 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)] hover:border-teal-400/30 transition-all duration-300 max-w-2xl mx-auto"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-4 shadow-inner">
            The Purpose
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 leading-tight">
            We designed Roga <br />
            <span className="text-[#257f8d] font-extrabold">for you</span>
          </h2>
        </motion.div>

        {/* SVG Connector 1 */}
        <div className="flex justify-center my-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="173"
            height="260"
            viewBox="0 0 173 607"
            fill="none"
            className="w-24 sm:w-36 h-auto"
          >
            <motion.path
              d="M8.5 8.5C8.5 236.5 314.905 287 68.8763 598.5"
              stroke="url(#paint0_linear_1)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <defs>
              <linearGradient
                id="paint0_linear_1"
                x1="114.443"
                y1="-57.5"
                x2="114.443"
                y2="702"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#257f8d" />
                <stop offset="0.5" stopColor="#ffffff" />
                <stop offset="1" stopColor="#257f8d" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Step 2 */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="py-10 px-8 sm:px-12 rounded-3xl bg-slate-900/45 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)] hover:border-teal-400/30 transition-all duration-300 max-w-2xl mx-auto"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-4 shadow-inner">
            The Mission
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 leading-tight">
            To help you <br />
            <span className="bg-gradient-to-r from-teal-300 to-cyan-200 bg-clip-text text-transparent">
              overcome stress
            </span>
          </h2>
        </motion.div>

        {/* SVG Connector 2 */}
        <div className="flex justify-center my-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="243"
            height="260"
            viewBox="0 0 243 608"
            fill="none"
            className="w-28 sm:w-44 h-auto"
          >
            <motion.path
              d="M21.0012 8.5C-69.9986 252 368.998 304 192 599.5"
              stroke="url(#paint0_linear_2)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <defs>
              <linearGradient
                id="paint0_linear_2"
                x1="12.4427"
                y1="-60.5"
                x2="12.4427"
                y2="699"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ffffff" />
                <stop offset="0.5" stopColor="#257f8d" />
                <stop offset="1" stopColor="#ffffff" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Step 3 */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="py-10 px-8 sm:px-12 rounded-3xl bg-slate-900/45 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)] hover:border-teal-400/30 transition-all duration-300 max-w-2xl mx-auto"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-300 text-xs font-semibold uppercase tracking-widest mb-4 shadow-inner">
            The Recovery
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 leading-tight">
            To help you <br />
            <span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
              sleep better
            </span>
          </h2>
        </motion.div>

        {/* SVG Connector 3 */}
        <div className="flex justify-center my-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="229"
            height="260"
            viewBox="0 0 229 606"
            fill="none"
            className="w-28 sm:w-40 h-auto"
          >
            <motion.path
              d="M9.49684 8C-20.5 268 468.999 -112 49.5034 598"
              stroke="url(#paint0_linear_3)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <defs>
              <linearGradient
                id="paint0_linear_3"
                x1="60.7821"
                y1="-81.2763"
                x2="60.7821"
                y2="761.026"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#257f8d" />
                <stop offset="0.7" stopColor="#ffffff" />
                <stop offset="1" stopColor="#257f8d" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Step 4 */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="py-10 px-8 sm:px-12 rounded-3xl bg-slate-900/45 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)] hover:border-teal-400/30 transition-all duration-300 max-w-2xl mx-auto"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-4 shadow-inner">
            The Transformation
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 leading-tight">
            To come back to <br />
            <span className="text-[#257f8d] font-extrabold">
              your best self
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

