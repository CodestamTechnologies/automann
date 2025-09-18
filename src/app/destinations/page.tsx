import type { Metadata } from "next";
import Navbar from "@/components/luxury/Navbar";
import Footer from "@/components/luxury/Footer";
import { MapPin, Star, Calendar, Thermometer, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Mountain Destinations - Alpine Luxe",
  description: "Explore our exclusive collection of luxury mountain destinations. From Swiss Alps to Himalayas, discover premium alpine adventures with unparalleled service and breathtaking views.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["luxury mountain destinations", "alpine resorts", "premium mountain travel", "exclusive ski resorts", "luxury expeditions"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Luxury Mountain Destinations - Alpine Luxe",
    description: "Explore our exclusive collection of luxury mountain destinations with premium alpine adventures and unparalleled service.",
    url: "https://codestam.com",
    siteName: "Alpine Luxe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Mountain Destinations - Alpine Luxe",
    description: "Explore our exclusive collection of luxury mountain destinations with premium alpine adventures and unparalleled service.",
  },
};

const destinations = [
  {
    id: 1,
    name: "Swiss Alps Collection",
    location: "Switzerland",
    destinations: ["Zermatt", "St. Moritz", "Verbier", "Gstaad"],
    rating: 5.0,
    reviews: 324,
    priceRange: "$2,500 - $8,000/night",
    season: "Dec - Mar, Jun - Sep",
    temperature: "-5°C to 20°C",
    image: "https://maxm-imggenurl.web.val.run/swiss alps luxury resort collection, matterhorn, snow-capped peaks, five-star hotels, alpine villages",
    description: "Experience the pinnacle of alpine luxury in Switzerland&apos;s most prestigious mountain destinations.",
    highlights: ["Matterhorn Views", "World-Class Skiing", "Michelin Dining", "Luxury Spas"]
  },
  {
    id: 2,
    name: "Canadian Rockies Wilderness",
    location: "Canada",
    destinations: ["Banff", "Jasper", "Whistler", "Lake Louise"],
    rating: 4.9,
    reviews: 256,
    priceRange: "$1,800 - $5,500/night",
    season: "Year Round",
    temperature: "-15°C to 25°C",
    image: "https://maxm-imggenurl.web.val.run/canadian rockies luxury lodges, banff national park, mountain lakes, premium wilderness resorts",
    description: "Immerse yourself in pristine wilderness with luxury accommodations and exclusive wildlife experiences.",
    highlights: ["Wildlife Viewing", "Glacier Tours", "Aurora Borealis", "Luxury Lodges"]
  },
  {
    id: 3,
    name: "Himalayan Expeditions",
    location: "Nepal & Tibet",
    destinations: ["Everest Base Camp", "Annapurna", "Manaslu", "Cho Oyu"],
    rating: 4.8,
    reviews: 189,
    priceRange: "$5,000 - $15,000/expedition",
    season: "Mar - May, Sep - Nov",
    temperature: "-25°C to 15°C",
    image: "https://maxm-imggenurl.web.val.run/himalayan luxury expedition, everest base camp, premium mountain tents, sherpa guides, dramatic peaks",
    description: "Conquer the world&apos;s highest peaks with luxury expedition services and expert guidance.",
    highlights: ["Expert Sherpas", "Luxury Base Camps", "Medical Support", "Helicopter Access"]
  },
  {
    id: 4,
    name: "Patagonian Adventures",
    location: "Chile & Argentina",
    destinations: ["Torres del Paine", "Fitz Roy", "Perito Moreno", "Ushuaia"],
    rating: 4.7,
    reviews: 142,
    priceRange: "$2,200 - $6,800/night",
    season: "Oct - Apr",
    temperature: "0°C to 18°C",
    image: "https://maxm-imggenurl.web.val.run/patagonia luxury eco-lodges, torres del paine, dramatic granite peaks, premium wilderness accommodation",
    description: "Explore the raw beauty of Patagonia with luxury eco-lodges and exclusive access to pristine wilderness.",
    highlights: ["Glacier Trekking", "Eco-Luxury Lodges", "Wildlife Safari", "Photography Tours"]
  },
  {
    id: 5,
    name: "Japanese Alps Retreat",
    location: "Japan",
    destinations: ["Hakuba", "Niseko", "Takayama", "Kamikochi"],
    rating: 4.9,
    reviews: 198,
    priceRange: "$1,500 - $4,200/night",
    season: "Dec - Mar, May - Oct",
    temperature: "-8°C to 22°C",
    image: "https://maxm-imggenurl.web.val.run/japanese alps luxury ryokan, traditional architecture, hot springs, snow-covered mountains, zen gardens",
    description: "Experience traditional Japanese hospitality in luxury mountain ryokans with natural hot springs.",
    highlights: ["Traditional Ryokans", "Onsen Hot Springs", "Kaiseki Cuisine", "Cultural Immersion"]
  },
  {
    id: 6,
    name: "Norwegian Fjords & Peaks",
    location: "Norway",
    destinations: ["Lofoten", "Tromsø", "Geiranger", "Flåm"],
    rating: 4.8,
    reviews: 167,
    priceRange: "$2,800 - $7,200/night",
    season: "May - Sep, Dec - Mar",
    temperature: "-12°C to 16°C",
    image: "https://maxm-imggenurl.web.val.run/norwegian fjords luxury hotel, lofoten islands, dramatic cliffs, northern lights, premium accommodation",
    description: "Witness the Northern Lights and midnight sun from luxury accommodations overlooking dramatic fjords.",
    highlights: ["Northern Lights", "Midnight Sun", "Fjord Cruises", "Arctic Luxury"]
  }
];

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Luxury Mountain <span className="text-gradient-gold">Destinations</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover our handpicked collection of the world&apos;s most exclusive mountain destinations, 
            each offering unparalleled luxury and unforgettable adventures.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white/80">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>50+ Premium Destinations</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary fill-current" />
              <span>4.8+ Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Year-Round Adventures</span>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="group bg-card rounded-2xl overflow-hidden luxury-shadow luxury-hover luxury-border"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-6 left-6 flex items-center space-x-1 px-3 py-2 alpine-blur rounded-full">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <span className="text-sm font-semibold text-white">{destination.rating}</span>
                    <span className="text-sm text-white/80">({destination.reviews})</span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-6 right-6 px-3 py-2 gold-gradient text-primary-foreground rounded-full text-sm font-semibold">
                    {destination.priceRange}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{destination.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                      {destination.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {destination.description}
                    </p>
                  </div>

                  {/* Destinations List */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Featured Locations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.destinations.map((dest, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-border/50">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Season</div>
                        <div className="text-sm font-medium">{destination.season}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Temperature</div>
                        <div className="text-sm font-medium">{destination.temperature}</div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Experience Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="group/btn inline-flex items-center space-x-2 w-full justify-center px-6 py-4 gold-gradient text-primary-foreground rounded-xl font-semibold alpine-glow hover:shadow-xl transition-all duration-300">
                    <span>Explore Destination</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}