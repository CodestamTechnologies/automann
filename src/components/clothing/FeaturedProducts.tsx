"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";

const featuredProducts = [
    {
        id: 1,
        name: "Elegant Summer Dress",
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.8,
        reviews: 124,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        category: "Women",
        isNew: true,
        isSale: true,
        colors: ["Black", "White", "Blue"]
    },
    {
        id: 2,
        name: "Premium Cotton Shirt",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        category: "Men",
        isNew: false,
        isSale: true,
        colors: ["White", "Blue", "Pink"]
    },
    {
        id: 3,
        name: "Designer Handbag",
        price: 199.99,
        originalPrice: 299.99,
        rating: 4.9,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
        category: "Accessories",
        isNew: true,
        isSale: false,
        colors: ["Brown", "Black", "Tan"]
    },
    {
        id: 4,
        name: "Casual Denim Jacket",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.7,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Women",
        isNew: false,
        isSale: true,
        colors: ["Blue", "Black", "White"]
    },
    {
        id: 5,
        name: "Slim Fit Chinos",
        price: 69.99,
        originalPrice: 89.99,
        rating: 4.5,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Men",
        isNew: false,
        isSale: true,
        colors: ["Khaki", "Navy", "Olive"]
    },
    {
        id: 6,
        name: "Statement Necklace",
        price: 45.99,
        originalPrice: 65.99,
        rating: 4.4,
        reviews: 78,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Accessories",
        isNew: true,
        isSale: false,
        colors: ["Gold", "Silver", "Rose Gold"]
    },
    {
        id: 7,
        name: "Silk Blouse",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.8,
        reviews: 92,
        image: "https://images.unsplash.com/photo-1564257631407-3deb25e9c8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Women",
        isNew: false,
        isSale: true,
        colors: ["Cream", "Black", "Navy"]
    },
    {
        id: 8,
        name: "Leather Wallet",
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.6,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Accessories",
        isNew: false,
        isSale: true,
        colors: ["Brown", "Black", "Tan"]
    }
];

export default function FeaturedProducts() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Discover our handpicked selection of premium fashion items, carefully curated for style-conscious individuals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
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

                                    {/* Quick Actions */}
                                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Button variant="secondary" size="icon" className="h-8 w-8">
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                        <Button variant="secondary" size="icon" className="h-8 w-8">
                                            <ShoppingCart className="h-4 w-4" />
                                        </Button>
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
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-sm font-medium ml-1">{product.rating}</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                            ({product.reviews} reviews)
                                        </span>
                                    </div>

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

                                    <div className="flex flex-wrap gap-1">
                                        {product.colors.slice(0, 3).map((color, index) => (
                                            <div
                                                key={index}
                                                className="w-4 h-4 rounded-full border-2 border-border"
                                                style={{
                                                    backgroundColor: color.toLowerCase(),
                                                }}
                                                title={color}
                                            />
                                        ))}
                                        {product.colors.length > 3 && (
                                            <span className="text-xs text-muted-foreground">
                                                +{product.colors.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="p-4 pt-0">
                                <Button className="w-full" asChild>
                                    <Link href={`/product/${product.id}`}>
                                        View Details
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/products">
                            View All Products
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
