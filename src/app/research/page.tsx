import type { Metadata } from "next";
import Navbar from "@/components/noctis/Navbar";
import Footer from "@/components/noctis/Footer";

export const metadata: Metadata = {
  title: "Research — Noctis Observatory",
  description: "Participate in urban astronomy: light pollution mapping, meteor tracking, and exoplanet transit validation.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 1) Intro */}
      <section className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Citizen Research</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Our labs transform city skylines into collaborative datasets. Contribute observations and co-author open reports.
          </p>
        </div>
      </section>

      {/* 2) Research tracks */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {["Light Pollution Index", "Meteor Watch", "Transit Hunters"].map((t) => (
            <div key={t} className="border border-border rounded-xl p-6 bg-card">
              <h3 className="font-semibold">{t}</h3>
              <p className="text-sm text-muted-foreground mt-2">Join the capture pipeline and help validate events.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3) Sample dataset */}
      <section className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Open Dataset: City LUX Map</h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-prose">
              Explore our anonymized light‑pollution measurements by district, updated weekly. Contribute your sensor
              readings and collaborate on reports.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop"
            alt="Heatmap visualization concept of city light pollution"
            loading="lazy"
            className="w-full h-64 object-cover rounded-lg border border-border"
          />
        </div>
      </section>

      {/* 4) How to contribute */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Equipment</h3>
            <p className="text-sm text-muted-foreground mt-2">Smartphone, tripod (optional), and a simple LUX sensor.</p>
          </div>
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Protocol</h3>
            <p className="text-sm text-muted-foreground mt-2">Follow our step‑by‑step guide for repeatable, clean observations.</p>
          </div>
        </div>
      </section>

      {/* 5) Publish with us */}
      <section className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-border rounded-xl p-6 bg-card">
          <div>
            <h3 className="text-xl font-semibold">Publish &amp; Present</h3>
            <p className="text-sm text-muted-foreground mt-1">Co‑author public reports and present findings at monthly showcases.</p>
          </div>
          <a href="/contact" className="px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold">Join the Cohort</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}