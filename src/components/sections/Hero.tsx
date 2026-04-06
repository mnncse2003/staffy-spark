import { Button } from "@/components/ui/button";
import { Building2, User, Play, Globe, ShieldCheck, TreePalm, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const MARQUEE_BRANDS = ["Vortex", "Nimbus", "Prysma", "Cirrus", "Kynder", "Halcyn"];

const STATS = [
  { icon: Globe, label: "Multi-Org", sublabel: "Support" },
  { icon: ShieldCheck, label: "5 Roles", sublabel: "Access Levels" },
  { icon: TreePalm, label: "14+", sublabel: "Leave Types" },
  { icon: Layers, label: "25+", sublabel: "Modules" },
];

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="w-full py-5 px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
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

          <Button
            className="rounded-full px-5 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_hsl(175_80%_50%_/_0.3)]"
            onClick={() => scrollToSection("pricing")}
          >
            Get Started
          </Button>
        </nav>

        {/* Divider */}
        <div className="mt-[3px] h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center relative overflow-visible">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[984px] h-[527px] opacity-90 bg-gray-950 blur-[82px] pointer-events-none" />

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary mb-6 backdrop-blur-sm">
              <span className="text-xs font-mono uppercase tracking-wider">Complete HR Operations</span>
            </div>

            <h1
              className="font-general-sans font-bold leading-[1.05] tracking-[-0.024em] text-foreground"
              style={{ fontSize: "clamp(36px, 7vw, 80px)" }}
            >
              Chrono
              <span
                className="bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Staff
              </span>
              {" "}Suite
            </h1>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 max-w-2xl mx-auto mt-4 opacity-90" style={{ color: "hsl(var(--hero-sub))" }}>
              Streamline employee management, attendance tracking, face recognition, leave requests, salary slips, exit management, helpdesk, real-time chat, shift management, and self-service portal across multiple organizations.
            </p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_hsl(175_80%_50%_/_0.3)]"
                style={{ padding: "24px 29px" }}
                onClick={() => scrollToSection("pricing")}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-foreground/20 text-foreground hover:bg-foreground/10"
                style={{ padding: "24px 29px" }}
                onClick={() => scrollToSection("demo")}
              >
                <Play className="h-4 w-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12">
              {STATS.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="liquid-glass w-10 h-10 rounded-xl flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Marquee */}
        <div className="pb-10">
          <div className="max-w-5xl mx-auto flex items-center gap-12 px-8">
            <p className="text-foreground/50 text-sm shrink-0 leading-tight">
              Trusted by teams
              <br />
              across the globe
            </p>
            <div className="flex-1 overflow-hidden">
              <div className="flex gap-16 animate-marquee w-max">
                {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((brand, i) => (
                  <div key={i} className="flex items-center gap-3 shrink-0">
                    <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center text-xs font-semibold text-foreground">
                      {brand[0]}
                    </div>
                    <span className="text-base font-semibold text-foreground whitespace-nowrap">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
