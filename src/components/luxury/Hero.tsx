"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, MapPin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://maxm-imggenurl.web.val.run/luxury mountain resort, snow-capped peaks, alpine landscape, golden hour lighting, premium hotel, dramatic mountain vista"
          alt="Luxury Alpine Resort with Snow-Capped Mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 luxury-gradient opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 border border-primary/30 rounded-full"
        ></motion.div>
      </div>
      
      <div className="absolute bottom-20 right-10 opacity-20">
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-24 h-24 border border-primary/30 rounded-full"
        ></motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 alpine-blur rounded-full luxury-border"
          >
            <Star className="h-4 w-4 text-primary fill-current" />
            <span className="text-sm font-medium text-foreground">World&apos;s Premier Mountain Adventures</span>
            <Star className="h-4 w-4 text-primary fill-current" />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Luxury</span>{" "}
              <span className="text-gradient-gold">Alpine</span>
              <br />
              <span className="text-white">Adventures</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Experience the world&apos;s most exclusive mountain destinations with unparalleled luxury, 
              personalized service, and breathtaking alpine vistas.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-white/80"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm">Premium Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10k+</div>
              <div className="text-sm">Satisfied Adventurers</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/destinations"
              className="group inline-flex items-center space-x-2 px-8 py-4 gold-gradient text-primary-foreground rounded-xl font-semibold text-lg alpine-glow hover:shadow-xl transition-all duration-300 luxury-hover"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group inline-flex items-center space-x-2 px-8 py-4 alpine-blur text-white rounded-xl font-semibold text-lg luxury-border hover:bg-white/10 transition-all duration-300">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Watch Experience</span>
            </button>
          </motion.div>

          {/* Location Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center justify-center space-x-2 text-white/70"
          >
            <MapPin className="h-4 w-4" />
            <span className="text-sm">Swiss Alps • Canadian Rockies • Himalayas • Patagonia</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}