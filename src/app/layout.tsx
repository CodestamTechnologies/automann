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
  title: "ZenFit Wellness &amp; Holistic Health Center",
  description:
    "Discover your path to wellness at ZenFit — holistic fitness, mindful movement, nature-inspired wellness programs, and serene healing spaces.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: [
    "wellness",
    "fitness",
    "holistic health",
    "mindful movement",
    "yoga",
    "meditation",
    "nature therapy",
    "wellness center",
    "zen fitness",
    "mindfulness",
  ],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "ZenFit Wellness &amp; Holistic Health Center",
    description:
      "Transform your wellness journey with nature-inspired fitness, mindful movement, and holistic healing experiences.",
    url: "https://codestam.com",
    siteName: "ZenFit Wellness",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZenFit Wellness &amp; Holistic Health Center",
    description:
      "Transform your wellness journey with nature-inspired fitness, mindful movement, and holistic healing experiences.",
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
