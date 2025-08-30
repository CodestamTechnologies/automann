import LuxuryNavbar from "@/components/furniture/LuxuryNavbar";
import LuxuryFooter from "@/components/furniture/LuxuryFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Filter, Grid, List, Star, Heart, ShoppingBag } from "lucide-react";

const collections = [
    {
        id: 1,
        name: "Living Room Elegance",
        description: "Sophisticated seating and entertainment pieces for the heart of your home",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: "From $2,500",
        rating: 4.9,
        items: 45,
        badge: "Bestseller",
        category: "Living Room"
    },
    {
        id: 2,
        name: "Dining Excellence",
        description: "Timeless tables and chairs for memorable gatherings",
        image: "https://images.unsplash.com/photo-1617098907768-60b1c5c2c8b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: "From $3,200",
        rating: 4.8,
        items: 32,
        badge: "New",
        category: "Dining Room"
    },
    {
        id: 3,
        name: "Bedroom Sanctuary",
        description: "Luxurious beds and storage solutions for peaceful rest",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: "From $1,800",
        rating: 4.9,
        items: 38,
        badge: "Popular",
        category: "Bedroom"
    },
    {
        id: 4,
        name: "Office Sophistication",
        description: "Professional workspaces with style and functionality",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        price: "From $2,100",
        rating: 4.7,
        items: 28,
        badge: "Limited",
        category: "Office"
    },
    {
        id: 5,
        name: "Accent Pieces",
        description: "Side tables, lamps, and decorative items to complete your space",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: "From $800",
        rating: 4.8,
        items: 52,
        badge: "Trending",
        category: "Accent"
    },
    {
        id: 6,
        name: "Outdoor Living",
        description: "Garden furniture and patio sets for outdoor elegance",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: "From $1,500",
        rating: 4.6,
        items: 24,
        badge: "Seasonal",
        category: "Outdoor"
    }
];

const categories = [
    "All Collections",
    "Living Room",
    "Dining Room",
    "Bedroom",
    "Office",
    "Accent Pieces",
    "Outdoor"
];

export default function CollectionsPage() {
    return (
        <div className="min-h-screen bg-background">
            <LuxuryNavbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                            Our Collections
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                            Curated Collections
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Discover our carefully curated furniture collections, each designed to create harmonious living spaces that reflect your unique taste and lifestyle.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters and Controls */}
            <section className="py-8 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={category === "All Collections" ? "default" : "outline"}
                                    size="sm"
                                    className="text-sm"
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>

                        {/* View Controls */}
                        <div className="flex items-center space-x-4">
                            <Button variant="outline" size="sm">
                                <Filter className="h-4 w-4 mr-2" />
                                Filter
                            </Button>
                            <div className="flex border border-border rounded-md">
                                <Button variant="ghost" size="sm" className="rounded-r-none">
                                    <Grid className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="rounded-l-none">
                                    <List className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collections Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {collections.map((collection) => (
                            <Card key={collection.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={collection.image}
                                        alt={collection.name}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Badge */}
                                    <Badge className="absolute top-4 left-4 bg-background/95 text-foreground border-0">
                                        {collection.badge}
                                    </Badge>

                                    {/* Action Buttons */}
                                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full">
                                            <Heart className="h-3 w-3" />
                                        </Button>
                                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full">
                                            <ShoppingBag className="h-3 w-3" />
                                        </Button>
                                    </div>

                                    {/* Rating */}
                                    <div className="absolute bottom-4 left-4 bg-background/95 rounded-lg px-3 py-2 flex items-center space-x-2">
                                        <Star className="h-4 w-4 text-primary fill-current" />
                                        <span className="text-sm font-medium text-foreground">{collection.rating}</span>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="mb-2">
                                        <span className="text-sm text-muted-foreground uppercase tracking-wide">
                                            {collection.category}
                                        </span>
                                    </div>

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

                                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        Explore Collection
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                        Need Help Choosing?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Our design experts are here to help you find the perfect furniture for your space.
                        Book a free consultation and let us guide you through the selection process.
                    </p>
                    <Button size="lg">
                        Book Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </section>

            <LuxuryFooter />
        </div>
    );
}
