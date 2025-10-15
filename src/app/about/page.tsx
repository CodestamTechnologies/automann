import { Metadata } from "next";
import Navbar from "@/components/architecture/Navbar";
import Footer from "@/components/architecture/Footer";

export const metadata: Metadata = {
  title: "About - Architect Studio",
  description: "Learn about Architect Studio, our mission, values, and the passionate team behind award-winning architectural designs.",
  keywords: [
    "about architect studio",
    "architecture company",
    "architectural design team",
    "architect studio history",
    "architecture mission",
    "award-winning architects"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  openGraph: {
    title: "About - Architect Studio",
    description: "Learn about Architect Studio, our mission, values, and the passionate team behind award-winning architectural designs.",
    url: "https://codestam.com/about",
    siteName: "Architect Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "About Architect Studio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Architect Studio",
    description: "Learn about Architect Studio, our mission, values, and the passionate team behind award-winning architectural designs.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop&crop=center"]
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 architectural-texture opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="block">ABOUT</span>
              <span className="block text-accent">ARCHITECT</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are passionate architects dedicated to creating exceptional spaces that inspire and stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1999, Architect Studio has grown from a small design practice to a full-service architectural firm 
                recognized for excellence in modern design. Our journey began with a simple mission: to create inspiring 
                spaces that enhance the human experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we&apos;ve worked with clients, developers, and communities of all sizes, helping them 
                realize their vision through award-winning designs that stand the test of time.
              </p>
            </div>
            <div className="architectural-frame p-8">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center"
                alt="Architect Studio team at work"
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}