"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Shield, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Typography Focus */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight"
              >
                Time&apos;s
                <br />
                <span className="text-accent">Elegant</span>
                <br />
                Legacy
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-muted-foreground max-w-md leading-relaxed"
              >
                Discover meticulously curated vintage timepieces that tell stories of craftsmanship, 
                precision, and timeless elegance. Each piece authenticated by horological experts.
              </motion.p>
            </div>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center space-x-8"
            >
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-accent" />
                <span>Authenticated</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Award className="w-4 h-4 text-accent" />
                <span>Expert Curation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-accent" />
                <span>Timeless Quality</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/collections"
                className="group inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Explore Collection
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all duration-300"
              >
                Authentication Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Watch Display */}
            <div className="relative">
              {/* Watch Face */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="relative w-80 h-80 mx-auto watch-face rounded-full flex items-center justify-center elegant-shadow"
              >
                {/* Watch Hands */}
                <div className="relative w-full h-full">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 w-0.5 h-24 bg-foreground origin-bottom transform -translate-x-1/2 -translate-y-full"
                  />
                  <motion.div
                    animate={{ rotate: 4320 }}
                    transition={{ duration: 3600, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-accent origin-bottom transform -translate-x-1/2 -translate-y-full"
                  />
                </div>
                
                {/* Hour Markers */}
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-6 bg-foreground/20 rounded-full"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-140px)`,
                      transformOrigin: "0 140px",
                    }}
                  />
                ))}
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-8 -right-8 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center"
              >
                <Clock className="w-8 h-8 text-accent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-8 -left-8 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center"
              >
                <Shield className="w-6 h-6 text-foreground" />
              </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-accent/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
      />
    </section>
  );
}
