"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, ShoppingBag, Search, User, Heart } from "lucide-react";

export default function LuxuryNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors">
                            ÉLÉGANCE
                        </Link>
                        <Separator orientation="vertical" className="h-8" />
                        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
                            <Link href="/collections" className="hover:text-foreground transition-colors">
                                Collections
                            </Link>
                            <Link href="/showroom" className="hover:text-foreground transition-colors">
                                Showroom
                            </Link>
                            <Link href="/craftsmanship" className="hover:text-foreground transition-colors">
                                Craftsmanship
                            </Link>
                            <Link href="/inspiration" className="hover:text-foreground transition-colors">
                                Inspiration
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="hidden md:flex">
                            <Search className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hidden md:flex">
                            <User className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="hidden md:flex relative">
                            <Heart className="h-4 w-4" />
                            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                                2
                            </Badge>
                        </Button>
                        <Button variant="ghost" size="sm" className="relative">
                            <ShoppingBag className="h-4 w-4" />
                            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-primary">
                                3
                            </Badge>
                        </Button>
                        <ThemeToggle />
                        <Button className="hidden md:flex">
                            Book Consultation
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu with Smooth Transitions */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="py-4 border-t border-border space-y-4">
                        <div className="flex flex-col space-y-4 text-sm font-medium text-muted-foreground">
                            <Link
                                href="/collections"
                                className="hover:text-foreground transition-colors transform hover:translate-x-1 duration-200"
                            >
                                Collections
                            </Link>
                            <Link
                                href="/showroom"
                                className="hover:text-foreground transition-colors transform hover:translate-x-1 duration-200"
                            >
                                Showroom
                            </Link>
                            <Link
                                href="/craftsmanship"
                                className="hover:text-foreground transition-colors transform hover:translate-x-1 duration-200"
                            >
                                Craftsmanship
                            </Link>
                            <Link
                                href="/inspiration"
                                className="hover:text-foreground transition-colors transform hover:translate-x-1 duration-200"
                            >
                                Inspiration
                            </Link>
                            <Separator />
                            <Button className="w-full">
                                Book Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
