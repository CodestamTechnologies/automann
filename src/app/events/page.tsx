import type { Metadata } from "next";
import Navbar from "@/components/noctis/Navbar";
import Footer from "@/components/noctis/Footer";

export const metadata: Metadata = {
  title: "Events — Noctis Observatory",
  description: "Weekly skywatch, planetarium concerts, and family astro labs. Browse the calendar and RSVP.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function EventsPage() {
  const items = [
    { t: "Neon Skywatch", d: "Guided rooftop stargazing with live constellation mapping.", i: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1600&auto=format&fit=crop" },
    { t: "Synthwave Cosmos", d: "Planetarium concert — synths meet galaxies.", i: "https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=1600&auto=format&fit=crop" },
    { t: "Family Astro Lab", d: "Kid-friendly experiments with safe-to-touch meteorites.", i: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" },
    { t: "Astrophotography 101", d: "Bring your camera — learn city-sky shooting.", i: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop" },
  ];

  const schedule = [
    { when: "Fri 21:30", what: "Neon Skywatch", where: "Rooftop Deck" },
    { when: "Sat 19:00", what: "Synthwave Cosmos", where: "Planetarium" },
    { when: "Sun 16:00", what: "Family Astro Lab", where: "Lab A" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 1) Intro */}
      <section className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Events</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Recurring programs and one-night-only specials. Arrive 15 minutes early for rooftop deck access.
          </p>
        </div>
      </section>

      {/* 2) Featured grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((e) => (
            <article key={e.t} className="border border-border rounded-xl overflow-hidden bg-card">
              <img src={e.i} alt={e.t} loading="lazy" className="w-full h-48 object-cover" />
              <div className="p-5">
                <h2 className="font-semibold">{e.t}</h2>
                <p className="text-sm text-muted-foreground mt-2">{e.d}</p>
                <a href="#" className="inline-block mt-4 text-primary text-sm hover:underline">RSVP</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3) Monthly schedule */}
      <section className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">This Month&apos;s Schedule</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {schedule.map((s) => (
              <div key={s.when + s.what} className="border border-border rounded-lg p-4 bg-background">
                <p className="text-sm text-muted-foreground">{s.when}</p>
                <p className="font-medium">{s.what}</p>
                <p className="text-sm">{s.where}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Volunteer / Host CTA */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-border rounded-xl p-6 bg-card">
          <div>
            <h3 className="text-xl font-semibold">Host or Volunteer</h3>
            <p className="text-sm text-muted-foreground mt-1">Bring your community for a private show or help run a stargazing night.</p>
          </div>
          <div className="flex gap-3">
            <a href="/contact" className="px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold">Contact</a>
            <a href="/programs" className="px-5 py-3 rounded-md border border-border font-semibold">Explore Programs</a>
          </div>
        </div>
      </section>

      {/* 5) FAQ */}
      <section className="py-12 bg-card/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-4">
          {[{
            q: "What if it&apos;s cloudy?",
            a: "We switch to planetarium shows or reschedule skywatch nights.",
          }, {
            q: "Are kids allowed on the rooftop?",
            a: "Yes, with adult supervision. Safety briefings are required.",
          }, {
            q: "Can I bring a tripod?",
            a: "Tripods are welcome on the deck; avoid blocking walkways.",
          }].map((f) => (
            <div key={f.q} className="border border-border rounded-lg p-4 bg-background">
              <p className="font-medium">{f.q}</p>
              <p className="text-sm text-muted-foreground mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}