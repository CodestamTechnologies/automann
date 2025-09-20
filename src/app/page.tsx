import type { Metadata } from "next";
import Navbar from "@/components/wellness/Navbar";
import Hero from "@/components/wellness/Hero";
import FeaturedPrograms from "@/components/wellness/FeaturedPrograms";
import Testimonials from "@/components/wellness/Testimonials";
import Newsletter from "@/components/wellness/Newsletter";
import Footer from "@/components/wellness/Footer";

export const metadata: Metadata = {
  title: "ZenFit Wellness — Holistic Health &amp; Mindful Fitness",
  description: "Transform your wellness journey with nature-inspired fitness, mindful movement, and holistic healing experiences.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedPrograms />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
