import { Bell } from "lucide-react";
import { partnerNotifications } from "@/lib/dashboard-data";
import { cn } from "@/lib/utils";

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[1.5rem] text-navy-900">Notifications</h1>
        <p className="mt-1 text-[0.88rem] text-ink-600">Updates on your referrals, cases, and commissions.</p>
      </div>

      <div className="card-surface divide-y divide-neutral-100">
        {partnerNotifications.map((n) => (
          <div key={n.id} className={cn("flex items-start gap-4 p-5", n.unread && "bg-teal-50/40")}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Bell className="h-4 w-4" />
            </span>
            <div className="flex-1">
              <p className="text-[0.9rem] text-navy-900">{n.message}</p>
              <p className="mt-1 text-[0.76rem] text-ink-500">{n.time}</p>
            </div>
            {n.unread && <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-600" />}
          </div>
        ))}
      </div>
    </div>
  );
}
