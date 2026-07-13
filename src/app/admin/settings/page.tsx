"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const inputClasses =
  "focus-ring w-full rounded-md border border-neutral-300 bg-neutral-0 px-3.5 py-2.5 text-[0.9rem] text-navy-900";
const labelClasses = "mb-1.5 block text-[0.82rem] font-medium text-ink-700";

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="font-display text-[1.5rem] text-navy-900">Settings</h1>
        <p className="mt-1 text-[0.88rem] text-ink-600">Site-wide contact details and business information.</p>
      </div>

      <form onSubmit={handleSubmit} className="card-surface space-y-5 p-7">
        <div>
          <label className={labelClasses} htmlFor="settingsPhone">Primary Phone Number</label>
          <input id="settingsPhone" defaultValue={siteConfig.phone} className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="settingsEmail">Primary Email</label>
          <input id="settingsEmail" defaultValue={siteConfig.email} className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="settingsAddress">Office Address</label>
          <textarea id="settingsAddress" defaultValue={siteConfig.address} rows={2} className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="settingsHours">Business Hours</label>
          <input id="settingsHours" defaultValue={siteConfig.hours} className={inputClasses} />
        </div>
        <Button type="submit">{saved ? "Saved ✓" : "Save Changes"}</Button>
      </form>
    </div>
  );
}
