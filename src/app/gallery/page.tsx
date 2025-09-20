"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/arts/Navbar";
import Footer from "@/components/arts/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Camera, Brush, PenTool, ArrowRight, Heart, Eye } from "lucide-react";
import Link from "next/link";

const galleryCategories = {
  "fine-art": [
    {
      id: 1,
      title: "Sunset Serenity",
      description: "Oil painting capturing the peaceful beauty of a mountain sunset.",
      category: "Oil Painting",
      year: "2024",
      size: "24x36 inches",
      image: "https://maxm-imggenurl.web.val.run/oil painting sunset mountain landscape fine art masterpiece",
      icon: Palette,
      price: "$2,500"
    },
    {
      id: 2,
      title: "Urban Dreams",
      description: "Mixed media piece exploring the intersection of nature and city life.",
      category: "Mixed Media",
      year: "2024",
      size: "18x24 inches",
      image: "https://maxm-imggenurl.web.val.run/mixed media urban art city nature intersection creative",
      icon: Brush,
      price: "$1,800"
    }
  ],
  "photography": [
    {
      id: 3,
      title: "Golden Hour Portrait",
      description: "Elegant portrait photography capturing natural beauty in perfect lighting.",
      category: "Portrait",
      year: "2024",
      size: "Digital Print",
      image: "https://maxm-imggenurl.web.val.run/portrait photography golden hour elegant natural beauty",
      icon: Camera,
      price: "$300"
    },
    {
      id: 4,
      title: "Abstract Architecture",
      description: "Creative architectural photography with artistic composition and angles.",
      category: "Architecture",
      year: "2024",
      size: "Digital Print",
      image: "https://maxm-imggenurl.web.val.run/architectural photography abstract creative composition artistic",
      icon: Camera,
      price: "$250"
    }
  ],
  "digital-art": [
    {
      id: 5,
      title: "Digital Dreams",
      description: "Contemporary digital artwork exploring themes of technology and humanity.",
      category: "Digital Art",
      year: "2024",
      size: "Digital File",
      image: "https://maxm-imggenurl.web.val.run/digital art contemporary technology humanity creative artwork",
      icon: PenTool,
      price: "$500"
    },
    {
      id: 6,
      title: "Brand Identity Design",
      description: "Complete brand identity package for a luxury fashion brand.",
      category: "Brand Design",
      year: "2024",
      size: "Brand Package",
      image: "https://maxm-imggenurl.web.val.run/brand identity design luxury fashion logo typography",
      icon: Brush,
      price: "$1,200"
    }
  ]
};

const featuredArtworks = [
  {
    id: 1,
    title: "Masterpiece Collection",
    description: "Our most celebrated artworks that have won international recognition.",
    image: "https://maxm-imggenurl.web.val.run/featured artwork masterpiece collection international recognition gallery",
    count: "12 pieces"
  },
  {
    id: 2,
    title: "Emerging Artists",
    description: "Showcasing the next generation of talented artists and their innovative works.",
    image: "https://maxm-imggenurl.web.val.run/emerging artists next generation talented innovative artwork gallery",
    count: "8 artists"
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 artistic-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full">
              <Palette className="w-4 h-4 mr-2" />
              Art Gallery
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Our Creative
              <span className="block elegant-gradient bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore our curated collection of exceptional artworks, from traditional fine art 
              to contemporary digital creations, each piece telling a unique artistic story.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArtworks.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/10 hover:border-primary/30">
                  <div className="relative overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{collection.title}</h3>
                      <p className="text-muted-foreground mb-3">{collection.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          {collection.count}
                        </Badge>
                        <Button size="sm" className="elegant-gradient hover:elegant-glow text-primary-foreground border-0 rounded-full">
                          Explore
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

      {/* Gallery Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="fine-art" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-secondary/30">
              <TabsTrigger value="fine-art" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Palette className="w-4 h-4 mr-2" />
                Fine Art
              </TabsTrigger>
              <TabsTrigger value="photography" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Camera className="w-4 h-4 mr-2" />
                Photography
              </TabsTrigger>
              <TabsTrigger value="digital-art" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <PenTool className="w-4 h-4 mr-2" />
                Digital Art
              </TabsTrigger>
            </TabsList>

            {Object.entries(galleryCategories).map(([category, artworks]) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {artworks.map((artwork) => (
                    <Card key={artwork.id} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/10 hover:border-primary/30 group">
                      <div className="relative overflow-hidden">
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-background/90 text-foreground border-border/50 backdrop-blur-sm">
                            {artwork.category}
                          </Badge>
                        </div>
                        
                        {/* Icon Overlay */}
                        <div className="absolute bottom-4 right-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30">
                            <artwork.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                              {artwork.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {artwork.description}
                            </p>
                          </div>

                          {/* Artwork Details */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-secondary/30 rounded-xl">
                              <div className="text-sm font-bold text-primary">{artwork.year}</div>
                              <div className="text-xs text-muted-foreground">Year</div>
                            </div>
                            <div className="text-center p-3 bg-secondary/30 rounded-xl">
                              <div className="text-sm font-bold text-primary">{artwork.size}</div>
                              <div className="text-xs text-muted-foreground">Size</div>
                            </div>
                          </div>

                          {/* Price */}
                          <div className="text-center p-3 bg-accent/10 rounded-xl">
                            <div className="text-lg font-bold text-accent">{artwork.price}</div>
                            <div className="text-xs text-muted-foreground">Price</div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <Button className="flex-1 elegant-gradient hover:elegant-glow text-primary-foreground border-0 group font-semibold rounded-full" asChild>
                              <Link href={`/gallery/${artwork.id}`}>
                                <Eye className="mr-2 w-4 h-4" />
                                View Details
                              </Link>
                            </Button>
                            <Button variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-full" asChild>
                              <Link href={`/contact?artwork=${artwork.id}`}>
                                <Heart className="w-4 h-4" />
                              </Link>
                            </Button>
                          </div>
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
        <div className="absolute inset-0 artistic-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Interested in a Custom Piece?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Let&apos;s create something unique together. Our artists are ready to bring your 
            vision to life with a custom commission tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="elegant-gradient hover:elegant-glow text-primary-foreground border-0 font-semibold rounded-full" asChild>
              <Link href="/contact">
                Commission Artwork
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-full" asChild>
              <Link href="/services">
                View Services
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