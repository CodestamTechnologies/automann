import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Zap, BarChart3, ArrowRight, Star, Award, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing Services — GrowthLab Digital",
  description: "Explore our comprehensive digital marketing services including growth hacking, data analytics, conversion optimization, and digital marketing strategies at GrowthLab Digital.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const services = [
  {
    id: 1,
    title: "Growth Hacking",
    description: "Rapid experimentation across marketing channels to identify the most effective ways to grow your business exponentially.",
    category: "Growth Strategy",
    duration: "3-6 months",
    price: "From $5,000",
    image: "https://maxm-imggenurl.web.val.run/growth hacking digital marketing rapid experimentation business growth strategy",
    icon: TrendingUp,
    features: ["A/B Testing", "Funnel Optimization", "Viral Mechanics", "Growth Analytics"],
    status: "Available",
    experience: "5+ years"
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies across all channels to maximize your online presence and reach your target audience.",
    category: "Marketing",
    duration: "Ongoing",
    price: "From $3,000",
    image: "https://maxm-imggenurl.web.val.run/digital marketing strategy social media SEO PPC advertising comprehensive",
    icon: Target,
    features: ["SEO/SEM", "Social Media", "Content Marketing", "Email Campaigns"],
    status: "Available",
    experience: "8+ years"
  },
  {
    id: 3,
    title: "Data Analytics",
    description: "Advanced analytics and insights to make data-driven decisions and optimize your marketing performance for maximum ROI.",
    category: "Analytics",
    duration: "1-3 months",
    price: "From $2,500",
    image: "https://maxm-imggenurl.web.val.run/data analytics business intelligence marketing insights dashboard advanced",
    icon: BarChart3,
    features: ["Custom Dashboards", "Predictive Analytics", "ROI Tracking", "Performance Reports"],
    status: "Available",
    experience: "6+ years"
  },
  {
    id: 4,
    title: "Conversion Optimization",
    description: "Systematic approach to improving your website and marketing funnel to increase conversion rates and maximize revenue.",
    category: "Optimization",
    duration: "2-4 months",
    price: "From $4,000",
    image: "https://maxm-imggenurl.web.val.run/conversion optimization website optimization A/B testing funnel improvement systematic",
    icon: Zap,
    features: ["CRO Audits", "A/B Testing", "UX Optimization", "Landing Pages"],
    status: "Available",
    experience: "7+ years"
  },
  {
    id: 5,
    title: "Marketing Automation",
    description: "Streamline your marketing processes with advanced automation tools to nurture leads and drive conversions at scale.",
    category: "Automation",
    duration: "2-3 months",
    price: "From $3,500",
    image: "https://maxm-imggenurl.web.val.run/marketing automation lead nurturing email automation workflow optimization",
    icon: Users,
    features: ["Email Automation", "Lead Scoring", "Workflow Design", "CRM Integration"],
    status: "Available",
    experience: "5+ years"
  },
  {
    id: 6,
    title: "Brand Strategy",
    description: "Develop a compelling brand identity and strategy that resonates with your target audience and drives business growth.",
    category: "Branding",
    duration: "1-2 months",
    price: "From $2,000",
    image: "https://maxm-imggenurl.web.val.run/brand strategy brand identity brand positioning marketing strategy",
    icon: Award,
    features: ["Brand Positioning", "Visual Identity", "Messaging Strategy", "Brand Guidelines"],
    status: "Available",
    experience: "10+ years"
  }
];

export default function ServicesPage() {
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
              <Star className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Accelerate Your
              <span className="block dynamic-gradient bg-clip-text text-transparent">
                Business Growth
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our comprehensive suite of digital marketing services is designed to drive explosive growth 
              and maximize your return on investment through data-driven strategies and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/20 hover:border-primary/40 group">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 backdrop-blur-sm">
                      {service.status}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/90 text-foreground border-border/50 backdrop-blur-sm">
                      {service.category}
                    </Badge>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-secondary/30 rounded-xl">
                      <div className="text-lg font-bold text-primary">{service.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/30 rounded-xl">
                      <div className="text-lg font-bold text-primary">{service.price}</div>
                      <div className="text-xs text-muted-foreground">Starting Price</div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="text-center p-3 bg-accent/10 rounded-xl">
                    <div className="text-sm font-bold text-accent">{service.experience}</div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm">What&apos;s Included:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full dynamic-gradient hover:dynamic-glow text-primary-foreground border-0 group font-semibold rounded-xl" asChild>
                    <Link href={`/services/${service.id}`}>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 energy-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Let&apos;s discuss your business goals and create a customized growth strategy 
            that delivers exceptional results and maximizes your ROI.
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