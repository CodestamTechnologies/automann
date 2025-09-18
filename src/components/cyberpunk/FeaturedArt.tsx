"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Share2, Zap } from "lucide-react";
import Link from "next/link";

const FeaturedArt = () => {
  const artworks = [
    {
      id: 1,
      title: "Neon Dreams",
      artist: "CyberVision AI",
      category: "AI Generated",
      image: "https://maxm-imggenurl.web.val.run/cyberpunk neon cityscape with glowing towers and flying cars, digital art, high contrast, vibrant colors",
      price: "2.5 ETH",
      likes: 1247,
      views: 8934,
      description: "A mesmerizing journey through neon-lit streets of the future",
    },
    {
      id: 2,
      title: "Digital Consciousness",
      artist: "Neural Network",
      category: "Abstract",
      image: "https://maxm-imggenurl.web.val.run/abstract digital brain with glowing neural connections, cyberpunk style, electric blue and purple",
      price: "1.8 ETH",
      likes: 892,
      views: 5621,
      description: "Exploring the intersection of mind and machine",
    },
    {
      id: 3,
      title: "Holographic Entity",
      artist: "Quantum Artist",
      category: "3D Art",
      image: "https://maxm-imggenurl.web.val.run/holographic humanoid figure with glitch effects, transparent and glowing, futuristic background",
      price: "3.2 ETH",
      likes: 1856,
      views: 12043,
      description: "A being caught between dimensions",
    },
    {
      id: 4,
      title: "Data Stream",
      artist: "Code Painter",
      category: "Generative",
      image: "https://maxm-imggenurl.web.val.run/flowing streams of binary code and data, neon green and blue, matrix style, digital art",
      price: "1.5 ETH",
      likes: 634,
      views: 4287,
      description: "The beauty of information in motion",
    },
    {
      id: 5,
      title: "Cyber Samurai",
      artist: "Future Legends",
      category: "Character",
      image: "https://maxm-imggenurl.web.val.run/cyberpunk samurai warrior with glowing katana, neon armor, dark futuristic city background",
      price: "4.1 ETH",
      likes: 2341,
      views: 15672,
      description: "Honor meets technology in this stunning piece",
    },
    {
      id: 6,
      title: "Quantum Flux",
      artist: "Particle Dreams",
      category: "Physics Art",
      image: "https://maxm-imggenurl.web.val.run/quantum particles and energy waves, colorful abstract patterns, scientific visualization art",
      price: "2.0 ETH",
      likes: 1123,
      views: 7891,
      description: "Visualizing the invisible forces of the universe",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/50">
            <Zap className="mr-2 h-4 w-4" />
            Featured Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Digital</span>{" "}
            <span className="text-accent">Masterpieces</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover extraordinary digital artworks that push the boundaries of creativity and technology. Each piece tells a unique story in our cyberpunk universe.
          </p>
        </motion.div>

        {/* Artworks Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {artworks.map((artwork) => (
            <motion.div 
              key={artwork.id} 
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
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
                  </div>

                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                    {artwork.category}
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
                      <Link href={`/artwork/${artwork.id}`} className="flex-1">
                        <Button className="w-full bg-primary hover:bg-primary/80 neon-glow">
                          View Details
                        </Button>
                      </Link>
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/gallery">
            <Button
              size="lg"
              variant="outline"
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4"
            >
              Explore Full Gallery
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArt;