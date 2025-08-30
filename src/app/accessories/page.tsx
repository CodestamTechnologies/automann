import Navbar from "@/components/clothing/Navbar";
import Footer from "@/components/clothing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const accessoriesProducts = [
    {
        id: 1,
        name: "Designer Handbag",
        price: 199.99,
        originalPrice: 299.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
        category: "Bags",
        isNew: true,
        isSale: false
    },
    {
        id: 2,
        name: "Statement Necklace",
        price: 45.99,
        originalPrice: 65.99,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Jewelry",
        isNew: true,
        isSale: false
    },
    {
        id: 3,
        name: "Leather Wallet",
        price: 39.99,
        originalPrice: 59.99,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Bags",
        isNew: false,
        isSale: true
    },
    {
        id: 4,
        name: "Premium Watch",
        price: 299.99,
        originalPrice: 399.99,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80",
        category: "Watches",
        isNew: false,
        isSale: true
    }
];

export default function AccessoriesPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="py-16">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessories</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Complete your look with our curated collection of designer bags, statement jewelry, premium watches, and luxury accessories.
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {["Bags", "Jewelry", "Watches", "Shoes"].map((category) => (
                            <Button key={category} variant="outline" asChild className="h-16">
                                <Link href={`/accessories/${category.toLowerCase()}`}>
                                    {category}
                                </Link>
                            </Button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {accessoriesProducts.map((product) => (
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
                                View All Accessories
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
