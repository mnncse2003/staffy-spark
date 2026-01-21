import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";
import { initiatePayment, planPrices, OrganizationData } from "@/lib/razorpay";
import { useToast } from "@/hooks/use-toast";
import { PurchaseDialog, PurchaseFormData } from "./PurchaseDialog";

export const Pricing = () => {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for small teams",
      features: [
        "Up to 50 employees",
        "Basic attendance tracking",
        "Leave management",
        "Monthly reports",
        "Email support"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "99",
      description: "For growing companies",
      features: [
        "Up to 200 employees",
        "Advanced attendance tracking",
        "Complete leave management",
        "Salary slip generation",
        "Priority support",
        "Custom branding",
        "Analytics dashboard"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "All Professional features",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support",
        "SLA guarantee",
        "On-premise option"
      ],
      highlighted: false
    }
  ];

  const handleGetStarted = (planName: string, planPrice: string) => {
    const plan = planPrices[planName];
    
    if (!plan) {
      // Enterprise plan - contact sales
      window.location.href = "mailto:sales@hrms.com?subject=Enterprise Plan Inquiry";
      return;
    }

    // Open the purchase dialog to collect details
    setSelectedPlan({ name: planName, price: planPrice });
    setIsDialogOpen(true);
  };

  const handlePurchaseSubmit = async (formData: PurchaseFormData) => {
    if (!selectedPlan) return;

    const plan = planPrices[selectedPlan.name];
    if (!plan) return;

    setLoadingPlan(selectedPlan.name);

    const orgData: OrganizationData = {
      organizationName: formData.organizationName,
      email: formData.email,
      contactPhone: formData.contactPhone,
      hrAdminName: formData.hrAdminName,
      hrAdminEmployeeCode: formData.hrAdminEmployeeCode,
      hrAdminPan: formData.hrAdminPan,
      logoFile: formData.logoFile,
    };

    try {
      await initiatePayment({
        planName: plan.name,
        amount: plan.priceINR,
        currency: 'INR',
        orgData,
        onSuccess: (response, subscriptionId, orgResult) => {
          setLoadingPlan(null);
          setIsDialogOpen(false);
          setSelectedPlan(null);
          
          if (orgResult.success) {
            toast({
              title: "🎉 Payment Successful!",
              description: orgResult.message,
              duration: 10000,
            });
          } else {
            toast({
              title: "Payment Successful",
              description: orgResult.message,
              variant: "destructive",
              duration: 10000,
            });
          }
        },
        onError: (error) => {
          setLoadingPlan(null);
          toast({
            title: "Payment Failed",
            description: error.message || "Something went wrong. Please try again.",
            variant: "destructive",
          });
        },
      });
    } catch (error) {
      setLoadingPlan(null);
      toast({
        title: "Error",
        description: "Failed to initiate payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <section id="pricing" className="relative container mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36 overflow-hidden">
        <GeometricDecorations variant="pricing" />
        <AnimatedSection className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your organization's needs
          </p>
        </AnimatedSection>

        <div className="relative grid md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} animation="fade-up" delay={index * 150}>
              <Card 
                className={`p-8 sm:p-10 ${
                  plan.highlighted 
                    ? 'bg-gradient-hero text-primary-foreground shadow-elegant border-0 md:scale-105' 
                    : 'bg-card border-border'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-3 ${plan.highlighted ? '' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-8 ${plan.highlighted ? 'opacity-90' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-bold">
                    {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className={plan.highlighted ? 'opacity-90' : 'text-muted-foreground'}>
                      /month
                    </span>
                  )}
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? '' : 'text-primary'
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? 'bg-white text-primary hover:bg-white/90' 
                      : 'bg-gradient-hero text-primary-foreground hover:opacity-90'
                  }`}
                  size="lg"
                  onClick={() => handleGetStarted(plan.name, plan.price)}
                  disabled={loadingPlan === plan.name}
                >
                  {loadingPlan === plan.name ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    plan.price === "Custom" ? "Contact Sales" : "Get Started"
                  )}
                </Button>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <PurchaseDialog
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          setSelectedPlan(null);
        }}
        planName={selectedPlan?.name || ""}
        planPrice={selectedPlan ? `$${selectedPlan.price}` : ""}
        onSubmit={handlePurchaseSubmit}
        isLoading={loadingPlan !== null}
      />
    </>
  );
};
