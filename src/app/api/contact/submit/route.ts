import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { checkRateLimit } from "@/lib/rate-limit";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function validatePayload(data: unknown): {
  valid: boolean;
  errors: string[];
  payload?: ContactPayload;
} {
  const errors: string[] = [];

  if (!data || typeof data !== "object") {
    return { valid: false, errors: ["Request body must be a JSON object."] };
  }

  const d = data as Record<string, unknown>;

  if (typeof d.name !== "string" || d.name.trim().length === 0) {
    errors.push("name is required.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof d.email !== "string" || !emailRegex.test(d.email.trim())) {
    errors.push("email must be a valid email address.");
  }

  if (typeof d.subject !== "string" || d.subject.trim().length === 0) {
    errors.push("subject is required.");
  }

  if (typeof d.message !== "string" || d.message.trim().length === 0) {
    errors.push("message is required.");
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: [],
    payload: {
      name: String(d.name).trim(),
      email: String(d.email).trim(),
      subject: String(d.subject).trim(),
      message: String(d.message).trim(),
    },
  };
}

export async function POST(request: NextRequest) {
  const rate = checkRateLimit(request);
  if (!rate.allowed) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON in request body." },
        { status: 400 }
      );
    }

    const validation = validatePayload(body);
    if (!validation.valid || !validation.payload) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed.",
          errors: validation.errors,
        },
        { status: 422 }
      );
    }

    const payload = validation.payload;

    // Persist to database
    await prisma.contactSubmission.create({
      data: {
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        message: payload.message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message received. We will respond shortly.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: "Method not allowed. Use POST to submit a contact form.",
    },
    { status: 405 }
  );
}
