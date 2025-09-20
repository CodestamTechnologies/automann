"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, Twitter, Globe, Award } from "lucide-react";
import Link from "next/link";

const featuredArtists = [
  {
    id: 1,
    name: "Alex Chen",
    title: "Digital Visionary",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Pioneering the intersection of AI and traditional art, Alex creates mesmerizing digital experiences that challenge our perception of reality.",
    artworks: 47,
    followers: "125K",
    verified: true,
    specialties: ["AI Art", "Abstract", "Interactive"],
    social: {
      instagram: "@alexchen_art",
      twitter: "@alexchen_digital",
      website: "alexchen.art"
    }
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    title: "Neural Artist",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: "Maya combines machine learning algorithms with human creativity to produce stunning visual narratives that explore the future of consciousness.",
    artworks: 32,
    followers: "89K",
    verified: true,
    specialties: ["Neural Networks", "Sci-Fi", "Experimental"],
    social: {
      instagram: "@maya_neural",
      twitter: "@maya_ai_art",
      website: "mayaneural.com"
    }
  },
  {
    id: 3,
    name: "Jordan Kim",
    title: "Quantum Creator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Jordan&apos;s work explores the quantum realm through digital art, creating immersive experiences that visualize the unseen forces of the universe.",
    artworks: 28,
    followers: "156K",
    verified: true,
    specialties: ["Quantum Art", "Physics", "Immersive"],
    social: {
      instagram: "@jordan_quantum",
      twitter: "@jordan_physics",
      website: "quantumjordan.art"
    }
  }
];

export default function ArtistSpotlight() {
  return (
    <section className="py-24 bg-secondary/20">
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
            Artist <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Spotlight</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary creators pushing the boundaries of digital art and redefining what&apos;s possible
          </p>
        </motion.div>

        {/* Artists Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="digital-surface rounded-2xl p-8 hover:neon-glow transition-all duration-500 h-full">
                {/* Artist Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="relative">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    {artist.verified && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Award className="w-3 h-3 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {artist.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-2">
                      {artist.title}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{artist.artworks} artworks</span>
                      <span>{artist.followers} followers</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {artist.bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {artist.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3 mb-6">
                  <a
                    href={`https://instagram.com/${artist.social.instagram.replace('@', '')}`}
                    className="p-2 bg-secondary/50 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://twitter.com/${artist.social.twitter.replace('@', '')}`}
                    className="p-2 bg-secondary/50 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`https://${artist.social.website}`}
                    className="p-2 bg-secondary/50 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>

                {/* View Profile Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-foreground font-medium rounded-xl hover:from-primary/20 hover:to-accent/20 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Artists Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/artists"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent to-primary text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300"
          >
            <span>Discover All Artists</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}