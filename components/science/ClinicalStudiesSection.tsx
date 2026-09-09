"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { clinicalStudies, ClinicalStudy } from "@/data/scienceData";
import { ArrowUpRight, BookOpen } from "lucide-react";
import StudyModalDrawer from "./StudyModalDrawer";

export default function ClinicalStudiesSection() {
  const [selectedStudy, setSelectedStudy] = useState<ClinicalStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenStudy = (study: ClinicalStudy) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
  };

  return (
    <section id="Studies" className="py-24 bg-white scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-teal-50 text-[#257f8d] border border-teal-200/60 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            Peer-Reviewed &amp; Controlled Trials
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Clinical Studies
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Roga sends gentle electrical impulses to the brain via the auricular branch of the Vagus Nerve.
          </p>
        </motion.div>

        {/* Studies List with Alternating Layout */}
        <div className="space-y-20 lg:space-y-28">
          {clinicalStudies.map((study, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div
                    className={`relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#257f8d]/15 via-[#257f8d]/10 to-teal-100/30 border border-teal-600/10 shadow-[0_16px_40px_rgba(37,127,141,0.08)] overflow-hidden group ${
                      isImageLeft
                        ? "rounded-tl-[40px] rounded-br-2xl"
                        : "rounded-tr-[40px] rounded-bl-2xl"
                    }`}
                  >
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-gray-800 border border-white/80 shadow-2xs">
                        Study 0{idx + 1}
                      </span>
                    </div>

                    <div className="relative w-full h-64 sm:h-80 md:h-96 transform group-hover:scale-[1.02] transition-transform duration-500">
                      <Image
                        src={study.mainImage}
                        alt={study.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Category / Keyword Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-semibold text-[#111111] bg-[#257f8d]/15 border border-[#257f8d]/20 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-gray-900 tracking-tight leading-snug mb-4">
                    {study.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 font-normal">
                    {study.summary}
                  </p>

                  {/* Source Citation */}
                  <div className="mb-6 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-900 mb-1">
                      Source:
                    </span>
                    <p className="text-xs text-gray-600 italic leading-relaxed">
                      {study.sourceText}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => handleOpenStudy(study)}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl font-semibold text-white bg-[#257f8d] hover:bg-[#1e6874] shadow-[0_4px_16px_rgba(37,127,141,0.25)] hover:shadow-[0_6px_20px_rgba(37,127,141,0.35)] transition-all duration-200 text-sm group"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Study
                    </button>

                    <Link
                      href={`/${study.slug}`}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 text-sm"
                    >
                      Dedicated Page
                      <ArrowUpRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full Paper Modal Drawer */}
      <StudyModalDrawer
        study={selectedStudy}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
