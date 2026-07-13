export const resourceCategories = ["All", "Checklists", "Guides", "IRDAI", "Ombudsman"] as const;

export type Resource = {
  title: string;
  category: (typeof resourceCategories)[number];
  type: "PDF Guide" | "External Resource";
  description: string;
};

export const resources: Resource[] = [
  {
    title: "Commercial Claim Checklist",
    category: "Checklists",
    type: "PDF Guide",
    description: "Every document a commercial claim needs, organised by claim stage.",
  },
  {
    title: "Fire Insurance Checklist",
    category: "Checklists",
    type: "PDF Guide",
    description: "Stock records, safety compliance, and survey documentation for fire claims.",
  },
  {
    title: "Marine Claim Guide",
    category: "Guides",
    type: "PDF Guide",
    description: "Understanding general average, survey reports, and carrier notice timelines.",
  },
  {
    title: "Health Insurance Guide",
    category: "Guides",
    type: "PDF Guide",
    description: "Cashless denials, deficiency letters, and the escalation path that follows each.",
  },
  {
    title: "Insurance Ombudsman Guide",
    category: "Ombudsman",
    type: "External Resource",
    description: "Official Council for Insurance Ombudsmen portal and jurisdiction map.",
  },
  {
    title: "IRDAI Master Circular - Policyholder Protection",
    category: "IRDAI",
    type: "External Resource",
    description: "The consolidated 2024 circular governing insurer conduct on claims and grievances.",
  },
  {
    title: "IRDAI Grievance Portal (Bima Bharosa)",
    category: "IRDAI",
    type: "External Resource",
    description: "File a regulatory grievance directly with IRDAI if your insurer's response is unsatisfactory.",
  },
  {
    title: "Consumer Awareness Guide - Insurance Basics",
    category: "Guides",
    type: "PDF Guide",
    description: "A plain-language primer on policy wording, exclusions, and your rights as a policyholder.",
  },
  {
    title: "Engineering Claim Checklist",
    category: "Checklists",
    type: "PDF Guide",
    description: "Maintenance logs, root-cause reports, and technical documentation for CAR/EAR claims.",
  },
];
