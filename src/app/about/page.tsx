import type { Metadata } from "next";
import Navbar from "@/components/noctis/Navbar";
import Footer from "@/components/noctis/Footer";

export const metadata: Metadata = {
  title: "About — Noctis Observatory",
  description:
    "Neon‑noir urban astronomy center blending public stargazing, immersive shows, and citizen‑science led by Codestam Technologies.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 1) Page intro */}
      <section className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">About Noctis Observatory</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            We are an urban astronomy hub where the city&apos;s glow meets the cosmos. Our mission is to make
            space exploration accessible through experiences that are inclusive, data‑driven, and visually
            electric.
          </p>
        </div>
      </section>

      {/* 2) Mission highlights */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[{
            t: "Access",
            d: "Lowering barriers with free community nights &amp; multilingual guides.",
          }, {
            t: "Discovery",
            d: "Citizen‑science labs that publish open data &amp; reproducible notebooks.",
          }, {
            t: "Design",
            d: "Futuristic UI/UX, neon‑noir visuals, and tactile exhibits that inspire.",
          }].map((c) => (
            <div key={c.t} className="border border-border rounded-xl p-6 bg-card">
              <h3 className="font-semibold">{c.t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3) Team */}
      <section className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Team</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              n: "Ava Lin",
              r: "Director, Astronomy Education",
              i: "https://images.unsplash.com/photo-1558222217-06bf941f29f1?q=80&w=1600&auto=format&fit=crop",
            }, {
              n: "Ravi Chen",
              r: "Lead, Citizen‑Science",
              i: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
            }, {
              n: "Maya Ortiz",
              r: "Planetarium Producer",
              i: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop",
            }].map((p) => (
              <article key={p.n} className="border border-border rounded-xl overflow-hidden bg-card">
                <img src={p.i} alt={`${p.n} — ${p.r}`} loading="lazy" className="w-full h-52 object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold">{p.n}</h3>
                  <p className="text-sm text-muted-foreground">{p.r}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Facilities */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Facilities</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground list-disc pl-5">
              <li>Rooftop deck with guided telescopes and light‑pollution sensors.</li>
              <li>Neon planetarium with 360&deg; immersive visuals and spatial audio.</li>
              <li>Open lab for data processing, astrophotography, and instrument prototyping.</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop"
            alt="Rooftop observatory deck overlooking a neon city"
            loading="lazy"
            className="w-full h-64 object-cover rounded-lg border border-border"
          />
        </div>
      </section>

      {/* 5) Partnerships */}
      <section className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Partnerships</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            We collaborate with universities, maker spaces, media studios, and local councils to expand
            outreach &amp; research capacity.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["City Science Council", "Nova University", "Makers Guild", "Synth Media Lab"].map((n) => (
              <span key={n} className="px-3 py-1 rounded-md border border-border bg-background text-xs">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6) Press / Contact CTA */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-border rounded-xl p-6 bg-card">
          <div>
            <h3 className="text-xl font-semibold">Press &amp; Media</h3>
            <p className="text-sm text-muted-foreground mt-1">Request assets, interviews, and guided tours.</p>
          </div>
          <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}