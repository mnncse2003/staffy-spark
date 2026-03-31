import { Card } from "@/components/ui/card";
import { 
  Users, Calendar, FileText, Clock, CheckCircle, Award,
  BarChart3, Shield, Briefcase, ScanFace, MessageSquare,
  HeadphonesIcon, LogOut, Timer, Laptop, FolderOpen
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";

export const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Complete lifecycle management with profile updates, document uploads (PAN, Aadhar), Excel import, qualifications, experience, and family details."
    },
    {
      icon: Clock,
      title: "Attendance Tracking",
      description: "Real-time punch-in/out with edit requests for forgotten punch-outs. Daily, weekly, and monthly reports with automated tracking and export."
    },
    {
      icon: ScanFace,
      title: "Face Recognition Attendance",
      description: "Biometric punch-in/out via facial recognition kiosk with face-api.js. Proximity validation, audio feedback, snapshot capture, and 60-second cooldown."
    },
    {
      icon: Calendar,
      title: "Leave Management",
      description: "14+ leave types including PL, SL, CL, Maternity, Paternity, Sabbatical, WFH, Comp Off. Gender-specific options with multi-level approval workflows."
    },
    {
      icon: FileText,
      title: "Salary Slip Generation",
      description: "Automated monthly salary slips with customizable allowances (HRA, travel), deductions (tax, PF), and downloadable PDF reports with detailed breakdowns."
    },
    {
      icon: MessageSquare,
      title: "Real-Time Chat & Messaging",
      description: "One-on-one and group messaging with text, images, and file attachments. Floating chat widget, unread badges, and mobile-responsive interface."
    },
    {
      icon: HeadphonesIcon,
      title: "Helpdesk & Support Tickets",
      description: "Submit tickets with category, priority, and description. Track lifecycle (Open → In Progress → Resolved → Closed) with threaded responses."
    },
    {
      icon: LogOut,
      title: "Exit Management",
      description: "Complete exit workflow: resignation submission, knowledge transfer, department-wise clearance, exit interviews, full & final settlement, and experience certificates."
    },
    {
      icon: Timer,
      title: "Shift Management",
      description: "Create named shifts with custom timings, set organization defaults, and assign shifts to employees. Available to both HR and HOD roles."
    },
    {
      icon: FolderOpen,
      title: "Self-Service Portal",
      description: "Tax declarations, investment proofs, ITR assistance, reimbursement requests, loan applications, payslip downloads, and policy document access."
    },
    {
      icon: Laptop,
      title: "Device Security & Sessions",
      description: "Unique device fingerprinting, configurable login limits, real-time session monitoring, force logout, and device blocking for suspicious activity."
    },
    {
      icon: BarChart3,
      title: "Multi-Organization & Analytics",
      description: "Manage multiple organizations with independent branding, employee databases, and HR analytics dashboards with organization-wide metrics and reports."
    },
    {
      icon: Shield,
      title: "Role-Based Access Control",
      description: "Five user roles (Super Admin, HR, Staff, HOD, Intern) with granular permissions. Organization selection during login with role-based dashboards."
    },
    {
      icon: Award,
      title: "Birthday Wishes & Notifications",
      description: "Birthday calendar with personalized wish templates, system-wide announcements, login notifications for new devices, and notification center."
    },
    {
      icon: CheckCircle,
      title: "Document & Holiday Management",
      description: "Secure document uploads with cloud storage. Manage company holidays, departments, and HOD assignments with searchable employee dropdowns."
    }
  ];

  return (
    <section id="features" className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28 overflow-hidden">
      <GeometricDecorations variant="features" />
      <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
          25+ Comprehensive HR Modules
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
          Everything you need to manage your workforce — from attendance to exit, all in one platform
        </p>
      </AnimatedSection>
      
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {features.map((feature, index) => (
          <AnimatedSection key={index} animation="fade-up" delay={index * 80}>
            <Card className="p-6 sm:p-8 hover:shadow-elegant transition-smooth bg-card border-border h-full">
              <feature.icon className="h-12 w-12 text-primary mb-5" />
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};
