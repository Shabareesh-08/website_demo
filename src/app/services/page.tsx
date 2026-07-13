import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container, SectionHeading } from "@/components/ui/section";
import { Services } from "@/components/home/services";
import { ClaimForm } from "@/components/home/claim-form";
import { serviceDetails } from "@/lib/services-data";

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
      
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading 
            eyebrow="Insurance Categories" 
            title="Areas of Expertise" 
            description="We have dedicated specialists for the following types of insurance claims." 
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((category) => (
              <Link
                key={category.slug}
                href={`/services/${category.slug}`}
                className="card-surface group flex flex-col justify-between p-7 hover:border-teal-500/30 transition-colors"
              >
                <div>
                  <h3 className="font-display text-[1.25rem] text-navy-900 group-hover:text-teal-700 transition-colors">{category.name}</h3>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-600 line-clamp-3">{category.shortDescription}</p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-[0.85rem] font-medium text-teal-600">
                  View details
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <div className="border-t border-neutral-200">
        <Services />
      </div>

      <section className="border-t border-neutral-200 py-24 sm:py-28">
        <Container>
          <ClaimForm />
        </Container>
      </section>
    </>
  );
}
