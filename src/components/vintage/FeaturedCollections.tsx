"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Star } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Swiss Precision",
    description: "Masterpieces from the heart of horology",
    image: "https://images.unsplash.com/photo-1523170335258-f5c6c6b0e0c0?w=800&h=600&fit=crop&crop=center",
    year: "1950s-1970s",
    origin: "Switzerland",
    price: "From $2,500",
    featured: true,
  },
  {
    id: 2,
    title: "American Heritage",
    description: "Timeless classics from across the Atlantic",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=600&fit=crop&crop=center",
    year: "1940s-1960s",
    origin: "United States",
    price: "From $1,800",
    featured: false,
  },
  {
    id: 3,
    title: "Military Timepieces",
    description: "Robust instruments built for service",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center",
    year: "1930s-1950s",
    origin: "Various",
    price: "From $3,200",
    featured: true,
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Curated Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each collection represents decades of horological excellence, 
            carefully selected for their historical significance and mechanical precision.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="minimal-card rounded-xl overflow-hidden hover:elegant-shadow transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                  
                  {/* Featured Badge */}
                  {collection.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        <Star className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {collection.title}
                    </h3>
                    <span className="text-accent font-medium">
                      {collection.price}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {collection.description}
                  </p>

                  {/* Details */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{collection.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{collection.origin}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/collections/${collection.id}`}
                    className="group/btn inline-flex items-center text-accent hover:text-foreground transition-colors duration-200 font-medium"
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/collections"
            className="inline-flex items-center px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all duration-300"
          >
            View All Collections
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
