"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/eco/Navbar";
import Footer from "@/components/eco/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Heart, Leaf, Award, ArrowRight, Star, MessageCircle, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

// Metadata is handled in layout.tsx for client components

const communityStats = [
  { icon: Users, value: "25,000+", label: "Active Members" },
  { icon: Heart, value: "500+", label: "Success Stories" },
  { icon: Leaf, value: "1,200+", label: "Eco Tips Shared" },
  { icon: Award, value: "50+", label: "Monthly Events" }
];

const featuredMembers = [
  {
    name: "Sarah Green",
    role: "Zero Waste Advocate",
    location: "Portland, OR",
    avatar: "https://maxm-imggenurl.web.val.run/professional woman zero waste advocate eco conscious lifestyle",
    story: "Reduced household waste by 90% in just 6 months",
    achievements: ["Zero Waste Champion", "Community Leader", "Eco Blogger"],
    joinDate: "2023"
  },
  {
    name: "Michael Earth",
    role: "Urban Gardener",
    location: "Brooklyn, NY",
    avatar: "https://maxm-imggenurl.web.val.run/professional man urban gardener sustainable living eco friendly",
    story: "Growing 80% of family's vegetables in small urban space",
    achievements: ["Urban Farming Expert", "Seed Saver", "Workshop Host"],
    joinDate: "2022"
  },
  {
    name: "Emma Nature",
    role: "Sustainable Fashion Designer",
    location: "San Francisco, CA",
    avatar: "https://maxm-imggenurl.web.val.run/professional woman sustainable fashion designer eco conscious style",
    story: "Created fashion line using 100% recycled materials",
    achievements: ["Fashion Innovator", "Circular Economy Advocate", "Mentor"],
    joinDate: "2023"
  },
  {
    name: "David Forest",
    role: "Renewable Energy Consultant",
    location: "Austin, TX",
    avatar: "https://maxm-imggenurl.web.val.run/professional man renewable energy consultant sustainable technology",
    story: "Helped 200+ families transition to solar power",
    achievements: ["Energy Expert", "Climate Activist", "Tech Innovator"],
    joinDate: "2021"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Zero Waste Workshop",
    description: "Learn practical tips for reducing household waste and living more sustainably.",
    date: "March 15, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Community Center, Portland",
    attendees: 45,
    maxAttendees: 50,
    image: "https://maxm-imggenurl.web.val.run/zero waste workshop sustainable living community event eco friendly",
    type: "Workshop"
  },
  {
    id: 2,
    title: "Urban Gardening Meetup",
    description: "Connect with fellow urban gardeners and share tips for growing food in small spaces.",
    date: "March 22, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Brooklyn Community Garden",
    attendees: 32,
    maxAttendees: 40,
    image: "https://maxm-imggenurl.web.val.run/urban gardening meetup community event sustainable living",
    type: "Meetup"
  },
  {
    id: 3,
    title: "Sustainable Fashion Swap",
    description: "Exchange gently used clothing and accessories while learning about sustainable fashion.",
    date: "March 29, 2024",
    time: "1:00 PM - 5:00 PM",
    location: "EcoLife Store, San Francisco",
    attendees: 28,
    maxAttendees: 35,
    image: "https://maxm-imggenurl.web.val.run/sustainable fashion swap clothing exchange eco friendly event",
    type: "Swap"
  }
];

const communityForums = [
  {
    title: "Beginner's Guide to Sustainable Living",
    description: "New to eco-friendly living? Start here with our comprehensive beginner's guide.",
    posts: 156,
    lastActivity: "2 hours ago",
    category: "Getting Started"
  },
  {
    title: "Zero Waste Success Stories",
    description: "Share your zero waste journey and inspire others with your achievements.",
    posts: 89,
    lastActivity: "5 hours ago",
    category: "Success Stories"
  },
  {
    title: "DIY Natural Products",
    description: "Exchange recipes and tips for making your own natural cleaning and personal care products.",
    posts: 234,
    lastActivity: "1 day ago",
    category: "DIY & Crafts"
  },
  {
    title: "Sustainable Gardening Tips",
    description: "Discuss organic gardening, composting, and growing your own food sustainably.",
    posts: 178,
    lastActivity: "3 hours ago",
    category: "Gardening"
  }
];

export default function CommunityPage() {
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
              <Users className="w-4 h-4 mr-2" />
              Our Community
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Join Our
              <span className="block natural-gradient bg-clip-text text-transparent">
                Green Community
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Connect with like-minded individuals who are passionate about sustainable living. 
              Share experiences, learn from others, and make a positive impact together.
            </p>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
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

      {/* Featured Members */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Meet Our
              <span className="block natural-gradient bg-clip-text text-transparent">
                Community Leaders
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Inspiring individuals who are making a real difference in their communities 
              and helping others on their sustainable living journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredMembers.map((member) => (
              <Card key={member.name} className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/90 backdrop-blur-xl border border-primary/20 hover:border-primary/40">
                <CardContent className="p-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-2 border-primary/20">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {member.location}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.story}
                  </p>
                  
                  <div className="space-y-2">
                    {member.achievements.map((achievement, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20 mr-1">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-xs text-muted-foreground">
                    Member since {member.joinDate}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Upcoming
              <span className="block natural-gradient bg-clip-text text-transparent">
                Community Events
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us for workshops, meetups, and events designed to help you learn, 
              connect, and grow in your sustainable living journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/90 backdrop-blur-xl border border-primary/20 hover:border-primary/40 group">
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                      {event.type}
                    </Badge>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 text-foreground border-border/50 backdrop-blur-sm">
                      {event.attendees}/{event.maxAttendees}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>

                    <Button className="w-full natural-gradient hover:natural-glow text-primary-foreground border-0 group font-semibold rounded-xl" asChild>
                      <Link href={`/community/events/${event.id}`}>
                        <Calendar className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                        Join Event
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Forums */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Community
              <span className="block natural-gradient bg-clip-text text-transparent">
                Discussion Forums
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with fellow community members, ask questions, share experiences, 
              and learn from others on their sustainable living journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {communityForums.map((forum) => (
              <Card key={forum.title} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/90 backdrop-blur-xl border border-primary/20 hover:border-primary/40">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">{forum.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {forum.description}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {forum.category}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{forum.posts} posts</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Active</span>
                      </div>
                    </div>
                    <span className="text-xs">Last activity: {forum.lastActivity}</span>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 border-primary/30 text-foreground hover:bg-primary/10 rounded-xl" asChild>
                    <Link href={`/community/forums/${forum.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Join Discussion
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 organic-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Connect with thousands of eco-conscious individuals, share your journey, 
            and learn from others who are making a positive impact on the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="natural-gradient hover:natural-glow text-primary-foreground border-0 font-semibold rounded-xl" asChild>
              <Link href="/community/join">
                Join Community
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-xl" asChild>
              <Link href="/community/events">
                View All Events
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}