import type { Metadata } from "next";
import Navbar from "@/components/cyberpunk/Navbar";
import Footer from "@/components/cyberpunk/Footer";
import ArtistsContent from "@/components/cyberpunk/ArtistsContent";

export const metadata: Metadata = {
  title: "Featured Artists - NEON FLUX",
  description: "Meet the visionary digital artists creating the future of cyberpunk art through AI, 3D rendering, and cutting-edge technology.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["digital artists", "cyberpunk artists", "AI artists", "3D artists", "NFT creators"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Featured Artists - NEON FLUX",
    description: "Meet the visionary digital artists creating the future of cyberpunk art through AI, 3D rendering, and cutting-edge technology.",
    url: "https://codestam.com/artists",
    siteName: "NEON FLUX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Artists - NEON FLUX",
    description: "Meet the visionary digital artists creating the future of cyberpunk art through AI, 3D rendering, and cutting-edge technology.",
  },
};

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ArtistsContent />
      <Footer />
    </div>
  );
}