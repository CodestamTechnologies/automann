"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Compass, Ruler } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 architectural-texture opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-accent/20 geometric-rotate"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-accent/10 geometric-rotate-alt"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-16 h-16 border border-muted-foreground/30"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-20 h-20 bg-muted/20 geometric-rotate"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="architectural-layout items-center">
          {/* Left Column - Main Content */}
          <motion.div
            className="span-6 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Building2 className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-[0.2em]">
                Modern Architecture
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight architectural-spacing">
                <span className="block">DESIGNING</span>
                <span className="block text-accent">FUTURES</span>
                <span className="block text-muted-foreground">THROUGH</span>
                <span className="block">ARCHITECTURE</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              We create innovative architectural solutions that blend functionality with aesthetic excellence, 
              transforming spaces into inspiring environments that stand the test of time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link
                href="/projects"
                className="group flex items-center justify-center space-x-3 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 architectural-shadow hover:architectural-pulse"
              >
                <span className="font-semibold text-lg">View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="group flex items-center justify-center space-x-3 px-8 py-4 border-2 border-foreground text-foreground rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <span className="font-semibold text-lg">Learn More</span>
                <Compass className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">150+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">25</div>
                <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">Awards</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            className="span-6 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Main Image Container */}
            <motion.div
              className="relative architectural-frame p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center"
                alt="Modern architectural building design"
                className="w-full h-96 object-cover rounded-lg"
                loading="eager"
              />
              {/* Overlay Elements */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 bg-accent/90 flex items-center justify-center rounded-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Ruler className="w-6 h-6 text-accent-foreground" />
              </motion.div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-48 h-32 design-card p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-accent/20 rounded flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-accent" />
                </div>
                <span className="font-semibold text-sm">Sustainable Design</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Eco-friendly architectural solutions for a better tomorrow.
              </p>
            </motion.div>

            <motion.div
              className="absolute -top-8 -right-8 w-40 h-24 design-card p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-6 h-6 bg-accent/20 rounded flex items-center justify-center">
                  <Compass className="w-3 h-3 text-accent" />
                </div>
                <span className="font-semibold text-xs">Innovation</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Cutting-edge design approaches.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section Divider */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px section-divider"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
      />
    </section>
  );
}
