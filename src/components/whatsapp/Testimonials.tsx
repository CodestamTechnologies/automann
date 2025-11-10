"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rohit Mehta",
    role: "Digital Agency Owner",
    content: "We automated all our customer follow-ups and saw a 40% jump in conversions within a month! The chatbot handles all initial inquiries, and we only step in for complex queries.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Boutique Business Owner",
    content: "The festival message automation feature saved me hours — my clients love the personal touch. It's like having a personal assistant that never sleeps!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "E-commerce Founder",
    content: "The analytics dashboard gives us insights we never had before. We can now track which campaigns work best and optimize our messaging strategy in real-time.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "Marketing Consultant",
    content: "As a consultant, the white-label option is a game-changer. I can offer this to my clients under my brand, and the platform handles everything seamlessly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-green-400/8 to-emerald-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-teal-400/8 to-green-500/8 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e04_1px,transparent_1px),linear-gradient(to_bottom,#22c55e04_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Decorative green elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px green-accent-line"></div>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
            <span className="text-green-600 dark:text-green-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Testimonials
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="minimal-card p-8 hover-lift relative border border-green-100/50 dark:border-green-900/30 hover:border-green-300/50 dark:hover:border-green-700/50 bg-gradient-to-br from-green-50/20 to-emerald-50/10 dark:from-green-950/15 dark:to-emerald-950/10"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="w-5 h-5 text-green-500 fill-green-500" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}





