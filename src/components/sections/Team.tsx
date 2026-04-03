import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const Team = () => {
  const team = [
    { name: "Aman Kumar", role: "Chief Executive Officer", bio: "15+ years in HR tech, passionate about transforming workplace management", initials: "HR" },
    { name: "Apurv Deep", role: "VP of Engineering", bio: "Built enterprise systems for Fortune 500 companies", initials: "AV" },
    { name: "Hrishikesh Kumar", role: "Chief Technology Officer", bio: "Former Google engineer, specialized in scalable cloud solutions", initials: "AT" },
    { name: "Aman Shandilya", role: "Head of Product & CEO", bio: "Product leader with deep expertise in HR operations and user experience", initials: "HK" },
    { name: "Apurv Deep", role: "Head of Customer Success", bio: "Dedicated to ensuring every client achieves their HR goals", initials: "MT" },
    { name: "Aman Kumar", role: "Lead Designer & Founder", bio: "Award-winning designer focused on intuitive, beautiful interfaces", initials: "AK" },
  ];

  return (
    <section id="team" className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
      <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
          Meet Our <span className="gradient-text">Team</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
          A passionate team dedicated to revolutionizing HR management
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {team.map((member, index) => (
          <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
            <Card className="p-6 bg-card/50 border-border/50 text-center hover:border-primary/30 transition-all duration-500 group glow-border">
              <Avatar className="h-24 w-24 mx-auto mb-4 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-500">
                <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-foreground text-2xl font-bold">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3 font-mono text-xs tracking-wider uppercase">{member.role}</p>
              <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
              <div className="flex gap-2 justify-center">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};
