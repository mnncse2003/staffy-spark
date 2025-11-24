import { Card } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  FileText, 
  Clock, 
  CheckCircle, 
  Award,
  BarChart3,
  Shield,
  Briefcase
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Complete employee lifecycle management with profile updates, document uploads, Excel import, and comprehensive personal details including qualifications, experience, and family information."
    },
    {
      icon: Clock,
      title: "Attendance Tracking",
      description: "Real-time punch-in/out with edit requests for forgotten punch-outs. Generate daily, weekly, and monthly attendance reports with automated tracking."
    },
    {
      icon: Calendar,
      title: "Leave Management",
      description: "12+ leave types with gender-specific options (Maternity, Paternity). Approval workflows routing to HR and HOD with leave balance tracking and history."
    },
    {
      icon: FileText,
      title: "Salary Slip Generation",
      description: "Automated monthly salary slips with customizable allowances (HRA, travel), deductions (tax, PF), and downloadable PDF reports with detailed breakdowns."
    },
    {
      icon: CheckCircle,
      title: "Document Management",
      description: "Upload and manage PAN, Aadhar, qualification documents, and previous experience records securely with cloud storage."
    },
    {
      icon: Award,
      title: "Birthday Wishes",
      description: "View colleagues with birthdays today, send personalized wishes using templates or custom messages, and receive private birthday notifications."
    },
    {
      icon: BarChart3,
      title: "Multi-Organization Support",
      description: "Manage multiple organizations with separate branding (logo and name), independent employee databases, and organization-specific configurations."
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Five user roles (Super Admin, HR, Staff, HOD, Intern) with specific permissions and security. Organization selection during login with role-based dashboards."
    },
    {
      icon: Briefcase,
      title: "Department Management",
      description: "Create departments, assign HODs, manage company holidays, and organize teams. HODs approve department employee leave requests only."
    }
  ];

  return (
    <section id="features" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Comprehensive HR Management Features
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
          Built with React, TypeScript, and Firebase for a complete cloud-based HR solution
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-5 sm:p-6 hover:shadow-elegant transition-smooth bg-card border-border">
            <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
