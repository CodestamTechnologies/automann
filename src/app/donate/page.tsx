import type { Metadata } from "next";
import Navbar from "@/components/rescue/Navbar";
import Footer from "@/components/rescue/Footer";

export const metadata: Metadata = {
  title: "Donate — Paws & Hearts | Support Our Mission",
  description: "Your financial support helps us provide medical care, food, and shelter for animals in need. Every dollar makes a difference.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Donate</span> Today
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your generosity helps us rescue, rehabilitate, and rehome animals in need. Every contribution makes a difference.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



