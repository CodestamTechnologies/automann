import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, Target, Users, ArrowRight, Quote, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — GrowthLab Digital",
  description: "Learn about GrowthLab Digital's mission to accelerate business growth through cutting-edge digital marketing, growth hacking, and data-driven strategies.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO &amp; Growth Strategist",
    bio: "Serial entrepreneur with 10+ years of experience in scaling startups and driving explosive growth through data-driven strategies.",
    image: "https://maxm-imggenurl.web.val.run/professional woman CEO growth strategist entrepreneur business leader",
    expertise: ["Growth Strategy", "Leadership", "Startup Scaling"],
    avatar: "SC"
  },
  {
    name: "Michael Rodriguez",
    role: "CTO &amp; Data Analytics Lead",
    bio: "Data science expert with deep expertise in marketing analytics, automation, and building scalable growth systems.",
    image: "https://maxm-imggenurl.web.val.run/professional man CTO data analytics lead technology expert",
    expertise: ["Data Analytics", "Marketing Automation", "Technology"],
    avatar: "MR"
  },
  {
    name: "Emily Johnson",
    role: "Head of Digital Marketing",
    bio: "Digital marketing veteran with 8+ years of experience in driving high-converting campaigns across all channels.",
    image: "https://maxm-imggenurl.web.val.run/professional woman head digital marketing expert campaign strategist",
    expertise: ["Digital Marketing", "Campaign Strategy", "Conversion Optimization"],
    avatar: "EJ"
  },
  {
    name: "David Park",
    role: "Growth Hacking Specialist",
    bio: "Growth hacking expert who has helped 50+ companies achieve rapid growth through innovative marketing techniques.",
    image: "https://maxm-imggenurl.web.val.run/professional man growth hacking specialist marketing expert",
    expertise: ["Growth Hacking", "Viral Marketing", "User Acquisition"],
    avatar: "DP"
  }
];

const companyValues = [
  {
    title: "Data-Driven Growth",
    description: "We make every decision based on data and analytics to ensure maximum ROI and sustainable growth.",
    icon: TrendingUp
  },
  {
    title: "Innovation First",
    description: "We stay ahead of the curve by embracing new technologies and cutting-edge marketing strategies.",
    icon: Zap
  },
  {
    title: "Client Success",
    description: "Our success is measured by the success of our clients. We&apos;re committed to delivering exceptional results.",
    icon: Target
  },
  {
    title: "Transparency",
    description: "We believe in complete transparency in our processes, reporting, and communication with clients.",
    icon: Users
  }
];

const milestones = [
  { year: "2019", event: "Company Founded", description: "GrowthLab Digital established with a vision to accelerate business growth" },
  { year: "2020", event: "First Major Client", description: "Secured first enterprise client and achieved 200% growth for their business" },
  { year: "2021", event: "Team Expansion", description: "Grew team to 15+ experts and expanded service offerings" },
  { year: "2022", event: "Industry Recognition", description: "Received multiple awards for outstanding growth marketing results" },
  { year: "2023", event: "Global Expansion", description: "Expanded services to international markets and remote teams" },
  { year: "2024", event: "Future Vision", description: "Continuing to push boundaries of growth marketing and digital innovation" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 energy-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 rounded-full">
              <TrendingUp className="w-4 h-4 mr-2" />
              About GrowthLab Digital
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Accelerating Growth
              <span className="block dynamic-gradient bg-clip-text text-transparent">
                Through Innovation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded in 2019, GrowthLab Digital has been at the forefront of digital marketing innovation, 
              helping businesses achieve explosive growth through data-driven strategies and cutting-edge technology.
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
                  GrowthLab Digital was born from a simple yet powerful belief: that every business has the potential 
                  for explosive growth when equipped with the right strategies, tools, and expertise. Our founder, 
                  Sarah Chen, established the company after successfully scaling multiple startups and recognizing 
                  the need for specialized growth marketing services.
                </p>
                <p>
                  What started as a small team of growth enthusiasts has evolved into a comprehensive digital 
                  marketing agency serving clients worldwide. We&apos;ve helped over 100 companies achieve 
                  an average of 300% growth through our innovative approaches and data-driven methodologies.
                </p>
                <p>
                  Today, we&apos;re proud to be a trusted partner for startups, scale-ups, and enterprises 
                  looking to accelerate their growth and maximize their marketing ROI.
                </p>
              </div>
              <Button className="dynamic-gradient hover:dynamic-glow text-primary-foreground border-0 font-semibold rounded-xl" asChild>
                <Link href="/case-studies">
                  View Our Success Stories
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://maxm-imggenurl.web.val.run/growth lab digital marketing agency team workspace modern office"
                alt="GrowthLab Digital Team"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-primary/30"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 energy-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Core
              <span className="block dynamic-gradient bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape the culture that drives our exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/20">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
              <span className="block dynamic-gradient bg-clip-text text-transparent">
                Growth Experts
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The talented professionals behind our exceptional growth results and client success stories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold text-xl">
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
        <div className="absolute inset-0 energy-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Growth
              <span className="block dynamic-gradient bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our mission to accelerate business growth and digital marketing innovation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl border border-primary/20">
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
        <div className="absolute inset-0 energy-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Quote className="w-16 h-16 text-primary/60 mx-auto mb-8" />
          <blockquote className="text-2xl text-muted-foreground italic mb-8 leading-relaxed">
            &ldquo;GrowthLab Digital doesn&apos;t just provide marketing services—they become your growth partner. 
            Their data-driven approach and innovative strategies transformed our business completely.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://maxm-imggenurl.web.val.run/professional man CEO client testimonial business leader" alt="Client testimonial" />
              <AvatarFallback className="bg-primary/20 text-primary font-semibold text-lg">AC</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="font-semibold text-foreground text-lg">Alex Chen</div>
              <div className="text-muted-foreground">CEO, TechStart Inc</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Join the ranks of successful businesses that have achieved explosive growth 
            with GrowthLab Digital as their growth partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="dynamic-gradient hover:dynamic-glow text-primary-foreground border-0 font-semibold rounded-xl" asChild>
              <Link href="/contact">
                Start Your Growth Journey
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-xl" asChild>
              <Link href="/case-studies">
                View Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}