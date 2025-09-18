import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const josefinSans = Josefin_Sans({
  preload: true,
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EcoVibe - Sustainable Living &amp; Wellness",
  description: "Discover the art of sustainable living with EcoVibe. Explore eco-friendly products, wellness tips, organic lifestyle guides, and join our community of conscious living enthusiasts.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["sustainable living", "eco-friendly", "organic lifestyle", "wellness", "green products", "environmental consciousness", "natural living", "zero waste"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "EcoVibe - Sustainable Living &amp; Wellness",
    description: "Discover the art of sustainable living with EcoVibe. Explore eco-friendly products, wellness tips, organic lifestyle guides, and join our community of conscious living enthusiasts.",
    url: "https://codestam.com",
    siteName: "EcoVibe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoVibe - Sustainable Living &amp; Wellness",
    description: "Discover the art of sustainable living with EcoVibe. Explore eco-friendly products, wellness tips, organic lifestyle guides, and join our community of conscious living enthusiasts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${josefinSans.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
