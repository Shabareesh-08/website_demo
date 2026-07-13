import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";
import { resourceLibrary } from "@/lib/mock-data";

export function ResourcesPreview() {
  return (
    <section className="bg-neutral-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Resource Centre"
          title="Guides and official references"
          description="Checklists for your document set, plus direct links to IRDAI and Insurance Ombudsman resources."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resourceLibrary.map((resource) => {
            const isExternal = resource.type === "External Resource";
            return (
              <Link
                key={resource.title}
                href="/resources"
                className="card-surface flex items-center justify-between gap-4 p-5"
              >
                <div>
                  <p className="text-[0.95rem] font-medium text-navy-900">{resource.title}</p>
                  <p className="mt-0.5 text-[0.78rem] text-ink-500">{resource.type}</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                  {isExternal ? <ExternalLink className="h-4 w-4" /> : <Download className="h-4 w-4" />}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
