export const blogCategories = [
  "All",
  "Commercial Claims",
  "Fire Insurance",
  "Marine Insurance",
  "Health Insurance",
  "Motor Insurance",
  "Insurance Law",
  "IRDAI Updates",
  "Case Studies",
  "Education",
  "Industry News",
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  category: (typeof blogCategories)[number];
  date: string;
  excerpt: string;
  readTime: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "irdai-claim-rejection-rights-2026",
    title: "What IRDAI's 2024 Master Circular Means for Your Rejected Claim",
    category: "IRDAI Updates",
    date: "2026-06-18",
    excerpt: "A plain-English breakdown of your rights as a policyholder under the latest protection framework.",
    readTime: "6 min read",
    body: [
      "The IRDAI Master Circular on Policyholder Protection consolidated a wide range of earlier circulars into a single reference point for how insurers must handle claims, grievances, and disclosures. For policyholders, the practical effect is a clearer timeline: insurers are expected to acknowledge a claim, request any further documents within a defined window, and communicate a decision without open-ended delay.",
      "If your claim has been sitting without a decision for longer than the timelines the circular sets out, that delay itself is grounds for a grievance - separate from whether the claim is eventually approved or denied.",
      "The circular also tightens expectations around communication: a rejection has to state the specific policy clause relied upon, not a generic reference to 'terms and conditions.' If your rejection letter doesn't cite a specific clause, that's usually the first thing worth challenging.",
      "None of this guarantees a claim will be approved - it governs process, not outcome. But a process violation is often the fastest route to getting a stalled or vaguely-rejected claim looked at again.",
    ],
  },
  {
    slug: "health-claim-deficiency-vs-rejection",
    title: "Deficiency Letter or Rejection? Why the Difference Matters",
    category: "Health Insurance",
    date: "2026-06-04",
    excerpt: "Insurers use these terms loosely - but the distinction changes your entire escalation strategy.",
    readTime: "5 min read",
    body: [
      "A deficiency letter and a rejection letter can look similar at first glance - both arrive when your claim isn't moving forward - but they mean different things procedurally. A deficiency letter is a request for more information: additional records, a clarification, a missing document. It is not a decision, and responding to it correctly can prevent a rejection altogether.",
      "A rejection, by contrast, is a final decision on the claim as submitted. It should cite the specific policy clause or exclusion relied upon.",
      "The mistake we see most often is a policyholder responding to a rejection as though it were a deficiency - resubmitting documents and waiting, when the correct move was to file a formal grievance or Ombudsman complaint within the applicable window.",
      "Read the letter's exact language before deciding your next step. If it isn't clear which one you've received, that ambiguity is itself worth raising with the insurer's grievance cell in writing.",
    ],
  },
  {
    slug: "fire-claim-documentation-checklist",
    title: "The Documentation That Actually Wins Fire Insurance Claims",
    category: "Fire Insurance",
    date: "2026-05-22",
    excerpt: "What surveyors look for, and the paperwork gap that causes most commercial fire claims to stall.",
    readTime: "7 min read",
    body: [
      "Most contested fire claims don't fail because the loss wasn't real - they fail because the loss can't be evidenced to the standard an insurer's surveyor expects. Stock registers at the time of the fire, asset registers with purchase dates and depreciation schedules, and fire-safety compliance records are the three documents that most often decide the outcome.",
      "Photographs taken immediately after the fire - before any cleanup - carry more weight than photographs taken days later, once debris has been moved or repairs have begun.",
      "Where a business doesn't maintain real-time stock records, a reconstructed estimate based on purchase and sales ledgers is still usable, but it needs to be presented as a reconstruction with its methodology stated, not as if it were a contemporaneous record.",
    ],
  },
  {
    slug: "insurance-ombudsman-escalation-guide",
    title: "How to Escalate to the Insurance Ombudsman, Step by Step",
    category: "Insurance Law",
    date: "2026-05-10",
    excerpt: "A practical walkthrough of the Ombudsman Rules 2017 process, timelines, and eligibility limits.",
    readTime: "8 min read",
    body: [
      "The Insurance Ombudsman is a free, statutory grievance-redressal forum for individual policyholders, and it is often faster than civil litigation for claims within its monetary jurisdiction. But it has a specific procedural gate: you must first have raised the grievance with the insurer directly, and either received an unsatisfactory response or waited 30 days without one.",
      "Complaints must generally be filed within one year of the insurer's final rejection or resolution.",
      "The forum handles individual policyholders' claims - not purely commercial disputes between businesses and insurers, which is why representation strategy differs meaningfully between a health claim and a large commercial property claim.",
      "An award from the Ombudsman is binding on the insurer if the policyholder accepts it, up to the forum's monetary limit - making it one of the more practically useful escalation routes available to individual claimants.",
    ],
  },
  {
    slug: "marine-cargo-general-average-explained",
    title: "General Average: The Marine Claims Clause Most Cargo Owners Don't Expect",
    category: "Marine Insurance",
    date: "2026-04-28",
    excerpt: "A centuries-old maritime principle still shapes modern cargo claim negotiations.",
    readTime: "6 min read",
    body: [
      "General average is a principle unique to marine law: when a voyage is threatened and the ship's master takes an action to save it - jettisoning cargo, for instance - all cargo interests share the resulting loss proportionally, whether or not their own cargo was affected.",
      "For cargo owners, this means you can be asked to contribute to a loss even when your own shipment arrived undamaged. The average adjuster's calculation of your contribution is the document to scrutinise most closely.",
      "Cargo insurance typically covers a general average contribution, but the claim still needs to be evidenced and negotiated against the adjuster's figures - it isn't paid automatically.",
    ],
  },
  {
    slug: "commercial-claim-case-study-textile-warehouse",
    title: "Case Study: Reopening an 18-Month Rejected Warehouse Fire Claim",
    category: "Case Studies",
    date: "2026-04-12",
    excerpt: "How an independent re-assessment overturned a full rejection on a textile warehouse loss.",
    readTime: "5 min read",
    body: [
      "A textile manufacturer's warehouse fire claim was rejected outright, with the insurer's surveyor attributing the loss to inadequate fire-safety compliance. The rejection had stood for 18 months by the time the client approached us.",
      "An independent re-assessment found that the specific safety lapse cited by the insurer's surveyor was not, on the fire brigade's own report, connected to the fire's cause or spread - a distinction that matters under how most policy safety-conditions clauses are interpreted.",
      "Backed by this independent report and the original fire brigade findings, we re-approached the insurer directly rather than proceeding straight to the Ombudsman. The claim was reopened and settled in full.",
    ],
  },
];
