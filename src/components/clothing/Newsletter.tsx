"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Gift, TrendingUp, Shield } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the email to your backend
        console.log("Subscribing email:", email);
        setIsSubscribed(true);
        setEmail("");
    };

    const benefits = [
        {
            icon: Gift,
            title: "Exclusive Offers",
            description: "Get early access to sales and special promotions"
        },
        {
            icon: TrendingUp,
            title: "New Arrivals",
            description: "Be the first to know about latest fashion trends"
        },
        {
            icon: Shield,
            title: "Secure & Private",
            description: "Your information is protected and never shared"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Card className="overflow-hidden">
                        <CardContent className="p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                {/* Content */}
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <Badge variant="secondary" className="w-fit">
                                            <Mail className="h-3 w-3 mr-1" />
                                            Newsletter
                                        </Badge>

                                        <h2 className="text-3xl md:text-4xl font-bold">
                                            Stay in the Loop
                                        </h2>

                                        <p className="text-muted-foreground text-lg">
                                            Subscribe to our newsletter and never miss out on the latest fashion trends, exclusive offers, and new arrivals.
                                        </p>
                                    </div>

                                    {/* Benefits */}
                                    <div className="space-y-4">
                                        {benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                                    <benefit.icon className="h-4 w-4 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm">{benefit.title}</h4>
                                                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="space-y-6">
                                    {!isSubscribed ? (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">
                                                    Email Address
                                                </label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    className="h-12"
                                                />
                                            </div>

                                            <Button type="submit" className="w-full h-12" size="lg">
                                                Subscribe Now
                                            </Button>

                                            <p className="text-xs text-muted-foreground text-center">
                                                By subscribing, you agree to our{" "}
                                                <a href="/privacy" className="text-primary hover:underline">
                                                    Privacy Policy
                                                </a>{" "}
                                                and{" "}
                                                <a href="/terms" className="text-primary hover:underline">
                                                    Terms of Service
                                                </a>
                                            </p>
                                        </form>
                                    ) : (
                                        <div className="text-center space-y-4">
                                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                                <Mail className="h-8 w-8 text-green-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-green-600 mb-2">
                                                    Successfully Subscribed!
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    Thank you for subscribing. You'll receive our next newsletter soon.
                                                </p>
                                            </div>
                                            <Button
                                                variant="outline"
                                                onClick={() => setIsSubscribed(false)}
                                                className="mt-4"
                                            >
                                                Subscribe Another Email
                                            </Button>
                                        </div>
                                    )}

                                    {/* Social Proof */}
                                    <div className="text-center space-y-2">
                                        <p className="text-sm text-muted-foreground">
                                            Join <span className="font-semibold text-primary">10,000+</span> fashion enthusiasts
                                        </p>
                                        <div className="flex justify-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="w-2 h-2 bg-primary/20 rounded-full"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
