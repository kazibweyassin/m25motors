import { createPageMetadata } from "@/lib/page-metadata";
import { BookingLink } from "@/components/booking-link";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import { getBookingHref, services, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  `Car Repairs & Servicing in ${siteConfig.location}`,
  `Car servicing, diagnostics, brakes, engines, clutches, MOT preparation and air conditioning at ${siteConfig.businessName} in ${siteConfig.location}, ${siteConfig.region}.`,
  "/services",
);

export default function ServicesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Car repair services in ${siteConfig.location}`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList).replace(/</g, "\\u003c") }} />
      <SectionHeading
        as="h1"
        eyebrow="Services"
        title={`Car servicing and repairs in ${siteConfig.location}`}
        description={`Servicing, diagnostics, brakes, engines, clutches, MOT preparation and electrical repairs at ${siteConfig.legalName} on Timberlog Lane. Contact the garage to confirm it can help with your vehicle.`}
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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-700">Need advice first?</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">Tell us what is happening with the vehicle</h3>
          </div>
          <BookingLink href={getBookingHref()} className="w-full sm:w-auto" />
        </div>
      </div>
    </div>
  );
}
