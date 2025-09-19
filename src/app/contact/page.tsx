import type { Metadata } from "next";
import Navbar from "@/components/noctis/Navbar";
import Footer from "@/components/noctis/Footer";

export const metadata: Metadata = {
  title: "Contact — Noctis Observatory",
  description: "Reach out for group bookings, partnerships, and media inquiries.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 1) Intro */}
      <section className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We&apos;re here to help with bookings, partnerships, media, and accessibility requests. Expect a reply
            within 1–2 business days.
          </p>
        </div>
      </section>

      {/* 2) Quick Info */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
            t: "Email",
            d: "hello@noctis.city",
          }, {
            t: "Phone",
            d: "+1&nbsp;(555)&nbsp;210‑0420",
          }, {
            t: "Hours",
            d: "Tue–Sun 12:00–22:00",
          }, {
            t: "Address",
            d: "Rooftop, 88 Aurora Ave",
          }].map((c) => (
            <div key={c.t} className="border border-border rounded-xl p-5 bg-card">
              <h3 className="font-semibold">{c.t}</h3>
              <p className="text-sm text-muted-foreground mt-1" dangerouslySetInnerHTML={{ __html: c.d }} />
            </div>
          ))}
        </div>
      </section>

      {/* 3) Form */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="grid gap-4">
            <label className="grid gap-1">
              <span className="text-sm">Name</span>
              <input aria-label="Name" placeholder="Your name" className="h-11 px-3 rounded-md border border-border bg-background" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Email</span>
              <input aria-label="Email" placeholder="you@example.com" type="email" className="h-11 px-3 rounded-md border border-border bg-background" />
            </label>
            <label className="grid gap-1">
              <span className="text-sm">Message</span>
              <textarea aria-label="Message" placeholder="How can we help?" rows={6} className="px-3 py-2 rounded-md border border-border bg-background" />
            </label>
            <button type="submit" className="h-11 rounded-md bg-primary text-primary-foreground font-semibold">Send</button>
          </form>
        </div>
      </section>

      {/* 4) Map / Directions */}
      <section className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Find Us</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-prose">
              Rooftop entrance via Aurora Ave elevator. Paid parking next door. Closest subway: Nova Line — Station A.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
            alt="Neon city map illustrating the observatory rooftop location"
            loading="lazy"
            className="w-full h-64 object-cover rounded-lg border border-border"
          />
        </div>
      </section>

      {/* 5) Hours & Policies */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Hours</h3>
            <p className="text-sm text-muted-foreground mt-2">Tue–Sun 12:00–22:00. Closed Mondays.</p>
          </div>
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Photography</h3>
            <p className="text-sm text-muted-foreground mt-2">Tripods allowed outdoors. No flash in dome.</p>
          </div>
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Groups</h3>
            <p className="text-sm text-muted-foreground mt-2">Email us for packages &amp; private shows.</p>
          </div>
        </div>
      </section>

      {/* 6) FAQ */}
      <section className="py-12 bg-card/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-4">
          {[{
            q: "Do I need prior astronomy knowledge?",
            a: "No — our programs are beginner‑friendly and guided by our team.",
          }, {
            q: "Is the rooftop accessible?",
            a: "Yes — elevator access is available. Contact us for assistance.",
          }, {
            q: "Can I host a private event?",
            a: "Yes — send dates &amp; estimated guests via the form above.",
          }].map((f) => (
            <div key={f.q} className="border border-border rounded-lg p-4 bg-background">
              <p className="font-medium">{f.q}</p>
              <p className="text-sm text-muted-foreground mt-1" dangerouslySetInnerHTML={{ __html: f.a }} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}