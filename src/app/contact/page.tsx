import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/section";
import { ContactSection } from "@/components/home/contact-section";
import { ClaimForm } from "@/components/home/claim-form";
import { DocumentUpload } from "@/components/contact/document-upload";
import { ConsultationBooking } from "@/components/contact/consultation-booking";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Expert Claims Solutions - request a claim evaluation, upload documents, or book a consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's look at your claim"
        description="Reach us by phone, WhatsApp, or the form below - or book a consultation directly."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <ContactSection />

      <section className="border-t border-neutral-200 bg-neutral-50 py-24 sm:py-28">
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <DocumentUpload />
          <ConsultationBooking />
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container>
          <ClaimForm />
        </Container>
      </section>
    </>
  );
}
