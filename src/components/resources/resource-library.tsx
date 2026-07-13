"use client";

import { useMemo, useState } from "react";
import { Download, ExternalLink, Search } from "lucide-react";
import { resourceCategories, resources } from "@/lib/resources-data";
import { cn } from "@/lib/utils";

export function ResourceLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof resourceCategories)[number]>("All");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory = category === "All" || r.category === category;
      const matchesQuery = query.trim() === "" || r.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources..."
            className="focus-ring w-full rounded-md border border-neutral-300 bg-neutral-0 py-2.5 pl-10 pr-3.5 text-[0.9rem] text-navy-900 placeholder:text-ink-400"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {resourceCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "focus-ring rounded-full border px-3.5 py-1.5 text-[0.78rem] font-medium transition-colors",
                category === cat
                  ? "border-teal-600 bg-teal-600 text-neutral-0"
                  : "border-neutral-300 text-ink-600 hover:border-teal-600 hover:text-teal-700"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((r) => (
          <div key={r.title} className="card-surface flex items-start justify-between gap-4 p-6">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-teal-600">{r.category}</p>
              <p className="mt-1.5 text-[0.98rem] font-medium text-navy-900">{r.title}</p>
              <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-600">{r.description}</p>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              {r.type === "External Resource" ? <ExternalLink className="h-4 w-4" /> : <Download className="h-4 w-4" />}
            </span>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full py-16 text-center text-[0.9rem] text-ink-500">
            No resources match your search.
          </p>
        )}
      </div>
    </div>
  );
}
