import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StatCard, StatusBadge } from "@/components/dashboard/stat-card";
import { CommissionChart } from "@/components/dashboard/commission-chart";
import { commissionHistory, partnerCases, referralQueue } from "@/lib/dashboard-data";

export default function PartnerDashboardPage() {
  const totalCommissionYtd = commissionHistory.reduce((sum, m) => sum + m.amount, 0);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-[1.6rem] text-navy-900">Welcome back, R. Venkatesh</h1>
        <p className="mt-1 text-[0.9rem] text-ink-600">Here&rsquo;s how your referrals are performing.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active Cases" value={String(partnerCases.filter((c) => c.status !== "Closed").length)} />
        <StatCard label="Commission YTD" value={`₹${(totalCommissionYtd / 100000).toFixed(1)} L`} trend={{ direction: "up", value: "12% vs last quarter" }} />
        <StatCard label="Pending Referrals" value={String(referralQueue.filter((r) => r.status === "Pending Review").length)} />
        <StatCard label="Cases Settled" value={String(partnerCases.filter((c) => c.status === "Settled").length)} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="card-surface p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-[1.1rem] text-navy-900">Commission Trend</h2>
            <Link href="/partner/dashboard/commissions" className="flex items-center gap-1 text-[0.8rem] font-medium text-teal-600 hover:text-teal-700">
              View report <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-4 h-64">
            <CommissionChart data={commissionHistory} />
          </div>
        </div>

        <div className="card-surface p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-[1.1rem] text-navy-900">Referral Queue</h2>
            <Link href="/partner/dashboard/referrals" className="flex items-center gap-1 text-[0.8rem] font-medium text-teal-600 hover:text-teal-700">
              View all <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-4 space-y-4">
            {referralQueue.slice(0, 4).map((r) => (
              <div key={r.id} className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.85rem] font-medium text-navy-900">{r.client}</p>
                  <p className="text-[0.76rem] text-ink-500">{r.type}</p>
                </div>
                <StatusBadge status={r.status} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <div className="flex items-center justify-between p-6 pb-0">
          <h2 className="font-display text-[1.1rem] text-navy-900">Recent Cases</h2>
          <Link href="/partner/dashboard/cases" className="flex items-center gap-1 text-[0.8rem] font-medium text-teal-600 hover:text-teal-700">
            View all <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-[0.85rem]">
            <thead>
              <tr className="border-y border-neutral-200 text-[0.75rem] uppercase tracking-wide text-ink-500">
                <th className="px-6 py-3 font-medium">Case ID</th>
                <th className="px-6 py-3 font-medium">Client</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Value</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {partnerCases.slice(0, 5).map((c) => (
                <tr key={c.id}>
                  <td className="px-6 py-3.5 font-medium text-navy-900">{c.id}</td>
                  <td className="px-6 py-3.5 text-ink-700">{c.client}</td>
                  <td className="px-6 py-3.5 text-ink-600">{c.type}</td>
                  <td className="px-6 py-3.5 text-ink-600">{c.value}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={c.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
