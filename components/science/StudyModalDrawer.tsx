"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, BookOpen, CheckCircle, Award } from "lucide-react";
import { ClinicalStudy } from "@/data/scienceData";

interface StudyModalDrawerProps {
  study: ClinicalStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function StudyModalDrawer({
  study,
  isOpen,
  onClose,
}: StudyModalDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!study) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-gray-950/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="px-6 py-5 sm:px-8 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-teal-50/50 via-white to-white shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-teal-100/80 text-[#257f8d] flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#257f8d]">
                    Clinical Evidence Paper
                  </span>
                  <p className="text-xs text-gray-500 font-medium line-clamp-1">
                    {study.publishedIn}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Link
                  href={`/${study.slug}`}
                  className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#257f8d] bg-teal-50 hover:bg-teal-100 border border-teal-200/60 transition"
                >
                  Dedicated Page <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Paper Body */}
            <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8">
              {/* Title & Tags */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[#257f8d]/10 text-[#257f8d] border border-[#257f8d]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-snug">
                  {study.title}
                </h2>
                <div className="mt-4 p-3.5 bg-gray-50 rounded-2xl border border-gray-100 text-xs text-gray-600 flex items-start space-x-2.5">
                  <Award className="w-4 h-4 text-[#257f8d] shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-gray-800">Source:</strong> {study.sourceText}
                  </p>
                </div>
              </div>

              {/* Abstract */}
              <div className="bg-teal-50/40 rounded-2xl p-6 border border-teal-100/60">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#257f8d] mb-3">
                  Abstract
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  {study.abstract}
                </p>
              </div>

              {/* Background */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                  Background &amp; Rationale
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                  {study.background}
                </p>
              </div>

              {/* Materials & Methods */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  Materials &amp; Methods
                </h3>
                <ul className="space-y-2.5">
                  {study.materialsAndMethods.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#257f8d] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results & Figures */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                  Clinical Results &amp; Data
                </h3>
                <p className="text-sm sm:text-base text-gray-700 font-medium mb-4">
                  {study.resultsSummary}
                </p>
                <div className="space-y-4 mb-6">
                  {study.resultsParagraphs.map((para, i) => (
                    <p key={i} className="text-sm text-gray-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Figures Grid */}
                {study.figures.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {study.figures.map((fig, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 rounded-2xl p-4 border border-gray-200/70 flex flex-col items-center text-center"
                      >
                        <div className="relative w-full h-48 sm:h-56 mb-3">
                          <Image
                            src={fig.image}
                            alt={fig.label || "Study figure"}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        {fig.label && (
                          <h5 className="text-xs font-bold text-gray-900 mb-1">
                            {fig.label}
                          </h5>
                        )}
                        {fig.caption && (
                          <p className="text-xs text-gray-500 italic">
                            {fig.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Conclusion */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Conclusion
                </h3>
                <div className="space-y-3">
                  {study.conclusion.map((c, i) => (
                    <p key={i} className="text-sm text-gray-600 leading-relaxed">
                      {c}
                    </p>
                  ))}
                </div>
              </div>

              {/* Keywords */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Keywords
                </h4>
                <div className="flex flex-wrap gap-2">
                  {study.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs bg-gray-100 text-gray-700 font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer actions */}
            <div className="px-6 py-4 sm:px-8 border-t border-gray-100 bg-gray-50/80 flex items-center justify-between shrink-0">
              <Link
                href={`/${study.slug}`}
                className="text-xs font-semibold text-[#257f8d] hover:underline flex items-center"
              >
                View standalone page <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </Link>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-[#257f8d] hover:bg-[#1e6874] transition"
              >
                Close Paper
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
