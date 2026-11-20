import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const PUBLIC_FILE = /\.[a-zA-Z0-9]+$/;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow static files and public assets
  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  // Protect admin API routes
  if (pathname.startsWith("/api/admin")) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token || token.role !== "admin") {
      return NextResponse.json(
        { error: "Unauthorized. Admin access required." },
        { status: 403 }
      );
    }
  }

  // Protect portal routes — require any authenticated user
  if (pathname.startsWith("/portal")) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      const signInUrl = new URL("/portal/student", request.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/admin/:path*", "/portal/:path*"],
};
