import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/section";
import { ResourceLibrary } from "@/components/resources/resource-library";

export const metadata: Metadata = {
  title: "Resources",
  description: "Checklists, guides, IRDAI links, and Insurance Ombudsman resources for policyholders.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resource Centre"
        title="Guides and official references"
        description="Checklists for your document set, plus direct links to IRDAI and Insurance Ombudsman resources."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />
      <section className="py-24 sm:py-28">
        <Container>
          <ResourceLibrary />
        </Container>
      </section>
    </>
  );
}
