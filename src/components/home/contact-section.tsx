import { Clock, ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Get in Touch"
          title="We are one step away from you"
          description="Our experts will evaluate your claim at no cost. If your case qualifies for processing and we believe we can help you get a fair settlement, we'll discuss the service fees and next steps transparently before starting."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 lg:col-span-7">
            <a
              href={siteConfig.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-full w-full min-h-[400px]"
            >
              <iframe
                src={siteConfig.mapEmbed}
                className="absolute inset-0 h-full w-full border-0 pointer-events-none"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Expert Claim Solutions office location"
              />
              <div className="absolute inset-0 z-10 flex items-end justify-center pb-6 opacity-0 transition-opacity hover:opacity-100">
                <span className="rounded-full bg-navy-950/80 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
                  Open in Google Maps →
                </span>
              </div>
            </a>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <ContactRow icon={MapPin} label="Office" value={siteConfig.address} />
            <ContactRow icon={Phone} label="Phone" value={siteConfig.phone} href={siteConfig.phoneHref} />
            <ContactRow icon={Mail} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat with us" href={siteConfig.whatsapp} />
            <ContactRow icon={Clock} label="Business Hours" value={siteConfig.hours} />
            <ContactRow icon={ExternalLink} label="Instagram" value="@expert_claims_solutions" href={siteConfig.socials.instagram} external />
            <ContactRow icon={ExternalLink} label="LinkedIn" value="Expert Claim Solutions" href={siteConfig.socials.linkedin} external />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-lg border border-neutral-200 bg-neutral-0 p-5 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-600">
        <Icon className="h-[1.125rem] w-[1.125rem]" />
      </span>
      <div>
        <p className="text-[0.75rem] font-medium uppercase text-ink-500">{label}</p>
        <p className="mt-0.5 text-[0.92rem] text-navy-900">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {content}
    </a>
  ) : (
    content
  );
}
