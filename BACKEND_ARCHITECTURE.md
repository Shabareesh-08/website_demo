# Backend Architecture — Current State & Path Forward

This document describes how the frontend is wired today, and exactly what
needs to change to attach a real backend. It's written so a future
implementer (or Claude, in a future session) doesn't have to re-derive the
contract from scratch.

## Current state (Phase 4)

Every form on the site talks to a real Next.js Route Handler under
`src/app/api/*`, over `fetch()`, with a real request/response cycle:

| Form | Endpoint | File |
|---|---|---|
| Claim Evaluation (`ClaimForm`) | `POST /api/leads` | `src/app/api/leads/route.ts` |
| AI Claim Chatbot | `POST /api/leads` (with `source: "chatbot"`) | same |
| Partner Registration | `POST /api/partners` | `src/app/api/partners/route.ts` |
| Careers Application | `POST /api/careers` | `src/app/api/careers/route.ts` |
| Newsletter Signup | `POST /api/newsletter` | `src/app/api/newsletter/route.ts` |
| Consultation Booking | `POST /api/consultations` | `src/app/api/consultations/route.ts` |

Each route validates the payload, generates a reference number
(`src/lib/server/notify.ts`), logs a server-side "notification" event, and
returns JSON. **Nothing is persisted to a database yet** — there is no
database. This is intentional: it lets every form be built, tested, and
demoed end-to-end (loading state → network call → success/error state)
without blocking on infrastructure decisions.

The Document Upload widget (`/contact`) and the chatbot's document step are
UI-only — they hold files in browser memory and don't upload them anywhere
yet, since real file upload needs object storage (see below) rather than a
JSON API route.

## What changes when Supabase is added

1. **Schema** (suggested starting point):
   - `leads` — id, reference_number, source (`website-form` | `chatbot`), full_name, mobile, email, insurance_type, insurance_company, claim_status, claim_amount, incident_date, description, created_at
   - `partner_applications` — id, reference_number, full_name, partner_type, phone, email, firm_name, message, status, created_at
   - `job_applications` — id, reference_number, full_name, position, phone, email, resume_url, message, created_at
   - `newsletter_subscribers` — id, email, subscribed_at
   - `consultations` — id, reference_number, date, time, phone, created_at
   - `documents` — id, owner_type (`lead`|`partner`|`case`), owner_id, storage_path, uploaded_at

2. **Route handler changes** — each file in `src/app/api/*/route.ts` gets a
   `supabase.from("<table>").insert(...)` call added where the comment
   currently says "Future: ...". The `fetch()` calls in every form component
   **do not change at all** — the contract (`POST`, JSON body, `{ ok, referenceNumber }`
   response) stays identical.

3. **File uploads** — switch `DocumentUpload` and the chatbot's file step from
   holding a `File` in memory to uploading to Supabase Storage (or S3) via a
   signed URL, then pass the resulting storage path to the lead/case record.

4. **Notifications / CRM** — `notifyInternalTeam()` in
   `src/lib/server/notify.ts` is the single choke point for outbound
   notifications. Add the real Slack webhook, email send (e.g. Resend), and/or
   CRM webhook call there; every route already calls into it, so nothing else
   needs to change.

5. **Auth for dashboards** — `/partner/dashboard/*` and `/admin/*` currently
   render for anyone with the URL (no session check) and read from static
   mock data in `src/lib/dashboard-data.ts`. To gate them:
   - Add Supabase Auth (or another provider) with a `middleware.ts` that
     redirects unauthenticated requests away from `/partner/dashboard` and `/admin`.
   - Replace the imports from `dashboard-data.ts` with real queries scoped to
     the logged-in partner (`where partner_id = auth.uid()`) or admin role.
   - The `DashboardShell` component's `userName`/`userInitials` props are
     already parameterized — pass the authenticated user's real name instead
     of the current hardcoded values.

## Chatbot upgrade path

The chatbot (`src/components/chatbot/claim-chatbot.tsx`) is currently a
deterministic, scripted flow defined in `src/lib/chatbot-flow.ts` — it asks
the same fixed sequence of questions regardless of what the user says,
which is fully sufficient for structured lead qualification. If a future
iteration wants a genuinely conversational LLM-backed assistant (e.g. to
answer free-form questions about claim rights mid-flow), the natural
integration point is a new `POST /api/chatbot` route that calls the
Anthropic API with the conversation transcript, while keeping the same
final `submitLead()` call into `/api/leads` once qualifying information has
been collected.

## Summary for whoever picks this up next

- Don't change any component's `fetch()` call signature — the contract is
  intentionally stable.
- Start with `src/lib/server/notify.ts` and the six route handlers in
  `src/app/api/*` — that's the entire current "backend."
- Dashboards need auth before they can go anywhere near real data; they are
  UI-complete but access-unrestricted today.
