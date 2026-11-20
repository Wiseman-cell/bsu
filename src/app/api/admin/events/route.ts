import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: { startDate: "asc" },
    });
    return NextResponse.json(events);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, slug, description, location, startDate, endDate, category, featured } = body;

    const errors: string[] = [];
    if (!title || typeof title !== "string") errors.push("title is required");
    if (!slug || typeof slug !== "string") errors.push("slug is required");
    if (!description || typeof description !== "string") errors.push("description is required");
    if (!location || typeof location !== "string") errors.push("location is required");
    if (!startDate || typeof startDate !== "string") errors.push("startDate is required");
    if (!category || typeof category !== "string") errors.push("category is required");

    if (errors.length > 0) {
      return NextResponse.json({ error: "Validation failed", details: errors }, { status: 422 });
    }

    const event = await prisma.event.create({
      data: {
        title,
        slug,
        description,
        location,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        category,
        featured: typeof featured === "boolean" ? featured : false,
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
