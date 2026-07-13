"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section";
import { claimStatuses, insuranceCompanies, insuranceTypes } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type VerifyChannel = "mobile" | "email";
type OtpState = "idle" | "sent" | "verified";

const inputClasses =
  "focus-ring w-full rounded-md border border-neutral-300 bg-neutral-0 px-3.5 py-2.5 text-[0.9rem] text-navy-900 placeholder:text-ink-400";
const labelClasses = "mb-1.5 block text-[0.82rem] font-medium text-ink-700";

export function ClaimForm() {
  const [channel, setChannel] = useState<VerifyChannel>("mobile");
  const [otpState, setOtpState] = useState<OtpState>("idle");
  const [otpSending, setOtpSending] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");

  function sendOtp() {
    setOtpSending(true);
    // Placeholder for future SMS/email OTP provider integration.
    setTimeout(() => {
      setOtpSending(false);
      setOtpState("sent");
    }, 900);
  }

  function verifyOtp() {
    if (otpValue.trim().length < 4) return;
    setOtpState("verified");
  }

  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (otpState !== "verified") return;
    setSubmitting(true);
    setSubmitError("");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source: "website-form" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed");
      setReferenceNumber(data.referenceNumber);
      setSubmitted(true);
    } catch {
      setSubmitError("We couldn't submit this right now. Please call us directly or try again shortly.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div id="claim-evaluation" className="scroll-mt-24 rounded-2xl border border-teal-600/20 bg-teal-50 p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-teal-600" strokeWidth={1.4} />
        <h3 className="mt-4 font-display text-[1.4rem] text-navy-900">Your claim evaluation request is in.</h3>
        <p className="mt-2 text-[0.92rem] text-ink-600">
          Reference number <span className="font-semibold text-navy-900">{referenceNumber}</span>. A claims
          specialist will call you within one business day.
        </p>
      </div>
    );
  }

  return (
    <div id="claim-evaluation" className="scroll-mt-24 grid grid-cols-1 gap-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <SectionHeading
          eyebrow="Free, No-Obligation Review"
          title="Request a claim evaluation"
          description="Tell us about your policy and current claim status. Our team reviews every submission personally before recommending next steps."
        />
        <ul className="mt-8 space-y-4">
          {[
            "No fee unless we recover your claim",
            "Reviewed by a licensed claims specialist",
            "Confidential - your documents stay protected",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-[0.9rem] text-ink-700">
              <ShieldCheck className="mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 text-teal-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="card-surface p-7 sm:p-9 lg:col-span-7">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelClasses} htmlFor="fullName">Full Name</label>
            <input id="fullName" name="fullName" required className={inputClasses} placeholder="As per policy documents" />
          </div>

          <div>
            <label className={labelClasses} htmlFor="mobile">Mobile Number</label>
            <input id="mobile" name="mobile" type="tel" required className={inputClasses} placeholder="+91 98765 43210" />
          </div>
          <div>
            <label className={labelClasses} htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" required className={inputClasses} placeholder="you@email.com" />
          </div>

          <div className="sm:col-span-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.85rem] font-medium text-navy-900">Verify to continue</p>
                <p className="text-[0.78rem] text-ink-500">Choose one channel to verify with an OTP.</p>
              </div>
              <div className="flex rounded-md border border-neutral-300 p-0.5">
                {(["mobile", "email"] as VerifyChannel[]).map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setChannel(c);
                      setOtpState("idle");
                    }}
                    className={cn(
                      "rounded px-3 py-1.5 text-[0.78rem] font-medium capitalize transition-colors",
                      channel === c ? "bg-navy-900 text-neutral-0" : "text-ink-600"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {otpState !== "verified" ? (
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Button type="button" size="sm" variant="outline" onClick={sendOtp} disabled={otpSending}>
                  {otpSending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {otpState === "sent" ? "Resend OTP" : `Send OTP to ${channel}`}
                </Button>
                {otpState === "sent" && (
                  <>
                    <input
                      value={otpValue}
                      onChange={(e) => setOtpValue(e.target.value)}
                      maxLength={6}
                      className={cn(inputClasses, "w-32")}
                      placeholder="Enter OTP"
                    />
                    <Button type="button" size="sm" onClick={verifyOtp}>
                      Verify
                    </Button>
                  </>
                )}
              </div>
            ) : (
              <p className="mt-3 flex items-center gap-2 text-[0.82rem] font-medium text-teal-700">
                <CheckCircle2 className="h-4 w-4" /> {channel === "mobile" ? "Mobile" : "Email"} verified
              </p>
            )}
          </div>

          <div>
            <label className={labelClasses} htmlFor="insuranceCompany">Insurance Company</label>
            <select id="insuranceCompany" name="insuranceCompany" required className={inputClasses} defaultValue="">
              <option value="" disabled>Select company</option>
              {insuranceCompanies.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClasses} htmlFor="insuranceType">Insurance Type</label>
            <select id="insuranceType" name="insuranceType" required className={inputClasses} defaultValue="">
              <option value="" disabled>Select type</option>
              {insuranceTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClasses} htmlFor="claimAmount">Claim Amount (₹)</label>
            <input id="claimAmount" name="claimAmount" type="number" min={0} className={inputClasses} placeholder="e.g. 500000" />
          </div>
          <div>
            <label className={labelClasses} htmlFor="claimStatus">Current Claim Status</label>
            <select id="claimStatus" name="claimStatus" required className={inputClasses} defaultValue="">
              <option value="" disabled>Select status</option>
              {claimStatuses.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className={labelClasses} htmlFor="description">Brief Description</label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className={inputClasses}
              placeholder="What happened, and why was the claim rejected, delayed, or under-settled?"
            />
          </div>
        </div>

        <Button type="submit" className="mt-6 w-full" disabled={otpState !== "verified" || submitting}>
          {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
          Request Claim Evaluation
        </Button>
        {submitError && <p className="mt-3 text-center text-[0.8rem] text-danger">{submitError}</p>}
        <p className="mt-3 text-center text-[0.75rem] text-ink-500">
          By submitting, you agree to our{" "}
          <a href="/privacy-policy" className="underline hover:text-teal-600">Privacy Policy</a> and{" "}
          <a href="/terms" className="underline hover:text-teal-600">Terms of Use</a>.
        </p>
      </form>
    </div>
  );
}
