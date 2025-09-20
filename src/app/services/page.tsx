import type { Metadata } from "next";
import Navbar from "@/components/arts/Navbar";
import Footer from "@/components/arts/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Palette, Camera, Brush, PenTool, ArrowRight, Star, Award, Heart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative Services — Artisan Creative Studio",
  description: "Explore our comprehensive range of artistic services including fine art, photography, digital design, and custom commissions at Artisan Creative Studio.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

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
    status: "Available",
    experience: "15+ years"
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
    status: "Available",
    experience: "10+ years"
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
    status: "Available",
    experience: "8+ years"
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
    status: "Available",
    experience: "12+ years"
  },
  {
    id: 5,
    title: "Art Restoration",
    description: "Professional restoration services to preserve and enhance the beauty of existing artworks.",
    category: "Restoration",
    duration: "4-8 weeks",
    price: "From $800",
    image: "https://maxm-imggenurl.web.val.run/art restoration professional conservation artwork preservation",
    icon: Award,
    features: ["Damage Repair", "Color Restoration", "Surface Cleaning", "Protective Coating"],
    status: "Available",
    experience: "20+ years"
  },
  {
    id: 6,
    title: "Art Consultation",
    description: "Expert guidance on art selection, collection building, and artistic investment strategies.",
    category: "Consultation",
    duration: "1-2 hours",
    price: "From $150",
    image: "https://maxm-imggenurl.web.val.run/art consultation expert guidance collection building artistic investment",
    icon: Heart,
    features: ["Collection Building", "Art Investment", "Market Analysis", "Personal Guidance"],
    status: "Available",
    experience: "18+ years"
  }
];

export default function ServicesPage() {
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
              <Star className="w-4 h-4 mr-2" />
              Creative Services
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Exceptional
              <span className="block elegant-gradient bg-clip-text text-transparent">
                Creative Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of artistic services designed to bring your creative vision 
              to life with unparalleled craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-card/80 backdrop-blur-xl border border-primary/10 hover:border-primary/30 group">
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
                  <Button className="w-full elegant-gradient hover:elegant-glow text-primary-foreground border-0 group font-semibold rounded-full" asChild>
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
        <div className="absolute inset-0 artistic-pattern opacity-20" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Creative Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Let&apos;s discuss your artistic vision and create something truly extraordinary together. 
            Our team of experienced artists is ready to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="elegant-gradient hover:elegant-glow text-primary-foreground border-0 font-semibold rounded-full" asChild>
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 rounded-full" asChild>
              <Link href="/gallery">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
