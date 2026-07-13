import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updatedDate="1 July 2026"
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "We collect information you provide directly, such as your name, contact details, policy documents, and claim correspondence, when you request a claim evaluation, register as a partner, or apply for a role with us.",
            "We also collect limited technical information (such as browser type and pages visited) to maintain and improve this website.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "Information you submit is used solely to assess and advise on your claim, respond to your enquiry, or process your application. We do not sell or rent personal information to third parties.",
          ],
        },
        {
          heading: "Document Confidentiality",
          body: [
            "Policy and claim documents you upload are accessed only by the claims specialists assigned to your case and are retained only as long as necessary for the engagement or as required by law.",
          ],
        },
        {
          heading: "Your Rights",
          body: [
            "You may request access to, correction of, or deletion of your personal information at any time by writing to consult@expertclaimsolutions.com.",
          ],
        },
      ]}
    />
  );
}
