import { Download } from "lucide-react";
import { StatCard, StatusBadge } from "@/components/dashboard/stat-card";
import { Button } from "@/components/ui/button";
import { CommissionChart } from "@/components/dashboard/commission-chart";
import { commissionHistory, commissionLedger } from "@/lib/dashboard-data";

export default function CommissionReportsPage() {
  const ytd = commissionHistory.reduce((sum, m) => sum + m.amount, 0);
  const pending = commissionLedger
    .filter((c) => c.status === "Pending Settlement")
    .length;

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-[1.5rem] text-navy-900">Commission Reports</h1>
          <p className="mt-1 text-[0.88rem] text-ink-600">Your earnings across every settled referral.</p>
        </div>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4" /> Export CSV
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <StatCard label="Commission YTD" value={`₹${(ytd / 100000).toFixed(1)} L`} />
        <StatCard label="Paid Out" value={`₹${(commissionLedger.filter(c=>c.status==="Paid").length)} cases`} />
        <StatCard label="Pending Settlement" value={`${pending} case${pending === 1 ? "" : "s"}`} />
      </div>

      <div className="card-surface p-6">
        <h2 className="font-display text-[1.1rem] text-navy-900">Monthly Trend</h2>
        <div className="mt-4 h-72">
          <CommissionChart data={commissionHistory} />
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[0.85rem]">
            <thead>
              <tr className="border-b border-neutral-200 text-[0.75rem] uppercase tracking-wide text-ink-500">
                <th className="px-6 py-3 font-medium">Commission ID</th>
                <th className="px-6 py-3 font-medium">Case ID</th>
                <th className="px-6 py-3 font-medium">Client</th>
                <th className="px-6 py-3 font-medium">Amount</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {commissionLedger.map((c) => (
                <tr key={c.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-3.5 font-medium text-navy-900">{c.id}</td>
                  <td className="px-6 py-3.5 text-ink-600">{c.caseId}</td>
                  <td className="px-6 py-3.5 text-ink-700">{c.client}</td>
                  <td className="px-6 py-3.5 text-teal-700">{c.amount}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={c.status} /></td>
                  <td className="px-6 py-3.5 text-ink-500">{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
