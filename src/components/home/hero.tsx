"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, CheckCircle2, FileSearch, Phone, Scale, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { heroSlides } from "@/lib/mock-data";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import Image from "next/image";

const SLIDE_DURATION = 4000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, SLIDE_DURATION);
    return () => clearTimeout(t);
  }, [index, paused, next]);

  const slide = heroSlides[index];

  return (
    <section
      className="relative min-h-[calc(100svh-132px)] overflow-hidden bg-navy-950 text-neutral-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id + "-bg"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image || "/hero/slide1.png"}
            alt="Hero Background"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,18,38,0.7),rgba(11,31,58,0.65)_48%,rgba(18,51,45,0.7))]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="hero-scanline absolute inset-x-0 top-0 h-px bg-teal-400/50" />

      <Container className="relative z-10 grid min-h-[calc(100svh-132px)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-400/10 px-3 py-1 text-[0.76rem] font-semibold uppercase text-teal-100">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {slide.eyebrow}
              </span>
              <h1 className="mt-5 font-display text-[2.75rem] leading-[1.04] text-neutral-0 sm:text-[4.25rem]">
                {slide.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-neutral-200 sm:text-[1.18rem]">
                {slide.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={slide.primaryCta.href} size="lg">
                  {slide.primaryCta.label}
                </Button>
                <Button href={slide.secondaryCta.href} variant="outlineLight" size="lg">
                  {slide.secondaryCta.label}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex max-w-md items-center gap-4">
            <div className="flex-1">
              <div className="relative h-px w-full overflow-hidden bg-neutral-0/20">
                <motion.div
                  key={slide.id}
                  className="absolute inset-y-0 left-0 bg-teal-300"
                  initial={{ width: "0%" }}
                  animate={{ width: paused ? undefined : "100%" }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                />
              </div>
            </div>
            <span className="shrink-0 text-xs tabular-nums text-neutral-400">
              {String(index + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto max-w-xl"
          >
            <div className="relative rounded-lg border border-neutral-0/15 bg-neutral-0/10 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="rounded-md border border-neutral-0/10 bg-neutral-0 text-navy-950">
                <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase text-teal-700">Claim Recovery Desk</p>
                    <p className="mt-1 font-display text-[1.28rem]">Evidence review in progress</p>
                  </div>
                  <span className="rounded-full bg-teal-50 px-3 py-1 text-[0.75rem] font-semibold text-teal-700">
                    Active
                  </span>
                </div>

                <div className="grid gap-4 p-5 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-md bg-navy-950 p-5 text-neutral-0">
                    <div className="flex items-center gap-2 text-teal-300">
                      <Building2 className="h-4 w-4" />
                      <span className="text-[0.76rem] font-semibold uppercase">{slide.label}</span>
                    </div>
                    <p className="mt-5 font-display text-[2.1rem] leading-none">Policyholder file</p>
                    <p className="mt-4 text-[0.88rem] leading-relaxed text-neutral-300">
                      Rejection clause, survey notes, loss evidence, correspondence, and settlement strategy tracked together.
                    </p>
                    <div className="mt-6 space-y-3">
                      {["Documents received", "Policy clauses mapped", "Recovery route prepared"].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-[0.84rem] text-neutral-200">
                          <CheckCircle2 className="h-4 w-4 text-teal-300" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Metric label="Claim Stage" value="Evaluation" />
                    <Metric label="Response Window" value="24-48 hrs" />
                    <a
                      href={siteConfig.phoneHref}
                      className="focus-ring flex items-center justify-center gap-2 rounded-md bg-teal-600 px-4 py-3 text-[0.9rem] font-semibold text-neutral-0 transition hover:bg-teal-700"
                    >
                      <Phone className="h-4 w-4" />
                      Call Expert
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {heroSlides.slice(0, 3).map((s, i) => (
                <button
                  key={s.id}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index ? "bg-teal-300" : "bg-neutral-0/20 hover:bg-neutral-0/45"
                  )}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-neutral-200 bg-neutral-25 p-4">
      <p className="text-[0.72rem] font-semibold uppercase text-ink-500">{label}</p>
      <p className="mt-1 font-display text-[1.35rem] text-navy-900">{value}</p>
    </div>
  );
}
