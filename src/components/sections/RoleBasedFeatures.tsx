import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, UserCheck, Briefcase } from "lucide-react";

export const RoleBasedFeatures = () => {
  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Built for Every Role in Your Organization
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Customized experiences and permissions for different user types
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 bg-card border-border">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <UserCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">For Employees</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Personalized dashboard with quick stats</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Easy attendance marking and tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Submit leave requests instantly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Access salary slips anytime</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Send birthday wishes to colleagues</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-hero text-primary-foreground shadow-elegant border-0">
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">For HR Admins</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Full employee lifecycle management</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Bulk import from Excel files</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Approve attendance and leave requests</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Generate salary slips with ease</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Manage departments and holidays</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-card border-border">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Briefcase className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">For HODs</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Review department leave requests</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Approve or reject with comments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>View team member records</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Track department attendance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Monitor leave balances</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
