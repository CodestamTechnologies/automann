import { Metadata } from "next";
import Navbar from "@/components/architecture/Navbar";
import Footer from "@/components/architecture/Footer";

export const metadata: Metadata = {
  title: "Contact - Cinematic Studios",
  description: "Get in touch with Cinematic Studios for your next film production project. Contact us for quotes, consultations, and creative collaborations.",
  keywords: [
    "contact cinematic studios",
    "film production contact",
    "video production quote",
    "cinematic studios phone",
    "film production consultation",
    "video production inquiry"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  openGraph: {
    title: "Contact - Cinematic Studios",
    description: "Get in touch with Cinematic Studios for your next film production project. Contact us for quotes, consultations, and creative collaborations.",
    url: "https://codestam.com/contact",
    siteName: "Cinematic Studios",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Contact Cinematic Studios"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Cinematic Studios",
    description: "Get in touch with Cinematic Studios for your next film production project. Contact us for quotes, consultations, and creative collaborations.",
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop&crop=center"]
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 film-grain opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="block">GET IN</span>
              <span className="block text-accent">TOUCH</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Let&apos;s discuss your project and create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="noir-frame p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Start Your Project</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-primary/20 rounded-sm bg-background text-foreground focus:border-accent focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-primary/20 rounded-sm bg-background text-foreground focus:border-accent focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-primary/20 rounded-sm bg-background text-foreground focus:border-accent focus:outline-none">
                    <option>Commercial Production</option>
                    <option>Documentary</option>
                    <option>Motion Graphics</option>
                    <option>Post-Production</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-primary/20 rounded-sm bg-background text-foreground focus:border-accent focus:outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-sm hover:scale-105 transition-all duration-300 uppercase tracking-wider"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-FILM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">hello@cinematicstudios.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Los Angeles, California</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="noir-frame p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Quick Response</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We typically respond to all inquiries within 24 hours. For urgent projects, 
                  please call us directly for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}