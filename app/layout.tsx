import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import CursorGlow from "@/components/ui/cursor-glow";
import SmoothScroll from "@/components/ui/smooth-scroll";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";
import { SITE_URL } from "@/lib/site-data";
import { OG_IMAGE, SEO_PAGES } from "@/lib/seo-config";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

/* Map every legacy font token to Poppins so the whole site uses Poppins
   (sans-serif) without changing any layout, sizing, or weights. */
const fontVars = {
  "--font": "var(--font-poppins), system-ui, sans-serif",
  "--serif": "var(--font-poppins), system-ui, sans-serif",
  "--font-display": "var(--font-poppins)",
  "--font-inter": "var(--font-poppins)",
  "--font-jakarta": "var(--font-poppins)",
  "--font-instrument-serif": "var(--font-poppins)",
  "--font-script": "var(--font-poppins)",
} as React.CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SEO_PAGES.home.title} | Digivanta`,
    template: "%s | Digivanta",
  },
  description: SEO_PAGES.home.description,
  keywords: [...SEO_PAGES.home.keywords],
  authors: [{ name: "Digivanta", url: SITE_URL }],
  creator: "Digivanta",
  publisher: "Digivanta",
  category: "Digital Marketing",
  icons: {
    icon: [{ url: "/favicon-48.png", type: "image/png", sizes: "48x48" }],
    apple: "/D full.png",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  verification: {
    google: "BEKpqMz2noFiZ4d6xkru247zRWa7tZX3fXKQ2B-g1lI",
    other: {
      "p:domain_verify": "dd08970c9e97ae0541e0ebe064fc817b",
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SEO_PAGES.home.title} | Digivanta`,
    description: SEO_PAGES.home.description,
    type: "website",
    locale: "en_IN",
    siteName: "Digivanta",
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SEO_PAGES.home.title} | Digivanta`,
    description: SEO_PAGES.home.description,
    images: [OG_IMAGE.url],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn("h-full antialiased", poppins.variable)}
      style={fontVars}
    >
      <body className={cn("min-h-full flex flex-col font-sans", poppins.className)}>
        <SmoothScroll />
        
          <CursorGlow />
          <TopBar />
          <Header />
      
        {children}
  
          <Footer />
          <WhatsAppButton />
          <BackToTop />
      </body>
    </html>
  );
}
