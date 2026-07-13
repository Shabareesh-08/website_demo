"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/section";
import { recoveryProcess } from "@/lib/mock-data";
import { Search, FileText, MessagesSquare, Scale, ArrowDown } from "lucide-react";

const icons = [Search, FileText, MessagesSquare, Scale];

export function Process() {
  return (
    <section className="bg-neutral-50 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How Recovery Works"
          title="One ledger, from filing to settlement"
          description="No step is skipped, and nothing is billed until the corresponding milestone is actually reached."
        />

        <div className="mx-auto mt-16 max-w-2xl">
          {recoveryProcess.map((step, i) => {
            const Icon = icons[i] || Search;
            const isLast = i === recoveryProcess.length - 1;

            return (
              <div key={step.title} className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200">
                    <Icon className="h-7 w-7 text-teal-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-display text-[1.4rem] text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-600">
                    {step.description}
                  </p>
                </motion.div>

                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: "auto" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                    className="my-6 flex flex-col items-center justify-center text-neutral-300"
                  >
                    <div className="h-12 border-l-2 border-dashed border-neutral-300" />
                    <ArrowDown className="mt-3 h-5 w-5 animate-bounce text-teal-500" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
