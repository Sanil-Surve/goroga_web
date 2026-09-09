"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Brain, Moon, Sparkles, Zap, HeartPulse, ArrowUpRight } from "lucide-react";

export default function ScienceSummarySection() {
  const stats = [
    {
      metric: "47%",
      label: "Reduction in Stress & Anxiety",
      subtext: "Reported within the first 30 days of daily use",
      icon: HeartPulse,
    },
    {
      metric: "22%",
      label: "Improvement in Sleep Quality",
      subtext: "Faster onset of deep restorative sleep",
      icon: Moon,
    },
    {
      metric: "29%",
      label: "Increase in Daily Focus",
      subtext: "Enhanced task endurance and lower mental fatigue",
      icon: Sparkles,
    },
    {
      metric: "48%",
      label: "Increase in Vagus Nerve Activity",
      subtext: "Validated through physiological parasympathetic markers",
      icon: Zap,
    },
    {
      metric: "35%",
      label: "Increase in Alpha Brainwaves",
      subtext: "Calm yet alert state measured via EEG sensors",
      icon: Brain,
    },
    {
      metric: "17%",
      label: "Increase in HRV",
      subtext: "Heart Rate Variability boost reflecting resilience",
      icon: Activity,
    },
  ];

  return (
    <section id="science" className="py-24 bg-gradient-to-b from-white via-slate-50/70 to-slate-50/90 border-t border-gray-100/70 scroll-mt-16 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -left-28 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[#257f8d] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_2px_10px_rgba(37,127,141,0.06),inset_0_1px_0.5px_rgba(255,255,255,0.9)]">
            Clinical Rigor & Evidence
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Backed by Science, Proven by Data
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Rigorous randomized and peer-reviewed trials conducted in partnership with top Canadian neuroscience and brain health institutions.
          </p>
        </motion.div>

        {/* 6 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white/75 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-[0_12px_32px_-8px_rgba(31,38,135,0.05),inset_0_1px_1.5px_rgba(255,255,255,0.95)] hover:bg-white/90 hover:border-teal-300/80 hover:shadow-[0_20px_45px_-10px_rgba(37,127,141,0.16)] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#257f8d] tracking-tight group-hover:scale-105 transition-transform">
                    {item.metric}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-teal-100/70 backdrop-blur-md border border-teal-200/50 text-[#257f8d] flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:bg-[#257f8d] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-500">{item.subtext}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Science CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900/85 backdrop-blur-2xl border border-white/15 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.15)] relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Read Our Clinical White Paper
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore the detailed neuro-stimulation methodologies, EEG frequency band analysis, and safety evaluations behind Roga.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="https://drive.google.com/file/d/1_nyfe2LhPxTvrFvr3MUDHfkgb9JPQYFw/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 rounded-full bg-white/90 hover:bg-white text-gray-900 font-bold text-sm shadow-[0_4px_16px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/80 backdrop-blur-md transition-all inline-flex items-center relative z-10"
          >
            Download White Paper (PDF)
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

