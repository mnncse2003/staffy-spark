import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, UserCheck, Briefcase, GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";

export const RoleBasedFeatures = () => {
  const roles = [
    {
      icon: Shield, title: "Super Admin", highlighted: false, iconClass: "text-primary",
      features: ["Create & manage organizations", "Global access across all orgs", "System-wide branding config", "Transfer employees between orgs", "Manage all users globally"],
    },
    {
      icon: UserCheck, title: "HR / Admin", highlighted: true, iconClass: "text-primary",
      features: ["Employee CRUD & Excel import", "Attendance & leave approvals", "Salary slip generation", "Face recognition enrollment", "Shift & holiday management", "Exit management & settlements", "Helpdesk ticket management", "Device access & security", "HR analytics dashboard"],
    },
    {
      icon: Briefcase, title: "Staff", highlighted: false, iconClass: "text-accent",
      features: ["Dashboard with punch-in/out", "Profile & document management", "Leave applications & tracking", "Salary slips & self-service", "Chat & helpdesk tickets", "Exit & device management"],
    },
    {
      icon: Briefcase, title: "HOD", highlighted: false, iconClass: "text-primary",
      features: ["Dept leave approvals only", "View department employees", "Shift management for dept", "Attendance reports for dept", "Face attendance kiosk access", "Exit management participation"],
    },
    {
      icon: GraduationCap, title: "Intern", highlighted: false, iconClass: "text-accent",
      features: ["Personal dashboard access", "Attendance & leave requests", "Profile management", "Chat & notifications", "Salary slips view"],
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <GeometricDecorations variant="features" />
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Five User Roles with <span className="gradient-text">Granular Permissions</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Role-based access control for Super Admin, HR, Staff, HOD, and Intern users
          </p>
        </AnimatedSection>

        <div className="relative grid md:grid-cols-2 xl:grid-cols-5 gap-6">
          {roles.map((role, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <Card className={`p-6 h-full transition-all duration-500 ${
                role.highlighted 
                  ? 'bg-card/90 border-primary/30 shadow-[0_0_30px_hsl(175_80%_50%_/_0.1)] glow-border backdrop-blur-sm' 
                  : 'bg-card/80 border-border/50 hover:border-primary/20 backdrop-blur-sm'
              }`}>
                <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-5 ${
                  role.highlighted ? 'bg-primary/10 border border-primary/20' : 'bg-muted border border-border/50'
                }`}>
                  <role.icon className={`h-6 w-6 ${role.iconClass}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">{role.title}</h3>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {role.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
