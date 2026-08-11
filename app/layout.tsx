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
import SiteChrome from "@/components/layout/SiteChrome";
import { SITE_URL } from "@/lib/site-data";


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
  /* Without metadataBase, Next resolves openGraph/twitter image paths
     relative and they break wherever a link is shared. */
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Digivanta | Digital Marketing Company in Delhi — SEO, Ads & Online Growth",
    template: "%s | Digivanta",
  },
  description:
    "Digivanta is a result-driven digital marketing company in Delhi offering SEO, Social Media Marketing, PPC, Performance Marketing, Website & App Development to grow your traffic, leads and sales.",
  keywords: [
    "Digital Marketing Company in Delhi",
    "Digital Marketing Agency in Delhi",
    "Digital Marketing Services in Delhi",
    "SEO Services in Delhi",
    "SEO Company in Delhi",
    "Performance Marketing Agency Delhi",
    "Online Marketing Agency Delhi",
    "Website Development Services",
    "App Development Services",
    "Social Media Marketing Services",
    "Best Digital Marketing Company in Delhi",
    "PPC Agency Delhi",
    "Graphic Designing Company in Delhi",
    "Web Development Company in Delhi",
  ],
  authors: [{ name: "Digivanta", url: SITE_URL }],
  creator: "Digivanta",
  publisher: "Digivanta",
  category: "Digital Marketing",
  icons: {
    icon: "/favicon-48.png",
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
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Digivanta | Digital Marketing Company in Delhi",
    description:
      "Result-driven SEO, social media, performance marketing and web solutions that grow your business online.",
    type: "website",
    locale: "en_IN",
    siteName: "Digivanta",
    url: SITE_URL,
    images: [{ url: "/digivanta.png", width: 1114, height: 306, alt: "Digivanta — Digital Marketing Company in Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digivanta | Digital Marketing Company in Delhi",
    description:
      "Result-driven SEO, social media, performance marketing and web solutions that grow your business online.",
    images: ["/digivanta.png"],
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
