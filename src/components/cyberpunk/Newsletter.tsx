"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Bell,
  Gift
} from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");
  };

  const benefits = [
    {
      icon: Sparkles,
      title: "Exclusive Drops",
      description: "First access to new digital art collections",
    },
    {
      icon: Bell,
      title: "Artist Updates",
      description: "Behind-the-scenes content from featured creators",
    },
    {
      icon: Gift,
      title: "Special Offers",
      description: "Subscriber-only discounts and promotions",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 border border-accent/30"
        animate={{
          rotate: [0, 360],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Header */}
          <Badge variant="outline" className="mb-6 text-primary border-primary/50">
            <Mail className="mr-2 h-4 w-4" />
            Stay Connected
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Join the</span>{" "}
            <span className="text-accent">Digital Revolution</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to discover groundbreaking digital art, 
            exclusive collections, and cutting-edge technology updates.
          </p>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="bg-card/30 backdrop-blur-sm rounded-lg border border-primary/20 p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-lg bg-primary/10 mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-card/20 backdrop-blur-sm rounded-lg border border-primary/20 p-8"
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background/50 border-primary/30 focus:border-primary"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary hover:bg-primary/80 neon-glow whitespace-nowrap"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="h-4 w-4 mr-2" />
                      </motion.div>
                    ) : (
                      <Mail className="h-4 w-4 mr-2" />
                    )}
                    {isLoading ? "Subscribing..." : "Subscribe"}
                    {!isLoading && <ArrowRight className="h-4 w-4 ml-2" />}
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Join 50,000+ digital art enthusiasts. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle className="h-16 w-16 text-primary mx-auto neon-glow" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-primary">Welcome to the Future!</h3>
                <p className="text-muted-foreground">
                  You&apos;re now part of our exclusive digital art community. 
                  Check your inbox for a special welcome gift!
                </p>
                
                <div className="flex justify-center space-x-4 pt-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Gift className="mr-1 h-3 w-3" />
                    Welcome Gift Sent
                  </Badge>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    <Sparkles className="mr-1 h-3 w-3" />
                    VIP Access Granted
                  </Badge>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                  />
                ))}
              </div>
              <span>50,000+ subscribers</span>
            </div>
            
            <div className="flex items-center">
              <Zap className="h-4 w-4 text-primary mr-2" />
              <span>Weekly updates</span>
            </div>
            
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-accent mr-2" />
              <span>No spam, ever</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;