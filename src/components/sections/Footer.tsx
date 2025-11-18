import { Building2 } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-foreground">HR System</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Streamline your HR operations with our comprehensive management platform.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-smooth">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-smooth">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('comparison')} className="hover:text-primary transition-smooth">
                  Comparison
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('demo')} className="hover:text-primary transition-smooth">
                  Demo
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-smooth">
                  Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-smooth">
                  Testimonials
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Documentation</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Help Center</a>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-smooth">
                  FAQ
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Status</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 HR Management System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
