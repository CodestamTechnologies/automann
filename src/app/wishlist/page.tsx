import Navbar from "@/components/clothing/Navbar";
import Footer from "@/components/clothing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const wishlistItems = [
    {
        id: 1,
        name: "Elegant Summer Dress",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        category: "Women",
        isNew: true,
        isSale: true
    },
    {
        id: 2,
        name: "Designer Handbag",
        price: 199.99,
        originalPrice: 299.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
        category: "Accessories",
        isNew: true,
        isSale: false
    },
    {
        id: 3,
        name: "Premium Cotton Shirt",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        category: "Men",
        isNew: false,
        isSale: true
    }
];

export default function WishlistPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="py-16">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="mb-8">
                        <Button variant="ghost" asChild className="mb-4">
                            <Link href="/">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Continue Shopping
                            </Link>
                        </Button>
                        <div className="flex items-center gap-2 mb-4">
                            <Heart className="h-6 w-6 text-primary" />
                            <h1 className="text-3xl font-bold">My Wishlist</h1>
                        </div>
                        <p className="text-muted-foreground">
                            Save your favorite items for later
                        </p>
                    </div>

                    {wishlistItems.length === 0 ? (
                        <div className="text-center py-16">
                            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                            <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
                            <p className="text-muted-foreground mb-8">
                                Start adding items to your wishlist by browsing our collection.
                            </p>
                            <Button asChild>
                                <Link href="/">Start Shopping</Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {wishlistItems.map((item) => (
                                <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                                    <CardHeader className="p-0 relative">
                                        <div className="relative aspect-[3/4] overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />

                                            {/* Badges */}
                                            <div className="absolute top-3 left-3 flex flex-col gap-2">
                                                {item.isNew && (
                                                    <Badge variant="default" className="text-xs">
                                                        New
                                                    </Badge>
                                                )}
                                                {item.isSale && (
                                                    <Badge variant="destructive" className="text-xs">
                                                        Sale
                                                    </Badge>
                                                )}
                                            </div>

                                            {/* Quick Actions */}
                                            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Button variant="secondary" size="icon" className="h-8 w-8">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>

                                            {/* Category Badge */}
                                            <div className="absolute bottom-3 left-3">
                                                <Badge variant="secondary" className="text-xs">
                                                    {item.category}
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="p-4">
                                        <div className="space-y-3">
                                            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
                                                {item.name}
                                            </h3>

                                            <div className="flex items-center gap-2">
                                                <span className="text-lg font-bold text-primary">
                                                    ${item.price}
                                                </span>
                                                {item.isSale && (
                                                    <span className="text-sm text-muted-foreground line-through">
                                                        ${item.originalPrice}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="flex gap-2">
                                                <Button className="flex-1" size="sm">
                                                    <ShoppingCart className="mr-2 h-4 w-4" />
                                                    Add to Cart
                                                </Button>
                                                <Button variant="outline" size="sm">
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}

                    {/* Empty State for when items are removed */}
                    {wishlistItems.length > 0 && (
                        <div className="mt-12 text-center">
                            <Button variant="outline" asChild>
                                <Link href="/">
                                    Continue Shopping
                                </Link>
                            </Button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
