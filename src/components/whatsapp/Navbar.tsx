"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, DollarSign, Users, Info, Mail, Menu, X, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: typeof Home;
}

export default function Navbar() {
  const pathname = usePathname();
  const navItems: NavItem[] = [
    { name: "Home", url: "/", icon: Home },
    { name: "Features", url: "/features", icon: Sparkles },
    { name: "Pricing", url: "/pricing", icon: DollarSign },
    { name: "Partners", url: "/partners", icon: Users },
    { name: "About", url: "/about", icon: Info },
    { name: "Contact", url: "/contact", icon: Mail },
  ];

  // Initialize activeTab immediately based on current pathname
  const initializeActiveTab = () => {
    const currentItem = navItems.find((item) => {
      if (item.url === "/") {
        return pathname === "/";
      }
      return pathname.startsWith(item.url);
    });
    return currentItem?.name || "";
  };

  const [activeTab, setActiveTab] = useState(() => initializeActiveTab());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const currentItem = navItems.find((item) => {
      if (item.url === "/") {
        return pathname === "/";
      }
      return pathname.startsWith(item.url);
    });
    if (currentItem) {
      setActiveTab(currentItem.name);
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/40 dark:bg-background/20 backdrop-blur-xl border-b border-green-500/20 dark:border-green-400/10">
      {/* Seamless green accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-10">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
              <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              automann
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 bg-background/30 dark:bg-background/10 backdrop-blur-xl border border-green-500/20 dark:border-green-400/10 py-1 px-1 rounded-full shadow-lg shadow-green-500/5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300",
                    "text-foreground/70 hover:text-green-600 dark:hover:text-green-400",
                    isActive && "bg-green-500/10 dark:bg-green-400/10 text-green-600 dark:text-green-400 backdrop-blur-sm"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <Icon size={16} strokeWidth={2.5} />
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="glass-navbar-lamp"
                      className="absolute inset-0 w-full bg-green-500/15 dark:bg-green-400/15 rounded-full -z-10 backdrop-blur-sm"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 rounded-t-full shadow-lg shadow-green-500/50">
                        <div className="absolute w-12 h-6 bg-green-500/30 dark:bg-green-400/30 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-green-500/30 dark:bg-green-400/30 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-green-500/30 dark:bg-green-400/30 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden sm:flex bg-gradient-to-r from-green-500/90 to-emerald-600/90 hover:from-green-600 hover:to-emerald-700 backdrop-blur-sm text-white shadow-lg shadow-green-500/30 border border-green-400/20"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-green-500/10 dark:hover:bg-green-400/10 hover:text-green-600 dark:hover:text-green-400"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DialogContent className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background/95 dark:bg-background/90 backdrop-blur-xl px-4 py-6 sm:px-6 sm:max-w-sm sm:ring-1 sm:ring-green-500/20 lg:hidden h-screen flex flex-col translate-x-0 translate-y-0 max-w-full rounded-none border-l border-green-500/20 overscroll-contain">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                automann
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => {
                    setActiveTab(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-base font-semibold",
                    "text-foreground/70 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-500/10 dark:hover:bg-green-400/10",
                    isActive && "bg-green-500/15 dark:bg-green-400/15 text-green-600 dark:text-green-400 backdrop-blur-sm"
                  )}
                >
                  <Icon size={20} strokeWidth={2.5} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-green-500/20">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-green-500/90 to-emerald-600/90 hover:from-green-600 hover:to-emerald-700 backdrop-blur-sm text-white shadow-lg shadow-green-500/30 border border-green-400/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
