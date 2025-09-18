import type { Metadata } from "next";
import Navbar from "@/components/luxury/Navbar";
import Footer from "@/components/luxury/Footer";
import { 
  Mountain, 
  Plane, 
  Utensils, 
  Heart, 
  Camera, 
  Users,
  Clock,
  Award,
  Star,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Mountain Experiences - Alpine Luxe",
  description: "Indulge in extraordinary mountain adventures crafted for discerning travelers. Helicopter tours, alpine expeditions, mountain dining, wellness retreats, and bespoke experiences.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["luxury mountain experiences", "helicopter tours", "alpine expeditions", "mountain dining", "wellness retreats", "bespoke adventures"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Luxury Mountain Experiences - Alpine Luxe",
    description: "Indulge in extraordinary mountain adventures crafted for discerning travelers with unparalleled luxury and service.",
    url: "https://codestam.com",
    siteName: "Alpine Luxe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Mountain Experiences - Alpine Luxe",
    description: "Indulge in extraordinary mountain adventures crafted for discerning travelers with unparalleled luxury and service.",
  },
};

const experiences = [
  {
    id: 1,
    icon: Plane,
    title: "Helicopter Mountain Tours",
    category: "Aerial Adventures",
    description: "Soar above pristine peaks and glaciers in luxury helicopters with expert pilots, champagne service, and breathtaking aerial photography opportunities.",
    image: "https://maxm-imggenurl.web.val.run/luxury helicopter mountain tour, alpine peaks, aerial view, premium helicopter, champagne service",
    features: ["Private Luxury Helicopter", "Professional Pilot & Guide", "Champagne & Gourmet Snacks", "Professional Photography", "Flexible Itinerary"],
    duration: "2-6 hours",
    groupSize: "2-6 people",
    price: "From $1,200/person",
    rating: 4.9,
    reviews: 156,
    highlights: ["Matterhorn Flyover", "Glacier Landing", "Alpine Photography", "Sunset Tours"]
  },
  {
    id: 2,
    icon: Mountain,
    title: "Guided Alpine Expeditions",
    category: "Mountain Climbing",
    description: "Conquer legendary peaks with world-class mountain guides, premium equipment, luxury base camps, and comprehensive safety support.",
    image: "https://maxm-imggenurl.web.val.run/alpine expedition, mountain climbing, professional guides, luxury base camp, snow-capped peaks",
    features: ["IFMGA Certified Guides", "Premium Climbing Equipment", "Luxury Base Camps", "Medical Support Team", "Satellite Communication"],
    duration: "5-21 days",
    groupSize: "2-8 people",
    price: "From $3,500/person",
    rating: 4.8,
    reviews: 89,
    highlights: ["Mont Blanc Ascent", "Matterhorn Climb", "Everest Base Camp", "Technical Training"]
  },
  {
    id: 3,
    icon: Utensils,
    title: "Mountain Peak Dining",
    category: "Culinary Experiences",
    description: "Experience Michelin-starred cuisine at exclusive mountain-top restaurants with panoramic alpine views and world-class wine pairings.",
    image: "https://maxm-imggenurl.web.val.run/mountain peak dining, michelin restaurant, alpine views, fine dining, wine pairing, luxury service",
    features: ["Michelin-Starred Chefs", "Premium Wine Selection", "Panoramic Mountain Views", "Private Dining Options", "Helicopter Access"],
    duration: "3-6 hours",
    groupSize: "2-16 people",
    price: "From $450/person",
    rating: 5.0,
    reviews: 234,
    highlights: ["3-Star Michelin Chefs", "Exclusive Locations", "Wine Cellar Tours", "Sunset Dinners"]
  },
  {
    id: 4,
    icon: Heart,
    title: "Alpine Wellness Retreats",
    category: "Wellness & Spa",
    description: "Rejuvenate your body and mind with luxury spa treatments, thermal baths, meditation sessions, and wellness coaching in pristine mountain settings.",
    image: "https://maxm-imggenurl.web.val.run/alpine spa retreat, luxury wellness center, mountain views, thermal baths, meditation, relaxation",
    features: ["Luxury Spa Treatments", "Natural Thermal Baths", "Meditation & Yoga", "Wellness Coaching", "Organic Cuisine"],
    duration: "1-14 days",
    groupSize: "1-8 people",
    price: "From $800/person",
    rating: 4.9,
    reviews: 178,
    highlights: ["Thermal Springs", "Holistic Treatments", "Mountain Yoga", "Detox Programs"]
  },
  {
    id: 5,
    icon: Camera,
    title: "Photography Expeditions",
    category: "Photography",
    description: "Capture stunning alpine landscapes with professional photographers, premium equipment, exclusive location access, and post-processing workshops.",
    image: "https://maxm-imggenurl.web.val.run/mountain photography expedition, professional photographer, alpine landscape, premium camera equipment, golden hour",
    features: ["Professional Photographer Guide", "Premium Camera Equipment", "Exclusive Location Access", "Post-Processing Workshop", "Print Services"],
    duration: "1-7 days",
    groupSize: "2-8 people",
    price: "From $950/person",
    rating: 4.8,
    reviews: 124,
    highlights: ["Golden Hour Shoots", "Wildlife Photography", "Landscape Mastery", "Portfolio Development"]
  },
  {
    id: 6,
    icon: Users,
    title: "Private Group Adventures",
    category: "Bespoke Experiences",
    description: "Customize exclusive mountain adventures for your group with personalized itineraries, dedicated staff, private transportation, and flexible scheduling.",
    image: "https://maxm-imggenurl.web.val.run/private group mountain adventure, luxury lodge, exclusive experience, dedicated staff, custom itinerary",
    features: ["Custom Itinerary Design", "Dedicated Concierge Team", "Private Transportation", "Exclusive Venue Access", "24/7 Support"],
    duration: "3-21 days",
    groupSize: "6-30 people",
    price: "From $2,200/person",
    rating: 5.0,
    reviews: 67,
    highlights: ["Corporate Retreats", "Family Adventures", "Celebration Trips", "Team Building"]
  }
];

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Luxury Mountain <span className="text-gradient-gold">Experiences</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Indulge in extraordinary mountain adventures crafted for the most discerning travelers. 
            Each experience is meticulously designed to exceed your highest expectations.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span>Award-Winning Experiences</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary fill-current" />
              <span>4.9 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Expert Guides &amp; Staff</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="group bg-card rounded-2xl overflow-hidden luxury-shadow luxury-hover luxury-border"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 alpine-blur rounded-full text-white text-sm font-medium">
                    {experience.category}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 px-3 py-1 alpine-blur rounded-full">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <span className="text-sm font-semibold text-white">{experience.rating}</span>
                    <span className="text-sm text-white/80">({experience.reviews})</span>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center alpine-glow">
                      <experience.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">What&apos;s Included:</h4>
                    <div className="space-y-2">
                      {experience.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-border/50">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Duration</div>
                        <div className="text-sm font-medium">{experience.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <div>
                        <div className="text-xs text-muted-foreground">Group Size</div>
                        <div className="text-sm font-medium">{experience.groupSize}</div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Experience Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-4 space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary">{experience.price}</span>
                    </div>
                    
                    <button className="group/btn inline-flex items-center space-x-2 w-full justify-center px-6 py-4 gold-gradient text-primary-foreground rounded-xl font-semibold alpine-glow hover:shadow-xl transition-all duration-300">
                      <span>Book Experience</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Experience CTA */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 alpine-blur rounded-full luxury-border mb-8">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-white font-medium">Bespoke Experience Design</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Create Your Perfect <span className="text-gradient-gold">Mountain Adventure</span>
          </h2>
          
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Can&apos;t find the perfect experience? Our expert concierge team will create a bespoke adventure 
            tailored exclusively to your desires, preferences, and dreams.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 gold-gradient text-primary-foreground rounded-xl font-semibold text-lg alpine-glow hover:shadow-xl transition-all duration-300 luxury-hover">
              Design Custom Experience
            </button>
            
            <button className="px-8 py-4 alpine-blur text-white rounded-xl font-semibold text-lg luxury-border hover:bg-white/10 transition-all duration-300">
              Speak with Concierge
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}