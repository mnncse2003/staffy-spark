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
      title: "Employee Management",
      description: "Complete employee lifecycle management with profile updates, document uploads, and Excel import for bulk data.",
      image: illustrationEmployees,
      features: ["Profile Management", "Document Uploads", "Excel Import", "Family & Experience Details"],
      reverse: false,
    },
    {
      title: "Attendance Tracking",
      description: "Real-time punch-in/out with edit requests for forgotten punch-outs and comprehensive reporting.",
      image: illustrationAttendance,
      features: ["Punch In/Out", "Edit Requests", "Daily Reports", "Automated Tracking"],
      reverse: true,
    },
    {
      title: "Leave Management",
      description: "12+ leave types with gender-specific options. Approval workflows routing to HR and HOD.",
      image: illustrationLeave,
      features: ["12+ Leave Types", "Approval Workflows", "Balance Tracking", "Leave History"],
      reverse: false,
    },
    {
      title: "Salary Slip Generation",
      description: "Automated monthly salary slips with customizable allowances and downloadable PDF reports.",
      image: illustrationSalary,
      features: ["Auto Generation", "Custom Allowances", "Tax Deductions", "PDF Download"],
      reverse: true,
    },
    {
      title: "Birthday Wishes",
      description: "View colleagues with birthdays, send personalized wishes, and build team culture.",
      image: illustrationBirthday,
      features: ["Birthday Calendar", "Custom Templates", "Team Notifications", "Culture Building"],
      reverse: false,
    },
  ];

  return (
    <section className="relative py-10 sm:py-12 lg:py-16 overflow-hidden">
      <GeometricDecorations variant="features" />
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Powerful Features, Beautiful Experience
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Everything you need to streamline HR operations in one platform
          </p>
        </AnimatedSection>

        <div className="space-y-10 sm:space-y-14">
          {showcaseFeatures.map((feature, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  feature.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-48 sm:w-56 lg:w-64 drop-shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 justify-items-start mx-auto lg:mx-0 max-w-sm lg:max-w-none">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
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
