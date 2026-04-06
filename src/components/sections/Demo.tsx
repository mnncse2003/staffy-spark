import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download, Calendar, X } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";
import { generatePdfGuide } from "@/lib/generatePdfGuide";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export const Demo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border/50">
          <DialogTitle className="sr-only">Demo Video</DialogTitle>
          <div className="relative">
            <Button variant="ghost" size="icon" className="absolute top-2 right-2 z-10 text-foreground hover:bg-muted" onClick={() => setIsVideoOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
            <div className="aspect-video">
              <iframe src="https://www.youtube.com/embed/BZSZzJ3fXJ0?si=rRARgorwEoJKJ5-P&autoplay=1" title="Demo Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <section id="demo" className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28 overflow-hidden">
        <GeometricDecorations variant="default" />
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            See It <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch our interactive demo or schedule a personalized walkthrough
          </p>
        </AnimatedSection>

        <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-10 max-w-6xl mx-auto">
          <AnimatedSection animation="fade-right" delay={100}>
            <Card className="p-6 sm:p-8 bg-card/80 border-border/50 h-full hover:border-primary/20 transition-all duration-500 backdrop-blur-sm">
              <div 
                className="aspect-video rounded-lg mb-6 flex items-center justify-center relative overflow-hidden cursor-pointer bg-cover bg-center"
                style={{ backgroundImage: "url('https://img.youtube.com/vi/BZSZzJ3fXJ0/maxresdefault.jpg')" }}
                onClick={() => setIsVideoOpen(true)}
              >
                <div className="absolute inset-0 bg-background/60 hover:bg-background/40 transition-all duration-300"></div>
                <Button size="lg" className="relative z-10 bg-primary text-primary-foreground shadow-[0_0_30px_hsl(175_80%_50%_/_0.3)] hover:shadow-[0_0_50px_hsl(175_80%_50%_/_0.5)] transform hover:scale-105 transition-all duration-300"
                  onClick={(e) => { e.stopPropagation(); setIsVideoOpen(true); }}>
                  <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  Watch Demo
                </Button>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Interactive Demo</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Experience all features in our 5-minute interactive demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1 border-border/50 hover:border-primary/50 hover:bg-primary/5" onClick={() => setIsVideoOpen(true)}>
                  <Play className="h-4 w-4 mr-2" /> Launch Demo
                </Button>
                <Button variant="ghost" className="flex-1 sm:flex-initial text-muted-foreground hover:text-primary" onClick={generatePdfGuide}>
                  <Download className="h-4 w-4 mr-2" /> PDF Guide
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <Card className="p-6 sm:p-8 h-full glow-border bg-card/80 border-primary/20 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Schedule a Live Demo</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Get a personalized walkthrough from our experts.
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                {["30-minute personalized session", "Q&A with HR technology expert", "Custom feature recommendations", "Free 14-day trial included"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full bg-primary text-primary-foreground shadow-[0_0_20px_hsl(175_80%_50%_/_0.3)] hover:shadow-[0_0_30px_hsl(175_80%_50%_/_0.5)] transition-all duration-300">
                Schedule Your Demo
              </Button>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};
