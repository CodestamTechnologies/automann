"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  const navigation = [
    { name: "Our Story", href: "/about" },
    { name: "Rescue Animals", href: "/animals" },
    { name: "Adoption", href: "/adoption" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Minimal Story Design */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-14 h-14 rescue-card rounded-full flex items-center justify-center soft-glow">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground tracking-tight">
                Paws & Hearts
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Animal Rescue</span>
            </div>
          </Link>

          {/* Desktop Navigation - Minimal Story Layout */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                onHoverStart={() => setActiveHover(item.name)}
                onHoverEnd={() => setActiveHover(null)}
              >
                <Link
                  href={item.href}
                  className={`relative px-5 py-3 text-sm font-medium transition-all duration-300 rounded-xl ${
                    index % 2 === 0 
                      ? "text-foreground hover:text-primary hover:bg-primary/5" 
                      : "text-muted-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: activeHover === item.name ? "80%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                
                {/* Hover Effect */}
                <AnimatePresence>
                  {activeHover === item.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full soft-glow"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions - Contact Info */}
          <div className="flex items-center space-x-4">
            {/* Emergency Contact */}
            <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-medium">Emergency: (555) 123-HELP</span>
            </div>

            {/* Donate Button */}
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300 soft-glow"
            >
              <Heart className="w-4 h-4" />
              <span>Donate</span>
            </Link>

            {/* Theme Toggle */}
            <div className="ml-2">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 text-foreground hover:text-primary transition-colors duration-200 relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Story Layout */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-primary/10 bg-background/95 backdrop-blur-md"
            >
              <div className="px-4 py-8 space-y-6">
                {/* Mobile Navigation */}
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 py-3 px-4 rounded-xl hover:bg-primary/5 relative group"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                      <motion.div
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-r-full opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6 border-t border-primary/10 space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm">Emergency: (555) 123-HELP</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm">info@pawsandhearts.org</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm">123 Rescue Lane, Hope City</span>
                    </div>
                  </div>
                  
                  {/* Mobile Donate Button */}
                  <Link
                    href="/donate"
                    className="block w-full text-center py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <Heart className="w-4 h-4 inline mr-2" />
                    Donate Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}



