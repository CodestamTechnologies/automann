"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Zap, Cpu, Brain, Shield, Code, Rocket, Star } from "lucide-react";
import Link from "next/link";

const techFeatures = [
  { icon: Brain, label: "AI Solutions", value: "99.9%" },
  { icon: Shield, label: "Security", value: "Enterprise" },
  { icon: Zap, label: "Performance", value: "10x Faster" },
];

const floatingElements = [
  { icon: Cpu, delay: 0, x: 20, y: 10 },
  { icon: Brain, delay: 0.5, x: -15, y: 20 },
  { icon: Code, delay: 1, x: 25, y: -10 },
  { icon: Rocket, delay: 1.5, x: -20, y: 15 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background cyber-grid">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-32 left-16 w-24 h-24 tech-gradient rounded-lg"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/4 w-16 h-16 border-2 border-accent/30 transform rotate-45"
        />

        {/* Floating Tech Icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 4,
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
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/20">
              <element.icon className="w-6 h-6 text-primary" />
            </div>
          </motion.div>
        ))}

        {/* Scan Lines */}
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
        />
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1.5,
          }}
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"
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
              <div className="flex items-center space-x-3">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                  <Star className="w-4 h-4 mr-2" />
                  Leading Innovation
                </Badge>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm">Live Status</span>
                </div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                The Future of
                <span className="block tech-gradient bg-clip-text text-transparent">
                  Technology
                </span>
                Starts Here
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Pioneering the next generation of AI, quantum computing, and digital transformation. 
                Join the revolution that&apos;s reshaping our world.
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
                className="tech-gradient hover:tech-glow text-primary-foreground border-0 group font-semibold"
                asChild
              >
                <Link href="/solutions">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 text-foreground hover:bg-primary/10 group"
                asChild
              >
                <Link href="/ai-lab">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Link>
              </Button>
            </motion.div>

            {/* Tech Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {techFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:tech-glow transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{feature.value}</div>
                  <div className="text-sm text-muted-foreground">{feature.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Tech Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Main Tech Image */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <img
                src="https://maxm-imggenurl.web.val.run/futuristic technology AI artificial intelligence quantum computing advanced robotics digital transformation"
                alt="Futuristic technology and AI innovation"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl border border-primary/20"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20 rounded-2xl" />
              
              {/* Holographic Overlay */}
              <div className="absolute inset-0 hologram rounded-2xl" />
            </motion.div>

            {/* Floating Tech Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-8 -right-8 z-20"
            >
              <Card className="p-6 bg-card/95 backdrop-blur-xl border border-primary/20 shadow-2xl tech-glow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">AI-Powered</div>
                    <div className="text-sm text-muted-foreground">Next-Gen Solutions</div>
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
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Enterprise</div>
                    <div className="text-sm text-muted-foreground">Security Grade</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Data Streams */}
            <motion.div
              animate={{ y: [0, -100, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/4 left-4 w-1 h-20 bg-gradient-to-b from-primary to-transparent opacity-60"
            />
            <motion.div
              animate={{ y: [0, 100, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
                delay: 1,
              }}
              className="absolute bottom-1/4 right-4 w-1 h-20 bg-gradient-to-t from-accent to-transparent opacity-60"
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
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
