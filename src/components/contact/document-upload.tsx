"use client";

import { useState } from "react";
import { CheckCircle2, FileText, UploadCloud, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DocumentUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function handleFiles(fileList: FileList | null) {
    if (!fileList) return;
    setFiles((prev) => [...prev, ...Array.from(fileList)]);
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  if (submitted) {
    return (
      <div className="card-surface flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 className="h-9 w-9 text-teal-600" strokeWidth={1.4} />
        <h3 className="font-display text-[1.15rem] text-navy-900">Documents received</h3>
        <p className="text-[0.85rem] text-ink-600">A claims specialist will review these and follow up shortly.</p>
      </div>
    );
  }

  return (
    <div className="card-surface p-7">
      <h3 className="font-display text-[1.15rem] text-navy-900">Upload Documents</h3>
      <p className="mt-1.5 text-[0.85rem] text-ink-600">
        Policy copy, rejection letter, or any supporting evidence - PDF, JPG, or PNG.
      </p>

      <label
        htmlFor="document-upload-input"
        className="focus-ring mt-5 flex cursor-pointer flex-col items-center gap-2 rounded-lg border border-dashed border-neutral-300 px-6 py-8 text-center hover:border-teal-600"
      >
        <UploadCloud className="h-7 w-7 text-teal-600" strokeWidth={1.3} />
        <span className="text-[0.85rem] text-ink-600">Drag files here, or click to browse</span>
      </label>
      <input
        id="document-upload-input"
        type="file"
        multiple
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {files.length > 0 && (
        <ul className="mt-4 space-y-2">
          {files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="flex items-center justify-between gap-3 rounded-md border border-neutral-200 px-3.5 py-2.5 text-[0.82rem] text-ink-700"
            >
              <span className="flex items-center gap-2 truncate">
                <FileText className="h-4 w-4 shrink-0 text-teal-600" />
                <span className="truncate">{file.name}</span>
              </span>
              <button
                onClick={() => removeFile(i)}
                aria-label={`Remove ${file.name}`}
                className="focus-ring shrink-0 text-ink-400 hover:text-danger"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <Button
        className="mt-5 w-full"
        disabled={files.length === 0}
        onClick={() => setSubmitted(true)}
      >
        Submit Documents
      </Button>
    </div>
  );
}
