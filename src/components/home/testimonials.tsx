"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";
import { googleReviews } from "@/lib/mock-data";
import { siteConfig } from "@/lib/site-config";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
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
    <section className="relative overflow-hidden bg-neutral-50 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,#ffffff,rgba(255,255,255,0))]" />
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Client Outcomes"
            title="Settlements, in their own words"
            description="Real client videos from the Expert Claims Solutions channels, with every story tied to a documented claim journey."
          />
          <div className="flex gap-2">
            <button
              aria-label="Previous testimonial"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-0 text-navy-900 transition hover:border-teal-600 hover:text-teal-700 disabled:opacity-30"
            >
              <ChevronLeft className="h-[1.125rem] w-[1.125rem]" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-neutral-0 text-navy-900 transition hover:border-teal-600 hover:text-teal-700 disabled:opacity-30"
            >
              <ChevronRight className="h-[1.125rem] w-[1.125rem]" />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {siteConfig.testimonialVideos.map((video, index) => (
              <div
                key={video.embedUrl}
                className="min-w-0 shrink-0 grow-0 basis-[82%] pl-6 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-neutral-0 shadow-[var(--shadow-card)] transition duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
                  <div className="relative bg-navy-950 p-3">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(60,135,118,0.35),transparent_38%)]" />
                    <div className="relative overflow-hidden rounded-md border border-neutral-0/10 bg-navy-900">
                      <iframe
                        className="aspect-[9/16] w-full"
                        src={video.embedUrl}
                        title={video.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="eyebrow">Video Proof</span>
                      <span className="rounded-full bg-teal-50 px-2.5 py-1 text-[0.72rem] font-semibold text-teal-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-ink-700">
                      A client-recorded testimonial from an insurance claim recovery case.
                    </p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring mt-5 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-teal-700 hover:text-teal-900"
                    >
                      Watch on YouTube <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[auto_1fr]">
          <div className="flex w-fit items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-0 px-5 py-4">
            <div className="flex text-gold-600">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-[0.88rem] text-ink-700">
              <span className="font-semibold text-navy-900">{googleReviews.rating} / 5</span> on Google, from{" "}
              {googleReviews.count.toLocaleString("en-IN")}+ reviews
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
