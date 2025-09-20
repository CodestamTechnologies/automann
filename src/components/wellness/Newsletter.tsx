"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Heart, Gift, Sparkles } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-2xl bg-card/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
                >
                  <Mail className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                    Stay Connected to Your Wellness Journey
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Join our mindful community and receive weekly insights, wellness tips, 
                    and exclusive access to new programs and special offers.
                  </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-3 gap-4 my-8"
                >
                  <div className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                    <Heart className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Wellness Tips</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                    <Gift className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Exclusive Offers</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">New Programs</span>
                  </div>
                </motion.div>

                {/* Newsletter Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 bg-background/50 border-border/50 focus:border-primary"
                    />
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="pt-6 border-t border-border/50"
                >
                  <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>10,000+ subscribers</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Weekly insights</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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
