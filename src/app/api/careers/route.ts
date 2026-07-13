import { NextResponse } from "next/server";
import { generateReferenceNumber, notifyInternalTeam } from "@/lib/server/notify";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.fullName || !body.email || !body.position) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const reference = generateReferenceNumber("APP");
  await notifyInternalTeam({
    type: "career",
    reference,
    summary: `${body.fullName} applied for ${body.position}`,
  });

  return NextResponse.json({ ok: true, referenceNumber: reference });
}
