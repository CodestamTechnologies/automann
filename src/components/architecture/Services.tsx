"use client";

import { motion } from "framer-motion";
import { Building2, Compass, Ruler, Palette, Lightbulb, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Comprehensive architectural design services from concept to completion, creating innovative and functional spaces.",
      features: ["Concept Development", "3D Visualization", "Technical Drawings", "Design Development"]
    },
    {
      icon: Compass,
      title: "Urban Planning",
      description: "Strategic urban planning solutions that create sustainable, livable communities for the future.",
      features: ["Master Planning", "Zoning Analysis", "Community Engagement", "Sustainability Planning"]
    },
    {
      icon: Ruler,
      title: "Interior Design",
      description: "Thoughtful interior design that enhances functionality and creates inspiring environments.",
      features: ["Space Planning", "Material Selection", "Furniture Design", "Lighting Design"]
    },
    {
      icon: Palette,
      title: "Landscape Architecture",
      description: "Beautiful landscape designs that connect buildings with their natural surroundings.",
      features: ["Site Analysis", "Plant Selection", "Hardscape Design", "Environmental Integration"]
    },
    {
      icon: Lightbulb,
      title: "Sustainable Design",
      description: "Eco-friendly design solutions that minimize environmental impact while maximizing efficiency.",
      features: ["LEED Certification", "Energy Modeling", "Green Materials", "Water Conservation"]
    },
    {
      icon: Shield,
      title: "Project Management",
      description: "Comprehensive project management ensuring timely delivery and quality execution.",
      features: ["Timeline Management", "Budget Control", "Quality Assurance", "Stakeholder Coordination"]
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 architectural-texture opacity-20" />
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
              Our Services
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 architectural-spacing">
            <span className="block">COMPREHENSIVE</span>
            <span className="block text-accent">DESIGN SERVICES</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From initial concept to final construction, we provide end-to-end architectural 
            services that bring your vision to life with precision and creativity.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group design-card p-8 hover:architectural-pulse transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4 architectural-spacing">
              Our Design Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to ensure every project meets the highest standards of design and execution.
            </p>
          </div>

          <div className="architectural-layout items-center">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision and requirements" },
              { step: "02", title: "Concept", description: "Developing initial design concepts and ideas" },
              { step: "03", title: "Design", description: "Refining designs with detailed planning" },
              { step: "04", title: "Development", description: "Creating technical drawings and specifications" },
              { step: "05", title: "Construction", description: "Overseeing the building process" },
              { step: "06", title: "Completion", description: "Final walkthrough and project delivery" }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="span-2 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-lg font-bold text-accent group-hover:text-accent-foreground transition-colors">
                      {phase.step}
                    </span>
                  </motion.div>
                  
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < 5 && (
                  <motion.div
                    className="hidden lg:block absolute top-8 left-full w-full h-px bg-muted-foreground/30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
