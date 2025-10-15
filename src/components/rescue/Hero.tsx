"use client";

import { motion } from "framer-motion";
import { Heart, ArrowDown, Phone } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 warm-pattern opacity-40" />
      <div className="absolute inset-0 soft-texture opacity-30" />
      
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-60 h-60 bg-accent/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Main Story Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-8 h-8 text-primary" />
              </motion.div>
              <span className="text-lg font-medium text-primary uppercase tracking-wider">
                Every Life Matters
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className="block text-foreground">Giving</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Hope
              </span>
              <span className="block text-foreground">to Every</span>
              <span className="block text-foreground">Paw</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Paws & Hearts, we believe every animal deserves love, care, and a forever home. 
              Join us in our mission to rescue, rehabilitate, and rehome animals in need.
            </p>
          </motion.div>

          {/* Story Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-sm text-muted-foreground">Animals Rescued</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1,800+</div>
              <div className="text-sm text-muted-foreground">Happy Adoptions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/adoption"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 soft-glow"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <Heart className="w-5 h-5" />
                <span>Find Your Perfect Pet</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </Link>
            
            <Link
              href="/volunteer"
              className="group inline-flex items-center justify-center px-10 py-4 border-2 border-primary/30 text-foreground font-semibold rounded-2xl hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
            >
              <span className="flex items-center space-x-3">
                <span>Volunteer With Us</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="rescue-card rounded-2xl p-6 max-w-md mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Emergency Rescue</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Found an animal in distress? We&apos;re here 24/7
            </p>
            <a
              href="tel:5551234357"
              className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(555) 123-HELP</span>
            </a>
          </motion.div>
        </div>
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
          className="w-8 h-12 border-2 border-primary/30 rounded-full flex justify-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-4 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-6 h-6 bg-primary/20 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-accent/20 rounded-full"
        animate={{
          y: [0, 30, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}



