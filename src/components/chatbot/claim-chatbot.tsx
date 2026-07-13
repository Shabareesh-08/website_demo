"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, CheckCircle2, Loader2, Send, SkipForward, UploadCloud, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chatbotSteps } from "@/lib/chatbot-flow";
import { cn } from "@/lib/utils";

type Message = { id: string; role: "assistant" | "user"; text: string };

export function ClaimChatbot() {
  const [open, setOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro",
      role: "assistant",
      text: "Hi, I'm the Expert Claims Solutions claim assistant. I'll ask a few quick questions to understand your claim, then connect you with a specialist. Let's start.",
    },
  ]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [inputValue, setInputValue] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentStep = stepIndex < chatbotSteps.length ? chatbotSteps[stepIndex] : null;
  const askedStepRef = useRef(-1);

  // Push the assistant's question exactly once when a new step becomes active.
  useEffect(() => {
    if (!open || !currentStep) return;
    if (askedStepRef.current === stepIndex) return;
    askedStepRef.current = stepIndex;
    setMessages((prev) => [...prev, { id: `${currentStep.id}-q`, role: "assistant", text: currentStep.prompt }]);
  }, [open, stepIndex, currentStep]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, submitting, referenceNumber]);

  function answerAndAdvance(displayText: string, storedValue: string) {
    if (!currentStep) return;
    setMessages((prev) => [...prev, { id: `${currentStep.id}-a-${Date.now()}`, role: "user", text: displayText }]);
    const nextAnswers = { ...answers, [currentStep.id]: storedValue };
    setAnswers(nextAnswers);
    setInputValue("");
    setFileName(null);
    const nextIndex = stepIndex + 1;
    setStepIndex(nextIndex);
    if (nextIndex === chatbotSteps.length) {
      submitLead(nextAnswers);
    }
  }

  function handleTextSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    answerAndAdvance(inputValue.trim(), inputValue.trim());
  }

  async function submitLead(finalAnswers: Record<string, string>) {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "chatbot",
          fullName: finalAnswers.fullName,
          mobile: finalAnswers.phone,
          email: finalAnswers.email,
          insuranceType: finalAnswers.insuranceType,
          insuranceCompany: finalAnswers.insuranceCompany,
          claimStatus: finalAnswers.claimStatus,
          claimAmount: finalAnswers.claimAmount,
          incidentDate: finalAnswers.incidentDate,
          rejectionLetter: finalAnswers.rejectionLetter,
          preferredCallbackTime: finalAnswers.callbackTime,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setReferenceNumber(data.referenceNumber);
    } catch {
      setError("We couldn't submit this automatically. Please call us directly, or try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setStepIndex(0);
    setAnswers({});
    setMessages([messages[0]]);
    askedStepRef.current = -1;
    setReferenceNumber(null);
    setError(null);
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close claim assistant" : "Open claim assistant"}
        className="focus-ring fixed bottom-24 left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-neutral-0 shadow-[var(--shadow-card-hover)] hover:bg-navy-800 lg:bottom-6 lg:left-6"
      >
        {open ? <X className="h-5 w-5" /> : <Bot className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed inset-x-4 bottom-40 top-20 z-40 flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-0 shadow-[var(--shadow-card-hover)] sm:inset-x-auto sm:bottom-24 sm:left-6 sm:top-auto sm:h-[32rem] sm:w-96">
          <div className="flex items-center gap-3 border-b border-neutral-200 bg-navy-950 px-5 py-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-neutral-0">
              <Bot className="h-[1.125rem] w-[1.125rem]" />
            </span>
            <div>
              <p className="text-[0.9rem] font-medium text-neutral-0">Claim Assistant</p>
              <p className="text-[0.72rem] text-neutral-400">Typically replies instantly</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.85rem] leading-relaxed",
                  m.role === "assistant"
                    ? "bg-neutral-100 text-ink-700"
                    : "ml-auto bg-teal-600 text-neutral-0"
                )}
              >
                {m.text}
              </div>
            ))}

            {stepIndex === chatbotSteps.length && (
              <div className="max-w-[90%] rounded-2xl bg-neutral-100 px-4 py-3 text-[0.85rem] text-ink-700">
                {submitting && (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-teal-600" /> Submitting your details...
                  </span>
                )}
                {referenceNumber && (
                  <div className="flex flex-col gap-1.5">
                    <span className="flex items-center gap-2 font-medium text-navy-900">
                      <CheckCircle2 className="h-4 w-4 text-teal-600" /> You&rsquo;re all set.
                    </span>
                    <span>
                      Reference number <strong className="text-navy-900">{referenceNumber}</strong>. A claims
                      specialist will call you during your preferred window.
                    </span>
                  </div>
                )}
                {error && <span className="text-danger">{error}</span>}
              </div>
            )}
          </div>

          <div className="border-t border-neutral-200 p-3">
            {currentStep?.kind === "choice" && (
              <div className="flex flex-wrap gap-2">
                {currentStep.options!.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => answerAndAdvance(opt, opt)}
                    className="focus-ring rounded-full border border-neutral-300 px-3.5 py-1.5 text-[0.8rem] font-medium text-ink-700 hover:border-teal-600 hover:text-teal-700"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {currentStep?.kind === "file" && (
              <div className="flex items-center gap-2">
                <label className="focus-ring flex flex-1 cursor-pointer items-center gap-2 rounded-md border border-dashed border-neutral-300 px-3 py-2.5 text-[0.8rem] text-ink-600 hover:border-teal-600">
                  <UploadCloud className="h-4 w-4 text-teal-600" />
                  {fileName ?? "Upload a document"}
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  />
                </label>
                {fileName ? (
                  <Button size="sm" onClick={() => answerAndAdvance(`Uploaded: ${fileName}`, fileName)}>
                    Send
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" onClick={() => answerAndAdvance("Skipped for now", "")}>
                    <SkipForward className="h-3.5 w-3.5" /> Skip
                  </Button>
                )}
              </div>
            )}

            {currentStep &&
              ["text", "tel", "email", "date", "amount"].includes(currentStep.kind) && (
                <form onSubmit={handleTextSubmit} className="flex items-center gap-2">
                  <input
                    autoFocus
                    type={
                      currentStep.kind === "date"
                        ? "date"
                        : currentStep.kind === "amount"
                        ? "number"
                        : currentStep.kind === "tel"
                        ? "tel"
                        : currentStep.kind === "email"
                        ? "email"
                        : "text"
                    }
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your answer..."
                    className="focus-ring w-full rounded-md border border-neutral-300 px-3.5 py-2.5 text-[0.85rem]"
                  />
                  <button
                    type="submit"
                    aria-label="Send"
                    className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-teal-600 text-neutral-0 hover:bg-teal-700"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}

            {stepIndex === chatbotSteps.length && (referenceNumber || error) && (
              <Button variant="outline" size="sm" className="w-full" onClick={reset}>
                Start a new conversation
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
