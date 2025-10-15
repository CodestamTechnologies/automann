import { Metadata } from "next";
import Navbar from "@/components/architecture/Navbar";
import Footer from "@/components/architecture/Footer";

export const metadata: Metadata = {
  title: "Services - Cinematic Studios",
  description: "Comprehensive film production services including commercial production, post-production, documentary filming, motion graphics, and live streaming.",
  keywords: [
    "film production services",
    "video production services",
    "commercial production",
    "post-production services",
    "documentary production",
    "motion graphics",
    "audio production",
    "live streaming"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  openGraph: {
    title: "Services - Cinematic Studios",
    description: "Comprehensive film production services including commercial production, post-production, documentary filming, motion graphics, and live streaming.",
    url: "https://codestam.com/services",
    siteName: "Cinematic Studios",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Cinematic Studios Services"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Cinematic Studios",
    description: "Comprehensive film production services including commercial production, post-production, documentary filming, motion graphics, and live streaming.",
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop&crop=center"]
  }
};

export default function ServicesPage() {
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
              <span className="block text-primary">SERVICES</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              End-to-end film production services designed to bring your vision to life with professional excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="noir-frame p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Production</h3>
              <p className="text-muted-foreground leading-relaxed">
                Full-service film production from concept to completion with professional equipment and experienced crew.
              </p>
            </div>
            <div className="noir-frame p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Post-Production</h3>
              <p className="text-muted-foreground leading-relaxed">
                Expert editing, color grading, and visual effects to polish your project to perfection.
              </p>
            </div>
            <div className="noir-frame p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Documentary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Compelling documentary storytelling that captures authentic moments and powerful narratives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


