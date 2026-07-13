"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { StatusBadge } from "@/components/dashboard/stat-card";
import { Button } from "@/components/ui/button";
import { referralQueue } from "@/lib/dashboard-data";
import { insuranceTypes } from "@/lib/mock-data";

export default function ReferralManagementPage() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
    }, 1400);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-[1.5rem] text-navy-900">Referral Management</h1>
          <p className="mt-1 text-[0.88rem] text-ink-600">Submit new referrals and track their intake status.</p>
        </div>
        <Button size="sm" onClick={() => setShowForm((v) => !v)}>
          <Plus className="h-4 w-4" /> New Referral
        </Button>
      </div>

      {showForm && (
        <div className="card-surface p-6">
          {submitted ? (
            <p className="py-6 text-center text-[0.9rem] font-medium text-teal-700">Referral submitted successfully.</p>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-[0.8rem] font-medium text-ink-700">Client Name</label>
                <input required className="focus-ring w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-[0.88rem]" />
              </div>
              <div>
                <label className="mb-1.5 block text-[0.8rem] font-medium text-ink-700">Insurance Type</label>
                <select required className="focus-ring w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-[0.88rem]" defaultValue="">
                  <option value="" disabled>Select type</option>
                  {insuranceTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-[0.8rem] font-medium text-ink-700">Client Phone</label>
                <input type="tel" required className="focus-ring w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-[0.88rem]" />
              </div>
              <div>
                <label className="mb-1.5 block text-[0.8rem] font-medium text-ink-700">Estimated Claim Value</label>
                <input type="text" placeholder="e.g. ₹15 Lakh" className="focus-ring w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-[0.88rem]" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className="w-full sm:w-auto">Submit Referral</Button>
              </div>
            </form>
          )}
        </div>
      )}

      <div className="card-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[0.85rem]">
            <thead>
              <tr className="border-b border-neutral-200 text-[0.75rem] uppercase tracking-wide text-ink-500">
                <th className="px-6 py-3 font-medium">Referral ID</th>
                <th className="px-6 py-3 font-medium">Client</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Submitted</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {referralQueue.map((r) => (
                <tr key={r.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-3.5 font-medium text-navy-900">{r.id}</td>
                  <td className="px-6 py-3.5 text-ink-700">{r.client}</td>
                  <td className="px-6 py-3.5 text-ink-600">{r.type}</td>
                  <td className="px-6 py-3.5 text-ink-500">
                    {new Date(r.submitted).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td className="px-6 py-3.5"><StatusBadge status={r.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
