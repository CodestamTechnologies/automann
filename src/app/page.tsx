import type { Metadata } from "next";
import Navbar from "@/components/arts/Navbar";
import Hero from "@/components/arts/Hero";
import FeaturedServices from "@/components/arts/FeaturedServices";
import Testimonials from "@/components/arts/Testimonials";
import Newsletter from "@/components/arts/Newsletter";
import Footer from "@/components/arts/Footer";

export const metadata: Metadata = {
  title: "Artisan Creative Studio — Exceptional Arts &amp; Design Services",
  description: "Discover exceptional creative arts and design at Artisan Creative Studio — fine art, digital design, photography, and bespoke creative solutions for discerning clients.",
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
