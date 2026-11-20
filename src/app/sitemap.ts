import { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const STATIC_PAGES = [
  { path: "/", priority: 1.0, changefreq: "daily" as const },
  { path: "/about", priority: 0.9, changefreq: "monthly" as const },
  { path: "/about/vision-mission", priority: 0.8, changefreq: "monthly" as const },
  { path: "/academics", priority: 0.9, changefreq: "monthly" as const },
  { path: "/academics/schools", priority: 0.9, changefreq: "monthly" as const },
  { path: "/admissions", priority: 0.9, changefreq: "weekly" as const },
  { path: "/admissions/calculator", priority: 0.7, changefreq: "monthly" as const },
  { path: "/global-health-outreach", priority: 0.8, changefreq: "weekly" as const },
  { path: "/global-health-outreach/register", priority: 0.7, changefreq: "weekly" as const },
  { path: "/procurement/eoi-2026", priority: 0.8, changefreq: "daily" as const },
  { path: "/library", priority: 0.7, changefreq: "monthly" as const },
  { path: "/research", priority: 0.8, changefreq: "monthly" as const },
  { path: "/campuses", priority: 0.8, changefreq: "monthly" as const },
  { path: "/portal/student", priority: 0.6, changefreq: "weekly" as const },
];

const BASE_URL = process.env.NEXTAUTH_URL || "https://www.bsu.ac.ke";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = STATIC_PAGES.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    priority: page.priority,
    changeFrequency: page.changefreq,
  }));

  // Dynamic entries from Prisma
  let dynamicEntries: MetadataRoute.Sitemap = [];

  try {
    // Schools
    const schools = await prisma.school.findMany({
      select: { slug: true, updatedAt: true },
    });
    const schoolEntries = schools.map((school) => ({
      url: `${BASE_URL}/academics/schools#${school.slug}`,
      lastModified: school.updatedAt,
      priority: 0.7 as const,
      changeFrequency: "monthly" as const,
    }));

    // Global Health Outreach campaigns
    const outreachRecords = await prisma.globalHealthOutreach.findMany({
      select: { id: true, location: true, startDate: true },
    });
    const outreachEntries = outreachRecords.map((record) => ({
      url: `${BASE_URL}/global-health-outreach#${record.location.toLowerCase()}`,
      lastModified: new Date(),
      priority: 0.6 as const,
      changeFrequency: "weekly" as const,
    }));

    // Active tenders
    const activeTenders = await prisma.tender.findMany({
      where: { isActive: true },
      select: { refNumber: true, createdAt: true },
    });
    const tenderEntries = activeTenders.map((tender) => ({
      url: `${BASE_URL}/procurement/eoi-2026`,
      lastModified: tender.createdAt,
      priority: 0.8 as const,
      changeFrequency: "daily" as const,
    }));

    dynamicEntries = [...schoolEntries, ...outreachEntries, ...tenderEntries];
  } catch {
    // If Prisma is unavailable, return static entries only
    // This ensures the sitemap never fails completely
  }

  return [...staticEntries, ...dynamicEntries];
}
