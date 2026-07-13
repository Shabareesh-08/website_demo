# Phase 3 — Partner Dashboard + Admin UI

## Shared dashboard shell
- `DashboardShell` component: fixed sidebar (desktop) / slide-over sidebar (mobile), topbar with search + notifications + user avatar, "Back to Website" exit link.
- `StatCard` and `StatusBadge` primitives, shared between both dashboards.
- Charts via `recharts`: bar chart (commission/recovery trend), donut chart (claims by category) — styled to match the navy/teal/gold token set, not recharts' defaults.

## Partner Dashboard (`/partner/dashboard`)
- **Overview** — stat cards, commission trend chart, referral queue preview, recent cases table.
- **Case Tracking** (`/cases`) — searchable, status-filterable case table.
- **Referral Management** (`/referrals`) — referral table + "New Referral" inline form.
- **Commission Reports** (`/commissions`) — stat cards, trend chart, full commission ledger, CSV export button (UI only).
- **Documents** (`/documents`) — drag/click upload UI, uploaded files appear instantly in the table above existing docs.
- **Notifications** (`/notifications`) — unread/read notification feed.
- **Client Updates** (`/clients`) — per-client status cards.

## Admin Console (`/admin`)
- **Overview** — portfolio stat cards, recovery trend + claims-by-category charts, recent leads table.
- **Leads & Claims** (`/leads`) — searchable, status-filterable lead intake table (the destination for claim-evaluation-form submissions once wired to a backend).
- **Partners** (`/partners`) — partner roster with approve/review action for pending applications.
- **Content** (`/content`) — blog/resource content list with publish status and edit action (UI only, ready for a CMS).
- **Team** (`/team`) — internal staff directory with active case counts.
- **Settings** (`/settings`) — editable site-wide contact details form.

## Notes
- All data in `src/lib/dashboard-data.ts` — swap for live Supabase/CRM queries later without touching page markup.
- Both dashboards are UI-only against mock data; no auth/session gating yet (that's Phase 4 territory, alongside the chatbot and real form backends).
- `layout.tsx` for both dashboards is a client component — required because nav icon *components* are passed as props into the client-side `DashboardShell`, and passing component references across the server/client boundary isn't allowed in the App Router otherwise.

## Verified
- `npx tsc --noEmit` — clean
- `npx eslint .` — clean
- `npm run build` — 44 routes, all prerendered
- Runtime smoke test: all 13 dashboard routes return HTTP 200; spot-checked chart/table content on both dashboards
