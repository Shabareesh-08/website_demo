"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,box-shadow] duration-300",
        scrolled ? "bg-neutral-0/95 backdrop-blur shadow-[var(--shadow-nav)]" : "bg-neutral-0"
      )}
    >
      {/* Utility bar */}
      <div className="hidden border-b border-neutral-200 lg:block">
        <Container className="flex h-9 items-center justify-between text-[0.8rem] text-ink-500">
          <span>{siteConfig.hours}</span>
          <div className="flex items-center gap-5">
            <a href={siteConfig.whatsapp} className="flex items-center gap-1.5 hover:text-teal-600">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
            <a href="/contact#claim-evaluation" className="hover:text-teal-600">
              Raise a Complaint
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-teal-600">
              {siteConfig.email}
            </a>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="flex items-center gap-2.5 focus-ring">
          <Image src="/logo.png" alt="Expert Claim Solutions" width={480} height={320} className="h-auto w-48 object-contain lg:w-72" priority />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="focus-ring flex items-center gap-1 rounded-md px-3.5 py-2 text-[0.9rem] text-ink-700 hover:text-navy-900">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 top-full grid w-[560px] grid-cols-2 gap-x-6 gap-y-1 rounded-lg border border-neutral-200 bg-neutral-0 p-4 shadow-[var(--shadow-card-hover)]"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="focus-ring rounded-md px-3 py-2.5 text-[0.87rem] text-ink-700 hover:bg-teal-50 hover:text-teal-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-3.5 py-2 text-[0.9rem] text-ink-700 hover:text-navy-900"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className="focus-ring flex items-center gap-2 rounded-md border border-teal-600/25 bg-teal-50 px-3.5 py-2 text-[0.9rem] font-semibold whitespace-nowrap text-teal-700 hover:bg-teal-100"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Button href="/contact#claim-evaluation" size="sm">
            Request Claim Evaluation
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="focus-ring rounded-md p-2 text-navy-900 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-neutral-200 bg-neutral-0 lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {primaryNav.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-2 py-2.5 text-[0.95rem] text-ink-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-3 flex flex-col border-l border-neutral-200 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-md px-2 py-2 text-[0.85rem] text-ink-500"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-3 flex flex-col gap-3 border-t border-neutral-200 pt-4">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-md bg-teal-50 px-4 py-2.5 text-[0.9rem] font-semibold text-teal-700"
                >
                  <Phone className="h-4 w-4" /> {siteConfig.phone}
                </a>
                <Button href="/contact#claim-evaluation">Request Claim Evaluation</Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
