import { Building2 } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-bold gradient-text">ChronoStaff</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Streamline your HR operations with our comprehensive management platform.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => scrollToSection('features')} className="hover:text-primary transition-all duration-300">Features</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-all duration-300">Pricing</button></li>
              <li><button onClick={() => scrollToSection('comparison')} className="hover:text-primary transition-all duration-300">Comparison</button></li>
              <li><button onClick={() => scrollToSection('demo')} className="hover:text-primary transition-all duration-300">Demo</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => scrollToSection('team')} className="hover:text-primary transition-all duration-300">Team</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-all duration-300">Testimonials</button></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-all duration-300">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300">Help Center</a></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-all duration-300">FAQ</button></li>
              <li><a href="#" className="hover:text-primary transition-all duration-300">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 ChronoStaff Suite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
