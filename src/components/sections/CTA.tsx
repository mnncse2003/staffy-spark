import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CTA = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
      <Card className="p-6 sm:p-8 lg:p-12 bg-gradient-hero text-primary-foreground text-center shadow-elegant border-0">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your HR Operations?</h2>
        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
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
    </section>
  );
};
