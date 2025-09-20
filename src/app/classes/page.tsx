import type { Metadata } from "next";
import Navbar from "@/components/wellness/Navbar";
import Footer from "@/components/wellness/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, MapPin, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Class Schedule — ZenFit Wellness Center",
  description: "Browse our comprehensive class schedule featuring yoga, meditation, fitness, and wellness classes for all levels.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const classCategories = {
  yoga: [
    {
      id: 1,
      title: "Morning Yoga Flow",
      instructor: "Sarah Chen",
      time: "7:00 AM - 8:00 AM",
      days: "Mon, Wed, Fri",
      level: "All Levels",
      capacity: 20,
      location: "Studio A",
      description: "Start your day with gentle flowing movements and mindful breathing.",
      image: "https://maxm-imggenurl.web.val.run/morning yoga peaceful sunrise meditation wellness"
    },
    {
      id: 2,
      title: "Restorative Yoga",
      instructor: "Emma Thompson",
      time: "6:00 PM - 7:00 PM",
      days: "Tue, Thu",
      level: "Beginner",
      capacity: 15,
      location: "Studio B",
      description: "Deep relaxation and gentle stretches to unwind from your day.",
      image: "https://maxm-imggenurl.web.val.run/restorative yoga relaxation peaceful evening wellness"
    }
  ],
  meditation: [
    {
      id: 3,
      title: "Mindfulness Meditation",
      instructor: "David Park",
      time: "6:30 PM - 7:00 PM",
      days: "Daily",
      level: "All Levels",
      capacity: 25,
      location: "Meditation Hall",
      description: "Learn mindfulness techniques for stress reduction and mental clarity.",
      image: "https://maxm-imggenurl.web.val.run/mindfulness meditation peaceful calm mental clarity"
    },
    {
      id: 4,
      title: "Sound Healing",
      instructor: "Maya Patel",
      time: "2:00 PM - 3:15 PM",
      days: "Sunday",
      level: "All Levels",
      capacity: 12,
      location: "Sound Studio",
      description: "Experience deep relaxation through therapeutic sound vibrations.",
      image: "https://maxm-imggenurl.web.val.run/sound healing therapy meditation relaxation peaceful"
    }
  ],
  fitness: [
    {
      id: 5,
      title: "Nature Fitness",
      instructor: "Michael Rodriguez",
      time: "6:00 AM - 6:45 AM",
      days: "Tue, Thu, Sat",
      level: "Intermediate",
      capacity: 18,
      location: "Outdoor Garden",
      description: "Outdoor workouts combining strength training with nature therapy.",
      image: "https://maxm-imggenurl.web.val.run/outdoor fitness nature workout strength training"
    },
    {
      id: 6,
      title: "Tai Chi",
      instructor: "Li Wei",
      time: "5:30 PM - 6:20 PM",
      days: "Mon, Wed, Fri",
      level: "All Levels",
      capacity: 22,
      location: "Studio C",
      description: "Ancient martial art for balance, coordination, and inner peace.",
      image: "https://maxm-imggenurl.web.val.run/tai chi martial arts wellness meditation peaceful"
    }
  ]
};

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Class Schedule
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Find Your Perfect Class
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse range of wellness classes designed for every level and interest. 
              From gentle yoga to dynamic fitness, find the perfect class to support your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Class Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="yoga" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="yoga">Yoga &amp; Movement</TabsTrigger>
              <TabsTrigger value="meditation">Meditation &amp; Mindfulness</TabsTrigger>
              <TabsTrigger value="fitness">Fitness &amp; Wellness</TabsTrigger>
            </TabsList>

            {Object.entries(classCategories).map(([category, classes]) => (
              <TabsContent key={category} value={category} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {classes.map((classItem) => (
                    <Card key={classItem.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm group">
                      <div className="relative overflow-hidden">
                        <img
                          src={classItem.image}
                          alt={classItem.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-background/90 text-foreground border-border/50">
                            {classItem.level}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-background/90 text-foreground border-border/50">
                            {classItem.capacity} spots
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {classItem.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {classItem.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Class Details */}
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span className="font-medium">Instructor:</span>
                            <span>{classItem.instructor}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">Time:</span>
                            <span>{classItem.time}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">Days:</span>
                            <span>{classItem.days}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span className="font-medium">Location:</span>
                            <span>{classItem.location}</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group" asChild>
                          <Link href={`/classes/${classItem.id}`}>
                            Book This Class
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Weekly Schedule Overview
            </h2>
            <p className="text-lg text-muted-foreground">
              Plan your wellness week with our comprehensive class schedule
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                <div key={day} className="text-center">
                  <h3 className="font-semibold text-foreground mb-3">{day}</h3>
                  <div className="space-y-2">
                    {index === 0 && (
                      <>
                        <div className="text-xs bg-primary/10 text-primary p-2 rounded">7:00 AM Yoga</div>
                        <div className="text-xs bg-accent/10 text-accent p-2 rounded">5:30 PM Tai Chi</div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="text-xs bg-accent/10 text-accent p-2 rounded">6:00 AM Nature Fit</div>
                        <div className="text-xs bg-primary/10 text-primary p-2 rounded">6:00 PM Restorative</div>
                        <div className="text-xs bg-secondary/20 text-foreground p-2 rounded">6:30 PM Meditation</div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="text-xs bg-primary/10 text-primary p-2 rounded">7:00 AM Yoga</div>
                        <div className="text-xs bg-accent/10 text-accent p-2 rounded">5:30 PM Tai Chi</div>
                        <div className="text-xs bg-secondary/20 text-foreground p-2 rounded">6:30 PM Meditation</div>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <div className="text-xs bg-accent/10 text-accent p-2 rounded">6:00 AM Nature Fit</div>
                        <div className="text-xs bg-primary/10 text-primary p-2 rounded">6:00 PM Restorative</div>
                        <div className="text-xs bg-secondary/20 text-foreground p-2 rounded">6:30 PM Meditation</div>
                      </>
                    )}
                    {index === 4 && (
                      <>
                        <div className="text-xs bg-primary/10 text-primary p-2 rounded">7:00 AM Yoga</div>
                        <div className="text-xs bg-accent/10 text-accent p-2 rounded">5:30 PM Tai Chi</div>
                        <div className="text-xs bg-secondary/20 text-foreground p-2 rounded">6:30 PM Meditation</div>
                      </>
                    )}
                    {index === 5 && (
                      <>
                        <div className="text-xs bg-accent/10 text-accent p-2 rounded">6:00 AM Nature Fit</div>
                        <div className="text-xs bg-secondary/20 text-foreground p-2 rounded">6:30 PM Meditation</div>
                      </>
                    )}
                    {index === 6 && (
                      <>
                        <div className="text-xs bg-secondary/20 text-foreground p-2 rounded">6:30 PM Meditation</div>
                        <div className="text-xs bg-primary/10 text-primary p-2 rounded">2:00 PM Sound Healing</div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Join a Class?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book your first class today and experience the transformative power of mindful movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/contact">
                Book Your First Class
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/programs">
                Explore Programs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
