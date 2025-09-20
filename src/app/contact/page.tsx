import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, TrendingUp, Target, Zap, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — GrowthLab Digital",
  description: "Get in touch with GrowthLab Digital. Contact us for digital marketing services, growth strategies, consultations, or any inquiries about our growth solutions.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: ["123 Growth Street", "Digital District, DD 12345", "United States"],
    description: "Located in the heart of the digital district"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-GROW", "+1 (555) 123-SCALE"],
    description: "Available for consultations and inquiries"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@growthlabdigital.com", "growth@growthlabdigital.com"],
    description: "We respond within 24 hours"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 9 AM - 6 PM EST", "Sat: 10 AM - 4 PM EST"],
    description: "By appointment on weekends"
  }
];

const services = [
  {
    title: "Growth Strategy Consultation",
    description: "Get expert advice on your growth strategy and identify opportunities for rapid business expansion",
    icon: TrendingUp
  },
  {
    title: "Digital Marketing Audit",
    description: "Comprehensive analysis of your current marketing efforts and recommendations for improvement",
    icon: Target
  },
  {
    title: "Custom Growth Solutions",
    description: "Tailored growth solutions designed specifically for your business needs and objectives",
    icon: Zap
  },
  {
    title: "Performance Analytics",
    description: "Advanced analytics and reporting to track and optimize your marketing performance",
    icon: BarChart3
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 energy-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Let&apos;s Accelerate
              <span className="block dynamic-gradient bg-clip-text text-transparent">
                Your Growth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to take your business to the next level? Our team of growth experts is here to help you 
              achieve explosive growth through data-driven strategies and cutting-edge marketing techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/20">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-xl border border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground">
                  Start Your Growth Journey
                </CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a customized growth strategy.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      className="bg-background/50 border-primary/30 focus:border-primary text-foreground rounded-xl"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="bg-background/50 border-primary/30 focus:border-primary text-foreground rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    className="bg-background/50 border-primary/30 focus:border-primary text-foreground rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="bg-background/50 border-primary/30 focus:border-primary text-foreground rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className="bg-background/50 border-primary/30 focus:border-primary text-foreground rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="growth-hacking">Growth Hacking</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="conversion-optimization">Conversion Optimization</option>
                    <option value="marketing-automation">Marketing Automation</option>
                    <option value="brand-strategy">Brand Strategy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5000">Under $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="25000-50000">$25,000 - $50,000</option>
                    <option value="over-50000">Over $50,000</option>
                    <option value="discuss">Let&apos;s discuss</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your business goals, current challenges, and what you hope to achieve..."
                    className="min-h-[150px] bg-background/50 border-primary/30 focus:border-primary text-foreground rounded-xl"
                  />
                </div>

                <Button className="w-full dynamic-gradient hover:dynamic-glow text-primary-foreground border-0 font-semibold rounded-xl">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Start My Growth Journey
                </Button>
              </CardContent>
            </Card>

            {/* Services & Map */}
            <div className="space-y-8">
              {/* Services */}
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    How We Can Help
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/20">
                <CardContent className="p-0">
                  <div className="h-64 bg-secondary/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <MapPin className="w-16 h-16 text-primary/60 mx-auto" />
                      <p className="text-muted-foreground font-medium">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">123 Growth Street, Digital District</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For urgent inquiries or to schedule a consultation, call us directly.
                  </p>
                  <Button className="dynamic-gradient hover:dynamic-glow text-primary-foreground border-0 font-semibold rounded-xl">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: +1 (555) 123-GROW
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}