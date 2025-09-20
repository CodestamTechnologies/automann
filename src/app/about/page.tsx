import type { Metadata } from "next";
import Navbar from "@/components/wellness/Navbar";
import Footer from "@/components/wellness/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Leaf, Users, Award, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — ZenFit Wellness Center",
  description: "Learn about ZenFit's mission to provide holistic wellness services and our team of certified instructors and wellness experts.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "Founder &amp; Lead Yoga Instructor",
    bio: "With over 15 years of experience in yoga and mindfulness, Sarah founded ZenFit to create a space where people can find balance and healing.",
    image: "https://maxm-imggenurl.web.val.run/peaceful woman yoga instructor founder wellness leader",
    certifications: ["RYT-500", "Mindfulness Teacher", "Wellness Coach"],
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Fitness Director",
    bio: "Michael specializes in outdoor fitness and nature therapy, helping people connect with their bodies through movement in natural settings.",
    image: "https://maxm-imggenurl.web.val.run/fitness director outdoor trainer nature wellness professional",
    certifications: ["NASM-CPT", "Outdoor Fitness Specialist", "Nature Therapy Guide"],
    avatar: "MR"
  },
  {
    name: "Emma Thompson",
    role: "Meditation &amp; Mindfulness Coach",
    bio: "Emma brings ancient wisdom to modern life, teaching meditation techniques that help people find peace and clarity in their daily routines.",
    image: "https://maxm-imggenurl.web.val.run/meditation coach mindfulness teacher peaceful wellness expert",
    certifications: ["MBSR Teacher", "Vipassana Instructor", "Stress Management Specialist"],
    avatar: "ET"
  },
  {
    name: "David Park",
    role: "Holistic Nutritionist",
    bio: "David combines nutritional science with holistic principles, helping people nourish their bodies with whole foods and mindful eating practices.",
    image: "https://maxm-imggenurl.web.val.run/holistic nutritionist healthy eating wellness nutrition expert",
    certifications: ["RDN", "Holistic Nutritionist", "Mindful Eating Coach"],
    avatar: "DP"
  }
];

const values = [
  {
    title: "Holistic Approach",
    description: "We address the whole person - mind, body, and spirit - recognizing that true wellness comes from balance in all areas of life.",
    icon: Heart
  },
  {
    title: "Natural Healing",
    description: "We prioritize natural, non-invasive methods of healing and wellness, working with the body&apos;s innate wisdom.",
    icon: Leaf
  },
  {
    title: "Community Support",
    description: "We believe in the power of community and create supportive environments where people can grow and heal together.",
    icon: Users
  },
  {
    title: "Evidence-Based",
    description: "Our programs are grounded in scientific research and proven therapeutic methods, ensuring safe and effective practices.",
    icon: Award
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              About ZenFit
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Nurturing Wellness, One Person at a Time
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Founded on the belief that everyone deserves access to holistic wellness, ZenFit has been transforming lives 
              through mindful movement, natural healing, and compassionate care since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ZenFit was born from a simple yet profound realization: true wellness comes from harmony between mind, body, and spirit. 
                  Our founder, Sarah Chen, experienced this transformation firsthand after years of stress and burnout in the corporate world.
                </p>
                <p>
                  What started as a small yoga studio has grown into a comprehensive wellness center, but our core mission remains unchanged: 
                  to provide a sanctuary where people can reconnect with themselves and discover their path to lasting wellness.
                </p>
                <p>
                  Today, we&apos;re proud to serve over 10,000 members with a team of certified instructors, wellness coaches, and holistic health practitioners 
                  who share our commitment to natural healing and mindful living.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/programs">
                  Explore Our Programs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://maxm-imggenurl.web.val.run/zenfit wellness center peaceful studio meditation yoga holistic health"
                alt="ZenFit Wellness Center"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape the experience we create for our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our certified instructors and wellness experts are passionate about helping you achieve your wellness goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {member.certifications.map((cert, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-primary/60 mx-auto mb-6" />
          <blockquote className="text-xl text-muted-foreground italic mb-6">
            &ldquo;ZenFit isn&apos;t just a wellness center—it&apos;s a community that has transformed my life. 
            The holistic approach and caring instructors have helped me find balance and peace I never knew was possible.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src="https://maxm-imggenurl.web.val.run/happy satisfied wellness member testimonial" alt="Member testimonial" />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">JS</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="font-semibold text-foreground">Jessica Smith</div>
              <div className="text-sm text-muted-foreground">Member since 2020</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Wellness Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to start your wellness journey? We&apos;re here to support you every step of the way.
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