"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Container } from "@/components/ui/section";
import { companyStats } from "@/lib/mock-data";

function Counter({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-[2.4rem] leading-none text-neutral-0 sm:text-[2.75rem]">
      {prefix}
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-navy-950 py-20">
      <Container>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-7">
          {companyStats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col gap-4">
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <div className="relative h-px w-full overflow-hidden bg-neutral-0/15">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.2, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-y-0 left-0 bg-gold-600"
                />
              </div>
              <p className="text-[0.82rem] leading-snug text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
