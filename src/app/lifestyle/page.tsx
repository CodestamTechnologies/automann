"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/eco/Navbar";
import Footer from "@/components/eco/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Heart, Users, Award, ArrowRight, Star, Clock, BookOpen } from "lucide-react";
import Link from "next/link";

const lifestyleCategories = {
  "tips": [
    {
      id: 1,
      title: "10 Simple Ways to Reduce Plastic Waste",
      description: "Easy everyday changes that can significantly reduce your plastic footprint and help protect our oceans.",
      category: "Zero Waste",
      readTime: "5 min read",
      image: "https://maxm-imggenurl.web.val.run/zero waste plastic reduction sustainable living tips eco friendly lifestyle",
      icon: Leaf,
      difficulty: "Beginner",
      tags: ["Plastic", "Zero Waste", "Beginner"]
    },
    {
      id: 2,
      title: "Creating a Sustainable Home Garden",
      description: "Learn how to grow your own organic vegetables and herbs while supporting local biodiversity.",
      category: "Gardening",
      readTime: "8 min read",
      image: "https://maxm-imggenurl.web.val.run/sustainable home garden organic vegetables herbs eco friendly gardening",
      icon: Heart,
      difficulty: "Intermediate",
      tags: ["Gardening", "Organic", "Home"]
    }
  ],
  "recipes": [
    {
      id: 3,
      title: "Plant-Based Meal Prep for the Week",
      description: "Nutritious and delicious plant-based recipes that are perfect for meal prepping and reducing food waste.",
      category: "Nutrition",
      readTime: "12 min read",
      image: "https://maxm-imggenurl.web.val.run/plant based meal prep nutritious recipes sustainable cooking eco friendly",
      icon: Users,
      difficulty: "Beginner",
      tags: ["Plant-Based", "Meal Prep", "Nutrition"]
    },
    {
      id: 4,
      title: "Homemade Natural Cleaning Solutions",
      description: "Create effective cleaning products using simple, natural ingredients that are safe for your family and the environment.",
      category: "DIY",
      readTime: "6 min read",
      image: "https://maxm-imggenurl.web.val.run/homemade natural cleaning solutions DIY eco friendly household products",
      icon: Award,
      difficulty: "Beginner",
      tags: ["DIY", "Cleaning", "Natural"]
    }
  ],
  "guides": [
    {
      id: 5,
      title: "Complete Guide to Sustainable Fashion",
      description: "Everything you need to know about building an eco-friendly wardrobe that's both stylish and sustainable.",
      category: "Fashion",
      readTime: "15 min read",
      image: "https://maxm-imggenurl.web.val.run/sustainable fashion eco friendly wardrobe ethical clothing guide",
      icon: Leaf,
      difficulty: "Intermediate",
      tags: ["Fashion", "Ethical", "Style"]
    },
    {
      id: 6,
      title: "Energy-Efficient Home Improvements",
      description: "Practical tips for reducing your home's energy consumption and creating a more sustainable living space.",
      category: "Home",
      readTime: "10 min read",
      image: "https://maxm-imggenurl.web.val.run/energy efficient home improvements sustainable living space eco friendly",
      icon: Heart,
      difficulty: "Advanced",
      tags: ["Energy", "Home", "Efficiency"]
    }
  ]
};

const featuredContent = [
  {
    id: 1,
    title: "30-Day Sustainable Living Challenge",
    description: "Join our community challenge and transform your lifestyle one day at a time with practical, achievable goals.",
    image: "https://maxm-imggenurl.web.val.run/30 day sustainable living challenge eco friendly lifestyle transformation",
    participants: "2,500+",
    duration: "30 days"
  },
  {
    id: 2,
    title: "Eco-Friendly Holiday Guide",
    description: "Celebrate the holidays sustainably with our comprehensive guide to eco-friendly decorations, gifts, and traditions.",
    image: "https://maxm-imggenurl.web.val.run/eco friendly holiday guide sustainable celebrations green traditions",
    participants: "1,800+",
    duration: "Seasonal"
  }
];

export default function LifestylePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 organic-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 rounded-full">
              <Heart className="w-4 h-4 mr-2" />
              Sustainable Lifestyle
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Live Green,
              <span className="block natural-gradient bg-clip-text text-transparent">
                Live Well
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover practical tips, delicious recipes, and comprehensive guides to help you 
              embrace a more sustainable lifestyle that benefits both you and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/20 hover:border-primary/40">
                  <div className="relative overflow-hidden">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{content.title}</h3>
                      <p className="text-muted-foreground mb-3">{content.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {content.participants} participants
                          </Badge>
                          <Badge className="bg-accent/20 text-accent border-accent/30">
                            {content.duration}
                          </Badge>
                        </div>
                        <Button size="sm" className="natural-gradient hover:natural-glow text-primary-foreground border-0 rounded-xl">
                          Join Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Content by Category */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="tips" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-secondary/30">
              <TabsTrigger value="tips" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Leaf className="w-4 h-4 mr-2" />
                Tips &amp; Tricks
              </TabsTrigger>
              <TabsTrigger value="recipes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Heart className="w-4 h-4 mr-2" />
                Recipes
              </TabsTrigger>
              <TabsTrigger value="guides" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BookOpen className="w-4 h-4 mr-2" />
                Guides
              </TabsTrigger>
            </TabsList>

            {Object.entries(lifestyleCategories).map(([category, items]) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {items.map((item) => (
                    <Card key={item.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/20 hover:border-primary/40 group">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-background/90 text-foreground border-border/50 backdrop-blur-sm">
                            {item.category}
                          </Badge>
                        </div>
                        
                        {/* Difficulty Badge */}
                        <div className="absolute top-4 right-4">
                          <Badge className={`${
                            item.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-600 border-green-500/30' :
                            item.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30' :
                            'bg-red-500/20 text-red-600 border-red-500/30'
                          } backdrop-blur-sm`}>
                            {item.difficulty}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          {/* Meta Info */}
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{item.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4" />
                              <span>4.8</span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {item.tags.map((tag, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Action Button */}
                          <Button className="w-full natural-gradient hover:natural-glow text-primary-foreground border-0 group font-semibold rounded-xl" asChild>
                            <Link href={`/lifestyle/${item.id}`}>
                              Read More
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 organic-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Lifestyle?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Join our community of eco-conscious individuals and start your journey 
            towards a more sustainable and fulfilling lifestyle today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="natural-gradient hover:natural-glow text-primary-foreground border-0 font-semibold rounded-xl" asChild>
              <Link href="/community">
                Join Our Community
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-xl" asChild>
              <Link href="/products">
                Shop Sustainable Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
