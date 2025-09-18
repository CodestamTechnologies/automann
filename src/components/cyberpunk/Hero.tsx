"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-primary/5" />
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 border-2 border-accent/40"
        animate={{
          rotate: [0, 360],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-primary/80 text-lg md:text-xl font-medium tracking-wider uppercase"
          >
            Welcome to the Future
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="block neon-text glitch-effect" data-text="DIGITAL">
              DIGITAL
            </span>
            <span className="block text-accent mt-2">ART</span>
            <span className="block text-primary/80 text-3xl md:text-4xl lg:text-5xl mt-4">
              REVOLUTION
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Immerse yourself in a cyberpunk universe where{" "}
            <span className="text-primary">artificial intelligence</span> meets{" "}
            <span className="text-accent">human creativity</span>. Explore cutting-edge digital art that pushes the boundaries of imagination.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <Link href="/gallery">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 text-lg neon-glow"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore Gallery
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link href="/ai-art">
              <Button
                variant="outline"
                size="lg"
                className="group border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg"
              >
                <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                AI Creations
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary/20"
          >
            <div className="text-center">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-primary neon-text"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                500+
              </motion.div>
              <p className="text-muted-foreground mt-2">Digital Artworks</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-accent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                50+
              </motion.div>
              <p className="text-muted-foreground mt-2">AI Collections</p>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl md:text-4xl font-bold text-primary"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                24/7
              </motion.div>
              <p className="text-muted-foreground mt-2">Creative Flow</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hologram Effect Overlay */}
      <div className="absolute inset-0 hologram opacity-10 pointer-events-none" />
    </section>
  );
};

export default Hero;