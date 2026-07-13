import { NextResponse } from "next/server";
import { generateReferenceNumber, notifyInternalTeam } from "@/lib/server/notify";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.date || !body.time || !body.phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const reference = generateReferenceNumber("BKG");
  await notifyInternalTeam({
    type: "consultation",
    reference,
    summary: `Consultation booked for ${body.date} at ${body.time}`,
  });

  return NextResponse.json({ ok: true, referenceNumber: reference });
}
