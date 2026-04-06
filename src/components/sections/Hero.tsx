import { useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4";

const MARQUEE_BRANDS = ["Vortex", "Nimbus", "Prysma", "Cirrus", "Kynder", "Halcyn"];

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeLoop = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.paused) return;

    const { currentTime, duration } = video;
    const fadeIn = 0.5;
    const fadeOut = 0.5;

    if (currentTime < fadeIn) {
      video.style.opacity = String(currentTime / fadeIn);
    } else if (duration - currentTime < fadeOut) {
      video.style.opacity = String((duration - currentTime) / fadeOut);
    } else {
      video.style.opacity = "1";
    }

    rafRef.current = requestAnimationFrame(fadeLoop);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      rafRef.current = requestAnimationFrame(fadeLoop);
    };

    const handleEnded = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 100);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("ended", handleEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [fadeLoop]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        autoPlay
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0 }}
      />

      {/* Content above video */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="w-full py-5 px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src={logo} alt="ChronoStaff Suite" className="h-8" />
          </div>

          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("features")}
              className="flex items-center gap-1 px-3 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors duration-200"
            >
              Features <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="px-3 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors duration-200"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="px-3 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors duration-200"
            >
              Plans
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="flex items-center gap-1 px-3 py-2 text-sm text-foreground/90 hover:text-foreground transition-colors duration-200"
            >
              Learning <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>

          <Link to="/login">
            <Button
              variant="secondary"
              className="rounded-full px-4 py-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300"
            >
              Sign Up
            </Button>
          </Link>
        </nav>

        {/* Divider */}
        <div className="mt-[3px] h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center relative overflow-visible">
          {/* Blurred overlay shape */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[984px] h-[527px] opacity-90 bg-gray-950 blur-[82px] pointer-events-none"
          />

          <div className="relative z-10 text-center px-4">
            <h1
              className="font-general-sans font-normal leading-[1.02] tracking-[-0.024em] text-foreground"
              style={{ fontSize: "clamp(80px, 15vw, 220px)" }}
            >
              Power{" "}
              <span
                className="bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI
              </span>
            </h1>

            <p className="text-lg leading-8 max-w-md mx-auto mt-[9px] opacity-80" style={{ color: "hsl(var(--hero-sub))" }}>
              The most powerful AI ever deployed
              <br />
              in talent acquisition
            </p>

            <Button
              variant="secondary"
              className="mt-[25px] rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300"
              style={{ padding: "24px 29px" }}
              onClick={() => scrollToSection("pricing")}
            >
              Schedule a Consult
            </Button>
          </div>
        </div>

        {/* Logo Marquee */}
        <div className="pb-10">
          <div className="max-w-5xl mx-auto flex items-center gap-12 px-8">
            <p className="text-foreground/50 text-sm shrink-0 leading-tight">
              Relied on by brands
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
