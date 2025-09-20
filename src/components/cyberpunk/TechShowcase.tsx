"use client";

import { motion } from "framer-motion";
import { Zap, Brain, Cpu, Eye, Palette, Sparkles } from "lucide-react";

const technologies = [
  {
    icon: Brain,
    title: "AI Generation",
    description: "Advanced neural networks create unique artworks from simple prompts",
    features: ["GPT-4 Integration", "Style Transfer", "Real-time Generation"],
    color: "from-primary to-accent"
  },
  {
    icon: Cpu,
    title: "Blockchain",
    description: "Secure ownership and provenance through decentralized technology",
    features: ["NFT Minting", "Smart Contracts", "Royalty Tracking"],
    color: "from-accent to-primary"
  },
  {
    icon: Eye,
    title: "AR/VR",
    description: "Immersive experiences that bring digital art to life",
    features: ["3D Visualization", "Interactive Exhibits", "Virtual Galleries"],
    color: "from-primary to-accent"
  },
  {
    icon: Palette,
    title: "Creative Tools",
    description: "Professional-grade tools for digital artists and creators",
    features: ["AI Brushes", "Style Libraries", "Collaboration Tools"],
    color: "from-accent to-primary"
  }
];

export default function TechShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Powered by <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology meets artistic vision to create the future of digital creativity
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="digital-surface rounded-2xl p-8 hover:neon-glow transition-all duration-500 h-full">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <tech.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {tech.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="digital-surface rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Ready to Create?
              </h3>
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of artists and creators who are already using our platform to bring their visions to life
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <Zap className="w-5 h-5" />
              <span>Start Creating Now</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}