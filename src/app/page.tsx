import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { Services } from "@/components/home/services";
import { Testimonials } from "@/components/home/testimonials";
import { Process } from "@/components/home/process";
import { Awards } from "@/components/home/awards";
import { ClaimForm } from "@/components/home/claim-form";
import { ContactSection } from "@/components/home/contact-section";
import { TeamSection } from "@/components/home/team-section";
import { Container } from "@/components/ui/section";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <Process />
      <TeamSection />
      <Awards />
      <section className="py-24 sm:py-28">
        <Container>
          <ClaimForm />
        </Container>
      </section>
      <ContactSection />
    </>
  );
}
