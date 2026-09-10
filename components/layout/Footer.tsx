"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-50/80 via-[#f8fafc] to-slate-100/60 text-gray-700 border-t border-white/80 pt-16 pb-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-200/60">
          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#Product-Purchase"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  GoRoga Device
                </Link>
              </li>
              <li>
                <Link
                  href="/#mindfulness"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  GoRoga App
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#trusted-by"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/science"
                  className="text-gray-600 hover:text-[#257f8d] transition font-medium"
                >
                  Science & Research
                </Link>
              </li>
              <li>
                <Link
                  href="/#Product-Purchase"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  Business Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/science#Studies"
                  className="text-gray-600 hover:text-[#257f8d] transition font-medium"
                >
                  Clinical Studies
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  User Manual
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1_nyfe2LhPxTvrFvr3MUDHfkgb9JPQYFw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#257f8d] transition inline-flex items-center"
                >
                  White Paper <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </li>
              <li>
                <Link
                  href="/#Product-Purchase"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  HSA/FSA Payment
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#newsletter"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  Set Up Your Device
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  Troubleshooting
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#257f8d] transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src="/assets/goroga_logo.svg"
              alt="GoRoga Logo"
              className="h-7 w-auto object-contain"
            />
            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.tiktok.com/@roga.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs hover:bg-[#257f8d] flex items-center justify-center transition p-2 hover:shadow-xs group"
                aria-label="TikTok"
              >
                <img
                  src="https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/673f5499c6327f8365ad0597_Tiktok.svg"
                  alt="TikTok"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/roga/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs hover:bg-[#257f8d] flex items-center justify-center transition p-2 hover:shadow-xs group"
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/673f5499c6327f8365ad0599_LinkedIn.svg"
                  alt="LinkedIn"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="https://www.facebook.com/RogaLifeRoga"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs hover:bg-[#257f8d] flex items-center justify-center transition p-2 hover:shadow-xs group"
                aria-label="Facebook"
              >
                <img
                  src="https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/673f5499c6327f8365ad0595_Facebook.svg"
                  alt="Facebook"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="https://www.youtube.com/@roga-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs hover:bg-[#257f8d] flex items-center justify-center transition p-2 hover:shadow-xs group"
                aria-label="YouTube"
              >
                <img
                  src="https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/673f5499c6327f8365ad0598_YouTube.svg"
                  alt="YouTube"
                  className="w-4 h-4"
                />
              </a>
              <a
                href="https://www.instagram.com/roga.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/90 shadow-2xs hover:bg-[#257f8d] flex items-center justify-center transition p-2 hover:shadow-xs group"
                aria-label="Instagram"
              >
                <img
                  src="https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/673f5499c6327f8365ad0596_Instagram.svg"
                  alt="Instagram"
                  className="w-4 h-4"
                />
              </a>
            </div>
          </div>

          {/* App Store Buttons & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
            <div className="flex items-center gap-3">
              <a
                href="https://apps.apple.com/us/app/roga/id1493231504"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img
                  src="https://cdn.prod.website-files.com/670ea9154c393df171f53836/670ea9154c393df171f53a16_AppStoreAppStore.svg"
                  alt="Download on Apple App Store"
                  className="h-9 w-auto"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.rogalife.roga&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <img
                  src="https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/6672f9d02ddac3f9e7e4c2ad_PlayStoreGooglePlay.svg"
                  alt="Get it on Google Play"
                  className="h-9 w-auto"
                />
              </a>
            </div>
            <div className="text-xs text-gray-500" suppressHydrationWarning>
              © {new Date().getFullYear()} Roga Life Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
