"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";
import { directors } from "@/lib/mock-data";

export function Directors() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("init", onSelect);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Leadership"
            title="The people who fight for your settlement"
            description="Five directors with a combined century in surveying, claims, and insurance law."
          />
          <div className="flex gap-2">
            <button
              aria-label="Previous director"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-0 text-navy-900 disabled:opacity-30"
            >
              <ChevronLeft className="h-[1.125rem] w-[1.125rem]" />
            </button>
            <button
              aria-label="Next director"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-0 text-navy-900 disabled:opacity-30"
            >
              <ChevronRight className="h-[1.125rem] w-[1.125rem]" />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {directors.map((d) => (
              <div key={d.name} className="min-w-0 shrink-0 grow-0 basis-full pl-6 sm:basis-1/2 lg:basis-1/4">
                <div className="card-surface flex h-full flex-col p-6">
                  <div className="flex aspect-[4/5] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
                    <User className="h-10 w-10" strokeWidth={1.2} />
                  </div>
                  <h3 className="mt-5 font-display text-[1.1rem] text-navy-900">{d.name}</h3>
                  <p className="text-[0.82rem] font-medium text-teal-600">{d.designation}</p>
                  <p className="mt-0.5 text-[0.78rem] text-ink-500">{d.experience}</p>
                  <p className="mt-3 text-[0.85rem] leading-relaxed text-ink-600">{d.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
