import type { Metadata } from "next";
import Navbar from "@/components/noctis/Navbar";
import Hero from "@/components/noctis/Hero";
import Programs from "@/components/noctis/Programs";
import Events from "@/components/noctis/Events";
import Research from "@/components/noctis/Research";
import Visit from "@/components/noctis/Visit";
import Footer from "@/components/noctis/Footer";

export const metadata: Metadata = {
  title: "Noctis Observatory — Neon-Noir Urban Astronomy",
  description: "Stargazing, planetarium shows, and citizen-science under the city&apos;s night sky.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Programs />
      <Events />
      <Research />
      <Visit />
      <Footer />
    </div>
  );
}
