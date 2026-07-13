"use client";

import { useState } from "react";
import { Download, FileText, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { partnerDocuments } from "@/lib/dashboard-data";

export default function PartnerDocumentsPage() {
  const [uploaded, setUploaded] = useState<string[]>([]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-[1.5rem] text-navy-900">Documents</h1>
        <p className="mt-1 text-[0.88rem] text-ink-600">Upload and manage documents tied to your referred cases.</p>
      </div>

      <label
        htmlFor="dashboard-upload"
        className="focus-ring flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-neutral-300 bg-neutral-0 px-6 py-10 text-center hover:border-teal-600"
      >
        <UploadCloud className="h-7 w-7 text-teal-600" strokeWidth={1.3} />
        <span className="text-[0.88rem] text-ink-600">Drag files here, or click to browse</span>
      </label>
      <input
        id="dashboard-upload"
        type="file"
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files) setUploaded((prev) => [...prev, ...Array.from(e.target.files!).map((f) => f.name)]);
        }}
      />

      <div className="card-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[0.85rem]">
            <thead>
              <tr className="border-b border-neutral-200 text-[0.75rem] uppercase tracking-wide text-ink-500">
                <th className="px-6 py-3 font-medium">File</th>
                <th className="px-6 py-3 font-medium">Case</th>
                <th className="px-6 py-3 font-medium">Uploaded</th>
                <th className="px-6 py-3 font-medium">Size</th>
                <th className="px-6 py-3 font-medium" />
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {uploaded.map((name) => (
                <tr key={name} className="bg-teal-50/40">
                  <td className="flex items-center gap-2 px-6 py-3.5 font-medium text-navy-900">
                    <FileText className="h-4 w-4 text-teal-600" /> {name}
                  </td>
                  <td className="px-6 py-3.5 text-ink-600">General</td>
                  <td className="px-6 py-3.5 text-ink-500">Just now</td>
                  <td className="px-6 py-3.5 text-ink-500">-</td>
                  <td className="px-6 py-3.5" />
                </tr>
              ))}
              {partnerDocuments.map((doc) => (
                <tr key={doc.name} className="hover:bg-neutral-50">
                  <td className="flex items-center gap-2 px-6 py-3.5 font-medium text-navy-900">
                    <FileText className="h-4 w-4 text-teal-600" /> {doc.name}
                  </td>
                  <td className="px-6 py-3.5 text-ink-600">{doc.case}</td>
                  <td className="px-6 py-3.5 text-ink-500">
                    {new Date(doc.uploaded).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td className="px-6 py-3.5 text-ink-500">{doc.size}</td>
                  <td className="px-6 py-3.5">
                    <Button variant="ghost" size="sm">
                      <Download className="h-3.5 w-3.5" />
                    </Button>
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
