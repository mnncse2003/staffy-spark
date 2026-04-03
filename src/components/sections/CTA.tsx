import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";

export const CTA = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28 overflow-hidden">
      <GeometricDecorations variant="pricing" />
      <AnimatedSection animation="scale">
        <div className="relative p-8 sm:p-12 lg:p-16 text-center rounded-2xl overflow-hidden glow-border">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Ready to Transform Your{" "}
              <span className="gradient-text">HR Operations</span>?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 text-muted-foreground max-w-3xl mx-auto">
              Join hundreds of companies already using our platform to streamline their HR processes
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground shadow-[0_0_30px_hsl(175_80%_50%_/_0.3)] hover:shadow-[0_0_50px_hsl(175_80%_50%_/_0.5)] transition-all duration-500 w-full sm:w-auto"
                onClick={() => scrollToSection('pricing')}
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border/50 hover:border-primary/50 hover:bg-primary/5 w-full sm:w-auto transition-all duration-300"
                onClick={() => scrollToSection('demo')}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};
