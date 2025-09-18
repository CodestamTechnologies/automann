"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Zap, 
  Mail, 
  MapPin, 
  Phone,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    explore: [
      { name: "Gallery", href: "/gallery" },
      { name: "Collections", href: "/collections" },
      { name: "AI Art", href: "/ai-art" },
      { name: "Featured Artists", href: "/artists" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Press Kit", href: "/press" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Community", href: "/community" },
      { name: "Support", href: "/support" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "DMCA", href: "/dmca" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/codestam" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/codestam" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/codestam" },
    { name: "GitHub", icon: Github, href: "https://github.com/codestam" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="relative bg-card/20 backdrop-blur-sm border-t border-primary/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 border border-primary/10 rotate-45"
        animate={{
          rotate: [45, 405, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6 group">
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Zap className="h-8 w-8 text-primary neon-glow" />
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                </motion.div>
                <span className="text-2xl font-bold neon-text">NEON FLUX</span>
              </Link>
              
              <p className="text-muted-foreground mb-6 max-w-sm">
                Pioneering the future of digital art through cutting-edge technology, 
                artificial intelligence, and boundless creativity.
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3 text-primary" />
                  <span>Cyber City, Digital Realm</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-4 w-4 mr-3 text-primary" />
                  <span>hello@codestam.com</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3 text-primary" />
                  <span>+1 (555) NEON-ART</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-primary">Explore</h3>
              <ul className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-accent">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-chart-3">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-chart-3 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-chart-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-chart-4 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <Separator className="bg-primary/20" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          {/* Copyright */}
          <div className="flex items-center text-sm text-muted-foreground">
            <span>&copy; 2024 NEON FLUX. All rights reserved.</span>
            <span className="mx-2">•</span>
            <span>Powered by</span>
            <Link 
              href="https://codestam.com" 
              className="ml-1 text-primary hover:text-primary/80 transition-colors"
            >
              Codestam Technologies
            </Link>
            <Heart className="h-4 w-4 ml-2 text-destructive animate-pulse" />
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-card/30 border border-primary/20 hover:border-primary/50 transition-colors duration-300 group"
              >
                <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
            
            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="ml-4 border-primary/30 hover:border-primary/50 hover:bg-primary/10"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="pb-8 text-center"
        >
          <p className="text-xs text-muted-foreground max-w-4xl mx-auto">
            NEON FLUX is a revolutionary digital art platform that combines artificial intelligence, 
            blockchain technology, and human creativity to create the future of digital expression. 
            All artworks are authenticated and secured using advanced cryptographic methods.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;