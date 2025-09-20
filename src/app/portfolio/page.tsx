"use client";

import Navbar from "@/components/arts/Navbar";
import Footer from "@/components/arts/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Palette, Camera, Brush, PenTool, ArrowRight, Award, Heart, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const portfolioProjects = [
  {
    id: 1,
    title: "Luxury Hotel Art Collection",
    description: "Curated collection of 50 original artworks for a prestigious 5-star hotel chain.",
    category: "Fine Art",
    client: "Grand Hotels International",
    duration: "6 months",
    budget: "$150,000",
    image: "https://maxm-imggenurl.web.val.run/luxury hotel art collection prestigious 5-star hotel chain artwork",
    icon: Palette,
    status: "Completed",
    year: "2024"
  },
  {
    id: 2,
    title: "Corporate Brand Identity",
    description: "Complete brand identity redesign for a Fortune 500 technology company.",
    category: "Brand Design",
    client: "TechCorp Global",
    duration: "3 months",
    budget: "$75,000",
    image: "https://maxm-imggenurl.web.val.run/corporate brand identity Fortune 500 technology company design",
    icon: Brush,
    status: "Completed",
    year: "2024"
  },
  {
    id: 3,
    title: "Wedding Photography Series",
    description: "Exclusive wedding photography services for high-profile celebrity wedding.",
    category: "Photography",
    client: "Private Client",
    duration: "1 week",
    budget: "$25,000",
    image: "https://maxm-imggenurl.web.val.run/wedding photography celebrity high-profile exclusive elegant",
    icon: Camera,
    status: "Completed",
    year: "2024"
  },
  {
    id: 4,
    title: "Museum Exhibition Design",
    description: "Interactive digital exhibition design for contemporary art museum.",
    category: "Digital Art",
    client: "Modern Art Museum",
    duration: "4 months",
    budget: "$100,000",
    image: "https://maxm-imggenurl.web.val.run/museum exhibition design interactive digital contemporary art",
    icon: PenTool,
    status: "Completed",
    year: "2023"
  }
];

const teamMembers = [
  {
    name: "Isabella Martinez",
    role: "Lead Fine Artist",
    bio: "Award-winning painter with 15+ years of experience in traditional and contemporary art.",
    image: "https://maxm-imggenurl.web.val.run/professional woman fine artist painter elegant sophisticated",
    expertise: ["Oil Painting", "Watercolors", "Mixed Media"],
    avatar: "IM"
  },
  {
    name: "James Thompson",
    role: "Senior Photographer",
    bio: "Internationally recognized photographer specializing in artistic and commercial photography.",
    image: "https://maxm-imggenurl.web.val.run/professional man photographer artistic commercial sophisticated",
    expertise: ["Portrait Photography", "Event Photography", "Artistic Shots"],
    avatar: "JT"
  },
  {
    name: "Sophia Chen",
    role: "Digital Design Director",
    bio: "Creative director with expertise in brand identity and digital art creation.",
    image: "https://maxm-imggenurl.web.val.run/professional woman digital designer creative director brand identity",
    expertise: ["Brand Design", "Digital Art", "UI/UX Design"],
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Art Consultant",
    bio: "Art historian and consultant with deep knowledge of contemporary art markets.",
    image: "https://maxm-imggenurl.web.val.run/professional man art consultant historian contemporary art",
    expertise: ["Art Consultation", "Market Analysis", "Collection Building"],
    avatar: "MR"
  }
];

const achievements = [
  { icon: Award, value: "25+", label: "International Awards" },
  { icon: Users, value: "500+", label: "Satisfied Clients" },
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Heart, value: "1000+", label: "Artworks Created" }
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 artistic-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full">
              <Award className="w-4 h-4 mr-2" />
              Our Portfolio
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Creative Excellence
              <span className="block elegant-gradient bg-clip-text text-transparent">
                in Action
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive portfolio of successful projects, award-winning artworks, 
              and the talented team that brings creative visions to life.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:elegant-glow transition-all duration-300">
                  <achievement.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.value}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Featured
              <span className="block elegant-gradient bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover some of our most successful and impactful creative projects 
              that showcase our expertise and artistic excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/10 hover:border-primary/30 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500/20 text-green-600 border-green-500/30 backdrop-blur-sm">
                      {project.status}
                    </Badge>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 text-foreground border-border/50 backdrop-blur-sm">
                      {project.year}
                    </Badge>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-secondary/30 rounded-xl">
                      <div className="text-lg font-bold text-primary">{project.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/30 rounded-xl">
                      <div className="text-lg font-bold text-primary">{project.budget}</div>
                      <div className="text-xs text-muted-foreground">Budget</div>
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <div className="text-sm font-semibold text-accent mb-1">Client</div>
                    <div className="text-foreground font-medium">{project.client}</div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full elegant-gradient hover:elegant-glow text-primary-foreground border-0 group font-semibold rounded-full" asChild>
                    <Link href={`/portfolio/${project.id}`}>
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 artistic-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet Our
              <span className="block elegant-gradient bg-clip-text text-transparent">
                Creative Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The talented artists and creative professionals who bring exceptional 
              artistic vision and technical expertise to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/10">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xl">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 artistic-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Let&apos;s discuss your creative vision and see how our team can bring 
            your artistic dreams to life with our exceptional portfolio of services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="elegant-gradient hover:elegant-glow text-primary-foreground border-0 font-semibold rounded-full" asChild>
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-full" asChild>
              <Link href="/services">
                View Services
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
