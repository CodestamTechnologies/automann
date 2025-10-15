import type { Metadata } from "next";
import Navbar from "@/components/rescue/Navbar";
import Footer from "@/components/rescue/Footer";

export const metadata: Metadata = {
  title: "Adoption — Paws & Hearts | Find Your Perfect Pet",
  description: "Ready to adopt? Learn about our adoption process and find your perfect companion. We help match you with the right pet for your lifestyle.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function AdoptionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              Pet <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Adoption</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to welcome a new family member? Our adoption process is designed to ensure the perfect match for both you and your new companion.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



