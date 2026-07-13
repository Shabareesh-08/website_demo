import type { Metadata } from "next";
import { Bell, ClipboardList, FileUp, Gauge, MessageSquare, Wallet } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container, SectionHeading } from "@/components/ui/section";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Button } from "@/components/ui/button";
import {
  commissionTiers,
  dashboardFeatures,
  partnerBenefits,
  partnerFaqs,
  partnerTypes,
  referralWorkflow,
} from "@/lib/partner-data";
import { PartnerRegistrationForm } from "@/components/partner/registration-form";

export const metadata: Metadata = {
  title: "Partner With Us",
  description: "Refer clients with rejected, delayed, or under-settled insurance claims and earn transparent commission on every successful recovery.",
};

const dashboardIcons = [ClipboardList, Bell, Wallet, FileUp, MessageSquare, Gauge];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner Program"
        title="Refer claims. We recover them. You get paid."
        description="For agents, brokers, financial advisors, CAs, lawyers, surveyors, and consultants who encounter rejected or under-settled claims in their practice."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Partner With Us" }]}
      />

      <section className="py-24 sm:py-28">
        <Container>
          <div className="flex flex-wrap gap-2.5">
            {partnerTypes.map((t) => (
              <span key={t} className="rounded-full border border-teal-600/25 bg-teal-50 px-4 py-1.5 text-[0.8rem] font-medium text-teal-700">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {partnerBenefits.map((b) => (
              <div key={b.title} className="card-surface p-7">
                <h3 className="font-display text-[1.1rem] text-navy-900">{b.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-600">{b.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Commission Structure" title="Transparent, tiered by claim value" />
          <div className="mt-10 overflow-hidden rounded-xl border border-neutral-200">
            <table className="w-full text-left text-[0.88rem]">
              <thead className="bg-navy-900 text-neutral-0">
                <tr>
                  <th className="px-6 py-4 font-medium">Tier</th>
                  <th className="px-6 py-4 font-medium">Claim Value Range</th>
                  <th className="px-6 py-4 font-medium">Commission</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-neutral-0">
                {commissionTiers.map((t) => (
                  <tr key={t.tier}>
                    <td className="px-6 py-4 font-medium text-navy-900">{t.tier}</td>
                    <td className="px-6 py-4 text-ink-600">{t.range}</td>
                    <td className="px-6 py-4 text-teal-700">{t.commission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Partner Dashboard" title="Everything you need, in one place" />
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="rounded-2xl border border-neutral-200 bg-navy-900 p-8 lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {dashboardFeatures.map((feature, i) => {
                  const Icon = dashboardIcons[i];
                  return (
                    <div key={feature} className="rounded-lg border border-neutral-0/10 bg-neutral-0/5 p-4">
                      <Icon className="h-5 w-5 text-teal-400" strokeWidth={1.4} />
                      <p className="mt-3 text-[0.82rem] font-medium text-neutral-100">{feature}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-5">
              <h3 className="font-display text-[1.2rem] text-navy-900">Referral Workflow</h3>
              <ol className="mt-5 space-y-6">
                {referralWorkflow.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-50 text-[0.78rem] font-semibold text-teal-700">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[0.9rem] font-medium text-navy-900">{step.title}</p>
                      <p className="mt-1 text-[0.82rem] leading-relaxed text-ink-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Join the Program"
              title="Become a partner"
              description="Registration takes under two minutes. Our partnerships team will reach out within one business day to complete onboarding."
            />
          </div>
          <div className="lg:col-span-7">
            <PartnerRegistrationForm />
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="FAQs" title="Partner program questions" />
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={partnerFaqs} />
          </div>
          <div className="mt-10">
            <Button href="#" size="lg">Become a Partner</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
