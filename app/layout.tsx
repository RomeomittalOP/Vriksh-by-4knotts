import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/layout/Cursor";
import { Loader } from "@/components/layout/Loader";
import { GrainOverlay } from "@/components/layout/GrainOverlay";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap"
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Vriksh by 4Knotts — Rooted In Nature. Engineered For Modern Living.",
  description:
    "A futuristic Indian lifestyle brand. Premium home care, wellness, and pantry — designed at the intersection of tradition and technology.",
  metadataBase: new URL("https://vriksh.4knotts.com"),
  openGraph: {
    title: "Vriksh by 4Knotts",
    description: "Rooted In Nature. Engineered For Modern Living.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body suppressHydrationWarning className="bg-cream text-forest-700 antialiased">
        <Loader />
        <Cursor />
        <GrainOverlay />
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
