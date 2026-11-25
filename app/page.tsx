import Link from "next/link";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { ArrowRight, BadgeCheck, CalendarDays, ClipboardCheck, MessageSquareText, PhoneCall } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CarMotion } from "@/components/car-motion";
import { HomeHeroBackground } from "@/components/home-hero-background";
import { StaggeredHeadline } from "@/components/staggered-headline";
import { Reveal } from "@/components/reveal";
import { BlogCard } from "@/components/blog-card";
import { BookingLink } from "@/components/booking-link";
import { WorkshopMap } from "@/components/workshop-map";
import { formatTownList, garageFaqs, getBookingHref, nearbyTowns, services, siteConfig } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = createPageMetadata(
  `Car Repairs & Servicing in ${siteConfig.location}`,
  `Basildon car mechanic for servicing, diagnostics, brakes, clutches and MOT preparation. ${siteConfig.businessName} on Timberlog Lane, ${siteConfig.region}. Call or WhatsApp to book.`,
  "/",
);

const processSteps = [
  {
    icon: MessageSquareText,
    title: "Send us a message",
    text: "Tell us your vehicle make and model, what is happening, and when you would like to visit.",
  },
  {
    icon: ClipboardCheck,
    title: "Discuss the next step",
    text: "M25 Motors will review the details and reply about availability and how the issue should be assessed.",
  },
  {
    icon: CalendarDays,
    title: "Agree a time to visit",
    text: "Once a visit is arranged, bring your car to the workshop at the agreed date and time.",
  },
];

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.siteUrl}/#webpage`,
        url: siteConfig.siteUrl,
        name: `Car repairs and servicing in ${siteConfig.location}`,
        description: `Servicing, diagnostics and repairs at ${siteConfig.legalName} in ${siteConfig.location}, ${siteConfig.region}.`,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
        about: { "@id": `${siteConfig.siteUrl}/#business` },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.siteUrl}/#faq`,
        mainEntity: garageFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <div className="relative isolate">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c") }} />
      <HomeHeroBackground />
      <div className="relative z-10">
      <section className="relative min-h-0 overflow-hidden bg-zinc-950/70 text-white lg:min-h-[calc(100svh-5rem)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-950/55 via-zinc-950/30 to-zinc-950/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/10 via-transparent to-zinc-950/45" />

        <div className="relative z-10 mx-auto grid min-h-0 max-w-[92rem] items-center gap-5 px-4 py-6 sm:gap-8 sm:px-6 sm:py-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-10 lg:py-16">
          <div className="max-w-2xl py-1 sm:py-4 lg:py-10">
            <Reveal delay={0.12}>
              <p className="mb-3 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-red-300 sm:mb-7 sm:text-xs sm:tracking-[0.28em]">
                <BadgeCheck className="h-3.5 w-3.5 text-red-400" />
                M25 Motors <span className="text-zinc-500">/</span> {siteConfig.location}
              </p>
            </Reveal>
            <StaggeredHeadline />
            <Reveal delay={0.34}>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300 sm:mt-7 sm:text-lg sm:leading-8">
                Servicing, diagnostics and mechanical repairs at the {siteConfig.location} workshop on Timberlog Lane. Drivers across {siteConfig.region} can call or WhatsApp the garage and get a clear next step.
              </p>
            </Reveal>

            <Reveal delay={0.46}>
            <div className="mt-5 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <BookingLink href={getBookingHref()} className="w-full sm:w-auto" />
              {siteConfig.phone ? <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                <PhoneCall className="h-4 w-4" />
                {siteConfig.phone}
              </a> : <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5">Contact the garage</Link>}
            </div>
            </Reveal>

            <div className="mt-12 hidden max-w-xl grid-cols-3 border-t border-white/15 pt-5 sm:grid">
              <div><p className="text-[10px] font-bold tracking-[0.22em] text-red-300">01 / CARE</p><p className="mt-2 text-xs text-zinc-300 sm:text-sm">Routine servicing</p></div>
              <div><p className="text-[10px] font-bold tracking-[0.22em] text-red-300">02 / FIND</p><p className="mt-2 text-xs text-zinc-300 sm:text-sm">Vehicle diagnostics</p></div>
              <div><p className="text-[10px] font-bold tracking-[0.22em] text-red-300">03 / FIX</p><p className="mt-2 text-xs text-zinc-300 sm:text-sm">Mechanical repairs</p></div>
            </div>
          </div>

          <CarMotion />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Care for the miles ahead"
            description={`Scheduled servicing, fault finding and mechanical repairs at the ${siteConfig.location} workshop.`}
          />
          <Link href="/services" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-red-700 transition hover:text-red-900">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08} lift>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-stone-100/90 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Car care guides"
              title="Clear advice for your next decision"
              description="Read practical repair guides and used-car reviews, with links to official UK sources and checks."
            />
            <div className="flex flex-col items-start gap-2 self-start sm:items-end">
              <Link href="/blog" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-red-700 transition hover:text-red-900">
                Browse all articles <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/blog#used-car-reviews" className="inline-flex min-h-11 items-center text-sm font-semibold text-zinc-600 transition hover:text-red-700">Explore used-car reviews</Link>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-zinc-950/80 py-16 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_0%,rgba(185,28,28,0.19),transparent_38%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-red-300"><span className="h-px w-8 bg-red-500" /> How it works</p>
              <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl">A clearer route from message to <span className="font-light italic text-red-300">workshop.</span></h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">Share your vehicle details, agree the next step, then visit at a time arranged with the garage.</p>
            </div>
            <BookingLink href={getBookingHref()} className="self-start lg:self-auto" />
          </div>

          <div className="relative mt-10 grid gap-3 sm:mt-14 sm:gap-4 md:grid-cols-3 md:gap-5">
            <div aria-hidden="true" className="absolute left-[16.66%] right-[16.66%] top-9 hidden border-t border-dashed border-white/20 md:block" />
            {processSteps.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.1} lift>
                <article className="relative h-full rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-5 transition-colors hover:border-red-400/40 hover:bg-white/[0.075] sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-red-300/30 bg-zinc-950 text-red-300 shadow-[0_0_0_8px_rgba(9,9,11,0.8)]"><Icon className="h-6 w-6" /></span>
                    <span className="text-4xl font-light tracking-tight text-white/20">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-zinc-300">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow={`${siteConfig.location} garage`}
          title={`Car repairs for drivers in ${siteConfig.location} and ${siteConfig.region}`}
          description={`${siteConfig.legalName} works from one workshop on Timberlog Lane, ${siteConfig.postalCode}. The visit is agreed by phone or WhatsApp before you bring the car in.`}
        />
        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">One workshop, nearby towns welcome</h3>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              People book servicing, diagnostics, brakes, clutches, engine repairs and MOT preparation here. Drivers also come from {formatTownList(nearbyTowns)}. Ask before you travel if you are further out.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              <li className="rounded-full bg-zinc-950 px-3 py-1.5 text-sm font-semibold text-white">{siteConfig.location}</li>
              {nearbyTowns.map((town) => (
                <li key={town} className="rounded-full border border-zinc-200 bg-stone-50 px-3 py-1.5 text-sm text-zinc-700">{town}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">What to send with your enquiry</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-zinc-600">
              <li>Registration, make and model.</li>
              <li>The symptom, and when it started.</li>
              <li>Any warning lights that are on.</li>
              <li>The day you would like to visit {siteConfig.location}.</li>
            </ul>
            <p className="mt-6 text-base leading-7 text-zinc-600">
              Call <a className="font-semibold text-zinc-900 underline decoration-red-200 underline-offset-4" href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}>{siteConfig.phone}</a> or{" "}
              <Link className="font-semibold text-zinc-900 underline decoration-red-200 underline-offset-4" href="/contact">send a WhatsApp message</Link>.
              The address is {siteConfig.address}.
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mt-10">
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900">Questions drivers ask</h3>
          <div className="mt-4 space-y-3">
            {garageFaqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h4 className="text-lg font-bold text-zinc-900">{faq.question}</h4>
                <p className="mt-2 text-base leading-7 text-zinc-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Directions"
          title={`Find the ${siteConfig.location} garage`}
          description={`${siteConfig.legalName} is at ${siteConfig.address}. Open the listing in Google Maps for directions.`}
        />
        <div className="mt-8 sm:mt-12">
          <WorkshopMap />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="rounded-[1.5rem] bg-zinc-950 p-5 text-white shadow-xl sm:rounded-[2.2rem] sm:p-10 lg:p-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-400">Need help today?</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-4xl">
                Book a repair, request a quote or call the garage
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <BookingLink href={getBookingHref()} className="w-full sm:w-auto" />
              {siteConfig.phone ? <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Call the garage
              </a> : <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5">Contact the garage</Link>}
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
