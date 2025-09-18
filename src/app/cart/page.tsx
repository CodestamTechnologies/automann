import Navbar from "@/components/clothing/Navbar";
import Footer from "@/components/clothing/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import Link from "next/link";

const cartItems = [
    {
        id: 1,
        name: "Elegant Summer Dress",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        size: "M",
        color: "Black",
        quantity: 1
    },
    {
        id: 2,
        name: "Premium Cotton Shirt",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        size: "L",
        color: "White",
        quantity: 2
    }
];

export default function CartPage() {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;

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
                        <h1 className="text-3xl font-bold">Shopping Cart</h1>
                    </div>

                    {cartItems.length === 0 ? (
                        <div className="text-center py-16">
                            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                            <p className="text-muted-foreground mb-8">Start shopping to add items to your cart.</p>
                            <Button asChild>
                                <Link href="/">Start Shopping</Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-4">
                                {cartItems.map((item) => (
                                    <Card key={item.id}>
                                        <CardContent className="p-6">
                                            <div className="flex gap-4">
                                                {/* Product Image */}
                                                <div className="w-24 h-24 overflow-hidden rounded-lg flex-shrink-0">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                {/* Product Info */}
                                                <div className="flex-1">
                                                    <h3 className="font-semibold mb-2">{item.name}</h3>
                                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                                        <span>Size: {item.size}</span>
                                                        <span>Color: {item.color}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <span className="font-bold text-primary">${item.price}</span>
                                                        {item.originalPrice > item.price && (
                                                            <span className="text-sm text-muted-foreground line-through">
                                                                ${item.originalPrice}
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <Button variant="outline" size="sm">
                                                                <Minus className="h-3 w-3" />
                                                            </Button>
                                                            <span className="w-8 text-center">{item.quantity}</span>
                                                            <Button variant="outline" size="sm">
                                                                <Plus className="h-3 w-3" />
                                                            </Button>
                                                        </div>
                                                        <Button variant="ghost" size="sm">
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Order Summary */}
                            <div className="lg:col-span-1">
                                <Card>
                                    <CardContent className="p-6">
                                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex justify-between">
                                                <span>Subtotal</span>
                                                <span>${subtotal.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Shipping</span>
                                                <span className="text-green-600">Free</span>
                                            </div>
                                            <Separator />
                                            <div className="flex justify-between font-bold text-lg">
                                                <span>Total</span>
                                                <span>${total.toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <Button className="w-full mb-4" size="lg">
                                            Proceed to Checkout
                                        </Button>

                                        <p className="text-xs text-muted-foreground text-center">
                                            Free shipping on orders over $50
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Promo Code */}
                                <Card className="mt-4">
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold mb-3">Have a promo code?</h3>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="Enter code"
                                                className="flex-1 px-3 py-2 border rounded-md text-sm"
                                            />
                                            <Button variant="outline" size="sm">
                                                Apply
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
