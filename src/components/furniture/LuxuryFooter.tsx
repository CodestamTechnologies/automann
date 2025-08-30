"use client"
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const footerLinks = {
    collections: [
        { name: "Living Room", href: "/collections/living-room" },
        { name: "Dining Room", href: "/collections/dining-room" },
        { name: "Bedroom", href: "/collections/bedroom" },
        { name: "Office", href: "/collections/office" },
        { name: "Outdoor", href: "/collections/outdoor" },
        { name: "Accent Pieces", href: "/collections/accent-pieces" }
    ],
    services: [
        { name: "Custom Design", href: "/services/custom-design" },
        { name: "Interior Consultation", href: "/services/consultation" },
        { name: "Installation", href: "/services/installation" },
        { name: "Maintenance", href: "/services/maintenance" },
        { name: "Warranty", href: "/services/warranty" },
        { name: "Trade Program", href: "/services/trade-program" }
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/about/story" },
        { name: "Craftsmanship", href: "/craftsmanship" },
        { name: "Sustainability", href: "/about/sustainability" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" }
    ],
    support: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/support/faq" },
        { name: "Shipping", href: "/support/shipping" },
        { name: "Returns", href: "/support/returns" },
        { name: "Size Guide", href: "/support/size-guide" },
        { name: "Care Instructions", href: "/support/care-instructions" }
    ]
};

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export default function LuxuryFooter() {
    return (
        <footer className="bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    <div className="lg:col-span-2">
                        <Link href="/" className="text-2xl font-serif font-bold mb-4 block hover:text-primary transition-colors">
                            ÉLÉGANCE
                        </Link>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Crafting timeless furniture that transforms spaces and creates lasting memories.
                            Where luxury meets functionality, and every piece tells a story.
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center space-x-3 text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3 text-muted-foreground">
                                <Mail className="h-4 w-4" />
                                <span>hello@elegance.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>123 Luxury Avenue, NY 10001</span>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <Button
                                    key={social.label}
                                    variant="ghost"
                                    size="sm"
                                    className="h-10 w-10 p-0 rounded-full"
                                >
                                    <social.icon className="h-4 w-4" />
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Collections</h3>
                        <ul className="space-y-2">
                            {footerLinks.collections.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-background transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-background transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-background transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Support</h3>
                        <ul className="space-y-2">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-background transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-border">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Stay Inspired
                            </h3>
                            <p className="text-muted-foreground">
                                Subscribe to our newsletter for design inspiration, exclusive offers, and the latest collections.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-muted border border-border rounded-md text-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                            />
                            <Button>
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                            <span>&copy; 2024 ÉLÉGANCE. All rights reserved.</span>
                            <Separator orientation="vertical" className="h-4" />
                            <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
                            <Separator orientation="vertical" className="h-4" />
                            <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Badge className="bg-primary text-primary-foreground border-0">
                                Award Winning
                            </Badge>
                            <Badge variant="secondary">
                                Sustainable
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>

            <Button
                variant="ghost"
                size="sm"
                className="fixed bottom-8 right-8 h-12 w-12 p-0 rounded-full shadow-lg bg-background text-foreground"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <ArrowUp className="h-5 w-5" />
            </Button>
        </footer>
    );
}
