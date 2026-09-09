"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Moon, Focus, Activity } from "lucide-react";

export default function MindfulnessSection() {
  const appFeatures = [
    {
      icon: Brain,
      title: "Stress & Anxiety Relief",
      description:
        "Scientifically validated guided neuro-meditations paired with vagal frequency pulses.",
    },
    {
      icon: Moon,
      title: "Deep Sleep Induction",
      description:
        "Wind-down protocols designed to lower resting heart rate and prepare the mind for REM sleep.",
    },
    {
      icon: Focus,
      title: "ADHD & Deep Work Mode",
      description:
        "Specialized sessions to eliminate brain chatter and increase sustained focus.",
    },
    {
      icon: Activity,
      title: "HRV & Biomarker Tracking",
      description:
        "Monitor your vagal tone improvement, session streaks, and daily recovery trends.",
    },
  ];

  return (
    <section id="mindfulness" className="py-28 bg-gradient-to-b from-[#080e1a] via-[#0f172a] to-[#080e1a] text-white overflow-hidden scroll-mt-16 relative">
      {/* Ambient background glows for dark glass refraction */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-inner">
            Mindfulness & Companion App
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            A World of Mindfulness Content
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Access expert-curated audio sessions, guided breathwork, and custom neuro-stimulation protocols tailored to help you reduce stress, boost focus, and restore peace of mind.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://apps.apple.com/us/app/roga/id1493231504"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 hover:border-teal-400/40 shadow-sm transition"
            >
              <img
                src="https://cdn.prod.website-files.com/670ea9154c393df171f53836/670ea9154c393df171f53a16_AppStoreAppStore.svg"
                alt="Download on the App Store"
                className="h-10 w-auto"
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="https://play.google.com/store/apps/details?id=com.rogalife.roga&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 hover:border-teal-400/40 shadow-sm transition"
            >
              <img
                src="https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/6672f9d02ddac3f9e7e4c2ad_PlayStoreGooglePlay.svg"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {appFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/40 backdrop-blur-2xl border border-white/10 hover:border-teal-400/40 hover:bg-slate-800/65 shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.12)] rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/15 border border-teal-400/30 flex items-center justify-center text-teal-300 mb-6 shadow-inner group-hover:scale-105 group-hover:border-teal-300/50 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-teal-200 transition-colors">{feat.title}</h3>
                  <p className="text-sm text-slate-300/80 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

