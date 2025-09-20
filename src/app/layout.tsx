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
  title: "Artisan Creative Studio",
  description:
    "Discover exceptional creative arts and design at Artisan Creative Studio — fine art, digital design, photography, and bespoke creative solutions for discerning clients.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: [
    "creative arts",
    "fine art",
    "digital design",
    "photography",
    "artistic services",
    "creative studio",
    "bespoke design",
    "artistic consultation",
    "visual arts",
    "creative solutions",
  ],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Artisan Creative Studio",
    description:
      "Elevating creativity through exceptional arts and design services, fine art, and bespoke creative solutions.",
    url: "https://codestam.com",
    siteName: "Artisan Creative",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artisan Creative Studio",
    description:
      "Elevating creativity through exceptional arts and design services, fine art, and bespoke creative solutions.",
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
