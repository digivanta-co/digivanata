import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/app-development",
        destination: "/mobile-app-development-in-delhi",
        permanent: true,
      },
      {
        source: "/app-development-services",
        destination: "/mobile-app-development-in-delhi",
        permanent: true,
      },
      {
        source: "/app-development-company-in-delhi",
        destination: "/mobile-app-development-in-delhi",
        permanent: true,
      },
      {
        source: "/seo",
        destination: "/seo-services-in-delhi",
        permanent: true,
      },
      {
        source: "/seo-services",
        destination: "/seo-services-in-delhi",
        permanent: true,
      },
      {
        source: "/ppc",
        destination: "/ppc-company-in-delhi",
        permanent: true,
      },
      {
        source: "/ppc-services",
        destination: "/ppc-company-in-delhi",
        permanent: true,
      },
      {
        source: "/google-ads",
        destination: "/ppc-company-in-delhi",
        permanent: true,
      },
      {
        source: "/social-media-marketing",
        destination: "/social-media-marketing-in-delhi",
        permanent: true,
      },
      {
        source: "/smm",
        destination: "/social-media-marketing-in-delhi",
        permanent: true,
      },
      {
        source: "/content-marketing",
        destination: "/content-marketing-in-delhi",
        permanent: true,
      },
      {
        source: "/graphic-design",
        destination: "/graphic-designing-company-in-delhi",
        permanent: true,
      },
      {
        source: "/graphic-designing",
        destination: "/graphic-designing-company-in-delhi",
        permanent: true,
      },
      {
        source: "/orm",
        destination: "/online-reputation-management-company-in-delhi",
        permanent: true,
      },
      {
        source: "/online-reputation-management",
        destination: "/online-reputation-management-company-in-delhi",
        permanent: true,
      },
      {
        source: "/web-development",
        destination: "/web-development-company-in-delhi",
        permanent: true,
      },
      {
        source: "/website-development",
        destination: "/web-development-company-in-delhi",
        permanent: true,
      },
      {
        source: "/uncategorized",
        destination: "/",
        permanent: true,
      },
      {
        source: "/uncategorized/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/:slug*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

