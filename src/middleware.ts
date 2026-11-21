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

  // Protect admin API routes and admin pages
  if (pathname.startsWith("/api/admin") || pathname.startsWith("/admin")) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token || token.role !== "admin") {
      if (pathname.startsWith("/api/admin")) {
        return NextResponse.json(
          { error: "Unauthorized. Admin access required." },
          { status: 403 }
        );
      }
      return NextResponse.redirect(new URL("/portal/student", request.url));
    }
  }

  // Protect portal routes — require any authenticated user
  // Exclude the sign-in page itself to avoid redirect loops
  if (pathname.startsWith("/portal") && pathname !== "/portal/student") {
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
  matcher: ["/api/admin/:path*", "/admin/:path*", "/portal/:path*"],
};
