export type CaseStatus = "Submitted" | "Under Review" | "In Negotiation" | "Settled" | "Closed";

export const partnerCases = [
  { id: "ECS-104821", client: "Meridian Textiles Pvt. Ltd.", type: "Fire Insurance", value: "₹3.8 Cr", status: "Settled" as CaseStatus, updated: "2026-06-28" },
  { id: "ECS-104902", client: "Kavitha Reddy", type: "Health Insurance", value: "₹6.2 Lakh", status: "In Negotiation" as CaseStatus, updated: "2026-07-02" },
  { id: "ECS-105011", client: "Coastal Shipping Agencies", type: "Marine & Cargo", value: "₹1.4 Cr", status: "Under Review" as CaseStatus, updated: "2026-07-04" },
  { id: "ECS-105033", client: "Deccan Engineering Works", type: "Engineering Insurance", value: "₹92 Lakh", status: "Settled" as CaseStatus, updated: "2026-06-15" },
  { id: "ECS-105112", client: "Sunrise Retail Group", type: "Business Interruption", value: "₹2.1 Cr", status: "Submitted" as CaseStatus, updated: "2026-07-06" },
  { id: "ECS-105140", client: "Narayan Rao", type: "Motor Insurance", value: "₹4.8 Lakh", status: "Closed" as CaseStatus, updated: "2026-05-30" },
];

export const referralQueue = [
  { id: "REF-2291", client: "Anand Constructions", type: "Engineering Insurance", submitted: "2026-07-05", status: "Pending Review" },
  { id: "REF-2288", client: "Priya Nair", type: "Health Insurance", submitted: "2026-07-03", status: "Accepted" },
  { id: "REF-2279", client: "Vantage Logistics", type: "Liability Insurance", submitted: "2026-06-29", status: "Accepted" },
  { id: "REF-2265", client: "Ramesh Gupta", type: "Motor Insurance", submitted: "2026-06-20", status: "Declined" },
];

export const commissionHistory = [
  { month: "Feb", amount: 84000 },
  { month: "Mar", amount: 112000 },
  { month: "Apr", amount: 96000 },
  { month: "May", amount: 145000 },
  { month: "Jun", amount: 168000 },
  { month: "Jul", amount: 52000 },
];

export const commissionLedger = [
  { id: "COM-5521", caseId: "ECS-104821", client: "Meridian Textiles Pvt. Ltd.", amount: "₹1,90,000", status: "Paid", date: "2026-06-30" },
  { id: "COM-5498", caseId: "ECS-105033", client: "Deccan Engineering Works", amount: "₹46,000", status: "Paid", date: "2026-06-18" },
  { id: "COM-5602", caseId: "ECS-104902", client: "Kavitha Reddy", amount: "₹31,000", status: "Pending Settlement", date: "-" },
];

export const partnerDocuments = [
  { name: "Partner Agreement - Signed.pdf", case: "General", uploaded: "2026-01-14", size: "1.2 MB" },
  { name: "Meridian Textiles - Policy Copy.pdf", case: "ECS-104821", uploaded: "2026-04-02", size: "3.4 MB" },
  { name: "Kavitha Reddy - Discharge Summary.pdf", case: "ECS-104902", uploaded: "2026-06-30", size: "0.8 MB" },
];

export const partnerNotifications = [
  { id: 1, message: "ECS-104821 (Meridian Textiles) has been marked Settled.", time: "2 days ago", unread: true },
  { id: 2, message: "New commission of ₹1,90,000 has been credited.", time: "2 days ago", unread: true },
  { id: 3, message: "REF-2291 (Anand Constructions) is pending your additional documents.", time: "4 days ago", unread: false },
  { id: 4, message: "ECS-105011 (Coastal Shipping) moved to Under Review.", time: "1 week ago", unread: false },
];

