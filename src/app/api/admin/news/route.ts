import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const articles = await prisma.newsArticle.findMany({
      orderBy: { publishedAt: "desc" },
    });
    return NextResponse.json(articles);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, category, publishedAt, featured } = body;

    const errors: string[] = [];
    if (!title || typeof title !== "string") errors.push("title is required");
    if (!slug || typeof slug !== "string") errors.push("slug is required");
    if (!excerpt || typeof excerpt !== "string") errors.push("excerpt is required");
    if (!content || typeof content !== "string") errors.push("content is required");
    if (!category || typeof category !== "string") errors.push("category is required");

    if (errors.length > 0) {
      return NextResponse.json({ error: "Validation failed", details: errors }, { status: 422 });
    }

    const article = await prisma.newsArticle.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        category,
        publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
        featured: typeof featured === "boolean" ? featured : false,
      },
    });

    return NextResponse.json(article, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
