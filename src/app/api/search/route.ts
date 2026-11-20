import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

interface SearchResult {
  id: string;
  type: string;
  title: string;
  description: string;
  url: string;
  meta?: Record<string, string | number | boolean | null>;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.trim() || "";
    const limit = Math.min(parseInt(searchParams.get("limit") || "10", 10), 50);
    const type = searchParams.get("type") || "all";

    if (!query || query.length < 2) {
      return NextResponse.json(
        {
          success: false,
          message: "Query parameter 'q' is required (minimum 2 characters).",
          results: [],
        },
        { status: 400 }
      );
    }

    const searchPattern = `%${query}%`;
    const results: SearchResult[] = [];

    // Search Programmes
    if (type === "all" || type === "programme") {
      const programmes = await prisma.programme.findMany({
        where: {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { code: { contains: query, mode: "insensitive" } },
            { requirements: { contains: query, mode: "insensitive" } },
          ],
        },
        take: limit,
        include: { department: { include: { school: true } } },
      });

      results.push(
        ...programmes.map((p) => ({
          id: p.id,
          type: "programme",
          title: p.title,
          description: `${p.level} · ${p.department.school.name} · ${p.durationYears} year${p.durationYears > 1 ? "s" : ""}`,
          url: `/academics/schools#${p.slug}`,
          meta: {
            code: p.code,
            level: p.level,
            isFlagship: p.isFlagship,
            duration: p.durationYears,
            school: p.department.school.name,
          },
        }))
      );
    }

    // Search Schools
    if (type === "all" || type === "school") {
      const schools = await prisma.school.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { code: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
          ],
        },
        take: limit,
      });

      results.push(
        ...schools.map((s) => ({
          id: s.id,
          type: "school",
          title: s.name,
          description: s.description || "",
          url: `/academics/schools#${s.slug}`,
          meta: {
            code: s.code,
            slug: s.slug,
          },
        }))
      );
    }

    // Search Tenders
    if (type === "all" || type === "tender") {
      const tenders = await prisma.tender.findMany({
        where: {
          AND: [
            { isActive: true },
            {
              OR: [
                { title: { contains: query, mode: "insensitive" } },
                { refNumber: { contains: query, mode: "insensitive" } },
                { category: { contains: query, mode: "insensitive" } },
              ],
            },
          ],
        },
        take: limit,
      });

      results.push(
        ...tenders.map((t) => ({
          id: t.id,
          type: "tender",
          title: t.title,
          description: `Ref: ${t.refNumber} · ${t.category}`,
          url: `/procurement/eoi-2026`,
          meta: {
            refNumber: t.refNumber,
            category: t.category,
            closingDate: t.closingDate.toISOString(),
            isActive: t.isActive,
          },
        }))
      );
    }

    // Sort by relevance (exact title match first, then partial)
    const sorted = results.sort((a, b) => {
      const aExact = a.title.toLowerCase() === query.toLowerCase() ? 2 : 0;
      const bExact = b.title.toLowerCase() === query.toLowerCase() ? 2 : 0;
      const aStart = a.title.toLowerCase().startsWith(query.toLowerCase()) ? 1 : 0;
      const bStart = b.title.toLowerCase().startsWith(query.toLowerCase()) ? 1 : 0;
      return bExact + bStart - (aExact + aStart);
    });

    return NextResponse.json(
      {
        success: true,
        query,
        total: sorted.length,
        results: sorted.slice(0, limit),
      },
      { status: 200 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Search operation failed.";
    return NextResponse.json(
      {
        success: false,
        message,
        results: [],
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message: "Method not allowed. Use GET with ?q=search-term.",
    },
    { status: 405 }
  );
}
