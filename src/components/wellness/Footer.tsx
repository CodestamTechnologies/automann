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
  ArrowRight
} from "lucide-react";

const footerLinks = {
  programs: [
    { name: "Yoga & Meditation", href: "/programs/yoga" },
    { name: "Nature Fitness", href: "/programs/fitness" },
    { name: "Holistic Nutrition", href: "/programs/nutrition" },
    { name: "Mindfulness Training", href: "/programs/mindfulness" },
  ],
  classes: [
    { name: "Beginner Classes", href: "/classes/beginner" },
    { name: "Intermediate Classes", href: "/classes/intermediate" },
    { name: "Advanced Classes", href: "/classes/advanced" },
    { name: "Private Sessions", href: "/classes/private" },
  ],
  wellness: [
    { name: "Wellness Coaching", href: "/wellness/coaching" },
    { name: "Stress Management", href: "/wellness/stress" },
    { name: "Sleep Optimization", href: "/wellness/sleep" },
    { name: "Mental Health Support", href: "/wellness/mental-health" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Instructors", href: "/instructors" },
    { name: "Careers", href: "/careers" },
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
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-foreground" />
                </div>
                <span className="text-xl font-bold">ZenFit</span>
              </div>
              
              <p className="text-background/80 max-w-md leading-relaxed">
                Transform your wellness journey with our holistic approach to fitness, 
                mindfulness, and natural healing. Join our community of mindful movers.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-background/80">
                  <MapPin className="w-4 h-4" />
                  <span>123 Wellness Way, Serene City, SC 12345</span>
                </div>
                <div className="flex items-center space-x-3 text-background/80">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-WELL</span>
                </div>
                <div className="flex items-center space-x-3 text-background/80">
                  <Mail className="w-4 h-4" />
                  <span>hello@zenfit.com</span>
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
                    className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
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
              <h3 className="text-lg font-semibold">Programs</h3>
              <ul className="space-y-3">
                {footerLinks.programs.map((link) => (
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
              <h3 className="text-lg font-semibold">Classes</h3>
              <ul className="space-y-3">
                {footerLinks.classes.map((link) => (
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
              <h3 className="text-lg font-semibold">Wellness</h3>
              <ul className="space-y-3">
                {footerLinks.wellness.map((link) => (
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
              <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
              <p className="text-background/80">Get wellness tips and updates delivered to your inbox.</p>
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
              &copy; 2024 ZenFit Wellness Center. All rights reserved. | 
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
