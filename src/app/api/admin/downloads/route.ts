import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const downloads = await prisma.download.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(downloads);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, fileUrl, category, description, fileSize } = body;

    const errors: string[] = [];
    if (!title || typeof title !== "string") errors.push("title is required");
    if (!fileUrl || typeof fileUrl !== "string") errors.push("fileUrl is required");
    if (!category || typeof category !== "string") errors.push("category is required");

    if (errors.length > 0) {
      return NextResponse.json({ error: "Validation failed", details: errors }, { status: 422 });
    }

    const download = await prisma.download.create({
      data: {
        title,
        fileUrl,
        category,
        description: description ?? null,
        fileSize: fileSize ?? null,
      },
    });

    return NextResponse.json(download, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
