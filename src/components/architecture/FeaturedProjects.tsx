"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Urban Living Complex",
      category: "Residential",
      location: "New York, NY",
      year: "2024",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=center",
      description: "A modern residential complex featuring sustainable design principles and innovative space utilization.",
      features: ["LEED Certified", "Smart Home Integration", "Green Roof System"]
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "Commercial",
      location: "San Francisco, CA",
      year: "2023",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=center",
      description: "An iconic corporate headquarters that redefines workplace design with flexible spaces and natural lighting.",
      features: ["Open Floor Plan", "Natural Ventilation", "Solar Integration"]
    },
    {
      id: 3,
      title: "Cultural Arts Center",
      category: "Cultural",
      location: "Chicago, IL",
      year: "2023",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=400&fit=crop&crop=center",
      description: "A dynamic cultural center that serves as a hub for arts, education, and community engagement.",
      features: ["Multi-Purpose Spaces", "Acoustic Design", "Accessibility Focus"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 geometric-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-accent uppercase tracking-[0.2em]">
              Featured Work
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 architectural-spacing">
            <span className="block">RECENT</span>
            <span className="block text-accent">PROJECTS</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our latest architectural achievements that showcase innovation, 
            sustainability, and exceptional design excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="architectural-layout gap-8">
          {/* Main Project - Large */}
          <motion.div
            className="span-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="group architectural-frame p-8 hover:architectural-pulse transition-all duration-500">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-background">
                  <div className="text-sm font-medium uppercase tracking-[0.2em] mb-1">
                    {projects[0].category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{projects[0].title}</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{projects[0].location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{projects[0].year}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {projects[0].description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {projects[0].features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/projects/${projects[0].id}`}
                  className="group inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                >
                  <span className="font-medium">View Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Side Projects */}
          <div className="span-4 space-y-8">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                className="group design-card p-6 hover:architectural-pulse transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-background">
                    <div className="text-xs font-medium uppercase tracking-[0.2em] mb-1">
                      {project.category}
                    </div>
                    <h4 className="text-lg font-bold">{project.title}</h4>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <Link
                    href={`/projects/${project.id}`}
                    className="group inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors text-sm"
                  >
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center space-x-3 px-8 py-4 border-2 border-foreground text-foreground rounded-lg hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <span className="font-semibold text-lg">View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
