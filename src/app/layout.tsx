import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chaosdigital.in'),
  title: {
    default: "Chaos Digital | Premium Digital Marketing Agency in Lucknow",
    template: "%s | Chaos Digital",
  },
  description: "Chaos Digital is a premium digital marketing, SEO, and web development agency based in Lucknow. We build revenue-driven growth systems and AI automations for ambitious brands.",
  openGraph: {
    title: "Chaos Digital | Premium Digital Marketing Agency",
    description: "Chaos Digital is a premium digital marketing, SEO, and web development agency based in Lucknow. We build revenue-driven growth systems.",
    url: "https://chaosdigital.in",
    siteName: "Chaos Digital",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaos Digital | Premium Digital Marketing Agency",
    description: "Premium digital marketing, SEO, and web development agency based in Lucknow.",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Chaos Digital",
    "url": "https://chaosdigital.in",
    "logo": "https://chaosdigital.in/icon.png",
    "description": "Chaos Digital is a premium digital marketing, SEO, and web development agency based in Lucknow.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "areaServed": "Lucknow",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-inter relative bg-[var(--color-ivory)] text-[var(--color-amethyst)]">
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NP4HNPRTWP"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NP4HNPRTWP');
            `,
          }}
        />
        <Preloader />
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
