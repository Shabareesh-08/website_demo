import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/section";
import { BlogIndex } from "@/components/blog/blog-index";

export const metadata: Metadata = {
  title: "Knowledge Centre",
  description: "IRDAI updates, case studies, and practical claim guidance for policyholders across every insurance category.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Centre"
        title="Policyholder rights, explained clearly"
        description="IRDAI frameworks, claim rejection categories, and Ombudsman procedure - written for policyholders, not lawyers."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <section className="py-24 sm:py-28">
        <Container>
          <BlogIndex />
        </Container>
      </section>
    </>
  );
}
