"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "Citizen Science Labs",
    desc: "Hands-on sky surveys, light pollution mapping, and exoplanet transit observations.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Neon Planetarium Shows",
    desc: "Immersive 360° journeys through galaxies with a synthwave soundtrack.",
    img: "https://images.unsplash.com/photo-1581093588401-16bb84f564f6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Urban Stargazing Nights",
    desc: "Public telescope sessions, astrophotography corners, and guided tours.",
    img: "https://images.unsplash.com/photo-1543722539-b9771c00f973?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Programs</h2>
          <a href="/programs" className="text-sm text-primary hover:underline">View All &raquo;</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition"
            >
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-44 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
                <a href="/programs" className="inline-block mt-4 text-primary text-sm font-medium hover:underline">Learn more</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}