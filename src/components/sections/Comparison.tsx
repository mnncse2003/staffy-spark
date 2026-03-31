import { Card } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";

export const Comparison = () => {
  const features = [
    { name: "Employee Management", us: true, manual: false, legacy: true },
    { name: "Automated Attendance Tracking", us: true, manual: false, legacy: false },
    { name: "Face Recognition Attendance", us: true, manual: false, legacy: false },
    { name: "Multi-level Leave Approvals (14+ types)", us: true, manual: false, legacy: false },
    { name: "Salary Slip Generation", us: true, manual: false, legacy: true },
    { name: "Role-based Access (5 Roles)", us: true, manual: false, legacy: false },
    { name: "Real-time Chat & Messaging", us: true, manual: false, legacy: false },
    { name: "Helpdesk & Ticketing System", us: true, manual: false, legacy: false },
    { name: "Exit Management & Clearance", us: true, manual: false, legacy: false },
    { name: "Shift Management", us: true, manual: false, legacy: true },
    { name: "Self-Service Portal", us: true, manual: false, legacy: false },
    { name: "Device Security & Session Control", us: true, manual: false, legacy: false },
    { name: "Multi-Organization Support", us: true, manual: false, legacy: false },
    { name: "Excel Import/Export", us: true, manual: false, legacy: true },
    { name: "HR Analytics Dashboard", us: true, manual: false, legacy: false },
    { name: "Birthday Wishes & Notifications", us: true, manual: false, legacy: false },
    { name: "Mobile Responsive", us: true, manual: false, legacy: false },
    { name: "Cloud-based Access", us: true, manual: false, legacy: false },
  ];

  return (
    <section id="comparison" className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
          Why Choose ChronoStaff Suite?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
          See how we compare to traditional HR management approaches
        </p>
      </div>

      <Card className="overflow-hidden border-border">
        <div className="overflow-x-auto">
          <div className="md:hidden text-center py-2 text-xs text-muted-foreground border-b border-border bg-muted/30">
            ← Scroll to see more →
          </div>
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 sm:p-6 font-semibold text-foreground text-sm sm:text-base">Feature</th>
                <th className="p-3 sm:p-6 font-semibold text-center">
                  <div className="bg-gradient-hero text-primary-foreground px-2 sm:px-4 py-1 sm:py-2 rounded-lg inline-block text-xs sm:text-sm">
                    ChronoStaff
                  </div>
                </th>
                <th className="p-3 sm:p-6 font-semibold text-muted-foreground text-center text-xs sm:text-sm">Manual</th>
                <th className="p-3 sm:p-6 font-semibold text-muted-foreground text-center text-xs sm:text-sm">Legacy</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-border ${index % 2 === 0 ? 'bg-card' : 'bg-muted/30'}`}
                >
                  <td className="p-3 sm:p-6 font-medium text-foreground text-sm sm:text-base">{feature.name}</td>
                  <td className="p-3 sm:p-6 text-center">
                    {feature.us ? (
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="p-3 sm:p-6 text-center">
                    {feature.manual ? (
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground mx-auto" />
                    ) : (
                      <X className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="p-3 sm:p-6 text-center">
                    {feature.legacy ? (
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground mx-auto" />
                    ) : (
                      <X className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
};
