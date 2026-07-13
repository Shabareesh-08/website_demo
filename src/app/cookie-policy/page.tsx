import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updatedDate="1 July 2026"
      sections={[
        {
          heading: "What Cookies We Use",
          body: [
            "This website uses essential cookies required for basic site functionality, and analytics cookies to help us understand how visitors use the site so we can improve it.",
          ],
        },
        {
          heading: "Managing Cookies",
          body: [
            "You can control or delete cookies through your browser settings. Disabling cookies may affect some functionality, such as remembering form progress.",
          ],
        },
      ]}
    />
  );
}
