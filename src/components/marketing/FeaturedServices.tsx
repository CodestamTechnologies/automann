"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Zap, BarChart3, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Growth Hacking",
    description: "Rapid experimentation across marketing channels to identify the most effective ways to grow your business.",
    category: "Growth Strategy",
    duration: "3-6 months",
    price: "From $5,000",
    image: "https://maxm-imggenurl.web.val.run/growth hacking digital marketing rapid experimentation business growth",
    icon: TrendingUp,
    features: ["A/B Testing", "Funnel Optimization", "Viral Mechanics", "Growth Analytics"],
    status: "Available"
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies across all channels to maximize your online presence and reach.",
    category: "Marketing",
    duration: "Ongoing",
    price: "From $3,000",
    image: "https://maxm-imggenurl.web.val.run/digital marketing strategy social media SEO PPC advertising",
    icon: Target,
    features: ["SEO/SEM", "Social Media", "Content Marketing", "Email Campaigns"],
    status: "Available"
  },
  {
    id: 3,
    title: "Data Analytics",
    description: "Advanced analytics and insights to make data-driven decisions and optimize your marketing performance.",
    category: "Analytics",
    duration: "1-3 months",
    price: "From $2,500",
    image: "https://maxm-imggenurl.web.val.run/data analytics business intelligence marketing insights dashboard",
    icon: BarChart3,
    features: ["Custom Dashboards", "Predictive Analytics", "ROI Tracking", "Performance Reports"],
    status: "Available"
  },
  {
    id: 4,
    title: "Conversion Optimization",
    description: "Systematic approach to improving your website and marketing funnel to increase conversion rates.",
    category: "Optimization",
    duration: "2-4 months",
    price: "From $4,000",
    image: "https://maxm-imggenurl.web.val.run/conversion optimization website optimization A/B testing funnel improvement",
    icon: Zap,
    features: ["CRO Audits", "A/B Testing", "UX Optimization", "Landing Pages"],
    status: "Available"
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 energy-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 mr-2" />
            Our Services
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Accelerate Your
            <span className="block dynamic-gradient bg-clip-text text-transparent">
              Business Growth
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive suite of digital marketing services is designed to drive explosive growth 
            and maximize your return on investment through data-driven strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/20 hover:border-primary/40">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
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
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-secondary/30 rounded-xl">
                      <div className="text-lg font-bold text-primary">{service.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="text-center p-3 bg-secondary/30 rounded-xl">
                      <div className="text-lg font-bold text-primary">{service.price}</div>
                      <div className="text-xs text-muted-foreground">Starting Price</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">What&apos;s Included:</h4>
                    <div className="flex flex-wrap gap-2">
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
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 group rounded-xl" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
