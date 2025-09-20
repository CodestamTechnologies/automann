"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  Leaf, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Youtube,
  ArrowRight,
  Heart,
  Users,
  ShoppingBag
} from "lucide-react";

const footerLinks = {
  products: [
    { name: "Home & Garden", href: "/products/home-garden" },
    { name: "Personal Care", href: "/products/personal-care" },
    { name: "Fashion & Textiles", href: "/products/fashion" },
    { name: "Food & Beverages", href: "/products/food" },
  ],
  lifestyle: [
    { name: "Sustainability Tips", href: "/lifestyle/tips" },
    { name: "Green Living Guide", href: "/lifestyle/guide" },
    { name: "Eco-Friendly Recipes", href: "/lifestyle/recipes" },
    { name: "Zero Waste Living", href: "/lifestyle/zero-waste" },
  ],
  community: [
    { name: "Our Story", href: "/about" },
    { name: "Sustainability Mission", href: "/mission" },
    { name: "Community Forum", href: "/community/forum" },
    { name: "Events & Workshops", href: "/community/events" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
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
        <div className="absolute inset-0 elegant-pattern opacity-5" />
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
                <div className="w-12 h-12 professional-gradient rounded-xl flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">EcoLife</span>
                  <span className="text-sm text-primary font-medium tracking-wider">SUSTAINABLE LIVING</span>
                </div>
              </div>
              
              <p className="text-background/80 max-w-md leading-relaxed">
                Committed to providing eco-friendly products and sustainable living solutions 
                that help you reduce your environmental impact while embracing a healthier lifestyle.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-background/80">
                  <MapPin className="w-4 h-4" />
                  <span>123 Green Street, Eco District, ED 12345</span>
                </div>
                <div className="flex items-center space-x-3 text-background/80">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-ECO</span>
                </div>
                <div className="flex items-center space-x-3 text-background/80">
                  <Mail className="w-4 h-4" />
                  <span>hello@ecolife.com</span>
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
                    className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors"
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
                <ShoppingBag className="w-5 h-5 mr-2 text-primary" />
                Products
              </h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
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
                <Heart className="w-5 h-5 mr-2 text-primary" />
                Lifestyle
              </h3>
              <ul className="space-y-3">
                {footerLinks.lifestyle.map((link) => (
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
                <Users className="w-5 h-5 mr-2 text-primary" />
                Community
              </h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
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
                <Leaf className="w-5 h-5 mr-2 text-primary" />
                Stay Green &amp; Informed
              </h3>
              <p className="text-background/80">Get sustainable living tips and eco-friendly product updates delivered to your inbox.</p>
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
              &copy; 2024 EcoLife Sustainable Living. All rights reserved. | 
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
              <Link href="/sustainability" className="text-background/60 hover:text-background transition-colors">
                Sustainability
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}