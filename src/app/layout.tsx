import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "automann - Automate, Engage & Convert",
    template: "%s | automann"
  },
  description: "Run smart chatbots, send automated messages, track analytics, and convert leads effortlessly with one powerful WhatsApp automation tool. Official API integration, no coding needed.",
  keywords: [
    "WhatsApp automation",
    "WhatsApp chatbot",
    "WhatsApp marketing",
    "automated messaging",
    "WhatsApp API",
    "lead generation",
    "WhatsApp analytics",
    "bulk messaging",
    "WhatsApp business",
    "chatbot builder",
    "WhatsApp CRM",
    "message automation"
  ],
  authors: [{ name: "automann" }],
  creator: "automann",
  publisher: "automann",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "automann - Automate, Engage & Convert",
    description: "Run smart chatbots, send automated messages, track analytics, and convert leads effortlessly with one powerful WhatsApp automation tool.",
    url: "https://codestam.com",
    siteName: "automann",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "automann"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "automann - Automate, Engage & Convert",
    description: "Run smart chatbots, send automated messages, track analytics, and convert leads effortlessly with one powerful WhatsApp automation tool.",
    images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop&crop=center"],
    creator: "@automann"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${josefinSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}