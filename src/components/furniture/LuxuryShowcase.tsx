import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, ShoppingBag, Star, ArrowRight } from "lucide-react";

const featuredProducts = [
    {
        id: 1,
        name: "Aurora Velvet Sofa",
        category: "Living Room",
        price: "$4,200",
        originalPrice: "$5,600",
        rating: 4.9,
        reviews: 127,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        badge: "Limited Edition"
    },
    {
        id: 2,
        name: "Marble Dining Table",
        category: "Dining Room",
        price: "$6,800",
        originalPrice: "$8,500",
        rating: 4.8,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1617098907768-60b1c5c2c8b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        badge: "Bestseller"
    },
    {
        id: 3,
        name: "Canopy Bed Frame",
        category: "Bedroom",
        price: "$3,900",
        originalPrice: "$4,800",
        rating: 4.9,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        badge: "New Arrival"
    }
];

export default function LuxuryShowcase() {
    return (
        <section id="showroom" className="py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-foreground text-background border-0">
                        Showroom Highlights
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Signature Pieces
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Discover our most coveted designs, each piece tells a story of craftsmanship and timeless beauty.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {featuredProducts.map((product) => (
                        <Card key={product.id} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background">
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                                <Badge className="absolute top-4 left-4 bg-background/95 text-foreground border-0">
                                    {product.badge}
                                </Badge>

                                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button size="sm" variant="secondary" className="h-10 w-10 p-0 rounded-full">
                                        <Heart className="h-4 w-4" />
                                    </Button>
                                    <Button size="sm" variant="secondary" className="h-10 w-10 p-0 rounded-full">
                                        <ShoppingBag className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="absolute bottom-4 left-4 bg-background/95 rounded-lg px-3 py-2 flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-primary fill-current" />
                                    <span className="text-sm font-medium text-foreground">{product.rating}</span>
                                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <div className="mb-2">
                                    <span className="text-sm text-muted-foreground uppercase tracking-wide">
                                        {product.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                                    {product.name}
                                </h3>

                                <div className="flex items-center space-x-3 mb-4">
                                    <span className="text-2xl font-bold text-foreground">
                                        {product.price}
                                    </span>
                                    <span className="text-lg text-muted-foreground line-through">
                                        {product.originalPrice}
                                    </span>
                                </div>

                                <Link href={`/products/${product.id}`}>
                                    <Button className="w-full">
                                        Add to Cart
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="bg-background rounded-2xl shadow-xl p-8 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-foreground mb-2">25+</div>
                            <div className="text-muted-foreground">Years of Excellence</div>
                        </div>
                        <Separator orientation="vertical" className="hidden md:block" />
                        <div className="text-center">
                            <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
                            <div className="text-muted-foreground">Happy Customers</div>
                        </div>
                        <Separator orientation="vertical" className="hidden md:block" />
                        <div className="text-center">
                            <div className="text-3xl font-bold text-foreground mb-2">500+</div>
                            <div className="text-muted-foreground">Unique Designs</div>
                        </div>
                        <Separator orientation="vertical" className="hidden md:block" />
                        <div className="text-center">
                            <div className="text-3xl font-bold text-foreground mb-2">4.9</div>
                            <div className="text-muted-foreground">Average Rating</div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/showroom">
                        <Button size="lg">
                            Explore Full Collection
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
