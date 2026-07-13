import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StatCard, StatusBadge } from "@/components/dashboard/stat-card";
import { ClaimsCategoryChart, RecoveryTrendChart } from "@/components/dashboard/admin-charts";
import { adminLeads, adminOverviewStats, claimsByCategory, monthlyRecovery } from "@/lib/dashboard-data";

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-[1.6rem] text-navy-900">Admin Overview</h1>
        <p className="mt-1 text-[0.9rem] text-ink-600">Portfolio health across all claims and partners.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {adminOverviewStats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="card-surface p-6 lg:col-span-2">
          <h2 className="font-display text-[1.1rem] text-navy-900">Recovery Trend</h2>
          <div className="mt-4 h-64">
            <RecoveryTrendChart data={monthlyRecovery} />
          </div>
        </div>
        <div className="card-surface p-6">
          <h2 className="font-display text-[1.1rem] text-navy-900">Claims by Category</h2>
          <div className="mt-4 h-64">
            <ClaimsCategoryChart data={claimsByCategory} />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
            {claimsByCategory.map((c, i) => (
              <div key={c.category} className="flex items-center gap-1.5 text-[0.76rem] text-ink-600">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: ["#2f6f62", "#3c8776", "#b08d45", "#2c4f7c", "#8a3a2e", "#cbab6a"][i % 6] }}
                />
                {c.category}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <div className="flex items-center justify-between p-6 pb-0">
          <h2 className="font-display text-[1.1rem] text-navy-900">Recent Leads</h2>
          <Link href="/admin/leads" className="flex items-center gap-1 text-[0.8rem] font-medium text-teal-600 hover:text-teal-700">
            View all <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-[0.85rem]">
            <thead>
              <tr className="border-y border-neutral-200 text-[0.75rem] uppercase tracking-wide text-ink-500">
                <th className="px-6 py-3 font-medium">Lead ID</th>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Source</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {adminLeads.slice(0, 5).map((l) => (
                <tr key={l.id}>
                  <td className="px-6 py-3.5 font-medium text-navy-900">{l.id}</td>
                  <td className="px-6 py-3.5 text-ink-700">{l.name}</td>
                  <td className="px-6 py-3.5 text-ink-600">{l.type}</td>
                  <td className="px-6 py-3.5 text-ink-600">{l.source}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={l.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
