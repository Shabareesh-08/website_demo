import { User } from "lucide-react";
import { adminTeam } from "@/lib/dashboard-data";

export default function AdminTeamPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-[1.5rem] text-navy-900">Team</h1>
        <p className="mt-1 text-[0.88rem] text-ink-600">Internal directors, analysts, and surveyors.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {adminTeam.map((member) => (
          <div key={member.name} className="card-surface p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
              <User className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-[1.05rem] text-navy-900">{member.name}</h3>
            <p className="mt-0.5 text-[0.78rem] text-teal-600">{member.role}</p>
            <p className="mt-3 text-[0.78rem] text-ink-500">{member.department}</p>
            <p className="mt-1 text-[0.78rem] text-ink-500">{member.cases} active cases</p>
          </div>
        ))}
      </div>
    </div>
  );
}
