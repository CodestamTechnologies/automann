"use client";

import { motion } from "framer-motion";
import { Heart, Sun, Leaf, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const WellnessTips = () => {
  const tips = [
    {
      id: 1,
      title: "Morning Mindfulness Routine",
      excerpt: "Start your day with intention and gratitude for a more balanced life.",
      image: "https://maxm-imggenurl.web.val.run/peaceful morning meditation scene, person sitting cross-legged in sunlight, plants around, serene atmosphere, natural lighting",
      category: "Mindfulness",
      readTime: "5 min read",
      icon: Sun,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      id: 2,
      title: "Plant-Based Nutrition Guide",
      excerpt: "Discover the power of whole foods for optimal health and environmental impact.",
      image: "https://maxm-imggenurl.web.val.run/colorful plant-based meal prep bowls, fresh vegetables, grains, healthy eating, vibrant natural foods",
      category: "Nutrition",
      readTime: "8 min read",
      icon: Leaf,
      color: "bg-green-100 text-green-600"
    },
    {
      id: 3,
      title: "Natural Stress Relief Methods",
      excerpt: "Learn gentle, natural techniques to manage stress and promote inner peace.",
      image: "https://maxm-imggenurl.web.val.run/aromatherapy essential oils setup, lavender, candles, peaceful spa-like environment, natural wellness",
      category: "Wellness",
      readTime: "6 min read",
      icon: Heart,
      color: "bg-pink-100 text-pink-600"
    }
  ];

  const quickTips = [
    "Drink a glass of water first thing in the morning",
    "Take 5 deep breaths before meals",
    "Spend 10 minutes in nature daily",
    "Practice gratitude before bed",
    "Choose one eco-friendly swap each week"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="h-4 w-4" />
            <span>Wellness &amp; Lifestyle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nurture Your Well-being
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover simple, natural ways to enhance your physical and mental wellness while living sustainably.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Featured Articles */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {tips.map((tip, index) => (
                <motion.article
                  key={tip.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group bg-card rounded-2xl overflow-hidden organic-shadow hover:shadow-lg transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="relative h-64 md:h-full overflow-hidden">
                        <motion.img
                          src={tip.image}
                          alt={tip.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                        />
                        <div className="absolute top-4 left-4">
                          <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${tip.color}`}>
                            <tip.icon className="h-3 w-3" />
                            <span>{tip.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                        <Clock className="h-4 w-4" />
                        <span>{tip.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {tip.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {tip.excerpt}
                      </p>
                      
                      <Link href={`/wellness/${tip.id}`}>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Tips */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 organic-shadow"
            >
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center space-x-2">
                <Heart className="h-5 w-5 text-primary" />
                <span>Daily Wellness Tips</span>
              </h3>
              
              <div className="space-y-3">
                {quickTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-earth rounded-2xl p-6 text-white"
            >
              <h3 className="text-lg font-bold mb-3">
                Weekly Wellness Newsletter
              </h3>
              
              <p className="text-white/90 text-sm mb-4">
                Get sustainable living tips and wellness insights delivered to your inbox.
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-primary py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>

            {/* Featured Product */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-2xl overflow-hidden organic-shadow"
            >
              <img
                src="https://maxm-imggenurl.web.val.run/essential oil diffuser with plants, aromatherapy setup, wellness products, natural home spa"
                alt="Essential Oil Diffuser"
                className="w-full h-32 object-cover"
              />
              
              <div className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Essential Oil Diffuser
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Create a calming atmosphere with our bamboo ultrasonic diffuser.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">$45</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Shop Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessTips;