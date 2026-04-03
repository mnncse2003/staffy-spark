import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="glass sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(175_80%_50%_/_0.6)]" />
            </div>
            <span className="text-base sm:text-xl font-bold gradient-text">ChronoStaff Suite</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-300">Features</Button>
            <Button variant="ghost" onClick={() => scrollToSection('pricing')} className="text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-300">Pricing</Button>
            <Button variant="ghost" onClick={() => scrollToSection('testimonials')} className="text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-300">Testimonials</Button>
            <Button variant="ghost" onClick={() => scrollToSection('team')} className="text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-300">Team</Button>
            <Button variant="ghost" onClick={() => scrollToSection('faq')} className="text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-300">FAQ</Button>
            <Link to="/login">
              <Button variant="outline" className="gap-2 ml-2 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                <User className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Button 
              className="ml-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(175_80%_50%_/_0.3)] hover:shadow-[0_0_30px_hsl(175_80%_50%_/_0.5)] transition-all duration-300"
              onClick={() => scrollToSection('pricing')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] glass border-border/50">
              <div className="flex flex-col gap-2 mt-8">
                <Button variant="ghost" onClick={() => scrollToSection('features')} className="justify-start text-muted-foreground hover:text-foreground">Features</Button>
                <Button variant="ghost" onClick={() => scrollToSection('pricing')} className="justify-start text-muted-foreground hover:text-foreground">Pricing</Button>
                <Button variant="ghost" onClick={() => scrollToSection('testimonials')} className="justify-start text-muted-foreground hover:text-foreground">Testimonials</Button>
                <Button variant="ghost" onClick={() => scrollToSection('team')} className="justify-start text-muted-foreground hover:text-foreground">Team</Button>
                <Button variant="ghost" onClick={() => scrollToSection('faq')} className="justify-start text-muted-foreground hover:text-foreground">FAQ</Button>
                <div className="h-px bg-border/50 my-2" />
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full gap-2 border-border/50">
                    <User className="h-4 w-4" />
                    Login
                  </Button>
                </Link>
                <Button 
                  className="bg-primary text-primary-foreground shadow-[0_0_20px_hsl(175_80%_50%_/_0.3)]"
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
