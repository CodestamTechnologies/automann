import type { Metadata } from "next";
import Navbar from "@/components/eco/Navbar";
import Footer from "@/components/eco/Footer";

export const metadata: Metadata = {
  title: "About EcoVibe - Our Story &amp; Mission",
  description: "Learn about EcoVibe&apos;s journey, mission, and commitment to sustainable living. Discover how we&apos;re making a positive impact on the planet and communities worldwide.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["about ecovibe", "sustainable company", "eco-friendly mission", "environmental responsibility", "green business", "sustainability story"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "About EcoVibe - Our Story &amp; Mission",
    description: "Learn about EcoVibe&apos;s journey, mission, and commitment to sustainable living. Discover how we&apos;re making a positive impact on the planet and communities worldwide.",
    url: "https://codestam.com",
    siteName: "EcoVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About EcoVibe - Our Story &amp; Mission",
    description: "Learn about EcoVibe&apos;s journey, mission, and commitment to sustainable living. Discover how we&apos;re making a positive impact on the planet and communities worldwide.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://maxm-imggenurl.web.val.run/team of diverse people working together, sustainable office environment, eco-friendly workspace, collaboration"
            alt="EcoVibe team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About EcoVibe
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re on a mission to make sustainable living accessible, enjoyable, and impactful for everyone.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  EcoVibe was born from a simple yet powerful belief: that living sustainably shouldn&apos;t be 
                  complicated, expensive, or compromise on quality. Founded in 2020 by a group of environmental 
                  enthusiasts and wellness advocates, we started with a vision to bridge the gap between 
                  conscious living and everyday convenience.
                </p>
                <p>
                  What began as a small collection of eco-friendly products has grown into a comprehensive 
                  platform for sustainable living. We&apos;ve built not just a marketplace, but a community 
                  of like-minded individuals who believe that small changes can create significant impact.
                </p>
                <p>
                  Today, EcoVibe serves thousands of customers worldwide, helping them make conscious choices 
                  that benefit both their well-being and the planet. Our journey continues as we expand our 
                  mission to create a more sustainable future for all.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://maxm-imggenurl.web.val.run/sustainable products display, eco-friendly items, natural materials, green living essentials"
                alt="EcoVibe products"
                className="w-full h-96 object-cover rounded-2xl organic-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission &amp; Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by our core mission and values that drive positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 organic-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                🌍
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Environmental Stewardship</h3>
              <p className="text-muted-foreground">
                We&apos;re committed to protecting our planet through sustainable practices, ethical sourcing, 
                and supporting environmental conservation initiatives.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 organic-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                💚
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Holistic Wellness</h3>
              <p className="text-muted-foreground">
                We believe true wellness encompasses physical, mental, and environmental health, 
                creating harmony between personal and planetary well-being.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 organic-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                🤝
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Community Impact</h3>
              <p className="text-muted-foreground">
                We foster a supportive community where individuals can learn, grow, and make 
                positive changes together, amplifying our collective impact.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 organic-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                ✨
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Quality &amp; Transparency</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards for our products and practices, ensuring 
                transparency in our supply chain and environmental impact.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 organic-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                🚀
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously seek innovative solutions and technologies that advance 
                sustainable living while maintaining accessibility and affordability.
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 organic-shadow text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                🌱
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Growth &amp; Learning</h3>
              <p className="text-muted-foreground">
                We embrace continuous learning and growth, both as individuals and as an organization, 
                adapting to create greater positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              Passionate individuals dedicated to creating a more sustainable world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://maxm-imggenurl.web.val.run/professional headshot of woman CEO, sustainable business leader, confident smile, natural background"
                alt="Sarah Chen, CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover organic-shadow"
              />
              <h3 className="text-lg font-bold text-foreground mb-2">Sarah Chen</h3>
              <p className="text-primary font-medium mb-2">CEO &amp; Founder</p>
              <p className="text-sm text-muted-foreground">
                Environmental scientist turned entrepreneur, passionate about making sustainability accessible to all.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://maxm-imggenurl.web.val.run/professional headshot of man CTO, tech leader, friendly expression, modern office background"
                alt="Marcus Johnson, CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover organic-shadow"
              />
              <h3 className="text-lg font-bold text-foreground mb-2">Marcus Johnson</h3>
              <p className="text-primary font-medium mb-2">CTO &amp; Co-Founder</p>
              <p className="text-sm text-muted-foreground">
                Technology innovator focused on creating digital solutions for environmental challenges.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://maxm-imggenurl.web.val.run/professional headshot of woman sustainability director, environmental expert, warm smile"
                alt="Elena Rodriguez, Sustainability Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover organic-shadow"
              />
              <h3 className="text-lg font-bold text-foreground mb-2">Elena Rodriguez</h3>
              <p className="text-primary font-medium mb-2">Sustainability Director</p>
              <p className="text-sm text-muted-foreground">
                Leading our environmental initiatives and ensuring our practices align with our values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Certifications</h2>
            <p className="text-muted-foreground">
              Recognized for our commitment to sustainability and ethical business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-background rounded-2xl p-8 organic-shadow">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                🏆
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">B-Corp Certified</h3>
              <p className="text-sm text-muted-foreground">
                Meeting the highest standards of social and environmental performance, accountability, and transparency.
              </p>
            </div>

            <div className="text-center bg-background rounded-2xl p-8 organic-shadow">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                🌿
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Carbon Neutral</h3>
              <p className="text-sm text-muted-foreground">
                Certified carbon neutral operations and shipping, with ongoing commitment to climate action.
              </p>
            </div>

            <div className="text-center bg-background rounded-2xl p-8 organic-shadow">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                🤝
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Fair Trade Partner</h3>
              <p className="text-sm text-muted-foreground">
                Supporting fair wages, safe working conditions, and sustainable farming practices worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Us on Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Together, we can create a more sustainable, healthy, and conscious world for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors organic-shadow">
              Shop Sustainable Products
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}