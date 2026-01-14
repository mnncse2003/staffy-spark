import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, UserCheck, Briefcase } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";

export const RoleBasedFeatures = () => {
  return (
    <section className="relative bg-muted py-16 sm:py-20 lg:py-28 overflow-hidden">
      <GeometricDecorations variant="features" />
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Five User Roles with Specific Permissions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Role-based access control for Super Admin, HR, Staff, HOD, and Intern users
          </p>
        </AnimatedSection>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          <AnimatedSection animation="fade-up" delay={0}>
            <Card className="p-6 sm:p-8 bg-card border-border h-full">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Super Admin</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Create and manage multiple organizations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Global access across all organizations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Configure system-wide branding</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Manage all employees globally</span>
              </li>
            </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <Card className="p-6 sm:p-8 bg-gradient-hero text-primary-foreground shadow-elegant border-0 h-full">
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <UserCheck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">HR/Admin</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Employee management with Excel import</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Attendance and leave approvals</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Salary slip generation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Department and holiday management</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>User account management</span>
              </li>
            </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <Card className="p-6 sm:p-8 bg-card border-border h-full">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Briefcase className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Staff & Interns</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Personalized dashboard with quick stats</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Comprehensive profile management</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Attendance marking and edit requests</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Leave applications with tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Salary slips and birthday wishes</span>
              </li>
            </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <Card className="p-6 sm:p-8 bg-card border-border h-full">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">HOD</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Leave approvals for department only</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>View department employee records</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Review leave history with comments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Track approval timestamps</span>
              </li>
            </ul>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
