import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        title: "Call Us",
        details: "+1 (555) 123-4567",
        description: "Mon-Fri 9AM-6PM EST"
    },
    {
        icon: Mail,
        title: "Email Us",
        details: "hello@elegance.com",
        description: "We'll respond within 24 hours"
    },
    {
        icon: MapPin,
        title: "Visit Us",
        details: "123 Luxury Avenue",
        description: "New York, NY 10001"
    },
    {
        icon: Clock,
        title: "Showroom Hours",
        details: "By Appointment",
        description: "Private consultations available"
    }
];

export default function ContactSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-foreground text-background border-0">
                        Get in Touch
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
                        Let's Create Together
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ready to transform your space? Our design experts are here to help you bring your vision to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <Card className="border-0 shadow-xl">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                                Schedule a Consultation
                            </h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            First Name
                                        </label>
                                        <Input
                                            type="text"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Last Name
                                        </label>
                                        <Input
                                            type="text"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Email Address
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Phone Number
                                    </label>
                                    <Input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Project Type
                                    </label>
                                    <select className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring">
                                        <option>Select a project type</option>
                                        <option>Living Room Design</option>
                                        <option>Dining Room Design</option>
                                        <option>Bedroom Design</option>
                                        <option>Office Design</option>
                                        <option>Full Home Design</option>
                                        <option>Commercial Space</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring resize-none"
                                    />
                                </div>

                                <Button className="w-full">
                                    Send Message
                                    <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                                Contact Information
                            </h3>
                            <p className="text-muted-foreground mb-8">
                                We're here to help you create the perfect space. Reach out to us through any of the channels below.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                            <info.icon className="h-6 w-6 text-primary-foreground" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black mb-1">
                                            {info.title}
                                        </h4>
                                        <p className="text-muted-foreground font-medium">
                                            {info.details}
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            {info.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Separator />

                        <div className="bg-muted rounded-xl p-6">
                            <h4 className="font-semibold text-foreground mb-3">
                                Why Choose ÉLÉGANCE?
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Free initial consultation</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Custom design services</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Lifetime warranty on all pieces</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>White-glove delivery service</span>
                                </li>
                            </ul>
                        </div>

                        <Button size="lg" className="w-full">
                            Book Your Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
