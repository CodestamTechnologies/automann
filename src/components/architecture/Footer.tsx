"use client";

import { motion } from "framer-motion";
import { Building2, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Architectural Design", href: "/services#architectural" },
      { name: "Urban Planning", href: "/services#urban-planning" },
      { name: "Interior Design", href: "/services#interior" },
      { name: "Landscape Architecture", href: "/services#landscape" }
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" }
    ],
    resources: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Press Kit", href: "/press" }
    ]
  };

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/architectstudio" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/architectstudio" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/architectstudio" }
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px section-divider" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="architectural-layout gap-12">
            {/* Company Info */}
            <motion.div
              className="span-4 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <motion.div
                  className="relative floating-element"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 border border-background/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-background" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent geometric-rotate" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight">
                    ARCHITECT
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-background/70 -mt-1">
                    Design Studio
                  </span>
                </div>
              </Link>

              {/* Description */}
              <p className="text-background/80 leading-relaxed architectural-spacing">
                Creating innovative architectural solutions that blend functionality with aesthetic excellence, 
                transforming spaces into inspiring environments that stand the test of time.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>+1 (555) 123-ARCH</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>hello@architectstudio.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>New York, NY</span>
                </div>
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div
              className="span-2 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-background/80 hover:text-accent transition-colors duration-200 group flex items-center space-x-2"
                    >
                      <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm uppercase tracking-[0.1em]">{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              className="span-2 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-background/80 hover:text-accent transition-colors duration-200 group flex items-center space-x-2"
                    >
                      <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm uppercase tracking-[0.1em]">{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources & Social */}
            <motion.div
              className="span-4 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                Resources
              </h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.resources.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-background/80 hover:text-accent transition-colors duration-200 group flex items-center space-x-2"
                    >
                      <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm uppercase tracking-[0.1em]">{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/70">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-200 group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="w-4 h-4 text-background/80 group-hover:text-background transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="py-8 border-t border-background/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-background/70">
              &copy; {currentYear} Architect Studio. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-background/70 hover:text-accent transition-colors uppercase tracking-[0.1em]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-background/70 hover:text-accent transition-colors uppercase tracking-[0.1em]"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-background/70 hover:text-accent transition-colors uppercase tracking-[0.1em]"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Publisher Info */}
            <div className="text-xs text-background/50">
              Published by Codestam Technologies
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
