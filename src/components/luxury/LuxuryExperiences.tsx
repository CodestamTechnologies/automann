"use client";

import { motion } from "framer-motion";
import { 
  Mountain, 
  Plane, 
  Utensils, 
  Heart, 
  Camera, 
  Users,
  Clock,
  Award
} from "lucide-react";

const experiences = [
  {
    icon: Plane,
    title: "Helicopter Mountain Tours",
    description: "Soar above pristine peaks and glaciers in luxury helicopters with expert pilots and breathtaking aerial views.",
    features: ["Private Helicopter", "Professional Pilot", "Champagne Service", "Photo Opportunities"],
    duration: "2-4 hours",
    groupSize: "2-6 people",
    price: "From $1,200/person"
  },
  {
    icon: Mountain,
    title: "Guided Alpine Expeditions",
    description: "Conquer legendary peaks with world-class mountain guides, premium equipment, and luxury base camps.",
    features: ["Expert Guides", "Premium Gear", "Luxury Camps", "Safety Support"],
    duration: "5-14 days",
    groupSize: "4-8 people",
    price: "From $3,500/person"
  },
  {
    icon: Utensils,
    title: "Mountain Peak Dining",
    description: "Experience Michelin-starred cuisine at exclusive mountain-top restaurants with panoramic alpine views.",
    features: ["Michelin Chefs", "Wine Pairing", "Scenic Views", "Private Service"],
    duration: "3-5 hours",
    groupSize: "2-12 people",
    price: "From $450/person"
  },
  {
    icon: Heart,
    title: "Alpine Wellness Retreats",
    description: "Rejuvenate your body and mind with luxury spa treatments inspired by traditional alpine wellness practices.",
    features: ["Spa Treatments", "Thermal Baths", "Meditation", "Wellness Coaching"],
    duration: "1-7 days",
    groupSize: "1-4 people",
    price: "From $800/person"
  },
  {
    icon: Camera,
    title: "Photography Expeditions",
    description: "Capture stunning alpine landscapes with professional photographers and access to exclusive locations.",
    features: ["Pro Photographer", "Premium Equipment", "Exclusive Access", "Photo Editing"],
    duration: "1-3 days",
    groupSize: "2-6 people",
    price: "From $950/person"
  },
  {
    icon: Users,
    title: "Private Group Adventures",
    description: "Customize exclusive mountain adventures for your group with personalized itineraries and dedicated staff.",
    features: ["Custom Itinerary", "Dedicated Staff", "Private Transport", "Flexible Schedule"],
    duration: "3-10 days",
    groupSize: "6-20 people",
    price: "From $2,200/person"
  }
];

export default function LuxuryExperiences() {
  return (
    <section className="py-24 luxury-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Luxury <span className="text-gradient-gold">Experiences</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Indulge in extraordinary mountain adventures crafted for the most discerning travelers. 
            Each experience is meticulously designed to exceed your highest expectations.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white/10 alpine-blur rounded-2xl p-6 luxury-border hover:bg-white/15 transition-all duration-300 luxury-hover"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 gold-gradient rounded-2xl alpine-glow">
                  <experience.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {experience.title}
                </h3>
                
                <p className="text-white/80 text-sm leading-relaxed">
                  {experience.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {experience.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-white/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 gap-3 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-white/70 text-sm">Duration</span>
                    </div>
                    <span className="text-white text-sm font-medium">{experience.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-white/70 text-sm">Group Size</span>
                    </div>
                    <span className="text-white text-sm font-medium">{experience.groupSize}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-4 space-y-3">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">{experience.price}</span>
                  </div>
                  
                  <button className="w-full px-6 py-3 bg-white/10 hover:bg-primary text-white hover:text-primary-foreground rounded-xl font-semibold transition-all duration-300 luxury-border">
                    Book Experience
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 alpine-blur rounded-full luxury-border mb-6">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-white font-medium">Award-Winning Luxury Adventures</span>
          </div>
          
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Can&apos;t find the perfect experience? Our concierge team will create a bespoke adventure tailored exclusively to your desires.
          </p>
          
          <button className="px-8 py-4 gold-gradient text-primary-foreground rounded-xl font-semibold text-lg alpine-glow hover:shadow-xl transition-all duration-300 luxury-hover">
            Create Custom Experience
          </button>
        </motion.div>
      </div>
    </section>
  );
}