"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Leaf, Heart, Users, Award, ShoppingBag } from "lucide-react";
import Link from "next/link";

const ecoStats = [
  { icon: Leaf, label: "Eco Products", value: "500+" },
  { icon: Heart, label: "Happy Customers", value: "10K+" },
  { icon: Users, label: "Community", value: "25K+" },
];

const floatingElements = [
  { icon: Award, delay: 0, x: 30, y: 20 },
  { icon: Heart, delay: 1.2, x: -25, y: 30 },
  { icon: Users, delay: 2.4, x: 35, y: -15 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background elegant-pattern">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elegant Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-40 h-40 border-2 border-primary/15 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-32 left-16 w-32 h-32 professional-gradient rounded-2xl transform rotate-6"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-accent/25 transform rotate-12"
        />

        {/* Floating Professional Icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 10,
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
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary/15">
              <element.icon className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
        ))}

        {/* Professional Flow Lines */}
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"
        />
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"
        />

        {/* Professional Texture Pattern */}
        <div className="absolute inset-0 texture-pattern opacity-5" />
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
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 mr-2" />
                  Certified Sustainable
                </Badge>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm">100% Eco-Friendly</span>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                LIVE SUSTAINABLY,
                <span className="block professional-gradient bg-clip-text text-transparent">
                  LOVE NATURALLY
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Discover eco-friendly products and sustainable living solutions that help you 
                reduce your environmental footprint while embracing a healthier, more conscious lifestyle.
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
                className="professional-gradient hover:professional-glow text-primary-foreground border-0 group font-semibold rounded-xl"
                asChild
              >
                <Link href="/products">
                  <ShoppingBag className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Shop Eco Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-foreground hover:bg-primary/10 group rounded-xl"
                asChild
              >
                <Link href="/lifestyle">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Learn More
                </Link>
              </Button>
            </motion.div>

            {/* Eco Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {ecoStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:professional-glow transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Natural Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Main Product Image */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 2, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <img
                src="https://maxm-imggenurl.web.val.run/sustainable living eco friendly products natural organic lifestyle clean modern home"
                alt="Sustainable living and eco-friendly products"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl border border-primary/30"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20 rounded-3xl" />
              
              {/* Professional Overlay */}
              <div className="absolute inset-0 sophisticated-overlay rounded-3xl" />
            </motion.div>

            {/* Floating Info Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-8 -right-8 z-20"
            >
              <Card className="p-6 bg-card/95 backdrop-blur-xl border border-primary/30 shadow-2xl professional-glow">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">100% Natural</div>
                    <div className="text-sm text-muted-foreground">Certified Organic</div>
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
              <Card className="p-6 bg-card/95 backdrop-blur-xl border border-accent/30 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Eco-Friendly</div>
                    <div className="text-sm text-muted-foreground">Zero Waste</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Professional Flow Elements */}
            <motion.div
              animate={{ y: [0, -80, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/4 left-4 w-1 h-24 bg-gradient-to-b from-primary to-transparent opacity-30"
            />
            <motion.div
              animate={{ y: [0, 80, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "linear",
                delay: 2.5,
              }}
              className="absolute bottom-1/4 right-4 w-1 h-24 bg-gradient-to-t from-accent to-transparent opacity-30"
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
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}