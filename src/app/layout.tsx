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
  title: "ChromaSpace — Digital Art Gallery & Creative Studio",
  description:
    "Explore the future of digital creativity through our curated collection of AI-generated masterpieces, interactive installations, and cutting-edge artistic expressions. Where art meets technology.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: [
    "digital art",
    "AI art",
    "NFT marketplace",
    "digital creativity",
    "cyberpunk art",
    "neural networks",
    "blockchain art",
    "virtual gallery",
    "interactive art",
    "futuristic design",
  ],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "ChromaSpace — Digital Art Gallery & Creative Studio",
    description:
      "Explore the future of digital creativity through our curated collection of AI-generated masterpieces, interactive installations, and cutting-edge artistic expressions.",
    url: "https://codestam.com",
    siteName: "ChromaSpace",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChromaSpace — Digital Art Gallery & Creative Studio",
    description:
      "Explore the future of digital creativity through our curated collection of AI-generated masterpieces, interactive installations, and cutting-edge artistic expressions.",
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
