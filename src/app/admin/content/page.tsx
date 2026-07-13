import { Plus } from "lucide-react";
import { StatusBadge } from "@/components/dashboard/stat-card";
import { Button } from "@/components/ui/button";
import { contentItems } from "@/lib/dashboard-data";

export default function AdminContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-[1.5rem] text-navy-900">Content</h1>
          <p className="mt-1 text-[0.88rem] text-ink-600">Manage blog posts and resource library entries.</p>
        </div>
        <Button size="sm">
          <Plus className="h-4 w-4" /> New Post
        </Button>
      </div>

      <div className="card-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[0.85rem]">
            <thead>
              <tr className="border-b border-neutral-200 text-[0.75rem] uppercase tracking-wide text-ink-500">
                <th className="px-6 py-3 font-medium">Title</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Last Updated</th>
                <th className="px-6 py-3 font-medium" />
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {contentItems.map((item) => (
                <tr key={item.title} className="hover:bg-neutral-50">
                  <td className="max-w-sm px-6 py-3.5 font-medium text-navy-900">{item.title}</td>
                  <td className="px-6 py-3.5 text-ink-600">{item.type}</td>
                  <td className="px-6 py-3.5"><StatusBadge status={item.status} /></td>
                  <td className="px-6 py-3.5 text-ink-500">
                    {new Date(item.updated).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td className="px-6 py-3.5">
                    <Button size="sm" variant="ghost">Edit</Button>
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
