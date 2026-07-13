import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/section";
import { footerLinks, siteConfig } from "@/lib/site-config";

function InstagramGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.2 8.1H16V5.2c-.32-.05-1.42-.15-2.7-.15-2.67 0-4.5 1.63-4.5 4.63v2.6H6v3.24h2.8V23h3.38v-7.48h2.65l.42-3.24h-3.07V10c0-.94.26-1.89 2.02-1.89Z" />
    </svg>
  );
}

function LinkedInGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: siteConfig.socials.instagram, icon: InstagramGlyph },
  { label: "Facebook", href: siteConfig.socials.facebook, icon: FacebookGlyph },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: LinkedInGlyph },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-neutral-200">
      <Container className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Expert Claim Solutions"
              width={480}
              height={320}
              className="h-auto w-48 object-contain brightness-0 invert lg:w-72"
            />
          </Link>
          <p className="mt-5 max-w-sm text-[0.92rem] leading-relaxed text-neutral-400">
            At Expert Claim Solutions, we are a team of experienced insurance claim professionals dedicated to simplifying and resolving your insurance claim challenges.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-md border border-neutral-0/15 text-neutral-300 transition hover:border-teal-500 hover:text-teal-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" links={footerLinks.company} />
        <FooterColumn title="Services" links={footerLinks.services} />
        <FooterColumn title="Resources" links={footerLinks.resources} />

        <div className="lg:col-span-3">
          <h4 className="eyebrow !text-teal-400">Head Office</h4>
          <ul className="mt-4 space-y-3 text-[0.88rem] text-neutral-300">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
              {siteConfig.address}
            </li>
            <li className="flex gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-teal-400" />
              <div>
                <a href={siteConfig.phoneHref} className="hover:text-teal-400">
                  {siteConfig.phone}
                </a>
                {siteConfig.phoneAlt && (
                  <span className="text-neutral-500">{", "}<a href={`tel:${siteConfig.phoneAlt.replace(/\s/g, "")}`} className="text-neutral-300 hover:text-teal-400">{siteConfig.phoneAlt}</a></span>
                )}
              </div>
            </li>
            <li className="flex gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-teal-400" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-teal-400">
                {siteConfig.email}
              </a>
            </li>
          </ul>
          {siteConfig.branches && siteConfig.branches.length > 0 && (
            <div className="mt-5">
              <h4 className="eyebrow !text-teal-400">Branches</h4>
              <ul className="mt-3 space-y-2.5 text-[0.85rem] text-neutral-400">
                {siteConfig.branches.map((b) => (
                  <li key={b.city}>
                    <span className="font-medium text-neutral-300">{b.city}:</span>{" "}{b.address}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>

      <div className="border-t border-neutral-0/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-[0.8rem] text-neutral-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-teal-400">
                {l.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="lg:col-span-3">
      <h4 className="eyebrow !text-teal-400">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[0.88rem] text-neutral-300 hover:text-teal-400">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
