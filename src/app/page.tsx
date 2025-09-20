import type { Metadata } from "next";
import Navbar from "@/components/tech/Navbar";
import Hero from "@/components/tech/Hero";
import FeaturedSolutions from "@/components/tech/FeaturedSolutions";
import Testimonials from "@/components/tech/Testimonials";
import Newsletter from "@/components/tech/Newsletter";
import Footer from "@/components/tech/Footer";

export const metadata: Metadata = {
  title: "NexusTech Innovation Hub — Leading the Future of Technology",
  description: "Pioneering the future with cutting-edge AI solutions, quantum computing, advanced robotics, and next-generation digital transformation.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedSolutions />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
