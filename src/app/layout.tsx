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
  title: "EcoLife Sustainable Living",
  description:
    "Discover sustainable living solutions with EcoLife — eco-friendly products, green lifestyle tips, and natural alternatives for a healthier planet and lifestyle.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: [
    "sustainable living",
    "eco-friendly products",
    "green lifestyle",
    "natural alternatives",
    "environmental sustainability",
    "organic products",
    "zero waste",
    "renewable energy",
    "sustainable fashion",
    "eco-conscious living",
  ],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "EcoLife Sustainable Living",
    description:
      "Discover sustainable living solutions with eco-friendly products, green lifestyle tips, and natural alternatives for a healthier planet.",
    url: "https://codestam.com",
    siteName: "EcoLife Sustainable Living",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoLife Sustainable Living",
    description:
      "Discover sustainable living solutions with eco-friendly products, green lifestyle tips, and natural alternatives for a healthier planet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${josefinSans.className} fontsans antialiased`}>
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
