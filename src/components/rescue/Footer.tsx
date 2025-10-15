"use client";

import { motion } from "framer-motion";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { name: "Our Story", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Success Stories", href: "/success-stories" },
      { name: "Annual Reports", href: "/reports" },
    ],
    animals: [
      { name: "Available Animals", href: "/animals" },
      { name: "Adoption Process", href: "/adoption" },
      { name: "Foster Program", href: "/foster" },
      { name: "Lost & Found", href: "/lost-found" },
    ],
    support: [
      { name: "Volunteer", href: "/volunteer" },
      { name: "Donate", href: "/donate" },
      { name: "Sponsor an Animal", href: "/sponsor" },
      { name: "Corporate Partnerships", href: "/partnerships" },
    ],
    resources: [
      { name: "Pet Care Tips", href: "/resources" },
      { name: "Emergency Contacts", href: "/emergency" },
      { name: "Events", href: "/events" },
      { name: "Newsletter", href: "/newsletter" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/pawsandhearts" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/pawsandhearts" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/pawsandhearts" },
  ];

  return (
    <footer className="bg-secondary/10 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rescue-card rounded-full flex items-center justify-center soft-glow">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-foreground">
                    Paws & Hearts
                  </span>
                  <span className="text-xs text-muted-foreground -mt-1">Animal Rescue</span>
                </div>
              </Link>
              
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Dedicated to rescuing, rehabilitating, and rehoming animals in need. 
                Every life matters, and every story deserves a happy ending.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Emergency: (555) 123-HELP</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@pawsandhearts.org</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>123 Rescue Lane, Hope City, HC 12345</span>
                </div>
              </div>
            </motion.div>

            {/* About Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">About Us</h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Animals Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">Our Animals</h3>
              <ul className="space-y-3">
                {footerLinks.animals.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">Get Involved</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-t border-primary/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-6">
              Get updates on our rescue animals, success stories, and upcoming events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/50 border border-primary/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-8 border-t border-primary/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} Paws & Hearts Animal Rescue. All rights reserved. Published by{" "}
              <a
                href="https://codestam.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
              >
                Codestam Technologies
              </a>
              .
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}



