import { StatusBadge } from "@/components/dashboard/stat-card";
import { partnerClients } from "@/lib/dashboard-data";

export default function ClientUpdatesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[1.5rem] text-navy-900">Client Updates</h1>
        <p className="mt-1 text-[0.88rem] text-ink-600">The latest status for each client you&rsquo;ve referred.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {partnerClients.map((client) => (
          <div key={client.name} className="card-surface p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-[1.05rem] text-navy-900">{client.name}</h3>
                <p className="mt-0.5 text-[0.78rem] text-ink-500">
                  {client.cases} case{client.cases > 1 ? "s" : ""}
                </p>
              </div>
              <StatusBadge status={client.status} />
            </div>
            <p className="mt-4 text-[0.85rem] leading-relaxed text-ink-600">{client.lastUpdate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
