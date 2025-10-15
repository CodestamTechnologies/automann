import type { Metadata } from "next";
import Navbar from "@/components/rescue/Navbar";
import Footer from "@/components/rescue/Footer";

export const metadata: Metadata = {
  title: "Rescue Animals — Paws & Hearts | Available for Adoption",
  description: "Meet our amazing rescue animals waiting for their forever homes. Browse dogs, cats, and other pets available for adoption.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function AnimalsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Rescue Animals</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every animal has a story, and every story deserves a happy ending. Meet our amazing rescue animals waiting for their forever homes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



