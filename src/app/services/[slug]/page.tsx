import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, FileWarning, FileText, HelpCircle } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container, SectionHeading } from "@/components/ui/section";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Button } from "@/components/ui/button";
import { recoveryProcess } from "@/lib/mock-data";
import { getServiceBySlug, serviceDetails } from "@/lib/services-data";
import { coreServices } from "@/lib/mock-data";

export function generateStaticParams() {
  const slugs = serviceDetails.map((s) => ({ slug: s.slug }));
  const coreSlugs = coreServices.map((s) => ({ slug: s.slug }));
  return [...slugs, ...coreSlugs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (service) {
    return {
      title: service.name,
      description: service.shortDescription,
    };
  }
  
  const core = coreServices.find(s => s.slug === slug);
  if (core) {
    return {
      title: core.name,
      description: core.description,
    };
  }
  
  return {};
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const core = coreServices.find(s => s.slug === slug);
  
  if (!service && !core) notFound();

  if (core) {
    return (
      <>
        <PageHero
          eyebrow="Services"
          title={core.name}
          description={core.description}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: core.name },
          ]}
        />
        <section className="py-24 sm:py-28">
          <Container>
             <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-[2rem] text-navy-900">Expert assistance for {core.name}</h2>
                <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-600">{core.description}</p>
                {core.image && (
                  <div className="mt-12 overflow-hidden rounded-2xl bg-neutral-100 shadow-[var(--shadow-card)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={core.image} alt={core.name} className="w-full h-auto object-cover max-h-[500px]" />
                  </div>
                )}
                <div className="mt-14 flex justify-center">
                  <Button href="/contact#claim-evaluation">Request Claim Evaluation</Button>
                </div>
             </div>
          </Container>
        </section>
      </>
    );
  }

  // Re-assert service is not null here for TypeScript
  if (!service) return null;

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
