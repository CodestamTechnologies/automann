"use client";

import { motion } from "framer-motion";
import { Heart, Users, Home, Shield } from "lucide-react";

const storySteps = [
  {
    year: "2009",
    title: "The Beginning",
    description: "Founded by Sarah Johnson after rescuing her first dog from a local shelter. What started as a small act of kindness grew into a community movement.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop&crop=center"
  },
  {
    year: "2012",
    title: "Growing Community",
    description: "Opened our first rescue facility and welcomed 50 volunteers. We began our mission to provide medical care and rehabilitation for abused animals.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center"
  },
  {
    year: "2016",
    title: "Expanding Impact",
    description: "Reached our 1000th adoption milestone. Launched our mobile vet clinic to serve rural communities and provide emergency care.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=400&fit=crop&crop=center"
  },
  {
    year: "2024",
    title: "Today",
    description: "Over 2,500 animals rescued and 1,800 successful adoptions. We continue to grow our network of volunteers and expand our services.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop&crop=center"
  }
];

export default function OurStory() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a single act of compassion to a community movement - discover how Paws & Hearts 
            became the beacon of hope for thousands of animals in need.
          </p>
        </motion.div>

        {/* Story Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-30" />
          
          <div className="space-y-16">
            {storySteps.map((step, index) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="story-frame rounded-2xl p-8 gentle-scale">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center soft-glow">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">{step.year}</div>
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background soft-glow" />

                {/* Image */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="rescue-card rounded-2xl overflow-hidden"
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="story-frame rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Be Part of Our Story
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every volunteer, every donation, every adoption adds another chapter to our story. 
              Join us in writing the next chapter of hope and healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Volunteer Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary/30 text-foreground font-semibold rounded-xl hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
              >
                Make a Donation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



