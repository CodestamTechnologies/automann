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
  title: "GrowthLab Digital",
  description:
    "Accelerate your business growth with GrowthLab Digital — cutting-edge digital marketing, growth hacking, and data-driven strategies for modern businesses.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: [
    "digital marketing",
    "growth hacking",
    "business growth",
    "marketing automation",
    "data analytics",
    "conversion optimization",
    "lead generation",
    "social media marketing",
    "content marketing",
    "growth strategies",
  ],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "GrowthLab Digital",
    description:
      "Accelerate your business growth with cutting-edge digital marketing, growth hacking, and data-driven strategies.",
    url: "https://codestam.com",
    siteName: "GrowthLab Digital",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthLab Digital",
    description:
      "Accelerate your business growth with cutting-edge digital marketing, growth hacking, and data-driven strategies.",
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
