"use client";

import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Users, Gift, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: MessageSquare,
    title: "Chatbot Automation",
    description: "Create AI-powered chatbots that answer instantly — capture leads, handle FAQs, and provide 24×7 support.",
    emoji: "💬",
  },
  {
    icon: BarChart3,
    title: "WhatsApp Analytics",
    description: "See what&apos;s working! Get detailed insights on message delivery, response rates, leads, and campaign performance.",
    emoji: "📊",
  },
  {
    icon: Users,
    title: "Lead Conversion Tools",
    description: "Turn chats into customers. Assign leads, track follow-ups, and integrate with your CRM for seamless sales flow.",
    emoji: "🤖",
  },
  {
    icon: Gift,
    title: "Festival & Occasion Messages",
    description: "Automate festival greetings, birthdays, or custom messages — build stronger relationships while you sleep.",
    emoji: "🎉",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Send bulk or personalized messages at the right time — never miss a lead or occasion again.",
    emoji: "📅",
  },
];

const benefits = [
  "Official API Integration — secure, reliable, and scalable.",
  "No Coding Needed — easy drag & drop setup.",
  "Multi-Agent Support — manage chats with your whole team.",
  "Affordable Plans — built for startups, agencies, and growing businesses.",
];

export default function Features() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e05_1px,transparent_1px),linear-gradient(to_bottom,#22c55e05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
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
            <span className="text-green-600 dark:text-green-400 font-semibold text-sm uppercase tracking-wider">Features</span>
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Features Overview
          </h2>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="minimal-card p-6 hover-lift border border-green-100/50 dark:border-green-900/30 hover:border-green-300/50 dark:hover:border-green-700/50 bg-gradient-to-br from-green-50/30 to-emerald-50/20 dark:from-green-950/20 dark:to-emerald-950/10"
            >
              <div className="mb-4">
                <div className="feature-icon mb-4 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50">
                  <feature.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-3xl mb-3">{feature.emoji}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="minimal-card p-10 bg-gradient-to-br from-green-50/50 to-emerald-50/30 dark:from-green-950/30 dark:to-emerald-950/20 border border-green-200/50 dark:border-green-800/30"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Why Choose Us
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/features"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:via-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/40"
            >
              See it in Action
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all"
            >
              Try for Free
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





