import type { Metadata } from "next";
import Navbar from "@/components/arts/Navbar";
import Footer from "@/components/arts/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Palette, Camera, Brush, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Artisan Creative Studio",
  description: "Get in touch with Artisan Creative Studio. Contact us for artistic services, custom commissions, consultations, or any inquiries about our creative solutions.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Studio",
    details: ["456 Creative Lane", "Art District, AD 12345", "United States"],
    description: "Located in the heart of the art district"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+1 (555) 123-ART", "+1 (555) 123-CREATE"],
    description: "Available for consultations and inquiries"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@artisancreative.com", "commissions@artisancreative.com"],
    description: "We respond within 24 hours"
  },
  {
    icon: Clock,
    title: "Studio Hours",
    details: ["Mon-Fri: 9 AM - 6 PM EST", "Sat: 10 AM - 4 PM EST"],
    description: "By appointment on weekends"
  }
];

const services = [
  {
    title: "Custom Commissions",
    description: "Discuss your vision for a personalized artwork tailored to your specific needs and preferences",
    icon: Palette
  },
  {
    title: "Art Consultation",
    description: "Get expert guidance on art selection, collection building, and artistic investment strategies",
    icon: Heart
  },
  {
    title: "Photography Services",
    description: "Professional photography for events, portraits, and artistic documentation",
    icon: Camera
  },
  {
    title: "Design Projects",
    description: "Brand identity, digital design, and creative solutions for your business or personal projects",
    icon: Brush
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 artistic-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Let&apos;s Create
              <span className="block elegant-gradient bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to bring your creative vision to life? Our team of talented artists and designers 
              is here to help you create something truly extraordinary.
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
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
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
                      className="bg-background/50 border-primary/30 focus:border-primary text-foreground rounded-full"
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
                      className="bg-background/50 border-primary/30 focus:border-primary text-foreground rounded-full"
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
                    className="bg-background/50 border-primary/30 focus:border-primary text-foreground rounded-full"
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
                    className="bg-background/50 border-primary/30 focus:border-primary text-foreground rounded-full"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="fine-art">Fine Art Commission</option>
                    <option value="photography">Photography Services</option>
                    <option value="digital-design">Digital Design</option>
                    <option value="art-consultation">Art Consultation</option>
                    <option value="brand-identity">Brand Identity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    className="w-full px-4 py-3 bg-background/50 border border-primary/30 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-25000">$10,000 - $25,000</option>
                    <option value="over-25000">Over $25,000</option>
                    <option value="discuss">Let&apos;s discuss</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, vision, timeline, and any specific requirements..."
                    className="min-h-[150px] bg-background/50 border-primary/30 focus:border-primary text-foreground rounded-2xl"
                  />
                </div>

                <Button className="w-full elegant-gradient hover:elegant-glow text-primary-foreground border-0 font-semibold rounded-full">
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
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
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
                  <div className="h-64 bg-secondary/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <MapPin className="w-16 h-16 text-primary/60 mx-auto" />
                      <p className="text-muted-foreground font-medium">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">456 Creative Lane, Art District</p>
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
                    For urgent inquiries or to schedule a studio visit, call us directly.
                  </p>
                  <Button className="elegant-gradient hover:elegant-glow text-primary-foreground border-0 font-semibold rounded-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: +1 (555) 123-ART
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