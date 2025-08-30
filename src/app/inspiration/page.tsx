import LuxuryNavbar from "@/components/furniture/LuxuryNavbar";
import LuxuryFooter from "@/components/furniture/LuxuryFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Heart, Share2, BookOpen, Eye, Calendar, User, Tag } from "lucide-react";

const inspirationPosts = [
    {
        id: 1,
        title: "Modern Minimalism: Less is More",
        description: "Discover how clean lines and uncluttered spaces create a sense of calm and sophistication in modern homes.",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: "Design Trends",
        author: "Sarah Chen",
        date: "March 15, 2024",
        readTime: "5 min read",
        likes: 284,
        shares: 45,
        views: 1247
    },
    {
        id: 2,
        title: "Coastal Elegance: Bringing the Ocean Home",
        description: "Learn how to incorporate coastal design elements that bring serenity and natural beauty to your living spaces.",
        image: "https://images.unsplash.com/photo-1617098907768-60b1c5c2c8b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: "Style Guide",
        author: "Michael Rodriguez",
        date: "March 12, 2024",
        readTime: "7 min read",
        likes: 156,
        shares: 32,
        views: 892
    },
    {
        id: 3,
        title: "Urban Luxury: Sophisticated City Living",
        description: "Explore how to create luxurious urban spaces that combine functionality with sophisticated design elements.",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: "Luxury Living",
        author: "Emma Thompson",
        date: "March 10, 2024",
        readTime: "6 min read",
        likes: 342,
        shares: 67,
        views: 1567
    },
    {
        id: 4,
        title: "The Art of Mixing Styles",
        description: "Master the technique of blending different design styles to create unique and personalized spaces.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: "Design Tips",
        author: "David Park",
        date: "March 8, 2024",
        readTime: "8 min read",
        likes: 198,
        shares: 41,
        views: 1034
    },
    {
        id: 5,
        title: "Sustainable Luxury: Eco-Friendly Design",
        description: "Discover how to create luxurious spaces while maintaining environmental responsibility and sustainability.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        category: "Sustainability",
        author: "Lisa Wang",
        date: "March 5, 2024",
        readTime: "9 min read",
        likes: 267,
        shares: 53,
        views: 1345
    },
    {
        id: 6,
        title: "Color Psychology in Interior Design",
        description: "Understand how different colors affect mood and create the perfect atmosphere for your home.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: "Color Theory",
        author: "Jennifer Lee",
        date: "March 3, 2024",
        readTime: "6 min read",
        likes: 189,
        shares: 38,
        views: 987
    }
];

const designTips = [
    {
        icon: BookOpen,
        title: "Start with a Plan",
        description: "Always begin with a comprehensive design plan that considers your lifestyle, needs, and aesthetic preferences."
    },
    {
        icon: Eye,
        title: "Focus on Proportion",
        description: "Pay attention to scale and proportion - oversized pieces can overwhelm a room, while undersized items can feel lost."
    },
    {
        icon: Heart,
        title: "Layer Your Lighting",
        description: "Create depth and atmosphere with multiple lighting sources: ambient, task, and accent lighting."
    },
    {
        icon: Tag,
        title: "Invest in Quality",
        description: "Choose fewer, high-quality pieces that will last for years rather than many inexpensive items."
    }
];

const categories = [
    "All Posts",
    "Design Trends",
    "Style Guide",
    "Luxury Living",
    "Design Tips",
    "Sustainability",
    "Color Theory"
];

export default function InspirationPage() {
    return (
        <div className="min-h-screen bg-background">
            <LuxuryNavbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-background to-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                            Design Inspiration
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                            Transform Your Space
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Discover design inspiration, expert tips, and creative ideas to help you create the home of your dreams.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filters */}
            <section className="py-8 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={category === "All Posts" ? "default" : "outline"}
                                size="sm"
                                className="text-sm"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src={inspirationPosts[0].image}
                                alt={inspirationPosts[0].title}
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                        <div className="space-y-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20">
                                {inspirationPosts[0].category}
                            </Badge>
                            <h2 className="text-3xl font-serif font-bold text-foreground">
                                {inspirationPosts[0].title}
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {inspirationPosts[0].description}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                    <User className="h-4 w-4" />
                                    <span>{inspirationPosts[0].author}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{inspirationPosts[0].date}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Eye className="h-4 w-4" />
                                    <span>{inspirationPosts[0].readTime}</span>
                                </div>
                            </div>
                            <Button size="lg">
                                Read Full Article
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Tips */}
            <section className="py-16 bg-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                            Expert Design Tips
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Simple principles that make a big difference in your home design
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {designTips.map((tip, index) => (
                            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                                <CardContent className="p-6 text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                        <tip.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground mb-3">
                                        {tip.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        {tip.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                            Latest Articles
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Stay inspired with our latest design insights and trends
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {inspirationPosts.slice(1).map((post) => (
                            <Card key={post.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Badge */}
                                    <Badge className="absolute top-4 left-4 bg-background/95 text-foreground border-0">
                                        {post.category}
                                    </Badge>

                                    {/* Action Buttons */}
                                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full">
                                            <Heart className="h-3 w-3" />
                                        </Button>
                                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full">
                                            <Share2 className="h-3 w-3" />
                                        </Button>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                            <div className="flex items-center space-x-1">
                                                <User className="h-3 w-3" />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="h-3 w-3" />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                                            <Eye className="h-3 w-3" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                            <div className="flex items-center space-x-1">
                                                <Heart className="h-3 w-3" />
                                                <span>{post.likes}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Share2 className="h-3 w-3" />
                                                <span>{post.shares}</span>
                                            </div>
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
                                            Read More
                                            <ArrowRight className="ml-1 h-3 w-3" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                        Stay Inspired
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Subscribe to our newsletter for the latest design inspiration, expert tips, and exclusive offers delivered to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <Button>
                            Subscribe
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            <LuxuryFooter />
        </div>
    );
}
