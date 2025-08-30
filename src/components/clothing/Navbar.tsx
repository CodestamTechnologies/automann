"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, Search, User, Heart, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary">STYLEHUB</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-6">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Women</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            <div className="space-y-3">
                                                <h3 className="text-sm font-medium text-muted-foreground">Categories</h3>
                                                <div className="space-y-2">
                                                    <Link href="/women/dresses" className="block text-sm hover:text-primary">
                                                        Dresses
                                                    </Link>
                                                    <Link href="/women/tops" className="block text-sm hover:text-primary">
                                                        Tops
                                                    </Link>
                                                    <Link href="/women/bottoms" className="block text-sm hover:text-primary">
                                                        Bottoms
                                                    </Link>
                                                    <Link href="/women/outerwear" className="block text-sm hover:text-primary">
                                                        Outerwear
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <h3 className="text-sm font-medium text-muted-foreground">Collections</h3>
                                                <div className="space-y-2">
                                                    <Link href="/women/summer" className="block text-sm hover:text-primary">
                                                        Summer Collection
                                                    </Link>
                                                    <Link href="/women/evening" className="block text-sm hover:text-primary">
                                                        Evening Wear
                                                    </Link>
                                                    <Link href="/women/casual" className="block text-sm hover:text-primary">
                                                        Casual
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Men</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            <div className="space-y-3">
                                                <h3 className="text-sm font-medium text-muted-foreground">Categories</h3>
                                                <div className="space-y-2">
                                                    <Link href="/men/shirts" className="block text-sm hover:text-primary">
                                                        Shirts
                                                    </Link>
                                                    <Link href="/men/pants" className="block text-sm hover:text-primary">
                                                        Pants
                                                    </Link>
                                                    <Link href="/men/jackets" className="block text-sm hover:text-primary">
                                                        Jackets
                                                    </Link>
                                                    <Link href="/men/accessories" className="block text-sm hover:text-primary">
                                                        Accessories
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <h3 className="text-sm font-medium text-muted-foreground">Collections</h3>
                                                <div className="space-y-2">
                                                    <Link href="/men/business" className="block text-sm hover:text-primary">
                                                        Business Casual
                                                    </Link>
                                                    <Link href="/men/sportswear" className="block text-sm hover:text-primary">
                                                        Sportswear
                                                    </Link>
                                                    <Link href="/men/streetwear" className="block text-sm hover:text-primary">
                                                        Streetwear
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Accessories</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            <div className="space-y-3">
                                                <h3 className="text-sm font-medium text-muted-foreground">Categories</h3>
                                                <div className="space-y-2">
                                                    <Link href="/accessories/bags" className="block text-sm hover:text-primary">
                                                        Bags & Purses
                                                    </Link>
                                                    <Link href="/accessories/jewelry" className="block text-sm hover:text-primary">
                                                        Jewelry
                                                    </Link>
                                                    <Link href="/accessories/shoes" className="block text-sm hover:text-primary">
                                                        Shoes
                                                    </Link>
                                                    <Link href="/accessories/watches" className="block text-sm hover:text-primary">
                                                        Watches
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <h3 className="text-sm font-medium text-muted-foreground">Brands</h3>
                                                <div className="space-y-2">
                                                    <Link href="/accessories/premium" className="block text-sm hover:text-primary">
                                                        Premium
                                                    </Link>
                                                    <Link href="/accessories/designer" className="block text-sm hover:text-primary">
                                                        Designer
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/sale" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Sale
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/new-arrivals" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            New Arrivals
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex md:flex-1 md:max-w-md md:ml-6">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                placeholder="Search for products..."
                                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
                            />
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* User Menu */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <User className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Link href="/account">My Account</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/orders">My Orders</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/wishlist">Wishlist</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/login">Sign In</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Wishlist */}
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="/wishlist">
                                <Heart className="h-5 w-5" />
                            </Link>
                        </Button>

                        {/* Cart */}
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="/cart" className="relative">
                                <ShoppingCart className="h-5 w-5" />
                                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
                                    3
                                </Badge>
                            </Link>
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="md:hidden py-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search for products..."
                            className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
                        />
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t py-4">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium text-muted-foreground">Women</h3>
                                <div className="space-y-1 pl-4">
                                    <Link href="/women/dresses" className="block text-sm hover:text-primary">
                                        Dresses
                                    </Link>
                                    <Link href="/women/tops" className="block text-sm hover:text-primary">
                                        Tops
                                    </Link>
                                    <Link href="/women/bottoms" className="block text-sm hover:text-primary">
                                        Bottoms
                                    </Link>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium text-muted-foreground">Men</h3>
                                <div className="space-y-1 pl-4">
                                    <Link href="/men/shirts" className="block text-sm hover:text-primary">
                                        Shirts
                                    </Link>
                                    <Link href="/men/pants" className="block text-sm hover:text-primary">
                                        Pants
                                    </Link>
                                    <Link href="/men/jackets" className="block text-sm hover:text-primary">
                                        Jackets
                                    </Link>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium text-muted-foreground">Accessories</h3>
                                <div className="space-y-1 pl-4">
                                    <Link href="/accessories/bags" className="block text-sm hover:text-primary">
                                        Bags & Purses
                                    </Link>
                                    <Link href="/accessories/jewelry" className="block text-sm hover:text-primary">
                                        Jewelry
                                    </Link>
                                    <Link href="/accessories/shoes" className="block text-sm hover:text-primary">
                                        Shoes
                                    </Link>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <Link href="/sale" className="block text-sm hover:text-primary">
                                    Sale
                                </Link>
                                <Link href="/new-arrivals" className="block text-sm hover:text-primary">
                                    New Arrivals
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
