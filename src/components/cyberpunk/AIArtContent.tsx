"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Brain, 
  Cpu, 
  Zap, 
  Sparkles, 
  Download,
  Share2,
  Heart,
  Settings,
  Wand2
} from "lucide-react";

const AIArtContent = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("neural-vision");

  const aiModels = [
    {
      id: "neural-vision",
      name: "Neural Vision",
      description: "Advanced neural network for photorealistic cyberpunk art",
      icon: Brain,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: "quantum-dream",
      name: "Quantum Dream",
      description: "Quantum-inspired algorithm for abstract and surreal creations",
      icon: Cpu,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      id: "cyber-painter",
      name: "Cyber Painter",
      description: "Specialized in neon-lit cityscapes and futuristic environments",
      icon: Zap,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
    },
  ];

  const featuredAIArt = [
    {
      id: 1,
      title: "Neural Cityscape",
      model: "Neural Vision",
      prompt: "cyberpunk city with neon lights and flying cars",
      image: "https://maxm-imggenurl.web.val.run/cyberpunk city with neon lights and flying cars, neural network generated, high detail",
      likes: 2341,
      downloads: 567,
      generationTime: "2.3s",
    },
    {
      id: 2,
      title: "Quantum Dreams",
      model: "Quantum Dream",
      prompt: "abstract consciousness visualization with glowing particles",
      image: "https://maxm-imggenurl.web.val.run/abstract consciousness visualization with glowing particles, quantum inspired art",
      likes: 1876,
      downloads: 423,
      generationTime: "3.1s",
    },
    {
      id: 3,
      title: "Digital Samurai",
      model: "Cyber Painter",
      prompt: "futuristic samurai warrior with energy sword in neon city",
      image: "https://maxm-imggenurl.web.val.run/futuristic samurai warrior with energy sword in neon city, AI generated art",
      likes: 3124,
      downloads: 789,
      generationTime: "1.8s",
    },
    {
      id: 4,
      title: "Holographic Entity",
      model: "Neural Vision",
      prompt: "transparent holographic being with glitch effects",
      image: "https://maxm-imggenurl.web.val.run/transparent holographic being with glitch effects, AI neural network art",
      likes: 1654,
      downloads: 334,
      generationTime: "2.7s",
    },
    {
      id: 5,
      title: "Data Stream",
      model: "Quantum Dream",
      prompt: "flowing streams of binary code and data visualization",
      image: "https://maxm-imggenurl.web.val.run/flowing streams of binary code and data visualization, quantum AI art",
      likes: 987,
      downloads: 245,
      generationTime: "2.1s",
    },
    {
      id: 6,
      title: "Neon Genesis",
      model: "Cyber Painter",
      prompt: "birth of digital consciousness with geometric patterns",
      image: "https://maxm-imggenurl.web.val.run/birth of digital consciousness with geometric patterns, cyberpunk AI art",
      likes: 2567,
      downloads: 612,
      generationTime: "3.4s",
    },
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-accent/10 cyber-grid">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/50">
              <Brain className="mr-2 h-4 w-4" />
              AI Generated Art
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="neon-text glitch-effect" data-text="ARTIFICIAL">ARTIFICIAL</span>{" "}
              <span className="text-accent">CREATIVITY</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of art creation through advanced AI algorithms. 
              Generate unique cyberpunk masterpieces with the power of neural networks and machine learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Art Generator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Create</span> Your Own AI Art
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Use our advanced AI models to generate unique digital art from your imagination
            </p>
          </motion.div>

          <Card className="bg-card/30 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              {/* Model Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Choose AI Model</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {aiModels.map((model) => (
                    <motion.div
                      key={model.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card
                        className={`cursor-pointer transition-all duration-300 ${
                          selectedModel === model.id
                            ? "border-primary/50 bg-primary/5"
                            : "border-primary/20 hover:border-primary/30"
                        }`}
                        onClick={() => setSelectedModel(model.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center mb-3">
                            <div className={`p-2 rounded-lg ${model.bgColor} mr-3`}>
                              <model.icon className={`h-5 w-5 ${model.color}`} />
                            </div>
                            <h4 className="font-semibold">{model.name}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {model.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Prompt Input */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Describe Your Vision</h3>
                <Textarea
                  placeholder="Enter your prompt here... e.g., 'cyberpunk samurai with glowing katana in neon city'"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[120px] bg-background/50 border-primary/30 focus:border-primary resize-none"
                />
                <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                  <span>Be specific and descriptive for best results</span>
                  <span>{prompt.length}/500</span>
                </div>
              </div>

              {/* Generation Controls */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="flex-1 bg-primary hover:bg-primary/80 neon-glow"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        <Cpu className="h-5 w-5" />
                      </motion.div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-5 w-5" />
                      Generate Art
                    </>
                  )}
                </Button>
                <Button variant="outline" size="lg" className="px-6">
                  <Settings className="mr-2 h-4 w-4" />
                  Advanced
                </Button>
              </div>

              {/* Generation Progress */}
              {isGenerating && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Generating your artwork...</span>
                    <span className="text-sm text-muted-foreground">2.3s remaining</span>
                  </div>
                  <div className="w-full bg-background/50 rounded-full h-2">
                    <motion.div
                      className="bg-primary h-2 rounded-full neon-glow"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured AI Art */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-accent">Featured</span> AI Creations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover amazing artworks generated by our AI models from the community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAIArt.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="group overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Model Badge */}
                    <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground">
                      <Brain className="mr-1 h-3 w-3" />
                      {artwork.model}
                    </Badge>

                    {/* Generation Time */}
                    <Badge className="absolute bottom-4 left-4 bg-accent/90 text-accent-foreground">
                      <Zap className="mr-1 h-3 w-3" />
                      {artwork.generationTime}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {artwork.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          &quot;{artwork.prompt}&quot;
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            {artwork.likes.toLocaleString()}
                          </span>
                          <span className="flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            {artwork.downloads}
                          </span>
                        </div>
                      </div>

                      <div className="flex space-x-2 pt-2">
                        <Button className="flex-1 bg-primary hover:bg-primary/80">
                          <Sparkles className="mr-2 h-4 w-4" />
                          Remix
                        </Button>
                        <Button variant="outline" size="sm" className="px-3">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card/20 backdrop-blur-sm rounded-lg border border-primary/20 p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">AI Art Statistics</h3>
              <p className="text-muted-foreground">Real-time metrics from our AI art generation platform</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary neon-text mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  50K+
                </motion.div>
                <p className="text-sm text-muted-foreground">Artworks Generated</p>
              </div>
              <div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-accent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  2.3s
                </motion.div>
                <p className="text-sm text-muted-foreground">Avg Generation Time</p>
              </div>
              <div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-chart-3 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  99.7%
                </motion.div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-chart-4 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  24/7
                </motion.div>
                <p className="text-sm text-muted-foreground">AI Availability</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIArtContent;