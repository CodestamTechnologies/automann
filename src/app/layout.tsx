import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Architect Studio - Modern Architecture & Design Services",
    template: "%s | Architect Studio"
  },
  description: "Award-winning architectural design studio specializing in innovative residential, commercial, and cultural projects. From concept to completion, we create inspiring spaces that stand the test of time.",
  keywords: [
    "architecture",
    "architectural design",
    "modern architecture",
    "residential design",
    "commercial architecture",
    "urban planning",
    "interior design",
    "landscape architecture",
    "sustainable design",
    "building design",
    "New York architecture",
    "award-winning design"
  ],
  authors: [{ name: "Codestam Technologies" }],
  creator: "Codestam Technologies",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Architect Studio - Modern Architecture & Design Services",
    description: "Award-winning architectural design studio specializing in innovative residential, commercial, and cultural projects.",
    url: "https://codestam.com",
    siteName: "Architect Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Architect Studio - Modern Architecture & Design"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Architect Studio - Modern Architecture & Design Services",
    description: "Award-winning architectural design studio specializing in innovative residential, commercial, and cultural projects.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=630&fit=crop&crop=center"],
    creator: "@architectstudio"
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefinSans.className} font-sans antialiased`}>
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