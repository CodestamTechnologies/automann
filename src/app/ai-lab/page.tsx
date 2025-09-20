import type { Metadata } from "next";
import Navbar from "@/components/cyberpunk/Navbar";
import Footer from "@/components/cyberpunk/Footer";

export const metadata: Metadata = {
  title: "AI Lab — ChromaSpace | Create Digital Art with AI",
  description: "Create stunning digital art using our advanced AI tools. Generate unique masterpieces with cutting-edge technology.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function AILabPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              AI <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Lab</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Create stunning digital art using our advanced AI tools and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}