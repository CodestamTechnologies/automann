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
  title: "Horologium — Curated Vintage Timepieces",
  description:
    "Explore an exquisite collection of vintage watches, from rare Swiss movements to timeless American classics. Expert authentication, restoration, and acquisition services for serious collectors.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: [
    "vintage timepieces",
    "collector watches",
    "horological masterpieces",
    "antique timepieces",
    "swiss movements",
    "mechanical watches",
    "watch authentication",
    "timepiece restoration",
    "rare watches",
    "luxury horology",
  ],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Horologium — Curated Vintage Timepieces",
    description:
      "Explore an exquisite collection of vintage watches, from rare Swiss movements to timeless American classics. Expert authentication and restoration services.",
    url: "https://codestam.com",
    siteName: "Horologium",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horologium — Curated Vintage Timepieces",
    description:
      "Explore an exquisite collection of vintage watches, from rare Swiss movements to timeless American classics. Expert authentication and restoration services.",
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
