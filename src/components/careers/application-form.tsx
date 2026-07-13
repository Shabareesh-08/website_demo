"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openPositions } from "@/lib/careers-data";

const inputClasses =
  "focus-ring w-full rounded-md border border-neutral-300 bg-neutral-0 px-3.5 py-2.5 text-[0.9rem] text-navy-900 placeholder:text-ink-400";
const labelClasses = "mb-1.5 block text-[0.82rem] font-medium text-ink-700";

export function CareersApplicationForm({ preselected }: { preselected?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/careers", {
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
        <h3 className="font-display text-[1.2rem] text-navy-900">Application received</h3>
        <p className="text-[0.88rem] text-ink-600">Our talent team reviews every application within 5 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface p-7 sm:p-9">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="applicantName">Full Name</label>
          <input id="applicantName" name="fullName" required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="applicantPosition">Position</label>
          <select id="applicantPosition" name="position" required className={inputClasses} defaultValue={preselected ?? ""}>
            <option value="" disabled>Select a position</option>
            {openPositions.map((p) => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
            <option value="general">General Application</option>
          </select>
        </div>
        <div>
          <label className={labelClasses} htmlFor="applicantPhone">Mobile Number</label>
          <input id="applicantPhone" name="phone" type="tel" required className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="applicantEmail">Email Address</label>
          <input id="applicantEmail" name="email" type="email" required className={inputClasses} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="applicantResume">Resume</label>
          <label
            htmlFor="applicantResume"
            className="focus-ring flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-neutral-300 px-4 py-3.5 text-[0.85rem] text-ink-600 hover:border-teal-600"
          >
            <UploadCloud className="h-[1.125rem] w-[1.125rem] shrink-0 text-teal-600" />
            {fileName ?? "Upload PDF or DOCX (max 5MB)"}
          </label>
          <input
            id="applicantResume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="applicantMessage">Cover Note (optional)</label>
          <textarea id="applicantMessage" name="message" rows={3} className={inputClasses} />
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full" disabled={submitting}>
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Submit Application
      </Button>
      {error && <p className="mt-3 text-center text-[0.8rem] text-danger">{error}</p>}
    </form>
  );
}
