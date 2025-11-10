import { Metadata } from "next";
import Navbar from "@/components/whatsapp/Navbar";
import Footer from "@/components/whatsapp/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Pricing - automann",
  description: "Pricing plans coming soon. We're crafting the perfect plans for everyone. Get notified when pricing is available.",
  keywords: [
    "WhatsApp automation pricing",
    "WhatsApp chatbot pricing",
    "WhatsApp marketing cost",
    "affordable WhatsApp automation",
    "WhatsApp API pricing"
  ],
  authors: [{ name: "automann" }],
  creator: "automann",
  publisher: "automann",
  openGraph: {
    title: "Pricing - automann",
    description: "Pricing plans coming soon. We're crafting the perfect plans for everyone. Get notified when pricing is available.",
    url: "https://codestam.com/pricing",
    siteName: "automann",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "automann Pricing"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - automann",
    description: "Pricing plans coming soon. We're crafting the perfect plans for everyone. Get notified when pricing is available.",
    images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center"]
  }
};

const plans = [
  {
    name: "Starter",
    bestFor: "Individuals & Small Biz",
    price: "Coming Soon",
    period: "",
    features: [
      "1 WhatsApp Number",
      "Chatbot Builder",
      "Campaign Automation",
      "Basic Analytics",
      "Email Support",
      "Up to 1,000 messages/month",
    ],
    cta: "Get Notified",
    popular: false,
  },
  {
    name: "Growth",
    bestFor: "Agencies & SMBs",
    price: "Coming Soon",
    period: "",
    features: [
      "Multi WhatsApp Numbers",
      "Multi-agent Inbox",
      "Advanced Analytics",
      "CRM Integration",
      "Priority Support",
      "Up to 10,000 messages/month",
      "Custom Chatbot Setup",
    ],
    cta: "Get Notified",
    popular: true,
  },
  {
    name: "Pro Partner",
    bestFor: "Consultants & Resellers",
    price: "Coming Soon",
    period: "",
    features: [
      "Unlimited WhatsApp Numbers",
      "White-label Options",
      "Earn Commissions",
      "Dedicated Account Manager",
      "Training & Marketing Materials",
      "Unlimited Messages",
      "API Access",
      "Priority Support",
    ],
    cta: "Get Notified",
    popular: false,
  },
];

const addons = [
  {
    name: "Custom Chatbot Setup",
    price: "Coming Soon",
    type: "one-time",
  },
  {
    name: "API Integration Support",
    price: "Coming Soon",
    type: "one-time",
  },
];

export default function PricingPage() {
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
              Pricing Plans
              <br />
              <span className="text-primary">
                Coming Soon
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We&apos;re crafting the perfect pricing plans for everyone. Get notified when pricing is available.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`minimal-card p-8 hover-lift relative ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.bestFor}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 font-medium rounded-lg transition-all ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Add-ons <span className="text-primary">(Coming Soon)</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {addons.map((addon) => (
              <div key={addon.name} className="minimal-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {addon.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {addon.type === "one-time" ? "One-time payment" : "Per month"}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {addon.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Want to Be Notified When Pricing is Available?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us and we&apos;ll notify you as soon as our pricing plans are ready. We&apos;ll also help you find the perfect plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
            >
              Get Notified
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/contact#demo"
              className="inline-flex items-center px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all"
            >
              Get a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
