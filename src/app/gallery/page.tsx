import type { Metadata } from "next";
import Navbar from "@/components/cyberpunk/Navbar";
import Footer from "@/components/cyberpunk/Footer";
import { Filter, Grid, List, Heart, Eye, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery — ChromaSpace | Digital Art Collection",
  description: "Explore our extensive collection of digital artworks, from AI-generated masterpieces to interactive installations. Discover the future of art.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const artworks = [
  {
    id: 1,
    title: "Digital Symphony",
    artist: "Alex Chen",
    image: "https://maxm-imggenurl.web.val.run/abstract digital art with flowing colors and musical notes, cyberpunk style",
    category: "Abstract",
    price: "0.5 ETH",
    likes: 1247,
    views: 8932,
  },
  {
    id: 2,
    title: "Neural Networks",
    artist: "Maya Rodriguez",
    image: "https://maxm-imggenurl.web.val.run/futuristic neural network visualization with glowing connections, digital art",
    category: "AI Generated",
    price: "1.2 ETH",
    likes: 2156,
    views: 15678,
  },
  {
    id: 3,
    title: "Quantum Dreams",
    artist: "Jordan Kim",
    image: "https://maxm-imggenurl.web.val.run/quantum physics inspired digital art with particle effects and cosmic colors",
    category: "Sci-Fi",
    price: "2.1 ETH",
    likes: 3421,
    views: 22345,
  },
  {
    id: 4,
    title: "Cyber Garden",
    artist: "Luna Park",
    image: "https://maxm-imggenurl.web.val.run/cyberpunk garden with neon plants and digital flowers, futuristic nature",
    category: "Nature",
    price: "0.8 ETH",
    likes: 1876,
    views: 12456,
  },
  {
    id: 5,
    title: "Data Streams",
    artist: "Kai Zhang",
    image: "https://maxm-imggenurl.web.val.run/flowing data streams with binary code and neon colors, digital art",
    category: "Abstract",
    price: "1.5 ETH",
    likes: 2987,
    views: 18765,
  },
  {
    id: 6,
    title: "Virtual Reality",
    artist: "Sofia Martinez",
    image: "https://maxm-imggenurl.web.val.run/virtual reality headset with holographic interface, futuristic tech art",
    category: "Tech",
    price: "0.9 ETH",
    likes: 1654,
    views: 11234,
  },
  {
    id: 7,
    title: "Holographic City",
    artist: "Ryan O&apos;Connor",
    image: "https://maxm-imggenurl.web.val.run/futuristic cityscape with holographic buildings and neon lights",
    category: "Architecture",
    price: "3.2 ETH",
    likes: 4567,
    views: 28901,
  },
  {
    id: 8,
    title: "Digital Evolution",
    artist: "Zara Patel",
    image: "https://maxm-imggenurl.web.val.run/evolution of digital forms from simple to complex, abstract art",
    category: "Abstract",
    price: "1.8 ETH",
    likes: 2234,
    views: 15678,
  },
];

const categories = ["All", "Abstract", "AI Generated", "Sci-Fi", "Nature", "Tech", "Architecture"];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              Digital <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the most innovative digital artworks from our community of visionary creators
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-primary/10 text-primary rounded-lg">
                  <Grid className="w-4 h-4" />
                </button>
                <button className="p-2 bg-secondary/50 text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors">
                  <List className="w-4 h-4" />
                </button>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-secondary/50 text-muted-foreground rounded-xl hover:bg-primary/10 hover:text-primary transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Artworks Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="group">
                <div className="artwork-frame rounded-2xl overflow-hidden hover:neon-glow transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:text-accent transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:text-primary transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full backdrop-blur-sm">
                        {artwork.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {artwork.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">by {artwork.artist}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{artwork.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{artwork.views}</span>
                        </div>
                      </div>
                      <span className="font-semibold text-primary">{artwork.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300">
              Load More Artworks
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}