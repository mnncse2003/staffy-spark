import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";
import { CheckCircle, Sparkles } from "lucide-react";

import illustrationEmployees from "@/assets/illustration-employees.png";
import illustrationAttendance from "@/assets/illustration-attendance.png";
import illustrationLeave from "@/assets/illustration-leave.png";
import illustrationSalary from "@/assets/illustration-salary.png";
import illustrationBirthday from "@/assets/illustration-birthday.png";

export const FeaturesShowcase = () => {
  const showcaseFeatures = [
    {
      id: 1, title: "Employee Management & Profiles",
      description: "Complete employee lifecycle management with comprehensive profiles, document uploads (PAN, Aadhar, qualifications), Excel import for bulk data, and cross-organization employee transfers.",
      image: illustrationEmployees,
      features: ["Profile & Document Management", "Excel Bulk Import", "Cross-Org Transfers", "Block/Unblock Accounts"],
    },
    {
      id: 2, title: "Smart Attendance & Face Recognition",
      description: "Real-time punch-in/out with edit requests, plus AI-powered face recognition kiosk using face-api.js with proximity validation, audio feedback, and 60-second cooldown.",
      image: illustrationAttendance,
      features: ["Punch In/Out", "Face Recognition Kiosk", "Edit Requests", "Attendance Reports"],
    },
    {
      id: 3, title: "Advanced Leave Management",
      description: "14+ leave types including PL, SL, CL, Maternity, Paternity, Sabbatical, WFH, Comp Off, and more. Gender-specific options with multi-level approval routing.",
      image: illustrationLeave,
      features: ["14+ Leave Types", "Multi-Level Approvals", "Gender-Specific Options", "Holiday-Aware Calculation"],
    },
    {
      id: 4, title: "Salary Slips & Self-Service Portal",
      description: "Automated salary slip generation with customizable allowances and deductions. Self-service portal for tax declarations, investment proofs, reimbursements, and loan applications.",
      image: illustrationSalary,
      features: ["Auto Salary Slips", "Tax Declarations", "Reimbursements", "Loan Applications"],
    },
    {
      id: 5, title: "Chat, Helpdesk & Team Culture",
      description: "Real-time messaging with file attachments, floating chat widget, helpdesk ticketing with lifecycle tracking, birthday wishes with personalized templates, and system-wide notifications.",
      image: illustrationBirthday,
      features: ["Real-Time Chat", "Helpdesk Tickets", "Birthday Wishes", "Notifications Center"],
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <GeometricDecorations variant="features" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-mono uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Everything You Need in
            <span className="gradient-text"> One Platform</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to streamline your HR operations and boost productivity
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-12 lg:gap-16">
          {showcaseFeatures.map((feature, index) => (
            <AnimatedSection 
              key={feature.id} 
              animation="fade-up" 
              delay={index * 100}
              className="w-full"
            >
              <div className="group relative bg-card/80 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 sm:p-8 lg:p-10">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                    <div className="flex-shrink-0 w-full lg:w-2/5">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/5 rounded-full blur-[60px]" />
                        <img src={feature.image} alt={feature.title} className="relative w-full max-w-[280px] mx-auto lg:max-w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    </div>
                    <div className="flex-1 w-full lg:w-3/5">
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {feature.features.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
