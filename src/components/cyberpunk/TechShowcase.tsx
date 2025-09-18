"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Cpu, 
  Palette, 
  Zap, 
  Code, 
  Layers,
  ArrowRight,
  Sparkles
} from "lucide-react";

const TechShowcase = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Neural Networks",
      description: "Advanced AI algorithms that learn and create unique artistic patterns",
      features: ["Deep Learning", "Pattern Recognition", "Style Transfer"],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Cpu,
      title: "Quantum Processing",
      description: "Harness quantum computing power for unprecedented creative possibilities",
      features: ["Quantum Algorithms", "Parallel Processing", "Complex Calculations"],
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Palette,
      title: "Generative Art",
      description: "Algorithmic creation of unique artworks using mathematical principles",
      features: ["Procedural Generation", "Fractal Geometry", "Color Theory"],
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
    {
      icon: Code,
      title: "Smart Contracts",
      description: "Blockchain technology ensuring authenticity and ownership of digital art",
      features: ["NFT Minting", "Ownership Verification", "Royalty Distribution"],
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
    {
      icon: Layers,
      title: "3D Rendering",
      description: "Cutting-edge 3D graphics and immersive virtual environments",
      features: ["Ray Tracing", "Volumetric Lighting", "Particle Systems"],
      color: "text-chart-5",
      bgColor: "bg-chart-5/10",
    },
    {
      icon: Sparkles,
      title: "AR/VR Integration",
      description: "Experience art in augmented and virtual reality environments",
      features: ["Immersive Galleries", "Interactive Experiences", "Spatial Computing"],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-accent border-accent/50">
            <Zap className="mr-2 h-4 w-4" />
            Technology Stack
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary neon-text">Cutting-Edge</span>{" "}
            <span className="text-foreground">Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by the most advanced technologies in AI, blockchain, and digital art creation. 
            Experience the future of creative expression.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div 
              key={tech.title} 
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="group h-full bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${tech.bgColor} mr-4`}>
                      <tech.icon className={`h-6 w-6 ${tech.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {tech.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {tech.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {tech.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className={`w-2 h-2 rounded-full ${tech.bgColor} mr-3`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    className={`group/btn w-full justify-between ${tech.color} hover:bg-primary/10`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card/20 backdrop-blur-sm rounded-lg border border-primary/20 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-primary neon-text mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                99.9%
              </motion.div>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
            <div>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-accent mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                &lt;1ms
              </motion.div>
              <p className="text-sm text-muted-foreground">Response Time</p>
            </div>
            <div>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-chart-3 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                256bit
              </motion.div>
              <p className="text-sm text-muted-foreground">Encryption</p>
            </div>
            <div>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-chart-4 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                ∞
              </motion.div>
              <p className="text-sm text-muted-foreground">Possibilities</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechShowcase;