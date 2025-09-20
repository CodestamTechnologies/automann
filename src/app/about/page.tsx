"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/eco/Navbar";
import Footer from "@/components/eco/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Leaf, Heart, Users, ArrowRight, Quote, Award, Target, Globe } from "lucide-react";
import Link from "next/link";

// Metadata is handled in layout.tsx for client components

const teamMembers = [
  {
    name: "Sarah Green",
    role: "Founder &amp; CEO",
    bio: "Environmental scientist with 15+ years of experience in sustainability and eco-friendly product development.",
    image: "https://maxm-imggenurl.web.val.run/professional woman environmental scientist sustainability expert eco friendly",
    expertise: ["Sustainability", "Environmental Science", "Leadership"],
    avatar: "SG"
  },
  {
    name: "Michael Earth",
    role: "Head of Product Development",
    bio: "Product designer specializing in sustainable materials and circular economy principles.",
    image: "https://maxm-imggenurl.web.val.run/professional man product designer sustainable materials eco friendly",
    expertise: ["Product Design", "Sustainable Materials", "Circular Economy"],
    avatar: "ME"
  },
  {
    name: "Emma Nature",
    role: "Community Manager",
    bio: "Passionate about building communities and educating people about sustainable living practices.",
    image: "https://maxm-imggenurl.web.val.run/professional woman community manager sustainable living education",
    expertise: ["Community Building", "Education", "Sustainability"],
    avatar: "EN"
  },
  {
    name: "David Forest",
    role: "Sustainability Director",
    bio: "Environmental consultant with expertise in carbon footprint reduction and sustainable business practices.",
    image: "https://maxm-imggenurl.web.val.run/professional man environmental consultant sustainability director eco business",
    expertise: ["Environmental Consulting", "Carbon Reduction", "Business Strategy"],
    avatar: "DF"
  }
];

const companyValues = [
  {
    title: "Environmental Responsibility",
    description: "We are committed to minimizing our environmental impact and promoting sustainable practices in everything we do.",
    icon: Leaf
  },
  {
    title: "Community First",
    description: "We believe in building strong communities that support and inspire each other on their sustainable living journey.",
    icon: Heart
  },
  {
    title: "Quality &amp; Innovation",
    description: "We continuously innovate to provide high-quality, eco-friendly products that meet the needs of conscious consumers.",
    icon: Award
  },
  {
    title: "Transparency",
    description: "We maintain complete transparency in our sourcing, manufacturing, and business practices.",
    icon: Target
  }
];

const milestones = [
  { year: "2020", event: "Company Founded", description: "EcoLife was established with a vision to make sustainable living accessible to everyone" },
  { year: "2021", event: "First Product Launch", description: "Launched our first line of eco-friendly home products with 100% sustainable materials" },
  { year: "2022", event: "Community Platform", description: "Built our online community platform connecting 10,000+ eco-conscious individuals" },
  { year: "2023", event: "Carbon Neutral", description: "Achieved carbon neutrality across all operations and supply chain" },
  { year: "2024", event: "Global Expansion", description: "Expanded to serve customers in 25+ countries with local sustainable partnerships" }
];

const impactStats = [
  { icon: Leaf, value: "50,000+", label: "Trees Planted" },
  { icon: Heart, value: "100,000+", label: "Plastic Bottles Saved" },
  { icon: Users, value: "25,000+", label: "Community Members" },
  { icon: Globe, value: "25+", label: "Countries Served" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 organic-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 rounded-full">
              <Leaf className="w-4 h-4 mr-2" />
              About EcoLife
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Our Mission for
              <span className="block natural-gradient bg-clip-text text-transparent">
                a Sustainable Future
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded in 2020, EcoLife is dedicated to making sustainable living accessible, 
              affordable, and enjoyable for everyone. We believe that small changes can create big impacts.
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
                  EcoLife was born from a simple observation: sustainable living shouldn&apos;t be a luxury. 
                  Our founder, Sarah Green, started the company after struggling to find affordable, 
                  high-quality eco-friendly products for her own family.
                </p>
                <p>
                  What began as a small online store has grown into a comprehensive platform that serves 
                  over 25,000 community members worldwide. We&apos;ve helped thousands of families reduce 
                  their environmental footprint while saving money and living healthier lives.
                </p>
                <p>
                  Today, we&apos;re proud to be a trusted partner for anyone looking to embrace a more 
                  sustainable lifestyle, offering everything from eco-friendly products to educational 
                  resources and community support.
                </p>
              </div>
              <Button className="natural-gradient hover:natural-glow text-primary-foreground border-0 font-semibold rounded-xl" asChild>
                <Link href="/community">
                  Join Our Community
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://maxm-imggenurl.web.val.run/ecolife sustainable living company team workspace eco friendly office"
                alt="EcoLife Team"
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
        <div className="absolute inset-0 organic-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Core
              <span className="block natural-gradient bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape the culture that drives our mission 
              to create a more sustainable world.
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
              <span className="block natural-gradient bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate individuals behind EcoLife&apos;s mission to make sustainable living 
              accessible and enjoyable for everyone.
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

      {/* Impact Stats */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 organic-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Environmental
              <span className="block natural-gradient bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to environmental responsibility and positive change.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:natural-glow transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Journey
              <span className="block natural-gradient bg-clip-text text-transparent">
                Through the Years
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our mission to make sustainable living accessible and mainstream.
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
        <div className="absolute inset-0 organic-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Quote className="w-16 h-16 text-primary/60 mx-auto mb-8" />
          <blockquote className="text-2xl text-muted-foreground italic mb-8 leading-relaxed">
            &ldquo;EcoLife has transformed not just my shopping habits, but my entire approach to living. 
            They make sustainability feel achievable and enjoyable, not overwhelming.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://maxm-imggenurl.web.val.run/professional woman customer testimonial eco conscious lifestyle" alt="Customer testimonial" />
              <AvatarFallback className="bg-primary/20 text-primary font-semibold text-lg">MJ</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="font-semibold text-foreground text-lg">Maria Johnson</div>
              <div className="text-muted-foreground">EcoLife Community Member</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Be part of the movement towards a more sustainable future. Every small action 
            contributes to a bigger change for our planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="natural-gradient hover:natural-glow text-primary-foreground border-0 font-semibold rounded-xl" asChild>
              <Link href="/products">
                Shop Sustainable Products
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-xl" asChild>
              <Link href="/community">
                Join Our Community
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}