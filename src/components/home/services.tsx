import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";
import { coreServices } from "@/lib/mock-data";

export function Services() {
  const featured = coreServices.find((s) => s.featured)!;
  const rest = coreServices.filter((s) => !s.featured);

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="We fight for your claim money"
            description="At Expert Claim Solutions, we specialize in claim assistance for rejected, delayed, or underpaid insurance claims, fighting for your rights and providing expert guidance at every step of the process."
          />
          <Link
            href="/services"
            className="focus-ring hidden shrink-0 items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 sm:flex"
          >
            View all services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Featured card spans 2 columns */}
          <Link
            href={`/services/${featured.slug}`}
            className="group relative col-span-1 flex flex-col justify-end overflow-hidden rounded-2xl p-8 lg:col-span-2 lg:row-span-1 min-h-[380px]"
          >
            <div className="absolute inset-0">
               <Image src={featured.image!} alt={featured.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />
            </div>
            <div className="relative z-10">
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-teal-400/20 px-3 py-1 text-[0.75rem] font-semibold text-teal-300 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span> Featured Service
              </span>
              <h3 className="font-display text-[1.8rem] text-neutral-0">{featured.name}</h3>
              <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-neutral-300">
                {featured.description}
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-teal-300">
                Explore this service
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>

          {rest.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <Link
          href="/services"
          className="focus-ring mt-8 flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700 sm:hidden"
        >
          View all services <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof coreServices)[number] }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-surface group flex flex-col justify-between overflow-hidden"
    >
      <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
        <Image src={service.image!} alt={service.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-7">
        <div>
          <h3 className="font-display text-[1.25rem] text-navy-900">{service.name}</h3>
          <p className="mt-3 text-[0.88rem] leading-relaxed text-ink-600">{service.description}</p>
        </div>
        <div className="mt-6 flex items-center gap-1.5 text-[0.85rem] font-medium text-teal-600">
          Learn more
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
