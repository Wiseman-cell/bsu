import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const item = await prisma.download.findUnique({
      where: { id: id },
    });
    if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(item);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await request.json();
    const { title, fileUrl, category, description, fileSize } = body;

    const data: Record<string, unknown> = {};
    if (title !== undefined) data.title = title;
    if (fileUrl !== undefined) data.fileUrl = fileUrl;
    if (category !== undefined) data.category = category;
    if (description !== undefined) data.description = description;
    if (fileSize !== undefined) data.fileSize = fileSize;

    const item = await prisma.download.update({
      where: { id: id },
      data,
    });

    return NextResponse.json(item);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await prisma.download.delete({ where: { id: id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
