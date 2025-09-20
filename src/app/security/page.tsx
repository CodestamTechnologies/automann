"use client";

import Navbar from "@/components/tech/Navbar";
import Footer from "@/components/tech/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Zap, ArrowRight, Users, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const securityServices = [
  {
    id: 1,
    title: "AI Threat Detection",
    description: "Advanced machine learning algorithms that identify and neutralize threats in real-time before they can cause damage.",
    category: "Threat Intelligence",
    protection: "99.99%",
    responseTime: "< 1 second",
    coverage: "Global",
    image: "https://maxm-imggenurl.web.val.run/cybersecurity AI threat detection security technology futuristic digital protection",
    icon: Shield,
    features: ["Real-time Monitoring", "Behavioral Analysis", "Predictive Alerts", "Auto Response"],
    status: "Live"
  },
  {
    id: 2,
    title: "Zero Trust Architecture",
    description: "Comprehensive security framework that verifies every user and device before granting access to resources.",
    category: "Access Control",
    protection: "100%",
    responseTime: "Instant",
    coverage: "Enterprise",
    image: "https://maxm-imggenurl.web.val.run/zero trust security architecture access control cybersecurity futuristic",
    icon: Lock,
    features: ["Identity Verification", "Device Trust", "Network Segmentation", "Continuous Monitoring"],
    status: "Live"
  },
  {
    id: 3,
    title: "Quantum Encryption",
    description: "Next-generation encryption using quantum key distribution for unbreakable data protection.",
    category: "Data Protection",
    protection: "Unbreakable",
    responseTime: "Real-time",
    coverage: "Global",
    image: "https://maxm-imggenurl.web.val.run/quantum encryption cryptography security data protection futuristic technology",
    icon: Eye,
    features: ["Quantum Keys", "Perfect Secrecy", "Future-Proof", "Global Distribution"],
    status: "Beta"
  },
  {
    id: 4,
    title: "Incident Response",
    description: "Automated incident detection and response system with 24/7 monitoring and rapid threat neutralization.",
    category: "Response & Recovery",
    protection: "99.9%",
    responseTime: "< 30 seconds",
    coverage: "Global",
    image: "https://maxm-imggenurl.web.val.run/incident response cybersecurity security operations center SOC futuristic",
    icon: AlertTriangle,
    features: ["Auto Detection", "Rapid Response", "Forensic Analysis", "Recovery Planning"],
    status: "Live"
  }
];

const securityFeatures = [
  {
    title: "AI-Powered Defense",
    description: "Machine learning algorithms that adapt and evolve to counter emerging threats automatically.",
    icon: Shield
  },
  {
    title: "Real-time Monitoring",
    description: "24/7 surveillance of your entire digital infrastructure with instant threat detection.",
    icon: Eye
  },
  {
    title: "Automated Response",
    description: "Intelligent systems that respond to threats faster than human operators ever could.",
    icon: Zap
  },
  {
    title: "Compliance Ready",
    description: "Built-in compliance frameworks for GDPR, HIPAA, SOC 2, and other regulatory requirements.",
    icon: CheckCircle
  }
];

const securityStats = [
  { icon: Shield, value: "99.99%", label: "Threat Block Rate" },
  { icon: Clock, value: "< 1s", label: "Response Time" },
  { icon: Users, value: "1M+", label: "Protected Users" },
  { icon: Globe, value: "150+", label: "Countries Covered" }
];

export default function SecurityPage() {
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
              <Shield className="w-4 h-4 mr-2" />
              Cybersecurity Solutions
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Advanced
              <span className="block tech-gradient bg-clip-text text-transparent">
                Cybersecurity
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Protect your digital assets with our cutting-edge cybersecurity solutions featuring 
              AI-driven threat detection, quantum encryption, and autonomous response capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {securityStats.map((stat, index) => (
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

      {/* Security Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {securityServices.map((service) => (
              <Card key={service.id} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/10 hover:border-primary/30 group">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      service.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    } backdrop-blur-sm`}>
                      {service.status}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 text-foreground border-border/50 backdrop-blur-sm">
                      {service.category}
                    </Badge>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-primary/30">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-secondary/30 rounded-lg">
                      <div className="text-lg font-bold text-primary">{service.protection}</div>
                      <div className="text-xs text-muted-foreground">Protection</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/30 rounded-lg">
                      <div className="text-lg font-bold text-primary">{service.responseTime}</div>
                      <div className="text-xs text-muted-foreground">Response</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/30 rounded-lg">
                      <div className="text-lg font-bold text-primary">{service.coverage}</div>
                      <div className="text-xs text-muted-foreground">Coverage</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full tech-gradient hover:tech-glow text-primary-foreground border-0 group font-semibold" asChild>
                    <Link href={`/security/${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Our
              <span className="block tech-gradient bg-clip-text text-transparent">
                Security Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive security platform combines cutting-edge technology with proven methodologies 
              to provide unmatched protection for your digital assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/10">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
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
            Secure Your Digital Future
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Don&apos;t wait for a breach to happen. Protect your organization with our 
            advanced cybersecurity solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-gradient hover:tech-glow text-primary-foreground border-0 font-semibold" asChild>
              <Link href="/contact">
                Get Security Assessment
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10" asChild>
              <Link href="/solutions">
                View All Solutions
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
