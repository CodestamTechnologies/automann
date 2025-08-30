import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Share2, BookOpen } from "lucide-react";

const inspirationPosts = [
    {
        id: 1,
        title: "Modern Minimalism",
        description: "Clean lines and uncluttered spaces create a sense of calm and sophistication.",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: "Design Trends",
        likes: 284,
        shares: 45
    },
    {
        id: 2,
        title: "Coastal Elegance",
        description: "Bring the serenity of the ocean into your home with light colors and natural textures.",
        image: "https://images.unsplash.com/photo-1617098907768-60b1c5c2c8b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: "Style Guide",
        likes: 156,
        shares: 32
    },
    {
        id: 3,
        title: "Urban Luxury",
        description: "Sophisticated city living with bold statements and premium materials.",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        category: "Luxury Living",
        likes: 342,
        shares: 67
    }
];

const quickTips = [
    {
        icon: BookOpen,
        title: "Color Harmony",
        description: "Choose a cohesive color palette that flows throughout your space"
    },
    {
        icon: Heart,
        title: "Personal Touch",
        description: "Incorporate meaningful pieces that tell your story"
    },
    {
        icon: Share2,
        title: "Balance & Scale",
        description: "Mix different sizes and heights for visual interest"
    }
];

export default function InteriorInspiration() {
    return (
        <section id="inspiration" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-muted text-muted-foreground border-border">
                        Design Inspiration
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Transform Your Space
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Discover design inspiration, expert tips, and creative ideas to help you create the home of your dreams.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {inspirationPosts.map((post) => (
                        <Card key={post.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                <Badge className="absolute top-4 left-4 bg-background/95 text-foreground border-0">
                                    {post.category}
                                </Badge>

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
                                <p className="text-muted-foreground mb-4 text-sm">
                                    {post.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                        <div className="flex items-center space-x-1">
                                            <Heart className="h-3 w-3" />
                                            <span>{post.likes}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Share2 className="h-3 w-3" />
                                            <span>{post.shares}</span>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                        Read More
                                        <ArrowRight className="ml-1 h-3 w-3" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-muted to-muted/50 rounded-2xl p-8 mb-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                            Design Tips from Our Experts
                        </h3>
                        <p className="text-muted-foreground">
                            Simple principles that make a big difference in your home design
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {quickTips.map((tip, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                                    <tip.icon className="h-8 w-8 text-primary-foreground" />
                                </div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">
                                    {tip.title}
                                </h4>
                                <p className="text-muted-foreground text-sm">
                                    {tip.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <div className="bg-foreground rounded-2xl p-12 text-background">
                        <h3 className="text-3xl font-serif font-bold mb-4">
                            Ready to Create Your Dream Space?
                        </h3>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Our design experts are here to help you bring your vision to life.
                            Schedule a consultation and let&apos;s transform your space together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg">
                                Book Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button size="lg" variant="outline">
                                View Portfolio
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
