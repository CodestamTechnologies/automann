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
  title: "Noctis Observatory &amp; Urban Astronomy Center",
  description:
    "Explore the city&apos;s skies at Noctis Observatory — neon-noir astronomy, public stargazing, immersive space education, and hands-on research labs.",
  publisher: "Codestam Technologies",
  metadataBase: new URL("https://codestam.com"),
  keywords: [
    "astronomy",
    "observatory",
    "stargazing",
    "space education",
    "urban astronomy",
    "planetarium",
    "cosmos",
    "science center",
  ],
  authors: [{ name: "Codestam Technologies", url: "https://codestam.com" }],
  creator: "Codestam Technologies",
  openGraph: {
    title: "Noctis Observatory &amp; Urban Astronomy Center",
    description:
      "Neon-noir space experiences, community nights, and citizen-science programs under the city&apos;s stars.",
    url: "https://codestam.com",
    siteName: "Noctis Observatory",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noctis Observatory &amp; Urban Astronomy Center",
    description:
      "Neon-noir space experiences, community nights, and citizen-science programs under the city&apos;s stars.",
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
