import type { Metadata } from "next";
import Navbar from "@/components/vintage/Navbar";
import Footer from "@/components/vintage/Footer";
import { Clock, Star, Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collections — Horologium | Curated Vintage Timepieces",
  description: "Explore our meticulously curated collections of vintage timepieces, from Swiss precision to American heritage and military classics.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const collections = [
  {
    id: 1,
    title: "Swiss Precision",
    subtitle: "Masterpieces from the Heart of Horology",
    description: "Discover the finest examples of Swiss watchmaking excellence, from legendary manufacturers like Patek Philippe, Rolex, and Omega. Each piece represents decades of precision engineering and timeless design.",
    image: "https://images.unsplash.com/photo-1523170335258-f5c6c6b0e0c0?w=1200&h=800&fit=crop&crop=center",
    era: "1950s-1980s",
    origin: "Switzerland",
    pieces: "150+",
    featured: true,
    highlights: ["Patek Philippe Calatrava", "Rolex Submariner", "Omega Speedmaster", "Vacheron Constantin Patrimony"],
  },
  {
    id: 2,
    title: "American Heritage",
    subtitle: "Timeless Classics from Across the Atlantic",
    description: "Explore the rich history of American watchmaking with pieces from Hamilton, Elgin, and Waltham. These timepieces tell the story of American innovation and craftsmanship.",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1200&h=800&fit=crop&crop=center",
    era: "1940s-1970s",
    origin: "United States",
    pieces: "200+",
    featured: false,
    highlights: ["Hamilton Ventura", "Elgin Railroad", "Waltham A-11", "Bulova Accutron"],
  },
  {
    id: 3,
    title: "Military Timepieces",
    subtitle: "Robust Instruments Built for Service",
    description: "Authentic military watches that served in conflicts around the world. These rugged timepieces were designed for precision and reliability under the most demanding conditions.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=800&fit=crop&crop=center",
    era: "1930s-1960s",
    origin: "Various",
    pieces: "75+",
    featured: true,
    highlights: ["A-11 Military Issue", "Dirty Dozen Watches", "Vietnam Era Timepieces", "NATO Issued"],
  },
  {
    id: 4,
    title: "Dress Watches",
    subtitle: "Elegant Timepieces for Formal Occasions",
    description: "Sophisticated dress watches that combine timeless elegance with mechanical precision. Perfect for formal occasions and business settings.",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1200&h=800&fit=crop&crop=center",
    era: "1960s-1990s",
    origin: "Switzerland & Europe",
    pieces: "100+",
    featured: false,
    highlights: ["Jaeger-LeCoultre Reverso", "Cartier Tank", "Piaget Altiplano", "Breguet Classique"],
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Curated Collections
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each collection represents decades of horological excellence, carefully selected 
              for their historical significance, mechanical precision, and timeless appeal.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {collections.map((collection) => (
              <div key={collection.id} className="group">
                <div className="minimal-card rounded-2xl overflow-hidden hover:elegant-shadow transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                    
                    {/* Featured Badge */}
                    {collection.featured && (
                      <div className="absolute top-6 right-6">
                        <div className="flex items-center space-x-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                          <Star className="w-4 h-4" />
                          <span>Featured Collection</span>
                        </div>
                      </div>
                    )}

                    {/* Collection Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h2 className="text-3xl font-bold text-background mb-2">
                        {collection.title}
                      </h2>
                      <p className="text-background/90 text-lg">
                        {collection.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {collection.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Calendar className="w-4 h-4 text-accent mr-1" />
                          <span className="text-sm text-muted-foreground">Era</span>
                        </div>
                        <div className="font-semibold text-foreground">{collection.era}</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <MapPin className="w-4 h-4 text-accent mr-1" />
                          <span className="text-sm text-muted-foreground">Origin</span>
                        </div>
                        <div className="font-semibold text-foreground">{collection.origin}</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Clock className="w-4 h-4 text-accent mr-1" />
                          <span className="text-sm text-muted-foreground">Pieces</span>
                        </div>
                        <div className="font-semibold text-foreground">{collection.pieces}</div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Collection Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {collection.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/collections/${collection.id}`}
                      className="group/btn inline-flex items-center text-accent hover:text-foreground transition-colors duration-200 font-medium"
                    >
                      Explore Collection
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Looking for Something Specific?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our expert team can help you find the perfect timepiece or provide 
            authentication services for your existing collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Our Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}