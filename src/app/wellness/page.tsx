import type { Metadata } from "next";
import Navbar from "@/components/eco/Navbar";
import Footer from "@/components/eco/Footer";

export const metadata: Metadata = {
  title: "Wellness &amp; Mindful Living - EcoVibe",
  description: "Discover holistic wellness practices, mindful living tips, and natural health solutions for a balanced, sustainable lifestyle.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["wellness", "mindful living", "natural health", "holistic wellness", "sustainable lifestyle", "mental health", "self-care"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Wellness &amp; Mindful Living - EcoVibe",
    description: "Discover holistic wellness practices, mindful living tips, and natural health solutions for a balanced, sustainable lifestyle.",
    url: "https://codestam.com",
    siteName: "EcoVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellness &amp; Mindful Living - EcoVibe",
    description: "Discover holistic wellness practices, mindful living tips, and natural health solutions for a balanced, sustainable lifestyle.",
  },
};

export default function WellnessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://maxm-imggenurl.web.val.run/peaceful meditation space, yoga mat, plants, natural lighting, wellness sanctuary, mindful living"
            alt="Peaceful wellness space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Wellness &amp; Mindful Living
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nurture your mind, body, and spirit with our holistic approach to wellness and sustainable living practices.
          </p>
        </div>
      </section>

      {/* Wellness Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mental Wellness */}
            <div className="bg-card rounded-2xl p-8 organic-shadow hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                🧠
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Mental Wellness</h3>
              <p className="text-muted-foreground mb-6">
                Discover mindfulness practices, stress management techniques, and mental health resources for inner peace.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Meditation guides</li>
                <li>• Stress relief techniques</li>
                <li>• Mindfulness exercises</li>
                <li>• Mental health resources</li>
              </ul>
            </div>

            {/* Physical Health */}
            <div className="bg-card rounded-2xl p-8 organic-shadow hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                💪
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Physical Health</h3>
              <p className="text-muted-foreground mb-6">
                Natural approaches to physical wellness, including nutrition, exercise, and holistic health practices.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Plant-based nutrition</li>
                <li>• Natural fitness routines</li>
                <li>• Herbal remedies</li>
                <li>• Holistic health tips</li>
              </ul>
            </div>

            {/* Spiritual Growth */}
            <div className="bg-card rounded-2xl p-8 organic-shadow hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                🌟
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Spiritual Growth</h3>
              <p className="text-muted-foreground mb-6">
                Connect with your inner self through spiritual practices and personal development resources.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Spiritual practices</li>
                <li>• Personal development</li>
                <li>• Energy healing</li>
                <li>• Life purpose guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Wellness Articles</h2>
            <p className="text-muted-foreground">
              Explore our latest insights on wellness, mindfulness, and sustainable living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-background rounded-2xl overflow-hidden organic-shadow hover:shadow-lg transition-all duration-300">
              <img
                src="https://maxm-imggenurl.web.val.run/morning yoga routine, sunrise, peaceful setting, wellness practice, mindful movement"
                alt="Morning yoga routine"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-primary font-medium">Mindfulness</span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-3">
                  5-Minute Morning Mindfulness Routine
                </h3>
                <p className="text-muted-foreground text-sm">
                  Start your day with intention and clarity using this simple yet powerful morning routine.
                </p>
              </div>
            </article>

            <article className="bg-background rounded-2xl overflow-hidden organic-shadow hover:shadow-lg transition-all duration-300">
              <img
                src="https://maxm-imggenurl.web.val.run/healthy plant-based smoothie bowl, colorful fruits, nutritious breakfast, wellness food"
                alt="Healthy smoothie bowl"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-primary font-medium">Nutrition</span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-3">
                  Plant-Based Nutrition for Beginners
                </h3>
                <p className="text-muted-foreground text-sm">
                  Learn the basics of plant-based eating and how it benefits both your health and the planet.
                </p>
              </div>
            </article>

            <article className="bg-background rounded-2xl overflow-hidden organic-shadow hover:shadow-lg transition-all duration-300">
              <img
                src="https://maxm-imggenurl.web.val.run/natural stress relief, aromatherapy, essential oils, relaxation techniques, wellness"
                alt="Natural stress relief"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-primary font-medium">Wellness</span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-3">
                  Natural Stress Relief Techniques
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover gentle, natural methods to manage stress and promote relaxation in your daily life.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}