# Phase 1 — Design System + Homepage + Navigation

## What's included
- **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**, matching the requested stack.
- **Self-hosted Newsreader (display) + Inter (body/UI)** variable fonts — no external font-loading dependency, no layout shift.
- **Design tokens** in `src/app/globals.css`: deep navy scale, muted teal scale, gold reserved strictly for awards/stats, warm-neutral backgrounds, editorial shadows/easing.
- **Signature element — the "Ledger Rule":** a thin baseline + marker motif that echoes a claim's progress line (filed → recovered). It appears under section eyebrows, as the hero slide progress indicator, as the fill mechanic behind the animated statistics, and as the (deliberately un-numbered, per the brief) recovery-process timeline connector.
- **Navigation:** sticky, utility bar (hours / WhatsApp / Raise a Complaint / email), full Services mega-dropdown, highlighted phone number, mobile slide-down menu, and a mobile-only sticky Call / WhatsApp / Evaluate bar.
- **Homepage sections, in brief order:** Hero slider (12 slides) → animated stats → services grid (Commercial featured) → video testimonial carousel + Google rating → awards/recognition → directors carousel → recovery process timeline → claim evaluation form (with mobile/email OTP toggle, fully wired client state) → blog preview → resource library preview → contact section.
- All content lives in `src/lib/mock-data.ts` and `src/lib/site-config.ts` — swap in real copy, images, or a CMS/Supabase fetch later with no component changes needed.
- Image slots use labelled placeholder blocks (not generic grey boxes) so real photography drops in without layout changes.

## Verified
- `npx tsc --noEmit` — clean.
- `npx eslint .` — clean.
- `npm run build` — production build succeeds, homepage prerenders as static content.

## Next (Phase 2+)
- Internal pages (About, per-service SEO pages, Blog, Partner, Careers, Contact, Resources).
- Partner dashboard + admin UI.
- Chatbot, form backend (Supabase/CRM + webhook), and remaining future-enhancement items.

## Run locally
```
npm install
npm run dev
```
