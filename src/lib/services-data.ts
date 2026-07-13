export type ServiceDetail = {
  slug: string;
  name: string;
  shortDescription: string;
  overview: string;
  whoNeedsIt: string[];
  rejectionReasons: string[];
  requiredDocuments: string[];
  faqs: { question: string; answer: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "commercial-insurance",
    name: "Commercial Insurance Claims",
    shortDescription:
      "End-to-end recovery advisory for enterprises facing rejected, delayed, or under-settled commercial claims.",
    overview:
      "Commercial insurance claims involve larger sums, denser policy wordings, and insurers who scrutinise every clause. We represent manufacturers, exporters, warehousing operators, and enterprises whose commercial policies - property, liability, or specialty - have been rejected, delayed, or under-settled, managing the full recovery process from documentation to final negotiation.",
    whoNeedsIt: [
      "Manufacturers and factory owners with a disputed property or liability claim",
      "Exporters and importers facing cargo or trade-credit claim disputes",
      "Warehousing and logistics operators with stock or third-party liability losses",
      "Enterprises whose in-house teams lack dedicated claims expertise",
    ],
    rejectionReasons: [
      "Alleged policy exclusion or endorsement not disclosed at renewal",
      "Survey report disputing the quantum of loss claimed",
      "Delay in intimation beyond the policy's notice period",
      "Incomplete stock or asset valuation records at the time of loss",
    ],
    requiredDocuments: [
      "Original policy schedule and wording",
      "Claim intimation and correspondence with the insurer",
      "Surveyor's report (if issued)",
      "Financial records supporting the claimed loss (stock registers, invoices, valuations)",
    ],
    faqs: [
      {
        question: "How long does a commercial claim recovery typically take?",
        answer:
          "Straightforward under-settlement disputes can resolve in 8-12 weeks. Contested rejections that require Ombudsman or regulatory escalation typically take 4-9 months, depending on the insurer and forum.",
      },
      {
        question: "Do you take cases that have already been rejected once?",
        answer:
          "Yes. A large share of our engagements begin after an initial rejection. We independently re-assess the file before advising whether a reopening or escalation is viable.",
      },
      {
        question: "What does your fee structure look like?",
        answer:
          "We work on a success-fee basis in most engagements: an initial installment on agreement, and the balance only after your settlement is actually received.",
      },
    ],
  },
  {
    slug: "fire-insurance",
    name: "Fire Insurance",
    shortDescription: "Independent assessment and negotiation for factory, warehouse, and stock-in-trade fire losses.",
    overview:
      "Fire claims are won or lost on documentation: cause-of-fire reports, stock valuations at the time of loss, and adherence to policy conditions on fire-fighting equipment and storage. We commission independent assessments where the insurer's surveyor report understates the loss, and fight from that stronger evidentiary position.",
    whoNeedsIt: [
      "Factory and warehouse owners after a fire loss",
      "Retailers with stock-in-trade destroyed or damaged by fire",
      "Businesses disputing a surveyor's loss quantum",
      "Policyholders whose claim was rejected citing a storage or safety-compliance breach",
    ],
    rejectionReasons: [
      "Alleged breach of storage or fire-safety conditions in the policy",
      "Cause of fire disputed or attributed to an excluded peril",
      "Under-insurance applied disproportionately to the settlement",
      "Missing or incomplete stock records at the time of the fire",
    ],
    requiredDocuments: [
      "Fire brigade report / FIR copy",
      "Policy document and premium payment proof",
      "Stock and asset registers as of the date of loss",
      "Photographs of the site and damaged property",
    ],
    faqs: [
      {
        question: "My claim was rejected for a 'safety compliance breach' - can that be challenged?",
        answer:
          "Often, yes. Insurers sometimes apply safety-compliance clauses broadly. We review whether the specific breach alleged actually caused or contributed to the fire, which is the legal test most Ombudsman rulings apply.",
      },
      {
        question: "Can you help even if I've already accepted a partial settlement?",
        answer:
          "It depends on whether a full and final discharge voucher was signed under duress or with material facts withheld from you - this is assessed case by case.",
      },
    ],
  },
  {
    slug: "marine-cargo",
    name: "Marine & Cargo",
    shortDescription: "Cargo damage, general average, and marine liability claim recovery for exporters and importers.",
    overview:
      "Marine cargo disputes move fast and involve multiple parties - shipper, carrier, insurer, and surveyor - each with an interest in minimising their exposure. We represent cargo owners in damage, short-landing, and general average disputes, coordinating directly with surveyors and P&I correspondents where needed.",
    whoNeedsIt: [
      "Exporters and importers with damaged or short-landed cargo",
      "Businesses facing a general average contribution dispute",
      "Freight forwarders and consignees needing independent survey support",
    ],
    rejectionReasons: [
      "Damage attributed to inherent vice or inadequate packing",
      "Delay in filing a notice of claim with the carrier",
      "Dispute over the survey's assessment of damage extent",
    ],
    requiredDocuments: [
      "Bill of lading and commercial invoice",
      "Marine insurance policy / certificate",
      "Survey report at the port of discharge",
      "Notice of claim correspondence with the carrier",
    ],
    faqs: [
      {
        question: "What is a general average claim, and can you help with one?",
        answer:
          "General average is a maritime law principle where all cargo interests share a loss incurred to save the voyage as a whole. We help clients respond to average adjusters' calculations and challenge disproportionate contributions.",
      },
    ],
  },
  {
    slug: "engineering-insurance",
    name: "Engineering Insurance",
    shortDescription: "CAR/EAR and machinery breakdown claims for contractors and project owners.",
    overview:
      "Contractors' All Risk, Erection All Risk, and machinery breakdown policies carry technical exclusions that insurers apply strictly. We bring in independent engineers to counter root-cause findings that insurers use to deny or reduce claims, and manage delay-in-completion add-on disputes.",
    whoNeedsIt: [
      "Contractors with a CAR/EAR claim on an active project site",
      "Manufacturers with a machinery breakdown claim",
      "Project owners disputing a delay-in-completion clause",
    ],
    rejectionReasons: [
      "Root cause attributed to faulty design or workmanship (excluded)",
      "Maintenance record gaps cited as a policy condition breach",
      "Dispute over spare-part valuation or repair cost quantum",
    ],
    requiredDocuments: [
      "Policy and project contract documents",
      "Maintenance and inspection logs",
      "Technical/root-cause report",
      "Repair or replacement cost estimates",
    ],
    faqs: [
      {
        question: "Insurer says the breakdown was due to 'wear and tear' - is that always excluded?",
        answer:
          "Not always outright - many policies distinguish gradual wear and tear from a sudden and accidental breakdown. We review the technical report to see which applies.",
      },
    ],
  },
  {
    slug: "industrial-all-risk",
    name: "Industrial All Risk",
    shortDescription: "Production-loss quantification and IAR policy claim negotiation for manufacturers.",
    overview:
      "Industrial All Risk policies bundle property damage with business interruption, which means a single incident can trigger two separate, and separately disputed, claim heads. We quantify production loss independently and fight both halves of an IAR claim together.",
    whoNeedsIt: [
      "Manufacturers with combined property and production-loss claims",
      "Businesses disputing an insurer's loss-of-profit calculation",
    ],
    rejectionReasons: [
      "Disputed indemnity period for the business interruption component",
      "Alleged failure to mitigate loss during the outage",
      "Under-insurance clause applied to reduce the payout",
    ],
    requiredDocuments: [
      "IAR policy schedule",
      "Production and sales records for the trailing 12 months",
      "Outage/downtime logs",
      "Auditor-certified loss-of-profit statement, if available",
    ],
    faqs: [
      {
        question: "What is an 'indemnity period' and why does it matter?",
        answer:
          "It's the maximum time your business-interruption loss is covered for, starting from the incident. Insurers sometimes shorten it in the settlement offer - we check this against your policy schedule, not their assumption.",
      },
    ],
  },
  {
    slug: "health-insurance",
    name: "Health Insurance",
    shortDescription: "Appeals for cashless denials, deficiency letters, and short-settled hospitalisation claims.",
    overview:
      "Health insurance claims are rejected or short-settled for reasons ranging from alleged non-disclosure to room-rent capping and disease-specific sub-limits. We classify each rejection correctly, distinguish a genuine deficiency letter from an outright rejection, and escalate through the Insurance Ombudsman Rules 2017 where warranted.",
    whoNeedsIt: [
      "Policyholders with a denied cashless authorisation",
      "Patients who received a deficiency letter they don't understand",
      "Anyone short-settled below their sum insured without clear justification",
    ],
    rejectionReasons: [
      "Alleged non-disclosure of a pre-existing condition",
      "Room-rent or disease sub-limit capping",
      "Claim classified as excluded under the policy's waiting period",
      "Discrepancy between hospital records and claim form details",
    ],
    requiredDocuments: [
      "Policy copy and premium receipts",
      "Discharge summary and hospital bills",
      "Rejection or deficiency letter from the insurer/TPA",
      "Prior medical records relevant to the disclosed history",
    ],
    faqs: [
      {
        question: "What's the difference between a 'deficiency' letter and a rejection?",
        answer:
          "A deficiency letter asks for more documents before a decision is made - it isn't a final rejection, and responding correctly can prevent an unnecessary denial. We review the letter's exact wording before advising your response.",
      },
      {
        question: "Can I still approach the Ombudsman if my claim was denied months ago?",
        answer:
          "The Insurance Ombudsman Rules 2017 set a one-year window from the insurer's rejection to file a complaint, provided you've first raised it with the insurer's grievance cell. We check your specific timeline before proceeding.",
      },
    ],
  },
  {
    slug: "motor-insurance",
    name: "Motor Insurance",
    shortDescription: "Own-damage and third-party motor claim disputes, including total-loss valuation challenges.",
    overview:
      "Motor claims are disputed over survey valuations, alleged breach of driving-licence conditions, and total-loss settlement figures that don't reflect the vehicle's actual condition. We challenge undervalued settlements and support total-loss and third-party liability disputes.",
    whoNeedsIt: [
      "Vehicle owners disputing a total-loss settlement amount",
      "Fleet operators with multiple contested claims",
      "Policyholders denied a claim over an alleged licence or usage breach",
    ],
    rejectionReasons: [
      "Alleged breach of driving licence class or commercial-use condition",
      "Survey valuation disputed as below market value",
      "Late intimation of the accident to the insurer",
    ],
    requiredDocuments: [
      "Policy and registration certificate",
      "FIR or accident report, where applicable",
      "Survey report and repair estimates",
      "Driving licence copy",
    ],
    faqs: [
      {
        question: "The insurer's total-loss offer feels too low - can it be challenged?",
        answer:
          "Yes. Total-loss settlements should reflect the vehicle's insured declared value (IDV) adjusted for depreciation, not an arbitrary salvage-linked figure. We review the surveyor's basis for the number offered.",
      },
    ],
  },
  {
    slug: "business-interruption",
    name: "Business Interruption",
    shortDescription: "Loss-of-profit quantification and BI claim advisory following covered perils.",
    overview:
      "Business interruption claims require translating an operational disruption into a defensible financial figure. We work with your accountants to build a loss-of-profit case that stands up to an insurer's forensic accountant, and fight for the indemnity period and standing-charges components separately.",
    whoNeedsIt: [
      "Businesses that suffered a covered-peril shutdown",
      "Companies disputing an insurer's forensic loss assessment",
    ],
    rejectionReasons: [
      "Dispute over the trend/adjustment clause applied to projected turnover",
      "Standing charges excluded or reduced without clear basis",
      "Alleged failure to resume operations at the earliest possible date",
    ],
    requiredDocuments: [
      "BI policy schedule and wording",
      "Audited financials for the pre-loss period",
      "Records of the interruption period and resumption steps taken",
    ],
    faqs: [
      {
        question: "Do I need my own forensic accountant?",
        answer:
          "For claims above a certain size, yes - we typically recommend it, since the insurer's loss adjuster will have one preparing their position.",
      },
    ],
  },
  {
    slug: "liability-insurance",
    name: "Liability Insurance",
    shortDescription: "Public, product, and professional indemnity liability claim representation.",
    overview:
      "Liability claims involve a third party's allegation against you, which the insurer is meant to defend and indemnify under your policy. We review coverage disputes where insurers decline to defend a claim, and fight for settlement authority between you and the insurer.",
    whoNeedsIt: [
      "Businesses facing a third-party liability claim their insurer has declined to defend",
      "Professionals with a professional indemnity coverage dispute",
      "Manufacturers facing a product-liability allegation",
    ],
    rejectionReasons: [
      "Insurer disputes the claim falls within the policy's scope of cover",
      "Alleged late notification of the underlying incident or circumstance",
      "Dispute over defence-cost allocation between insurer and insured",
    ],
    requiredDocuments: [
      "Liability policy schedule and wording",
      "Third-party's claim notice or legal correspondence",
      "Incident investigation records",
    ],
    faqs: [
      {
        question: "My insurer says they won't defend this claim - is that final?",
        answer:
          "Not necessarily. A declinature can often be challenged where the underlying allegation plausibly falls within the policy's coverage, even if the final liability is still disputed.",
      },
    ],
  },
  {
    slug: "risk-assessment-advisory",
    name: "Risk Assessment & Claim Advisory",
    shortDescription: "Pre-emptive policy review and risk assessment to reduce future claim rejection exposure.",
    overview:
      "Most claim rejections trace back to a gap that existed at the policy stage - an exclusion nobody flagged, a sub-limit nobody checked, a declaration that didn't match operations on the ground. We review policies before renewal to close these gaps, so the next claim doesn't need to be fought at all.",
    whoNeedsIt: [
      "Businesses renewing a commercial policy without a broker's independent review",
      "Companies that have faced repeated claim disputes with the same insurer",
      "Enterprises expanding operations who need their cover reassessed",
    ],
    rejectionReasons: [
      "Not applicable - this is a pre-emptive advisory service",
    ],
    requiredDocuments: [
      "Current policy schedule and wording",
      "Asset and operations summary",
      "Prior claim history, if any",
    ],
    faqs: [
      {
        question: "Is this a substitute for my insurance broker?",
        answer:
          "No - we work alongside your broker, focused specifically on claim-rejection risk rather than premium negotiation.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((s) => s.slug === slug);
}
