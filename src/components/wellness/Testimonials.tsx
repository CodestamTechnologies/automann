"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Yoga Instructor",
    content: "ZenFit has transformed my approach to wellness. The mindful movement classes have brought such peace to my daily routine. I feel more connected to my body and mind than ever before.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/peaceful woman yoga instructor serene calm wellness",
    avatar: "SC"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Business Executive",
    content: "The meditation programs at ZenFit have been life-changing. I&apos;ve learned to manage stress effectively and found a sense of balance I never knew was possible in my busy lifestyle.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/calm businessman meditation mindfulness executive wellness",
    avatar: "MR"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Teacher",
    content: "The holistic approach at ZenFit is exactly what I needed. From nutrition guidance to mindful movement, every aspect of my wellness journey has been supported with care and expertise.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/peaceful teacher wellness holistic health mindful lifestyle",
    avatar: "ET"
  },
  {
    id: 4,
    name: "David Park",
    role: "Software Developer",
    content: "As someone who spends hours at a computer, the nature fitness classes have been a revelation. I feel stronger, more flexible, and deeply connected to the natural world around me.",
    rating: 5,
    image: "https://maxm-imggenurl.web.val.run/tech professional outdoor fitness nature wellness mindful",
    avatar: "DP"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Stories of Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our community members who have discovered their path to wellness 
            and transformed their lives through mindful practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm">
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
                  <p className="text-muted-foreground mb-6 leading-relaxed">
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
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Happy Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Classes Weekly</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Expert Instructors</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
