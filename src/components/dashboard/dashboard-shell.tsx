"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, LogOut, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type DashboardNavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export function DashboardShell({
  navItems,
  roleLabel,
  userName,
  userInitials,
  children,
}: {
  navItems: DashboardNavItem[];
  roleLabel: string;
  userName: string;
  userInitials: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-neutral-200 bg-navy-950 lg:flex">
        <SidebarContent navItems={navItems} pathname={pathname} roleLabel={roleLabel} />
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="absolute inset-0 bg-navy-950/60" onClick={() => setMobileOpen(false)} />
          <aside className="relative flex w-72 flex-col bg-navy-950">
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="focus-ring absolute right-4 top-4 text-neutral-400"
            >
              <X className="h-5 w-5" />
            </button>
            <SidebarContent
              navItems={navItems}
              pathname={pathname}
              roleLabel={roleLabel}
              onNavigate={() => setMobileOpen(false)}
            />
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-neutral-200 bg-neutral-0 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="focus-ring text-navy-900 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="relative hidden sm:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-400" />
              <input
                placeholder="Search..."
                className="focus-ring w-56 rounded-md border border-neutral-300 bg-neutral-50 py-2 pl-9 pr-3 text-[0.82rem] placeholder:text-ink-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button aria-label="Notifications" className="focus-ring relative text-ink-600 hover:text-navy-900">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2 rounded-full bg-teal-600" />
            </button>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-[0.75rem] font-semibold text-teal-700">
                {userInitials}
              </span>
              <span className="hidden text-[0.85rem] font-medium text-navy-900 sm:block">{userName}</span>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

function SidebarContent({
  navItems,
  pathname,
  roleLabel,
  onNavigate,
}: {
  navItems: DashboardNavItem[];
  pathname: string | null;
  roleLabel: string;
  onNavigate?: () => void;
}) {
  return (
    <>
      <div className="flex h-16 items-center gap-2.5 px-6">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal-600 font-display text-base text-neutral-0">
          E
        </span>
        <div className="leading-tight">
          <p className="font-display text-[0.95rem] text-neutral-0">Expert Claims</p>
          <p className="text-[0.68rem] uppercase tracking-[0.14em] text-neutral-400">{roleLabel}</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "focus-ring flex items-center gap-3 rounded-md px-3 py-2.5 text-[0.87rem] font-medium transition-colors",
                active ? "bg-teal-600 text-neutral-0" : "text-neutral-300 hover:bg-neutral-0/5 hover:text-neutral-0"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-neutral-0/10 p-3">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-md px-3 py-2.5 text-[0.87rem] text-neutral-400 hover:bg-neutral-0/5 hover:text-neutral-0"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          Back to Website
        </Link>
      </div>
    </>
  );
}
