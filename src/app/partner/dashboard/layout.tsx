"use client";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { partnerNavItems } from "@/lib/dashboard-nav";

export default function PartnerDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell navItems={partnerNavItems} roleLabel="Partner Portal" userName="R. Venkatesh" userInitials="RV">
      {children}
    </DashboardShell>
  );
}
