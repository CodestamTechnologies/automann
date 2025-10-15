import { Metadata } from "next";
import Navbar from "@/components/architecture/Navbar";
import Footer from "@/components/architecture/Footer";

export const metadata: Metadata = {
  title: "Portfolio - Cinematic Studios",
  description: "Explore our award-winning portfolio of film productions, commercials, documentaries, and motion graphics projects.",
  keywords: [
    "film portfolio",
    "video portfolio",
    "commercial portfolio",
    "documentary portfolio",
    "motion graphics portfolio",
    "cinematic work",
    "award-winning films"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  openGraph: {
    title: "Portfolio - Cinematic Studios",
    description: "Explore our award-winning portfolio of film productions, commercials, documentaries, and motion graphics projects.",
    url: "https://codestam.com/portfolio",
    siteName: "Cinematic Studios",
    images: [
      {
        url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Cinematic Studios Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Cinematic Studios",
    description: "Explore our award-winning portfolio of film productions, commercials, documentaries, and motion graphics projects.",
    images: ["https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=630&fit=crop&crop=center"]
  }
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 film-grain opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="block">OUR</span>
              <span className="block text-accent">PORTFOLIO</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A curated collection of our finest work, showcasing the breadth and depth of our creative capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio items would go here */}
            <div className="noir-frame p-6 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">Commercial Work</h3>
              <p className="text-muted-foreground">Brand campaigns and product launches</p>
            </div>
            <div className="noir-frame p-6 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">Documentaries</h3>
              <p className="text-muted-foreground">Compelling storytelling and authentic narratives</p>
            </div>
            <div className="noir-frame p-6 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">Motion Graphics</h3>
              <p className="text-muted-foreground">Dynamic animations and visual effects</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


