import type { Metadata } from "next";
import Navbar from "@/components/luxury/Navbar";
import Footer from "@/components/luxury/Footer";
import { Camera, MapPin, Calendar, Users, Play, Heart, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery - Alpine Luxe Mountain Adventures",
  description: "Explore stunning photography from our luxury mountain adventures. View breathtaking alpine landscapes, exclusive experiences, and unforgettable moments from our premium destinations.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["alpine luxe gallery", "mountain photography", "luxury travel photos", "alpine landscapes", "adventure photography", "mountain expedition photos"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Gallery - Alpine Luxe Mountain Adventures",
    description: "Explore stunning photography from our luxury mountain adventures with breathtaking alpine landscapes and exclusive experiences.",
    url: "https://codestam.com",
    siteName: "Alpine Luxe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - Alpine Luxe Mountain Adventures",
    description: "Explore stunning photography from our luxury mountain adventures with breathtaking alpine landscapes and exclusive experiences.",
  },
};

const categories = [
  { name: "All", count: 156 },
  { name: "Destinations", count: 48 },
  { name: "Experiences", count: 32 },
  { name: "Accommodations", count: 28 },
  { name: "Dining", count: 24 },
  { name: "Adventures", count: 24 }
];

const galleryItems = [
  {
    id: 1,
    title: "Matterhorn Helicopter Tour",
    location: "Zermatt, Switzerland",
    category: "Experiences",
    date: "March 2024",
    image: "https://maxm-imggenurl.web.val.run/matterhorn helicopter tour, luxury helicopter, swiss alps, aerial view, dramatic mountain peaks, golden hour",
    isVideo: false,
    likes: 234,
    description: "Soaring above the iconic Matterhorn in our luxury helicopter during golden hour."
  },
  {
    id: 2,
    title: "Luxury Alpine Lodge",
    location: "Banff, Canada",
    category: "Accommodations",
    date: "February 2024",
    image: "https://maxm-imggenurl.web.val.run/luxury alpine lodge, banff national park, mountain lake, premium accommodation, canadian rockies, winter",
    isVideo: false,
    likes: 189,
    description: "Our exclusive wilderness lodge overlooking pristine mountain lakes."
  },
  {
    id: 3,
    title: "Mountain Peak Dining",
    location: "Chamonix, France",
    category: "Dining",
    date: "January 2024",
    image: "https://maxm-imggenurl.web.val.run/mountain peak dining, michelin restaurant, mont blanc view, fine dining, luxury service, alpine setting",
    isVideo: false,
    likes: 312,
    description: "Michelin-starred dining experience with panoramic Mont Blanc views."
  },
  {
    id: 4,
    title: "Everest Base Camp Luxury",
    location: "Nepal",
    category: "Adventures",
    date: "April 2024",
    image: "https://maxm-imggenurl.web.val.run/everest base camp, luxury expedition, himalayan peaks, premium tents, mountain climbing, dramatic landscape",
    isVideo: true,
    likes: 445,
    description: "Our luxury base camp setup with the world's highest peaks as backdrop."
  },
  {
    id: 5,
    title: "Swiss Alpine Spa",
    location: "St. Moritz, Switzerland",
    category: "Experiences",
    date: "December 2023",
    image: "https://maxm-imggenurl.web.val.run/alpine spa, luxury wellness, mountain views, thermal baths, swiss alps, relaxation, premium spa",
    isVideo: false,
    likes: 267,
    description: "Rejuvenating spa treatments with breathtaking alpine vistas."
  },
  {
    id: 6,
    title: "Patagonia Wilderness",
    location: "Torres del Paine, Chile",
    category: "Destinations",
    date: "November 2023",
    image: "https://maxm-imggenurl.web.val.run/torres del paine, patagonia wilderness, dramatic granite peaks, luxury eco-lodge, pristine nature",
    isVideo: false,
    likes: 198,
    description: "The raw beauty of Patagonia's most dramatic landscapes."
  },
  {
    id: 7,
    title: "Japanese Alps Ryokan",
    location: "Hakuba, Japan",
    category: "Accommodations",
    date: "March 2024",
    image: "https://maxm-imggenurl.web.val.run/japanese alps ryokan, traditional architecture, hot springs, snow-covered mountains, luxury accommodation, zen garden",
    isVideo: false,
    likes: 156,
    description: "Traditional luxury ryokan nestled in the Japanese Alps."
  },
  {
    id: 8,
    title: "Northern Lights Adventure",
    location: "Lofoten, Norway",
    category: "Experiences",
    date: "February 2024",
    image: "https://maxm-imggenurl.web.val.run/northern lights, lofoten islands, aurora borealis, dramatic cliffs, luxury accommodation, arctic landscape",
    isVideo: true,
    likes: 389,
    description: "Witnessing the magical Northern Lights from our luxury Arctic lodge."
  },
  {
    id: 9,
    title: "Glacier Expedition",
    location: "Patagonia, Argentina",
    category: "Adventures",
    date: "January 2024",
    image: "https://maxm-imggenurl.web.val.run/glacier expedition, patagonia ice field, luxury trekking, professional guides, dramatic ice formations",
    isVideo: false,
    likes: 223,
    description: "Exploring ancient glaciers with our expert mountain guides."
  },
  {
    id: 10,
    title: "Alpine Photography Workshop",
    location: "Dolomites, Italy",
    category: "Experiences",
    date: "October 2023",
    image: "https://maxm-imggenurl.web.val.run/dolomites photography, alpine landscape, dramatic peaks, golden hour, professional photography, mountain workshop",
    isVideo: false,
    likes: 178,
    description: "Capturing the dramatic beauty of the Dolomites during our photography expedition."
  },
  {
    id: 11,
    title: "Luxury Mountain Dining",
    location: "Verbier, Switzerland",
    category: "Dining",
    date: "December 2023",
    image: "https://maxm-imggenurl.web.val.run/verbier mountain restaurant, luxury dining, swiss alps, gourmet cuisine, panoramic views, fine dining",
    isVideo: false,
    likes: 245,
    description: "Gourmet cuisine served at altitude with spectacular alpine views."
  },
  {
    id: 12,
    title: "Himalayan Sunrise",
    location: "Annapurna, Nepal",
    category: "Destinations",
    date: "April 2024",
    image: "https://maxm-imggenurl.web.val.run/himalayan sunrise, annapurna range, dramatic peaks, golden light, mountain expedition, breathtaking vista",
    isVideo: true,
    likes: 567,
    description: "Witnessing a spectacular Himalayan sunrise from our luxury base camp."
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Adventure <span className="text-gradient-gold">Gallery</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Explore breathtaking moments from our luxury mountain adventures. Each image tells a story 
            of extraordinary experiences in the world&apos;s most spectacular alpine destinations.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-primary" />
              <span>Professional Photography</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>50+ Destinations</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Real Guest Experiences</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'gold-gradient text-primary-foreground alpine-glow' 
                    : 'bg-background hover:bg-primary/10 text-foreground hover:text-primary luxury-border'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group bg-card rounded-2xl overflow-hidden luxury-shadow luxury-hover luxury-border cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Video Indicator */}
                  {item.isVideo && (
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 alpine-blur rounded-full flex items-center justify-center">
                      <Play className="h-5 w-5 text-white fill-current" />
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 alpine-blur rounded-full text-white text-xs font-medium">
                    {item.category}
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full">
                      <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                      <div className="flex items-center space-x-2 text-white/80 text-sm mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                      <p className="text-white/90 text-sm mb-3">{item.description}</p>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                            <Heart className="h-4 w-4 text-white" />
                          </button>
                          <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
                            <Share2 className="h-4 w-4 text-white" />
                          </button>
                        </div>
                        <div className="flex items-center space-x-1 text-white/80 text-sm">
                          <Heart className="h-4 w-4 fill-current" />
                          <span>{item.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button className="px-8 py-4 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 luxury-border">
            Load More Images
          </button>
          <p className="text-muted-foreground text-sm mt-4">
            Showing 12 of 156 images
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 alpine-blur rounded-full luxury-border mb-8">
            <Camera className="h-5 w-5 text-primary" />
            <span className="text-white font-medium">Create Your Own Story</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Create Your Own <span className="text-gradient-gold">Mountain Memories?</span>
          </h2>
          
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of adventurers who have experienced the magic of our luxury mountain destinations. 
            Your extraordinary story is waiting to be written.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 gold-gradient text-primary-foreground rounded-xl font-semibold text-lg alpine-glow hover:shadow-xl transition-all duration-300 luxury-hover">
              Plan Your Adventure
            </button>
            
            <button className="px-8 py-4 alpine-blur text-white rounded-xl font-semibold text-lg luxury-border hover:bg-white/10 transition-all duration-300">
              View Destinations
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}