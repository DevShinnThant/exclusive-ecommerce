import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/contact"],
};

export function middleware(request: NextRequest) {
  if (!request.cookies.toString().length) {
    // Respond with JSON indicating an error message
    // return Response.json(
    //   { success: false, message: "authentication failed" },
    //   { status: 401 }
    // );
  }
}
