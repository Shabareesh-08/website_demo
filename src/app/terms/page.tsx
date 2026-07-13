import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      updatedDate="1 July 2026"
      sections={[
        {
          heading: "Nature of Our Services",
          body: [
            "Expert Claims Solutions Private Limited provides claim recovery advisory and consulting services. We do not sell, underwrite, or issue insurance policies, and we are not affiliated with any insurer.",
          ],
        },
        {
          heading: "No Guarantee of Outcome",
          body: [
            "While we conduct a genuine, evidence-based evaluation of every claim we accept, no advisory or negotiation service can guarantee a specific settlement outcome. Our evaluation reflects our professional assessment based on the documents and facts provided.",
          ],
        },
        {
          heading: "Engagement Terms",
          body: [
            "Formal engagement, fee structure, and scope of work are set out in a separate written agreement signed with each client prior to commencement of case work.",
          ],
        },
        {
          heading: "Website Use",
          body: [
            "Content on this website is provided for general informational purposes and does not constitute legal or financial advice specific to your circumstances.",
          ],
        },
      ]}
    />
  );
}
