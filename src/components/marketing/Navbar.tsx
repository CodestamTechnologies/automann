"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  Menu, 
  X, 
  TrendingUp, 
  Target, 
  Zap, 
  BarChart3, 
  Users,
  ChevronDown,
  Rocket,
  Brain
} from "lucide-react";

const navigationItems = [
  { name: "Home", href: "/", icon: Rocket },
  { name: "Services", href: "/services", icon: Target },
  { name: "Solutions", href: "/solutions", icon: BarChart3 },
  { name: "Case Studies", href: "/case-studies", icon: TrendingUp },
  { name: "About", href: "/about", icon: Users },
  { name: "Contact", href: "/contact", icon: Brain },
];

const marketingServices = [
  { name: "Growth Hacking", href: "/services/growth-hacking" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "Data Analytics", href: "/services/analytics" },
  { name: "Conversion Optimization", href: "/services/conversion" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 dynamic-gradient rounded-xl flex items-center justify-center group-hover:dynamic-glow transition-all duration-300 transform rotate-45">
                  <TrendingUp className="w-7 h-7 text-primary-foreground transform -rotate-45" />
                </div>
                <div className="absolute inset-0 dynamic-gradient rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground tracking-tight">GrowthLab</span>
                <span className="text-xs text-primary font-medium tracking-wider">DIGITAL</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                {item.name === "Services" ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowServices(true)}
                    onMouseLeave={() => setShowServices(false)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                      <span>{item.name}</span>
                      <ChevronDown className="w-3 h-3 transition-transform duration-200" />
                    </Link>
                    
                    <AnimatePresence>
                      {showServices && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-3">
                            {marketingServices.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-xl transition-all duration-200 group"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:dynamic-glow transition-all duration-200" />
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block"
            >
              <Button className="dynamic-gradient hover:dynamic-glow text-primary-foreground border-0 font-semibold rounded-xl">
                <Zap className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-primary/20"
          >
            <div className="px-4 py-6 space-y-2">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-4 py-4 rounded-xl text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 group"
                  >
                    <item.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Services */}
              <div className="pt-4 border-t border-border/50">
                <div className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wider">
                  Marketing Services
                </div>
                {marketingServices.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navigationItems.length + index) * 0.1 }}
                  >
                    <Link
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-8 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-xl transition-all duration-200"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {service.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navigationItems.length + marketingServices.length) * 0.1 }}
                className="pt-4"
              >
                <Button className="w-full dynamic-gradient hover:dynamic-glow text-primary-foreground border-0 font-semibold rounded-xl">
                  <Zap className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
