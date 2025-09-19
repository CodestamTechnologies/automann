"use client";

import { motion } from "framer-motion";

export default function Visit() {
  return (
    <section id="visit" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Plan Your Visit</h2>
          <p className="mt-4 text-muted-foreground">
            We are open Tue–Sun, 12:00–22:00. The rooftop deck opens after sunset for skywatch sessions.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-primary"></span> Free entry every first Thursday.</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-accent"></span> Guided tours at 18:00 &amp; 20:00 daily.</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-foreground"></span> Accessible, family-friendly spaces.</li>
          </ul>
          <div className="mt-8 flex gap-4">
            <a href="/visit" className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold">Tickets</a>
            <a href="/contact" className="px-4 py-2 rounded-md border border-border">Group Booking</a>
          </div>
        </div>
        <motion.img
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop"
          alt="Visitors on a rooftop deck viewing stars with telescopes"
          loading="lazy"
          className="w-full h-72 object-cover rounded-2xl border border-border"
        />
      </div>
    </section>
  );
}