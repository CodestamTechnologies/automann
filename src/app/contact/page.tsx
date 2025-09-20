import type { Metadata } from "next";
import Navbar from "@/components/eco/Navbar";
import Footer from "@/components/eco/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare, Leaf, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — EcoLife Sustainable Living",
  description: "Get in touch with EcoLife for questions about sustainable products, community support, or partnership opportunities. We're here to help you on your eco-friendly journey.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    contact: "hello@ecolife.com",
    action: "mailto:hello@ecolife.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our customer support team",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with us in real-time for immediate assistance",
    contact: "Available 9 AM - 6 PM EST",
    action: "#"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come see our sustainable office and showroom",
    contact: "123 Green Street, Eco City, EC 12345",
    action: "https://maps.google.com"
  }
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
  { day: "Sunday", hours: "Closed" }
];

const departments = [
  {
    title: "Customer Support",
    description: "Product questions, orders, and general inquiries",
    email: "support@ecolife.com",
    icon: Users
  },
  {
    title: "Partnerships",
    description: "Business partnerships and wholesale inquiries",
    email: "partnerships@ecolife.com",
    icon: Globe
  },
  {
    title: "Community",
    description: "Community events and educational programs",
    email: "community@ecolife.com",
    icon: Leaf
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 organic-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Get in
              <span className="block natural-gradient bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Have questions about sustainable living? Need help with your order? 
              Want to partner with us? We&apos;re here to help you on your eco-friendly journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/20 hover:natural-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                  <a 
                    href={method.action}
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    {method.contact}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 organic-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible. 
                We typically respond within 24 hours.
              </p>
              
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/20">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          className="border-primary/30 focus:border-primary"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          className="border-primary/30 focus:border-primary"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="border-primary/30 focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="border-primary/30 focus:border-primary"
                        placeholder="What can we help you with?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="border-primary/30 focus:border-primary resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full natural-gradient hover:natural-glow text-primary-foreground border-0 font-semibold rounded-xl"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  We&apos;re here to help you with any questions about sustainable living, 
                  our products, or our community programs.
                </p>
              </div>

              {/* Office Hours */}
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Office Hours
                  </CardTitle>
                  <CardDescription>
                    Our customer support team is available during these hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Departments */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Department Contacts
                </h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card key={index} className="border-0 shadow-lg bg-card/60 backdrop-blur-xl border border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <dept.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{dept.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                            <a 
                              href={`mailto:${dept.email}`}
                              className="text-primary font-medium hover:text-primary/80 transition-colors text-sm"
                            >
                              {dept.email}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/20">
                <CardContent className="p-0">
                  <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary/60 mx-auto mb-4" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">123 Green Street, Eco City</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Frequently Asked
              <span className="block natural-gradient bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do I know if a product is truly sustainable?",
                answer: "All our products undergo rigorous sustainability assessments. We evaluate materials, manufacturing processes, packaging, and end-of-life disposal. Look for our EcoLife Certified badge on products."
              },
              {
                question: "Do you offer international shipping?",
                answer: "Yes! We ship to over 25 countries worldwide. Shipping costs and delivery times vary by location. Check our shipping page for detailed information about your region."
              },
              {
                question: "Can I return products if I'm not satisfied?",
                answer: "Absolutely! We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, you can return it for a full refund or exchange."
              },
              {
                question: "How can I join the EcoLife community?",
                answer: "Joining is free and easy! Simply create an account on our website and you'll have access to our community forums, educational resources, and exclusive member benefits."
              },
              {
                question: "Do you offer bulk discounts for businesses?",
                answer: "Yes, we offer special pricing for businesses, schools, and organizations. Contact our partnerships team at partnerships@ecolife.com for more information."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card/80 backdrop-blur-xl border border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 organic-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our friendly support team is here to help. 
            Reach out to us through any of the contact methods above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="natural-gradient hover:natural-glow text-primary-foreground border-0 font-semibold rounded-xl" asChild>
              <a href="mailto:hello@ecolife.com">
                Email Us Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-xl" asChild>
              <a href="tel:+15551234567">
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}