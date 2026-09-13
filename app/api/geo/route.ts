import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Visitor country for the region prompt. On Vercel the edge network stamps
 * x-vercel-ip-country on every request; locally the header is absent and
 * the client falls back to a timezone heuristic.
 */
export function GET(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country") ?? null;
  return NextResponse.json({ country });
}
