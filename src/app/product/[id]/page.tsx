import Navbar from "@/components/clothing/Navbar";
import Footer from "@/components/clothing/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import Link from "next/link";

// Mock product data - in a real app this would come from an API
const getProductById = (id: string) => {
    const products = [
        {
            id: "1",
            name: "Elegant Summer Dress",
            price: 89.99,
            originalPrice: 129.99,
            rating: 4.8,
            reviews: 124,
            description: "A beautiful summer dress perfect for any occasion. Made from premium cotton blend with a flattering fit that suits all body types.",
            details: [
                "Premium cotton blend fabric",
                "Flattering A-line silhouette",
                "Adjustable straps",
                "Side pockets",
                "Machine washable"
            ],
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Black", "White", "Blue", "Pink"],
            images: [
                "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
                "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
                "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
            ],
            category: "Women",
            isNew: true,
            isSale: true,
            inStock: true
        },
        {
            id: "2",
            name: "Premium Cotton Shirt",
            price: 59.99,
            originalPrice: 79.99,
            rating: 4.6,
            reviews: 89,
            description: "A classic cotton shirt that combines comfort with style. Perfect for both casual and formal occasions.",
            details: [
                "100% premium cotton",
                "Classic fit",
                "Button-down collar",
                "Chest pocket",
                "Easy care fabric"
            ],
            sizes: ["S", "M", "L", "XL", "XXL"],
            colors: ["White", "Blue", "Pink", "Black"],
            images: [
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            ],
            category: "Men",
            isNew: false,
            isSale: true,
            inStock: true
        }
    ];

    return products.find(p => p.id === id);
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        return (
            <div className="min-h-screen bg-background">
                <Navbar />
                <main className="py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                        <p className="text-muted-foreground mb-8">The product you&apos;re looking for doesn&apos;t exist.</p>
                        <Button asChild>
                            <Link href="/">Back to Home</Link>
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="py-16">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary">Home</Link></li>
                            <li>/</li>
                            <li><Link href={`/${product.category.toLowerCase()}`} className="hover:text-primary">{product.category}</Link></li>
                            <li>/</li>
                            <li className="text-foreground">{product.name}</li>
                        </ol>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square overflow-hidden rounded-lg">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {product.images.slice(1).map((image, index) => (
                                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                                        <img
                                            src={image}
                                            alt={`${product.name} ${index + 2}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            {/* Badges */}
                            <div className="flex gap-2">
                                {product.isNew && (
                                    <Badge variant="default">New</Badge>
                                )}
                                {product.isSale && (
                                    <Badge variant="destructive">Sale</Badge>
                                )}
                                <Badge variant="secondary">{product.category}</Badge>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl font-bold">{product.name}</h1>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < Math.floor(product.rating)
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "fill-gray-200 text-gray-200"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                    {product.rating} ({product.reviews} reviews)
                                </span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-3">
                                <span className="text-3xl font-bold text-primary">
                                    ${product.price}
                                </span>
                                {product.isSale && (
                                    <span className="text-xl text-muted-foreground line-through">
                                        ${product.originalPrice}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground leading-relaxed">
                                {product.description}
                            </p>

                            {/* Size Selection */}
                            <div className="space-y-3">
                                <h3 className="font-semibold">Size</h3>
                                <div className="flex gap-2">
                                    {product.sizes.map((size) => (
                                        <Button
                                            key={size}
                                            variant="outline"
                                            size="sm"
                                            className="w-12 h-12"
                                        >
                                            {size}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Selection */}
                            <div className="space-y-3">
                                <h3 className="font-semibold">Color</h3>
                                <div className="flex gap-2">
                                    {product.colors.map((color) => (
                                        <div
                                            key={color}
                                            className="w-8 h-8 rounded-full border-2 border-border cursor-pointer hover:border-primary"
                                            style={{ backgroundColor: color.toLowerCase() }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4">
                                <Button size="lg" className="flex-1" disabled={!product.inStock}>
                                    <ShoppingCart className="mr-2 h-4 w-4" />
                                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                                </Button>
                                <Button variant="outline" size="lg">
                                    <Heart className="h-4 w-4" />
                                </Button>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                                <div className="text-center">
                                    <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                                    <p className="text-xs text-muted-foreground">Free Shipping</p>
                                </div>
                                <div className="text-center">
                                    <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                                    <p className="text-xs text-muted-foreground">30-Day Returns</p>
                                </div>
                                <div className="text-center">
                                    <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                                    <p className="text-xs text-muted-foreground">Easy Exchange</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="mt-16">
                        <Separator className="mb-8" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-xl font-bold mb-4">Product Details</h2>
                                <ul className="space-y-2">
                                    {product.details.map((detail, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-muted-foreground">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold mb-4">Care Instructions</h2>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Machine wash cold</li>
                                    <li>• Tumble dry low</li>
                                    <li>• Do not bleach</li>
                                    <li>• Iron on low heat if needed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
