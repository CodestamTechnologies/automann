import { Metadata } from "next";
import Navbar from "@/components/whatsapp/Navbar";
import Footer from "@/components/whatsapp/Footer";
import { DollarSign, Users, Award, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Partners & Resellers - automann",
  description: "Earn monthly commissions by referring clients. Become a WhatsApp Automation Partner and start earning passive income. We handle setup, support, and billing.",
  keywords: [
    "WhatsApp automation partner",
    "WhatsApp reseller program",
    "WhatsApp automation commission",
    "partner program",
    "reseller opportunity"
  ],
  authors: [{ name: "automann" }],
  creator: "automann",
  publisher: "automann",
  openGraph: {
    title: "Partners & Resellers - automann",
    description: "Earn monthly commissions by referring clients. Become an automann Partner and start earning passive income.",
    url: "https://codestam.com/partners",
    siteName: "automann",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "automann Partners"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners & Resellers - automann",
    description: "Earn monthly commissions by referring clients. Become an automann Partner and start earning passive income.",
    images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center"]
  }
};

const benefits = [
  {
    icon: DollarSign,
    title: "High Recurring Commissions",
    description: "Earn competitive commissions on every client subscription, paid monthly.",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "Get personalized support from a dedicated account manager who understands your business.",
  },
  {
    icon: FileText,
    title: "Training & Marketing Materials",
    description: "Access comprehensive training resources and marketing materials to help you succeed.",
  },
  {
    icon: Award,
    title: "White-label Options",
    description: "Offer our platform under your own brand with white-label options available.",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen relative">
      {/* Seamless green background overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-emerald-50/30 to-green-50/40 dark:from-green-950/20 dark:via-emerald-950/15 dark:to-green-950/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]"></div>
      </div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Earn Monthly Commissions
              <br />
              <span className="text-primary">
                by Referring Clients
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Become an automann Partner and start earning every time your clients subscribe.
              We handle setup, support, and billing — you just bring in clients and earn passive income.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
            >
              Join Partner Program
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Partner Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="minimal-card p-6 hover-lift text-center">
                <div className="feature-icon mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            How It Works
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Sign Up as a Partner
                </h3>
                <p className="text-muted-foreground">
                  Complete a simple application process and get approved as an official partner.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Refer Clients
                </h3>
                <p className="text-muted-foreground">
                  Share your unique partner link and refer clients to our platform.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  We Handle Everything
                </h3>
                <p className="text-muted-foreground">
                  We take care of setup, onboarding, support, and billing for your clients.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold">4</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Earn Commissions
                </h3>
                <p className="text-muted-foreground">
                  Receive monthly commissions for every active client subscription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our partner program today and start building your passive income stream.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
          >
            Join Partner Program
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}





