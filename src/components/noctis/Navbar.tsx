"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/research", label: "Research" },
  { href: "/visit", label: "Visit" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Noctis Observatory home" className="group inline-flex items-center gap-3">
          {/* Neon-noir SVG logo */}
          <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true" className="drop-shadow-[0_0_8px_theme(colors.primary/70%)]">
            <defs>
              <radialGradient id="g" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="60%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--muted-foreground))" />
              </radialGradient>
            </defs>
            <circle cx="24" cy="24" r="20" fill="url(#g)" />
            <path d="M10 24c6-8 22-8 28 0-6 8-22 8-28 0z" stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="none" />
            <circle cx="30" cy="18" r="3" fill="hsl(var(--primary))" />
          </svg>
          <span className="text-lg font-bold tracking-wide">
            <span className="text-primary">Noctis</span> Observatory
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <span className="relative z-10">{l.label}</span>
              <motion.span
                layoutId="nav-underline"
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary/70"
                initial={{ opacity: 0, scaleX: 0 }}
                whileHover={{ opacity: 1, scaleX: 1 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
              />
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border hover:bg-accent/10"
          >
            <span className="i-lucide-menu" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="md:hidden border-t border-border bg-background/90"
          >
            <div className="px-4 py-3 grid gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium text-foreground/90 hover:text-primary"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}