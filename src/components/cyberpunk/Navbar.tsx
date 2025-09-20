"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Search, User, Heart, Menu, X, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  const navigation = [
    { name: "Gallery", href: "/gallery" },
    { name: "Artists", href: "/artists" },
    { name: "Collections", href: "/collections" },
    { name: "AI Lab", href: "/ai-lab" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Asymmetric Design */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 digital-surface rounded-lg flex items-center justify-center neon-glow">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ChromaSpace
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Digital Art Gallery</span>
            </div>
          </Link>

          {/* Desktop Navigation - Asymmetric Grid */}
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
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    index % 2 === 0 
                      ? "text-foreground hover:text-primary" 
                      : "text-muted-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                    initial={{ width: 0 }}
                    animate={{ width: activeHover === item.name ? "100%" : 0 }}
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
                      className="absolute -top-2 -right-2 w-2 h-2 bg-accent rounded-full neon-glow"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions - Organic Layout */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <motion.button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-3 text-foreground hover:text-primary transition-colors duration-200 relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.2 }}
              />
            </motion.button>

            {/* Favorites */}
            <Link
              href="/wishlist"
              className="p-3 text-foreground hover:text-accent transition-colors duration-200 relative group"
            >
              <Heart className="w-5 h-5" />
              <motion.div
                className="absolute inset-0 bg-accent/10 rounded-lg opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.2 }}
              />
            </Link>

            {/* User Account */}
            <Link
              href="/profile"
              className="p-3 text-foreground hover:text-primary transition-colors duration-200 relative group"
            >
              <User className="w-5 h-5" />
              <motion.div
                className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.2 }}
              />
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

        {/* Search Bar - Futuristic Design */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-primary/20 py-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl blur-sm" />
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search artworks, artists, collections..."
                    className="w-full px-6 py-4 pl-12 bg-background/50 border border-primary/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary" />
                  <motion.div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 text-accent" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu - Organic Design */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-primary/20 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-4 py-8 space-y-6">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-primary/5 relative group"
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
              
              {/* Mobile Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-6 border-t border-primary/20 space-y-4"
              >
                <div className="flex items-center justify-center space-x-4">
                  <Link
                    href="/wishlist"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">Favorites</span>
                  </Link>
                  <Link
                    href="/profile"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <User className="w-4 h-4" />
                    <span className="text-sm">Profile</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}