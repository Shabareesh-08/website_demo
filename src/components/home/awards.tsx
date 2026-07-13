"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Container, SectionHeading } from "@/components/ui/section";

const awardsData = [
  {
    id: 1,
    title: "Excellence in Claims Recovery",
    image: "/awards/award1.png",
  },
  {
    id: 2,
    title: "Industry Leadership",
    image: "/awards/award2.png",
  },
  {
    id: 3,
    title: "Outstanding Customer Service",
    image: "/awards/award3.png",
  },
];

export function Awards() {
  const [emblaRef] = useEmblaCarousel(
    { align: "start", loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Recognition"
          title="Awards & Industry Recognition"
          description="Our commitment to policyholder advocacy has been recognized across the insurance sector."
        />

        <div className="mt-16 overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {awardsData.map((award) => (
              <div
                key={award.id}
                className="min-w-0 shrink-0 grow-0 basis-[85%] pl-6 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-64 w-full overflow-hidden rounded-xl bg-neutral-100">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 text-center font-display text-[1.15rem] font-medium text-navy-900">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
