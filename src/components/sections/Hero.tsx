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
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Centered Heading */}
        <AnimatedSection animation="fade-up" className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-6">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
            Streamline Your HR Operations
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
            Complete Multi-Organization{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">HR Management System</span>
          </h1>
        </AnimatedSection>

        {/* Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-12">
          <AnimatedSection animation="fade-right" delay={100} className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-hero opacity-10 blur-3xl rounded-full scale-110"></div>
            <img 
              src={heroIllustration} 
              alt="Team collaborating on HR dashboard with employee profiles and analytics" 
              className="relative w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-left" delay={200} className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Streamline employee management, attendance tracking, leave requests, salary slips, and more 
              across multiple organizations with our comprehensive cloud-based platform built with React, TypeScript, and Firebase.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-hero text-primary-foreground shadow-elegant hover:opacity-90 transition-smooth w-full sm:w-auto"
                onClick={() => scrollToSection('pricing')}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 w-full sm:w-auto"
                onClick={() => scrollToSection('demo')}
              >
                Watch Demo
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Centered Stats */}
        <AnimatedSection animation="fade-up" delay={300} className="text-center">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">Multi-Org</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Support</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">5 Roles</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Access Levels</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">12+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Leave Types</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
