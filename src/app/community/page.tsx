import type { Metadata } from "next";
import Navbar from "@/components/eco/Navbar";
import Footer from "@/components/eco/Footer";

export const metadata: Metadata = {
  title: "Community &amp; Events - EcoVibe",
  description: "Join our vibrant community of eco-conscious individuals. Participate in events, workshops, and discussions about sustainable living and environmental awareness.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["eco community", "sustainability events", "environmental workshops", "green living community", "eco-conscious network"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Community &amp; Events - EcoVibe",
    description: "Join our vibrant community of eco-conscious individuals. Participate in events, workshops, and discussions about sustainable living and environmental awareness.",
    url: "https://codestam.com",
    siteName: "EcoVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Community &amp; Events - EcoVibe",
    description: "Join our vibrant community of eco-conscious individuals. Participate in events, workshops, and discussions about sustainable living and environmental awareness.",
  },
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://maxm-imggenurl.web.val.run/diverse group of people in community garden, sustainable living workshop, environmental activism, togetherness"
            alt="Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Join Our Eco-Conscious Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with like-minded individuals who share your passion for sustainable living, environmental stewardship, and positive change.
          </p>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-card rounded-2xl p-8 organic-shadow">
              <div className="text-3xl font-bold text-primary mb-2">25,000+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 organic-shadow">
              <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-sm text-muted-foreground">Monthly Discussions</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 organic-shadow">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Events Hosted</div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 organic-shadow">
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Community Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground">
              Join us for workshops, discussions, and activities that promote sustainable living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-6 organic-shadow hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  Workshop
                </span>
                <span className="text-sm text-muted-foreground">Virtual</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Zero Waste Living Workshop</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Learn practical tips for reducing waste in your daily life and creating a zero-waste home.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  March 15, 2024 • 2:00 PM EST
                </div>
                <button className="text-primary font-semibold text-sm hover:text-primary/80">
                  Join Event
                </button>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 organic-shadow hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  Meetup
                </span>
                <span className="text-sm text-muted-foreground">In-Person</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Sustainable Gardening Meetup</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Connect with local gardeners and learn about organic growing techniques and permaculture.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  March 22, 2024 • 10:00 AM EST
                </div>
                <button className="text-primary font-semibold text-sm hover:text-primary/80">
                  Join Event
                </button>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 organic-shadow hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                  Discussion
                </span>
                <span className="text-sm text-muted-foreground">Virtual</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Mindful Living Circle</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Join our monthly discussion on mindfulness, wellness, and conscious living practices.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  March 29, 2024 • 7:00 PM EST
                </div>
                <button className="text-primary font-semibold text-sm hover:text-primary/80">
                  Join Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Community Features</h2>
            <p className="text-muted-foreground">
              Discover all the ways you can connect, learn, and grow with our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                💬
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Discussion Forums</h3>
              <p className="text-muted-foreground">
                Engage in meaningful conversations about sustainability, wellness, and eco-friendly living with community members.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                📚
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Resource Library</h3>
              <p className="text-muted-foreground">
                Access our comprehensive library of guides, articles, and resources on sustainable living and environmental awareness.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                🏆
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Challenges &amp; Rewards</h3>
              <p className="text-muted-foreground">
                Participate in monthly sustainability challenges and earn rewards for your eco-friendly actions and achievements.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                🌱
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Local Groups</h3>
              <p className="text-muted-foreground">
                Connect with community members in your area through local chapters and regional meetups.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                🎓
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Expert Workshops</h3>
              <p className="text-muted-foreground">
                Learn from sustainability experts, wellness coaches, and environmental scientists through exclusive workshops.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                🤝
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Mentorship Program</h3>
              <p className="text-muted-foreground">
                Get guidance from experienced community members or become a mentor to help others on their sustainability journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-earth">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Connect with thousands of like-minded individuals and start making a positive impact together.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-colors organic-shadow">
            Join Community
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}