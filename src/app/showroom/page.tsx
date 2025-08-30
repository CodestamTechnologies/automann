import LuxuryNavbar from "@/components/furniture/LuxuryNavbar";
import LuxuryFooter from "@/components/furniture/LuxuryFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Star, Heart, ShoppingBag, MapPin, Clock, Phone } from "lucide-react";

const showroomProducts = [
    {
        id: 1,
        name: "Aurora Velvet Sofa",
        category: "Living Room",
        price: "$4,200",
        originalPrice: "$5,600",
        rating: 4.9,
        reviews: 127,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        badge: "Limited Edition",
        description: "Handcrafted velvet sofa with premium comfort and timeless design"
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
        badge: "Bestseller",
        description: "Elegant marble dining table perfect for sophisticated gatherings"
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
        badge: "New Arrival",
        description: "Luxurious canopy bed frame with premium materials and craftsmanship"
    },
    {
        id: 4,
        name: "Executive Desk",
        category: "Office",
        price: "$2,800",
        originalPrice: "$3,500",
        rating: 4.7,
        reviews: 94,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        badge: "Popular",
        description: "Professional executive desk with integrated storage solutions"
    },
    {
        id: 5,
        name: "Accent Armchair",
        category: "Accent",
        price: "$1,200",
        originalPrice: "$1,600",
        rating: 4.8,
        reviews: 73,
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        badge: "Trending",
        description: "Stylish accent armchair perfect for any room"
    },
    {
        id: 6,
        name: "Outdoor Lounge Set",
        category: "Outdoor",
        price: "$3,500",
        originalPrice: "$4,200",
        rating: 4.6,
        reviews: 45,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        badge: "Seasonal",
        description: "Weather-resistant outdoor lounge set for elegant outdoor living"
    }
];

const showroomInfo = {
    address: "123 Luxury Avenue, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Fri: 10AM-7PM, Sat: 10AM-6PM, Sun: 12PM-5PM",
    features: [
        "Private Consultation Rooms",
        "Design Studio",
        "Custom Fabric Selection",
        "3D Room Visualization",
        "White Glove Delivery",
        "Installation Services"
    ]
};

export default function ShowroomPage() {
    return (
        <div className="min-h-screen bg-background">
            <LuxuryNavbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                            Visit Our Showroom
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                            Experience Luxury
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Step into our showroom and experience the craftsmanship, quality, and elegance of our furniture collections in person.
                        </p>
                    </div>
                </div>
            </section>

            {/* Showroom Info */}
            <section className="py-16 bg-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Showroom Details */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                                    Our Showroom
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Our flagship showroom in New York City offers an immersive experience where you can touch, feel, and experience our furniture firsthand. Our expert design consultants are here to guide you through every step of your journey.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span className="text-foreground">{showroomInfo.address}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <span className="text-foreground">{showroomInfo.phone}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Clock className="h-5 w-5 text-primary" />
                                    <span className="text-foreground">{showroomInfo.hours}</span>
                                </div>
                            </div>

                            <Button size="lg">
                                Schedule Appointment
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {showroomInfo.features.map((feature, index) => (
                                <div key={index} className="bg-background p-4 rounded-lg border border-border">
                                    <h3 className="font-semibold text-foreground mb-2">{feature}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                            Showroom Highlights
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Discover our most coveted pieces, available for viewing in our showroom
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {showroomProducts.map((product) => (
                            <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                                    {/* Badge */}
                                    <Badge className="absolute top-4 left-4 bg-background/95 text-foreground border-0">
                                        {product.badge}
                                    </Badge>

                                    {/* Action Buttons */}
                                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Button size="sm" variant="secondary" className="h-10 w-10 p-0 rounded-full">
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="secondary" className="h-10 w-10 p-0 rounded-full">
                                            <ShoppingBag className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    {/* Rating */}
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

                                    <p className="text-muted-foreground text-sm mb-4">
                                        {product.description}
                                    </p>

                                    <div className="flex items-center space-x-3 mb-4">
                                        <span className="text-2xl font-bold text-foreground">
                                            {product.price}
                                        </span>
                                        <span className="text-lg text-muted-foreground line-through">
                                            {product.originalPrice}
                                        </span>
                                    </div>

                                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        View in Showroom
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
                        Ready to Experience Luxury?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Book a private consultation at our showroom and let our experts help you create the perfect space with our luxury furniture collections.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg">
                            Book Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Get Directions
                        </Button>
                    </div>
                </div>
            </section>

            <LuxuryFooter />
        </div>
    );
}
