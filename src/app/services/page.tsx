import type { Metadata } from "next";
import Navbar from "@/components/vintage/Navbar";
import Footer from "@/components/vintage/Footer";
import { Shield, Wrench, Search, Award, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Horologium | Expert Authentication & Restoration",
  description: "Professional horological services including authentication, restoration, and acquisition. Trusted by collectors worldwide for over 50 years.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const services = [
  {
    icon: Shield,
    title: "Authentication Services",
    subtitle: "Expert Verification & Certification",
    description: "Our certified horologists provide comprehensive authentication services, verifying the authenticity, provenance, and condition of vintage timepieces. Each authentication includes detailed documentation and a certificate of authenticity.",
    features: [
      "Certificate of Authenticity",
      "Provenance Research & Documentation",
      "Condition Assessment Report",
      "Market Valuation Analysis",
      "Movement Examination",
      "Case & Dial Analysis"
    ],
    pricing: "Starting at $150",
    timeline: "3-5 business days",
    image: "https://images.unsplash.com/photo-1523170335258-f5c6c6b0e0c0?w=800&h=600&fit=crop&crop=center",
  },
  {
    icon: Wrench,
    title: "Restoration Services",
    subtitle: "Meticulous Restoration & Repair",
    description: "Our master watchmakers restore vintage timepieces using period-correct techniques and original components when possible. We preserve the character and patina while ensuring optimal functionality.",
    features: [
      "Complete Movement Overhaul",
      "Case Refinishing & Polishing",
      "Dial Restoration & Refinishing",
      "Crystal Replacement",
      "Strap & Bracelet Restoration",
      "Water Resistance Testing"
    ],
    pricing: "Starting at $300",
    timeline: "2-4 weeks",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=600&fit=crop&crop=center",
  },
  {
    icon: Search,
    title: "Acquisition Services",
    subtitle: "Personalized Sourcing & Procurement",
    description: "Our global network of trusted dealers and private collectors helps us source specific timepieces for our clients. We handle negotiations, authentication, and secure delivery.",
    features: [
      "Custom Search & Sourcing",
      "Private Sale Representation",
      "Auction Bidding Services",
      "Investment Guidance",
      "Negotiation & Purchase",
      "Secure Shipping & Insurance"
    ],
    pricing: "10% of purchase price",
    timeline: "Varies by request",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center",
  },
];

const process = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We discuss your needs, timeline, and budget to understand your requirements.",
    icon: Users,
  },
  {
    step: 2,
    title: "Assessment & Quote",
    description: "We provide a detailed assessment and transparent pricing for all services.",
    icon: Search,
  },
  {
    step: 3,
    title: "Service Execution",
    description: "Our experts perform the requested services with regular updates on progress.",
    icon: Wrench,
  },
  {
    step: 4,
    title: "Delivery & Documentation",
    description: "Complete documentation and secure delivery of your timepiece.",
    icon: Award,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Expert Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our team of certified horologists provides comprehensive services to collectors, 
              from authentication to restoration and acquisition. Trusted by collectors worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group">
                <div className="minimal-card rounded-2xl overflow-hidden hover:elegant-shadow transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                    
                    {/* Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-background/90 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-accent font-medium mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Services Include:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & Timeline */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <div className="text-muted-foreground">Starting Price</div>
                        <div className="font-semibold text-foreground">{service.pricing}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Timeline</div>
                        <div className="font-semibold text-foreground">{service.timeline}</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="group/btn w-full inline-flex items-center justify-center px-4 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to ensure the highest quality service 
              and complete transparency throughout the process.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">2,500+</div>
              <div className="text-muted-foreground">Timepieces Authenticated</div>
            </div>
            <div>
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </div>
            <div>
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-background/80 mb-8">
            Contact our expert team to discuss your authentication, restoration, 
            or acquisition needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border border-background/20 text-background font-medium rounded-lg hover:bg-background/10 transition-all duration-300"
            >
              Learn About Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}