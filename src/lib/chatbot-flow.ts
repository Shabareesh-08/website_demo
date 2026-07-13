import { claimStatuses, insuranceCompanies, insuranceTypes } from "@/lib/mock-data";

export type ChatStepKind = "choice" | "text" | "tel" | "email" | "date" | "amount" | "file" | "review";

export type ChatStep = {
  id: string;
  kind: ChatStepKind;
  prompt: string;
  options?: string[];
  optional?: boolean;
};

export const chatbotSteps: ChatStep[] = [
  { id: "insuranceType", kind: "choice", prompt: "What type of insurance does your claim relate to?", options: insuranceTypes },
  { id: "insuranceCompany", kind: "choice", prompt: "Which insurance company issued the policy?", options: insuranceCompanies },
  { id: "claimStatus", kind: "choice", prompt: "What's the current status of your claim?", options: claimStatuses },
  { id: "claimAmount", kind: "amount", prompt: "What is the approximate claim amount, in ₹?" },
  { id: "incidentDate", kind: "date", prompt: "When did the incident or hospitalisation occur?" },
  { id: "rejectionLetter", kind: "choice", prompt: "Have you received a written rejection or deficiency letter?", options: ["Yes", "No", "Not sure"] },
  { id: "documents", kind: "file", prompt: "You can upload your policy copy or rejection letter now, or skip and send it later.", optional: true },
  { id: "fullName", kind: "text", prompt: "What's your full name, as per your policy documents?" },
  { id: "phone", kind: "tel", prompt: "What's the best mobile number to reach you on?" },
  { id: "email", kind: "email", prompt: "And your email address?" },
  { id: "callbackTime", kind: "choice", prompt: "When would you prefer a callback?", options: ["Morning (10am-12pm)", "Afternoon (12pm-3pm)", "Evening (3pm-7pm)"] },
];
