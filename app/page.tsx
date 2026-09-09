import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IntroPathwaySection from "@/components/sections/IntroPathwaySection";
import ProductShowcaseSection from "@/components/sections/ProductShowcaseSection";
import TrustedByMarquee from "@/components/sections/TrustedByMarquee";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import VideoReviewsCarousel from "@/components/sections/VideoReviewsCarousel";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WearableIntroSection from "@/components/sections/WearableIntroSection";
import MindfulnessSection from "@/components/sections/MindfulnessSection";
import ScienceSummarySection from "@/components/sections/ScienceSummarySection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Dark Journey Pathway */}
      <IntroPathwaySection />

      {/* 4. Product Showcase & Variant Picker */}
      <ProductShowcaseSection />

      {/* 5. Trusted By Experts / Institutions Marquee */}
      <TrustedByMarquee />

      {/* 6. Customer Testimonial Cards Carousel */}
      <TestimonialsCarousel />

      {/* 7. Video Reviews Carousel */}
      <VideoReviewsCarousel />

      {/* 8. How It Works 3-Step Routine */}
      <HowItWorksSection />

      {/* 9. The Wearable Device Spotlight */}
      <WearableIntroSection />

      {/* 10. Mindfulness & Companion App */}
      <MindfulnessSection />

      {/* 11. Clinical Science & Evidence */}
      <ScienceSummarySection />

      {/* 12. Community & Newsletter Capture */}
      <NewsletterSection />

      {/* 13. Comprehensive Footer */}
      <Footer />
    </main>
  );
}


