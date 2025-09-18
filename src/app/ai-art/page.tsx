import type { Metadata } from "next";
import Navbar from "@/components/cyberpunk/Navbar";
import Footer from "@/components/cyberpunk/Footer";
import AIArtContent from "@/components/cyberpunk/AIArtContent";

export const metadata: Metadata = {
  title: "AI Generated Art - NEON FLUX",
  description: "Explore cutting-edge AI-generated digital art created by advanced neural networks and machine learning algorithms.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["AI art", "machine learning art", "neural network art", "generative art", "artificial intelligence"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "AI Generated Art - NEON FLUX",
    description: "Explore cutting-edge AI-generated digital art created by advanced neural networks and machine learning algorithms.",
    url: "https://codestam.com/ai-art",
    siteName: "NEON FLUX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Generated Art - NEON FLUX",
    description: "Explore cutting-edge AI-generated digital art created by advanced neural networks and machine learning algorithms.",
  },
};

export default function AIArtPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AIArtContent />
      <Footer />
    </div>
  );
}