"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Target, Zap, BarChart3, ArrowRight, Star, Users, Award } from "lucide-react";
import Link from "next/link";

const solutionCategories = {
  "startups": [
    {
      id: 1,
      title: "Rapid Growth Launch",
      description: "Complete growth strategy for early-stage startups looking to scale quickly and efficiently.",
      category: "Growth Strategy",
      duration: "3-6 months",
      price: "From $5,000",
      image: "https://maxm-imggenurl.web.val.run/startup growth strategy rapid scaling early stage business",
      icon: TrendingUp,
      features: ["MVP Marketing", "User Acquisition", "Growth Hacking", "Analytics Setup"],
      results: "300% growth in 6 months"
    },
    {
      id: 2,
      title: "Product-Market Fit",
      description: "Data-driven approach to finding and optimizing your product-market fit for sustainable growth.",
      category: "Strategy",
      duration: "2-4 months",
      price: "From $3,500",
      image: "https://maxm-imggenurl.web.val.run/product market fit startup strategy data driven approach",
      icon: Target,
      features: ["Market Research", "User Testing", "Iteration Strategy", "Growth Metrics"],
      results: "85% user retention"
    }
  ],
  "scale-ups": [
    {
      id: 3,
      title: "Scale-Up Acceleration",
      description: "Advanced growth strategies for companies ready to scale from startup to enterprise level.",
      category: "Scaling",
      duration: "6-12 months",
      price: "From $8,000",
      image: "https://maxm-imggenurl.web.val.run/scale up business growth enterprise level scaling strategy",
      icon: BarChart3,
      features: ["Team Scaling", "Process Optimization", "Market Expansion", "Revenue Growth"],
      results: "500% revenue increase"
    },
    {
      id: 4,
      title: "International Expansion",
      description: "Strategic approach to expanding your business into new markets and territories.",
      category: "Expansion",
      duration: "4-8 months",
      price: "From $6,000",
      image: "https://maxm-imggenurl.web.val.run/international business expansion global market strategy",
      icon: Users,
      features: ["Market Analysis", "Localization", "Cultural Adaptation", "Growth Strategy"],
      results: "200% market reach"
    }
  ],
  "enterprises": [
    {
      id: 5,
      title: "Digital Transformation",
      description: "Comprehensive digital transformation strategy to modernize and optimize enterprise operations.",
      category: "Transformation",
      duration: "12-18 months",
      price: "From $15,000",
      image: "https://maxm-imggenurl.web.val.run/digital transformation enterprise modernization business optimization",
      icon: Award,
      features: ["Process Automation", "Data Integration", "Technology Stack", "Change Management"],
      results: "40% efficiency gain"
    },
    {
      id: 6,
      title: "Revenue Optimization",
      description: "Advanced strategies to optimize revenue streams and maximize profitability across all channels.",
      category: "Optimization",
      duration: "6-9 months",
      price: "From $10,000",
      image: "https://maxm-imggenurl.web.val.run/revenue optimization enterprise profitability channel strategy",
      icon: Zap,
      features: ["Revenue Analysis", "Channel Optimization", "Pricing Strategy", "Performance Tracking"],
      results: "60% profit increase"
    }
  ]
};

const featuredSolutions = [
  {
    id: 1,
    title: "Growth Acceleration Program",
    description: "Our flagship program that has helped 100+ companies achieve explosive growth.",
    image: "https://maxm-imggenurl.web.val.run/growth acceleration program business growth flagship strategy",
    results: "Average 300% growth"
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    description: "Comprehensive digital marketing solutions that deliver measurable results and ROI.",
    image: "https://maxm-imggenurl.web.val.run/digital marketing mastery comprehensive solutions ROI results",
    results: "450% average ROI"
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 energy-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 mr-2" />
              Our Solutions
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Tailored Growth
              <span className="block dynamic-gradient bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of growth solutions designed for startups, scale-ups, 
              and enterprises. Each solution is tailored to your specific business stage and growth objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/20 hover:border-primary/40">
                  <div className="relative overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground mb-3">{solution.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          {solution.results}
                        </Badge>
                        <Button size="sm" className="dynamic-gradient hover:dynamic-glow text-primary-foreground border-0 rounded-xl">
                          Learn More
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

      {/* Solutions by Business Stage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="startups" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-secondary/30">
              <TabsTrigger value="startups" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <TrendingUp className="w-4 h-4 mr-2" />
                Startups
              </TabsTrigger>
              <TabsTrigger value="scale-ups" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BarChart3 className="w-4 h-4 mr-2" />
                Scale-ups
              </TabsTrigger>
              <TabsTrigger value="enterprises" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Award className="w-4 h-4 mr-2" />
                Enterprises
              </TabsTrigger>
            </TabsList>

            {Object.entries(solutionCategories).map(([category, solutions]) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {solutions.map((solution) => (
                    <Card key={solution.id} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/20 hover:border-primary/40 group">
                      <div className="relative overflow-hidden">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-background/90 text-foreground border-border/50 backdrop-blur-sm">
                            {solution.category}
                          </Badge>
                        </div>
                        
                        {/* Icon Overlay */}
                        <div className="absolute bottom-4 right-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30">
                            <solution.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                              {solution.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {solution.description}
                            </p>
                          </div>

                          {/* Solution Details */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-secondary/30 rounded-xl">
                              <div className="text-sm font-bold text-primary">{solution.duration}</div>
                              <div className="text-xs text-muted-foreground">Duration</div>
                            </div>
                            <div className="text-center p-3 bg-secondary/30 rounded-xl">
                              <div className="text-sm font-bold text-primary">{solution.price}</div>
                              <div className="text-xs text-muted-foreground">Starting Price</div>
                            </div>
                          </div>

                          {/* Results */}
                          <div className="text-center p-3 bg-accent/10 rounded-xl">
                            <div className="text-lg font-bold text-accent">{solution.results}</div>
                            <div className="text-xs text-muted-foreground">Typical Results</div>
                          </div>

                          {/* Features */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-foreground text-sm">What&apos;s Included:</h4>
                            <div className="flex flex-wrap gap-1">
                              {solution.features.map((feature, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-3">
                            <Button className="flex-1 dynamic-gradient hover:dynamic-glow text-primary-foreground border-0 group font-semibold rounded-xl" asChild>
                              <Link href={`/solutions/${solution.id}`}>
                                Learn More
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </Button>
                            <Button variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-xl" asChild>
                              <Link href={`/contact?solution=${solution.id}`}>
                                Get Quote
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
        <div className="absolute inset-0 energy-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Find Your Perfect Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Let&apos;s discuss your business goals and find the perfect growth solution 
            tailored to your specific needs and objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="dynamic-gradient hover:dynamic-glow text-primary-foreground border-0 font-semibold rounded-xl" asChild>
              <Link href="/contact">
                Get Custom Solution
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-xl" asChild>
              <Link href="/case-studies">
                View Case Studies
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