"use client";

import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { adminNavItems } from "@/lib/dashboard-nav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell navItems={adminNavItems} roleLabel="Admin Console" userName="Deepika Iyer" userInitials="DI">
      {children}
    </DashboardShell>
  );
}
