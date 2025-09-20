import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import FeaturedServices from "@/components/marketing/FeaturedServices";
import Testimonials from "@/components/marketing/Testimonials";
import Newsletter from "@/components/marketing/Newsletter";
import Footer from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "GrowthLab Digital — Accelerate Your Business Growth",
  description: "Accelerate your business growth with GrowthLab Digital — cutting-edge digital marketing, growth hacking, and data-driven strategies for modern businesses.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedServices />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
