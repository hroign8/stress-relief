import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stress Relief Family Cleaning Services",
    template: "%s | Stress Relief Family Cleaning",
  },
  description:
    "Professional family-owned cleaning services designed to give you back your time.",
  openGraph: {
    type: "website",
    siteName: "Stress Relief Family Cleaning Services",
    title: "Stress Relief Family Cleaning Services",
    description:
      "Professional, trustworthy home cleaning from a family that treats your home like ours.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stress Relief Family Cleaning Services",
    description:
      "Professional, trustworthy home cleaning from a family that treats your home like ours.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingWhatsApp />
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
