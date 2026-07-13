import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/section";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb: { label: string; href?: string }[];
}) {
  return (
    <section className="border-b border-neutral-200 bg-navy-950 pb-16 pt-14 sm:pb-20 sm:pt-16">
      <Container>
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[0.78rem] text-neutral-400">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-teal-400">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-neutral-200">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="mt-6">
          <span className="eyebrow !text-teal-400">{eyebrow}</span>
          <h1 className="mt-3 max-w-2xl font-display text-[2.1rem] leading-[1.15] tracking-[-0.01em] text-neutral-0 sm:text-[2.75rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-neutral-300">{description}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
