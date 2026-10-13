import { ArrowRight } from "lucide-react";
import { createPageMetadata } from "@/lib/page-metadata";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import { getBookingHref, services, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  "Car Repair Services in UK",
  `See car servicing, diagnostics, brake, engine, clutch, MOT preparation and air conditioning repair services from ${siteConfig.businessName} in London.`,
  "/services",
);

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Car servicing and repairs in UK"
        description="Explore the vehicle services offered by M25 Motors, from routine maintenance and diagnostics to brake, engine, clutch and electrical repairs. Contact the garage to discuss your vehicle and confirm availability."
      />

      <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 0.05} lift>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      <div className="mt-14 rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm sm:mt-20 sm:rounded-[2rem] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">Need advice first?</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">Tell us what is happening with the vehicle</h3>
          </div>
          <a
            href={getBookingHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 sm:w-auto"
          >
            Request a quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