export const partnerClients = [
  { name: "Meridian Textiles Pvt. Ltd.", cases: 1, lastUpdate: "Claim settled - ₹3.8 Cr recovered", status: "Active" },
  { name: "Kavitha Reddy", cases: 1, lastUpdate: "Awaiting Ombudsman hearing date", status: "Active" },
  { name: "Coastal Shipping Agencies", cases: 1, lastUpdate: "Survey report under review", status: "Active" },
  { name: "Narayan Rao", cases: 1, lastUpdate: "Case closed", status: "Closed" },
];

// --- Admin ---

export const adminOverviewStats = [
  { label: "Total Claims in Pipeline", value: "182" },
  { label: "Recovered This Quarter", value: "₹38.4 Cr" },
  { label: "Active Partners", value: "94" },
  { label: "New Leads (7 days)", value: "37" },
];

export const monthlyRecovery = [
  { month: "Feb", recovered: 6.1 },
  { month: "Mar", recovered: 7.8 },
  { month: "Apr", recovered: 5.4 },
  { month: "May", recovered: 9.2 },
  { month: "Jun", recovered: 11.6 },
  { month: "Jul", recovered: 3.9 },
];

export const claimsByCategory = [
  { category: "Health", value: 41 },
  { category: "Commercial", value: 27 },
  { category: "Fire", value: 19 },
  { category: "Marine", value: 12 },
  { category: "Motor", value: 22 },
  { category: "Engineering", value: 15 },
];

export const adminLeads = [
  { id: "LD-8821", name: "Anjali Deshpande", type: "Health Insurance", amount: "₹4.2 Lakh", source: "Website Form", status: "New", date: "2026-07-06" },
  { id: "LD-8817", name: "Ramesh Traders Pvt. Ltd.", type: "Fire Insurance", amount: "₹1.6 Cr", source: "Partner Referral", status: "Assigned", date: "2026-07-05" },
  { id: "LD-8809", name: "Kiran Kumar", type: "Motor Insurance", amount: "₹2.1 Lakh", source: "Website Form", status: "Contacted", date: "2026-07-04" },
  { id: "LD-8791", name: "Global Freight Solutions", type: "Marine & Cargo", amount: "₹85 Lakh", source: "Website Form", status: "Qualified", date: "2026-07-01" },
  { id: "LD-8772", name: "Sunita Rao", type: "Health Insurance", amount: "₹3.4 Lakh", source: "AI Chatbot", status: "Rejected", date: "2026-06-27" },
];

export const adminPartners = [
  { name: "R. Venkatesh & Associates", type: "Insurance Broker", cases: 14, commissionYtd: "₹8.4 Lakh", status: "Active" },
  { name: "Priya Sharma", type: "Financial Advisor", cases: 6, commissionYtd: "₹2.1 Lakh", status: "Active" },
  { name: "Krishnan & Co, Chartered Accountants", type: "CA", cases: 9, commissionYtd: "₹5.6 Lakh", status: "Active" },
  { name: "Sunrise Surveyors LLP", type: "Surveyor", cases: 3, commissionYtd: "₹1.2 Lakh", status: "Pending Approval" },
];

export const adminTeam = [
  { name: "Anjali Menon", role: "Director, Health & Retail Claims", cases: 22, department: "Health Claims" },
  { name: "Rohit Sharma", role: "Director, Commercial & Marine", cases: 18, department: "Commercial Claims" },
  { name: "Sneha Kulkarni", role: "Senior Claims Analyst", cases: 31, department: "Health Claims" },
  { name: "Arvind Menon", role: "Independent Surveyor", cases: 12, department: "Fire & Engineering" },
];

export const contentItems = [
  { title: "What IRDAI's 2024 Master Circular Means for Your Rejected Claim", type: "Blog Post", status: "Published", updated: "2026-06-18" },
  { title: "Deficiency Letter or Rejection? Why the Difference Matters", type: "Blog Post", status: "Published", updated: "2026-06-04" },
  { title: "Commercial Claim Checklist", type: "Resource", status: "Published", updated: "2026-05-01" },
  { title: "How Delayed Claims Are Escalated in 2026", type: "Blog Post", status: "Draft", updated: "2026-07-05" },
];
