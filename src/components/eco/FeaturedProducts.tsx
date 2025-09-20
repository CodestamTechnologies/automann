"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, ShoppingBag, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Organic Bamboo Kitchen Set",
    description: "Complete set of bamboo kitchen utensils made from sustainably sourced bamboo. Perfect for eco-conscious cooking.",
    category: "Home & Garden",
    price: "$89.99",
    originalPrice: "$120.00",
    image: "https://maxm-imggenurl.web.val.run/organic bamboo kitchen utensils set sustainable eco friendly cooking tools",
    icon: Leaf,
    features: ["100% Bamboo", "BPA-Free", "Dishwasher Safe", "Biodegradable"],
    status: "Best Seller",
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    title: "Natural Skincare Bundle",
    description: "Complete natural skincare routine with organic ingredients. Gentle on skin and the environment.",
    category: "Personal Care",
    price: "$65.99",
    originalPrice: "$85.00",
    image: "https://maxm-imggenurl.web.val.run/natural organic skincare products bundle eco friendly beauty routine",
    icon: Heart,
    features: ["Organic Ingredients", "Cruelty-Free", "Vegan", "Zero Waste"],
    status: "New",
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    title: "Eco-Friendly Water Bottle",
    description: "Stainless steel water bottle with natural cork finish. Keeps drinks cold for 24 hours, hot for 12 hours.",
    category: "Lifestyle",
    price: "$34.99",
    originalPrice: "$45.00",
    image: "https://maxm-imggenurl.web.val.run/eco friendly stainless steel water bottle natural cork finish sustainable",
    icon: Leaf,
    features: ["Stainless Steel", "Cork Finish", "Leak-Proof", "Lifetime Warranty"],
    status: "Popular",
    rating: 4.7,
    reviews: 203
  },
  {
    id: 4,
    title: "Sustainable Fashion Tote",
    description: "Handwoven tote bag made from recycled materials. Perfect for shopping, beach trips, or daily use.",
    category: "Fashion & Textiles",
    price: "$28.99",
    originalPrice: "$38.00",
    image: "https://maxm-imggenurl.web.val.run/sustainable fashion tote bag handwoven recycled materials eco friendly",
    icon: Heart,
    features: ["Recycled Materials", "Handwoven", "Machine Washable", "Fair Trade"],
    status: "Limited",
    rating: 4.6,
    reviews: 156
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 elegant-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 mr-2" />
            Featured Products
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Discover Our
            <span className="block professional-gradient bg-clip-text text-transparent">
              Eco-Friendly Collection
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Handpicked sustainable products that help you live more consciously while reducing 
            your environmental impact. Every purchase supports a healthier planet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/20 hover:border-primary/40 rounded-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      product.status === 'Best Seller' ? 'bg-green-500/20 text-green-600 border-green-500/30' :
                      product.status === 'New' ? 'bg-blue-500/20 text-blue-600 border-blue-500/30' :
                      product.status === 'Popular' ? 'bg-orange-500/20 text-orange-600 border-orange-500/30' :
                      'bg-purple-500/20 text-purple-600 border-purple-500/30'
                    } backdrop-blur-sm`}>
                      {product.status}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 text-foreground border-border/50 backdrop-blur-sm">
                      {product.category}
                    </Badge>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary/30">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Price */}
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full professional-gradient hover:professional-glow text-primary-foreground border-0 group font-semibold rounded-xl" asChild>
                    <Link href={`/products/${product.id}`}>
                      <ShoppingBag className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                      Add to Cart
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 group rounded-xl" asChild>
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}