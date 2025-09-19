import type { Metadata } from "next";
import Navbar from "@/components/noctis/Navbar";
import Footer from "@/components/noctis/Footer";

export const metadata: Metadata = {
  title: "Visit — Noctis Observatory",
  description: "Plan your visit: hours, tickets, accessibility, and rooftop stargazing sessions.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 1) Intro */}
      <section className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Visit</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Open Tue–Sun, 12:00–22:00. Rooftop deck opens after sunset. Accessible facilities throughout.
          </p>
        </div>
      </section>

      {/* 2) Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Tickets</h3>
            <p className="text-sm text-muted-foreground mt-2">General 10€, Students 6€, Under 12 free.</p>
          </div>
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Guided Tours</h3>
            <p className="text-sm text-muted-foreground mt-2">18:00 &amp; 20:00 daily.</p>
          </div>
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Groups</h3>
            <p className="text-sm text-muted-foreground mt-2">Email us for packages and private shows.</p>
          </div>
        </div>
      </section>

      {/* 3) Directions */}
      <section className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Directions &amp; Transit</h2>
            <p className="text-sm text-muted-foreground mt-2">Nearest subway: Nova Line — Station A. Bike racks available.</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1600&auto=format&fit=crop"
            alt="Neon city street with transit signs"
            loading="lazy"
            className="w-full h-64 object-cover rounded-lg border border-border"
          />
        </div>
      </section>

      {/* 4) Accessibility */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Accessibility</h3>
            <p className="text-sm text-muted-foreground mt-2">Elevator access to rooftop, tactile exhibits, and assistive listening.</p>
          </div>
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Amenities</h3>
            <p className="text-sm text-muted-foreground mt-2">Lockers, water refill, and family rooms available.</p>
          </div>
        </div>
      </section>

      {/* 5) Policies */}
      <section className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Weather</h3>
            <p className="text-sm text-muted-foreground mt-2">Outdoor sessions may move indoors if cloudy or windy.</p>
          </div>
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Photography</h3>
            <p className="text-sm text-muted-foreground mt-2">Tripods allowed outdoors. No flash in the dome.</p>
          </div>
          <div className="border border-border rounded-xl p-6 bg-card">
            <h3 className="font-semibold">Food &amp; Drink</h3>
            <p className="text-sm text-muted-foreground mt-2">No open containers. Water permitted.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}