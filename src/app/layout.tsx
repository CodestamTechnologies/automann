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
  title: "Alpine Luxe - Premium Mountain Adventures &amp; Luxury Travel",
  description: "Experience the world&apos;s most exclusive mountain destinations with Alpine Luxe. Luxury alpine adventures, helicopter tours, premium expeditions, and unparalleled service in breathtaking mountain settings.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: ["luxury travel", "mountain adventures", "alpine expeditions", "helicopter tours", "premium travel", "luxury mountain resorts", "exclusive destinations", "high-end tourism"],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Alpine Luxe - Premium Mountain Adventures &amp; Luxury Travel",
    description: "Experience the world&apos;s most exclusive mountain destinations with Alpine Luxe. Luxury alpine adventures, helicopter tours, premium expeditions, and unparalleled service.",
    url: "https://codestam.com",
    siteName: "Alpine Luxe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpine Luxe - Premium Mountain Adventures &amp; Luxury Travel",
    description: "Experience the world&apos;s most exclusive mountain destinations with Alpine Luxe. Luxury alpine adventures, helicopter tours, premium expeditions, and unparalleled service.",
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
