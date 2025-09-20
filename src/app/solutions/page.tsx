import type { Metadata } from "next";
import Navbar from "@/components/tech/Navbar";
import Footer from "@/components/tech/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Shield, Code, Zap, Rocket, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology Solutions — NexusTech Innovation Hub",
  description: "Explore our comprehensive suite of cutting-edge technology solutions including AI, quantum computing, cybersecurity, and machine learning platforms.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const solutions = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description: "Revolutionary artificial intelligence that transforms data into actionable insights with unprecedented accuracy and speed.",
    category: "Artificial Intelligence",
    complexity: "Advanced",
    performance: "99.9%",
    users: 50000,
    image: "https://maxm-imggenurl.web.val.run/artificial intelligence AI analytics data science machine learning futuristic technology",
    icon: Brain,
    features: ["Real-time Processing", "Predictive Analytics", "Natural Language", "Auto Learning"],
    status: "Live",
    pricing: "Enterprise",
    deployment: "Cloud & On-Premise"
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
    features: ["Quantum Algorithms", "Superposition", "Entanglement", "Error Correction"],
    status: "Beta",
    pricing: "Custom",
    deployment: "Cloud"
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
    features: ["Threat Detection", "Auto Response", "Zero Trust", "Compliance"],
    status: "Live",
    pricing: "Tiered",
    deployment: "Hybrid"
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
    features: ["Auto Scaling", "Model Training", "Real-time Inference", "MLOps"],
    status: "Live",
    pricing: "Usage-based",
    deployment: "Cloud"
  },
  {
    id: 5,
    title: "Edge Computing Network",
    description: "Distributed computing infrastructure that brings processing power closer to data sources for ultra-low latency.",
    category: "Edge Computing",
    complexity: "Intermediate",
    performance: "5ms Latency",
    users: 75000,
    image: "https://maxm-imggenurl.web.val.run/edge computing distributed network infrastructure technology futuristic",
    icon: Zap,
    features: ["Low Latency", "Distributed Processing", "IoT Integration", "Real-time Analytics"],
    status: "Live",
    pricing: "Per Node",
    deployment: "Edge & Cloud"
  },
  {
    id: 6,
    title: "Blockchain Infrastructure",
    description: "Enterprise-grade blockchain platform with smart contracts and decentralized applications support.",
    category: "Blockchain",
    complexity: "Advanced",
    performance: "1000 TPS",
    users: 30000,
    image: "https://maxm-imggenurl.web.val.run/blockchain technology cryptocurrency smart contracts decentralized futuristic",
    icon: Rocket,
    features: ["Smart Contracts", "DeFi Support", "NFT Platform", "Cross-chain"],
    status: "Live",
    pricing: "Transaction-based",
    deployment: "Distributed"
  }
];

export default function SolutionsPage() {
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
              <Star className="w-4 h-4 mr-2" />
              Technology Solutions
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Revolutionary
              <span className="block tech-gradient bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of cutting-edge technologies that are reshaping industries 
              and pushing the boundaries of what&apos;s possible in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Card key={solution.id} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/10 hover:border-primary/30 group">
                <div className="relative overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
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
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-secondary/30 rounded-lg">
                      <div className="text-lg font-bold text-primary">{solution.performance}</div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/30 rounded-lg">
                      <div className="text-lg font-bold text-primary">{solution.users.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {solution.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Deployment Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Complexity:</span>
                      <span className="text-foreground font-medium">{solution.complexity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pricing:</span>
                      <span className="text-foreground font-medium">{solution.pricing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deployment:</span>
                      <span className="text-foreground font-medium">{solution.deployment}</span>
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Join thousands of organizations that have revolutionized their operations with our 
            cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-gradient hover:tech-glow text-primary-foreground border-0 font-semibold" asChild>
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10" asChild>
              <Link href="/ai-lab">
                Schedule Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
