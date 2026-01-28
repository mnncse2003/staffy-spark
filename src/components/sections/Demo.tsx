import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download, Calendar, X } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";
import { generatePdfGuide } from "@/lib/generatePdfGuide";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import demoVideo from "@/assets/demo-video.mp4";

export const Demo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-0">
          <DialogTitle className="sr-only">Demo Video</DialogTitle>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 text-white hover:bg-white/20"
              onClick={() => setIsVideoOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
            <video
              src={demoVideo}
              controls
              autoPlay
              className="w-full aspect-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    <section id="demo" className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28 overflow-hidden">
      <GeometricDecorations variant="default" />
      <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
          See It In Action
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
          Watch our interactive demo or schedule a personalized walkthrough with our team
        </p>
      </AnimatedSection>

      <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
        <AnimatedSection animation="fade-right" delay={100}>
          <Card className="p-6 sm:p-8 bg-card border-border h-full">
          <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
            <Button 
              size="lg" 
              className="relative z-10 bg-gradient-hero text-primary-foreground shadow-elegant hover:opacity-90 text-sm sm:text-base"
              onClick={() => setIsVideoOpen(true)}
            >
              <Play className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
              <span className="hidden sm:inline">Watch Demo Video</span>
              <span className="sm:hidden">Watch Demo</span>
            </Button>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Interactive Demo</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            Experience all features in our 5-minute interactive demo. See how easy it is to manage employees, track attendance, and handle leave requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="flex-1 text-sm sm:text-base">
              <Play className="h-4 w-4 mr-2" />
              Launch Demo
            </Button>
            <Button variant="ghost" className="flex-1 sm:flex-initial text-sm sm:text-base" onClick={generatePdfGuide}>
              <Download className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Get PDF Guide</span>
              <span className="sm:hidden">PDF Guide</span>
            </Button>
          </div>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fade-left" delay={200}>
          <Card className="p-6 sm:p-8 bg-gradient-hero text-primary-foreground shadow-elegant border-0 h-full">
          <Calendar className="h-10 w-10 sm:h-12 sm:w-12 mb-6" />
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Schedule a Live Demo</h3>
          <p className="text-sm sm:text-base mb-6 opacity-90">
            Get a personalized walkthrough from our experts. We'll answer your questions and show you how our system can work for your organization.
          </p>
          <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-white flex-shrink-0">✓</span>
              <span>30-minute personalized session</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white flex-shrink-0">✓</span>
              <span>Q&A with HR technology expert</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white flex-shrink-0">✓</span>
              <span>Custom feature recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white flex-shrink-0">✓</span>
              <span>Free 14-day trial included</span>
            </li>
          </ul>
          <Button 
            size="lg" 
            className="w-full bg-white text-primary hover:bg-white/90 text-sm sm:text-base"
          >
            Schedule Your Demo
          </Button>
          </Card>
        </AnimatedSection>
      </div>
    </section>
    </>
  );
};
