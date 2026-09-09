"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, BookOpen, Award } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ClinicalStudy } from "@/data/scienceData";

interface StudyDetailViewProps {
  study: ClinicalStudy;
}

export default function StudyDetailView({ study }: StudyDetailViewProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-b from-white via-teal-50/20 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Back link */}
            <Link
              href="/science"
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#257f8d] hover:text-[#1e6874] mb-6 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5 group-hover:-translate-x-1 transition-transform" />
              CLINICAL EVIDENCE
            </Link>

            {/* Tags */}
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

            {/* Study Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.2] mb-6">
              {study.title}
            </h1>

            {/* Published In */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="font-semibold text-gray-900">Published in:</span>
              <strong className="text-gray-800 font-semibold">{study.publishedIn}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Study Body with Sticky Table of Contents */}
      <section className="py-16 md:py-24 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content Area (8 cols on desktop) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Abstract */}
              <div id="Abstract" className="scroll-mt-28">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#257f8d] flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Abstract</h2>
                </div>
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-50/40 via-white to-teal-50/20 border border-teal-100/70 shadow-2xs">
                  <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line font-normal">
                    {study.abstract}
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Background */}
              <div id="Background" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Background</h2>
                <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
                  <p className="whitespace-pre-line text-base">{study.background}</p>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Materials & Methods */}
              <div id="Materials-Methods" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Materials &amp; Methods</h2>
                <div className="bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-200/70">
                  <ul className="space-y-3.5">
                    {study.materialsAndMethods.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm sm:text-base text-gray-700">
                        <CheckCircle className="w-5 h-5 text-[#257f8d] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Results */}
              <div id="Results" className="scroll-mt-28 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Results</h2>
                <p className="text-base text-gray-800 font-medium leading-relaxed">
                  {study.resultsSummary}
                </p>

                {/* Figures */}
                {study.figures.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    {study.figures.map((fig, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-3xl p-5 border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center"
                      >
                        <div className="relative w-full h-64 mb-4">
                          <Image
                            src={fig.image}
                            alt={fig.label || "Study chart"}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 40vw"
                          />
                        </div>
                        {fig.label && (
                          <h4 className="text-sm font-bold text-gray-900 text-center mb-1">
                            {fig.label}
                          </h4>
                        )}
                        {fig.caption && (
                          <p className="text-xs text-gray-500 text-center italic">
                            {fig.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  {study.resultsParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Conclusion */}
              <div id="Conclusion" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/70 space-y-4">
                  {study.conclusion.map((c, i) => (
                    <p key={i} className="text-base text-gray-700 leading-relaxed">
                      {c}
                    </p>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* Keywords & Source Citation */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Keywords
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200/60"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-teal-50/40 border border-teal-100 flex items-start space-x-3">
                  <Award className="w-5 h-5 text-[#257f8d] shrink-0 mt-0.5" />
                  <div className="text-xs text-gray-700 leading-relaxed">
                    <strong className="text-gray-900 block mb-1">Citation &amp; Approval:</strong>
                    {study.sourceText}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar: Table of Contents (4 cols on desktop) */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="bg-white/80 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.04)] space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 pb-3 border-b border-gray-100">
                  Table of Contents
                </h3>
                <nav className="flex flex-col space-y-2 text-sm font-semibold">
                  <a
                    href="#Abstract"
                    className="px-3.5 py-2 rounded-xl text-gray-700 hover:text-[#257f8d] hover:bg-teal-50/60 transition"
                  >
                    Abstract
                  </a>
                  <a
                    href="#Background"
                    className="px-3.5 py-2 rounded-xl text-gray-700 hover:text-[#257f8d] hover:bg-teal-50/60 transition"
                  >
                    Background
                  </a>
                  <a
                    href="#Materials-Methods"
                    className="px-3.5 py-2 rounded-xl text-gray-700 hover:text-[#257f8d] hover:bg-teal-50/60 transition"
                  >
                    Materials &amp; Methods
                  </a>
                  <a
                    href="#Results"
                    className="px-3.5 py-2 rounded-xl text-gray-700 hover:text-[#257f8d] hover:bg-teal-50/60 transition"
                  >
                    Results
                  </a>
                  <a
                    href="#Conclusion"
                    className="px-3.5 py-2 rounded-xl text-gray-700 hover:text-[#257f8d] hover:bg-teal-50/60 transition"
                  >
                    Conclusion
                  </a>
                </nav>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="/science"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-[#257f8d] bg-teal-50 hover:bg-teal-100 transition text-xs"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
                    Back to All Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Footer Banner */}
      <section className="py-16 bg-gradient-to-r from-teal-50/70 via-cyan-50/50 to-teal-50/70 border-t border-teal-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center md:text-left">
              Learn more about Roga and how it can help you.
            </h3>
            <Link
              href="/science"
              className="px-8 py-3.5 rounded-xl font-semibold text-white bg-[#257f8d] hover:bg-[#1e6874] shadow-[0_8px_20px_rgba(37,127,141,0.25)] transition text-sm shrink-0"
            >
              Go to Clinical Evidence
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
