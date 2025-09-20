"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Building, Users, Award, Heart } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Art Collector",
    company: "Private Collection",
    content: "The fine art pieces I commissioned exceeded all my expectations. The attention to detail and artistic vision is truly remarkable.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/professional woman art collector elegant sophisticated business",
    avatar: "SM"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Gallery Owner",
    company: "Modern Art Gallery",
    content: "Working with Artisan Creative Studio has been a game-changer for our gallery. Their artistic quality is consistently exceptional.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/professional man gallery owner art business sophisticated",
    avatar: "DC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Brand Director",
    company: "Luxury Brands Inc",
    content: "The digital design work transformed our brand identity completely. Creative, professional, and absolutely stunning results.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/professional woman brand director business executive elegant",
    avatar: "ER"
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Event Photographer",
    company: "Thompson Studios",
    content: "The artistic photography services are outstanding. Every shot tells a story and captures the perfect moment beautifully.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/professional man photographer creative artist business",
    avatar: "MT"
  }
];

const stats = [
  { icon: Heart, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Users, value: "15+", label: "Years Experience" },
  { icon: Building, value: "100+", label: "Projects Completed" }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-primary to-transparent opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What Our Clients
            <span className="block elegant-gradient bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from our satisfied clients who have experienced the exceptional quality 
            and artistic excellence of our creative services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/90 backdrop-blur-xl border border-primary/10 hover:border-primary/30">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary/60" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Our Creative Journey</h3>
            <p className="text-muted-foreground">Numbers that reflect our passion and dedication</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:elegant-glow transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
