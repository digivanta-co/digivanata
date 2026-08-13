import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Digivanta — Digital Marketing Company in Delhi",
    short_name: "Digivanta",
    description:
      "SEO, Google Ads, social media, website development and mobile app development services in Delhi.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0C243D",
    icons: [
      {
        src: "/D full.png",
        sizes: "2048x2048",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
