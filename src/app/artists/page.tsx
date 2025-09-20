import type { Metadata } from "next";
import Navbar from "@/components/cyberpunk/Navbar";
import Footer from "@/components/cyberpunk/Footer";
import { Award, Instagram, Twitter, Globe, Heart, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Artists — ChromaSpace | Digital Art Creators",
  description: "Meet the visionary digital artists and creators who are pushing the boundaries of art and technology.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const artists = [
  {
    id: 1,
    name: "Alex Chen",
    title: "Digital Visionary",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Pioneering the intersection of AI and traditional art, Alex creates mesmerizing digital experiences that challenge our perception of reality.",
    artworks: 47,
    followers: "125K",
    verified: true,
    specialties: ["AI Art", "Abstract", "Interactive"],
    featured: "https://maxm-imggenurl.web.val.run/abstract digital art with flowing colors and musical notes, cyberpunk style",
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    title: "Neural Artist",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: "Maya combines machine learning algorithms with human creativity to produce stunning visual narratives that explore the future of consciousness.",
    artworks: 32,
    followers: "89K",
    verified: true,
    specialties: ["Neural Networks", "Sci-Fi", "Experimental"],
    featured: "https://maxm-imggenurl.web.val.run/futuristic neural network visualization with glowing connections, digital art",
  },
  {
    id: 3,
    name: "Jordan Kim",
    title: "Quantum Creator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Jordan&apos;s work explores the quantum realm through digital art, creating immersive experiences that visualize the unseen forces of the universe.",
    artworks: 28,
    followers: "156K",
    verified: true,
    specialties: ["Quantum Art", "Physics", "Immersive"],
    featured: "https://maxm-imggenurl.web.val.run/quantum physics inspired digital art with particle effects and cosmic colors",
  },
  {
    id: 4,
    name: "Luna Park",
    title: "Cyber Nature",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Luna creates digital ecosystems that blend organic forms with technological elements, exploring the relationship between nature and digital worlds.",
    artworks: 41,
    followers: "98K",
    verified: true,
    specialties: ["Nature", "Cyberpunk", "Ecosystems"],
    featured: "https://maxm-imggenurl.web.val.run/cyberpunk garden with neon plants and digital flowers, futuristic nature",
  },
  {
    id: 5,
    name: "Kai Zhang",
    title: "Data Artist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Kai transforms raw data into beautiful visual narratives, creating art that makes the invisible digital world tangible and meaningful.",
    artworks: 35,
    followers: "112K",
    verified: true,
    specialties: ["Data Visualization", "Abstract", "Information"],
    featured: "https://maxm-imggenurl.web.val.run/flowing data streams with binary code and neon colors, digital art",
  },
  {
    id: 6,
    name: "Sofia Martinez",
    title: "Tech Visionary",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    bio: "Sofia explores the intersection of technology and humanity through her digital art, creating works that question our relationship with machines.",
    artworks: 29,
    followers: "87K",
    verified: true,
    specialties: ["Tech Art", "Human-Machine", "Futuristic"],
    featured: "https://maxm-imggenurl.web.val.run/virtual reality headset with holographic interface, futuristic tech art",
  },
];

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              Digital <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Artists</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionary creators who are redefining art through technology and pushing the boundaries of digital expression
            </p>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <div key={artist.id} className="group">
                <div className="digital-surface rounded-2xl p-8 hover:neon-glow transition-all duration-500 h-full">
                  {/* Artist Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="relative">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                      />
                      {artist.verified && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Award className="w-3 h-3 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-foreground mb-1">
                        {artist.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {artist.title}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{artist.artworks} artworks</span>
                        <span>{artist.followers} followers</span>
                      </div>
                    </div>
                  </div>

                  {/* Featured Artwork */}
                  <div className="mb-6">
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img
                        src={artist.featured}
                        alt={`Featured work by ${artist.name}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {artist.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {artist.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-3 mb-6">
                    <button className="p-2 bg-secondary/50 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                      <Instagram className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-secondary/50 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-secondary/50 rounded-lg text-muted-foreground hover:text-primary transition-colors">
                      <Globe className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>2.5K</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>15.2K</span>
                      </div>
                    </div>
                    <span className="text-primary font-semibold">Featured</span>
                  </div>

                  {/* View Profile Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-foreground font-medium rounded-xl hover:from-primary/20 hover:to-accent/20 transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300">
              Discover More Artists
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}