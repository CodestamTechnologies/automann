"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-green-400/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-teal-400/12 to-green-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e06_1px,transparent_1px),linear-gradient(to_bottom,#22c55e06_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Decorative green elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px green-accent-line"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="minimal-card p-12 text-center bg-gradient-to-br from-green-50/40 to-emerald-50/30 dark:from-green-950/30 dark:to-emerald-950/20 border-2 border-green-300/50 dark:border-green-700/50 relative overflow-hidden"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-transparent rounded-br-full"></div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-400/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-green-400/20 to-transparent rounded-tr-full"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-emerald-400/20 to-transparent rounded-tl-full"></div>
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
              <span className="text-green-600 dark:text-green-400 font-semibold text-xs uppercase tracking-wider">Get Started</span>
              <div className="w-8 h-1 bg-gradient-to-r from-emerald-600 to-green-500 rounded-full"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Start Automating Your WhatsApp Today
            </h2>
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get access to chatbot builder, analytics, and automation — all in one dashboard.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white font-medium rounded-lg hover:from-green-600 hover:via-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/40"
            >
              <span>👉 Start Free Trial</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact#demo"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-200/50 dark:border-green-800/50 text-foreground font-medium rounded-lg hover:bg-green-50/50 dark:hover:bg-green-950/20 hover:border-green-400 dark:hover:border-green-600 transition-all duration-300"
            >
              💬 Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}





