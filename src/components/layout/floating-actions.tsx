"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 640);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating rail */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 lg:flex">
        {showTop && (
          <button
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-0 text-navy-900 shadow-[var(--shadow-card)] hover:text-teal-600"
          >
            <ArrowUp className="h-[1.125rem] w-[1.125rem]" />
          </button>
        )}
        <a
          href={siteConfig.whatsapp}
          aria-label="Chat on WhatsApp"
          className="focus-ring flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-teal-600 text-neutral-0 shadow-[var(--shadow-card-hover)] hover:bg-teal-700"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href={siteConfig.phoneHref}
          aria-label="Call now"
          className="focus-ring flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-navy-900 text-neutral-0 shadow-[var(--shadow-card-hover)] hover:bg-navy-800"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile sticky CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-stretch gap-2 border-t border-neutral-200 bg-neutral-0 p-3 lg:hidden">
        <a
          href={siteConfig.phoneHref}
          className="focus-ring flex flex-1 items-center justify-center gap-2 rounded-md border border-navy-900/15 py-2.5 text-sm font-medium text-navy-900"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href={siteConfig.whatsapp}
          className="focus-ring flex flex-1 items-center justify-center gap-2 rounded-md border border-teal-600/25 bg-teal-50 py-2.5 text-sm font-medium text-teal-700"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <Button href="/contact#claim-evaluation" className="flex-[1.4]">
          Evaluate My Claim
        </Button>
      </div>
    </>
  );
}
