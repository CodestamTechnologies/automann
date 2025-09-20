import type { Metadata } from "next";
import Navbar from "@/components/tech/Navbar";
import Footer from "@/components/tech/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare, Code, Shield, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — NexusTech Innovation Hub",
  description: "Get in touch with NexusTech Innovation Hub. Contact us for technology solutions, partnerships, support, or any inquiries about our cutting-edge innovations.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our HQ",
    details: ["123 Innovation Drive", "Tech City, TC 12345", "United States"],
    description: "Located in the heart of Silicon Valley"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-TECH", "+1 (555) 123-HELP"],
    description: "Available 24/7 for enterprise support"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@nexustech.com", "support@nexustech.com"],
    description: "We respond within 2 hours"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 6 AM - 10 PM PST", "Sat-Sun: 8 AM - 6 PM PST"],
    description: "Global support across all time zones"
  }
];

const services = [
  {
    title: "Technology Solutions",
    description: "Get expert consultation on AI, quantum computing, and cybersecurity solutions",
    icon: Brain
  },
  {
    title: "Developer Support",
    description: "Technical support for APIs, SDKs, and integration assistance",
    icon: Code
  },
  {
    title: "Security Consultation",
    description: "Cybersecurity assessment and implementation guidance",
    icon: Shield
  },
  {
    title: "Partnership Opportunities",
    description: "Explore collaboration and partnership possibilities",
    icon: MessageSquare
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Get in
              <span className="block tech-gradient bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology? Our team of experts 
              is here to help you navigate the future of innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/10">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
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
            <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-xl border border-primary/10">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we&apos;ll get back to you within 2 hours.
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
                      className="bg-background/50 border-primary/30 focus:border-primary text-foreground"
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
                      className="bg-background/50 border-primary/30 focus:border-primary text-foreground"
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
                    className="bg-background/50 border-primary/30 focus:border-primary text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className="bg-background/50 border-primary/30 focus:border-primary text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 bg-background/50 border border-primary/30 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="quantum-computing">Quantum Computing</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="developer-tools">Developer Tools</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project and how we can help..."
                    className="min-h-[150px] bg-background/50 border-primary/30 focus:border-primary text-foreground"
                  />
                </div>

                <Button className="w-full tech-gradient hover:tech-glow text-primary-foreground border-0 font-semibold">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Services & Map */}
            <div className="space-y-8">
              {/* Services */}
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    How We Can Help
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/10">
                <CardContent className="p-0">
                  <div className="h-64 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <MapPin className="w-16 h-16 text-primary/60 mx-auto" />
                      <p className="text-muted-foreground font-medium">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">123 Innovation Drive, Tech City</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 via-background to-accent/5 border border-primary/10">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For urgent technical support or enterprise inquiries, call us directly.
                  </p>
                  <Button className="tech-gradient hover:tech-glow text-primary-foreground border-0 font-semibold">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: +1 (555) 123-TECH
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