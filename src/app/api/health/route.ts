import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const startTime = Date.now();
  let dbStatus: "healthy" | "unhealthy" = "unhealthy";
  let dbTimestamp: string | null = null;
  let dbError: string | null = null;

  try {
    const result = await prisma.$queryRaw<[{ now: Date }]>`SELECT NOW() as now`;
    dbTimestamp = result[0].now.toISOString();
    dbStatus = "healthy";
  } catch (err) {
    dbError = err instanceof Error ? err.message : "Unknown database error";
  }

  const uptime = process.uptime();
  const responseTime = Date.now() - startTime;

  const status = dbStatus === "healthy" ? 200 : 503;

  return NextResponse.json(
    {
      success: dbStatus === "healthy",
      service: "bsu-web-platform",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development",
      version: "1.0.0",
      checks: {
        database: {
          status: dbStatus,
          timestamp: dbTimestamp,
          responseTimeMs: responseTime,
          error: dbError,
        },
        node: {
          uptimeSeconds: Math.floor(uptime),
          uptimeFormatted: formatUptime(uptime),
          platform: process.platform,
        },
      },
    },
    { status }
  );
}

function formatUptime(seconds: number): string {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const parts: string[] = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (mins > 0) parts.push(`${mins}m`);
  parts.push(`${secs}s`);
  return parts.join(" ");
}

export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}
