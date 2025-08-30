import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sofa, Utensils, Bed, Briefcase, Armchair, BookOpen } from "lucide-react";

const categories = [
    {
        id: 1,
        name: "Living Room",
        description: "Sofas, chairs, and entertainment units",
        icon: Sofa,
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        items: 45,
        badge: "Popular"
    },
    {
        id: 2,
        name: "Dining Room",
        description: "Tables, chairs, and storage solutions",
        icon: Utensils,
        image: "https://images.unsplash.com/photo-1617098907768-60b1c5c2c8b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        items: 32,
        badge: "New"
    },
    {
        id: 3,
        name: "Bedroom",
        description: "Beds, wardrobes, and bedside tables",
        icon: Bed,
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        items: 38,
        badge: "Bestseller"
    },
    {
        id: 4,
        name: "Office",
        description: "Desks, chairs, and storage units",
        icon: Briefcase,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        items: 28,
        badge: "Limited"
    },
    {
        id: 5,
        name: "Accent Pieces",
        description: "Side tables, lamps, and decorative items",
        icon: Armchair,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        items: 52,
        badge: "Trending"
    },
    {
        id: 6,
        name: "Outdoor",
        description: "Garden furniture and patio sets",
        icon: BookOpen,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        items: 24,
        badge: "Seasonal"
    }
];

export default function ProductCategories() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-muted text-muted-foreground border-border">
                        Shop by Category
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Find Your Perfect Piece
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Explore our carefully curated categories, each designed to help you create the perfect living space.
                    </p>
                </div>

                

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Card key={category.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative">
                            <div className="relative overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                <Badge className="absolute top-4 left-4 bg-background/95 text-foreground border-0">
                                    {category.badge}
                                </Badge>

                                <div className="absolute top-4 right-4 bg-background/95 rounded-full p-3">
                                    <category.icon className="h-4 w-4 text-foreground" />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-2xl font-serif font-semibold mb-2">
                                        {category.name}
                                    </h3>
                                    <p className="text-white/90 text-sm mb-4">
                                        {category.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-white/80">
                                            {category.items} items
                                        </span>
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Link href={`/collections/${category.name.toLowerCase().replace(' ', '-')}`}>
                                    <Button variant="secondary">
                                        Explore {category.name}
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-muted to-muted/50 rounded-2xl p-8">
                        <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                            Need Help Choosing?
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            Our design experts are here to help you find the perfect furniture for your space.
                            Book a free consultation and let us guide you through the selection process.
                        </p>
                        <Button size="lg">
                            Book Free Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
