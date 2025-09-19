"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16">
      {/* Background: neon grid + stars */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,theme(colors.primary/20%),transparent_50%),radial-gradient(ellipse_at_bottom_right,theme(colors.accent/20%),transparent_50%)]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(transparent 95%, hsl(var(--border)) 95%), linear-gradient(90deg, transparent 95%, hsl(var(--border)) 95%)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Gaze into the <span className="text-primary">Cosmos</span> in Urban <span className="text-accent">Neon</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
              className="mt-5 text-lg text-muted-foreground max-w-xl"
            >
              Noctis Observatory blends city energy with celestial wonder. Public stargazing nights, immersive shows, citizen-science, and workshops for all ages.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#programs"
                className="px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:opacity-90 transition"
              >
                Explore Programs
              </a>
              <a
                href="#visit"
                className="px-5 py-3 rounded-lg border border-border hover:bg-accent/10 font-semibold transition"
              >
                Plan Your Visit
              </a>
            </div>
          </div>

          <div className="relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1600&auto=format&fit=crop"
              alt="City skyline under starry night with neon glow"
              loading="lazy"
              className="w-full h-80 object-cover rounded-2xl shadow-xl border border-border"
            />
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-background/70 border border-border backdrop-blur"
            >
              <p className="text-sm text-muted-foreground">Next Event</p>
              <p className="font-semibold">Neon Skywatch — Friday 9:30 PM</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}