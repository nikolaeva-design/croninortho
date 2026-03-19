import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { buildSiteJsonLdGraph } from "@/lib/site-jsonld";
import {
  SEO_HOME_DESCRIPTION,
  SEO_HOME_TITLE,
  SEO_LOCATION_SHORT,
  SITE_NAME,
} from "@/lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://croninortho.com"),
  title: {
    default: SEO_HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_HOME_DESCRIPTION,
  keywords: [
    "orthodontist Langley BC",
    "Langley orthodontist",
    "orthodontist",
    "braces",
    "Invisalign",
    "teeth alignment",
    "orthodontic treatment",
    "smile correction",
    "clear aligners",
    "kids orthodontics",
    "adult braces",
    "retainers",
    "nightguards",
  ],
  authors: [
    { name: "Dr. D.G. Cronin" },
    { name: "Dr. M. Sarfraz" },
  ],
  creator: "CroninOrtho",
  publisher: "CroninOrtho",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Orthodontist in ${SEO_LOCATION_SHORT} | Invisalign & Braces`,
    description: SEO_HOME_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CroninOrtho - Expert Orthodontic Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_HOME_TITLE,
    description: SEO_HOME_DESCRIPTION,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  category: "Healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Critical resource hints - DNS prefetch and preconnect */}
        <link rel="dns-prefetch" href="https://code.iconify.design" />
        <link rel="dns-prefetch" href="https://api.iconify.design" />
        <link rel="preconnect" href="https://code.iconify.design" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.iconify.design" crossOrigin="anonymous" />

        {/* Preload critical hero image with high priority */}
        <link
          rel="preload"
          href="/main-hero-image (1).webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Preload logo */}
        <link
          rel="preload"
          href="/logo.svg"
          as="image"
          type="image/svg+xml"
        />

        {/* Preload critical font */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrFjfZc3t8.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Icons - load lazily to not block render */}
        <Script
          src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"
          strategy="lazyOnload"
        />

        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${poppins.variable} font-poppins antialiased bg-background text-foreground`}
      >
        {/* JSON-LD Structured Data - loaded with lazyOnload */}
        <Script
          id="json-ld-site-graph"
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": buildSiteJsonLdGraph(),
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
