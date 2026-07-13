# Phase 4 — Chatbot, Forms, and Backend Architecture

## AI Claim Qualification Chatbot
- Floating launcher (bottom-left, site-wide) opens a conversational panel.
- Scripted flow exactly matching the brief: Insurance Type → Insurance Company → Claim Status → Claim Amount → Incident Date → Rejection Letter? → Upload Documents (skippable) → Name → Phone → Email → Preferred Callback Time.
- On completion: submits to `/api/leads` with `source: "chatbot"`, generates a reference number, and offers to start a new conversation.
- Flow config lives in `src/lib/chatbot-flow.ts` — add/reorder/remove questions there without touching the component.

## Forms — now wired to real endpoints
Every form on the site now performs a real `fetch()` POST and handles success/error states from an actual response, not a `setTimeout` mock:

| Form | Endpoint |
|---|---|
| Claim Evaluation | `POST /api/leads` |
| Chatbot completion | `POST /api/leads` (`source: "chatbot"`) |
| Partner Registration | `POST /api/partners` |
| Careers Application | `POST /api/careers` |
| Newsletter Signup | `POST /api/newsletter` |
| Consultation Booking | `POST /api/consultations` |

Each route validates required fields, returns proper 4xx errors on bad input, generates a reference number, and logs a server-side notification event via `src/lib/server/notify.ts` — the single choke point where a real Slack/email/CRM webhook gets added later.

## Backend architecture documentation
See `BACKEND_ARCHITECTURE.md` at the project root — it documents the current state, a suggested Supabase schema, exactly which lines change when a database is added, the file-upload path, and how dashboard auth should be layered in. Written so a future session (or another engineer) doesn't have to reverse-engineer the contract.

## Verified
- `npx tsc --noEmit` — clean
- `npx eslint .` — clean
- `npm run build` — 49 routes (44 static/SSG + 5 dynamic API routes)
- All 5 API routes smoke-tested with curl: success responses, validation error responses, and confirmed server-side notification logging for each intake type
- Confirmed chatbot launcher renders site-wide
