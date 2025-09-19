"use client";

import { motion } from "framer-motion";

const items = [
  {
    t: "Light Pollution Index",
    d: "Mapping brightness across districts and tracking change over time.",
    i: "https://images.unsplash.com/photo-1519245659620-e859806a8d3f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    t: "Meteor Watch",
    d: "Crowdsourced captures and trajectory estimation with ML.",
    i: "https://images.unsplash.com/photo-1500817487388-039e623edc23?q=80&w=1600&auto=format&fit=crop",
  },
  {
    t: "Transit Hunters",
    d: "Amateur exoplanet transit verification program.",
    i: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Research() {
  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Citizen Research</h2>
          <a href="/research" className="text-sm text-primary hover:underline">Contribute &raquo;</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="rounded-xl overflow-hidden border border-border bg-card"
            >
              <img src={it.i} alt={it.t} loading="lazy" className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="font-semibold">{it.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{it.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}