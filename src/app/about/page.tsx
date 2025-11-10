import { Metadata } from "next";
import Navbar from "@/components/whatsapp/Navbar";
import Footer from "@/components/whatsapp/Footer";
import { Target, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us - automann",
  description: "We're building the future of WhatsApp marketing. Our team of developers and marketers built a tool that brings automation, analytics, and simplicity together.",
  keywords: [
    "about WhatsApp automation",
    "WhatsApp automation company",
    "WhatsApp marketing team",
    "automation platform mission"
  ],
  authors: [{ name: "automann" }],
  creator: "automann",
  publisher: "automann",
  openGraph: {
    title: "About Us - automann",
    description: "We're building the future of WhatsApp marketing. Our team of developers and marketers built a tool that brings automation, analytics, and simplicity together.",
    url: "https://codestam.com/about",
    siteName: "automann",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "About automann"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - automann",
    description: "We're building the future of WhatsApp marketing. Our team of developers and marketers built a tool that brings automation, analytics, and simplicity together.",
    images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center"]
  }
};

export default function AboutPage() {
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
              We&apos;re Building the Future
              <br />
              <span className="text-primary">
                of WhatsApp Marketing
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We started with one goal — to help businesses communicate smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="minimal-card p-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our team of developers and marketers built a tool that brings automation, 
                analytics, and simplicity together — so you can focus on growth while we handle the rest.
              </p>
              <p>
                We understand that businesses need powerful tools that are easy to use. 
                That&apos;s why we&apos;ve created a platform that requires no coding, integrates seamlessly 
                with your existing tools, and scales with your business.
              </p>
              <p>
                From startups to agencies, we&apos;re helping businesses of all sizes automate 
                their WhatsApp communications and convert more leads into customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empower every business to connect, engage, and grow using the power of WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="minimal-card p-6 text-center hover-lift">
              <div className="feature-icon mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Our Goal
              </h3>
              <p className="text-muted-foreground">
                To make WhatsApp automation accessible to businesses of all sizes, 
                regardless of technical expertise.
              </p>
            </div>

            <div className="minimal-card p-6 text-center hover-lift">
              <div className="feature-icon mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Our Team
              </h3>
              <p className="text-muted-foreground">
                A dedicated team of developers, marketers, and support specialists 
                committed to your success.
              </p>
            </div>

            <div className="minimal-card p-6 text-center hover-lift">
              <div className="feature-icon mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Our Promise
              </h3>
              <p className="text-muted-foreground">
                Continuous innovation, reliable service, and exceptional support 
                to help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}