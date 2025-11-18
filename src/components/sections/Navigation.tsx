import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="text-base sm:text-xl font-bold text-foreground">HR Management System</span>
          </div>
          
          {/* Desktop Menu */}
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

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-4 mt-8">
                <Button variant="ghost" onClick={() => scrollToSection('features')} className="justify-start">Features</Button>
                <Button variant="ghost" onClick={() => scrollToSection('pricing')} className="justify-start">Pricing</Button>
                <Button variant="ghost" onClick={() => scrollToSection('testimonials')} className="justify-start">Testimonials</Button>
                <Button variant="ghost" onClick={() => scrollToSection('team')} className="justify-start">Team</Button>
                <Button variant="ghost" onClick={() => scrollToSection('faq')} className="justify-start">FAQ</Button>
                <Button 
                  className="bg-gradient-hero text-primary-foreground shadow-elegant hover:opacity-90 transition-smooth"
                  onClick={() => scrollToSection('pricing')}
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
