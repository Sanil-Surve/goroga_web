"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/70 backdrop-blur-2xl border-b border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.05),inset_0_1px_1px_rgba(255,255,255,0.9)]"
          : "bg-white/40 backdrop-blur-xl border-b border-white/30"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/goroga_logo.svg"
                alt="GoRoga Logo"
                width={200}
                height={200}
                loading="eager"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-2 bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.03),inset_0_1px_0.5px_rgba(255,255,255,0.8)]">
            <a
              href="#Product-Purchase"
              className="px-3.5 py-1.5 rounded-full text-[14px] font-medium text-gray-700 hover:text-[#257f8d] hover:bg-white/80 hover:shadow-2xs transition-all duration-200"
            >
              Product
            </a>
            <a
              href="#how-it-works"
              className="px-3.5 py-1.5 rounded-full text-[14px] font-medium text-gray-700 hover:text-[#257f8d] hover:bg-white/80 hover:shadow-2xs transition-all duration-200"
            >
              How It Works
            </a>
            <a
              href="#mindfulness"
              className="px-3.5 py-1.5 rounded-full text-[14px] font-medium text-gray-700 hover:text-[#257f8d] hover:bg-white/80 hover:shadow-2xs transition-all duration-200"
            >
              App
            </a>
            <a
              href="#testimonials"
              className="px-3.5 py-1.5 rounded-full text-[14px] font-medium text-gray-700 hover:text-[#257f8d] hover:bg-white/80 hover:shadow-2xs transition-all duration-200"
            >
              Reviews
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#Product-Purchase"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#257f8d]/95 hover:bg-[#1e6874] backdrop-blur-md shadow-[0_4px_16px_rgba(37,127,141,0.3),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Device
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-gray-700 hover:text-[#257f8d] bg-white/60 backdrop-blur-md border border-white/70 hover:bg-white/90 shadow-2xs transition focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/85 backdrop-blur-2xl border-b border-white/70 px-4 pt-3 pb-6 space-y-4 shadow-[0_20px_40px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            <a
              href="#Product-Purchase"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2.5 rounded-xl text-base font-medium text-gray-800 hover:text-[#257f8d] hover:bg-white/80 hover:shadow-2xs transition"
            >
              Product
            </a>
            <a
              href="#how-it-works"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2.5 rounded-xl text-base font-medium text-gray-800 hover:text-[#257f8d] hover:bg-white/80 hover:shadow-2xs transition"
            >
              How It Works
            </a>
            <a
              href="#mindfulness"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2.5 rounded-xl text-base font-medium text-gray-800 hover:text-[#257f8d] hover:bg-white/80 hover:shadow-2xs transition"
            >
              App
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2.5 rounded-xl text-base font-medium text-gray-800 hover:text-[#257f8d] hover:bg-white/80 hover:shadow-2xs transition"
            >
              Reviews
            </a>
            <div className="pt-2">
              <a
                href="#Product-Purchase"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold text-white bg-[#257f8d] hover:bg-[#1e6874] shadow-[0_6px_20px_rgba(37,127,141,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/20 transition text-center"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop Device (₹25000)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
