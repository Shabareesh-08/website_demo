"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { StatusBadge } from "@/components/dashboard/stat-card";
import { adminLeads } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

const statuses = ["All", "New", "Assigned", "Contacted", "Qualified", "Rejected"];

export default function AdminLeadsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");

  const filtered = useMemo(() => {
    return adminLeads.filter((l) => {
      const matchesStatus = status === "All" || l.status === status;
      const matchesQuery = query.trim() === "" || l.name.toLowerCase().includes(query.toLowerCase()) || l.id.toLowerCase().includes(query.toLowerCase());
      return matchesStatus && matchesQuery;
    });
  }, [query, status]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[1.5rem] text-navy-900">Leads &amp; Claims</h1>
        <p className="mt-1 text-[0.88rem] text-ink-600">Every claim evaluation request, from every intake channel.</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or lead ID"
            className="focus-ring w-full rounded-md border border-neutral-300 bg-neutral-0 py-2.5 pl-9 pr-3 text-[0.85rem]"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={cn(
                "focus-ring rounded-full border px-3 py-1.5 text-[0.76rem] font-medium",
                status === s ? "border-teal-600 bg-teal-600 text-neutral-0" : "border-neutral-300 text-ink-600"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[0.85rem]">
            <thead>
              <tr className="border-b border-neutral-200 text-[0.75rem] uppercase tracking-wide text-ink-500">
                <th className="px-6 py-3 font-medium">Lead ID</th>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Source</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filtered.map((l) => (
                <tr key={l.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-3.5 font-medium text-navy-900">{l.id}</td>
                  <td className="px-6 py-3.5 text-ink-700">{l.name}</td>
                  <td className="px-6 py-3.5 text-ink-600">{l.type}</td>
                  <td className="px-6 py-3.5 text-ink-600">{l.amount}</td>
                  <td className="px-6 py-3.5 text-ink-600">{l.source}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={l.status} /></td>
                  <td className="px-6 py-3.5 text-ink-500">
                    {new Date(l.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-10 text-center text-ink-500">No leads match your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
