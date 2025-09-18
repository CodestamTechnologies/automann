import type { Metadata } from "next";
import Navbar from "@/components/luxury/Navbar";
import Footer from "@/components/luxury/Footer";
import { 
  Mountain, 
  Award, 
  Users, 
  Globe, 
  Shield, 
  Heart,
  Star,
  Clock,
  Target,
  Compass
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Alpine Luxe - Premium Mountain Adventure Company",
  description: "Discover the story behind Alpine Luxe, the world&apos;s premier luxury mountain adventure company. Learn about our mission, values, team, and commitment to exceptional alpine experiences.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["about alpine luxe", "luxury mountain company", "premium adventure travel", "mountain expedition company", "luxury travel story"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "About Alpine Luxe - Premium Mountain Adventure Company",
    description: "Discover the story behind Alpine Luxe, the world&apos;s premier luxury mountain adventure company with 15+ years of excellence.",
    url: "https://codestam.com",
    siteName: "Alpine Luxe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Alpine Luxe - Premium Mountain Adventure Company",
    description: "Discover the story behind Alpine Luxe, the world&apos;s premier luxury mountain adventure company with 15+ years of excellence.",
  },
};

const stats = [
  { icon: Mountain, value: "50+", label: "Premium Destinations" },
  { icon: Users, value: "10,000+", label: "Satisfied Adventurers" },
  { icon: Award, value: "25+", label: "Industry Awards" },
  { icon: Clock, value: "15+", label: "Years of Excellence" }
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue perfection in every detail, from the initial consultation to the final farewell, ensuring each experience exceeds expectations."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety is our paramount concern. We employ the highest safety standards, expert guides, and comprehensive risk management protocols."
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Every adventure is tailored to your unique preferences, creating deeply personal and meaningful mountain experiences."
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "We&apos;re committed to preserving the pristine mountain environments we explore for future generations of adventurers."
  }
];

const team = [
  {
    name: "Marcus Steinberg",
    title: "Founder &amp; CEO",
    image: "https://maxm-imggenurl.web.val.run/professional mountain guide, CEO, luxury travel executive, alpine background, confident leader",
    bio: "Former Olympic alpine skier turned luxury travel entrepreneur with 20+ years in premium mountain adventures.",
    expertise: ["Mountain Guiding", "Luxury Travel", "Business Strategy"]
  },
  {
    name: "Isabella Chen",
    title: "Head of Experiences",
    image: "https://maxm-imggenurl.web.val.run/luxury travel director, asian woman, mountain expedition leader, professional portrait",
    bio: "Award-winning experience designer who has crafted bespoke adventures for royalty and celebrities worldwide.",
    expertise: ["Experience Design", "VIP Services", "Cultural Immersion"]
  },
  {
    name: "James Richardson",
    title: "Safety &amp; Operations Director",
    image: "https://maxm-imggenurl.web.val.run/mountain safety expert, operations director, rescue specialist, professional mountain guide",
    bio: "Former mountain rescue specialist and IFMGA certified guide with expertise in high-altitude operations and safety protocols.",
    expertise: ["Mountain Safety", "Risk Management", "Emergency Response"]
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                About <span className="text-gradient-gold">Alpine Luxe</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                For over 15 years, Alpine Luxe has been the world&apos;s premier luxury mountain adventure company, 
                crafting extraordinary experiences for the most discerning travelers who seek the perfect blend 
                of adventure and luxury in the world&apos;s most breathtaking mountain destinations.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-primary fill-current" />
                  <Star className="h-5 w-5 text-primary fill-current" />
                  <Star className="h-5 w-5 text-primary fill-current" />
                  <Star className="h-5 w-5 text-primary fill-current" />
                  <Star className="h-5 w-5 text-primary fill-current" />
                </div>
                <span className="text-white/80">Rated 4.9/5 by our guests</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://maxm-imggenurl.web.val.run/luxury mountain lodge, alpine luxe headquarters, premium architecture, mountain backdrop, elegant design"
                alt="Alpine Luxe Headquarters"
                className="w-full h-96 object-cover rounded-2xl luxury-shadow"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 gold-gradient rounded-2xl flex items-center justify-center alpine-glow">
                <Mountain className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="text-3xl font-bold text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://maxm-imggenurl.web.val.run/mountain climbing history, vintage mountaineering, alpine expedition, historical mountain adventure, black and white photography"
                alt="Our Mountain Heritage"
                className="w-full h-96 object-cover rounded-2xl luxury-shadow"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Alpine Luxe was born from a simple yet profound vision: to make the world&apos;s most spectacular 
                  mountain destinations accessible to those who appreciate both adventure and luxury. Founded in 2009 
                  by former Olympic alpine skier Marcus Steinberg, our company emerged from a passion for the mountains 
                  and a commitment to excellence.
                </p>
                <p>
                  What started as a boutique guiding service in the Swiss Alps has evolved into the world&apos;s most 
                  prestigious mountain adventure company. We&apos;ve pioneered luxury mountain experiences, from helicopter-accessed 
                  dining at 4,000 meters to five-star base camps on Everest.
                </p>
                <p>
                  Today, Alpine Luxe operates in over 50 destinations across six continents, maintaining our founding 
                  principles of safety, sustainability, and uncompromising quality. Every adventure we craft is a testament 
                  to our belief that the mountains should be experienced in their full majesty, with comfort and style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide every decision we make and every experience we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 luxury-shadow luxury-hover luxury-border">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center alpine-glow">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Meet Our <span className="text-gradient-gold">Leadership Team</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our experienced leadership team combines decades of mountain expertise with luxury hospitality excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 alpine-blur rounded-2xl p-6 luxury-border luxury-hover">
                <div className="text-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 luxury-border"
                  />
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary font-medium">{member.title}</p>
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 alpine-blur rounded-full luxury-border mb-8">
            <Compass className="h-5 w-5 text-primary" />
            <span className="text-foreground font-medium">Our Mission</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Redefining Mountain <span className="text-gradient-gold">Adventure</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            To create transformative mountain experiences that inspire, challenge, and rejuvenate our guests while 
            preserving the pristine beauty of the world&apos;s most spectacular alpine environments for future generations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Adventure</h3>
              <p className="text-muted-foreground text-sm">Pushing boundaries while ensuring safety and comfort</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Luxury</h3>
              <p className="text-muted-foreground text-sm">Uncompromising quality in every aspect of your journey</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Sustainability</h3>
              <p className="text-muted-foreground text-sm">Protecting the environments we explore and cherish</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}