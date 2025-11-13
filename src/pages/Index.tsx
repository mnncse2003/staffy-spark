import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  FileText, 
  Clock, 
  CheckCircle, 
  Award,
  BarChart3,
  Shield,
  Zap,
  Briefcase,
  UserCheck,
  Building2
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">HR Management System</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">About</Button>
              <Button className="bg-gradient-hero text-primary-foreground shadow-elegant hover:opacity-90 transition-smooth">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Zap className="h-4 w-4" />
              Streamline Your HR Operations
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Modern HR Management Made{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive web-based platform that streamlines employee management, 
              attendance tracking, leave requests, and salary slip generation—all in one place.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-hero text-primary-foreground shadow-elegant hover:opacity-90 transition-smooth">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Companies Trust Us</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">50k+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={heroDashboard} 
              alt="HR Dashboard Interface" 
              className="relative rounded-2xl shadow-elegant border border-border"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need to Manage Your Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to simplify HR operations and boost productivity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Employee Management",
              description: "Comprehensive employee profiles with documents, qualifications, and family details. Import from Excel or add manually."
            },
            {
              icon: Clock,
              title: "Attendance Tracking",
              description: "Easy punch-in/out system with edit requests. Generate daily, weekly, and monthly attendance reports."
            },
            {
              icon: Calendar,
              title: "Leave Management",
              description: "Submit and track 14+ leave types including PL, SL, Maternity, Paternity, and WFH with automated routing."
            },
            {
              icon: FileText,
              title: "Salary Slips",
              description: "Generate and view detailed monthly salary slips with customizable allowances and deductions."
            },
            {
              icon: CheckCircle,
              title: "Approval Workflows",
              description: "Streamlined approval process for leaves and attendance edits with multi-level authorization."
            },
            {
              icon: Award,
              title: "Birthday Wishes",
              description: "Celebrate your team with automated birthday notifications and personalized wish templates."
            },
            {
              icon: BarChart3,
              title: "Reports & Analytics",
              description: "Comprehensive reporting for attendance, leaves, and employee data with export capabilities."
            },
            {
              icon: Shield,
              title: "Role-Based Access",
              description: "Secure access control for Staff, HR, HOD, and Intern roles with specific permissions."
            },
            {
              icon: Briefcase,
              title: "Department Management",
              description: "Organize teams by departments with HOD assignments and holiday management."
            }
          ].map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-smooth bg-card border-border">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Role-Based Features */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Built for Every Role in Your Organization
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Customized experiences and permissions for different user types
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <UserCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">For Employees</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Personalized dashboard with quick stats</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Easy attendance marking and tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Submit leave requests instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Access salary slips anytime</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Send birthday wishes to colleagues</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-gradient-hero text-primary-foreground shadow-elegant border-0">
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For HR Admins</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Full employee lifecycle management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Bulk import from Excel files</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Approve attendance and leave requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Generate salary slips with ease</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Manage departments and holidays</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">For HODs</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Review department leave requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Approve or reject with comments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>View team member records</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Track department attendance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Monitor leave balances</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <Card className="p-12 bg-gradient-hero text-primary-foreground text-center shadow-elegant border-0">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your HR Operations?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of companies already using our platform to streamline their HR processes
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">HR System</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Streamline your HR operations with our comprehensive management platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">About</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">API Reference</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 HR Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
