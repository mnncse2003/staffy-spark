import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
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
  );
};

export default Index;
