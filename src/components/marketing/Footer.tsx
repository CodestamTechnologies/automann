"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Youtube,
  ArrowRight,
  Target,
  Zap,
  BarChart3
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "Growth Hacking", href: "/services/growth-hacking" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Data Analytics", href: "/services/analytics" },
    { name: "Conversion Optimization", href: "/services/conversion" },
  ],
  solutions: [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Growth Strategies", href: "/strategies" },
    { name: "Industry Reports", href: "/reports" },
  ],
  resources: [
    { name: "Growth Blog", href: "/blog" },
    { name: "Marketing Guides", href: "/guides" },
    { name: "Webinars", href: "/webinars" },
    { name: "Tools", href: "/tools" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
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
        <div className="absolute inset-0 energy-pattern opacity-10" />
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
                <div className="w-12 h-12 dynamic-gradient rounded-xl flex items-center justify-center transform rotate-45">
                  <TrendingUp className="w-7 h-7 text-primary-foreground transform -rotate-45" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">GrowthLab</span>
                  <span className="text-sm text-primary font-medium tracking-wider">DIGITAL</span>
                </div>
              </div>
              
              <p className="text-background/80 max-w-md leading-relaxed">
                Accelerate your business growth with cutting-edge digital marketing strategies, 
                data-driven insights, and proven growth hacking techniques that deliver results.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-background/80">
                  <MapPin className="w-4 h-4" />
                  <span>123 Growth Street, Digital District, DD 12345</span>
                </div>
                <div className="flex items-center space-x-3 text-background/80">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-GROW</span>
                </div>
                <div className="flex items-center space-x-3 text-background/80">
                  <Mail className="w-4 h-4" />
                  <span>hello@growthlabdigital.com</span>
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
                    className="w-10 h-10 bg-background/10 rounded-2xl flex items-center justify-center hover:bg-primary/20 transition-colors"
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
                <Target className="w-5 h-5 mr-2 text-primary" />
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
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-primary" />
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
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold flex items-center">
                <Zap className="w-5 h-5 mr-2 text-primary" />
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
                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                Accelerate Growth
              </h3>
              <p className="text-background/80">Get exclusive growth strategies and insights delivered to your inbox.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="secondary" 
                className="bg-background text-foreground hover:bg-background/90 rounded-xl"
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
              &copy; 2024 GrowthLab Digital. All rights reserved. | 
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
              <Link href="/accessibility" className="text-background/60 hover:text-background transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
