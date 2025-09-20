import type { Metadata } from "next";
import Navbar from "@/components/wellness/Navbar";
import Footer from "@/components/wellness/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, Brain, Leaf, Users, Clock, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wellness Programs — ZenFit Holistic Health Center",
  description: "Explore our comprehensive wellness programs designed to nurture your mind, body, and soul through evidence-based practices.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

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
    features: ["Breathing Techniques", "Flexibility", "Stress Relief"],
    instructor: "Sarah Chen",
    schedule: "Mon, Wed, Fri 7:00 AM"
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
    features: ["Strength Training", "Cardio", "Nature Therapy"],
    instructor: "Michael Rodriguez",
    schedule: "Tue, Thu, Sat 6:00 AM"
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
    features: ["Stress Reduction", "Focus", "Emotional Balance"],
    instructor: "Emma Thompson",
    schedule: "Daily 6:30 PM"
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
    features: ["Meal Planning", "Nutrition Education", "Healthy Recipes"],
    instructor: "David Park",
    schedule: "Sat 10:00 AM"
  },
  {
    id: 5,
    title: "Tai Chi for Wellness",
    description: "Ancient martial art practiced for health and meditation through slow, flowing movements.",
    category: "Martial Arts",
    duration: "50 min",
    level: "All Levels",
    rating: 4.8,
    students: 750,
    image: "https://maxm-imggenurl.web.val.run/tai chi martial arts wellness meditation slow movements peaceful",
    icon: Activity,
    features: ["Balance", "Coordination", "Inner Peace"],
    instructor: "Li Wei",
    schedule: "Mon, Wed, Fri 5:30 PM"
  },
  {
    id: 6,
    title: "Sound Healing Therapy",
    description: "Experience the therapeutic power of sound vibrations for deep relaxation and healing.",
    category: "Therapy",
    duration: "75 min",
    level: "All Levels",
    rating: 4.9,
    students: 400,
    image: "https://maxm-imggenurl.web.val.run/sound healing therapy meditation relaxation vibrations peaceful",
    icon: Heart,
    features: ["Deep Relaxation", "Stress Relief", "Energy Healing"],
    instructor: "Maya Patel",
    schedule: "Sun 2:00 PM"
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Our Programs
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Transform Your Wellness Journey
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of wellness programs designed to nurture your mind, body, and soul. 
              Each program is carefully crafted by certified instructors to provide you with the tools for lasting transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm group">
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

                  {/* Instructor & Schedule */}
                  <div className="space-y-2 text-sm">
                    <div className="text-muted-foreground">
                      <span className="font-medium">Instructor:</span> {program.instructor}
                    </div>
                    <div className="text-muted-foreground">
                      <span className="font-medium">Schedule:</span> {program.schedule}
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

                  {/* Level Badge and Button */}
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      {program.level}
                    </Badge>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground group" asChild>
                      <Link href={`/programs/${program.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of members who have transformed their lives through our holistic wellness programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/contact">
                Get Started Today
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/classes">
                View Class Schedule
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}