import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(images);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, imageUrl, category, description } = body;

    const errors: string[] = [];
    if (!title || typeof title !== "string") errors.push("title is required");
    if (!imageUrl || typeof imageUrl !== "string") errors.push("imageUrl is required");
    if (!category || typeof category !== "string") errors.push("category is required");

    if (errors.length > 0) {
      return NextResponse.json({ error: "Validation failed", details: errors }, { status: 422 });
    }

    const image = await prisma.galleryImage.create({
      data: {
        title,
        imageUrl,
        category,
        description: description ?? null,
      },
    });

    return NextResponse.json(image, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
