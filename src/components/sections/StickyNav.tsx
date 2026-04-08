import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Building2, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const StickyNav = () => {
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const heroHeight = window.innerHeight;
      // Only activate after scrolling past the hero
      if (y < heroHeight) {
        setVisible(false);
      } else if (y < lastScrollY.current) {
        // Scrolling up
        setVisible(true);
      } else {
        // Scrolling down
        setVisible(false);
        setMobileMenuOpen(false);
      }
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-background/80 backdrop-blur-md border-b border-foreground/10 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full py-4 px-8 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Building2 className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold text-foreground">ChronoStaff Suite</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          <button onClick={() => scrollToSection("features")} className="px-3 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors duration-200">Features</button>
          <button onClick={() => scrollToSection("pricing")} className="px-3 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors duration-200">Pricing</button>
          <button onClick={() => scrollToSection("testimonials")} className="px-3 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors duration-200">Testimonials</button>
          <button onClick={() => scrollToSection("team")} className="px-3 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors duration-200">Team</button>
          <button onClick={() => scrollToSection("faq")} className="px-3 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors duration-200">FAQ</button>
          <Link to="/login">
            <Button variant="ghost" className="px-3 py-2 text-sm text-foreground/90 hover:text-foreground">
              <User className="h-4 w-4 mr-1" />
              Login
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-foreground/90 hover:text-foreground transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden px-8 pb-4 flex flex-col gap-2">
          <button onClick={() => scrollToSection("features")} className="py-2 text-sm text-foreground/90 hover:text-foreground text-left">Features</button>
          <button onClick={() => scrollToSection("pricing")} className="py-2 text-sm text-foreground/90 hover:text-foreground text-left">Pricing</button>
          <button onClick={() => scrollToSection("testimonials")} className="py-2 text-sm text-foreground/90 hover:text-foreground text-left">Testimonials</button>
          <button onClick={() => scrollToSection("team")} className="py-2 text-sm text-foreground/90 hover:text-foreground text-left">Team</button>
          <button onClick={() => scrollToSection("faq")} className="py-2 text-sm text-foreground/90 hover:text-foreground text-left">FAQ</button>
          <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="ghost" className="w-full justify-start px-0 text-sm text-foreground/90 hover:text-foreground">
              <User className="h-4 w-4 mr-1" />
              Login
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
