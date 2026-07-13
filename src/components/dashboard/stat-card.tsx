import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend?: { direction: "up" | "down"; value: string };
}) {
  return (
    <div className="card-surface p-6">
      <p className="text-[0.78rem] font-medium text-ink-500">{label}</p>
      <p className="mt-2 font-display text-[1.7rem] text-navy-900">{value}</p>
      {trend && (
        <p className={cn("mt-2 text-[0.78rem] font-medium", trend.direction === "up" ? "text-teal-600" : "text-danger")}>
          {trend.direction === "up" ? "▲" : "▼"} {trend.value}
        </p>
      )}
    </div>
  );
}

const statusStyles: Record<string, string> = {
  Submitted: "bg-neutral-100 text-ink-600",
  "Under Review": "bg-gold-100 text-gold-700",
  "In Negotiation": "bg-teal-100 text-teal-700",
  Settled: "bg-teal-600 text-neutral-0",
  Closed: "bg-neutral-200 text-ink-500",
  New: "bg-neutral-100 text-ink-600",
  Assigned: "bg-gold-100 text-gold-700",
  Contacted: "bg-teal-100 text-teal-700",
  Qualified: "bg-teal-600 text-neutral-0",
  Rejected: "bg-danger/10 text-danger",
  "Pending Review": "bg-gold-100 text-gold-700",
  Accepted: "bg-teal-600 text-neutral-0",
  Declined: "bg-danger/10 text-danger",
  Paid: "bg-teal-600 text-neutral-0",
  "Pending Settlement": "bg-gold-100 text-gold-700",
  Active: "bg-teal-600 text-neutral-0",
  "Pending Approval": "bg-gold-100 text-gold-700",
  Published: "bg-teal-600 text-neutral-0",
  Draft: "bg-neutral-100 text-ink-600",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[0.72rem] font-semibold whitespace-nowrap",
        statusStyles[status] ?? "bg-neutral-100 text-ink-600"
      )}
    >
      {status}
    </span>
  );
}
