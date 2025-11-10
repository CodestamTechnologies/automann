import { Metadata } from "next";
import Navbar from "@/components/whatsapp/Navbar";
import Footer from "@/components/whatsapp/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - WhatsApp Automation Platform",
  description: "Read our terms of service to understand the rules and guidelines for using our WhatsApp automation platform and services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "WhatsApp automation terms"
  ],
  authors: [{ name: "automann" }],
  creator: "automann",
  publisher: "automann",
  openGraph: {
    title: "Terms of Service - automann",
    description: "Read our terms of service to understand the rules and guidelines for using our platform.",
    url: "https://codestam.com/terms",
    siteName: "automann",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Terms of Service - automann"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - automann",
    description: "Read our terms of service to understand the rules and guidelines for using our platform.",
    images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center"]
  }
};

export default function TermsPage() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="minimal-card p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using automann, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Use License
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily use our platform for personal or commercial purposes. This license does not include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Modifying or copying the platform materials</li>
                <li>Using the materials for any commercial purpose without our written consent</li>
                <li>Removing any copyright or proprietary notations from the materials</li>
                <li>Transferring the materials to another person or mirroring the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Acceptable Use
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to use our platform to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Send spam, unsolicited messages, or engage in any form of harassment</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the platform or servers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Account Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Maintaining the security of your account and password</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Complying with WhatsApp&apos;s Business Policy and Terms of Service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Payment Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our services are provided on a subscription basis. By subscribing, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Pay all fees associated with your subscription plan</li>
                <li>Automatic renewal of your subscription unless cancelled</li>
                <li>No refunds for partial subscription periods unless required by law</li>
                <li>Price changes with 30 days notice</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The platform and its original content, features, and functionality are owned by automann and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall automann be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account and access to the platform immediately, without prior notice, for any breach of these Terms of Service. Upon termination, your right to use the platform will cease immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  hello@automann.com
                </Link>
                {" "}or through our{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact page
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

