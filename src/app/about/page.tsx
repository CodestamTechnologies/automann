import type { Metadata } from "next";
import Navbar from "@/components/tech/Navbar";
import Footer from "@/components/tech/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Cpu, Shield, Rocket, ArrowRight, Quote, Star, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — NexusTech Innovation Hub",
  description: "Learn about NexusTech's mission to pioneer the future of technology with cutting-edge AI, quantum computing, and next-generation digital solutions.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO &amp; Co-Founder",
    bio: "Former Google AI researcher with 15+ years in machine learning and quantum computing. Led breakthrough research in neural network optimization.",
    image: "https://maxm-imggenurl.web.val.run/professional woman CEO technology executive AI researcher futuristic",
    expertise: ["AI Research", "Quantum Computing", "Leadership"],
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO &amp; Co-Founder",
    bio: "Ex-Microsoft architect specializing in distributed systems and cybersecurity. Built enterprise-scale platforms serving millions of users.",
    image: "https://maxm-imggenurl.web.val.run/professional man CTO technology architect cybersecurity expert futuristic",
    expertise: ["System Architecture", "Cybersecurity", "Cloud Computing"],
    avatar: "MR"
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of AI Research",
    bio: "Stanford PhD in Computer Science with focus on deep learning and natural language processing. Published 50+ papers in top-tier journals.",
    image: "https://maxm-imggenurl.web.val.run/professional woman AI researcher computer science deep learning futuristic",
    expertise: ["Deep Learning", "NLP", "Research"],
    avatar: "EW"
  },
  {
    name: "Alex Kim",
    role: "Head of Quantum Computing",
    bio: "MIT graduate with expertise in quantum algorithms and quantum machine learning. Former IBM Quantum researcher with breakthrough contributions.",
    image: "https://maxm-imggenurl.web.val.run/professional man quantum computing researcher MIT technology futuristic",
    expertise: ["Quantum Algorithms", "Quantum ML", "Research"],
    avatar: "AK"
  }
];

const companyValues = [
  {
    title: "Innovation First",
    description: "We push the boundaries of what&apos;s possible, constantly exploring new frontiers in technology and science.",
    icon: Rocket
  },
  {
    title: "Excellence in Execution",
    description: "We deliver world-class solutions that exceed expectations and drive real-world impact for our clients.",
    icon: Star
  },
  {
    title: "Collaborative Spirit",
    description: "We believe the best solutions come from diverse teams working together toward a common vision.",
    icon: Users
  },
  {
    title: "Ethical Technology",
    description: "We develop technology responsibly, ensuring our innovations benefit humanity and protect privacy.",
    icon: Shield
  }
];

const milestones = [
  { year: "2018", event: "Company Founded", description: "Started with a vision to revolutionize technology" },
  { year: "2019", event: "First AI Model", description: "Launched our breakthrough neural network platform" },
  { year: "2020", event: "Quantum Breakthrough", description: "Achieved quantum supremacy in specific algorithms" },
  { year: "2021", event: "Enterprise Launch", description: "Served our first Fortune 500 clients" },
  { year: "2022", event: "Global Expansion", description: "Opened offices in 15 countries worldwide" },
  { year: "2023", event: "AI Revolution", description: "Launched next-generation AI platform" },
  { year: "2024", event: "Future Vision", description: "Pioneering the next wave of technological innovation" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
              <Cpu className="w-4 h-4 mr-2" />
              About NexusTech
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Pioneering the
              <span className="block tech-gradient bg-clip-text text-transparent">
                Future of Technology
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded in 2018, NexusTech has been at the forefront of technological innovation, 
              developing cutting-edge solutions that are reshaping industries and transforming the way we live and work.
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
                  NexusTech was born from a simple yet ambitious vision: to create technology that doesn&apos;t just 
                  solve today&apos;s problems, but anticipates and shapes tomorrow&apos;s possibilities. Our founders, 
                  Dr. Sarah Chen and Marcus Rodriguez, met at a quantum computing conference in 2017.
                </p>
                <p>
                  What started as a research project in a small lab has grown into a global innovation hub, 
                  but our core mission remains unchanged: to push the boundaries of what&apos;s possible and 
                  create technology that truly serves humanity.
                </p>
                <p>
                  Today, we&apos;re proud to serve over 1 million users worldwide with a team of 500+ 
                  brilliant minds who share our passion for innovation and excellence.
                </p>
              </div>
              <Button className="tech-gradient hover:tech-glow text-primary-foreground border-0 font-semibold" asChild>
                <Link href="/solutions">
                  Explore Our Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://maxm-imggenurl.web.val.run/nexustech innovation hub technology company futuristic office building"
                alt="NexusTech Innovation Hub"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-primary/20"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Core
              <span className="block tech-gradient bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape the culture that drives our innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-xl bg-card/80 backdrop-blur-xl border border-primary/10">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
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
              <span className="block tech-gradient bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The brilliant minds behind our technological breakthroughs and company vision.
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
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Journey
              <span className="block tech-gradient bg-clip-text text-transparent">
                Through Innovation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our mission to revolutionize technology and shape the future.
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
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Quote className="w-16 h-16 text-primary/60 mx-auto mb-8" />
          <blockquote className="text-2xl text-muted-foreground italic mb-8 leading-relaxed">
            &ldquo;NexusTech isn&apos;t just a technology company—it&apos;s a force for positive change. 
            Their innovations have transformed our industry and opened up possibilities we never knew existed.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://maxm-imggenurl.web.val.run/professional man technology executive business leader testimonial" alt="Client testimonial" />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">JD</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="font-semibold text-foreground text-lg">John Davis</div>
              <div className="text-muted-foreground">CEO, TechCorp Global</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Join the Future of Technology
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Ready to be part of the next technological revolution? 
            Explore our solutions or join our team of innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="tech-gradient hover:tech-glow text-primary-foreground border-0 font-semibold" asChild>
              <Link href="/solutions">
                Explore Solutions
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10" asChild>
              <Link href="/careers">
                Join Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}