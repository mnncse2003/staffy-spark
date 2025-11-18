import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
            Streamline Your HR Operations
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
            Modern HR Management Made{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Simple</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            A comprehensive web-based platform that streamlines employee management, 
            attendance tracking, leave requests, and salary slip generation—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">500+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Companies</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">50k+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Active Users</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground">99.9%</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>
        <div className="relative mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
          <img 
            src={heroDashboard} 
            alt="HR Dashboard Interface showcasing employee management features" 
            className="relative rounded-2xl shadow-elegant border border-border"
          />
        </div>
      </div>
    </section>
  );
};
