import { Card } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";

export const Comparison = () => {
  const features = [
    { name: "Employee Management", us: true, manual: false, legacy: true },
    { name: "Automated Attendance Tracking", us: true, manual: false, legacy: false },
    { name: "Multi-level Leave Approvals", us: true, manual: false, legacy: false },
    { name: "Salary Slip Generation", us: true, manual: false, legacy: true },
    { name: "Role-based Access Control", us: true, manual: false, legacy: false },
    { name: "Real-time Notifications", us: true, manual: false, legacy: false },
    { name: "Birthday Wishes System", us: true, manual: false, legacy: false },
    { name: "Excel Import/Export", us: true, manual: false, legacy: true },
    { name: "Mobile Responsive", us: true, manual: false, legacy: false },
    { name: "Cloud-based Access", us: true, manual: false, legacy: false },
    { name: "Customizable Reports", us: true, manual: false, legacy: true },
    { name: "99.9% Uptime SLA", us: true, manual: false, legacy: false },
  ];

  return (
    <section id="comparison" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Why Choose Our HR System?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See how we compare to traditional HR management approaches
        </p>
      </div>

      <Card className="overflow-hidden border-border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-6 font-semibold text-foreground">Feature</th>
                <th className="p-6 font-semibold text-center">
                  <div className="bg-gradient-hero text-primary-foreground px-4 py-2 rounded-lg inline-block">
                    Our System
                  </div>
                </th>
                <th className="p-6 font-semibold text-muted-foreground text-center">Manual Process</th>
                <th className="p-6 font-semibold text-muted-foreground text-center">Legacy Software</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-border ${index % 2 === 0 ? 'bg-card' : 'bg-muted/30'}`}
                >
                  <td className="p-6 font-medium text-foreground">{feature.name}</td>
                  <td className="p-6 text-center">
                    {feature.us ? (
                      <CheckCircle className="h-6 w-6 text-primary mx-auto" />
                    ) : (
                      <X className="h-6 w-6 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {feature.manual ? (
                      <CheckCircle className="h-6 w-6 text-muted-foreground mx-auto" />
                    ) : (
                      <X className="h-6 w-6 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {feature.legacy ? (
                      <CheckCircle className="h-6 w-6 text-muted-foreground mx-auto" />
                    ) : (
                      <X className="h-6 w-6 text-muted-foreground mx-auto" />
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
