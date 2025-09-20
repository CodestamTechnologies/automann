import type { Metadata } from "next";
import Navbar from "@/components/cyberpunk/Navbar";
import Hero from "@/components/cyberpunk/Hero";
import FeaturedArt from "@/components/cyberpunk/FeaturedArt";
import ArtistSpotlight from "@/components/cyberpunk/ArtistSpotlight";
import TechShowcase from "@/components/cyberpunk/TechShowcase";
import Footer from "@/components/cyberpunk/Footer";

export const metadata: Metadata = {
  title: "ChromaSpace — Digital Art Gallery & Creative Studio",
  description:
    "Explore the future of digital creativity through our curated collection of AI-generated masterpieces, interactive installations, and cutting-edge artistic expressions. Where art meets technology.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: [
    "digital art",
    "AI art",
    "NFT marketplace",
    "digital creativity",
    "cyberpunk art",
    "neural networks",
    "blockchain art",
    "virtual gallery",
    "interactive art",
    "futuristic design",
  ],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "ChromaSpace — Digital Art Gallery & Creative Studio",
    description:
      "Explore the future of digital creativity through our curated collection of AI-generated masterpieces, interactive installations, and cutting-edge artistic expressions.",
    url: "https://codestam.com",
    siteName: "ChromaSpace",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChromaSpace — Digital Art Gallery & Creative Studio",
    description:
      "Explore the future of digital creativity through our curated collection of AI-generated masterpieces, interactive installations, and cutting-edge artistic expressions.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedArt />
      <ArtistSpotlight />
      <TechShowcase />
      <Footer />
    </div>
  );
}