import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";
import { CheckCircle } from "lucide-react";

import illustrationEmployees from "@/assets/illustration-employees.png";
import illustrationAttendance from "@/assets/illustration-attendance.png";
import illustrationLeave from "@/assets/illustration-leave.png";
import illustrationSalary from "@/assets/illustration-salary.png";
import illustrationBirthday from "@/assets/illustration-birthday.png";

export const FeaturesShowcase = () => {
  const showcaseFeatures = [
    {
      title: "Employee Management & Profiles",
      description: "Complete employee lifecycle management with comprehensive profiles, document uploads (PAN, Aadhar, qualifications), Excel import for bulk data, and cross-organization employee transfers.",
      image: illustrationEmployees,
      features: ["Profile & Document Management", "Excel Bulk Import", "Cross-Org Transfers", "Block/Unblock Accounts"],
      reverse: false,
    },
    {
      title: "Smart Attendance & Face Recognition",
      description: "Real-time punch-in/out with edit requests, plus AI-powered face recognition kiosk using face-api.js with proximity validation, audio feedback, and 60-second cooldown.",
      image: illustrationAttendance,
      features: ["Punch In/Out", "Face Recognition Kiosk", "Edit Requests", "Attendance Reports"],
      reverse: true,
    },
    {
      title: "Advanced Leave Management",
      description: "14+ leave types including PL, SL, CL, Maternity, Paternity, Sabbatical, WFH, Comp Off, and more. Gender-specific options with multi-level approval routing to HR and HOD.",
      image: illustrationLeave,
      features: ["14+ Leave Types", "Multi-Level Approvals", "Gender-Specific Options", "Holiday-Aware Calculation"],
      reverse: false,
    },
    {
      title: "Salary Slips & Self-Service Portal",
      description: "Automated salary slip generation with customizable allowances and deductions. Self-service portal for tax declarations, investment proofs, reimbursements, and loan applications.",
      image: illustrationSalary,
      features: ["Auto Salary Slips", "Tax Declarations", "Reimbursements", "Loan Applications"],
      reverse: true,
    },
    {
      title: "Chat, Helpdesk & Team Culture",
      description: "Real-time messaging with file attachments, floating chat widget, helpdesk ticketing with lifecycle tracking, birthday wishes with personalized templates, and system-wide notifications.",
      image: illustrationBirthday,
      features: ["Real-Time Chat", "Helpdesk Tickets", "Birthday Wishes", "Notifications Center"],
      reverse: false,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <GeometricDecorations variant="features" />
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Powerful Features, Beautiful Experience
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to streamline HR operations in one platform
          </p>
        </AnimatedSection>

        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {showcaseFeatures.map((feature, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
              <div
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  feature.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-56 sm:w-64 lg:w-80 drop-shadow-lg"
                  />
                </div>
                <div className="flex-1 w-full lg:w-1/2 space-y-5 sm:space-y-6 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 sm:gap-4 justify-items-start mx-auto lg:mx-0 max-w-md lg:max-w-none">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm sm:text-base">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
