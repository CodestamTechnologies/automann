import { Metadata } from "next";
import Navbar from "@/components/whatsapp/Navbar";
import Hero from "@/components/whatsapp/Hero";
import Features from "@/components/whatsapp/Features";
import Testimonials from "@/components/whatsapp/Testimonials";
import FAQ from "@/components/whatsapp/FAQ";
import CTA from "@/components/whatsapp/CTA";
import Footer from "@/components/whatsapp/Footer";

export const metadata: Metadata = {
  title: "automann - Automate, Engage & Convert",
  description: "Run smart chatbots, send automated messages, track analytics, and convert leads effortlessly with one powerful WhatsApp automation tool. Official API integration, no coding needed.",
  keywords: [
    "WhatsApp automation",
    "WhatsApp chatbot",
    "WhatsApp marketing",
    "automated messaging",
    "WhatsApp API",
    "lead generation",
    "WhatsApp analytics",
    "bulk messaging",
    "WhatsApp business",
    "chatbot builder"
  ],
  authors: [{ name: "automann" }],
  creator: "automann",
  publisher: "automann",
  openGraph: {
    title: "automann - Automate, Engage & Convert",
    description: "Run smart chatbots, send automated messages, track analytics, and convert leads effortlessly with one powerful WhatsApp automation tool.",
    url: "https://codestam.com",
    siteName: "automann",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "automann"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "automann - Automate, Engage & Convert",
    description: "Run smart chatbots, send automated messages, track analytics, and convert leads effortlessly with one powerful WhatsApp automation tool.",
    images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center"]
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      {/* Seamless green background overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-emerald-50/30 to-green-50/40 dark:from-green-950/20 dark:via-emerald-950/15 dark:to-green-950/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]"></div>
      </div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}