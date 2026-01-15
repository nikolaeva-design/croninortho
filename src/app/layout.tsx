import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CroninOrtho | Comprehensive Orthodontic Treatment & Smile Correction",
  description: "Personalized orthodontic and aesthetic treatments for children, teens, and adults — focused on function, health, and confident smiles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js" strategy="beforeInteractive" />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
