"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productImages } from "@/data/productImages";
import ModalLightbox from "@/components/ui/ModalLightbox";

import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Medal,
  ShieldCheck,
  RotateCcw,
  Truck,
  CreditCard,
  Maximize2,
  Star,
  ShoppingBag,
} from "lucide-react";

export default function ProductShowcaseSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<"black" | "blue">("black");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="Product-Purchase" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50/80 via-teal-50/20 to-slate-50/80 scroll-mt-16 relative overflow-hidden">
      {/* Subtle Ambient Light for Glass Refraction */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-teal-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/75 backdrop-blur-md border border-white/80 text-[#257f8d] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_2px_10px_rgba(37,127,141,0.06),inset_0_1px_0.5px_rgba(255,255,255,0.9)]">
            Product Spotlight
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Activate your Vagus Nerve
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Most users see up to{" "}
            <a
              href="#science"
              className="text-[#257f8d] font-semibold underline decoration-[#257f8d]/30 underline-offset-4 hover:decoration-[#257f8d] transition"
            >
              47% reduction
            </a>{" "}
            in stress symptoms over the first month.
          </p>
        </div>

        {/* Main Grid: Gallery & Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Image Slider */}
          <div className="lg:col-span-7 bg-white/75 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,0.95)] border border-white/80">
            {/* Main Slide Display */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-50/80 border border-white/60 group shadow-inner">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={productImages[currentSlide].src}
                  alt={productImages[currentSlide].alt}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover object-center cursor-pointer"
                  onClick={() => setIsLightboxOpen(true)}
                />
              </AnimatePresence>

              {/* Enlarge Button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-white/80 backdrop-blur-md text-gray-700 hover:bg-white hover:text-[#257f8d] shadow-sm border border-white/80 transition opacity-0 group-hover:opacity-100"
                aria-label="Enlarge image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Prev / Next Arrows */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-md text-gray-800 hover:bg-white hover:text-[#257f8d] shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/80 transition"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-md text-gray-800 hover:bg-white hover:text-[#257f8d] shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/80 transition"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Thumbnail Navigation Row */}
            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2 no-scrollbar">
              {productImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition backdrop-blur-sm ${currentSlide === idx
                    ? "border-[#257f8d] ring-3 ring-[#257f8d]/25 scale-105 shadow-sm"
                    : "border-transparent opacity-60 hover:opacity-100 hover:scale-102"
                    }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Product Details & Purchase Form */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Header & Price */}
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-white/75 backdrop-blur-md border border-white/80 text-[#257f8d] text-xs font-semibold uppercase tracking-wider mb-2 shadow-[0_2px_8px_rgba(37,127,141,0.06),inset_0_1px_0.5px_rgba(255,255,255,0.9)]">
                Neuroscience Wearable
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
                Roga: Vagus Nerve Stimulation
              </h3>
              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-3xl font-extrabold text-gray-900">
                  ₹25000
                </span>
                <span className="text-xs text-emerald-700 font-semibold bg-emerald-50/80 backdrop-blur-md border border-emerald-200/70 px-3 py-1 rounded-full shadow-2xs">
                  In Stock & Ready to Ship
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 pt-1 pb-3 border-b border-gray-200/60">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <a
                href="#testimonials"
                className="text-sm font-semibold text-gray-700 hover:text-[#257f8d] underline decoration-gray-300 hover:decoration-[#257f8d] transition"
              >
                4.6 | Join 1,500+ Users
              </a>
            </div>

            {/* Benefit Checkpoints */}
            <div className="space-y-3">
              {[
                "Reduce stress within minutes",
                "Improve your sleep quality & recovery",
                "Designed by ex-Google engineers & neuroscientists",
                "Multiple peer-reviewed clinical studies",
                "In partnership with the Canada Centre for Aging & Brain Health",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-tight">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 py-4 bg-white/75 backdrop-blur-xl border border-white/80 rounded-2xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.03),inset_0_1px_1px_rgba(255,255,255,0.9)]">
              <div className="flex flex-col items-center text-center p-2">
                <Medal className="w-6 h-6 text-[#257f8d] mb-1.5" />
                <span className="text-[11px] font-semibold text-gray-800 leading-tight">
                  Clinically Proven
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-2 border-x border-gray-100">
                <ShieldCheck className="w-6 h-6 text-[#257f8d] mb-1.5" />
                <span className="text-[11px] font-semibold text-gray-800 leading-tight">
                  Safety Tested
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-2">
                <RotateCcw className="w-6 h-6 text-[#257f8d] mb-1.5" />
                <span className="text-[11px] font-semibold text-gray-800 leading-tight">
                  60-Day Free Returns
                </span>
              </div>
            </div>

            {/* Color Variant Selector */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 block">
                Select Color Edition:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedVariant("black")}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-semibold transition backdrop-blur-md ${selectedVariant === "black"
                    ? "bg-gray-900/95 text-white border-white/30 shadow-[0_4px_14px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)]"
                    : "bg-white/70 text-gray-700 border-white/80 hover:bg-white/90 shadow-2xs"
                    }`}
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-black border border-gray-600" />
                  Matte Black
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedVariant("blue")}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-semibold transition backdrop-blur-md ${selectedVariant === "blue"
                    ? "bg-[#257f8d]/95 text-white border-white/30 shadow-[0_4px_14px_rgba(37,127,141,0.3),inset_0_1px_1px_rgba(255,255,255,0.3)]"
                    : "bg-white/70 text-gray-700 border-white/80 hover:bg-white/90 shadow-2xs"
                    }`}
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-sky-500 border border-sky-600" />
                  Sky Blue
                </button>
              </div>

              {/* Purchase Button */}
              <a
                href="https://shop.roga.ai/products/roga-device"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center py-4 px-8 rounded-full text-base font-bold text-white shadow-[0_8px_25px_rgba(37,127,141,0.35),inset_0_1px_1px_rgba(255,255,255,0.35)] border border-white/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 ${selectedVariant === "black"
                  ? "bg-gray-900 hover:bg-black"
                  : "bg-[#257f8d] hover:bg-[#1e6874]"
                  }`}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Get {selectedVariant === "black" ? "Black" : "Blue"} Device — ₹25000
              </a>
            </div>

            {/* Shipping & Guarantee Details */}
            <div className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/70 shadow-2xs space-y-2 text-xs text-gray-600">
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-[#257f8d] shrink-0" />
                <span>Free Express Shipping within the US & Canada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <RotateCcw className="w-4 h-4 text-[#257f8d] shrink-0" />
                <span>30-Day 100% Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CreditCard className="w-4 h-4 text-[#257f8d] shrink-0" />
                <span>HSA/FSA eligible — Save up to 30% with pre-tax dollars</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ModalLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={productImages}
        currentIndex={currentSlide}
        onSelectIndex={setCurrentSlide}
      />
    </section>
  );
}
