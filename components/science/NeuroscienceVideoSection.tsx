"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Play } from "lucide-react";

export default function NeuroscienceVideoSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-slate-100/50 border-t border-gray-100 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-teal-50 text-[#257f8d] border border-teal-200/60 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Play className="w-3.5 h-3.5 text-[#257f8d] fill-current" />
            <span>Video Explainer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Rooted in Neuroscience
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Learn more about Roga and tVNS
          </p>
        </motion.div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-white/80 bg-slate-900/90 backdrop-blur-xl p-2 sm:p-3 relative"
        >
          <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden bg-black">
            <iframe
              src="https://www.youtube-nocookie.com/embed/Mcut3iyFVIk?rel=0&controls=1&autoplay=0&mute=1&start=0"
              title="Discover the Science Behind Roga"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-2xl border-0"
            />
          </div>
        </motion.div>

        {/* White Paper Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <div className="flex items-center space-x-2 text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4" />
              <span>Full Clinical Documentation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              Download Roga’s Clinical White Paper
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Examine the exhaustive neuroscience trial methodologies, EEG spectral analysis, and neuro-stimulation specifications.
            </p>
          </div>

          <a
            href="https://drive.google.com/file/d/1_nyfe2LhPxTvrFvr3MUDHfkgb9JPQYFw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 rounded-xl bg-white text-gray-900 hover:bg-gray-100 font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center group relative z-10"
          >
            Download PDF
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
