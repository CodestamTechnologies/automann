import { Metadata } from "next";
import Navbar from "@/components/whatsapp/Navbar";
import Footer from "@/components/whatsapp/Footer";
import { MessageSquare, BarChart3, Users, Calendar, Zap, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Features - automann",
  description: "Everything you need to automate WhatsApp in one platform. Chatbot builder, campaign automation, analytics dashboard, multi-agent inbox, and CRM integrations.",
  keywords: [
    "WhatsApp chatbot builder",
    "WhatsApp campaign automation",
    "WhatsApp analytics",
    "multi-agent inbox",
    "WhatsApp CRM integration",
    "WhatsApp automation features"
  ],
  authors: [{ name: "automann" }],
  creator: "automann",
  publisher: "automann",
  openGraph: {
    title: "Features - automann",
    description: "Everything you need to automate WhatsApp in one platform. Chatbot builder, campaign automation, analytics dashboard, and more.",
    url: "https://codestam.com/features",
    siteName: "automann",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "automann Features"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - automann",
    description: "Everything you need to automate WhatsApp in one platform. Chatbot builder, campaign automation, analytics dashboard, and more.",
    images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center"]
  }
};

const features = [
  {
    id: "chatbot",
    icon: MessageSquare,
    title: "Chatbot Builder",
    description: "Build chatbots in minutes using drag-and-drop flow builder.",
    features: [
      "Auto-reply to FAQs, route leads, and collect info 24/7",
      "Integrate AI replies for smarter conversations",
      "Drag-and-drop flow builder",
      "Multi-language support",
    ],
  },
  {
    id: "campaign",
    icon: Zap,
    title: "Campaign Automation",
    description: "Schedule bulk or personalized campaigns.",
    features: [
      "Segment customers by behavior, tags, or region",
      "Track open, click, and response rates",
      "Schedule messages for optimal timing",
      "Personalize messages with dynamic variables",
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "WhatsApp Analytics Dashboard",
    description: "Real-time message delivery & read stats.",
    features: [
      "Track top-performing campaigns",
      "Export detailed reports in one click",
      "Real-time message delivery & read stats",
      "Conversion tracking and ROI analysis",
    ],
  },
  {
    id: "inbox",
    icon: Users,
    title: "Multi-Agent Inbox",
    description: "Centralized chat inbox for your team.",
    features: [
      "Assign conversations to team members",
      "Track response time and agent performance",
      "Internal notes and collaboration",
      "Automated routing and assignment",
    ],
  },
  {
    id: "crm",
    icon: Calendar,
    title: "CRM & Integration",
    description: "Connect to HubSpot, Zoho, Google Sheets, and more.",
    features: [
      "Sync leads and automate follow-ups",
      "Import/export contacts instantly",
      "Webhook integrations",
      "API access for custom integrations",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen relative">
      {/* Seamless green background overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-emerald-50/30 to-green-50/40 dark:from-green-950/20 dark:via-emerald-950/15 dark:to-green-950/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]"></div>
      </div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Everything You Need to Automate WhatsApp
              <br />
              <span className="text-primary">
                In One Platform
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Powerful features designed to help you automate, engage, and convert — all from one intuitive dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="feature-icon mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="minimal-card p-8 hover-lift">
                    <img
                      src={`https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&crop=center&sig=${index}`}
                      alt={feature.title}
                      className="w-full h-64 object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Request a demo to see all features in action.
          </p>
          <Link
            href="/contact#demo"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
          >
            Request a Demo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}





