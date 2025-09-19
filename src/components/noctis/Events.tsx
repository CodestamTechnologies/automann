"use client";

import { motion } from "framer-motion";

const events = [
  { date: "Fri", day: "27", name: "Neon Skywatch", desc: "Guided telescope session and live constellation mapping.", img: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1600&auto=format&fit=crop" },
  { date: "Sat", day: "28", name: "Synthwave Cosmos", desc: "Immersive planetarium concert with deep-space visuals.", img: "https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=1600&auto=format&fit=crop" },
  { date: "Sun", day: "29", name: "Family Astro Lab", desc: "Kid-friendly experiments and meteorite touch table.", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" },
];

export default function Events() {
  return (
    <section className="py-20 bg-card/50" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Upcoming Events</h2>
          <a href="/events" className="text-sm text-primary hover:underline">View Calendar &raquo;</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <motion.article
              key={e.name}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl overflow-hidden border border-border bg-card"
            >
              <div className="relative">
                <img src={e.img} alt={e.name} loading="lazy" className="w-full h-44 object-cover" />
                <div className="absolute top-3 left-3 px-3 py-2 rounded-md bg-background/80 border border-border text-xs font-semibold">
                  <span className="text-primary mr-1">{e.date}</span>{e.day}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{e.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{e.desc}</p>
                <a href="/events" className="inline-block mt-4 text-primary text-sm hover:underline">Details</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}