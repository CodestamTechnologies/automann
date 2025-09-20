import type { Metadata } from "next";
import Navbar from "@/components/arts/Navbar";
import Footer from "@/components/arts/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Palette, Heart, Users, Award, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Artisan Creative Studio",
  description: "Learn about Artisan Creative Studio's mission to elevate creativity through exceptional arts and design services, fine art, and bespoke creative solutions.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const teamMembers = [
  {
    name: "Isabella Martinez",
    role: "Founder &amp; Lead Artist",
    bio: "Award-winning fine artist with 20+ years of experience in traditional and contemporary art. Isabella founded Artisan Creative Studio with a vision to elevate artistic excellence.",
    image: "https://maxm-imggenurl.web.val.run/professional woman fine artist founder elegant sophisticated business",
    expertise: ["Fine Art", "Art Direction", "Leadership"],
    avatar: "IM"
  },
  {
    name: "James Thompson",
    role: "Creative Director",
    bio: "Internationally recognized photographer and creative director with expertise in artistic and commercial photography. James brings innovative vision to every project.",
    image: "https://maxm-imggenurl.web.val.run/professional man creative director photographer sophisticated business",
    expertise: ["Photography", "Creative Direction", "Brand Strategy"],
    avatar: "JT"
  },
  {
    name: "Sophia Chen",
    role: "Digital Art Director",
    bio: "Digital design expert with a passion for creating compelling visual experiences. Sophia specializes in brand identity and contemporary digital art.",
    image: "https://maxm-imggenurl.web.val.run/professional woman digital art director designer sophisticated business",
    expertise: ["Digital Design", "Brand Identity", "UI/UX"],
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "Art Consultant",
    bio: "Art historian and consultant with deep knowledge of contemporary art markets. Michael provides expert guidance on art investment and collection building.",
    image: "https://maxm-imggenurl.web.val.run/professional man art consultant historian sophisticated business",
    expertise: ["Art Consultation", "Market Analysis", "Collection Building"],
    avatar: "MR"
  }
];

const companyValues = [
  {
    title: "Artistic Excellence",
    description: "We maintain the highest standards of artistic quality and craftsmanship in every project we undertake.",
    icon: Palette
  },
  {
    title: "Creative Innovation",
    description: "We embrace new techniques and technologies while respecting traditional artistic methods and values.",
    icon: Heart
  },
  {
    title: "Client Partnership",
    description: "We work closely with our clients to understand their vision and bring their creative dreams to life.",
    icon: Users
  },
  {
    title: "Cultural Impact",
    description: "We believe in the power of art to inspire, educate, and create positive change in communities.",
    icon: Award
  }
];

const milestones = [
  { year: "2008", event: "Studio Founded", description: "Artisan Creative Studio established with a vision for artistic excellence" },
  { year: "2010", event: "First Major Commission", description: "Completed first large-scale corporate art installation" },
  { year: "2012", event: "International Recognition", description: "Received first international art award for innovative design" },
  { year: "2015", event: "Gallery Partnership", description: "Established partnerships with prestigious art galleries worldwide" },
  { year: "2018", event: "Digital Expansion", description: "Launched digital art and design services division" },
  { year: "2020", event: "Virtual Exhibitions", description: "Pioneered virtual art exhibitions during global challenges" },
  { year: "2024", event: "Future Vision", description: "Continuing to push boundaries of creative expression and artistic innovation" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 artistic-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full">
              <Palette className="w-4 h-4 mr-2" />
              About Artisan Creative
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Elevating Creativity
              <span className="block elegant-gradient bg-clip-text text-transparent">
                Through Art
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded in 2008, Artisan Creative Studio has been dedicated to creating exceptional 
              artistic experiences that inspire, captivate, and transform spaces and lives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Artisan Creative Studio was born from a simple yet profound belief: that art has the power 
                  to transform spaces, inspire communities, and touch the human soul. Our founder, Isabella Martinez, 
                  established the studio with a vision to bridge the gap between traditional artistic craftsmanship 
                  and contemporary creative expression.
                </p>
                <p>
                  What started as a small studio in the heart of the art district has grown into a comprehensive 
                  creative hub, but our core mission remains unchanged: to create exceptional artworks that tell 
                  stories, evoke emotions, and leave lasting impressions.
                </p>
                <p>
                  Today, we&apos;re proud to serve clients worldwide with a team of 25+ talented artists and 
                  creative professionals who share our passion for artistic excellence and innovation.
                </p>
              </div>
              <Button className="elegant-gradient hover:elegant-glow text-primary-foreground border-0 font-semibold rounded-full" asChild>
                <Link href="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://maxm-imggenurl.web.val.run/artisan creative studio art gallery elegant sophisticated workspace"
                alt="Artisan Creative Studio"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-primary/20"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 artistic-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Core
              <span className="block elegant-gradient bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape the culture that drives our creative excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/10">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet Our
              <span className="block elegant-gradient bg-clip-text text-transparent">
                Creative Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The talented artists and creative professionals behind our exceptional 
              artistic achievements and client success stories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/10">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xl">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                            {skill}
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

      {/* Company Timeline */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 artistic-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Creative
              <span className="block elegant-gradient bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our mission to elevate creativity and artistic excellence.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl border border-primary/10">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.event}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 artistic-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Quote className="w-16 h-16 text-primary/60 mx-auto mb-8" />
          <blockquote className="text-2xl text-muted-foreground italic mb-8 leading-relaxed">
            &ldquo;Artisan Creative Studio doesn&apos;t just create art—they create experiences that transform 
            spaces and inspire everyone who encounters their work. Their artistic vision is truly exceptional.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://maxm-imggenurl.web.val.run/professional woman art collector gallery owner testimonial" alt="Client testimonial" />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">AC</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="font-semibold text-foreground text-lg">Anna Collins</div>
              <div className="text-muted-foreground">Gallery Director, Modern Art Museum</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Join Our Creative Community
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Ready to experience the transformative power of exceptional art? 
            Let&apos;s create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="elegant-gradient hover:elegant-glow text-primary-foreground border-0 font-semibold rounded-full" asChild>
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-full" asChild>
              <Link href="/gallery">
                Explore Our Gallery
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}