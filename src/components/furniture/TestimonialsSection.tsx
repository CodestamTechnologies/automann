import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Mitchell",
        role: "Interior Designer",
        location: "New York, NY",
        rating: 5,
        content: "The craftsmanship of ÉLÉGANCE furniture is simply unmatched. I've been specifying their pieces for my high-end clients for years, and the quality never disappoints. Each piece tells a story of excellence.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Architect",
        location: "Los Angeles, CA",
        rating: 5,
        content: "As an architect, I appreciate both form and function. ÉLÉGANCE delivers on both fronts. Their furniture not only looks stunning but is built to last generations. It's an investment in beauty and quality.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        role: "Homeowner",
        location: "Miami, FL",
        rating: 5,
        content: "I was hesitant about the investment, but after living with our ÉLÉGANCE dining table for two years, I can say it was worth every penny. The attention to detail and customer service exceeded all expectations.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Restaurant Owner",
        location: "Chicago, IL",
        rating: 5,
        content: "We outfitted our entire restaurant with ÉLÉGANCE furniture. The durability and elegance have impressed both our staff and customers. It's created the perfect atmosphere for fine dining.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        id: 5,
        name: "Jennifer Park",
        role: "Luxury Real Estate Agent",
        location: "San Francisco, CA",
        rating: 5,
        content: "I recommend ÉLÉGANCE to all my clients staging luxury homes. The furniture elevates any space and adds significant value to properties. Their pieces are conversation starters.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
        id: 6,
        name: "Robert Williams",
        role: "Hotel Manager",
        location: "Boston, MA",
        rating: 5,
        content: "Our hotel's lobby renovation with ÉLÉGANCE furniture has received countless compliments. The pieces are not only beautiful but incredibly durable for high-traffic areas. Exceptional quality.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                        Customer Stories
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground dark:text-background mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Discover why discerning customers choose ÉLÉGANCE for their most important spaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
                            <CardContent className="p-6">
                                <div className="mb-4">
                                    <Quote className="h-8 w-8 text-primary" />
                                </div>

                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-primary fill-current" />
                                    ))}
                                </div>

                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    &dblquote;{testimonial.content}&dblquote;
                                </p>

                                <div className="flex items-center space-x-3">
                                    <Avatar className="h-12 w-12">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold text-foreground">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonial.role}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {testimonial.location}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 bg-background rounded-2xl shadow-xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-foreground mb-2">4.9/5</div>
                            <div className="text-muted-foreground">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-foreground mb-2">10,000+</div>
                            <div className="text-muted-foreground">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-foreground mb-2">98%</div>
                            <div className="text-muted-foreground">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-foreground mb-2">25+</div>
                            <div className="text-muted-foreground">Years of Trust</div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-muted-foreground mb-8">
                        Trusted by leading designers, architects, and luxury brands worldwide
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        <div className="text-lg font-serif font-semibold text-muted-foreground">Architectural Digest</div>
                        <div className="text-lg font-serif font-semibold text-muted-foreground">Elle Decor</div>
                        <div className="text-lg font-serif font-semibold text-muted-foreground">House Beautiful</div>
                        <div className="text-lg font-serif font-semibold text-muted-foreground">Luxury Home</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
