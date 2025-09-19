import type { Metadata } from "next";
import Navbar from "@/components/noctis/Navbar";
import Footer from "@/components/noctis/Footer";

export const metadata: Metadata = {
  title: "Programs — Noctis Observatory",
  description: "Citizen-science labs, planetarium shows, and urban stargazing. Explore hands-on astronomy programs for all ages.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Programs</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            From beginner sky tours to advanced data-gathering labs, our programs blend design, science, and community.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-start">
          <div className="border border-border rounded-xl overflow-hidden bg-card">
            <img
              src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop"
              alt="Citizen-science lab with laptops and telescopes"
              loading="lazy"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold">Citizen Science Labs</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Guided data collection on light pollution, variable stars, and meteor showers. Publish your results with the community.
              </p>
            </div>
          </div>

          <div className="border border-border rounded-xl overflow-hidden bg-card">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop"
              alt="Planetarium dome with neon visuals"
              loading="lazy"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold">Neon Planetarium Shows</h2>
              <p className="text-sm text-muted-foreground mt-2">
                360&deg; synthwave space visuals narrated by astronomers. New shows monthly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {["Urban Stargazing Nights", "Astrophotography Corner", "School Partnerships"].map((t) => (
            <div key={t} className="border border-border rounded-xl p-6 bg-card">
              <h3 className="font-semibold">{t}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Hands-on, guided, and accessible activities designed for city skies.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold">Volunteer &amp; Mentorship</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Join our mentorship cohort to support workshops, co-lead research tasks, and co-author reports.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1600&auto=format&fit=crop"
            alt="Volunteers facilitating a rooftop stargazing night"
            loading="lazy"
            className="w-full h-56 object-cover rounded-lg border border-border"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}