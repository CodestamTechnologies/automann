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
  title: "Paws & Hearts — Animal Rescue & Adoption Center",
  description:
    "Dedicated to rescuing, rehabilitating, and rehoming animals in need. Every life matters, and every story deserves a happy ending. Join us in our mission to give hope to every paw.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: [
    "animal rescue",
    "pet adoption",
    "animal shelter",
    "volunteer",
    "foster animals",
    "animal welfare",
    "pet care",
    "rescue dogs",
    "rescue cats",
    "animal rehabilitation",
  ],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Paws & Hearts — Animal Rescue & Adoption Center",
    description:
      "Dedicated to rescuing, rehabilitating, and rehoming animals in need. Every life matters, and every story deserves a happy ending.",
    url: "https://codestam.com",
    siteName: "Paws & Hearts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paws & Hearts — Animal Rescue & Adoption Center",
    description:
      "Dedicated to rescuing, rehabilitating, and rehoming animals in need. Every life matters, and every story deserves a happy ending.",
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
