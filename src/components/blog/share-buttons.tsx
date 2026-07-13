"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";

function LinkedInGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
    </svg>
  );
}
function XGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 3h4.6l4 5.4L16.3 3H21l-6.8 8.5L21.5 21h-4.6l-4.4-5.9L6.9 21H2.2l7.2-9L3 3Z" />
    </svg>
  );
}

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  function copyLink() {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  }

  const shareBase = "flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-ink-600 hover:border-teal-600 hover:text-teal-600";

  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[0.78rem] font-medium uppercase tracking-[0.08em] text-ink-500">Share</span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
        target="_blank"
        rel="noopener noreferrer"
        className={shareBase}
        aria-label="Share on LinkedIn"
      >
        <LinkedInGlyph className="h-4 w-4" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={shareBase}
        aria-label="Share on X"
      >
        <XGlyph className="h-3.5 w-3.5" />
      </a>
      <button onClick={copyLink} className={`focus-ring ${shareBase}`} aria-label="Copy link">
        {copied ? <Check className="h-4 w-4 text-teal-600" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  );
}
