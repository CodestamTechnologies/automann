"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Shield, Code, Rocket, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    id: 1,
    title: "AI-Powered Analytics",
    description: "Revolutionary artificial intelligence that transforms data into actionable insights with unprecedented accuracy and speed.",
    category: "Artificial Intelligence",
    complexity: "Advanced",
    performance: "99.9%",
    users: 50000,
    image: "https://maxm-imggenurl.web.val.run/artificial intelligence AI analytics data science machine learning futuristic technology",
    icon: Brain,
    features: ["Real-time Processing", "Predictive Analytics", "Natural Language"],
    status: "Live"
  },
  {
    id: 2,
    title: "Quantum Computing Suite",
    description: "Next-generation quantum processors that solve complex problems exponentially faster than classical computers.",
    category: "Quantum Technology",
    complexity: "Expert",
    performance: "1000x Faster",
    users: 2500,
    image: "https://maxm-imggenurl.web.val.run/quantum computing quantum processor advanced technology futuristic computing",
    icon: Cpu,
    features: ["Quantum Algorithms", "Superposition", "Entanglement"],
    status: "Beta"
  },
  {
    id: 3,
    title: "Cyber Defense Matrix",
    description: "Advanced cybersecurity platform with AI-driven threat detection and autonomous response capabilities.",
    category: "Cybersecurity",
    complexity: "Enterprise",
    performance: "99.99%",
    users: 100000,
    image: "https://maxm-imggenurl.web.val.run/cybersecurity cyber defense security technology digital protection futuristic",
    icon: Shield,
    features: ["Threat Detection", "Auto Response", "Zero Trust"],
    status: "Live"
  },
  {
    id: 4,
    title: "Neural Network Platform",
    description: "Scalable deep learning infrastructure for building and deploying advanced neural network models.",
    category: "Machine Learning",
    complexity: "Advanced",
    performance: "10x Faster",
    users: 15000,
    image: "https://maxm-imggenurl.web.val.run/neural network deep learning machine learning AI technology futuristic computing",
    icon: Code,
    features: ["Auto Scaling", "Model Training", "Real-time Inference"],
    status: "Live"
  }
];

export default function FeaturedSolutions() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Cutting-Edge Solutions
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Revolutionary Technology
            <span className="block tech-gradient bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our suite of next-generation technologies that are reshaping industries 
            and pushing the boundaries of what&apos;s possible in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/10 hover:border-primary/30">
                <div className="relative overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      solution.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    } backdrop-blur-sm`}>
                      {solution.status}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 text-foreground border-border/50 backdrop-blur-sm">
                      {solution.category}
                    </Badge>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/30">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-secondary/30 rounded-lg">
                      <div className="text-lg font-bold text-primary">{solution.performance}</div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/30 rounded-lg">
                      <div className="text-lg font-bold text-primary">{solution.users.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/30 rounded-lg">
                      <div className="text-lg font-bold text-primary">{solution.complexity}</div>
                      <div className="text-xs text-muted-foreground">Level</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full tech-gradient hover:tech-glow text-primary-foreground border-0 group font-semibold" asChild>
                    <Link href={`/solutions/${solution.id}`}>
                      Explore Solution
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
          <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 group" asChild>
            <Link href="/solutions">
              View All Solutions
              <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
