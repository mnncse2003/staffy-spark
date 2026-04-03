import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GeometricDecorations } from "@/components/ui/GeometricDecorations";
import { initiatePayment, planPrices, OrganizationData } from "@/lib/razorpay";
import { useToast } from "@/hooks/use-toast";
import { PurchaseDialog, PurchaseFormData } from "./PurchaseDialog";

export const Pricing = () => {
  const navigate = useNavigate();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string; isYearly: boolean } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const { toast } = useToast();

  const monthlyPrices = { Starter: 4099, Professional: 8299 };
  const yearlyPrices = { Starter: 40990, Professional: 82990 };
  const formatPrice = (price: number) => price.toLocaleString('en-IN');

  const plans = [
    {
      name: "Starter",
      monthlyPrice: monthlyPrices.Starter,
      yearlyPrice: yearlyPrices.Starter,
      description: "Perfect for small teams",
      features: ["Up to 50 employees", "Basic attendance tracking", "Leave management (14+ types)", "Monthly reports", "Chat & helpdesk", "Email support"],
      highlighted: false
    },
    {
      name: "Professional",
      monthlyPrice: monthlyPrices.Professional,
      yearlyPrice: yearlyPrices.Professional,
      description: "For growing companies",
      features: ["Up to 200 employees", "Face recognition attendance", "Complete leave management", "Salary slip generation", "Shift & exit management", "Self-service portal", "Device security & sessions", "HR analytics dashboard", "Custom branding", "Priority support"],
      highlighted: true
    },
    {
      name: "Enterprise",
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: "For large organizations",
      features: ["Unlimited employees", "All Professional features", "Multi-organization support", "Custom integrations", "Dedicated account manager", "24/7 phone support", "SLA guarantee", "On-premise option"],
      highlighted: false
    }
  ];

  const handleGetStarted = (planName: string) => {
    if (planName === "Enterprise") {
      window.location.href = "mailto:sales@hrms.com?subject=Enterprise Plan Inquiry";
      return;
    }
    const price = isYearly ? yearlyPrices[planName as keyof typeof yearlyPrices] : monthlyPrices[planName as keyof typeof monthlyPrices];
    setSelectedPlan({ name: planName, price: formatPrice(price), isYearly });
    setIsDialogOpen(true);
  };

  const handlePurchaseSubmit = async (formData: PurchaseFormData) => {
    if (!selectedPlan) return;
    const amount = selectedPlan.isYearly ? yearlyPrices[selectedPlan.name as keyof typeof yearlyPrices] : monthlyPrices[selectedPlan.name as keyof typeof monthlyPrices];
    if (!amount) return;
    setLoadingPlan(selectedPlan.name);
    const orgData: OrganizationData = {
      organizationName: formData.organizationName, email: formData.email, contactPhone: formData.contactPhone,
      hrAdminName: formData.hrAdminName, hrAdminEmployeeCode: formData.hrAdminEmployeeCode, hrAdminPan: formData.hrAdminPan, logoFile: formData.logoFile,
    };
    const planDisplayName = selectedPlan.isYearly ? `${selectedPlan.name} (Yearly)` : selectedPlan.name;
    try {
      await initiatePayment({
        planName: planDisplayName, amount, currency: 'INR', orgData,
        onSuccess: (response, subscriptionId, orgResult) => {
          setLoadingPlan(null); setIsDialogOpen(false); setSelectedPlan(null);
          navigate('/purchase-success', { state: { organizationName: orgData.organizationName, email: orgData.email, password: orgData.hrAdminPan.toUpperCase(), planName: planDisplayName, hrAdminName: orgData.hrAdminName, orgId: orgResult.orgId } });
        },
        onError: (error) => { setLoadingPlan(null); toast({ title: "Payment Failed", description: error.message || "Something went wrong.", variant: "destructive" }); },
      });
    } catch (error) { setLoadingPlan(null); toast({ title: "Error", description: "Failed to initiate payment.", variant: "destructive" }); }
  };

  return (
    <>
      <section id="pricing" className="relative container mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36 overflow-hidden">
        <GeometricDecorations variant="pricing" />
        <AnimatedSection className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the plan that fits your organization's needs
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg font-medium transition-colors duration-300 ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-primary" />
            <span className={`text-lg font-medium transition-colors duration-300 ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Yearly</span>
            {isYearly && (
              <span className="ml-2 px-3 py-1 text-sm font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full font-mono">
                Save 2 months!
              </span>
            )}
          </div>
        </AnimatedSection>

        <div className="relative grid md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} animation="fade-up" delay={index * 150}>
              <Card className={`p-8 sm:p-10 h-full transition-all duration-500 ${
                plan.highlighted 
                  ? 'bg-card/50 border-primary/30 shadow-[0_0_40px_hsl(175_80%_50%_/_0.15)] md:scale-105 glow-border' 
                  : 'bg-card/30 border-border/50 hover:border-primary/20'
              }`}>
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-3">{plan.name}</h3>
                <p className="text-muted-foreground mb-8">{plan.description}</p>
                <div className="mb-8">
                  {plan.name === "Enterprise" ? (
                    <span className="text-5xl font-bold gradient-text">Custom</span>
                  ) : (
                    <>
                      <span className="text-5xl font-bold text-foreground">₹{formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}</span>
                      <span className="text-muted-foreground">/{isYearly ? 'year' : 'month'}</span>
                      {isYearly && (
                        <div className="text-sm mt-2 text-muted-foreground">
                          (₹{formatPrice(Math.round(plan.yearlyPrice / 12))}/month)
                        </div>
                      )}
                    </>
                  )}
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full transition-all duration-300 ${
                    plan.highlighted 
                      ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(175_80%_50%_/_0.3)] hover:shadow-[0_0_30px_hsl(175_80%_50%_/_0.5)]' 
                      : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                  }`}
                  size="lg"
                  onClick={() => handleGetStarted(plan.name)}
                  disabled={loadingPlan === plan.name}
                >
                  {loadingPlan === plan.name ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Processing...</>
                  ) : (
                    plan.name === "Enterprise" ? "Contact Sales" : "Get Started"
                  )}
                </Button>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <PurchaseDialog
        isOpen={isDialogOpen}
        onClose={() => { setIsDialogOpen(false); setSelectedPlan(null); }}
        planName={selectedPlan?.name || ""}
        planPrice={selectedPlan ? `₹${selectedPlan.price}` : ""}
        onSubmit={handlePurchaseSubmit}
        isLoading={loadingPlan !== null}
      />
    </>
  );
};
