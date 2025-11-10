import { Metadata } from "next";
import Navbar from "@/components/whatsapp/Navbar";
import Footer from "@/components/whatsapp/Footer";
import ContactForm from "@/components/whatsapp/ContactForm";

export const metadata: Metadata = {
    title: "Contact & Demo - automann",
  description: "Get in touch with us for your next WhatsApp automation project. Book a free demo or reach out for partnership details. Let's get you started.",
  keywords: [
    "WhatsApp automation contact",
    "book WhatsApp demo",
    "WhatsApp automation consultation",
    "WhatsApp automation support"
  ],
  authors: [{ name: "automann" }],
  creator: "automann",
  publisher: "automann",
  openGraph: {
    title: "Contact & Demo - automann",
    description: "Get in touch with us for your next WhatsApp automation project. Book a free demo or reach out for partnership details.",
    url: "https://codestam.com/contact",
    siteName: "automann",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Contact automann"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Demo - automann",
    description: "Get in touch with us for your next WhatsApp automation project. Book a free demo or reach out for partnership details.",
    images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center"]
  }
};

export default function ContactPage() {
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
              Let&apos;s Get You Started
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Book a free demo or reach out for partnership details.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <ContactForm />

      <Footer />
    </main>
  );
}