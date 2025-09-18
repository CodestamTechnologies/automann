"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Star, 
  Users, 
  Palette, 
  Trophy,
  ExternalLink,
  Heart,
  Eye
} from "lucide-react";

const ArtistSpotlight = () => {
  const artists = [
    {
      id: 1,
      name: "CyberVision AI",
      title: "Neural Network Artist",
      avatar: "https://maxm-imggenurl.web.val.run/cyberpunk AI robot face with glowing blue eyes, digital art portrait, futuristic",
      coverImage: "https://maxm-imggenurl.web.val.run/cyberpunk cityscape with neon lights and digital rain, wide banner format",
      bio: "Pioneering the fusion of artificial intelligence and digital art creation",
      followers: 15420,
      artworks: 127,
      totalViews: 2340000,
      rating: 4.9,
      specialties: ["AI Art", "Neural Networks", "Generative Design"],
      featured: true,
    },
    {
      id: 2,
      name: "Quantum Artist",
      title: "3D Holographic Designer",
      avatar: "https://maxm-imggenurl.web.val.run/holographic human silhouette with quantum particles, glowing profile picture",
      coverImage: "https://maxm-imggenurl.web.val.run/quantum physics visualization with particles and energy waves, banner format",
      bio: "Creating immersive 3D experiences that blur the line between reality and digital",
      followers: 8930,
      artworks: 89,
      totalViews: 1560000,
      rating: 4.8,
      specialties: ["3D Art", "Holography", "VR Experiences"],
      featured: false,
    },
    {
      id: 3,
      name: "Neural Network",
      title: "Abstract Data Visualizer",
      avatar: "https://maxm-imggenurl.web.val.run/abstract neural network brain made of glowing connections, profile picture",
      coverImage: "https://maxm-imggenurl.web.val.run/flowing data streams and neural connections, abstract digital art banner",
      bio: "Transforming complex data into beautiful abstract art through machine learning",
      followers: 12750,
      artworks: 203,
      totalViews: 1890000,
      rating: 4.7,
      specialties: ["Data Art", "Machine Learning", "Abstract Design"],
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/10 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/50">
            <Trophy className="mr-2 h-4 w-4" />
            Artist Spotlight
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-accent">Featured</span>{" "}
            <span className="neon-text">Creators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary artists pushing the boundaries of digital creativity. 
            Each brings their unique perspective to our cyberpunk universe.
          </p>
        </motion.div>

        {/* Artists Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {artists.map((artist) => (
            <motion.div 
              key={artist.id} 
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
                  
                  {artist.featured && (
                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                      <Star className="mr-1 h-3 w-3" />
                      Featured
                    </Badge>
                  )}
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
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {artist.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{artist.title}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      {artist.rating}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                    {artist.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {artist.specialties.map((specialty) => (
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
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
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
  );
};

export default ArtistSpotlight;