"use client";

import { HeroLanding } from "@/components/ui/hero-1";
import type { HeroLandingProps } from "@/components/ui/hero-1";

export default function Hero() {
  const heroProps: HeroLandingProps = {
    // Hero content
    title: "More growth, less work. Get your time back",
    description: "Time is money, and our automation solutions help you save both. Automate your most repetitive tasks, reduce operational costs, and watch as your team's productivity soars.",
    
    // Announcement banner
    announcementBanner: {
      text: "🚀 New: AI-Powered Chatbot Builder",
      linkText: "Try it now",
      linkHref: "/features#chatbot"
    },
    
    // Call to action buttons
    callToActions: [
      { 
        text: "Take Control of Your Time Now", 
        href: "/contact", 
        variant: "primary" 
      },
      { 
        text: "Watch Demo", 
        href: "/contact#demo", 
        variant: "secondary" 
      }
    ],
    
    // Styling options with green accents
    titleSize: "large",
    gradientColors: {
      from: "oklch(0.35 0.15 280)", // Purple
      to: "oklch(0.40 0.18 300)"    // Violet
    },
    
    // Additional customization
    className: "min-h-screen"
  }

  return <HeroLanding {...heroProps} />
}
