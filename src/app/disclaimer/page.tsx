import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updatedDate="1 July 2026"
      sections={[
        {
          heading: "Not an Insurer or Broker",
          body: [
            "Expert Claims Solutions Private Limited is a claim recovery and consulting firm. We do not sell insurance policies, and we are not licensed as an insurance broker or agent under IRDAI.",
          ],
        },
        {
          heading: "Independent Assessments",
          body: [
            "Recovery estimates and case evaluations shared with clients are professional opinions based on available documentation and are not a guarantee of the final settlement amount or outcome.",
          ],
        },
        {
          heading: "Third-Party References",
          body: [
            "References to IRDAI circulars, the Insurance Ombudsman Rules, or any external regulatory body are provided for informational context. Please refer to the official source for the current, authoritative version of any regulation cited.",
          ],
        },
      ]}
    />
  );
}
