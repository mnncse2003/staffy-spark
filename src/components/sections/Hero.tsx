import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import heroIllustration from "@/assets/illustration-hero.png";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";
import { useTypewriter } from "@/hooks/useTypewriter";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const { displayText } = useTypewriter({
    texts: [
      'HR Management System',
      'Attendance Tracking',
      'Face Recognition',
      'Leave Management',
      'Salary Processing',
      'Shift Management',
    ],
    typingSpeed: 70,
    deletingSpeed: 35,
    pauseDuration: 2500,
  });

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <GeometricDecorations variant="hero" />
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        {/* Centered Heading */}
        <AnimatedSection animation="fade-up" className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
            <Zap className="h-4 w-4" />
            <span className="font-mono text-xs tracking-wider uppercase">ChronoStaff Suite — Complete HR Operations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight max-w-5xl mx-auto">
            Complete Multi-Organization{" "}
            <span className="gradient-text-animate">{displayText}</span>
            <span className="inline-block w-0.5 h-[0.8em] bg-primary ml-1 animate-pulse align-middle" />
          </h1>
        </AnimatedSection>

        {/* Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          <AnimatedSection animation="fade-right" delay={100} className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-[80px] rounded-full scale-110"></div>
            <img 
              src={heroIllustration} 
              alt="Team collaborating on HR dashboard with employee profiles and analytics" 
              className="relative w-full max-w-lg mx-auto drop-shadow-[0_0_40px_hsl(175_80%_50%_/_0.15)]"
            />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-left" delay={200} className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Streamline employee management, attendance tracking, face recognition, leave requests, salary slips, 
              exit management, helpdesk, real-time chat, shift management, and self-service portal 
              across multiple organizations with our comprehensive cloud-based platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground shadow-[0_0_30px_hsl(175_80%_50%_/_0.3)] hover:shadow-[0_0_50px_hsl(175_80%_50%_/_0.5)] hover:bg-primary/90 transition-all duration-500 text-base px-8 py-6 font-semibold"
                onClick={() => scrollToSection('pricing')}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border border-border/50 hover:border-primary/50 hover:bg-primary/5 text-base px-8 py-6 transition-all duration-300"
                onClick={() => scrollToSection('demo')}
              >
                Watch Demo
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Centered Stats */}
        <AnimatedSection animation="fade-up" delay={300} className="text-center">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
            {[
              { value: 'Multi-Org', label: 'Support' },
              { value: '5 Roles', label: 'Access Levels' },
              { value: '14+', label: 'Leave Types' },
              { value: '25+', label: 'Modules' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text group-hover:drop-shadow-[0_0_20px_hsl(175_80%_50%_/_0.4)] transition-all duration-300">{stat.value}</p>
                <p className="text-sm sm:text-base text-muted-foreground mt-2 font-mono text-xs tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
