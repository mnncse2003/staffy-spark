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
      description: "Comprehensive employee profiles with documents, qualifications, and family details. Import from Excel or add manually."
    },
    {
      icon: Clock,
      title: "Attendance Tracking",
      description: "Easy punch-in/out system with edit requests. Generate daily, weekly, and monthly attendance reports."
    },
    {
      icon: Calendar,
      title: "Leave Management",
      description: "Submit and track 14+ leave types including PL, SL, Maternity, Paternity, and WFH with automated routing."
    },
    {
      icon: FileText,
      title: "Salary Slips",
      description: "Generate and view detailed monthly salary slips with customizable allowances and deductions."
    },
    {
      icon: CheckCircle,
      title: "Approval Workflows",
      description: "Streamlined approval process for leaves and attendance edits with multi-level authorization."
    },
    {
      icon: Award,
      title: "Birthday Wishes",
      description: "Celebrate your team with automated birthday notifications and personalized wish templates."
    },
    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description: "Comprehensive reporting for attendance, leaves, and employee data with export capabilities."
    },
    {
      icon: Shield,
      title: "Role-Based Access",
      description: "Secure access control for Staff, HR, HOD, and Intern roles with specific permissions."
    },
    {
      icon: Briefcase,
      title: "Department Management",
      description: "Organize teams by departments with HOD assignments and holiday management."
    }
  ];

  return (
    <section id="features" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Everything You Need to Manage Your Team
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Powerful features designed to simplify HR operations and boost productivity
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 hover:shadow-elegant transition-smooth bg-card border-border">
            <feature.icon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
