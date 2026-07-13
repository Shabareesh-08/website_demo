import { StatusBadge } from "@/components/dashboard/stat-card";
import { Button } from "@/components/ui/button";
import { adminPartners } from "@/lib/dashboard-data";

export default function AdminPartnersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[1.5rem] text-navy-900">Partners</h1>
        <p className="mt-1 text-[0.88rem] text-ink-600">Agents, brokers, and advisors registered on the Partner Program.</p>
      </div>

      <div className="card-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[0.85rem]">
            <thead>
              <tr className="border-b border-neutral-200 text-[0.75rem] uppercase tracking-wide text-ink-500">
                <th className="px-6 py-3 font-medium">Partner</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Active Cases</th>
                <th className="px-6 py-3 font-medium">Commission YTD</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium" />
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {adminPartners.map((p) => (
                <tr key={p.name} className="hover:bg-neutral-50">
                  <td className="px-6 py-3.5 font-medium text-navy-900">{p.name}</td>
                  <td className="px-6 py-3.5 text-ink-600">{p.type}</td>
                  <td className="px-6 py-3.5 text-ink-600">{p.cases}</td>
                  <td className="px-6 py-3.5 text-teal-700">{p.commissionYtd}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={p.status} /></td>
                  <td className="px-6 py-3.5">
                    {p.status === "Pending Approval" ? (
                      <Button size="sm" variant="outline">Review</Button>
                    ) : (
                      <Button size="sm" variant="ghost">View</Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
