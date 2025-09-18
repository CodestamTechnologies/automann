import Navbar from "@/components/eco/Navbar";
import Hero from "@/components/eco/Hero";
import FeaturedProducts from "@/components/eco/FeaturedProducts";
import SustainabilityImpact from "@/components/eco/SustainabilityImpact";
import WellnessTips from "@/components/eco/WellnessTips";
import Community from "@/components/eco/Community";
import Footer from "@/components/eco/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <SustainabilityImpact />
      <WellnessTips />
      <Community />
      <Footer />
    </div>
  );
}
