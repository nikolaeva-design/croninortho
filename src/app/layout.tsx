import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://croninortho.com"),
  title: {
    default: "CroninOrtho | Expert Orthodontic Treatment in [City]",
    template: "%s | CroninOrtho",
  },
  description:
    "Dr. D.G. Cronin & Dr. M. Sarfraz offer personalized orthodontic treatments for children, teens, and adults. Invisalign, braces, and aesthetic smile correction focused on function, health, and confident smiles.",
  keywords: [
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
    siteName: "CroninOrtho",
    title: "CroninOrtho | Expert Orthodontic Treatment & Smile Correction",
    description:
      "Personalized orthodontic and aesthetic treatments by Dr. D.G. Cronin & Dr. M. Sarfraz. Serving children, teens, and adults with modern orthodontic solutions.",
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
    title: "CroninOrtho | Expert Orthodontic Treatment",
    description:
      "Personalized orthodontic treatments for all ages. Invisalign, braces, and aesthetic smile correction.",
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
        <Script
          src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"
          strategy="beforeInteractive"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${poppins.variable} font-poppins antialiased bg-background text-foreground`}
      >
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "CroninOrtho",
              description:
                "Expert orthodontic treatment and smile correction by Dr. D.G. Cronin & Dr. M. Sarfraz",
              url: "https://croninortho.com",
              logo: "https://croninortho.com/logo.png",
              image: "https://croninortho.com/hero-image.png",
              priceRange: "$$",
              medicalSpecialty: "Orthodontics",
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Orthodontic Treatment",
                  description: "Comprehensive orthodontic care for all ages",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Invisalign",
                  description: "Clear aligner therapy for discreet teeth straightening",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Braces",
                  description: "Traditional and ceramic braces for teeth alignment",
                },
              ],
              employee: [
                {
                  "@type": "Dentist",
                  name: "Dr. D.G. Cronin",
                  jobTitle: "Orthodontist",
                },
                {
                  "@type": "Dentist",
                  name: "Dr. M. Sarfraz",
                  jobTitle: "Orthodontist",
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
