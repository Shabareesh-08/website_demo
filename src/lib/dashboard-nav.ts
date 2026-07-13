import {
  Bell,
  FileStack,
  FolderOpen,
  Gauge,
  Newspaper,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import type { DashboardNavItem } from "@/components/dashboard/dashboard-shell";

export const partnerNavItems: DashboardNavItem[] = [
  { label: "Overview", href: "/partner/dashboard", icon: Gauge },
  { label: "Case Tracking", href: "/partner/dashboard/cases", icon: FileStack },
  { label: "Referral Management", href: "/partner/dashboard/referrals", icon: Users },
  { label: "Commission Reports", href: "/partner/dashboard/commissions", icon: Wallet },
  { label: "Documents", href: "/partner/dashboard/documents", icon: FolderOpen },
  { label: "Notifications", href: "/partner/dashboard/notifications", icon: Bell },
  { label: "Client Updates", href: "/partner/dashboard/clients", icon: Newspaper },
];

export const adminNavItems: DashboardNavItem[] = [
  { label: "Overview", href: "/admin", icon: Gauge },
  { label: "Leads & Claims", href: "/admin/leads", icon: FileStack },
  { label: "Partners", href: "/admin/partners", icon: Users },
  { label: "Content", href: "/admin/content", icon: Newspaper },
  { label: "Team", href: "/admin/team", icon: ShieldCheck },
  { label: "Settings", href: "/admin/settings", icon: Wallet },
];
