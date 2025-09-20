"use client";

import { motion } from "framer-motion";
import { Shield, Wrench, Search, Award, Clock, Users } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Authentication",
    description: "Expert verification of authenticity, provenance, and condition assessment by certified horologists.",
    features: ["Certificate of Authenticity", "Provenance Research", "Condition Report", "Market Valuation"],
  },
  {
    icon: Wrench,
    title: "Restoration",
    description: "Meticulous restoration services using period-correct techniques and original components when possible.",
    features: ["Movement Overhaul", "Case Refinishing", "Dial Restoration", "Strap Replacement"],
  },
  {
    icon: Search,
    title: "Acquisition",
    description: "Personalized sourcing service to find specific timepieces from our global network of trusted dealers.",
    features: ["Custom Searches", "Private Sales", "Auction Representation", "Investment Guidance"],
  },
];

const stats = [
  { number: "2,500+", label: "Timepieces Authenticated", icon: Award },
  { number: "50+", label: "Years Combined Experience", icon: Clock },
  { number: "98%", label: "Client Satisfaction Rate", icon: Users },
];

export default function Services() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Expert Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of certified horologists provides comprehensive services 
            to collectors, from authentication to restoration and acquisition.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="minimal-card rounded-xl p-8 hover:elegant-shadow transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-10 h-10 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
