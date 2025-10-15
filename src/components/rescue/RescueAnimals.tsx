"use client";

import { motion } from "framer-motion";
import { Heart, MapPin } from "lucide-react";
import Link from "next/link";

const rescueAnimals = [
  {
    id: 1,
    name: "Bella",
    type: "Dog",
    breed: "Golden Retriever Mix",
    age: "3 years",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop&crop=face",
    story: "Found abandoned in a park, Bella is now ready for her forever home. She loves children and is great with other pets.",
    location: "Main Shelter",
    available: true,
    specialNeeds: false
  },
  {
    id: 2,
    name: "Whiskers",
    type: "Cat",
    breed: "Domestic Shorthair",
    age: "2 years",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=face",
    story: "Rescued from a hoarding situation, Whiskers is a gentle soul who loves quiet spaces and gentle pets.",
    location: "Foster Home",
    available: true,
    specialNeeds: true
  },
  {
    id: 3,
    name: "Max",
    type: "Dog",
    breed: "Labrador Mix",
    age: "5 years",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=400&fit=crop&crop=face",
    story: "Max was surrendered by his family due to housing changes. He&apos;s a loyal companion who loves long walks and belly rubs.",
    location: "Main Shelter",
    available: true,
    specialNeeds: false
  },
  {
    id: 4,
    name: "Luna",
    type: "Cat",
    breed: "Siamese Mix",
    age: "1 year",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=400&fit=crop&crop=face",
    story: "Luna was found as a stray kitten. She&apos;s playful, curious, and ready to bring joy to her new family.",
    location: "Foster Home",
    available: true,
    specialNeeds: false
  },
  {
    id: 5,
    name: "Rocky",
    type: "Dog",
    breed: "Pit Bull Mix",
    age: "4 years",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=face",
    story: "Rocky came to us after being found injured on the street. After months of rehabilitation, he&apos;s ready for a loving home.",
    location: "Main Shelter",
    available: true,
    specialNeeds: true
  },
  {
    id: 6,
    name: "Mittens",
    type: "Cat",
    breed: "Persian Mix",
    age: "6 years",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=400&fit=crop&crop=face",
    story: "Mittens is a senior cat looking for a quiet home. She&apos;s gentle, calm, and perfect for someone who wants a low-maintenance companion.",
    location: "Senior Care Unit",
    available: true,
    specialNeeds: false
  }
];

export default function RescueAnimals() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Rescue Animals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the amazing animals waiting for their forever homes. Each one has a unique story 
            and is ready to bring love and joy to your family.
          </p>
        </motion.div>

        {/* Animals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rescueAnimals.map((animal, index) => (
            <motion.div
              key={animal.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rescue-card rounded-2xl overflow-hidden hover:soft-glow transition-all duration-500 gentle-scale">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {animal.available && (
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full backdrop-blur-sm">
                        Available
                      </span>
                    )}
                    {animal.specialNeeds && (
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full backdrop-blur-sm">
                        Special Needs
                      </span>
                    )}
                  </div>

                  {/* Heart Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:text-primary transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-1">
                      {animal.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {animal.type} • {animal.breed} • {animal.age}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {animal.story}
                  </p>

                  {/* Location */}
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{animal.location}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-foreground font-medium rounded-xl hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Adopt
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/animals"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300 soft-glow"
          >
            <Heart className="w-5 h-5" />
            <span>View All Animals</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}



