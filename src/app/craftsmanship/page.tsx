import LuxuryNavbar from "@/components/furniture/LuxuryNavbar";
import LuxuryFooter from "@/components/furniture/LuxuryFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Award, Users, Clock, Shield, Hammer, Ruler, Palette, Zap } from "lucide-react";

const craftsmanshipProcess = [
    {
        step: 1,
        title: "Design & Planning",
        description: "Every piece begins with meticulous design sketches and detailed planning, ensuring every element is perfectly considered.",
        icon: Ruler,
        duration: "1-2 weeks"
    },
    {
        step: 2,
        title: "Material Selection",
        description: "We carefully select premium, sustainably sourced materials, hand-picked for their quality, grain patterns, and durability.",
        icon: Palette,
        duration: "1 week"
    },
    {
        step: 3,
        title: "Traditional Joinery",
        description: "Using centuries-old joinery techniques, our master craftsmen create connections that will last for generations.",
        icon: Hammer,
        duration: "2-3 weeks"
    },
    {
        step: 4,
        title: "Hand Finishing",
        description: "Each piece receives individual attention with hand-applied finishes that enhance the natural beauty of the wood.",
        icon: Zap,
        duration: "1-2 weeks"
    }
];

const craftsmen = [
    {
        name: "Michael Rodriguez",
        role: "Master Craftsman",
        experience: "25+ years",
        specialty: "Traditional Joinery",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        quote: "Every piece tells a story. I pour my heart into every joint, every curve, knowing this furniture will become part of someone's home for generations."
    },
    {
        name: "Sarah Chen",
        role: "Senior Designer",
        experience: "18+ years",
        specialty: "Contemporary Design",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        quote: "Design is not just about aesthetics—it's about creating pieces that enhance daily life while standing the test of time."
    },
    {
        name: "David Thompson",
        role: "Finishing Specialist",
        experience: "22+ years",
        specialty: "Hand Finishing",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        quote: "The finish is what brings the wood to life. It's the final touch that reveals the true character of each piece."
    }
];

const materials = [
    {
        name: "Solid Hardwoods",
        description: "Premium oak, walnut, cherry, and maple sourced from sustainable forests",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        name: "Premium Fabrics",
        description: "Luxury textiles from the world's finest mills, selected for durability and beauty",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        name: "Hand-Forged Hardware",
        description: "Custom metalwork and hardware crafted by skilled artisans",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
];

export default function CraftsmanshipPage() {
    return (
        <div className="min-h-screen bg-background">
            <LuxuryNavbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                            Our Craftsmanship
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                            Where Art Meets Function
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Every piece of furniture we create is a testament to our commitment to excellence, blending traditional craftsmanship with contemporary design.
                        </p>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                            Our Crafting Process
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            From concept to completion, each piece undergoes a meticulous process that ensures quality and beauty
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {craftsmanshipProcess.map((process) => (
                            <Card key={process.step} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                                <CardContent className="p-6 text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                        <process.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="text-sm text-muted-foreground mb-2">Step {process.step}</div>
                                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                                        {process.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                        {process.description}
                                    </p>
                                    <Badge variant="outline" className="text-xs">
                                        {process.duration}
                                    </Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials Section */}
            <section className="py-16 bg-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                            Premium Materials
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            We use only the finest materials, carefully selected for their quality, beauty, and sustainability
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {materials.map((material, index) => (
                            <Card key={index} className="overflow-hidden border-0 shadow-lg">
                                <div className="relative h-48">
                                    <img
                                        src={material.image}
                                        alt={material.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                                        {material.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {material.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Craftsmen Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                            Meet Our Craftsmen
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Our team of master craftsmen brings decades of experience and passion to every piece
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {craftsmen.map((craftsman, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                                <div className="relative h-64">
                                    <img
                                        src={craftsman.image}
                                        alt={craftsman.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-serif font-semibold text-foreground mb-1">
                                        {craftsman.name}
                                    </h3>
                                    <p className="text-primary font-medium mb-1">{craftsman.role}</p>
                                    <p className="text-muted-foreground text-sm mb-2">{craftsman.experience} • {craftsman.specialty}</p>
                                    <Separator className="my-4" />
                                    <blockquote className="text-muted-foreground text-sm italic">
                                        "{craftsman.quote}"
                                    </blockquote>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-foreground mb-2">25+</div>
                            <div className="text-muted-foreground">Years of Excellence</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-foreground mb-2">15</div>
                            <div className="text-muted-foreground">Master Craftsmen</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                            <div className="text-muted-foreground">Pieces Created</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-foreground mb-2">98%</div>
                            <div className="text-muted-foreground">Customer Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                        Experience Our Craftsmanship
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Visit our showroom to see our craftsmanship in person, or schedule a consultation to discuss your custom furniture needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg">
                            Visit Showroom
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Custom Consultation
                        </Button>
                    </div>
                </div>
            </section>

            <LuxuryFooter />
        </div>
    );
}
