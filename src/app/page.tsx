import type { Metadata } from "next";
import Navbar from "@/components/rescue/Navbar";
import Hero from "@/components/rescue/Hero";
import OurStory from "@/components/rescue/OurStory";
import RescueAnimals from "@/components/rescue/RescueAnimals";
import HowToHelp from "@/components/rescue/HowToHelp";
import Footer from "@/components/rescue/Footer";

export const metadata: Metadata = {
  title: "Paws & Hearts — Animal Rescue & Adoption Center",
  description:
    "Dedicated to rescuing, rehabilitating, and rehoming animals in need. Every life matters, and every story deserves a happy ending. Join us in our mission to give hope to every paw.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: [
    "animal rescue",
    "pet adoption",
    "animal shelter",
    "volunteer",
    "foster animals",
    "animal welfare",
    "pet care",
    "rescue dogs",
    "rescue cats",
    "animal rehabilitation",
  ],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Paws & Hearts — Animal Rescue & Adoption Center",
    description:
      "Dedicated to rescuing, rehabilitating, and rehoming animals in need. Every life matters, and every story deserves a happy ending.",
    url: "https://codestam.com",
    siteName: "Paws & Hearts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paws & Hearts — Animal Rescue & Adoption Center",
    description:
      "Dedicated to rescuing, rehabilitating, and rehoming animals in need. Every life matters, and every story deserves a happy ending.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <OurStory />
      <RescueAnimals />
      <HowToHelp />
      <Footer />
    </div>
  );
}