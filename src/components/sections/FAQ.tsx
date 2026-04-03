import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";

export const FAQ = () => {
  const faqs = [
    { question: "How long does it take to set up the system?", answer: "Most organizations are up and running within 24-48 hours. Our team helps with initial setup, data import via Excel, face recognition enrollment, and training." },
    { question: "Can we import existing employee data?", answer: "Yes! Our system supports Excel import (.xlsx, .xls) for bulk employee data with automatic organization ID injection." },
    { question: "How does the face recognition attendance work?", answer: "We use face-api.js with SSD MobileNetV1 for detection and 128-dimension face descriptors. HR enrolls employees with multiple face samples, then employees punch in/out via a fullscreen kiosk." },
    { question: "What leave types are supported?", answer: "We support 14+ leave types: PL, SL, CL, Faculty, Maternity (26 weeks), Paternity (14 days), Adoption, Sabbatical, WFH, Bereavement, Parental, Comp Off, LWP, and Vacation." },
    { question: "How does device security work?", answer: "Each device gets a unique fingerprint. Admins can configure simultaneous login limits, force logout any device, and block suspicious ones." },
    { question: "Is there a built-in chat and helpdesk system?", answer: "Yes! Real-time one-on-one and group messaging with text, images, and file attachments is built in. The helpdesk lets employees submit and track tickets." },
    { question: "What does exit management cover?", answer: "The full exit lifecycle: resignation submission, knowledge transfer tracking, department-wise clearance, exit interviews, full & final settlement, and experience certificates." },
    { question: "What kind of support do you provide?", answer: "Email support on all plans, priority support for Professional, and 24/7 phone support with dedicated account manager for Enterprise." },
    { question: "Is the data secure and compliant?", answer: "We use Firebase with organization-level data isolation, security rules enforcing access control, device fingerprinting, and role-based permissions." },
    { question: "Can employees access from mobile devices?", answer: "Yes! The system is fully responsive with mobile-optimized chat. The face recognition kiosk also works in fullscreen on mobile devices." },
    { question: "Do you support self-service for employees?", answer: "Yes! Tax declarations, investment proofs, ITR assistance, reimbursement requests, loan applications, payslip downloads, and policy documents." },
    { question: "Can we manage shifts and schedules?", answer: "Yes! HR can create named shifts with custom start/end times, set a default organization shift, and assign specific shifts to employees." },
  ];

  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <GeometricDecorations variant="default" />
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about ChronoStaff Suite
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/30 border border-border/50 rounded-lg px-6 hover:border-primary/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline hover:text-primary transition-colors duration-300 text-sm">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};
