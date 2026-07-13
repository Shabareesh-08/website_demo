import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/section";
import { Services } from "@/components/home/services";
import { ClaimForm } from "@/components/home/claim-form";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Claim recovery advisory across commercial insurance, fire, marine, engineering, health, motor, and liability claims.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Claim recovery advisory, by insurance category"
        description="Every policy type carries its own rejection patterns, documentation standards, and escalation routes. Our specialists work within one category at a time - not generically across all of them."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <Services />
      <section className="border-t border-neutral-200 py-24 sm:py-28">
        <Container>
          <ClaimForm />
        </Container>
      </section>
    </>
  );
}
