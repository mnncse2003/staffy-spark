import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director, TechCorp",
      content: "ChronoStaff Suite has transformed how we manage our 200+ workforce. The face recognition attendance and automated leave management saved us countless hours every week.",
      rating: 5,
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupHub",
      content: "The real-time chat and helpdesk system has improved internal communication dramatically. Our HR team resolves employee queries 3x faster now.",
      rating: 5,
      initials: "MC"
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager, GlobalTech",
      content: "Managing 3 organizations from one dashboard is incredible. The role-based access with 5 levels gives us perfect control over who sees what.",
      rating: 5,
      initials: "PS"
    },
    {
      name: "David Williams",
      role: "HR Manager, InnovateCo",
      content: "The exit management module handles everything — from resignation to experience certificate. The self-service portal reduced HR requests by 60%.",
      rating: 5,
      initials: "DW"
    },
    {
      name: "Lisa Martinez",
      role: "People Operations, GrowthLabs",
      content: "Device security with fingerprinting and session control gives us peace of mind. The shift management feature was exactly what our factory teams needed.",
      rating: 5,
      initials: "LM"
    },
    {
      name: "James Anderson",
      role: "COO, ScaleUp Inc",
      content: "We migrated from three systems to ChronoStaff. The Excel import made the transition smooth, and the HR analytics dashboard gives us insights we never had.",
      rating: 5,
      initials: "JA"
    }
  ];

  return (
    <section id="testimonials" className="relative bg-muted py-16 sm:py-20 lg:py-28 overflow-hidden">
      <GeometricDecorations variant="default" />
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Trusted by HR Teams Worldwide
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our customers have to say about ChronoStaff Suite
          </p>
        </AnimatedSection>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} animation="scale" delay={index * 100}>
              <Card className="p-6 bg-card border-border h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
