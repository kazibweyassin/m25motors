import { ArrowRight, ClipboardCheck, MessageSquareText, Wrench, ScanSearch } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { createPageMetadata } from "@/lib/page-metadata";
import { getBookingHref, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  "About Our Garage",
  `${siteConfig.businessName} provides vehicle servicing, diagnostics and car repairs for drivers in London and surrounding areas.`,
  "/about",
);

const values = [
  {
    icon: Wrench,
    title: "Vehicle repairs",
    text: "M25 Motors handles repair enquiries for common mechanical problems, including engine, brake, clutch and suspension concerns.",
  },
  {
    icon: ScanSearch,
    title: "Diagnostics",
    text: "If a warning light appears or a car develops a fault, contact the garage with the symptoms and vehicle details to discuss diagnosis.",
  },
  {
    icon: MessageSquareText,
    title: "Customer communication",
    text: "Share the make, model, registration and symptoms when you enquire. The garage can then discuss the next steps for your vehicle.",
  },
  {
    icon: ClipboardCheck,
    title: "Servicing and maintenance",
    text: "Routine maintenance helps you keep on top of your car's service needs. Ask M25 Motors about the work required for your vehicle.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        eyebrow="About the garage"
        title="About M25 Motors"
        description="M25 Motors provides vehicle servicing, diagnostics and repair services for drivers in London and surrounding areas. Contact the garage to discuss your vehicle and the work it may need."
      />

      <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-2">
        <Reveal>
        <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-8">
          <h3 className="text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">Vehicle care in UK</h3>
          <ul className="mt-6 space-y-4 text-base text-zinc-600">
            <li>• Car servicing and routine maintenance.</li>
            <li>• Diagnostics for warning lights and vehicle faults.</li>
            <li>• Repairs for brakes, engines, clutches and other components.</li>
            <li>• MOT preparation and repair enquiries.</li>
          </ul>
        </div>
        </Reveal>

        <Reveal delay={0.1}>
        <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-900 p-5 text-white shadow-sm sm:rounded-[2rem] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Serving {siteConfig.serviceArea}</p>
          <p className="mt-5 text-xl leading-8 text-zinc-100">
            Tell the garage what vehicle you have, what symptoms you have noticed and when they started. M25 Motors can discuss the appropriate next step and appointment availability.
          </p>
        </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 sm:mt-20 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
        {values.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} delay={index * 0.07} lift>
          <div className="h-full rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
            <p className="mt-3 text-base leading-7 text-zinc-600">{text}</p>
          </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm sm:mt-20 sm:rounded-[2rem] sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">Need a repair?</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">Tell us what the vehicle needs</h3>
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
