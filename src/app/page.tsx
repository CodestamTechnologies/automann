import type { Metadata } from "next";
import Navbar from "@/components/eco/Navbar";
import Hero from "@/components/eco/Hero";
import FeaturedProducts from "@/components/eco/FeaturedProducts";
import Testimonials from "@/components/eco/Testimonials";
import Newsletter from "@/components/eco/Newsletter";
import Footer from "@/components/eco/Footer";

export const metadata: Metadata = {
  title: "EcoLife Sustainable Living — Live Sustainably, Love Naturally",
  description: "Discover sustainable living solutions with EcoLife — eco-friendly products, green lifestyle tips, and natural alternatives for a healthier planet and lifestyle.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
