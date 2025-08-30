import Navbar from "@/components/clothing/Navbar";
import Footer from "@/components/clothing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const menProducts = [
    {
        id: 1,
        name: "Premium Cotton Shirt",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        category: "Shirts",
        isNew: false,
        isSale: true
    },
    {
        id: 2,
        name: "Slim Fit Chinos",
        price: 69.99,
        originalPrice: 89.99,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Pants",
        isNew: false,
        isSale: true
    },
    {
        id: 3,
        name: "Casual Blazer",
        price: 129.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        category: "Jackets",
        isNew: true,
        isSale: false
    },
    {
        id: 4,
        name: "Classic Polo Shirt",
        price: 39.99,
        originalPrice: 49.99,
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Shirts",
        isNew: false,
        isSale: true
    }
];

export default function MenPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="py-16">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Men's Fashion</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover sophisticated shirts, comfortable pants, smart jackets, and premium accessories for the modern gentleman.
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {["Shirts", "Pants", "Jackets", "Accessories"].map((category) => (
                            <Button key={category} variant="outline" asChild className="h-16">
                                <Link href={`/men/${category.toLowerCase()}`}>
                                    {category}
                                </Link>
                            </Button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {menProducts.map((product) => (
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
                                View All Men's Products
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
