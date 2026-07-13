import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, FileWarning, FileText, HelpCircle } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container, SectionHeading } from "@/components/ui/section";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Button } from "@/components/ui/button";
import { recoveryProcess } from "@/lib/mock-data";
import { getServiceBySlug, serviceDetails } from "@/lib/services-data";

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.name}
        description={service.shortDescription}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />

      <section className="py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading eyebrow="Overview" title="How we approach this claim category" />
            <p className="mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-ink-600">{service.overview}</p>

            <div className="mt-14">
              <h3 className="flex items-center gap-2.5 font-display text-[1.3rem] text-navy-900">
                <CheckCircle2 className="h-5 w-5 text-teal-600" /> Who Needs This
              </h3>
              <ul className="mt-5 space-y-3">
                {service.whoNeedsIt.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <h3 className="flex items-center gap-2.5 font-display text-[1.3rem] text-navy-900">
                <FileWarning className="h-5 w-5 text-teal-600" /> Common Rejection Reasons
              </h3>
              <ul className="mt-5 space-y-3">
                {service.rejectionReasons.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <h3 className="flex items-center gap-2.5 font-display text-[1.3rem] text-navy-900">
                <FileText className="h-5 w-5 text-teal-600" /> Required Documents
              </h3>
              <ul className="mt-5 space-y-3">
                {service.requiredDocuments.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14">
              <h3 className="flex items-center gap-2.5 font-display text-[1.3rem] text-navy-900">
                <HelpCircle className="h-5 w-5 text-teal-600" /> Frequently Asked Questions
              </h3>
              <div className="mt-5">
                <FaqAccordion items={service.faqs} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="card-surface sticky top-28 p-7">
              <h3 className="font-display text-[1.2rem] text-navy-900">Recovery Process</h3>
              <ol className="mt-5 space-y-5">
                {recoveryProcess.map((step, i) => (
                  <li key={step.title} className="flex gap-3.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-[0.72rem] font-semibold text-teal-700">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[0.85rem] font-medium text-navy-900">{step.title}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-7 flex flex-col gap-3 border-t border-neutral-200 pt-6">
                <Button href="/contact#claim-evaluation" className="w-full">
                  Request Claim Evaluation
                </Button>
                <Button href="tel:+919848012345" variant="outline" className="w-full">
                  Speak with a Claims Expert
                </Button>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
