"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/section";

function LinkedInGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
    </svg>
  );
}
import { directors } from "@/lib/mock-data";

export function TeamSection() {
  return (
    <section className="bg-navy-950 py-24 sm:py-28">
      <Container>
        <SectionHeading
          dark
          eyebrow="Our Leadership"
          title="Meet the team fighting for your claims"
          description="Decades of combined experience across insurance, legal, and operational domains, dedicated to securing the settlements you deserve."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {directors.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-800">
                <Image
                  src={member.image || "/logo.png"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-950/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0 text-center px-4">
                    <p className="text-sm text-neutral-200 mb-4 line-clamp-4">{member.bio}</p>
                    <Link
                      href={member.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-navy-950 transition-colors hover:bg-teal-400"
                    >
                      <LinkedInGlyph className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Text Details */}
              <div className="mt-5 text-center">
                <h3 className="font-display text-[1.2rem] text-neutral-0">{member.name}</h3>
                <p className="mt-1 text-[0.85rem] text-teal-400">{member.designation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
