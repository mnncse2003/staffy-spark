import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
        <Card className="p-8 sm:p-12 lg:p-16 bg-gradient-hero text-primary-foreground text-center shadow-elegant border-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Transform Your HR Operations?</h2>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 opacity-90 max-w-3xl mx-auto">
          Join hundreds of companies already using our platform to streamline their HR processes
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
            onClick={() => scrollToSection('pricing')}
          >
            Start Free Trial
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 w-full sm:w-auto"
            onClick={() => scrollToSection('demo')}
          >
            Schedule Demo
          </Button>
        </div>
        </Card>
      </AnimatedSection>
    </section>
  );
};
