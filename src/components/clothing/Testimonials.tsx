"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Fashion Blogger",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        rating: 5,
        content: "The quality of their clothing is exceptional! I love how each piece feels premium and fits perfectly. The customer service is outstanding too.",
        verified: true,
        purchase: "Summer Dress Collection"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Business Professional",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        rating: 5,
        content: "Found the perfect business casual shirts here. The fit is impeccable and the fabric quality is top-notch. Highly recommend for professionals.",
        verified: true,
        purchase: "Premium Cotton Shirts"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        role: "Student",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 4,
        content: "Great prices for such high-quality items! The accessories collection is amazing. I&apos;ve received so many compliments on my new jewelry.",
        verified: true,
        purchase: "Statement Jewelry Set"
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Fitness Enthusiast",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        rating: 5,
        content: "The sportswear collection is fantastic! Comfortable, stylish, and durable. Perfect for both gym sessions and casual outings.",
        verified: true,
        purchase: "Athletic Wear Bundle"
    },
    {
        id: 5,
        name: "Lisa Wang",
        role: "Interior Designer",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        rating: 5,
        content: "As someone who values aesthetics, I&apos;m impressed by their attention to detail. Every piece feels thoughtfully designed and crafted.",
        verified: true,
        purchase: "Designer Handbag"
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Tech Entrepreneur",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        rating: 4,
        content: "Fast shipping and excellent return policy. The website is easy to navigate and the product photos are accurate. Great shopping experience!",
        verified: true,
        purchase: "Casual Denim Jacket"
    }
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don&apos;t just take our word for it. Here&apos;s what our valued customers have to say about their shopping experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    {/* Header */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Avatar className="h-12 w-12">
                                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                                <AvatarFallback>{testimonial.name.split(&apos; &apos;).map(n => n[0]).join(&apos;&apos;)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                                                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        {testimonial.verified && (
                                            <Badge variant="secondary" className="text-xs">
                                                Verified
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < testimonial.rating
                                                        ? "fill-yellow-400 text-yellow-400"
                                                        : "fill-gray-200 text-gray-200"
                                                    }`}
                                            />
                                        ))}
                                        <span className="text-sm text-muted-foreground ml-2">
                                            {testimonial.rating}/5
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        "{testimonial.content}"
                                    </p>

                                    {/* Purchase Info */}
                                    <div className="pt-2 border-t">
                                        <p className="text-xs text-muted-foreground">
                                            Purchased: <span className="font-medium">{testimonial.purchase}</span>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                        <div className="text-sm text-muted-foreground">Happy Customers</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                        <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                        <div className="text-sm text-muted-foreground">Products Sold</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-sm text-muted-foreground">Customer Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
