import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXTAUTH_URL || "https://www.bsu.ac.ke";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/academics",
          "/admissions",
          "/global-health-outreach",
          "/procurement",
          "/research",
          "/campuses",
          "/library",
        ],
        disallow: [
          "/api/",
          "/portal/",
          "/_next/",
          "/private/",
          "/admin/",
          "/*.pdf$",
        ],
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
