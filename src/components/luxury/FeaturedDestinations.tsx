"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Thermometer, Calendar } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    name: "Swiss Alps Luxury Resort",
    location: "Zermatt, Switzerland",
    rating: 5.0,
    reviews: 324,
    price: "From $2,500/night",
    season: "Dec - Mar",
    temperature: "-5°C to 5°C",
    image: "https://maxm-imggenurl.web.val.run/luxury swiss alps resort, matterhorn mountain, snow, five-star hotel, alpine architecture, golden hour",
    description: "Experience the iconic Matterhorn with world-class skiing, Michelin-starred dining, and unparalleled luxury.",
    features: ["Helicopter Skiing", "Spa & Wellness", "Michelin Dining", "Private Slopes"]
  },
  {
    id: 2,
    name: "Canadian Rockies Wilderness Lodge",
    location: "Banff, Alberta",
    rating: 4.9,
    reviews: 256,
    price: "From $1,800/night",
    season: "Year Round",
    temperature: "-10°C to 20°C",
    image: "https://maxm-imggenurl.web.val.run/luxury canadian rockies lodge, banff national park, mountain lake, premium cabin, wilderness luxury",
    description: "Immerse yourself in pristine wilderness with luxury accommodations and exclusive wildlife experiences.",
    features: ["Wildlife Tours", "Ice Climbing", "Aurora Viewing", "Luxury Cabins"]
  },
  {
    id: 3,
    name: "Himalayan Luxury Expedition",
    location: "Everest Base Camp, Nepal",
    rating: 4.8,
    reviews: 189,
    price: "From $5,000/expedition",
    season: "Mar - May, Sep - Nov",
    temperature: "-20°C to 15°C",
    image: "https://maxm-imggenurl.web.val.run/luxury himalayan expedition, everest base camp, premium tents, mountain guides, dramatic peaks",
    description: "Conquer the world&apos;s highest peaks with luxury expedition services and expert Sherpa guides.",
    features: ["Expert Guides", "Luxury Tents", "Medical Support", "Helicopter Rescue"]
  }
];

export default function FeaturedDestinations() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-foreground">Featured</span>{" "}
            <span className="text-gradient-gold">Destinations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our handpicked collection of the world&apos;s most exclusive mountain destinations, 
            each offering unparalleled luxury and unforgettable adventures.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl overflow-hidden luxury-shadow luxury-hover luxury-border"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 left-4 flex items-center space-x-1 px-3 py-1 alpine-blur rounded-full">
                  <Star className="h-4 w-4 text-primary fill-current" />
                  <span className="text-sm font-semibold text-white">{destination.rating}</span>
                  <span className="text-sm text-white/80">({destination.reviews})</span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 gold-gradient text-primary-foreground rounded-full text-sm font-semibold">
                  {destination.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Location */}
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {destination.description}
                </p>

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

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {destination.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={`/destinations/${destination.id}`}
                  className="group/btn inline-flex items-center space-x-2 w-full justify-center px-6 py-3 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-xl font-semibold transition-all duration-300"
                >
                  <span>Explore Destination</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/destinations"
            className="inline-flex items-center space-x-2 px-8 py-4 gold-gradient text-primary-foreground rounded-xl font-semibold text-lg alpine-glow hover:shadow-xl transition-all duration-300 luxury-hover"
          >
            <span>View All Destinations</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}