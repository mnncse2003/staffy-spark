import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, UserCheck, Briefcase, GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";

export const RoleBasedFeatures = () => {
  return (
    <section className="relative bg-muted py-16 sm:py-20 lg:py-28 overflow-hidden">
      <GeometricDecorations variant="features" />
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Five User Roles with Granular Permissions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Role-based access control for Super Admin, HR, Staff, HOD, and Intern users with organization-level data isolation
          </p>
        </AnimatedSection>

        <div className="relative grid md:grid-cols-2 xl:grid-cols-5 gap-6 sm:gap-8">
          <AnimatedSection animation="fade-up" delay={0}>
            <Card className="p-6 sm:p-8 bg-card border-border h-full">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Super Admin</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {["Create & manage organizations", "Global access across all orgs", "System-wide branding config", "Transfer employees between orgs", "Manage all users globally"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="p-6 sm:p-8 bg-gradient-hero text-primary-foreground shadow-elegant border-0 h-full">
              <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mb-5">
                <UserCheck className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">HR / Admin</h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  "Employee CRUD & Excel import",
                  "Attendance & leave approvals",
                  "Salary slip generation",
                  "Face recognition enrollment",
                  "Shift & holiday management",
                  "Exit management & settlements",
                  "Helpdesk ticket management",
                  "Device access & security",
                  "HR analytics dashboard",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="p-6 sm:p-8 bg-card border-border h-full">
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                <Briefcase className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Staff</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  "Dashboard with punch-in/out",
                  "Profile & document management",
                  "Leave applications & tracking",
                  "Salary slips & self-service",
                  "Chat & helpdesk tickets",
                  "Exit & device management",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="p-6 sm:p-8 bg-card border-border h-full">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Briefcase className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">HOD</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  "Dept leave approvals only",
                  "View department employees",
                  "Shift management for dept",
                  "Attendance reports for dept",
                  "Face attendance kiosk access",
                  "Exit management participation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <Card className="p-6 sm:p-8 bg-card border-border h-full">
              <div className="h-14 w-14 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                <GraduationCap className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Intern</h3>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {[
                  "Personal dashboard access",
                  "Attendance & leave requests",
                  "Profile management",
                  "Chat & notifications",
                  "Salary slips view",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
