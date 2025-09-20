import type { Metadata } from "next";
import Navbar from "@/components/vintage/Navbar";
import Hero from "@/components/vintage/Hero";
import FeaturedCollections from "@/components/vintage/FeaturedCollections";
import Services from "@/components/vintage/Services";
import Testimonials from "@/components/vintage/Testimonials";
import Newsletter from "@/components/vintage/Newsletter";
import Footer from "@/components/vintage/Footer";

export const metadata: Metadata = {
  title: "Horologium — Curated Vintage Timepieces | Expert Authentication & Restoration",
  description: "Explore an exquisite collection of vintage watches, from rare Swiss movements to timeless American classics. Expert authentication, restoration, and acquisition services for serious collectors.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
