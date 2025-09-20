import type { Metadata } from "next";
import Navbar from "@/components/cyberpunk/Navbar";
import Footer from "@/components/cyberpunk/Footer";

export const metadata: Metadata = {
  title: "About — ChromaSpace | Digital Art Revolution",
  description: "Learn about ChromaSpace&apos;s mission to revolutionize digital art through technology and creativity.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ChromaSpace</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re revolutionizing digital art through cutting-edge technology and creative innovation
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}