"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Palette, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 holographic-pattern opacity-30" />
      <div className="absolute inset-0 pixel-grid opacity-20" />
      
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="asymmetric-grid items-center gap-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Digital Art Revolution
                </span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="block text-foreground">Where</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Art Meets
                </span>
                <span className="block text-foreground">Technology</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Explore the future of digital creativity through our curated collection of 
                AI-generated masterpieces, interactive installations, and cutting-edge 
                artistic expressions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/gallery"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Explore Gallery</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </Link>
              
              <Link
                href="/ai-lab"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-primary/30 text-foreground font-semibold rounded-xl hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Create Art</span>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="lg:col-span-1 space-y-8">
            {/* Featured Artwork Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="artwork-frame rounded-2xl p-6 space-y-4"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-xl relative overflow-hidden">
                <img
                  src="https://maxm-imggenurl.web.val.run/abstract digital art with neon colors and geometric shapes, futuristic style"
                  alt="Featured Digital Artwork"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  &quot;Neon Dreams&quot;
                </h3>
                <p className="text-sm text-muted-foreground">
                  AI-Generated • 2024
                </p>
                <div className="flex items-center space-x-2">
                  <Palette className="w-4 h-4 text-primary" />
                  <span className="text-xs text-primary">Featured Collection</span>
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="digital-surface rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary">2.5K+</div>
                <div className="text-xs text-muted-foreground">Artworks</div>
              </div>
              <div className="digital-surface rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-accent">150+</div>
                <div className="text-xs text-muted-foreground">Artists</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-accent rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}