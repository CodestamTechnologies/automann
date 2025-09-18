"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Layers, 
  Eye, 
  Heart, 
  Users, 
  TrendingUp,
  Star
} from "lucide-react";

const CollectionsContent = () => {
  const collections = [
    {
      id: 1,
      title: "Neon Genesis",
      description: "The birth of cyberpunk civilization through AI-generated masterpieces",
      artist: "CyberVision AI",
      coverImage: "https://maxm-imggenurl.web.val.run/cyberpunk genesis scene with glowing geometric shapes and neon lights, dark atmosphere, wide banner",
      itemCount: 100,
      floorPrice: "0.5 ETH",
      totalVolume: "245.7 ETH",
      owners: 87,
      createdAt: "2024-01-15",
      category: "AI Generated",
      featured: true,
      trending: true,
      items: [
        "https://maxm-imggenurl.web.val.run/cyberpunk neon cityscape with glowing towers, digital art",
        "https://maxm-imggenurl.web.val.run/futuristic robot with glowing eyes, cyberpunk style",
        "https://maxm-imggenurl.web.val.run/neon geometric patterns, abstract digital art",
        "https://maxm-imggenurl.web.val.run/cyberpunk street scene with holographic displays",
      ]
    },
    {
      id: 2,
      title: "Digital Consciousness",
      description: "Exploring the intersection of mind and machine through abstract neural art",
      artist: "Neural Network",
      coverImage: "https://maxm-imggenurl.web.val.run/abstract digital brain with glowing neural connections, cyberpunk style, banner format",
      itemCount: 50,
      floorPrice: "1.2 ETH",
      totalVolume: "156.3 ETH",
      owners: 42,
      createdAt: "2024-02-01",
      category: "Abstract",
      featured: true,
      trending: false,
      items: [
        "https://maxm-imggenurl.web.val.run/neural network visualization with glowing nodes",
        "https://maxm-imggenurl.web.val.run/abstract brain patterns, digital art",
        "https://maxm-imggenurl.web.val.run/consciousness visualization, glowing connections",
        "https://maxm-imggenurl.web.val.run/digital mind representation, cyberpunk style",
      ]
    },
    {
      id: 3,
      title: "Holographic Entities",
      description: "Beings caught between dimensions in stunning 3D holographic art",
      artist: "Quantum Artist",
      coverImage: "https://maxm-imggenurl.web.val.run/holographic humanoid figures with glitch effects, transparent and glowing, banner format",
      itemCount: 75,
      floorPrice: "0.8 ETH",
      totalVolume: "198.4 ETH",
      owners: 63,
      createdAt: "2024-01-28",
      category: "3D Art",
      featured: false,
      trending: true,
      items: [
        "https://maxm-imggenurl.web.val.run/holographic human silhouette, glowing transparent",
        "https://maxm-imggenurl.web.val.run/3d holographic entity with particle effects",
        "https://maxm-imggenurl.web.val.run/transparent glowing figure, cyberpunk background",
        "https://maxm-imggenurl.web.val.run/holographic being with digital distortion",
      ]
    },
    {
      id: 4,
      title: "Cyber Samurai",
      description: "Honor meets technology in this legendary warrior collection",
      artist: "Future Legends",
      coverImage: "https://maxm-imggenurl.web.val.run/cyberpunk samurai warriors with glowing katanas, neon armor, banner format",
      itemCount: 88,
      floorPrice: "2.1 ETH",
      totalVolume: "387.9 ETH",
      owners: 71,
      createdAt: "2024-01-10",
      category: "Character",
      featured: true,
      trending: false,
      items: [
        "https://maxm-imggenurl.web.val.run/cyberpunk samurai with glowing katana",
        "https://maxm-imggenurl.web.val.run/futuristic warrior in neon armor",
        "https://maxm-imggenurl.web.val.run/samurai robot with energy sword",
        "https://maxm-imggenurl.web.val.run/cyber warrior in dark city",
      ]
    },
    {
      id: 5,
      title: "Data Streams",
      description: "The beauty of information flow visualized in stunning digital art",
      artist: "Code Painter",
      coverImage: "https://maxm-imggenurl.web.val.run/flowing streams of binary code and data, neon green and blue, matrix style, banner",
      itemCount: 120,
      floorPrice: "0.3 ETH",
      totalVolume: "89.6 ETH",
      owners: 95,
      createdAt: "2024-02-10",
      category: "Generative",
      featured: false,
      trending: true,
      items: [
        "https://maxm-imggenurl.web.val.run/binary code streams, matrix style",
        "https://maxm-imggenurl.web.val.run/data flow visualization, neon colors",
        "https://maxm-imggenurl.web.val.run/information streams, digital art",
        "https://maxm-imggenurl.web.val.run/code patterns, cyberpunk aesthetic",
      ]
    },
    {
      id: 6,
      title: "Quantum Realms",
      description: "Visualizing the invisible forces of quantum physics through art",
      artist: "Particle Dreams",
      coverImage: "https://maxm-imggenurl.web.val.run/quantum particles and energy waves, colorful abstract patterns, banner format",
      itemCount: 60,
      floorPrice: "1.5 ETH",
      totalVolume: "234.8 ETH",
      owners: 48,
      createdAt: "2024-01-20",
      category: "Physics Art",
      featured: false,
      trending: false,
      items: [
        "https://maxm-imggenurl.web.val.run/quantum particles visualization",
        "https://maxm-imggenurl.web.val.run/energy waves, colorful abstract",
        "https://maxm-imggenurl.web.val.run/particle physics art, glowing",
        "https://maxm-imggenurl.web.val.run/quantum field visualization",
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-background to-primary/10 cyber-grid">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4 text-accent border-accent/50">
              <Layers className="mr-2 h-4 w-4" />
              Curated Collections
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-accent">DIGITAL</span>{" "}
              <span className="neon-text glitch-effect" data-text="COLLECTIONS">COLLECTIONS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover carefully curated collections of digital art that tell stories, 
              explore themes, and push the boundaries of creative expression in our cyberpunk universe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Featured</span> Collections
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked collections that showcase the best of digital art and cyberpunk aesthetics
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {collections.filter(c => c.featured).map((collection) => (
              <motion.div 
                key={collection.id} 
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className="group overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={collection.coverImage}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        <Star className="mr-1 h-3 w-3" />
                        Featured
                      </Badge>
                      {collection.trending && (
                        <Badge className="bg-accent/90 text-accent-foreground">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          Trending
                        </Badge>
                      )}
                    </div>

                    {/* Preview Items */}
                    <div className="absolute bottom-4 right-4 flex -space-x-2">
                      {collection.items.slice(0, 3).map((item, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 rounded-lg border-2 border-background overflow-hidden"
                        >
                          <img
                            src={item}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                      <div className="w-12 h-12 rounded-lg border-2 border-background bg-card/80 backdrop-blur-sm flex items-center justify-center text-xs font-bold">
                        +{collection.itemCount - 3}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {collection.title}
                          </h3>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {collection.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">by {collection.artist}</p>
                      </div>

                      <p className="text-muted-foreground">
                        {collection.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-4 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-primary">{collection.itemCount}</div>
                          <div className="text-xs text-muted-foreground">Items</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-accent">{collection.owners}</div>
                          <div className="text-xs text-muted-foreground">Owners</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-chart-3">{collection.floorPrice}</div>
                          <div className="text-xs text-muted-foreground">Floor</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-chart-4">{collection.totalVolume}</div>
                          <div className="text-xs text-muted-foreground">Volume</div>
                        </div>
                      </div>

                      <div className="flex space-x-2 pt-4">
                        <Button className="flex-1 bg-primary hover:bg-primary/80 neon-glow">
                          <Eye className="mr-2 h-4 w-4" />
                          Explore Collection
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
        </div>
      </section>

      {/* All Collections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All Collections
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our complete catalog of digital art collections
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {collections.map((collection) => (
              <motion.div 
                key={collection.id} 
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className="group overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={collection.coverImage}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    
                    {collection.trending && (
                      <Badge className="absolute top-4 left-4 bg-accent/90 text-accent-foreground">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        Trending
                      </Badge>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {collection.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">by {collection.artist}</p>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {collection.description}
                      </p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <span className="flex items-center">
                            <Layers className="h-4 w-4 mr-1" />
                            {collection.itemCount}
                          </span>
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {collection.owners}
                          </span>
                        </div>
                        <span className="text-primary font-bold">{collection.floorPrice}</span>
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary/80">
                        <Eye className="mr-2 h-4 w-4" />
                        View Collection
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card/20 backdrop-blur-sm rounded-lg border border-primary/20 p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary neon-text mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {collections.length}
                </motion.div>
                <p className="text-sm text-muted-foreground">Total Collections</p>
              </div>
              <div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-accent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  {collections.reduce((sum, c) => sum + c.itemCount, 0)}
                </motion.div>
                <p className="text-sm text-muted-foreground">Total Artworks</p>
              </div>
              <div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-chart-3 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  {collections.reduce((sum, c) => sum + c.owners, 0)}
                </motion.div>
                <p className="text-sm text-muted-foreground">Unique Owners</p>
              </div>
              <div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-chart-4 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  1.2K+
                </motion.div>
                <p className="text-sm text-muted-foreground">Total Volume (ETH)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CollectionsContent;