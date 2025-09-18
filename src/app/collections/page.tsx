import type { Metadata } from "next";
import Navbar from "@/components/cyberpunk/Navbar";
import Footer from "@/components/cyberpunk/Footer";
import CollectionsContent from "@/components/cyberpunk/CollectionsContent";

export const metadata: Metadata = {
  title: "Digital Art Collections - NEON FLUX",
  description: "Discover curated collections of cyberpunk digital art, themed NFT series, and exclusive artist collaborations.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["digital art collections", "NFT series", "cyberpunk collections", "artist collaborations"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Digital Art Collections - NEON FLUX",
    description: "Discover curated collections of cyberpunk digital art, themed NFT series, and exclusive artist collaborations.",
    url: "https://codestam.com/collections",
    siteName: "NEON FLUX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Art Collections - NEON FLUX",
    description: "Discover curated collections of cyberpunk digital art, themed NFT series, and exclusive artist collaborations.",
  },
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CollectionsContent />
      <Footer />
    </div>
  );
}