"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { partnerTypes } from "@/lib/partner-data";

const inputClasses =
  "focus-ring w-full rounded-md border border-neutral-300 bg-neutral-0 px-3.5 py-2.5 text-[0.9rem] text-navy-900 placeholder:text-ink-400";
const labelClasses = "mb-1.5 block text-[0.82rem] font-medium text-ink-700";

export function PartnerRegistrationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong submitting this. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="card-surface flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="h-9 w-9 text-teal-600" strokeWidth={1.4} />
        <h3 className="font-display text-[1.2rem] text-navy-900">Registration received</h3>
        <p className="text-[0.88rem] text-ink-600">Our partnerships team will reach out within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface p-7 sm:p-9">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="partnerName">Full Name</label>
          <input id="partnerName" name="fullName" required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="partnerType">I am a</label>
          <select id="partnerType" name="partnerType" required className={inputClasses} defaultValue="">
            <option value="" disabled>Select category</option>
            {partnerTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClasses} htmlFor="partnerPhone">Mobile Number</label>
          <input id="partnerPhone" name="phone" type="tel" required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="partnerEmail">Email Address</label>
          <input id="partnerEmail" name="email" type="email" required className={inputClasses} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="partnerFirm">Firm / Practice Name (optional)</label>
          <input id="partnerFirm" name="firmName" className={inputClasses} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="partnerMessage">Tell us about your practice (optional)</label>
          <textarea id="partnerMessage" name="message" rows={3} className={inputClasses} />
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full" disabled={submitting}>
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Submit Registration
      </Button>
      {error && <p className="mt-3 text-center text-[0.8rem] text-danger">{error}</p>}
    </form>
  );
}
