import type { Metadata } from "next";
import { Award, Compass, HeartHandshake, ShieldCheck, Target } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container, SectionHeading } from "@/components/ui/section";
import { Directors } from "@/components/home/directors";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Expert Claims Solutions Private Limited - India's insurance claim recovery and consulting firm. Our story, mission, values, and leadership.",
};

const coreValues = [
  { icon: ShieldCheck, title: "Integrity", description: "We tell clients the truth about their claim's chances, even when it isn't what they hope to hear." },
  { icon: Target, title: "Precision", description: "Claims are won on documentation. We treat every detail as material to the outcome." },
  { icon: HeartHandshake, title: "Advocacy", description: "We represent the policyholder - never the insurer, never a divided interest." },
  { icon: Compass, title: "Independence", description: "Our assessments are our own, not a rubber stamp on an insurer's survey report." },
];

const timeline = [
  { year: "2009", event: "Founded in Hyderabad as a two-person fire and marine surveying practice." },
  { year: "2013", event: "Expanded into full claim recovery advisory beyond independent surveying." },
  { year: "2016", event: "Opened a dedicated health insurance grievance and Ombudsman escalation practice." },
  { year: "2019", event: "Crossed ₹100 Crore in cumulative client recoveries." },
  { year: "2022", event: "Launched the Partner Program for agents, brokers, and advisors." },
  { year: "2025", event: "Recognised as Best Claims Advisory Firm at the Insurance Awards India." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We represent policyholders. That's the entire business."
        description="Expert Claims Solutions was built on a simple observation: insurers have specialists fighting every claim against you. Most policyholders have no one fighting for them. We are that specialist."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="pt-24 sm:pt-28">
        <Container>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 bg-navy-950 shadow-lg">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(60,135,118,0.25),transparent_60%)]" />
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/ScMzIvxBSi4?si=xZ6Vj_zU6W5oDqQO"
              title="Company Overview Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Our Story" title="Started by surveyors, not marketers" />
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink-600">
              <p>
                Expert Claims Solutions began as an independent fire and marine surveying practice in Hyderabad,
                started by professionals who had spent years assessing losses on behalf of insurers - and grew
                increasingly uneasy about how often a genuinely valid claim was rejected on a technicality or
                under-settled through sheer power imbalance.
              </p>
              <p>
                That experience became the firm&rsquo;s founding thesis: policyholders don&rsquo;t need another insurance
                salesperson. They need someone who understands a surveyor&rsquo;s report as well as the insurer does,
                and who is contractually and professionally obligated to argue only for the policyholder.
              </p>
              <p>
                Today, our directors and claims specialists carry that same surveying and legal rigour across
                commercial, health, marine, and engineering claims nationally.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6">
            <div className="card-surface p-7">
              <h3 className="font-display text-[1.2rem] text-navy-900">Mission</h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-600">
                To ensure every policyholder recovers what their policy actually entitles them to - no more,
                no less, and never delayed by a preventable technicality.
              </p>
            </div>
            <div className="card-surface p-7">
              <h3 className="font-display text-[1.2rem] text-navy-900">Vision</h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-600">
                To be the reference standard for independent claim advocacy in India, across every major
                insurance category.
              </p>
            </div>
            <div className="card-surface p-7 sm:col-span-2">
              <h3 className="font-display text-[1.2rem] text-navy-900">Philosophy</h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-600">
                A rejected claim is a position, not a fact. Our job is to test that position against the
                policy wording, the evidence, and the regulatory framework - and to change it where it doesn&rsquo;t
                hold up.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-neutral-50 py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Core Values" title="What guides every case we take on" align="center" />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
            {coreValues.map((v) => (
              <div key={v.title} className="card-surface flex gap-4 p-6">
                <v.icon className="h-6 w-6 shrink-0 text-teal-600" strokeWidth={1.4} />
                <div>
                  <h3 className="font-display text-[1.05rem] text-navy-900">{v.title}</h3>
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-600">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Timeline" title="Sixteen years of claim recovery" />
          <div className="relative mt-14 border-l border-neutral-200 pl-8">
            {timeline.map((t) => (
              <div key={t.year} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[2.35rem] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-teal-600 ring-4 ring-neutral-0" />
                <span className="font-display text-[1.1rem] text-navy-900">{t.year}</span>
                <p className="mt-1 max-w-xl text-[0.9rem] leading-relaxed text-ink-600">{t.event}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Directors />

      <section className="bg-white py-24 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Stay Updated" title="Recent from our socials" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-surface overflow-hidden">
                <div className="relative flex h-52 w-full items-center justify-center bg-neutral-100 text-neutral-400">
                  <span className="text-[0.9rem] font-medium">Post Image {i}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5">
                    {i % 2 === 0 ? (
                      <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                    ) : (
                      <svg className="h-5 w-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    )}
                    <p className="text-[0.85rem] font-medium text-navy-900">Expert Claim Solutions</p>
                  </div>
                  <p className="mt-3 line-clamp-3 text-[0.85rem] leading-relaxed text-ink-600">
                    Understanding the recent IRDAI master circular and how it impacts your health insurance claim rights. We are here to help you fight for your claim money!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="Corporate Social Responsibility"
              title="Consumer awareness beyond our client base"
              description="We run free policyholder-rights awareness sessions for small businesses and self-employed professionals - the segment least likely to have an advisor reviewing their policy before a claim goes wrong. Sessions cover common rejection categories, required documentation, and how to approach the Insurance Ombudsman without legal representation."
            />
          </div>
          <div className="flex items-center lg:col-span-4">
            <div className="card-surface flex w-full flex-col items-start gap-4 p-7">
              <Award className="h-7 w-7 text-gold-600" strokeWidth={1.4} />
              <p className="text-[0.9rem] leading-relaxed text-ink-600">
                Interested in hosting a free awareness session for your community or trade association?
              </p>
              <Button href="/contact" variant="outline" size="sm">Get in Touch</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
