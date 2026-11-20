import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface TenderSubmissionPayload {
  refNumber: string;
  companyName: string;
  contactEmail: string;
  contactPhone: string;
  proposalSummary: string;
  submissionType: "digital" | "hardcopy";
}

function validatePayload(data: unknown): {
  valid: boolean;
  errors: string[];
  payload?: TenderSubmissionPayload;
} {
  const errors: string[] = [];

  if (!data || typeof data !== "object") {
    return { valid: false, errors: ["Request body must be a JSON object."] };
  }

  const d = data as Record<string, unknown>;

  if (typeof d.refNumber !== "string" || d.refNumber.trim().length === 0) {
    errors.push("refNumber is required and must be a string.");
  }

  if (typeof d.companyName !== "string" || d.companyName.trim().length < 2) {
    errors.push("companyName is required (min 2 characters).");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    typeof d.contactEmail !== "string" ||
    !emailRegex.test(d.contactEmail.trim())
  ) {
    errors.push("contactEmail must be a valid email address.");
  }

  if (typeof d.contactPhone !== "string" || d.contactPhone.trim().length < 8) {
    errors.push("contactPhone is required (min 8 characters).");
  }

  if (
    typeof d.proposalSummary !== "string" ||
    d.proposalSummary.trim().length < 20
  ) {
    errors.push("proposalSummary is required (min 20 characters).");
  }

  if (
    typeof d.submissionType !== "string" ||
    !["digital", "hardcopy"].includes(d.submissionType)
  ) {
    errors.push('submissionType must be "digital" or "hardcopy".');
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: [],
    payload: {
      refNumber: String(d.refNumber).trim(),
      companyName: String(d.companyName).trim(),
      contactEmail: String(d.contactEmail).trim(),
      contactPhone: String(d.contactPhone).trim(),
      proposalSummary: String(d.proposalSummary).trim(),
      submissionType: d.submissionType as "digital" | "hardcopy",
    },
  };
}

export async function POST(request: NextRequest) {
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

    const { refNumber } = validation.payload;

    // Validate EOI reference number
    if (refNumber !== "BSU/EOI/FRM/08/2026") {
      return NextResponse.json(
        {
          success: false,
          message: `EOI reference '${refNumber}' not found or is no longer active.`,
        },
        { status: 404 }
      );
    }

    await prisma.tenderSubmission.create({
      data: {
        refNumber: validation.payload.refNumber,
        companyName: validation.payload.companyName,
        contactEmail: validation.payload.contactEmail,
        contactPhone: validation.payload.contactPhone,
        proposalSummary: validation.payload.proposalSummary,
        submissionType: validation.payload.submissionType,
        status: "under_review",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Tender submission received successfully.",
        data: {
          refNumber: validation.payload.refNumber,
          companyName: validation.payload.companyName,
          submissionType: validation.payload.submissionType,
          receivedAt: new Date().toISOString(),
          status: "under_review",
        },
      },
      { status: 201 }
    );
  } catch {
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
      message: "Method not allowed. Use POST to submit a tender.",
    },
    { status: 405 }
  );
}
