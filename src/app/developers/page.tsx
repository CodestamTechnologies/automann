"use client";

import Navbar from "@/components/tech/Navbar";
import Footer from "@/components/tech/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Terminal, Book, Zap, ArrowRight, Star, Users, Clock, Globe, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const developerResources = [
  {
    id: 1,
    title: "AI API Suite",
    description: "Comprehensive REST APIs for integrating AI capabilities into your applications with just a few lines of code.",
    category: "APIs",
    language: "REST",
    complexity: "Beginner",
    documentation: "Complete",
    image: "https://maxm-imggenurl.web.val.run/API development REST API artificial intelligence programming code futuristic",
    icon: Code,
    features: ["REST Endpoints", "Real-time Processing", "SDK Support", "Rate Limiting"],
    status: "Live"
  },
  {
    id: 2,
    title: "Quantum SDK",
    description: "Software development kit for building quantum computing applications with our quantum processors.",
    category: "SDKs",
    language: "Python/JavaScript",
    complexity: "Advanced",
    documentation: "Complete",
    image: "https://maxm-imggenurl.web.val.run/quantum computing SDK software development kit programming futuristic",
    icon: Terminal,
    status: "Beta"
  },
  {
    id: 3,
    title: "Security Libraries",
    description: "Pre-built security components and libraries for implementing enterprise-grade security in your applications.",
    category: "Libraries",
    language: "Multi-language",
    complexity: "Intermediate",
    documentation: "Complete",
    image: "https://maxm-imggenurl.web.val.run/cybersecurity security libraries programming code development futuristic",
    icon: Book,
    status: "Live"
  },
  {
    id: 4,
    title: "ML Pipeline Tools",
    description: "Complete toolkit for building, training, and deploying machine learning models at scale.",
    category: "Tools",
    language: "Python",
    complexity: "Advanced",
    documentation: "Complete",
    image: "https://maxm-imggenurl.web.val.run/machine learning pipeline tools development programming futuristic",
    icon: Zap,
    status: "Live"
  }
];

const quickStartSteps = [
  {
    step: 1,
    title: "Get API Key",
    description: "Sign up for a free account and get your API key in minutes",
    icon: Star
  },
  {
    step: 2,
    title: "Choose SDK",
    description: "Select the SDK for your preferred programming language",
    icon: Code
  },
  {
    step: 3,
    title: "Make First Call",
    description: "Follow our quick start guide to make your first API call",
    icon: Zap
  },
  {
    step: 4,
    title: "Build & Deploy",
    description: "Build amazing applications and deploy them to production",
    icon: Globe
  }
];

const developerStats = [
  { icon: Users, value: "50,000+", label: "Active Developers" },
  { icon: Code, value: "100+", label: "API Endpoints" },
  { icon: Clock, value: "99.9%", label: "Uptime SLA" },
  { icon: Github, value: "500+", label: "Open Source Projects" }
];

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Code className="w-4 h-4 mr-2" />
              Developer Resources
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Build with
              <span className="block tech-gradient bg-clip-text text-transparent">
                Cutting-Edge Tech
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Access our comprehensive developer resources including APIs, SDKs, documentation, 
              and tools to build the next generation of applications.
            </p>
          </div>
        </div>
      </section>

      {/* Developer Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {developerStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:tech-glow transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Get Started in
              <span className="block tech-gradient bg-clip-text text-transparent">
                4 Simple Steps
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start building with our platform in minutes, not hours. 
              Our developer-friendly tools make integration seamless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartSteps.map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/10 group hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:tech-glow transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-sm">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Developer
              <span className="block tech-gradient bg-clip-text text-transparent">
                Resources
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to build amazing applications with our technology platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {developerResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/10 hover:border-primary/30 group">
                <div className="relative overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      resource.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    } backdrop-blur-sm`}>
                      {resource.status}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 text-foreground border-border/50 backdrop-blur-sm">
                      {resource.category}
                    </Badge>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/30">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {resource.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Resource Details */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-secondary/30 rounded-lg">
                      <div className="text-sm font-bold text-primary">{resource.language}</div>
                      <div className="text-xs text-muted-foreground">Language</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/30 rounded-lg">
                      <div className="text-sm font-bold text-primary">{resource.complexity}</div>
                      <div className="text-xs text-muted-foreground">Level</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/30 rounded-lg">
                      <div className="text-sm font-bold text-primary">{resource.documentation}</div>
                      <div className="text-xs text-muted-foreground">Docs</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {resource.features?.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full tech-gradient hover:tech-glow text-primary-foreground border-0 group font-semibold" asChild>
                    <Link href={`/developers/${resource.id}`}>
                      View Documentation
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
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Join thousands of developers who are already building the future with our platform. 
            Get started with our free tier today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-gradient hover:tech-glow text-primary-foreground border-0 font-semibold" asChild>
              <Link href="/developers/get-started">
                <Code className="mr-2 w-5 h-5" />
                Get Started Free
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10" asChild>
              <Link href="/developers/docs">
                <Book className="mr-2 w-5 h-5" />
                View Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
