"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
    CreditCard,
    Truck,
    Shield,
    RotateCcw
} from "lucide-react";

const footerLinks = {
    shop: [
        { name: "Women's Fashion", href: "/women" },
        { name: "Men's Fashion", href: "/men" },
        { name: "Accessories", href: "/accessories" },
        { name: "Footwear", href: "/footwear" },
        { name: "New Arrivals", href: "/new-arrivals" },
        { name: "Sale Items", href: "/sale" }
    ],
    support: [
        { name: "Contact Us", href: "/contact" },
        { name: "Help Center", href: "/help" },
        { name: "Size Guide", href: "/size-guide" },
        { name: "Returns & Exchanges", href: "/returns" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Track Order", href: "/track-order" }
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/story" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Blog", href: "/blog" },
        { name: "Sustainability", href: "/sustainability" }
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Accessibility", href: "/accessibility" }
    ]
};

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
];

const features = [
    {
        icon: CreditCard,
        title: "Secure Payment",
        description: "Multiple payment options"
    },
    {
        icon: Truck,
        title: "Free Shipping",
        description: "On orders over $50"
    },
    {
        icon: Shield,
        title: "Quality Guarantee",
        description: "30-day return policy"
    },
    {
        icon: RotateCcw,
        title: "Easy Returns",
        description: "Hassle-free returns"
    }
];

export default function Footer() {
    return (
        <footer className="bg-background border-t">
            {/* Features */}
            <section className="py-8 border-b">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <feature.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm">{feature.title}</h4>
                                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Footer */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <div className="space-y-4">
                                <Link href="/" className="inline-block">
                                    <span className="text-2xl font-bold text-primary">STYLEHUB</span>
                                </Link>

                                <p className="text-sm text-muted-foreground">
                                    Your destination for premium fashion and lifestyle. Discover the latest trends and timeless classics.
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <Mail className="h-4 w-4" />
                                        <span>hello@stylehub.com</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <Phone className="h-4 w-4" />
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <MapPin className="h-4 w-4" />
                                        <span>123 Fashion St, Style City, SC 12345</span>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex space-x-3">
                                    {socialLinks.map((social) => (
                                        <Button
                                            key={social.name}
                                            variant="ghost"
                                            size="icon"
                                            asChild
                                            className="h-8 w-8"
                                        >
                                            <Link href={social.href} aria-label={social.name}>
                                                <social.icon className="h-4 w-4" />
                                            </Link>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Shop Links */}
                        <div>
                            <h3 className="font-semibold mb-4">Shop</h3>
                            <ul className="space-y-2">
                                {footerLinks.shop.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h3 className="font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                {footerLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="font-semibold mb-4">Newsletter</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Subscribe for exclusive offers and updates.
                            </p>
                            <div className="space-y-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-9"
                                />
                                <Button size="sm" className="w-full">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Separator />

            {/* Bottom Footer */}
            <section className="py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex flex-wrap justify-center md:justify-start space-x-6">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="text-xs text-muted-foreground">
                            © 2024 STYLEHUB. All rights reserved.
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
