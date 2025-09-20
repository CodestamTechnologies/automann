import type { Metadata } from "next";
import Navbar from "@/components/vintage/Navbar";
import Footer from "@/components/vintage/Footer";
import { Clock, Star, Calendar, MapPin, ArrowRight, Filter, Search } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Timepieces — Horologium | Vintage Watch Collection",
  description: "Browse our extensive collection of authenticated vintage timepieces, from Swiss precision to American heritage and military classics.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const timepieces = [
  {
    id: 1,
    title: "Patek Philippe Calatrava",
    model: "Ref. 96",
    year: "1952",
    origin: "Switzerland",
    price: "$18,500",
    image: "https://images.unsplash.com/photo-1523170335258-f5c6c6b0e0c0?w=600&h=600&fit=crop&crop=center",
    condition: "Excellent",
    movement: "Manual Wind",
    case: "18k Gold",
    featured: true,
    description: "A pristine example of Patek Philippe&apos;s iconic Calatrava design, featuring the legendary 12-120 movement.",
  },
  {
    id: 2,
    title: "Rolex Submariner",
    model: "Ref. 5513",
    year: "1967",
    origin: "Switzerland",
    price: "$25,000",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop&crop=center",
    condition: "Very Good",
    movement: "Automatic",
    case: "Stainless Steel",
    featured: true,
    description: "The legendary Submariner in its most collectible form, with the iconic no-date dial and Mercedes hands.",
  },
  {
    id: 3,
    title: "Omega Speedmaster",
    model: "Professional",
    year: "1969",
    origin: "Switzerland",
    price: "$8,500",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=600&fit=crop&crop=center",
    condition: "Good",
    movement: "Manual Wind",
    case: "Stainless Steel",
    featured: false,
    description: "The famous &quot;Moonwatch&quot; that accompanied astronauts to the lunar surface.",
  },
  {
    id: 4,
    title: "Hamilton Ventura",
    model: "Elvis Presley",
    year: "1957",
    origin: "United States",
    price: "$3,200",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=600&h=600&fit=crop&crop=center",
    condition: "Excellent",
    movement: "Electric",
    case: "Gold Plated",
    featured: false,
    description: "The revolutionary electric watch that became an icon of 1950s American design.",
  },
  {
    id: 5,
    title: "Jaeger-LeCoultre Reverso",
    model: "Classic",
    year: "1985",
    origin: "Switzerland",
    price: "$12,000",
    image: "https://images.unsplash.com/photo-1523170335258-f5c6c6b0e0c0?w=600&h=600&fit=crop&crop=center",
    condition: "Very Good",
    movement: "Manual Wind",
    case: "18k Gold",
    featured: true,
    description: "The iconic reversible watch originally designed for polo players, now a symbol of Art Deco elegance.",
  },
  {
    id: 6,
    title: "Elgin Railroad",
    model: "Grade 571",
    year: "1940",
    origin: "United States",
    price: "$1,800",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop&crop=center",
    condition: "Good",
    movement: "Manual Wind",
    case: "Gold Filled",
    featured: false,
    description: "A classic American railroad watch, built to the highest standards of accuracy and reliability.",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Vintage Timepieces
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of authenticated vintage watches, 
              each piece verified for authenticity and condition by our expert horologists.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search timepieces, brands, models..."
                  className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <button className="flex items-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors duration-200">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timepieces.map((timepiece) => (
              <div key={timepiece.id} className="group">
                <div className="minimal-card rounded-xl overflow-hidden hover:elegant-shadow transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={timepiece.image}
                      alt={timepiece.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Featured Badge */}
                    {timepiece.featured && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center space-x-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                          <Star className="w-3 h-3" />
                          <span>Featured</span>
                        </div>
                      </div>
                    )}

                    {/* Condition Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        timepiece.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
                        timepiece.condition === 'Very Good' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {timepiece.condition}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {timepiece.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {timepiece.model} • {timepiece.year}
                      </p>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {timepiece.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-3 h-3 text-accent" />
                        <span className="text-muted-foreground">{timepiece.origin}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3 text-accent" />
                        <span className="text-muted-foreground">{timepiece.movement}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-muted-foreground">
                        Case: {timepiece.case}
                      </div>
                      <div className="text-2xl font-bold text-foreground">
                        {timepiece.price}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/product/${timepiece.id}`}
                      className="group/btn w-full inline-flex items-center justify-center px-4 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all duration-300">
              Load More Timepieces
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Authentication Guarantee */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Authenticity Guaranteed
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every timepiece in our collection comes with a certificate of authenticity 
            and has been thoroughly examined by our certified horologists.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expert Authentication</h3>
              <p className="text-sm text-muted-foreground">Certified by professional horologists</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Condition Report</h3>
              <p className="text-sm text-muted-foreground">Detailed assessment of each piece</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Provenance Research</h3>
              <p className="text-sm text-muted-foreground">Complete history and documentation</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}