"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Palette, Camera, Brush, PenTool, Award } from "lucide-react";
import Link from "next/link";

const creativeStats = [
  { icon: Palette, label: "Artworks", value: "500+" },
  { icon: Camera, label: "Photography", value: "1000+" },
  { icon: Brush, label: "Projects", value: "200+" },
];

const floatingElements = [
  { icon: Palette, delay: 0, x: 30, y: 15 },
  { icon: Camera, delay: 0.7, x: -20, y: 25 },
  { icon: Brush, delay: 1.4, x: 35, y: -15 },
  { icon: PenTool, delay: 2.1, x: -25, y: 20 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background artistic-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Artistic Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-40 h-40 border border-primary/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-32 left-16 w-32 h-32 elegant-gradient rounded-2xl"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-accent/30 transform rotate-45"
        />

        {/* Floating Creative Icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 5,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{
              left: `${50 + element.x}%`,
              top: `${40 + element.y}%`,
            }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20">
              <element.icon className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
        ))}

        {/* Artistic Flow Lines */}
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"
        />
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 mr-2" />
                  Award-Winning Studio
                </Badge>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm">Available for Commissions</span>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Where Art Meets
                <span className="block elegant-gradient bg-clip-text text-transparent">
                  Imagination
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Discover exceptional creative arts and design services. From fine art to digital design, 
                we bring your vision to life with unparalleled craftsmanship and artistic excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="elegant-gradient hover:elegant-glow text-primary-foreground border-0 group font-semibold rounded-full"
                asChild
              >
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-foreground hover:bg-primary/10 group rounded-full"
                asChild
              >
                <Link href="/gallery">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  View Gallery
                </Link>
              </Button>
            </motion.div>

            {/* Creative Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {creativeStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:elegant-glow transition-all duration-300">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Artistic Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Main Artwork Image */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                rotateY: [0, 3, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <img
                src="https://maxm-imggenurl.web.val.run/elegant creative arts fine art painting artistic studio sophisticated design"
                alt="Elegant creative arts and fine art showcase"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl border border-primary/20"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20 rounded-3xl" />
              
              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 sophisticated-overlay rounded-3xl" />
            </motion.div>

            {/* Floating Art Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-8 -right-8 z-20"
            >
              <Card className="p-6 bg-card/95 backdrop-blur-xl border border-primary/20 shadow-2xl elegant-glow">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <Palette className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Fine Art</div>
                    <div className="text-sm text-muted-foreground">Original Paintings</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 z-20"
            >
              <Card className="p-6 bg-card/95 backdrop-blur-xl border border-accent/20 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <Camera className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Photography</div>
                    <div className="text-sm text-muted-foreground">Artistic Shots</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Artistic Flow Elements */}
            <motion.div
              animate={{ y: [0, -120, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/4 left-4 w-1 h-24 bg-gradient-to-b from-primary to-transparent opacity-40"
            />
            <motion.div
              animate={{ y: [0, 120, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
              className="absolute bottom-1/4 right-4 w-1 h-24 bg-gradient-to-t from-accent to-transparent opacity-40"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
