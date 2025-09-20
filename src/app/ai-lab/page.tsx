"use client";

import Navbar from "@/components/tech/Navbar";
import Footer from "@/components/tech/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Eye, MessageSquare, Zap, ArrowRight, Play, Code, Database, Network } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const aiCategories = {
  "machine-learning": [
    {
      id: 1,
      title: "Deep Learning Models",
      description: "Advanced neural networks for complex pattern recognition and predictive analytics.",
      icon: Brain,
      status: "Live",
      accuracy: "98.5%",
      trainingTime: "2.5 hours",
      image: "https://maxm-imggenurl.web.val.run/deep learning neural networks machine learning AI technology futuristic"
    },
    {
      id: 2,
      title: "Reinforcement Learning",
      description: "AI agents that learn through interaction and reward-based optimization.",
      icon: Zap,
      status: "Beta",
      accuracy: "94.2%",
      trainingTime: "12 hours",
      image: "https://maxm-imggenurl.web.val.run/reinforcement learning AI agents robotics automation futuristic technology"
    }
  ],
  "computer-vision": [
    {
      id: 3,
      title: "Object Detection",
      description: "Real-time identification and classification of objects in images and video streams.",
      icon: Eye,
      status: "Live",
      accuracy: "99.1%",
      trainingTime: "4 hours",
      image: "https://maxm-imggenurl.web.val.run/computer vision object detection AI technology futuristic image recognition"
    },
    {
      id: 4,
      title: "Facial Recognition",
      description: "Advanced biometric identification with privacy-preserving techniques.",
      icon: Eye,
      status: "Live",
      accuracy: "99.8%",
      trainingTime: "6 hours",
      image: "https://maxm-imggenurl.web.val.run/facial recognition biometric AI technology security futuristic"
    }
  ],
  "natural-language": [
    {
      id: 5,
      title: "Language Models",
      description: "Large-scale transformer models for text generation and understanding.",
      icon: MessageSquare,
      status: "Live",
      accuracy: "97.3%",
      trainingTime: "48 hours",
      image: "https://maxm-imggenurl.web.val.run/natural language processing AI language models text generation futuristic"
    },
    {
      id: 6,
      title: "Sentiment Analysis",
      description: "Real-time emotion and sentiment detection from text and speech.",
      icon: MessageSquare,
      status: "Live",
      accuracy: "95.7%",
      trainingTime: "3 hours",
      image: "https://maxm-imggenurl.web.val.run/sentiment analysis AI emotion detection text processing futuristic"
    }
  ]
};

const aiStats = [
  { icon: Brain, value: "500+", label: "AI Models" },
  { icon: Database, value: "10TB+", label: "Training Data" },
  { icon: Network, value: "99.9%", label: "Uptime" },
  { icon: Zap, value: "1ms", label: "Response Time" }
];

export default function AILabPage() {
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
              <Brain className="w-4 h-4 mr-2" />
              AI Laboratory
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Artificial Intelligence
              <span className="block tech-gradient bg-clip-text text-transparent">
                Research Lab
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore our cutting-edge AI laboratory where we develop and test the next generation 
              of artificial intelligence technologies that are reshaping the future.
            </p>
          </div>
        </div>
      </section>

      {/* AI Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aiStats.map((stat, index) => (
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

      {/* AI Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="machine-learning" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-secondary/30">
              <TabsTrigger value="machine-learning" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Brain className="w-4 h-4 mr-2" />
                Machine Learning
              </TabsTrigger>
              <TabsTrigger value="computer-vision" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Eye className="w-4 h-4 mr-2" />
                Computer Vision
              </TabsTrigger>
              <TabsTrigger value="natural-language" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <MessageSquare className="w-4 h-4 mr-2" />
                Natural Language
              </TabsTrigger>
            </TabsList>

            {Object.entries(aiCategories).map(([category, models]) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {models.map((model) => (
                    <Card key={model.id} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/10 hover:border-primary/30 group">
                      <div className="relative overflow-hidden">
                        <img
                          src={model.image}
                          alt={model.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className={`${
                            model.status === 'Live' 
                              ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                              : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          } backdrop-blur-sm`}>
                            {model.status}
                          </Badge>
                        </div>
                        
                        {/* Icon Overlay */}
                        <div className="absolute bottom-4 right-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/30">
                            <model.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                      </div>

                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {model.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {model.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        {/* Performance Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-secondary/30 rounded-lg">
                            <div className="text-lg font-bold text-primary">{model.accuracy}</div>
                            <div className="text-xs text-muted-foreground">Accuracy</div>
                          </div>
                          <div className="text-center p-3 bg-secondary/30 rounded-lg">
                            <div className="text-lg font-bold text-primary">{model.trainingTime}</div>
                            <div className="text-xs text-muted-foreground">Training Time</div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button className="flex-1 tech-gradient hover:tech-glow text-primary-foreground border-0 group font-semibold" asChild>
                            <Link href={`/ai-lab/${model.id}`}>
                              <Code className="mr-2 w-4 h-4" />
                              View Model
                            </Link>
                          </Button>
                          <Button variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10" asChild>
                            <Link href={`/ai-lab/${model.id}/demo`}>
                              <Play className="w-4 h-4" />
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

      {/* Live Demo Section */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Experience AI in Action
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Try our interactive AI demos and see the power of artificial intelligence 
            in real-time applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-gradient hover:tech-glow text-primary-foreground border-0 font-semibold" asChild>
              <Link href="/ai-lab/demo">
                <Play className="mr-2 w-5 h-5" />
                Try Live Demo
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10" asChild>
              <Link href="/solutions">
                Explore Solutions
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
