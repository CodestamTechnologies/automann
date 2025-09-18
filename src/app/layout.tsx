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
  title: "NEON FLUX - Digital Art Portfolio",
  description: "Immerse yourself in the cyberpunk future of digital art. Explore cutting-edge digital creations, NFT collections, and futuristic visual experiences.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["digital art", "cyberpunk", "NFT", "portfolio", "futuristic", "neon", "cyber", "art gallery"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "NEON FLUX - Digital Art Portfolio",
    description: "Immerse yourself in the cyberpunk future of digital art. Explore cutting-edge digital creations, NFT collections, and futuristic visual experiences.",
    url: "https://codestam.com",
    siteName: "NEON FLUX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEON FLUX - Digital Art Portfolio",
    description: "Immerse yourself in the cyberpunk future of digital art. Explore cutting-edge digital creations, NFT collections, and futuristic visual experiences.",
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
