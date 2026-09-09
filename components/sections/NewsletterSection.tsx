"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, Loader2, ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 700);
  };

  return (
    <section id="newsletter" className="py-24 bg-linear-to-b from-white via-slate-50/70 to-slate-50/90 border-t border-gray-100/70 scroll-mt-16 relative overflow-hidden">
      {/* Ambient glows for glass refraction */}
      <div className="absolute top-1/2 -left-28 -translate-y-1/2 w-96 h-96 bg-teal-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-28 -translate-y-1/2 w-96 h-96 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/75 backdrop-blur-2xl rounded-3xl p-8 sm:p-14 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(255,255,255,0.95)] border border-white/80"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-[0_4px_16px_rgba(37,127,141,0.1),inset_0_1px_1px_rgba(255,255,255,0.9)] text-[#257f8d] flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7" />
          </div>

          <span className="inline-block px-3.5 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/90 text-[#257f8d] text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_2px_10px_rgba(37,127,141,0.06),inset_0_1px_0.5px_rgba(255,255,255,0.9)]">
            Community & Insights
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Join the Roga Community
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-8">
            Connect with supportive, like-minded users and unlock exclusive discounts, neuro-wellness tips, and surprise swag.
          </p>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-50/90 backdrop-blur-md border border-emerald-200 text-emerald-800 text-sm font-medium shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>You’re subscribed! Thank you for joining the Roga family.</span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="max-w-md mx-auto"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="Enter your email address"
                    className="grow px-6 py-3.5 rounded-full border border-white/80 bg-white/70 backdrop-blur-md text-gray-900 text-sm placeholder-gray-400 focus:outline-hidden focus:ring-2 focus:ring-[#257f8d] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02),0_2px_8px_rgba(0,0,0,0.02)] transition"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="px-8 py-3.5 rounded-full bg-[#257f8d] hover:bg-[#1e6874] text-white font-semibold text-sm shadow-[0_6px_20px_rgba(37,127,141,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/20 transition duration-200 shrink-0 disabled:opacity-70 flex items-center justify-center cursor-pointer"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </>
                    )}
                  </motion.button>
                </div>

                {status === "error" && (
                  <p className="text-xs text-rose-600 mt-3 font-medium">
                    {errorMessage}
                  </p>
                )}

                <p className="text-xs text-gray-400 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

