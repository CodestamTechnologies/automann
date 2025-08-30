import Navbar from "@/components/clothing/Navbar";
import Footer from "@/components/clothing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const saleProducts = [
    {
        id: 1,
        name: "Elegant Summer Dress",
        price: 89.99,
        originalPrice: 129.99,
        discount: 31,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        category: "Women"
    },
    {
        id: 2,
        name: "Premium Cotton Shirt",
        price: 59.99,
        originalPrice: 79.99,
        discount: 25,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        category: "Men"
    },
    {
        id: 3,
        name: "Casual Denim Jacket",
        price: 79.99,
        originalPrice: 99.99,
        discount: 20,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Women"
    },
    {
        id: 4,
        name: "Slim Fit Chinos",
        price: 69.99,
        originalPrice: 89.99,
        discount: 22,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Men"
    },
    {
        id: 5,
        name: "Silk Blouse",
        price: 89.99,
        originalPrice: 119.99,
        discount: 25,
        image: "https://images.unsplash.com/photo-1564257631407-3deb25e9c8e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Women"
    },
    {
        id: 6,
        name: "Leather Wallet",
        price: 39.99,
        originalPrice: 59.99,
        discount: 33,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        category: "Accessories"
    }
];

export default function SalePage() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="py-16">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <Badge variant="destructive" className="mb-4 text-lg px-4 py-2">
                            SALE - UP TO 50% OFF
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sale Items</h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Don&apos;t miss out on these incredible deals! Limited time offers on premium fashion items.
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {["Women", "Men", "Accessories", "All"].map((category) => (
                            <Button key={category} variant="outline" asChild className="h-16">
                                <Link href={`/sale/${category.toLowerCase()}`}>
                                    {category}
                                </Link>
                            </Button>
                        ))}
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {saleProducts.map((product) => (
                            <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                                <CardHeader className="p-0 relative">
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />

                                        {/* Discount Badge */}
                                        <div className="absolute top-3 left-3">
                                            <Badge variant="destructive" className="text-xs font-bold">
                                                -{product.discount}%
                                            </Badge>
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
                                            <span className="text-sm text-muted-foreground line-through">
                                                ${product.originalPrice}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Sale Info */}
                    <div className="mt-16 text-center">
                        <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
                            <h2 className="text-2xl font-bold mb-4">Sale Terms & Conditions</h2>
                            <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                                <li>• Sale items are final sale - no returns or exchanges</li>
                                <li>• Limited quantities available</li>
                                <li>• Sale ends soon - don&apos;t miss out!</li>
                                <li>• Free shipping on orders over $50</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
