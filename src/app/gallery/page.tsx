import type { Metadata } from "next";
import Navbar from "@/components/cyberpunk/Navbar";
import Footer from "@/components/cyberpunk/Footer";
import GalleryContent from "@/components/cyberpunk/GalleryContent";

export const metadata: Metadata = {
  title: "Digital Art Gallery - NEON FLUX",
  description: "Explore our extensive collection of cyberpunk digital art, AI-generated masterpieces, and futuristic visual experiences.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["digital art gallery", "cyberpunk art", "AI art", "NFT collection", "futuristic art"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Digital Art Gallery - NEON FLUX",
    description: "Explore our extensive collection of cyberpunk digital art, AI-generated masterpieces, and futuristic visual experiences.",
    url: "https://codestam.com/gallery",
    siteName: "NEON FLUX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Art Gallery - NEON FLUX",
    description: "Explore our extensive collection of cyberpunk digital art, AI-generated masterpieces, and futuristic visual experiences.",
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <GalleryContent />
      <Footer />
    </div>
  );
}