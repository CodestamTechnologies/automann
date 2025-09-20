"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Brain, Leaf, Users, Clock, Star } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    id: 1,
    title: "Mindful Yoga Flow",
    description: "Connect body and mind through gentle, flowing movements that promote flexibility and inner peace.",
    category: "Yoga",
    duration: "60 min",
    level: "All Levels",
    rating: 4.9,
    students: 1200,
    image: "https://maxm-imggenurl.web.val.run/zen yoga meditation peaceful nature mindful movement flexibility",
    icon: Heart,
    features: ["Breathing Techniques", "Flexibility", "Stress Relief"]
  },
  {
    id: 2,
    title: "Nature Fitness",
    description: "Outdoor workouts that combine strength training with the healing power of nature.",
    category: "Fitness",
    duration: "45 min",
    level: "Intermediate",
    rating: 4.8,
    students: 850,
    image: "https://maxm-imggenurl.web.val.run/outdoor fitness nature workout strength training natural environment",
    icon: Activity,
    features: ["Strength Training", "Cardio", "Nature Therapy"]
  },
  {
    id: 3,
    title: "Meditation & Mindfulness",
    description: "Learn ancient techniques for mental clarity, emotional balance, and spiritual growth.",
    category: "Meditation",
    duration: "30 min",
    level: "Beginner",
    rating: 4.9,
    students: 2000,
    image: "https://maxm-imggenurl.web.val.run/meditation mindfulness peaceful serene calm mental clarity spiritual",
    icon: Brain,
    features: ["Stress Reduction", "Focus", "Emotional Balance"]
  },
  {
    id: 4,
    title: "Holistic Nutrition",
    description: "Discover how to nourish your body with whole foods and mindful eating practices.",
    category: "Nutrition",
    duration: "90 min",
    level: "All Levels",
    rating: 4.7,
    students: 650,
    image: "https://maxm-imggenurl.web.val.run/holistic nutrition healthy eating whole foods mindful eating wellness",
    icon: Leaf,
    features: ["Meal Planning", "Nutrition Education", "Healthy Recipes"]
  }
];

export default function FeaturedPrograms() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Programs
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transform Your Wellness Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted programs designed to nurture your mind, body, and soul 
            through evidence-based wellness practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/90 text-foreground border-border/50">
                      {program.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <program.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-2">
                    {program.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Program Details */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{program.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{program.rating}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {program.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Level Badge */}
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      {program.level}
                    </Badge>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                      <Link href={`/programs/${program.id}`}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="group" asChild>
            <Link href="/programs">
              View All Programs
              <Activity className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
