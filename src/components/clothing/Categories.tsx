"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const categories = [
    {
        id: 1,
        name: "Women&apos;s Fashion",
        description: "Elegant dresses, stylish tops, and trendy bottoms",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        link: "/women",
        badge: "Popular",
        itemCount: "500+ items"
    },
    {
        id: 2,
        name: "Men&apos;s Fashion",
        description: "Sophisticated shirts, comfortable pants, and smart jackets",
        image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        link: "/men",
        badge: "New",
        itemCount: "300+ items"
    },
    {
        id: 3,
        name: "Accessories",
        description: "Designer bags, statement jewelry, and premium watches",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        link: "/accessories",
        badge: "Trending",
        itemCount: "200+ items"
    },
    {
        id: 4,
        name: "Footwear",
        description: "Comfortable shoes, elegant heels, and casual sneakers",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1012&q=80",
        link: "/footwear",
        badge: "Sale",
        itemCount: "150+ items"
    }
];

export default function Categories() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore our diverse collection of fashion items, organized to help you find exactly what you&apos;re looking for.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category) => (
                        <Card key={category.id} className="group overflow-hidden hover:shadow-xl transition-all duration-500">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <Badge variant="secondary" className="text-xs">
                                        {category.badge}
                                    </Badge>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold">{category.name}</h3>
                                        <p className="text-white/80 text-sm">{category.description}</p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-white/60">{category.itemCount}</span>
                                            <Button variant="secondary" size="sm" asChild className="group/btn">
                                                <Link href={category.link}>
                                                    Shop Now
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Quick Links */}
                <div className="mt-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Link
                            href="/women/dresses"
                            className="group p-4 text-center rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
                        >
                            <h4 className="font-semibold group-hover:text-primary transition-colors">Dresses</h4>
                            <p className="text-sm text-muted-foreground">Elegant & Casual</p>
                        </Link>

                        <Link
                            href="/men/shirts"
                            className="group p-4 text-center rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
                        >
                            <h4 className="font-semibold group-hover:text-primary transition-colors">Shirts</h4>
                            <p className="text-sm text-muted-foreground">Formal & Casual</p>
                        </Link>

                        <Link
                            href="/accessories/bags"
                            className="group p-4 text-center rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
                        >
                            <h4 className="font-semibold group-hover:text-primary transition-colors">Bags</h4>
                            <p className="text-sm text-muted-foreground">Handbags & Purses</p>
                        </Link>

                        <Link
                            href="/footwear"
                            className="group p-4 text-center rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors"
                        >
                            <h4 className="font-semibold group-hover:text-primary transition-colors">Shoes</h4>
                            <p className="text-sm text-muted-foreground">Heels & Sneakers</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
