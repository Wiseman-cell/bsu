import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const notices = await prisma.notice.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(notices);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, content, category, isUrgent, expiresAt } = body;

    const errors: string[] = [];
    if (!title || typeof title !== "string") errors.push("title is required");
    if (!slug || typeof slug !== "string") errors.push("slug is required");
    if (!content || typeof content !== "string") errors.push("content is required");
    if (!category || typeof category !== "string") errors.push("category is required");

    if (errors.length > 0) {
      return NextResponse.json({ error: "Validation failed", details: errors }, { status: 422 });
    }

    const notice = await prisma.notice.create({
      data: {
        title,
        slug,
        content,
        category,
        isUrgent: typeof isUrgent === "boolean" ? isUrgent : false,
        expiresAt: expiresAt ? new Date(expiresAt) : null,
      },
    });

    return NextResponse.json(notice, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
