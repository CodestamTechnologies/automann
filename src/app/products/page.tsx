import type { Metadata } from "next";
import Navbar from "@/components/eco/Navbar";
import Footer from "@/components/eco/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, ShoppingBag, ArrowRight, Star, Award, Filter, Search } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eco-Friendly Products — EcoLife Sustainable Living",
  description: "Browse our curated collection of eco-friendly products including organic home goods, sustainable fashion, natural personal care, and zero-waste lifestyle items.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const products = [
  {
    id: 1,
    title: "Organic Bamboo Kitchen Set",
    description: "Complete set of bamboo kitchen utensils made from sustainably sourced bamboo. Perfect for eco-conscious cooking and meal preparation.",
    category: "Home & Garden",
    price: "$89.99",
    originalPrice: "$120.00",
    image: "https://maxm-imggenurl.web.val.run/organic bamboo kitchen utensils set sustainable eco friendly cooking tools natural",
    icon: Leaf,
    features: ["100% Bamboo", "BPA-Free", "Dishwasher Safe", "Biodegradable"],
    status: "Best Seller",
    rating: 4.9,
    reviews: 124,
    sustainability: "Carbon Neutral"
  },
  {
    id: 2,
    title: "Natural Skincare Bundle",
    description: "Complete natural skincare routine with organic ingredients. Gentle on skin and the environment, perfect for sensitive skin types.",
    category: "Personal Care",
    price: "$65.99",
    originalPrice: "$85.00",
    image: "https://maxm-imggenurl.web.val.run/natural organic skincare products bundle eco friendly beauty routine sustainable",
    icon: Heart,
    features: ["Organic Ingredients", "Cruelty-Free", "Vegan", "Zero Waste"],
    status: "New",
    rating: 4.8,
    reviews: 89,
    sustainability: "Plastic-Free"
  },
  {
    id: 3,
    title: "Eco-Friendly Water Bottle",
    description: "Stainless steel water bottle with natural cork finish. Keeps drinks cold for 24 hours, hot for 12 hours. Perfect for daily hydration.",
    category: "Lifestyle",
    price: "$34.99",
    originalPrice: "$45.00",
    image: "https://maxm-imggenurl.web.val.run/eco friendly stainless steel water bottle natural cork finish sustainable hydration",
    icon: Leaf,
    features: ["Stainless Steel", "Cork Finish", "Leak-Proof", "Lifetime Warranty"],
    status: "Popular",
    rating: 4.7,
    reviews: 203,
    sustainability: "Recyclable"
  },
  {
    id: 4,
    title: "Sustainable Fashion Tote",
    description: "Handwoven tote bag made from recycled materials. Perfect for shopping, beach trips, or daily use. Supports fair trade practices.",
    category: "Fashion & Textiles",
    price: "$28.99",
    originalPrice: "$38.00",
    image: "https://maxm-imggenurl.web.val.run/sustainable fashion tote bag handwoven recycled materials eco friendly shopping",
    icon: Heart,
    features: ["Recycled Materials", "Handwoven", "Machine Washable", "Fair Trade"],
    status: "Limited",
    rating: 4.6,
    reviews: 156,
    sustainability: "Fair Trade"
  },
  {
    id: 5,
    title: "Organic Cotton Bedding Set",
    description: "Complete bedding set made from 100% organic cotton. Soft, breathable, and free from harmful chemicals. Perfect for a good night's sleep.",
    category: "Home & Garden",
    price: "$129.99",
    originalPrice: "$160.00",
    image: "https://maxm-imggenurl.web.val.run/organic cotton bedding set sustainable home textiles eco friendly sleep",
    icon: Leaf,
    features: ["100% Organic Cotton", "Chemical-Free", "Hypoallergenic", "Machine Washable"],
    status: "Best Seller",
    rating: 4.8,
    reviews: 98,
    sustainability: "GOTS Certified"
  },
  {
    id: 6,
    title: "Natural Cleaning Kit",
    description: "Complete natural cleaning kit with plant-based ingredients. Effective cleaning power without harsh chemicals or synthetic fragrances.",
    category: "Home & Garden",
    price: "$45.99",
    originalPrice: "$60.00",
    image: "https://maxm-imggenurl.web.val.run/natural cleaning kit plant based ingredients eco friendly home cleaning sustainable",
    icon: Heart,
    features: ["Plant-Based", "Non-Toxic", "Biodegradable", "Refillable"],
    status: "Popular",
    rating: 4.7,
    reviews: 167,
    sustainability: "Biodegradable"
  }
];

const categories = [
  { name: "All Products", count: 24, icon: ShoppingBag },
  { name: "Home & Garden", count: 8, icon: Leaf },
  { name: "Personal Care", count: 6, icon: Heart },
  { name: "Fashion & Textiles", count: 5, icon: Award },
  { name: "Food & Beverages", count: 5, icon: Star },
];

export default function ProductsPage() {
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
              <Leaf className="w-4 h-4 mr-2" />
              Our Products
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Sustainable Products
              <span className="block natural-gradient bg-clip-text text-transparent">
                for Every Lifestyle
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our carefully curated collection of eco-friendly products that help you 
              live more sustainably while maintaining the quality and style you love.
            </p>
          </div>
        </div>
      </section>

      {/* Categories & Filters */}
      <section className="py-12 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <Card className="p-6 border-0 shadow-lg bg-card/80 backdrop-blur-xl border border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-primary" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/products?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/10 transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <category.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-foreground group-hover:text-primary transition-colors">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {category.count}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">Featured Products</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="pl-10 pr-4 py-2 bg-background/50 border border-primary/30 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-xl border border-primary/20 hover:border-primary/40 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
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
                      
                      {/* Sustainability Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                          {product.sustainability}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                            {product.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        {/* Price */}
                        <div className="flex items-center space-x-3">
                          <span className="text-xl font-bold text-primary">{product.price}</span>
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-1">
                          {product.features.slice(0, 2).map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        {/* Action Button */}
                        <Button className="w-full natural-gradient hover:natural-glow text-primary-foreground border-0 group font-semibold rounded-xl" asChild>
                          <Link href={`/products/${product.id}`}>
                            <ShoppingBag className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                            View Details
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 organic-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Sustainable Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Join thousands of eco-conscious individuals who have already made the switch 
            to sustainable living with our carefully curated products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="natural-gradient hover:natural-glow text-primary-foreground border-0 font-semibold rounded-xl" asChild>
              <Link href="/products">
                Shop All Products
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-xl" asChild>
              <Link href="/lifestyle">
                Learn About Sustainability
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}