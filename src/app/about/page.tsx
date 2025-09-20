import type { Metadata } from "next";
import Navbar from "@/components/vintage/Navbar";
import Footer from "@/components/vintage/Footer";
import { Award, Users, Shield, Star, MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Horologium | Expert Horologists & Vintage Watch Specialists",
  description: "Learn about our team of certified horologists and our 50+ year legacy in vintage watch authentication, restoration, and acquisition services.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
};

const team = [
  {
    name: "Dr. Marcus Chen",
    role: "Chief Horologist",
    experience: "35 years",
    specialties: ["Patek Philippe", "Rolex", "Vacheron Constantin"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Dr. Chen holds a PhD in Mechanical Engineering and has been authenticating vintage timepieces for over three decades. He is a certified member of the American Watchmakers-Clockmakers Institute.",
  },
  {
    name: "Isabella Rodriguez",
    role: "Restoration Specialist",
    experience: "28 years",
    specialties: ["Omega", "Jaeger-LeCoultre", "Cartier"],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    bio: "Isabella is a master watchmaker with extensive experience in restoring vintage timepieces. She has worked with some of the world&apos;s most prestigious watch manufacturers.",
  },
  {
    name: "James Mitchell",
    role: "Acquisition Director",
    experience: "22 years",
    specialties: ["Military Watches", "American Heritage", "Rare Finds"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "James has built an extensive network of trusted dealers and private collectors worldwide. He specializes in sourcing rare and historically significant timepieces.",
  },
];

const certifications = [
  {
    name: "American Watchmakers-Clockmakers Institute",
    description: "Certified Master Watchmaker",
    year: "1985",
  },
  {
    name: "Fédération de l&apos;Industrie Horlogère Suisse",
    description: "Swiss Horological Certification",
    year: "1990",
  },
  {
    name: "British Horological Institute",
    description: "Fellow of the British Horological Institute",
    year: "1995",
  },
  {
    name: "International Watch & Jewelry Guild",
    description: "Certified Appraiser",
    year: "2000",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              About Horologium
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              For over five decades, we have been the trusted authority in vintage timepiece 
              authentication, restoration, and acquisition, serving collectors worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1972 by master horologist Dr. Marcus Chen, Horologium began as a small 
                  workshop dedicated to the preservation and authentication of vintage timepieces. 
                  What started as a passion project has grown into one of the world&apos;s most 
                  respected horological institutions.
                </p>
                <p>
                  Our commitment to excellence and authenticity has earned us the trust of collectors, 
                  museums, and auction houses worldwide. We have authenticated over 2,500 timepieces 
                  and restored countless others to their former glory.
                </p>
                <p>
                  Today, our team of certified horologists continues to uphold the highest standards 
                  of craftsmanship and expertise, ensuring that every timepiece that passes through 
                  our hands receives the meticulous attention it deserves.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523170335258-f5c6c6b0e0c0?w=800&h=600&fit=crop&crop=center"
                alt="Our workshop"
                className="rounded-2xl elegant-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the certified horologists and master craftspeople who make Horologium 
              the trusted authority in vintage timepieces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="minimal-card rounded-2xl p-8 text-center hover:elegant-shadow transition-all duration-300">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.experience} experience
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Specialties:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team holds the highest certifications in horology and is recognized 
              by leading industry organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="minimal-card rounded-xl p-6 text-center hover:elegant-shadow transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {cert.description}
                </p>
                <p className="text-xs text-accent font-medium">
                  Since {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Horologium.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Authenticity
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We never compromise on authenticity. Every timepiece is thoroughly 
                examined and verified before any service is performed.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Excellence
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We strive for excellence in every aspect of our work, from authentication 
                to restoration, ensuring the highest quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Trust
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We build lasting relationships with our clients through transparency, 
                integrity, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to discuss your vintage timepiece needs? Our expert team is here to help.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-center">
                123 Horological Avenue<br />
                New York, NY 10001
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">
                +1 (555) 123-4567
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground">
                info@horologium.com
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Schedule Consultation
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-all duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}