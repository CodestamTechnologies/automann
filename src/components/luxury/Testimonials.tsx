"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Victoria Sterling",
    title: "CEO, Sterling Enterprises",
    location: "New York, USA",
    rating: 5,
    text: "Alpine Luxe exceeded every expectation. The helicopter tour of the Matterhorn was absolutely breathtaking, and the service was impeccable. This was truly a once-in-a-lifetime experience.",
    image: "https://maxm-imggenurl.web.val.run/professional woman, CEO, elegant, luxury travel, mountain background, sophisticated portrait",
    experience: "Swiss Alps Helicopter Tour"
  },
  {
    id: 2,
    name: "James Richardson",
    title: "Investment Banker",
    location: "London, UK",
    rating: 5,
    text: "The Himalayan expedition was perfectly organized with luxury accommodations that I never expected at such altitude. The guides were exceptional and the entire experience was seamless.",
    image: "https://maxm-imggenurl.web.val.run/professional man, banker, mountain climber, luxury expedition gear, confident portrait",
    experience: "Himalayan Luxury Expedition"
  },
  {
    id: 3,
    name: "Isabella Chen",
    title: "Tech Entrepreneur",
    location: "San Francisco, USA",
    rating: 5,
    text: "The Canadian Rockies wellness retreat was exactly what I needed. The combination of adventure and relaxation in such a stunning setting was perfect. I&apos;ll definitely be returning.",
    image: "https://maxm-imggenurl.web.val.run/asian woman, tech entrepreneur, wellness retreat, mountain spa, serene portrait",
    experience: "Canadian Rockies Wellness Retreat"
  }
];

export default function Testimonials() {
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
            <span className="text-foreground">What Our</span>{" "}
            <span className="text-gradient-gold">Guests Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover why discerning travelers choose Alpine Luxe for their most memorable mountain adventures.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl p-8 luxury-shadow luxury-hover luxury-border relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 mountain-pattern opacity-5"></div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>

                {/* Experience Badge */}
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                  {testimonial.experience}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground text-lg leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-border/50">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover luxury-border"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-primary-foreground fill-current" />
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient-gold">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient-gold">4.9</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient-gold">85%</div>
              <div className="text-muted-foreground">Return Guests</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient-gold">24/7</div>
              <div className="text-muted-foreground">Concierge Support</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 alpine-blur rounded-full luxury-border mb-6">
            <Star className="h-5 w-5 text-primary fill-current" />
            <span className="text-foreground font-medium">Join Our Community of Adventurers</span>
          </div>
          
          <button className="px-8 py-4 gold-gradient text-primary-foreground rounded-xl font-semibold text-lg alpine-glow hover:shadow-xl transition-all duration-300 luxury-hover">
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}