import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Award, Users, Clock, Shield, ArrowRight } from "lucide-react";

const craftsmanshipFeatures = [
    {
        icon: Award,
        title: "Artisan Crafted",
        description: "Each piece is handcrafted by master artisans with decades of experience in traditional woodworking techniques.",
        stats: "25+ Years"
    },
    {
        icon: Users,
        title: "Family Legacy",
        description: "Passed down through generations, our techniques combine time-honored traditions with modern innovation.",
        stats: "3 Generations"
    },
    {
        icon: Clock,
        title: "Time-Honored Process",
        description: "From selection of premium materials to final finishing, every step is carefully executed with precision.",
        stats: "8-12 Weeks"
    },
    {
        icon: Shield,
        title: "Lifetime Warranty",
        description: "We stand behind our craftsmanship with a comprehensive warranty that covers structural integrity for life.",
        stats: "100% Guaranteed"
    }
];

export default function CraftsmanshipSection() {
    return (
        <section id="craftsmanship" className="py-24 bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-primary text-primary-foreground border-0">
                        Our Craftsmanship
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Where Art Meets Function
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Every piece of furniture we create is a testament to our commitment to excellence, blending traditional craftsmanship with contemporary design.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Craftsmanship Process"
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                        </div>

                        <div className="absolute -bottom-6 -right-6 bg-background rounded-xl p-6 shadow-2xl">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-foreground">98%</div>
                                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-serif font-semibold mb-4">
                                The Art of Furniture Making
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Our journey begins with the careful selection of premium materials - sustainably sourced hardwoods,
                                hand-selected for their grain patterns and durability. Each piece is then crafted using traditional
                                joinery techniques that have been perfected over centuries.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                From the initial design sketches to the final hand-applied finish, every step in our process is
                                executed with meticulous attention to detail, ensuring that each piece not only meets but exceeds
                                the highest standards of quality and beauty.
                            </p>
                        </div>

                        <Separator className="bg-muted" />

                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                                <div className="text-sm text-muted-foreground">Pieces Created</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary mb-2">15</div>
                                <div className="text-sm text-muted-foreground">Master Craftsmen</div>
                            </div>
                        </div>

                        <Button>
                            Learn Our Process
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {craftsmanshipFeatures.map((feature, index) => (
                        <Card key={index} className="border-0 bg-muted/50 backdrop-blur-sm">
                            <CardContent className="p-6 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-xl font-serif font-semibold mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-muted text-sm mb-4 leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="text-primary font-semibold text-sm">
                                    {feature.stats}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
