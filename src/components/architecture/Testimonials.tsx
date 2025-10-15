"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO, Tech Innovations",
      company: "Tech Innovations",
      content: "The architectural design exceeded our expectations. The team&apos;s attention to detail and innovative approach created a workspace that truly inspires our team every day.",
      rating: 5,
      project: "Corporate Headquarters",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Property Developer",
      company: "Urban Developments",
      content: "Working with this team was a game-changer. They transformed our vision into reality with sustainable design principles that set new standards in the industry.",
      rating: 5,
      project: "Residential Complex",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Museum Director",
      company: "Cultural Arts Center",
      content: "The cultural center design perfectly balances functionality with aesthetic beauty. It has become a landmark that the community truly cherishes.",
      rating: 5,
      project: "Cultural Arts Center",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
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
              Client Testimonials
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 architectural-spacing">
            <span className="block">WHAT OUR</span>
            <span className="block text-accent">CLIENTS SAY</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about 
            working with us on their architectural projects.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="architectural-layout gap-8">
          {/* Main Testimonial - Large */}
          <motion.div
            className="span-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="architectural-frame p-8 relative">
              {/* Quote Icon */}
              <motion.div
                className="absolute top-6 right-6 w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Quote className="w-6 h-6 text-accent" />
              </motion.div>

              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 text-accent fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl text-foreground leading-relaxed italic">
                  &ldquo;{testimonials[0].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <motion.img
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/20"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[0].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[0].role}</div>
                    <div className="text-xs text-accent font-medium">{testimonials[0].project}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Testimonials */}
          <div className="span-4 space-y-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="design-card p-6 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-accent/10 border border-accent/20 rounded flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Quote className="w-4 h-4 text-accent" />
                </motion.div>

                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-sm text-foreground leading-relaxed italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border border-accent/20"
                    />
                    <div>
                      <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "150+", label: "Projects Completed" },
            { number: "25", label: "Years Experience" },
            { number: "50+", label: "Awards Won" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
