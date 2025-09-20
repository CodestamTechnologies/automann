"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Eye, Download } from "lucide-react";
import Link from "next/link";

const featuredArtworks = [
  {
    id: 1,
    title: "Digital Symphony",
    artist: "Alex Chen",
    image: "https://maxm-imggenurl.web.val.run/abstract digital art with flowing colors and musical notes, cyberpunk style",
    category: "Abstract",
    likes: 1247,
    views: 8932,
    price: "0.5 ETH",
  },
  {
    id: 2,
    title: "Neural Networks",
    artist: "Maya Rodriguez",
    image: "https://maxm-imggenurl.web.val.run/futuristic neural network visualization with glowing connections, digital art",
    category: "AI Generated",
    likes: 2156,
    views: 15678,
    price: "1.2 ETH",
  },
  {
    id: 3,
    title: "Quantum Dreams",
    artist: "Jordan Kim",
    image: "https://maxm-imggenurl.web.val.run/quantum physics inspired digital art with particle effects and cosmic colors",
    category: "Sci-Fi",
    likes: 3421,
    views: 22345,
    price: "2.1 ETH",
  },
  {
    id: 4,
    title: "Cyber Garden",
    artist: "Luna Park",
    image: "https://maxm-imggenurl.web.val.run/cyberpunk garden with neon plants and digital flowers, futuristic nature",
    category: "Nature",
    likes: 1876,
    views: 12456,
    price: "0.8 ETH",
  },
];

export default function FeaturedArt() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Artworks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the most captivating digital masterpieces from our community of visionary artists
          </p>
        </motion.div>

        {/* Artworks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
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
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:text-accent transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:text-primary transition-colors"
                    >
                      <Download className="w-4 h-4" />
                    </motion.button>
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
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {artwork.title}
                    </h3>
                    <p className="text-muted-foreground">by {artwork.artist}</p>
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

                  {/* View Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-foreground font-medium rounded-xl hover:from-primary/20 hover:to-accent/20 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300"
          >
            <span>Explore All Artworks</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}