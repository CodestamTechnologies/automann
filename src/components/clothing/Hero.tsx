"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
    {
        id: 1,
        title: "Summer Collection 2024",
        subtitle: "Discover the latest trends in fashion",
        description: "Elevate your style with our curated selection of premium clothing and accessories.",
        cta: "Shop Now",
        ctaLink: "/summer-collection",
        badge: "New Arrivals",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 2,
        title: "Premium Accessories",
        subtitle: "Complete your look",
        description: "From designer bags to statement jewelry, find the perfect finishing touch.",
        cta: "Explore Accessories",
        ctaLink: "/accessories",
        badge: "Limited Time",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
    },
    {
        id: 3,
        title: "Men's Essentials",
        subtitle: "Timeless style for modern men",
        description: "Quality craftsmanship meets contemporary design in our men's collection.",
        cta: "Shop Men",
        ctaLink: "/men",
        badge: "Best Sellers",
        image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
            {/* Hero Slides */}
            <div className="relative h-full">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex items-center">
                            <div className="container mx-auto md:px-40 px-4">
                                <div className="max-w-2xl">
                                    <Badge variant="secondary" className="mb-4">
                                        {slide.badge}
                                    </Badge>

                                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                        {slide.title}
                                    </h1>

                                    <p className="text-xl md:text-2xl text-white/90 mb-2">
                                        {slide.subtitle}
                                    </p>

                                    <p className="text-lg text-white/80 mb-8 max-w-lg">
                                        {slide.description}
                                    </p>

                                    <Button asChild size="lg" className="group">
                                        <Link href={slide.ctaLink}>
                                            {slide.cta}
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Quick Links */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4 text-white/90">
                        <Link href="/women" className="hover:text-white transition-colors">
                            Women's Fashion
                        </Link>
                        <span className="text-white/50">•</span>
                        <Link href="/men" className="hover:text-white transition-colors">
                            Men's Fashion
                        </Link>
                        <span className="text-white/50">•</span>
                        <Link href="/accessories" className="hover:text-white transition-colors">
                            Accessories
                        </Link>
                        <span className="text-white/50">•</span>
                        <Link href="/sale" className="hover:text-white transition-colors">
                            Sale Items
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
