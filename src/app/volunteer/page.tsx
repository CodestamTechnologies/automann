import type { Metadata } from "next";
import Navbar from "@/components/rescue/Navbar";
import Footer from "@/components/rescue/Footer";

export const metadata: Metadata = {
  title: "Volunteer — Paws & Hearts | Make a Difference",
  description: "Join our community of dedicated volunteers. From walking dogs to helping with events, there&apos;s a way for everyone to make a difference.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Volunteer</span> With Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our community of dedicated volunteers and make a real difference in the lives of animals in need.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



