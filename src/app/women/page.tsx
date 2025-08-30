import Navbar from "@/components/clothing/Navbar";
import Footer from "@/components/clothing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const womenProducts = [
    {
        id: 1,
        name: "Elegant Summer Dress",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        category: "Dresses",
        isNew: true,
        isSale: true
    },
    {
        id: 2,
        name: "Casual Denim Jacket",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Outerwear",
        isNew: false,
        isSale: true
    },
    {
        id: 3,
        name: "Silk Blouse",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1564257631407-3deb25e9c8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Tops",
        isNew: false,
        isSale: true
    },
    {
        id: 4,
        name: "High-Waist Jeans",
        price: 69.99,
        originalPrice: 89.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80",
        category: "Bottoms",
        isNew: true,
        isSale: false
    }
];

export default function WomenPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="py-16">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Women's Fashion</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover elegant dresses, stylish tops, trendy bottoms, and sophisticated outerwear designed for the modern woman.
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {["Dresses", "Tops", "Bottoms", "Outerwear"].map((category) => (
                            <Button key={category} variant="outline" asChild className="h-16">
                                <Link href={`/women/${category.toLowerCase()}`}>
                                    {category}
                                </Link>
                            </Button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {womenProducts.map((product) => (
                            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                                <CardHeader className="p-0 relative">
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />

                                        {/* Badges */}
                                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                                            {product.isNew && (
                                                <Badge variant="default" className="text-xs">
                                                    New
                                                </Badge>
                                            )}
                                            {product.isSale && (
                                                <Badge variant="destructive" className="text-xs">
                                                    Sale
                                                </Badge>
                                            )}
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute bottom-3 left-3">
                                            <Badge variant="secondary" className="text-xs">
                                                {product.category}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="p-4">
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
                                            {product.name}
                                        </h3>

                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-primary">
                                                ${product.price}
                                            </span>
                                            {product.isSale && (
                                                <span className="text-sm text-muted-foreground line-through">
                                                    ${product.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/products">
                                View All Women's Products
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
