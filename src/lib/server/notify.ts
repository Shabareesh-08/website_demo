/**
 * Server-side intake helpers.
 *
 * This is a stand-in for the real backend described in BACKEND_ARCHITECTURE.md.
 * Every API route in `src/app/api/*` calls into helpers here. When a real
 * database/CRM is wired up, only this file (and the route handlers that use
 * it) need to change - page and component code calling `fetch("/api/...")`
 * does not need to change at all.
 */

export function generateReferenceNumber(prefix: string) {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${random}`;
}

/**
 * Placeholder for the future notification architecture described in
 * BACKEND_ARCHITECTURE.md: an email (e.g. Resend/SES) and/or webhook
 * (e.g. Slack, internal CRM) call would go here. For now this just logs
 * server-side so the intake flow is inspectable during development.
 */
export async function notifyInternalTeam(event: {
  type: "lead" | "partner" | "career" | "newsletter" | "consultation" | "chatbot";
  reference: string;
  summary: string;
}) {
  console.log(`[notify:${event.type}] ${event.reference} - ${event.summary}`);
  // Future: await fetch(process.env.INTERNAL_WEBHOOK_URL, { method: "POST", body: JSON.stringify(event) });
  // Future: await sendEmail({ to: process.env.INTAKE_TEAM_EMAIL, subject: ..., body: ... });
  return true;
}
