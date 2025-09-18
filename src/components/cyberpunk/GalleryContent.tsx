"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Heart, 
  Eye, 
  Share2,
  Download,
  Zap,
  Palette,
  Brain,
  Cpu
} from "lucide-react";

const GalleryContent = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Artworks", icon: Palette, count: 247 },
    { id: "ai-generated", name: "AI Generated", icon: Brain, count: 89 },
    { id: "cyberpunk", name: "Cyberpunk", icon: Zap, count: 67 },
    { id: "abstract", name: "Abstract", icon: Cpu, count: 45 },
    { id: "3d", name: "3D Art", icon: Grid3X3, count: 46 },
  ];

  const artworks = [
    {
      id: 1,
      title: "Neon Dreams",
      artist: "CyberVision AI",
      category: "ai-generated",
      image: "https://maxm-imggenurl.web.val.run/cyberpunk neon cityscape with glowing towers and flying cars, digital art, high contrast, vibrant colors",
      price: "2.5 ETH",
      likes: 1247,
      views: 8934,
      description: "A mesmerizing journey through neon-lit streets of the future",
      tags: ["cyberpunk", "neon", "cityscape", "futuristic"],
    },
    {
      id: 2,
      title: "Digital Consciousness",
      artist: "Neural Network",
      category: "abstract",
      image: "https://maxm-imggenurl.web.val.run/abstract digital brain with glowing neural connections, cyberpunk style, electric blue and purple",
      price: "1.8 ETH",
      likes: 892,
      views: 5621,
      description: "Exploring the intersection of mind and machine",
      tags: ["abstract", "neural", "consciousness", "digital"],
    },
    {
      id: 3,
      title: "Holographic Entity",
      artist: "Quantum Artist",
      category: "3d",
      image: "https://maxm-imggenurl.web.val.run/holographic humanoid figure with glitch effects, transparent and glowing, futuristic background",
      price: "3.2 ETH",
      likes: 1856,
      views: 12043,
      description: "A being caught between dimensions",
      tags: ["3d", "hologram", "entity", "glitch"],
    },
    {
      id: 4,
      title: "Data Stream",
      artist: "Code Painter",
      category: "cyberpunk",
      image: "https://maxm-imggenurl.web.val.run/flowing streams of binary code and data, neon green and blue, matrix style, digital art",
      price: "1.5 ETH",
      likes: 634,
      views: 4287,
      description: "The beauty of information in motion",
      tags: ["data", "stream", "matrix", "code"],
    },
    {
      id: 5,
      title: "Cyber Samurai",
      artist: "Future Legends",
      category: "cyberpunk",
      image: "https://maxm-imggenurl.web.val.run/cyberpunk samurai warrior with glowing katana, neon armor, dark futuristic city background",
      price: "4.1 ETH",
      likes: 2341,
      views: 15672,
      description: "Honor meets technology in this stunning piece",
      tags: ["samurai", "warrior", "cyberpunk", "neon"],
    },
    {
      id: 6,
      title: "Quantum Flux",
      artist: "Particle Dreams",
      category: "abstract",
      image: "https://maxm-imggenurl.web.val.run/quantum particles and energy waves, colorful abstract patterns, scientific visualization art",
      price: "2.0 ETH",
      likes: 1123,
      views: 7891,
      description: "Visualizing the invisible forces of the universe",
      tags: ["quantum", "particles", "energy", "abstract"],
    },
    {
      id: 7,
      title: "Neural Pathways",
      artist: "AI Collective",
      category: "ai-generated",
      image: "https://maxm-imggenurl.web.val.run/complex neural network visualization with glowing nodes and connections, dark background",
      price: "2.8 ETH",
      likes: 1567,
      views: 9823,
      description: "Mapping the architecture of artificial intelligence",
      tags: ["neural", "ai", "network", "pathways"],
    },
    {
      id: 8,
      title: "Neon Genesis",
      artist: "Digital Prophet",
      category: "cyberpunk",
      image: "https://maxm-imggenurl.web.val.run/cyberpunk genesis scene with glowing geometric shapes and neon lights, dark atmosphere",
      price: "3.5 ETH",
      likes: 1890,
      views: 11234,
      description: "The birth of a new digital era",
      tags: ["genesis", "neon", "geometric", "birth"],
    },
    {
      id: 9,
      title: "Holographic Dreams",
      artist: "Virtual Visionary",
      category: "3d",
      image: "https://maxm-imggenurl.web.val.run/3d holographic landscape with floating islands and glowing crystals, ethereal atmosphere",
      price: "2.2 ETH",
      likes: 945,
      views: 6789,
      description: "A dreamscape rendered in pure light",
      tags: ["holographic", "dreams", "3d", "ethereal"],
    },
  ];

  const filteredArtworks = artworks.filter(artwork => {
    const matchesCategory = selectedCategory === "all" || artwork.category === selectedCategory;
    const matchesSearch = artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artwork.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10 cyber-grid">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/50">
              <Palette className="mr-2 h-4 w-4" />
              Digital Art Gallery
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="neon-text glitch-effect" data-text="EXPLORE">EXPLORE</span>{" "}
              <span className="text-accent">THE FUTURE</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover an extensive collection of cutting-edge digital art, AI-generated masterpieces, 
              and cyberpunk visuals that push the boundaries of creative expression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search artworks, artists, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card/50 border-primary/30 focus:border-primary"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-primary hover:bg-primary/80 neon-glow"
                      : "border-primary/30 hover:border-primary/50"
                  }`}
                >
                  <category.icon className="mr-2 h-4 w-4" />
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-primary hover:bg-primary/80" : ""}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-primary hover:bg-primary/80" : ""}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "all" ? "All Artworks" : categories.find(c => c.id === selectedCategory)?.name}
              <span className="text-muted-foreground ml-2">({filteredArtworks.length})</span>
            </h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>Sorted by popularity</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${viewMode}-${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-6"
              }
            >
              {filteredArtworks.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="group overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="relative overflow-hidden">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                          viewMode === "grid" ? "h-64" : "h-48"
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Overlay Actions */}
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Category Badge */}
                      <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                        {categories.find(c => c.id === artwork.category)?.name}
                      </Badge>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {artwork.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">by {artwork.artist}</p>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {artwork.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {artwork.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {artwork.views.toLocaleString()}
                            </span>
                            <span className="flex items-center">
                              <Heart className="h-4 w-4 mr-1" />
                              {artwork.likes.toLocaleString()}
                            </span>
                          </div>
                          <span className="text-primary font-bold">{artwork.price}</span>
                        </div>

                        <div className="flex space-x-2 pt-2">
                          <Button className="flex-1 bg-primary hover:bg-primary/80 neon-glow">
                            View Details
                          </Button>
                          <Button variant="outline" size="sm" className="px-3">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredArtworks.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-2">No artworks found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryContent;