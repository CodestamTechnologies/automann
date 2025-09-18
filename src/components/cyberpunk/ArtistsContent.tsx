"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Users, 
  Palette, 
  Trophy,
  ExternalLink,
  Heart,
  Eye,
  Star,
  Filter,
  Grid3X3,
  List,
  MapPin,
  Award
} from "lucide-react";

const ArtistsContent = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Artists", count: 247 },
    { id: "ai-artists", name: "AI Artists", count: 89 },
    { id: "3d-artists", name: "3D Artists", count: 67 },
    { id: "digital-painters", name: "Digital Painters", count: 45 },
    { id: "generative", name: "Generative", count: 46 },
  ];

  const artists = [
    {
      id: 1,
      name: "CyberVision AI",
      title: "Neural Network Artist",
      bio: "Pioneering the fusion of artificial intelligence and digital art creation through advanced neural networks and machine learning algorithms.",
      avatar: "https://maxm-imggenurl.web.val.run/cyberpunk AI robot face with glowing blue eyes, digital art portrait, futuristic",
      coverImage: "https://maxm-imggenurl.web.val.run/cyberpunk cityscape with neon lights and digital rain, wide banner format",
      location: "Digital Realm",
      joinedDate: "2024-01-15",
      followers: 15420,
      following: 234,
      artworks: 127,
      totalViews: 2340000,
      totalSales: "45.7 ETH",
      rating: 4.9,
      specialties: ["AI Art", "Neural Networks", "Generative Design"],
      category: "ai-artists",
      featured: true,
      verified: true,
      achievements: ["Top Creator 2024", "AI Pioneer", "Community Choice"],
      recentWorks: [
        "https://maxm-imggenurl.web.val.run/cyberpunk neon cityscape, AI generated",
        "https://maxm-imggenurl.web.val.run/digital consciousness visualization",
        "https://maxm-imggenurl.web.val.run/neural network art pattern",
      ]
    },
    {
      id: 2,
      name: "Quantum Artist",
      title: "3D Holographic Designer",
      bio: "Creating immersive 3D experiences that blur the line between reality and digital through quantum-inspired holographic art.",
      avatar: "https://maxm-imggenurl.web.val.run/holographic human silhouette with quantum particles, glowing profile picture",
      coverImage: "https://maxm-imggenurl.web.val.run/quantum physics visualization with particles and energy waves, banner format",
      location: "Quantum Space",
      joinedDate: "2024-01-20",
      followers: 8930,
      following: 156,
      artworks: 89,
      totalViews: 1560000,
      totalSales: "32.4 ETH",
      rating: 4.8,
      specialties: ["3D Art", "Holography", "VR Experiences"],
      category: "3d-artists",
      featured: true,
      verified: true,
      achievements: ["3D Master", "Innovation Award", "Rising Star"],
      recentWorks: [
        "https://maxm-imggenurl.web.val.run/holographic 3D sculpture floating",
        "https://maxm-imggenurl.web.val.run/quantum particle visualization 3D",
        "https://maxm-imggenurl.web.val.run/transparent holographic entity",
      ]
    },
    {
      id: 3,
      name: "Neural Network",
      title: "Abstract Data Visualizer",
      bio: "Transforming complex data into beautiful abstract art through machine learning and advanced visualization techniques.",
      avatar: "https://maxm-imggenurl.web.val.run/abstract neural network brain made of glowing connections, profile picture",
      coverImage: "https://maxm-imggenurl.web.val.run/flowing data streams and neural connections, abstract digital art banner",
      location: "Data Dimension",
      joinedDate: "2024-02-01",
      followers: 12750,
      following: 89,
      artworks: 203,
      totalViews: 1890000,
      totalSales: "28.9 ETH",
      rating: 4.7,
      specialties: ["Data Art", "Machine Learning", "Abstract Design"],
      category: "ai-artists",
      featured: false,
      verified: true,
      achievements: ["Data Wizard", "Abstract Master", "Tech Innovator"],
      recentWorks: [
        "https://maxm-imggenurl.web.val.run/abstract data visualization art",
        "https://maxm-imggenurl.web.val.run/neural network connections glowing",
        "https://maxm-imggenurl.web.val.run/machine learning pattern art",
      ]
    },
    {
      id: 4,
      name: "Digital Prophet",
      title: "Cyberpunk Visionary",
      bio: "Crafting the visual language of the future through cyberpunk aesthetics and prophetic digital landscapes.",
      avatar: "https://maxm-imggenurl.web.val.run/cyberpunk prophet with glowing eyes and digital tattoos, portrait",
      coverImage: "https://maxm-imggenurl.web.val.run/futuristic cyberpunk cityscape with neon prophecies, banner",
      location: "Neo Tokyo",
      joinedDate: "2024-01-05",
      followers: 18650,
      following: 312,
      artworks: 156,
      totalViews: 2890000,
      totalSales: "67.3 ETH",
      rating: 4.9,
      specialties: ["Cyberpunk Art", "Digital Painting", "Concept Art"],
      category: "digital-painters",
      featured: true,
      verified: true,
      achievements: ["Cyberpunk Legend", "Vision Master", "Top Seller"],
      recentWorks: [
        "https://maxm-imggenurl.web.val.run/cyberpunk prophet digital painting",
        "https://maxm-imggenurl.web.val.run/neon future cityscape art",
        "https://maxm-imggenurl.web.val.run/digital prophecy visualization",
      ]
    },
    {
      id: 5,
      name: "Code Painter",
      title: "Generative Code Artist",
      bio: "Bridging the gap between programming and art by creating beautiful generative pieces through algorithmic creativity.",
      avatar: "https://maxm-imggenurl.web.val.run/programmer artist with code flowing around face, digital portrait",
      coverImage: "https://maxm-imggenurl.web.val.run/generative code art with flowing algorithms, colorful banner",
      location: "Code Space",
      joinedDate: "2024-02-15",
      followers: 9340,
      following: 178,
      artworks: 234,
      totalViews: 1450000,
      totalSales: "19.8 ETH",
      rating: 4.6,
      specialties: ["Generative Art", "Algorithm Art", "Code Visualization"],
      category: "generative",
      featured: false,
      verified: false,
      achievements: ["Code Artist", "Algorithm Master", "Creative Coder"],
      recentWorks: [
        "https://maxm-imggenurl.web.val.run/generative algorithm art pattern",
        "https://maxm-imggenurl.web.val.run/code visualization artwork",
        "https://maxm-imggenurl.web.val.run/algorithmic generative design",
      ]
    },
    {
      id: 6,
      name: "Hologram Master",
      title: "Light Sculptor",
      bio: "Sculpting with pure light and energy to create ethereal holographic experiences that transcend physical boundaries.",
      avatar: "https://maxm-imggenurl.web.val.run/holographic artist made of light particles, glowing portrait",
      coverImage: "https://maxm-imggenurl.web.val.run/light sculpture holographic art installation, banner format",
      location: "Light Realm",
      joinedDate: "2024-01-28",
      followers: 11200,
      following: 145,
      artworks: 78,
      totalViews: 1780000,
      totalSales: "41.2 ETH",
      rating: 4.8,
      specialties: ["Light Art", "Holographic Design", "Energy Sculpture"],
      category: "3d-artists",
      featured: false,
      verified: true,
      achievements: ["Light Master", "Hologram Pioneer", "Energy Artist"],
      recentWorks: [
        "https://maxm-imggenurl.web.val.run/holographic light sculpture art",
        "https://maxm-imggenurl.web.val.run/energy light installation",
        "https://maxm-imggenurl.web.val.run/pure light holographic art",
      ]
    },
  ];

  const filteredArtists = artists.filter(artist => {
    const matchesCategory = selectedCategory === "all" || artist.category === selectedCategory;
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artist.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artist.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 via-background to-primary/10 cyber-grid">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-4 text-accent border-accent/50">
              <Users className="mr-2 h-4 w-4" />
              Featured Artists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-accent">DIGITAL</span>{" "}
              <span className="neon-text glitch-effect" data-text="CREATORS">CREATORS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionary artists pushing the boundaries of digital creativity. 
              Each brings their unique perspective to our cyberpunk universe through cutting-edge technology and boundless imagination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search artists, specialties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card/50 border-primary/30 focus:border-primary"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-primary hover:bg-primary/80 neon-glow"
                      : "border-primary/30 hover:border-primary/50"
                  }`}
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-primary hover:bg-primary/80" : ""}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-primary hover:bg-primary/80" : ""}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {selectedCategory === "all" ? "All Artists" : categories.find(c => c.id === selectedCategory)?.name}
              <span className="text-muted-foreground ml-2">({filteredArtists.length})</span>
            </h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>Sorted by popularity</span>
            </div>
          </div>

          <div className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
          }>
            {filteredArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="group overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  {/* Cover Image */}
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={artist.coverImage}
                      alt={`${artist.name} cover`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {artist.featured && (
                        <Badge className="bg-accent text-accent-foreground">
                          <Star className="mr-1 h-3 w-3" />
                          Featured
                        </Badge>
                      )}
                      {artist.verified && (
                        <Badge className="bg-primary text-primary-foreground">
                          <Award className="mr-1 h-3 w-3" />
                          Verified
                        </Badge>
                      )}
                    </div>

                    {/* Recent Works Preview */}
                    <div className="absolute bottom-4 right-4 flex -space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {artist.recentWorks.slice(0, 3).map((work, workIndex) => (
                        <div
                          key={workIndex}
                          className="w-8 h-8 rounded border-2 border-background overflow-hidden"
                        >
                          <img
                            src={work}
                            alt={`Recent work ${workIndex + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <CardContent className="p-6 relative">
                    {/* Avatar */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16 border-2 border-primary/50 -mt-8 relative z-10">
                          <AvatarImage src={artist.avatar} alt={artist.name} />
                          <AvatarFallback className="bg-primary/20 text-primary">
                            {artist.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {artist.name}
                            </h3>
                            {artist.verified && (
                              <Award className="h-4 w-4 text-primary" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{artist.title}</p>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            {artist.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        {artist.rating}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                      {artist.bio}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {artist.specialties.slice(0, 3).map((specialty) => (
                        <Badge
                          key={specialty}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className="text-lg font-bold text-primary">
                          {artist.followers.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center justify-center">
                          <Users className="h-3 w-3 mr-1" />
                          Followers
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-accent">
                          {artist.artworks}
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center justify-center">
                          <Palette className="h-3 w-3 mr-1" />
                          Artworks
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-chart-3">
                          {(artist.totalViews / 1000000).toFixed(1)}M
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center justify-center">
                          <Eye className="h-3 w-3 mr-1" />
                          Views
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {artist.achievements.slice(0, 2).map((achievement) => (
                          <Badge
                            key={achievement}
                            variant="outline"
                            className="text-xs border-accent/30 text-accent"
                          >
                            <Trophy className="h-3 w-3 mr-1" />
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button className="flex-1 bg-primary hover:bg-primary/80 neon-glow">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm" className="px-3">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredArtists.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">👨‍🎨</div>
              <h3 className="text-2xl font-bold mb-2">No artists found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}>
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-card/20 backdrop-blur-sm rounded-lg border border-primary/20 p-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-primary">Join</span> Our Creative Community
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ready to showcase your digital art? Join thousands of artists already creating 
                the future of digital expression in our cyberpunk universe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/80 neon-glow">
                  <Palette className="mr-2 h-5 w-5" />
                  Become an Artist
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Users className="mr-2 h-5 w-5" />
                  Explore Community
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArtistsContent;