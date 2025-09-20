import type { Metadata } from "next";
import Navbar from "@/components/vintage/Navbar";
import Footer from "@/components/vintage/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Horologium | Get in Touch with Our Expert Team",
  description: "Contact our team of certified horologists for authentication, restoration, or acquisition services. We&apos;re here to help with all your vintage timepiece needs.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Speak directly with our experts",
    contact: "+1 (555) 123-4567",
    hours: "Mon-Fri: 9AM-6PM EST",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us detailed inquiries",
    contact: "info@horologium.com",
    hours: "Response within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Schedule an in-person consultation",
    contact: "123 Horological Avenue, NY 10001",
    hours: "By appointment only",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant answers to your questions",
    contact: "Available on our website",
    hours: "Mon-Fri: 9AM-5PM EST",
  },
];

const services = [
  "Authentication Services",
  "Restoration & Repair",
  "Acquisition Services",
  "Valuation & Appraisal",
  "General Consultation",
  "Other",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your vintage timepiece needs? Our expert team is here to help 
              with authentication, restoration, acquisition, and all your horological questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method) => (
              <div key={method.title} className="minimal-card rounded-xl p-6 text-center hover:elegant-shadow transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {method.description}
                </p>
                <p className="font-medium text-foreground mb-2">
                  {method.contact}
                </p>
                <p className="text-sm text-muted-foreground">
                  {method.hours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Please provide details about your timepiece, service needs, or any questions you may have..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                {/* Office Hours */}
                <div className="minimal-card rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Office Hours</h3>
                      <p className="text-muted-foreground">When we&apos;re available to help</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="minimal-card rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Our Location</h3>
                      <p className="text-muted-foreground">Visit us in New York</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2">123 Horological Avenue</p>
                    <p className="mb-2">New York, NY 10001</p>
                    <p>United States</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="minimal-card rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Response Time</h3>
                      <p className="text-muted-foreground">How quickly we&apos;ll get back to you</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email Inquiries</span>
                      <span className="text-foreground">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone Calls</span>
                      <span className="text-foreground">Immediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Live Chat</span>
                      <span className="text-foreground">Within minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="minimal-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How long does authentication take?
              </h3>
              <p className="text-muted-foreground">
                Most authentication services are completed within 3-5 business days. 
                Complex cases requiring additional research may take up to 10 business days.
              </p>
            </div>

            <div className="minimal-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Do you provide certificates of authenticity?
              </h3>
              <p className="text-muted-foreground">
                Yes, every authenticated timepiece receives a detailed certificate of authenticity 
                with photographs, condition report, and our expert signature.
              </p>
            </div>

            <div className="minimal-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Can you help me find a specific watch?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! Our acquisition service specializes in sourcing specific timepieces 
                from our global network of trusted dealers and private collectors.
              </p>
            </div>

            <div className="minimal-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                What if my watch needs restoration?
              </h3>
              <p className="text-muted-foreground">
                We provide comprehensive restoration services using period-correct techniques 
                and original components when possible. All work is guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}