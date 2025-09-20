import type { Metadata } from "next";
import Navbar from "@/components/wellness/Navbar";
import Footer from "@/components/wellness/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Moon, Shield, Leaf, Users, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wellness Services — ZenFit Holistic Health Center",
  description: "Comprehensive wellness services including stress management, sleep optimization, mental health support, and holistic healing.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const wellnessServices = [
  {
    id: 1,
    title: "Stress Management",
    description: "Learn evidence-based techniques to manage stress and build resilience in your daily life.",
    icon: Shield,
    features: ["Mindfulness Training", "Breathing Techniques", "Lifestyle Coaching", "Crisis Support"],
    duration: "8-week program",
    sessions: "16 sessions",
    image: "https://maxm-imggenurl.web.val.run/stress management mindfulness peaceful calm wellness therapy"
  },
  {
    id: 2,
    title: "Sleep Optimization",
    description: "Improve your sleep quality through natural methods and create healthy bedtime routines.",
    icon: Moon,
    features: ["Sleep Hygiene", "Relaxation Techniques", "Circadian Rhythm", "Sleep Tracking"],
    duration: "6-week program",
    sessions: "12 sessions",
    image: "https://maxm-imggenurl.web.val.run/sleep optimization peaceful bedroom relaxation wellness rest"
  },
  {
    id: 3,
    title: "Mental Health Support",
    description: "Comprehensive mental health support with licensed therapists and wellness coaches.",
    icon: Brain,
    features: ["Individual Therapy", "Group Support", "Crisis Intervention", "Wellness Planning"],
    duration: "Ongoing support",
    sessions: "Flexible scheduling",
    image: "https://maxm-imggenurl.web.val.run/mental health support therapy counseling peaceful wellness"
  },
  {
    id: 4,
    title: "Holistic Nutrition",
    description: "Personalized nutrition guidance focusing on whole foods and mindful eating practices.",
    icon: Leaf,
    features: ["Meal Planning", "Nutrition Education", "Cooking Classes", "Health Monitoring"],
    duration: "12-week program",
    sessions: "24 sessions",
    image: "https://maxm-imggenurl.web.val.run/holistic nutrition healthy eating whole foods mindful wellness"
  }
];

const wellnessApproach = [
  {
    title: "Mind-Body Connection",
    description: "We believe in the powerful connection between mental and physical wellness, addressing both aspects holistically.",
    icon: Heart
  },
  {
    title: "Evidence-Based Practices",
    description: "All our wellness programs are grounded in scientific research and proven therapeutic methods.",
    icon: CheckCircle
  },
  {
    title: "Personalized Care",
    description: "Every wellness journey is unique. We create customized plans tailored to your specific needs and goals.",
    icon: Users
  },
  {
    title: "Natural Healing",
    description: "We emphasize natural, non-invasive approaches to healing and wellness whenever possible.",
    icon: Leaf
  }
];

export default function WellnessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Wellness Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Holistic Wellness &amp; Healing
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience comprehensive wellness services designed to support your mental, emotional, and physical health. 
              Our holistic approach addresses the whole person, not just symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Wellness Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {wellnessServices.map((service) => (
              <Card key={service.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm group">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Program Details */}
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span><strong>Duration:</strong> {service.duration}</span>
                    <span><strong>Sessions:</strong> {service.sessions}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">What&apos;s Included:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group" asChild>
                    <Link href={`/wellness/${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Holistic Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe wellness is more than just the absence of illness. It&apos;s about thriving in all aspects of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessApproach.map((approach, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <approach.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {approach.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {approach.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-8 border border-border/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Transformative Results
              </h2>
              <p className="text-lg text-muted-foreground">
                Our wellness programs have helped thousands of people achieve lasting positive change.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Report Improved Sleep</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">87%</div>
                <div className="text-sm text-muted-foreground">Reduced Stress Levels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">92%</div>
                <div className="text-sm text-muted-foreground">Better Mental Health</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">89%</div>
                <div className="text-sm text-muted-foreground">Improved Life Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step towards a healthier, more balanced life. Our wellness experts are here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/contact">
                Schedule Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/programs">
                Explore Programs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}