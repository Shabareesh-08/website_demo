import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/section";

export function LegalPage({
  title,
  updatedDate,
  sections,
}: {
  title: string;
  updatedDate: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        description={`Last updated: ${updatedDate}`}
        breadcrumb={[{ label: "Home", href: "/" }, { label: title }]}
      />
      <section className="py-24 sm:py-28">
        <Container className="max-w-3xl">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-[1.3rem] text-navy-900">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((p, i) => (
                    <p key={i} className="text-[0.92rem] leading-relaxed text-ink-600">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
