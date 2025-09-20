"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Leaf, Heart, Users } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 elegant-pattern opacity-15" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
      
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
                  className="mx-auto w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center professional-glow"
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
                    Join Our
                    <span className="block professional-gradient bg-clip-text text-transparent">
                      Green Community
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Stay updated with the latest sustainable living tips, eco-friendly product launches, 
                    and environmental news. Be part of the change for a greener future.
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
                  <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-xl group hover:bg-primary/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:professional-glow transition-all duration-300">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Sustainability Tips</div>
                      <div className="text-sm text-muted-foreground">Weekly insights</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-xl group hover:bg-primary/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:professional-glow transition-all duration-300">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Product Updates</div>
                      <div className="text-sm text-muted-foreground">New arrivals</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-xl group hover:bg-primary/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:professional-glow transition-all duration-300">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Community Stories</div>
                      <div className="text-sm text-muted-foreground">Inspiration</div>
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
                      className="flex-1 bg-background/50 border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground rounded-xl"
                    />
                    <Button className="professional-gradient hover:professional-glow text-primary-foreground border-0 font-semibold px-8 rounded-xl">
                      <Leaf className="w-4 h-4 mr-2" />
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Join 10,000+ eco-conscious individuals. Unsubscribe at any time.
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
                      <span>10,000+ subscribers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Weekly tips</span>
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
