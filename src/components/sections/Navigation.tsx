import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">HR Management System</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" onClick={() => scrollToSection('features')}>Features</Button>
            <Button variant="ghost" onClick={() => scrollToSection('pricing')}>Pricing</Button>
            <Button variant="ghost" onClick={() => scrollToSection('testimonials')}>Testimonials</Button>
            <Button variant="ghost" onClick={() => scrollToSection('team')}>Team</Button>
            <Button variant="ghost" onClick={() => scrollToSection('faq')}>FAQ</Button>
            <Button 
              className="bg-gradient-hero text-primary-foreground shadow-elegant hover:opacity-90 transition-smooth"
              onClick={() => scrollToSection('pricing')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
