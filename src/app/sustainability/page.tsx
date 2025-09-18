import type { Metadata } from "next";
import Navbar from "@/components/eco/Navbar";
import Footer from "@/components/eco/Footer";

export const metadata: Metadata = {
  title: "Sustainability &amp; Environmental Impact - EcoVibe",
  description: "Learn about our commitment to sustainability, environmental impact, and how we&apos;re working together to create a greener future for our planet.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["sustainability", "environmental impact", "green initiatives", "carbon neutral", "eco-friendly", "climate action", "renewable energy"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Sustainability &amp; Environmental Impact - EcoVibe",
    description: "Learn about our commitment to sustainability, environmental impact, and how we&apos;re working together to create a greener future for our planet.",
    url: "https://codestam.com",
    siteName: "EcoVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainability &amp; Environmental Impact - EcoVibe",
    description: "Learn about our commitment to sustainability, environmental impact, and how we&apos;re working together to create a greener future for our planet.",
  },
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://maxm-imggenurl.web.val.run/lush green forest, environmental conservation, sustainable future, nature preservation, clean environment"
            alt="Sustainable forest environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Commitment to Sustainability
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in creating a positive impact on our planet through sustainable practices, ethical sourcing, and environmental stewardship.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Environmental Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At EcoVibe, we&apos;re committed to creating a sustainable future through conscious business practices. 
                Our mission extends beyond selling eco-friendly products – we&apos;re building a movement toward 
                environmental responsibility and social consciousness.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-muted-foreground">Carbon-neutral operations and shipping</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-muted-foreground">Ethical sourcing and fair trade partnerships</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-muted-foreground">Waste reduction and circular economy practices</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-muted-foreground">Supporting reforestation and biodiversity projects</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://maxm-imggenurl.web.val.run/sustainable business practices, renewable energy, green office, environmental responsibility"
                alt="Sustainable business practices"
                className="w-full h-96 object-cover rounded-2xl organic-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Environmental Impact</h2>
            <p className="text-muted-foreground">
              Measurable results from our sustainability initiatives and community efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-background rounded-2xl p-8 organic-shadow">
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground mb-2">Trees Planted</div>
              <p className="text-xs text-muted-foreground">Through our reforestation partnerships worldwide</p>
            </div>

            <div className="text-center bg-background rounded-2xl p-8 organic-shadow">
              <div className="text-3xl font-bold text-primary mb-2">2.5M</div>
              <div className="text-sm text-muted-foreground mb-2">Liters Water Saved</div>
              <p className="text-xs text-muted-foreground">By choosing sustainable alternatives</p>
            </div>

            <div className="text-center bg-background rounded-2xl p-8 organic-shadow">
              <div className="text-3xl font-bold text-primary mb-2">15,000kg</div>
              <div className="text-sm text-muted-foreground mb-2">Waste Diverted</div>
              <p className="text-xs text-muted-foreground">From landfills through recycling programs</p>
            </div>

            <div className="text-center bg-background rounded-2xl p-8 organic-shadow">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground mb-2">Carbon Neutral</div>
              <p className="text-xs text-muted-foreground">Operations and shipping since 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Initiatives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Sustainability Initiatives</h2>
            <p className="text-muted-foreground">
              Comprehensive programs designed to minimize our environmental footprint and maximize positive impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 organic-shadow hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                🌱
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Renewable Energy</h3>
              <p className="text-muted-foreground">
                Our facilities are powered by 100% renewable energy sources, including solar and wind power, 
                reducing our carbon footprint significantly.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 organic-shadow hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                💧
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Water Conservation</h3>
              <p className="text-muted-foreground">
                Advanced water recycling systems and conservation practices help us minimize water usage 
                while maintaining high-quality operations.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 organic-shadow hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                ♻️
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Circular Economy</h3>
              <p className="text-muted-foreground">
                We design products for longevity and recyclability, partnering with recycling programs 
                to ensure materials stay in use as long as possible.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 organic-shadow hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
                📦
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Sustainable Packaging</h3>
              <p className="text-muted-foreground">
                All our packaging is made from recycled or biodegradable materials, minimizing waste 
                and environmental impact throughout the supply chain.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 organic-shadow hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                🤝
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Ethical Sourcing</h3>
              <p className="text-muted-foreground">
                We partner only with suppliers who share our values of fair labor practices, 
                environmental responsibility, and community support.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 organic-shadow hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                🌍
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Global Impact</h3>
              <p className="text-muted-foreground">
                Through partnerships with environmental organizations, we support global initiatives 
                for climate action, biodiversity, and sustainable development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Us in Creating a Sustainable Future
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Every choice matters. Together, we can build a more sustainable world for future generations.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors organic-shadow">
            Start Your Sustainable Journey
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}