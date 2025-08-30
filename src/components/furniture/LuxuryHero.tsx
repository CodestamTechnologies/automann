import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Award } from "lucide-react";

export default function LuxuryHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Luxury Living Room"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <Badge className="mb-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                        <Award className="h-3 w-3 mr-2" />
                        Award-Winning Design Since 1995
                    </Badge>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                        Timeless Elegance
                        <br />
                        <span className="text-primary">Crafted for Life</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Discover bespoke furniture that transforms your space into a sanctuary of sophistication and comfort.
                    </p>

                    <div className="flex justify-center items-center space-x-8 mb-12 text-sm">
                        <div className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-primary fill-current" />
                            <span>4.9/5 Rating</span>
                        </div>
                        <div className="w-px h-4 bg-white/30" />
                        <div>10,000+ Happy Clients</div>
                        <div className="w-px h-4 bg-white/30" />
                        <div>25+ Years Experience</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/collections">
                            <Button size="lg">
                                Explore Collections
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="text-foreground">
                            Book Consultation
                        </Button>
                    </div>
                </div>
            </div>

            <div className="absolute top-20 right-20 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-white text-sm">
                        <div className="font-semibold">Latest Collection</div>
                        <div className="text-white/70">Spring 2024</div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-20 left-20 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-white text-sm">
                        <div className="font-semibold">Free Shipping</div>
                        <div className="text-white/70">On orders over $5,000</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
