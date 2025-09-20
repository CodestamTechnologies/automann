"use client";

import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, BarChart3, ArrowRight, Star, Award, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "TechStart Inc: 300% Growth in 6 Months",
    description: "How we helped a SaaS startup achieve explosive growth through data-driven marketing strategies and conversion optimization.",
    category: "SaaS Startup",
    client: "TechStart Inc",
    duration: "6 months",
    results: "300% growth",
    image: "https://maxm-imggenurl.web.val.run/SaaS startup growth case study tech company success story",
    icon: TrendingUp,
    status: "Completed",
    year: "2024",
    challenges: ["Low conversion rates", "Limited brand awareness", "Inefficient marketing spend"],
    solutions: ["Growth hacking strategies", "Conversion optimization", "Data-driven campaigns"],
    metrics: [
      { label: "Revenue Growth", value: "300%" },
      { label: "Conversion Rate", value: "85%" },
      { label: "Customer Acquisition", value: "250%" }
    ]
  },
  {
    id: 2,
    title: "ScaleUp Ventures: 500% Revenue Increase",
    description: "Comprehensive digital transformation that helped a scale-up company expand into new markets and increase revenue by 500%.",
    category: "Scale-up",
    client: "ScaleUp Ventures",
    duration: "12 months",
    results: "500% revenue increase",
    image: "https://maxm-imggenurl.web.val.run/scale up business growth revenue increase digital transformation",
    icon: BarChart3,
    status: "Completed",
    year: "2024",
    challenges: ["Market expansion", "Team scaling", "Process optimization"],
    solutions: ["International expansion", "Marketing automation", "Revenue optimization"],
    metrics: [
      { label: "Revenue Growth", value: "500%" },
      { label: "Market Reach", value: "200%" },
      { label: "Team Efficiency", value: "150%" }
    ]
  },
  {
    id: 3,
    title: "Enterprise Corp: 40% Efficiency Gain",
    description: "Digital transformation project that modernized enterprise operations and achieved 40% efficiency improvement across all departments.",
    category: "Enterprise",
    client: "Enterprise Corp",
    duration: "18 months",
    results: "40% efficiency gain",
    image: "https://maxm-imggenurl.web.val.run/enterprise digital transformation efficiency improvement business optimization",
    icon: Award,
    status: "Completed",
    year: "2023",
    challenges: ["Legacy systems", "Process inefficiencies", "Data silos"],
    solutions: ["Digital transformation", "Process automation", "Data integration"],
    metrics: [
      { label: "Efficiency Gain", value: "40%" },
      { label: "Cost Reduction", value: "25%" },
      { label: "Process Speed", value: "60%" }
    ]
  },
  {
    id: 4,
    title: "E-commerce Giant: 85% Conversion Boost",
    description: "Conversion optimization project that increased e-commerce conversion rates by 85% through advanced A/B testing and UX improvements.",
    category: "E-commerce",
    client: "E-commerce Giant",
    duration: "4 months",
    results: "85% conversion boost",
    image: "https://maxm-imggenurl.web.val.run/ecommerce conversion optimization A/B testing UX improvement",
    icon: Target,
    status: "Completed",
    year: "2024",
    challenges: ["Low conversion rates", "Poor user experience", "Cart abandonment"],
    solutions: ["Conversion optimization", "UX redesign", "A/B testing"],
    metrics: [
      { label: "Conversion Rate", value: "85%" },
      { label: "Cart Abandonment", value: "-40%" },
      { label: "Revenue per Visitor", value: "120%" }
    ]
  }
];

const successStats = [
  { icon: TrendingUp, value: "300%", label: "Average Growth" },
  { icon: Award, value: "100+", label: "Successful Projects" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Clock, value: "5+", label: "Years Experience" }
];

export default function CaseStudiesPage() {
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
              Case Studies
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Real Results,
              <span className="block dynamic-gradient bg-clip-text text-transparent">
                Real Growth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore our successful case studies showcasing real results and growth achievements 
              for startups, scale-ups, and enterprises across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:dynamic-glow transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/20 hover:border-primary/40 group">
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 backdrop-blur-sm">
                      {study.status}
                    </Badge>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 text-foreground border-border/50 backdrop-blur-sm">
                      {study.year}
                    </Badge>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30">
                      <study.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {study.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Case Study Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-secondary/30 rounded-xl">
                      <div className="text-lg font-bold text-primary">{study.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/30 rounded-xl">
                      <div className="text-lg font-bold text-primary">{study.results}</div>
                      <div className="text-xs text-muted-foreground">Results</div>
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <div className="text-sm font-semibold text-accent mb-1">Client</div>
                    <div className="text-foreground font-medium">{study.client}</div>
                    <div className="text-sm text-muted-foreground">{study.category}</div>
                  </div>

                  {/* Key Metrics */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Results:</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-2 bg-primary/10 rounded-lg">
                          <div className="text-sm font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full dynamic-gradient hover:dynamic-glow text-primary-foreground border-0 group font-semibold rounded-xl" asChild>
                    <Link href={`/case-studies/${study.id}`}>
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 energy-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Let&apos;s discuss your business goals and create a customized growth strategy 
            that delivers exceptional results like our featured case studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="dynamic-gradient hover:dynamic-glow text-primary-foreground border-0 font-semibold rounded-xl" asChild>
              <Link href="/contact">
                Start Your Growth Journey
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-xl" asChild>
              <Link href="/services">
                View Our Services
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
