"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Mountain, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Award,
  Shield,
  Globe,
  Clock
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    destinations: [
      { name: "Swiss Alps", href: "/destinations/swiss-alps" },
      { name: "Canadian Rockies", href: "/destinations/canadian-rockies" },
      { name: "Himalayas", href: "/destinations/himalayas" },
      { name: "Patagonia", href: "/destinations/patagonia" },
      { name: "All Destinations", href: "/destinations" }
    ],
    experiences: [
      { name: "Helicopter Tours", href: "/experiences/helicopter-tours" },
      { name: "Alpine Expeditions", href: "/experiences/expeditions" },
      { name: "Luxury Dining", href: "/experiences/dining" },
      { name: "Wellness Retreats", href: "/experiences/wellness" },
      { name: "Photography Tours", href: "/experiences/photography" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Contact", href: "/contact" }
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Safety Guidelines", href: "/safety" },
      { name: "Travel Insurance", href: "/insurance" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/alpineluxe", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/alpineluxe", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/alpineluxe", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/alpineluxe", label: "LinkedIn" }
  ];

  const certifications = [
    { icon: Award, text: "World Travel Awards Winner" },
    { icon: Shield, text: "Safety Certified" },
    { icon: Globe, text: "Sustainable Tourism" },
    { icon: Clock, text: "24/7 Support" }
  ];

  return (
    <footer className="luxury-gradient border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Mountain className="h-10 w-10 text-primary" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full alpine-glow"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gradient-gold">Alpine Luxe</h3>
                  <p className="text-sm text-white/70">Premium Mountain Adventures</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 leading-relaxed">
                Experience the world&apos;s most exclusive mountain destinations with unparalleled luxury, 
                personalized service, and breathtaking alpine vistas.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-white/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-white/80">concierge@alpineluxe.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-white/80">Zermatt, Switzerland</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/10 hover:bg-primary text-white hover:text-primary-foreground rounded-xl transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Destinations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-white">Destinations</h4>
                <ul className="space-y-2">
                  {footerLinks.destinations.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Experiences */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-white">Experiences</h4>
                <ul className="space-y-2">
                  {footerLinks.experiences.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-white">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-bold text-white">Support</h4>
                <ul className="space-y-2">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3">
                <cert.icon className="h-5 w-5 text-primary" />
                <span className="text-white/70 text-sm">{cert.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              &copy; {currentYear} Alpine Luxe. All rights reserved. | Publisher: Codestam Technologies | 
              <Link href="https://codestam.com" className="hover:text-primary transition-colors ml-1">
                codestam.com
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/70">
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}