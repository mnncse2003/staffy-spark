import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import heroIllustration from "@/assets/illustration-hero.png";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <GeometricDecorations variant="hero" />
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        {/* Centered Heading */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 sm:mb-8">
            <Zap className="h-4 w-4" />
            Streamline Your HR Operations
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight max-w-5xl mx-auto">
            Complete Multi-Organization{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">HR Management System</span>
          </h1>
        </AnimatedSection>

        {/* Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          <AnimatedSection animation="fade-right" delay={100} className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-hero opacity-10 blur-3xl rounded-full scale-110"></div>
            <img 
              src={heroIllustration} 
              alt="Team collaborating on HR dashboard with employee profiles and analytics" 
              className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-left" delay={200} className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Streamline employee management, attendance tracking, leave requests, salary slips, and more 
              across multiple organizations with our comprehensive cloud-based platform built with React, TypeScript, and Firebase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-hero text-primary-foreground shadow-elegant hover:opacity-90 transition-smooth text-base px-8 py-6"
                onClick={() => scrollToSection('pricing')}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 text-base px-8 py-6"
                onClick={() => scrollToSection('demo')}
              >
                Watch Demo
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Centered Stats */}
        <AnimatedSection animation="fade-up" delay={300} className="text-center">
          <div className="flex flex-wrap justify-center gap-12 sm:gap-20 lg:gap-24">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Multi-Org</p>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">Support</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">5 Roles</p>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">Access Levels</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">12+</p>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">Leave Types</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
