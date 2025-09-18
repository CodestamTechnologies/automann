import type { Metadata } from "next";
import Navbar from "@/components/luxury/Navbar";
import Footer from "@/components/luxury/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Calendar,
  Globe,
  Headphones,
  Send,
  Star
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Alpine Luxe - Luxury Mountain Adventure Concierge",
  description: "Contact Alpine Luxe for personalized luxury mountain adventures. Our expert concierge team is available 24/7 to plan your perfect alpine experience with unparalleled service.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["contact alpine luxe", "luxury travel concierge", "mountain adventure booking", "premium travel consultation", "alpine luxe contact"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Contact Alpine Luxe - Luxury Mountain Adventure Concierge",
    description: "Contact our expert concierge team for personalized luxury mountain adventures with 24/7 support and unparalleled service.",
    url: "https://codestam.com",
    siteName: "Alpine Luxe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Alpine Luxe - Luxury Mountain Adventure Concierge",
    description: "Contact our expert concierge team for personalized luxury mountain adventures with 24/7 support and unparalleled service.",
  },
};

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Speak directly with our concierge team",
    details: ["+1 (555) 123-4567", "+41 27 966 8100 (Switzerland)"],
    availability: "24/7 Available"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us your adventure requirements",
    details: ["concierge@alpineluxe.com", "bookings@alpineluxe.com"],
    availability: "Response within 2 hours"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Instant support for immediate assistance",
    details: ["Available on website", "WhatsApp: +1 (555) 123-4567"],
    availability: "24/7 Available"
  },
  {
    icon: Calendar,
    title: "Video Consultation",
    description: "Personal consultation with our experts",
    details: ["Zoom/Teams meetings", "In-person at select locations"],
    availability: "By appointment"
  }
];

const offices = [
  {
    city: "Zermatt",
    country: "Switzerland",
    address: "Bahnhofstrasse 15, 3920 Zermatt",
    phone: "+41 27 966 8100",
    email: "zermatt@alpineluxe.com",
    image: "https://maxm-imggenurl.web.val.run/zermatt office, luxury travel agency, matterhorn view, swiss alps, premium office interior",
    description: "Our flagship office in the heart of the Swiss Alps"
  },
  {
    city: "Aspen",
    country: "United States",
    address: "520 E Durant Ave, Aspen, CO 81611",
    phone: "+1 (970) 925-3000",
    email: "aspen@alpineluxe.com",
    image: "https://maxm-imggenurl.web.val.run/aspen office, luxury mountain office, colorado rockies, premium travel agency, ski resort",
    description: "Serving North American mountain destinations"
  },
  {
    city: "Chamonix",
    country: "France",
    address: "123 Rue du Docteur Paccard, 74400 Chamonix",
    phone: "+33 4 50 53 2100",
    email: "chamonix@alpineluxe.com",
    image: "https://maxm-imggenurl.web.val.run/chamonix office, mont blanc view, french alps, luxury travel office, alpine architecture",
    description: "Gateway to Mont Blanc and French Alps adventures"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact Our <span className="text-gradient-gold">Concierge Team</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Our expert concierge team is available 24/7 to craft your perfect mountain adventure. 
            From initial consultation to your safe return, we&apos;re here to exceed your expectations.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>24/7 Concierge Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Headphones className="h-5 w-5 text-primary" />
              <span>Multilingual Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-primary fill-current" />
              <span>Award-Winning Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              How to <span className="text-gradient-gold">Reach Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your preferred method of communication. Our team is ready to assist you in planning your perfect mountain adventure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 luxury-shadow luxury-hover luxury-border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 gold-gradient rounded-2xl mb-4 alpine-glow">
                  <method.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                <div className="space-y-2 mb-4">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="text-foreground font-medium text-sm">{detail}</div>
                  ))}
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                  {method.availability}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Start Planning Your <span className="text-gradient-gold">Adventure</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your dream mountain experience and we&apos;ll create a personalized proposal for you.
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Preferred Destination</label>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option>Select a destination</option>
                  <option>Swiss Alps</option>
                  <option>Canadian Rockies</option>
                  <option>Himalayas</option>
                  <option>Patagonia</option>
                  <option>Japanese Alps</option>
                  <option>Norwegian Fjords</option>
                  <option>Other / Multiple</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Group Size</label>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option>Select group size</option>
                  <option>1-2 people</option>
                  <option>3-4 people</option>
                  <option>5-8 people</option>
                  <option>9-15 people</option>
                  <option>16+ people</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Preferred Travel Dates</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g., March 2024 or Flexible"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Budget Range (USD)</label>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option>Select budget range</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Tell us about your dream adventure *</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Describe your ideal mountain experience, interests, fitness level, special requirements, or any questions you have..."
              ></textarea>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="newsletter"
                className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
              />
              <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                I would like to receive updates about new destinations and exclusive offers
              </label>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center space-x-2 px-8 py-4 gold-gradient text-primary-foreground rounded-xl font-semibold text-lg alpine-glow hover:shadow-xl transition-all duration-300 luxury-hover"
              >
                <Send className="h-5 w-5" />
                <span>Send Inquiry</span>
              </button>
              <p className="text-sm text-muted-foreground mt-4">
                We&apos;ll respond within 2 hours with a personalized proposal
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="text-gradient-gold">Global Offices</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at one of our luxury offices located in the world&apos;s premier mountain destinations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden luxury-shadow luxury-hover luxury-border">
                <div className="relative h-48">
                  <img
                    src={office.image}
                    alt={`${office.city} Office`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{office.city}</h3>
                    <p className="text-white/80">{office.country}</p>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground text-sm">{office.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-foreground text-sm">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-foreground text-sm">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span className="text-foreground text-sm">{office.email}</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-xl font-medium transition-all duration-300">
                    Schedule Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 alpine-blur rounded-full luxury-border mb-8">
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-white font-medium">24/7 Emergency Support</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Always Here <span className="text-gradient-gold">When You Need Us</span>
          </h2>
          
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Our emergency support team is available 24/7 during your adventure. Whether you need assistance, 
            have questions, or require emergency support, we&apos;re just a call away.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 alpine-blur rounded-2xl p-6 luxury-border">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Emergency Hotline</h3>
              <p className="text-primary text-xl font-bold">+1 (555) 911-LUXE</p>
              <p className="text-white/70 text-sm mt-2">Available 24/7 worldwide</p>
            </div>
            
            <div className="bg-white/10 alpine-blur rounded-2xl p-6 luxury-border">
              <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Emergency WhatsApp</h3>
              <p className="text-primary text-xl font-bold">+1 (555) 911-LUXE</p>
              <p className="text-white/70 text-sm mt-2">Instant messaging support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}