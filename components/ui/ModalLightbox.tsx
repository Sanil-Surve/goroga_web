"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ModalLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string; title: string }[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export default function ModalLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onSelectIndex,
}: ModalLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onSelectIndex((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === "ArrowRight") {
        onSelectIndex((currentIndex + 1) % images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onSelectIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-2xl p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white shadow-lg transition z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Arrow */}
          <button
            onClick={() =>
              onSelectIndex((currentIndex - 1 + images.length) % images.length)
            }
            className="absolute left-4 sm:left-8 p-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white shadow-lg transition z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={() =>
              onSelectIndex((currentIndex + 1) % images.length)
            }
            className="absolute right-4 sm:right-8 p-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white shadow-lg transition z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Main Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center p-2 rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 shadow-2xl"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-h-[72vh] w-auto object-contain rounded-2xl shadow-xl"
            />
            <div className="mt-3 px-5 py-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/15 text-center text-white/90 shadow-md">
              <p className="text-sm font-medium">
                {images[currentIndex].title || images[currentIndex].alt}
              </p>
              <p className="text-xs text-white/60 mt-0.5">
                {currentIndex + 1} of {images.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

