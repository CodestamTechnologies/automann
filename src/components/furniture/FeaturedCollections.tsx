import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

const collections = [
    {
        id: 1,
        name: "Living Room Elegance",
        description: "Sophisticated seating and entertainment pieces",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: "From $2,500",
        rating: 4.9,
        items: 24,
        badge: "Bestseller"
    },
    {
        id: 2,
        name: "Dining Excellence",
        description: "Timeless tables and chairs for memorable gatherings",
        image: "https://images.unsplash.com/photo-1617098907768-60b1c5c2c8b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: "From $3,200",
        rating: 4.8,
        items: 18,
        badge: "New"
    },
    {
        id: 3,
        name: "Bedroom Sanctuary",
        description: "Luxurious beds and storage solutions",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: "From $1,800",
        rating: 4.9,
        items: 32,
        badge: "Popular"
    },
    {
        id: 4,
        name: "Office Sophistication",
        description: "Professional workspaces with style",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        price: "From $2,100",
        rating: 4.7,
        items: 15,
        badge: "Limited"
    }
];

export default function FeaturedCollections() {
    return (
        <section id="collections" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                        Featured Collections
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Curated for Your Lifestyle
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Each collection is thoughtfully designed to create harmonious living spaces that reflect your unique taste and lifestyle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {collections.map((collection) => (
                        <Card key={collection.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                            <div className="relative overflow-hidden">
                                <img
                                    src={collection.image}
                                    alt={collection.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                <Badge className="absolute top-4 left-4 bg-background/95 text-foreground border-0">
                                    {collection.badge}
                                </Badge>

                                <div className="absolute top-4 right-4 bg-background/90 rounded-full px-2 py-1 flex items-center space-x-1">
                                    <Star className="h-3 w-3 text-primary fill-current" />
                                    <span className="text-xs font-medium text-foreground">{collection.rating}</span>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                                    {collection.name}
                                </h3>
                                <p className="text-muted-foreground mb-4 text-sm">
                                    {collection.description}
                                </p>

                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-lg font-semibold text-foreground">
                                        {collection.price}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        {collection.items} items
                                    </span>
                                </div>

                                <Link href={`/collections/${collection.id}`}>
                                    <Button className="w-full">
                                        Explore Collection
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/collections">
                        <Button size="lg" variant="outline">
                            View All Collections
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
