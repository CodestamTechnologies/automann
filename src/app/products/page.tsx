import type { Metadata } from "next";
import Navbar from "@/components/eco/Navbar";
import Footer from "@/components/eco/Footer";

export const metadata: Metadata = {
  title: "Eco-Friendly Products - EcoVibe",
  description: "Discover our curated collection of sustainable, eco-friendly products for conscious living. From home essentials to wellness items, find everything you need for a greener lifestyle.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["eco-friendly products", "sustainable goods", "green living", "organic products", "zero waste", "environmentally friendly"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Eco-Friendly Products - EcoVibe",
    description: "Discover our curated collection of sustainable, eco-friendly products for conscious living.",
    url: "https://codestam.com",
    siteName: "EcoVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco-Friendly Products - EcoVibe",
    description: "Discover our curated collection of sustainable, eco-friendly products for conscious living.",
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Sustainable Products for Conscious Living
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover our carefully curated collection of eco-friendly products that help you live more sustainably without compromising on quality or style.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Home & Living */}
            <div className="bg-card rounded-2xl overflow-hidden organic-shadow hover:shadow-lg transition-all duration-300">
              <img
                src="https://maxm-imggenurl.web.val.run/sustainable home products, bamboo kitchen utensils, eco-friendly cleaning supplies, natural materials"
                alt="Sustainable home products"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Home &amp; Living</h3>
                <p className="text-muted-foreground mb-4">
                  Transform your home with sustainable alternatives that are both beautiful and functional.
                </p>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Personal Care */}
            <div className="bg-card rounded-2xl overflow-hidden organic-shadow hover:shadow-lg transition-all duration-300">
              <img
                src="https://maxm-imggenurl.web.val.run/natural skincare products, organic cosmetics, sustainable beauty items, botanical ingredients"
                alt="Natural personal care products"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Personal Care</h3>
                <p className="text-muted-foreground mb-4">
                  Nourish your body with natural, organic personal care products free from harmful chemicals.
                </p>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Fashion */}
            <div className="bg-card rounded-2xl overflow-hidden organic-shadow hover:shadow-lg transition-all duration-300">
              <img
                src="https://maxm-imggenurl.web.val.run/sustainable fashion, organic cotton clothing, eco-friendly accessories, ethical fashion"
                alt="Sustainable fashion items"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Sustainable Fashion</h3>
                <p className="text-muted-foreground mb-4">
                  Look good while doing good with our collection of ethically made, sustainable fashion pieces.
                </p>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}