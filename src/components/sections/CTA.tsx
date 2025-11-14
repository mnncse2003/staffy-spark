import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CTA = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-6 py-24">
      <Card className="p-12 bg-gradient-hero text-primary-foreground text-center shadow-elegant border-0">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your HR Operations?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join hundreds of companies already using our platform to streamline their HR processes
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => scrollToSection('pricing')}
          >
            Start Free Trial
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white/10"
            onClick={() => scrollToSection('demo')}
          >
            Schedule Demo
          </Button>
        </div>
      </Card>
    </section>
  );
};
