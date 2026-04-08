import { useRef, useEffect, useCallback } from "react";
import { Hero } from "@/components/sections/Hero";
import { StickyNav } from "@/components/sections/StickyNav";
import { FeaturesShowcase } from "@/components/sections/FeaturesShowcase";
import { Features } from "@/components/sections/Features";
import { RoleBasedFeatures } from "@/components/sections/RoleBasedFeatures";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Demo } from "@/components/sections/Demo";
import { Comparison } from "@/components/sections/Comparison";
import { FAQ } from "@/components/sections/FAQ";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>();

  const fadeLoop = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.paused) return;

    const { currentTime, duration } = video;
    const fadeIn = 0.5;
    const fadeOut = 0.5;

    if (currentTime < fadeIn) {
      video.style.opacity = String(currentTime / fadeIn);
    } else if (duration - currentTime < fadeOut) {
      video.style.opacity = String((duration - currentTime) / fadeOut);
    } else {
      video.style.opacity = "1";
    }

    rafRef.current = requestAnimationFrame(fadeLoop);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      rafRef.current = requestAnimationFrame(fadeLoop);
    };

    const handleEnded = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 100);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("ended", handleEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [fadeLoop]);

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      {/* Global Background Video */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        autoPlay
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0 }}
      />

      {/* All content above video */}
      <StickyNav />
      <div className="relative z-10">
        <Hero />
        <FeaturesShowcase />
        <Features />
        <RoleBasedFeatures />
        <Pricing />
        <Testimonials />
        <Demo />
        <Comparison />
        <FAQ />
        <Team />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
