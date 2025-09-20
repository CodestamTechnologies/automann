"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Camera, Brush, PenTool, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Fine Art Creation",
    description: "Original paintings and artistic masterpieces crafted with traditional techniques and contemporary vision.",
    category: "Fine Arts",
    duration: "2-4 weeks",
    price: "From $500",
    image: "https://maxm-imggenurl.web.val.run/fine art painting original artwork traditional techniques artistic masterpiece",
    icon: Palette,
    features: ["Oil Paintings", "Watercolors", "Mixed Media", "Custom Sizes"],
    status: "Available"
  },
  {
    id: 2,
    title: "Artistic Photography",
    description: "Professional photography services capturing moments with artistic flair and creative composition.",
    category: "Photography",
    duration: "1-2 weeks",
    price: "From $300",
    image: "https://maxm-imggenurl.web.val.run/artistic photography professional creative composition artistic shots",
    icon: Camera,
    features: ["Portrait Sessions", "Event Photography", "Artistic Shots", "Digital Editing"],
    status: "Available"
  },
  {
    id: 3,
    title: "Digital Design",
    description: "Modern digital artwork and graphic design solutions for contemporary visual communication.",
    category: "Digital Arts",
    duration: "1-3 weeks",
    price: "From $200",
    image: "https://maxm-imggenurl.web.val.run/digital design graphic artwork modern visual communication creative",
    icon: Brush,
    features: ["Logo Design", "Brand Identity", "Digital Illustrations", "Web Graphics"],
    status: "Available"
  },
  {
    id: 4,
    title: "Custom Commissions",
    description: "Bespoke artistic creations tailored to your specific vision and requirements.",
    category: "Commissions",
    duration: "3-6 weeks",
    price: "Custom Quote",
    image: "https://maxm-imggenurl.web.val.run/custom art commission bespoke artistic creation personalized artwork",
    icon: PenTool,
    features: ["Personalized Art", "Consultation", "Progress Updates", "Final Delivery"],
    status: "Available"
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 artistic-pattern opacity-30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2 rounded-full">
            <Star className="w-4 h-4 mr-2" />
            Creative Services
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Exceptional
            <span className="block elegant-gradient bg-clip-text text-transparent">
              Creative Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of artistic services designed to bring your creative vision 
            to life with unparalleled craftsmanship and attention to detail.
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
              <Card className="h-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/10 hover:border-primary/30">
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
                    <Badge className="bg-green-500/20 text-green-600 border-green-500/30 backdrop-blur-sm">
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
                  <Button className="w-full elegant-gradient hover:elegant-glow text-primary-foreground border-0 group font-semibold rounded-full" asChild>
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
          <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 group rounded-full" asChild>
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
