"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpen(expanded ? null : i)}
              aria-expanded={expanded}
              className="focus-ring flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="font-medium text-[0.98rem] text-navy-900">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-[1.125rem] w-[1.125rem] shrink-0 text-teal-600 transition-transform duration-300",
                  expanded && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                expanded ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0">
                <p className="max-w-2xl text-[0.9rem] leading-relaxed text-ink-600">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
