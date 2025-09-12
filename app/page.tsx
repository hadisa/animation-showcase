"use client";
import { Navigation } from "@/components/navigation";
import AnimationCategories from "@/components/sections/category";
import CTASection from "@/components/sections/cta-section";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl floating-animation"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <Navigation />
      <HeroSection />

      <FeaturesSection />
      {/* <AnimatedHeroBackground /> */}
      <AnimationCategories />
      <CTASection />
      <Footer />
    </div>
  );
}
