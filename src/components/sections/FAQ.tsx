import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to set up the system?",
      answer: "Most organizations are up and running within 24-48 hours. Our team helps with initial setup, data import, and training to ensure a smooth transition."
    },
    {
      question: "Can we import existing employee data?",
      answer: "Yes! Our system supports Excel import for bulk employee data. You can easily migrate your existing records including personal details, qualifications, and employment history."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer email support on all plans, with priority support for Professional plans and 24/7 phone support for Enterprise customers. Our team is always ready to help you succeed."
    },
    {
      question: "Is the data secure and compliant?",
      answer: "Absolutely. We use industry-standard encryption, secure cloud storage with Firebase, and follow best practices for data protection. We're compliant with major data protection regulations."
    },
    {
      question: "Can we customize the system for our needs?",
      answer: "Yes! Professional and Enterprise plans include customization options like custom branding, configurable leave types, and tailored approval workflows to match your organization's policies."
    },
    {
      question: "What happens to our data if we cancel?",
      answer: "You maintain full ownership of your data. We provide complete data export capabilities, and you can download all your records before canceling. We also offer data retention for 90 days post-cancellation."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start, and our team will help you get set up."
    },
    {
      question: "Can employees access the system from mobile devices?",
      answer: "Yes! Our system is fully responsive and works seamlessly on desktop, tablet, and mobile devices. Employees can mark attendance, apply for leaves, and access salary slips from anywhere."
    }
  ];

  return (
    <section id="faq" className="bg-muted py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Everything you need to know about our HR management system
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
