import type { Metadata } from "next";
import Navbar from "@/components/wellness/Navbar";
import Footer from "@/components/wellness/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — ZenFit Wellness Center",
  description: "Get in touch with ZenFit Wellness Center. Contact us for classes, programs, consultations, or any wellness questions.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Wellness Way", "Serene City, SC 12345"],
    description: "Located in the heart of the city, surrounded by nature"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(555) 123-WELL", "(555) 123-HELP"],
    description: "Available Monday-Friday, 6 AM - 9 PM"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@zenfit.com", "info@zenfit.com"],
    description: "We respond within 24 hours"
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 6 AM - 9 PM", "Sat-Sun: 7 AM - 8 PM"],
    description: "Extended hours for early morning and evening classes"
  }
];

const services = [
  {
    title: "Class Bookings",
    description: "Reserve your spot in our yoga, meditation, and fitness classes",
    icon: Calendar
  },
  {
    title: "Wellness Consultations",
    description: "Schedule a personalized wellness assessment and program planning",
    icon: MessageCircle
  },
  {
    title: "Group Programs",
    description: "Inquire about corporate wellness programs and group sessions",
    icon: Calendar
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We&apos;re here to help you start your wellness journey. Reach out to us for classes, consultations, 
              or any questions about our programs and services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-3">
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send us a Message
                </CardTitle>
                <CardDescription>
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
                      className="bg-background/50 border-border/50"
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
                      className="bg-background/50 border-border/50"
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
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border/50"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="bg-background/50 border-border/50"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="yoga">Yoga Classes</option>
                    <option value="meditation">Meditation</option>
                    <option value="fitness">Fitness Programs</option>
                    <option value="nutrition">Nutrition Counseling</option>
                    <option value="wellness">Wellness Coaching</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your wellness goals and how we can help..."
                    className="min-h-[120px] bg-background/50 border-border/50"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Services & Map */}
            <div className="space-y-8">
              {/* Services */}
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    How We Can Help
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="h-64 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="w-12 h-12 text-primary/60 mx-auto" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">123 Wellness Way, Serene City</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Call us directly for urgent inquiries or same-day class bookings.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: (555) 123-WELL
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