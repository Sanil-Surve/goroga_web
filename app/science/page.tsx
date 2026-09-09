import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScienceHero from "@/components/science/ScienceHero";
import ScienceResultsSection from "@/components/science/ScienceResultsSection";
import ClinicalStudiesSection from "@/components/science/ClinicalStudiesSection";
import NeuroscienceVideoSection from "@/components/science/NeuroscienceVideoSection";

export const metadata: Metadata = {
  title: "Science & Clinical Evidence - Roga",
  description:
    "Explore the scientific foundation, EEG brainwave analysis, and peer-reviewed clinical studies supporting Roga tVNS technology. Proven reductions in anxiety, increased vagus nerve activation, and improved sleep.",
  openGraph: {
    title: "Scientific Evidence Supporting Roga",
    description:
      "Learn the scientific foundation of Roga’s tVNS technology and its clinically proven benefits for stress and anxiety reduction.",
    images: [
      {
        url: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/68b2385334fc0b9ef63fe016_Untitled%20design%20(36).png",
        width: 1200,
        height: 630,
        alt: "Scientific Evidence Supporting Roga",
      },
    ],
  },
};

export default function SciencePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Header with Partner Grid */}
      <ScienceHero />

      {/* Clinical Study Results & 6 Stat Metrics */}
      <ScienceResultsSection />

      {/* 4 Clinical Studies Cards */}
      <ClinicalStudiesSection />

      {/* Rooted in Neuroscience Video & White Paper */}
      <NeuroscienceVideoSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
