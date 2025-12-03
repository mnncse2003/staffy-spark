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
      content: "This HR system has transformed how we manage our 200+ employee workforce. The attendance tracking and leave management features are game-changers.",
      rating: 5,
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupHub",
      content: "Implementation was seamless, and our team adapted quickly. The automated salary slip generation alone saves us 10+ hours every month.",
      rating: 5,
      initials: "MC"
    },
    {
      name: "Priya Sharma",
      role: "Operations Manager, GlobalTech",
      content: "The role-based access control is perfect for our organizational structure. HODs can approve leaves while HR maintains full control.",
      rating: 5,
      initials: "PS"
    },
    {
      name: "David Williams",
      role: "HR Manager, InnovateCo",
      content: "Best investment we've made this year. The reporting features give us insights we never had before, and the support team is fantastic.",
      rating: 5,
      initials: "DW"
    },
    {
      name: "Lisa Martinez",
      role: "People Operations, GrowthLabs",
      content: "Our employees love the user-friendly interface. The birthday wishes feature has created such a positive culture in our remote team.",
      rating: 5,
      initials: "LM"
    },
    {
      name: "James Anderson",
      role: "COO, ScaleUp Inc",
      content: "We migrated from three different systems to this platform. The Excel import feature made the transition smooth and we were up and running in days.",
      rating: 5,
      initials: "JA"
    }
  ];

  return (
    <section id="testimonials" className="relative bg-muted py-12 sm:py-16 lg:py-24 overflow-hidden">
      <GeometricDecorations variant="default" />
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by HR Teams Worldwide
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            See what our customers have to say about their experience
          </p>
        </AnimatedSection>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
