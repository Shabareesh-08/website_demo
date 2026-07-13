"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const timeSlots = ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "4:30 PM", "6:00 PM"];

const inputClasses =
  "focus-ring w-full rounded-md border border-neutral-300 bg-neutral-0 px-3.5 py-2.5 text-[0.9rem] text-navy-900 placeholder:text-ink-400";
const labelClasses = "mb-1.5 block text-[0.82rem] font-medium text-ink-700";

export function ConsultationBooking() {
  const [slot, setSlot] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!slot) return;
    setSubmitting(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    const payload = { ...Object.fromEntries(formData.entries()), time: slot };
    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Booking failed");
      setSubmitted(true);
    } catch {
      setError("We couldn't confirm this booking. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="card-surface flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="h-9 w-9 text-teal-600" strokeWidth={1.4} />
        <h3 className="font-display text-[1.15rem] text-navy-900">Consultation booked</h3>
        <p className="text-[0.85rem] text-ink-600">We&rsquo;ve reserved {slot}. A confirmation will be sent by email and SMS.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface p-7">
      <h3 className="font-display text-[1.15rem] text-navy-900">Book a Consultation</h3>
      <p className="mt-1.5 text-[0.85rem] text-ink-600">30-minute call with a claims specialist, at no cost.</p>

      <div className="mt-5">
        <label className={labelClasses} htmlFor="bookingDate">Preferred Date</label>
        <input id="bookingDate" name="date" type="date" required className={inputClasses} />
      </div>

      <div className="mt-4">
        <span className={labelClasses}>Preferred Time</span>
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setSlot(t)}
              className={cn(
                "focus-ring rounded-md border px-2 py-2 text-[0.8rem] font-medium transition-colors",
                slot === t ? "border-teal-600 bg-teal-600 text-neutral-0" : "border-neutral-300 text-ink-600 hover:border-teal-600"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className={labelClasses} htmlFor="bookingPhone">Mobile Number</label>
        <input id="bookingPhone" name="phone" type="tel" required className={inputClasses} />
      </div>

      <Button type="submit" className="mt-5 w-full" disabled={!slot || submitting}>
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Confirm Booking
      </Button>
      {error && <p className="mt-3 text-center text-[0.8rem] text-danger">{error}</p>}
    </form>
  );
}
