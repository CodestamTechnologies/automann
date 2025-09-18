import Navbar from "@/components/cyberpunk/Navbar";
import Hero from "@/components/cyberpunk/Hero";
import FeaturedArt from "@/components/cyberpunk/FeaturedArt";
import TechShowcase from "@/components/cyberpunk/TechShowcase";
import ArtistSpotlight from "@/components/cyberpunk/ArtistSpotlight";
import Newsletter from "@/components/cyberpunk/Newsletter";
import Footer from "@/components/cyberpunk/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedArt />
      <TechShowcase />
      <ArtistSpotlight />
      <Newsletter />
      <Footer />
    </div>
  );
}
