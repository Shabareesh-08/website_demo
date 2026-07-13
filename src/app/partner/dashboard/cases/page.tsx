"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { StatusBadge } from "@/components/dashboard/stat-card";
import { partnerCases, type CaseStatus } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

const filters: (CaseStatus | "All")[] = ["All", "Submitted", "Under Review", "In Negotiation", "Settled", "Closed"];

export default function CaseTrackingPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    return partnerCases.filter((c) => {
      const matchesFilter = filter === "All" || c.status === filter;
      const matchesQuery = query.trim() === "" || c.client.toLowerCase().includes(query.toLowerCase()) || c.id.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[1.5rem] text-navy-900">Case Tracking</h1>
        <p className="mt-1 text-[0.88rem] text-ink-600">Live status of every case you&rsquo;ve referred.</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by client or case ID"
            className="focus-ring w-full rounded-md border border-neutral-300 bg-neutral-0 py-2.5 pl-9 pr-3 text-[0.85rem]"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "focus-ring rounded-full border px-3 py-1.5 text-[0.76rem] font-medium",
                filter === f ? "border-teal-600 bg-teal-600 text-neutral-0" : "border-neutral-300 text-ink-600"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[0.85rem]">
            <thead>
              <tr className="border-b border-neutral-200 text-[0.75rem] uppercase tracking-wide text-ink-500">
                <th className="px-6 py-3 font-medium">Case ID</th>
                <th className="px-6 py-3 font-medium">Client</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Value</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Last Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-3.5 font-medium text-navy-900">{c.id}</td>
                  <td className="px-6 py-3.5 text-ink-700">{c.client}</td>
                  <td className="px-6 py-3.5 text-ink-600">{c.type}</td>
                  <td className="px-6 py-3.5 text-ink-600">{c.value}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={c.status} /></td>
                  <td className="px-6 py-3.5 text-ink-500">
                    {new Date(c.updated).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-ink-500">No cases match your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
