import { Metadata } from "next";
import Navbar from "@/components/architecture/Navbar";
import Footer from "@/components/architecture/Footer";

export const metadata: Metadata = {
  title: "Team - Cinematic Studios",
  description: "Meet the talented team of filmmakers, editors, and creative professionals behind Cinematic Studios&apos; award-winning productions.",
  keywords: [
    "cinematic studios team",
    "film production team",
    "video production crew",
    "filmmakers",
    "editors",
    "creative professionals",
    "production team"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  openGraph: {
    title: "Team - Cinematic Studios",
    description: "Meet the talented team of filmmakers, editors, and creative professionals behind Cinematic Studios&apos; award-winning productions.",
    url: "https://codestam.com/team",
    siteName: "Cinematic Studios",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Cinematic Studios Team"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Team - Cinematic Studios",
    description: "Meet the talented team of filmmakers, editors, and creative professionals behind Cinematic Studios&apos; award-winning productions.",
    images: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop&crop=center"]
  }
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 film-grain opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="block">OUR</span>
              <span className="block text-primary">TEAM</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the passionate professionals who bring creativity, expertise, and dedication to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="noir-frame p-6 text-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">JD</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">John Director</h3>
              <p className="text-accent font-medium mb-2">Creative Director</p>
              <p className="text-muted-foreground text-sm">
                Visionary leader with 15+ years in film production and storytelling.
              </p>
            </div>
            <div className="noir-frame p-6 text-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">SC</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Sarah Cinematographer</h3>
              <p className="text-accent font-medium mb-2">Director of Photography</p>
              <p className="text-muted-foreground text-sm">
                Award-winning cinematographer specializing in visual storytelling.
              </p>
            </div>
            <div className="noir-frame p-6 text-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">ME</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Mike Editor</h3>
              <p className="text-accent font-medium mb-2">Lead Editor</p>
              <p className="text-muted-foreground text-sm">
                Expert in post-production with a keen eye for pacing and narrative flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


