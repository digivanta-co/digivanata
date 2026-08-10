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
  title: "Digivanta | Digital Marketing Company in Delhi — SEO, Ads & Online Growth",
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
  ],
  icons: {
    icon: "/favicon-48.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Digivanta | Digital Marketing Company in Delhi",
    description:
      "Result-driven SEO, social media, performance marketing and web solutions that grow your business online.",
    type: "website",
    locale: "en_IN",
    siteName: "Digivanta",
    url: "/",
    images: [{ url: "/digivanta.png", width: 1600, height: 318, alt: "Digivanta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digivanta | Digital Marketing Company in Delhi",
    description:
      "Result-driven SEO, social media, performance marketing and web solutions that grow your business online.",
    images: ["/digivanta.png"],
  },
  robots: { index: true, follow: true },
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
