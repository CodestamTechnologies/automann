"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Palette, Camera, Heart } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 artistic-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-2xl bg-card/90 backdrop-blur-xl overflow-hidden border border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-8">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mx-auto w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center elegant-glow"
                >
                  <Mail className="w-10 h-10 text-primary" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                    Stay Inspired with
                    <span className="block elegant-gradient bg-clip-text text-transparent">
                      Creative Updates
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Join our creative community and receive exclusive updates on new artworks, 
                    behind-the-scenes content, and special offers on our artistic services.
                  </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-3 gap-6 my-12"
                >
                  <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-2xl group hover:bg-primary/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:elegant-glow transition-all duration-300">
                      <Palette className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">New Artworks</div>
                      <div className="text-sm text-muted-foreground">Latest creations</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-2xl group hover:bg-primary/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:elegant-glow transition-all duration-300">
                      <Camera className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Behind Scenes</div>
                      <div className="text-sm text-muted-foreground">Creative process</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-2xl group hover:bg-primary/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:elegant-glow transition-all duration-300">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Special Offers</div>
                      <div className="text-sm text-muted-foreground">Exclusive deals</div>
                    </div>
                  </div>
                </motion.div>

                {/* Newsletter Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 bg-background/50 border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground rounded-full"
                    />
                    <Button className="elegant-gradient hover:elegant-glow text-primary-foreground border-0 font-semibold px-8 rounded-full">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Join 2,000+ art enthusiasts. Unsubscribe at any time.
                  </p>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="pt-8 border-t border-border/50"
                >
                  <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>2,000+ subscribers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Monthly updates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span>No spam, ever</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
