import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download, Calendar } from "lucide-react";

export const Demo = () => {
  return (
    <section id="demo" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          See It In Action
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Watch our interactive demo or schedule a personalized walkthrough with our team
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card className="p-8 bg-card border-border">
          <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
            <Button 
              size="lg" 
              className="relative z-10 bg-gradient-hero text-primary-foreground shadow-elegant hover:opacity-90"
            >
              <Play className="h-6 w-6 mr-2" />
              Watch Demo Video
            </Button>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">Interactive Demo</h3>
          <p className="text-muted-foreground mb-6">
            Experience all features in our 5-minute interactive demo. See how easy it is to manage employees, track attendance, and handle leave requests.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              <Play className="h-4 w-4 mr-2" />
              Launch Demo
            </Button>
            <Button variant="ghost">
              <Download className="h-4 w-4 mr-2" />
              Get PDF Guide
            </Button>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-hero text-primary-foreground shadow-elegant border-0">
          <Calendar className="h-12 w-12 mb-6" />
          <h3 className="text-2xl font-bold mb-3">Schedule a Live Demo</h3>
          <p className="mb-6 opacity-90">
            Get a personalized walkthrough from our experts. We'll answer your questions and show you how our system can work for your organization.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-white">✓</span>
              <span>30-minute personalized session</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white">✓</span>
              <span>Q&A with HR technology expert</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white">✓</span>
              <span>Custom feature recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white">✓</span>
              <span>Free 14-day trial included</span>
            </li>
          </ul>
          <Button 
            size="lg" 
            className="w-full bg-white text-primary hover:bg-white/90"
          >
            Schedule Your Demo
          </Button>
        </Card>
      </div>
    </section>
  );
};
