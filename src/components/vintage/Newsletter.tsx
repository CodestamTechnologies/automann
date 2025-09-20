"use client";

import { motion } from "framer-motion";
import { Mail, Clock, Shield, Award } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Stay Informed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Receive exclusive updates on new acquisitions, market insights, 
              and horological discoveries from our expert team.
            </p>
          </div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 pt-8"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Market Updates</h3>
              <p className="text-sm text-muted-foreground text-center">
                Weekly insights on vintage watch market trends and valuations
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Authentication Tips</h3>
              <p className="text-sm text-muted-foreground text-center">
                Expert guidance on identifying authentic vintage timepieces
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Exclusive Access</h3>
              <p className="text-sm text-muted-foreground text-center">
                First access to rare pieces and private collection events
              </p>
            </div>
          </motion.div>

          {/* Privacy Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xs text-muted-foreground pt-4"
          >
            We respect your privacy. Unsubscribe at any time. No spam, ever.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
