"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  Cpu, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Youtube,
  ArrowRight,
  Brain,
  Shield,
  Code,
  Rocket
} from "lucide-react";

const footerLinks = {
  solutions: [
    { name: "AI Solutions", href: "/solutions/ai" },
    { name: "Quantum Computing", href: "/solutions/quantum" },
    { name: "Cybersecurity", href: "/solutions/security" },
    { name: "Machine Learning", href: "/solutions/ml" },
  ],
  services: [
    { name: "Consulting", href: "/services/consulting" },
    { name: "Implementation", href: "/services/implementation" },
    { name: "Support", href: "/services/support" },
    { name: "Training", href: "/services/training" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "White Papers", href: "/whitepapers" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
  ]
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "YouTube", href: "#", icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="absolute inset-0 cyber-grid opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 tech-gradient rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">NexusTech</span>
                  <span className="text-sm text-primary font-medium tracking-wider">INNOVATION HUB</span>
                </div>
              </div>
              
              <p className="text-background/80 max-w-md leading-relaxed">
                Pioneering the future of technology with cutting-edge AI, quantum computing, 
                and next-generation digital solutions that transform industries.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-background/80">
                  <MapPin className="w-4 h-4" />
                  <span>123 Innovation Drive, Tech City, TC 12345</span>
                </div>
                <div className="flex items-center space-x-3 text-background/80">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-TECH</span>
                </div>
                <div className="flex items-center space-x-3 text-background/80">
                  <Mail className="w-4 h-4" />
                  <span>hello@nexustech.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold flex items-center">
                <Brain className="w-5 h-5 mr-2 text-primary" />
                Solutions
              </h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary" />
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold flex items-center">
                <Code className="w-5 h-5 mr-2 text-primary" />
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-background/80 hover:text-background transition-colors flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-t border-background/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-center md:justify-start">
                <Rocket className="w-5 h-5 mr-2 text-primary" />
                Stay Connected
              </h3>
              <p className="text-background/80">Get the latest tech insights and innovation updates.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="secondary" 
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <Link href="/newsletter">
                  Subscribe to Newsletter
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-6 border-t border-background/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              &copy; 2024 NexusTech Innovation Hub. All rights reserved. | 
              Publisher: <span className="text-background">Codestam Technologies</span> | 
              URL: <span className="text-background">https://codestam.com</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="text-background/60 hover:text-background transition-colors">
                Security
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
