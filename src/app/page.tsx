import { Metadata } from "next";
import Navbar from "@/components/architecture/Navbar";
import Hero from "@/components/architecture/Hero";
import FeaturedProjects from "@/components/architecture/FeaturedProjects";
import Services from "@/components/architecture/Services";
import Testimonials from "@/components/architecture/Testimonials";
import Footer from "@/components/architecture/Footer";

export const metadata: Metadata = {
  title: "Architect Studio - Modern Architecture & Design Services",
  description: "Award-winning architectural design studio specializing in innovative residential, commercial, and cultural projects. From concept to completion, we create inspiring spaces that stand the test of time.",
  keywords: [
    "architecture",
    "architectural design",
    "modern architecture",
    "residential design",
    "commercial architecture",
    "urban planning",
    "interior design",
    "landscape architecture",
    "sustainable design",
    "building design"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  openGraph: {
    title: "Architect Studio - Modern Architecture & Design Services",
    description: "Award-winning architectural design studio specializing in innovative residential, commercial, and cultural projects.",
    url: "https://codestam.com",
    siteName: "Architect Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Architect Studio - Modern Architecture & Design"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Architect Studio - Modern Architecture & Design Services",
    description: "Award-winning architectural design studio specializing in innovative residential, commercial, and cultural projects.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop&crop=center"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code"
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}