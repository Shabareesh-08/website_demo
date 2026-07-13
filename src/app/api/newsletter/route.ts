import { NextResponse } from "next/server";
import { notifyInternalTeam } from "@/lib/server/notify";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email : "";
  if (!email.includes("@")) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 422 });
  }

  await notifyInternalTeam({ type: "newsletter", reference: email, summary: "New newsletter subscriber" });

  return NextResponse.json({ ok: true });
}
