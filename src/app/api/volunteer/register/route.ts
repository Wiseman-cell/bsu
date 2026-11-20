import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { CampusLocation } from "@prisma/client";
import { checkRateLimit } from "@/lib/rate-limit";

interface VolunteerRegistrationPayload {
  fullName: string;
  email: string;
  phone: string;
  idNumber: string;
  location: CampusLocation;
  role: string;
  availabilityStart: string;
  availabilityEnd: string;
  priorExperience?: string;
  emergencyContact: string;
}

function validatePayload(data: unknown): {
  valid: boolean;
  errors: string[];
  payload?: VolunteerRegistrationPayload;
} {
  const errors: string[] = [];

  if (!data || typeof data !== "object") {
    return { valid: false, errors: ["Request body must be a JSON object."] };
  }

  const d = data as Record<string, unknown>;

  if (typeof d.fullName !== "string" || d.fullName.trim().length < 3) {
    errors.push("fullName is required (min 3 characters).");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof d.email !== "string" || !emailRegex.test(d.email.trim())) {
    errors.push("email must be a valid email address.");
  }

  if (typeof d.phone !== "string" || d.phone.trim().length < 8) {
    errors.push("phone is required (min 8 characters).");
  }

  if (typeof d.idNumber !== "string" || d.idNumber.trim().length === 0) {
    errors.push("idNumber is required.");
  }

  const validLocations: string[] = Object.values(CampusLocation);
  if (
    typeof d.location !== "string" ||
    !validLocations.includes(d.location)
  ) {
    errors.push(`location must be a valid CampusLocation: ${validLocations.join(", ")}.`);
  }

  if (typeof d.role !== "string" || d.role.trim().length === 0) {
    errors.push("role is required.");
  }

  if (
    typeof d.availabilityStart !== "string" ||
    Number.isNaN(Date.parse(d.availabilityStart))
  ) {
    errors.push("availabilityStart must be a valid date string.");
  }

  if (
    typeof d.availabilityEnd !== "string" ||
    Number.isNaN(Date.parse(d.availabilityEnd))
  ) {
    errors.push("availabilityEnd must be a valid date string.");
  }

  if (typeof d.emergencyContact !== "string" || d.emergencyContact.trim().length === 0) {
    errors.push("emergencyContact is required.");
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: [],
    payload: {
      fullName: String(d.fullName).trim(),
      email: String(d.email).trim(),
      phone: String(d.phone).trim(),
      idNumber: String(d.idNumber).trim(),
      location: d.location as CampusLocation,
      role: String(d.role).trim(),
      availabilityStart: String(d.availabilityStart).trim(),
      availabilityEnd: String(d.availabilityEnd).trim(),
      priorExperience: typeof d.priorExperience === "string" ? String(d.priorExperience).trim() : undefined,
      emergencyContact: String(d.emergencyContact).trim(),
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

    const created = await prisma.volunteerRegistration.create({
      data: {
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        idNumber: payload.idNumber,
        location: payload.location,
        role: payload.role,
        availabilityStart: new Date(payload.availabilityStart),
        availabilityEnd: new Date(payload.availabilityEnd),
        priorExperience: payload.priorExperience,
        emergencyContact: payload.emergencyContact,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Registration saved.",
        id: created.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Volunteer registration error:", error);
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
      message: "Method not allowed. Use POST to register a volunteer.",
    },
    { status: 405 }
  );
}
