# Phase 2 — All Internal Pages

## Pages added
- `/about` — Story, Mission, Vision, Philosophy, Core Values, Timeline, Leadership (reuses Directors), CSR.
- `/services` — index grid of all 10 categories.
- `/services/[slug]` — dynamic SEO template (Overview, Who Needs It, Common Rejection Reasons, Required Documents, Recovery Process, FAQs, CTA) for all 10 services, statically generated via `generateStaticParams`.
- `/blog` — searchable/filterable Knowledge Centre index (client-side search + category pills) + newsletter signup.
- `/blog/[slug]` — 6 full articles across categories, with related-posts and share buttons (LinkedIn/X/copy-link).
- `/partner` — Benefits, commission tiers table, dashboard preview, referral workflow, registration form, FAQs.
- `/resources` — searchable resource library (checklists, guides, IRDAI/Ombudsman links).
- `/careers` — culture, open positions, benefits, application form (with resume upload UI).
- `/contact` — map + details (shared with homepage), document upload widget, consultation booking widget, claim evaluation form.
- `/privacy-policy`, `/terms`, `/disclaimer`, `/cookie-policy` — added so every footer link resolves (no dead links).

## Verified
- `npx tsc --noEmit` — clean
- `npx eslint .` — clean
- `npm run build` — 31 routes, all prerendered (static or SSG via generateStaticParams)
- Runtime smoke test: all 14 primary routes return HTTP 200; spot-checked rendered content on service/partner pages

## Still ahead
- Phase 3: Partner dashboard + Admin UI
- Phase 4: Chatbot, form backend wiring (Supabase/CRM + notification webhook), remaining future-enhancement items
