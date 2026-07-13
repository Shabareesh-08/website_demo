import { NextResponse } from "next/server";
import { generateReferenceNumber, notifyInternalTeam } from "@/lib/server/notify";

/**
 * POST /api/leads
 *
 * Intake endpoint for the Claim Evaluation form and the AI chatbot flow.
 * Today this validates the payload, generates a reference number, and logs
 * a notification. When Supabase/CRM is wired up (see BACKEND_ARCHITECTURE.md),
 * this handler will additionally:
 *   1. Insert a row into `leads` (Supabase)
 *   2. Trigger a CRM webhook / internal notification
 *   3. Optionally enqueue a callback-scheduling task
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const requiredFields = ["fullName", "mobile", "email", "insuranceType"];
  const missing = requiredFields.filter((field) => !body[field]);
  if (missing.length > 0) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(", ")}` }, { status: 422 });
  }

  const reference = generateReferenceNumber("ECS");

  await notifyInternalTeam({
    type: body.source === "chatbot" ? "chatbot" : "lead",
    reference,
    summary: `${body.fullName} - ${body.insuranceType ?? "Unspecified"} (${body.claimStatus ?? "status unknown"})`,
  });

  return NextResponse.json({ ok: true, referenceNumber: reference });
}
