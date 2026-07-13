import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container, SectionHeading } from "@/components/ui/section";
import { CareersApplicationForm } from "@/components/careers/application-form";
import { cultureValues, employeeBenefits, openPositions } from "@/lib/careers-data";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Expert Claims Solutions - open positions across claims analysis, surveying, legal, and client success.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work on the side of the policyholder"
        description="We hire for technical depth - in surveying, underwriting, or law - and build careers around it."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />

      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Our Culture" title="What it's like to work here" align="center" />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {cultureValues.map((v) => (
              <div key={v.title} className="card-surface p-6">
                <h3 className="font-display text-[1.05rem] text-navy-900">{v.title}</h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-600">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Open Positions" title="Current openings" />
            <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
              {openPositions.map((p) => (
                <a
                  key={p.id}
                  href={`#apply-${p.id}`}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <div>
                    <p className="font-medium text-[0.98rem] text-navy-900">{p.title}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-[0.8rem] text-ink-500">
                      <MapPin className="h-3.5 w-3.5" /> {p.location} &middot; {p.department} &middot; {p.type}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-teal-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-display text-[1.2rem] text-navy-900">Benefits</h3>
            <ul className="mt-5 space-y-3">
              {employeeBenefits.map((b) => (
                <li key={b} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="apply" className="scroll-mt-24 py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Apply"
              title="Submit your application"
              description="Select a role, or apply generally if nothing above fits - we keep every application on file for 6 months."
            />
          </div>
          <div className="lg:col-span-7">
            <CareersApplicationForm />
          </div>
        </Container>
      </section>
    </>
  );
}
