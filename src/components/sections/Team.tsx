import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Team = () => {
  const team = [
    {
      name: "Alexandra Reed",
      role: "Chief Executive Officer",
      bio: "15+ years in HR tech, passionate about transforming workplace management",
      initials: "AR"
    },
    {
      name: "Marcus Johnson",
      role: "Chief Technology Officer",
      bio: "Former Google engineer, specialized in scalable cloud solutions",
      initials: "MJ"
    },
    {
      name: "Sophia Patel",
      role: "Head of Product",
      bio: "Product leader with deep expertise in HR operations and user experience",
      initials: "SP"
    },
    {
      name: "Daniel Kim",
      role: "VP of Engineering",
      bio: "Built enterprise systems for Fortune 500 companies",
      initials: "DK"
    },
    {
      name: "Emma Williams",
      role: "Head of Customer Success",
      bio: "Dedicated to ensuring every client achieves their HR goals",
      initials: "EW"
    },
    {
      name: "Ryan Foster",
      role: "Lead Designer",
      bio: "Award-winning designer focused on intuitive, beautiful interfaces",
      initials: "RF"
    }
  ];

  return (
    <section id="team" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Meet Our Team
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          A passionate team dedicated to revolutionizing HR management
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {team.map((member, index) => (
          <Card key={index} className="p-6 bg-card border-border text-center hover:shadow-elegant transition-smooth">
            <Avatar className="h-24 w-24 mx-auto mb-4">
              <AvatarFallback className="bg-gradient-hero text-primary-foreground text-2xl font-bold">
                {member.initials}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
            <p className="text-primary font-medium mb-3">{member.role}</p>
            <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
            <div className="flex gap-2 justify-center">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
