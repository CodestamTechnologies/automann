"use client";

import { motion } from "framer-motion";
import { TreePine, Droplets, Recycle, Users, Award, TrendingUp } from "lucide-react";

const SustainabilityImpact = () => {
  const impacts = [
    {
      icon: TreePine,
      value: "50,000+",
      label: "Trees Planted",
      description: "Through our reforestation partnerships",
      color: "text-green-600"
    },
    {
      icon: Droplets,
      value: "2.5M",
      label: "Liters Water Saved",
      description: "By choosing sustainable alternatives",
      color: "text-blue-600"
    },
    {
      icon: Recycle,
      value: "15,000kg",
      label: "Waste Diverted",
      description: "From landfills through recycling",
      color: "text-primary"
    },
    {
      icon: Users,
      value: "25,000+",
      label: "Community Members",
      description: "Living more sustainably together",
      color: "text-accent"
    }
  ];

  const certifications = [
    {
      name: "B-Corp Certified",
      description: "Meeting highest standards of social and environmental performance",
      icon: Award
    },
    {
      name: "Carbon Neutral",
      description: "100% carbon neutral operations and shipping",
      icon: TreePine
    },
    {
      name: "Fair Trade",
      description: "Supporting fair wages and working conditions",
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4" />
            <span>Our Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Making a Real Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every purchase contributes to a more sustainable future. Here&apos;s the positive impact we&apos;ve created together.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-2xl organic-shadow mb-4 group-hover:shadow-lg transition-all duration-300"
              >
                <impact.icon className={`h-8 w-8 ${impact.color}`} />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="text-3xl font-bold text-foreground mb-2"
              >
                {impact.value}
              </motion.div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {impact.label}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-background rounded-3xl p-8 organic-shadow"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Certifications &amp; Commitments
            </h3>
            <p className="text-muted-foreground">
              We&apos;re proud to be recognized for our commitment to sustainability and ethical business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-4"
                >
                  <cert.icon className="h-6 w-6" />
                </motion.div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {cert.name}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-earth rounded-3xl p-12 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
            >
              Join Our Sustainability Mission
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Every small action creates a ripple effect. Start your sustainable journey today and be part of the positive change our planet needs.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-200 organic-shadow"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SustainabilityImpact;