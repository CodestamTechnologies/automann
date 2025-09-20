import type { Metadata } from "next";
import Navbar from "@/components/cyberpunk/Navbar";
import Footer from "@/components/cyberpunk/Footer";

export const metadata: Metadata = {
  title: "Contact — ChromaSpace | Get in Touch",
  description: "Contact ChromaSpace for inquiries, collaborations, or support. We&apos;re here to help with your digital art journey.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              Get in <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your digital art journey? We&apos;re here to help you create, explore, and discover
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}