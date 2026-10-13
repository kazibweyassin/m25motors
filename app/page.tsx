import Link from "next/link";
import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/page-metadata";
import { ArrowRight, BadgeCheck, CalendarDays, ClipboardCheck, Clock3, MapPin, MessageSquareText, PhoneCall, ShieldCheck, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CarMotion } from "@/components/car-motion";
import { HomeHeroBackground } from "@/components/home-hero-background";
import { StaggeredHeadline } from "@/components/staggered-headline";
import { Reveal } from "@/components/reveal";
import { BlogCard } from "@/components/blog-card";
import { getBookingHref, hasGoogleProfile, services, siteConfig } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = createPageMetadata(
  "Car Repairs, Servicing & Diagnostics",
  "Looking for a car mechanic ? M25 Motors offers vehicle servicing, diagnostics and repairs. Explore services and contact the garage about your car.",
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
  return (
    <div className="relative isolate">
      <HomeHeroBackground />
      <div className="relative z-10">
      <section className="relative min-h-0 overflow-hidden bg-zinc-950/70 text-white lg:min-h-[calc(100svh-5rem)]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-950/55 via-zinc-950/30 to-zinc-950/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/10 via-transparent to-zinc-950/45" />

        <div className="relative z-10 mx-auto grid min-h-0 max-w-[92rem] items-center gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-10 lg:py-16">
          <div className="max-w-2xl py-1 sm:py-4 lg:py-10">
            <Reveal delay={0.12}>
              <p className="mb-5 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-red-300 sm:mb-7 sm:text-xs sm:tracking-[0.28em]">
                <BadgeCheck className="h-3.5 w-3.5 text-red-400" />
                M25 Motors <span className="text-zinc-500">/</span> London
              </p>
            </Reveal>
            <StaggeredHeadline />
            <Reveal delay={0.34}>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 sm:mt-7 sm:text-lg sm:leading-8">
                Car servicing, diagnostics and repairs for UK drivers. Tell M25 Motors what your car needs and get clear next steps from the garage.
              </p>
            </Reveal>

            <Reveal delay={0.46}>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                href={getBookingHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-red-600 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-red-700"
              >
                Talk to the garage
                <ArrowRight className="h-4 w-4" />
              </a>
              {siteConfig.phone ? <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-3 border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                <PhoneCall className="h-4 w-4" />
                {siteConfig.phone}
              </a> : <Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/5">Contact the garage</Link>}
            </div>
            </Reveal>

            <div className="mt-9 grid max-w-xl grid-cols-3 border-t border-white/15 pt-4 sm:mt-12 sm:pt-5">
              <div><p className="text-[10px] font-bold tracking-[0.22em] text-red-300">01 / CARE</p><p className="mt-2 text-xs text-zinc-300 sm:text-sm">Routine servicing</p></div>
              <div><p className="text-[10px] font-bold tracking-[0.22em] text-red-300">02 / FIND</p><p className="mt-2 text-xs text-zinc-300 sm:text-sm">Vehicle diagnostics</p></div>
              <div><p className="text-[10px] font-bold tracking-[0.22em] text-red-300">03 / FIX</p><p className="mt-2 text-xs text-zinc-300 sm:text-sm">Mechanical repairs</p></div>
            </div>
          </div>

          <CarMotion />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Care for the miles ahead"
          description="From scheduled servicing to fault finding and mechanical repairs, explore the work M25 Motors offers drivers."
        />

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
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
            <a href={getBookingHref()} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-red-700 lg:self-auto">
              Start your booking <ArrowRight className="h-4 w-4" />
            </a>
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
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title="Vehicle care with clear next steps"
            description="From routine maintenance to fault finding, explore the work M25 Motors offers and get in touch to discuss the symptoms, vehicle and repair options."
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-5">
            <Reveal lift><div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <ShieldCheck className="h-8 w-8 text-red-600" />
              <h3 className="mt-4 text-xl font-bold text-zinc-900">Clear communication</h3>
              <p className="mt-3 text-base text-zinc-600">Understand the findings and agree the recommended work before repairs proceed.</p>
            </div></Reveal>
            <Reveal delay={0.08} lift><div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <Wrench className="h-8 w-8 text-red-600" />
              <h3 className="mt-4 text-xl font-bold text-zinc-900">Practical workmanship</h3>
              <p className="mt-3 text-base text-zinc-600">Discuss servicing, diagnostics and repair options for your vehicle with the garage.</p>
            </div></Reveal>
            <Reveal delay={0.16} lift><div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <CalendarDays className="h-8 w-8 text-red-600" />
              <h3 className="mt-4 text-xl font-bold text-zinc-900">Convenient appointments</h3>
              <p className="mt-3 text-base text-zinc-600">Contact M25 Motors to ask about availability and arrange a suitable appointment.</p>
            </div></Reveal>
            <Reveal delay={0.24} lift><div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
              <PhoneCall className="h-8 w-8 text-red-600" />
              <h3 className="mt-4 text-xl font-bold text-zinc-900">Direct contact</h3>
              <p className="mt-3 text-base text-zinc-600">Send an enquiry with your vehicle details and a description of the issue.</p>
            </div></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100/70 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Local garage"
            title="Looking for a car mechanic?"
            description="M25 Motors offers vehicle servicing, diagnostics and repair enquiries for drivers. Check the service list or contact the garage about your vehicle."
            align="center"
          />

          <div className="mt-8 rounded-[1.5rem] border border-dashed border-zinc-300 bg-white p-5 text-center shadow-sm sm:mt-10 sm:rounded-[2rem] sm:p-8">
            <p className="text-base leading-7 text-zinc-600 sm:text-lg">
              Need help with a warning light, brakes, engine fault or routine service? Browse the service pages for details, then contact M25 Motors to discuss your car.
            </p>
            {hasGoogleProfile(siteConfig.googleBusinessProfile) ? (
              <a
                href={siteConfig.googleBusinessProfile}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                View Google Business Profile
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm sm:gap-10 sm:rounded-[2rem] sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Location"
              title="Planning a visit to the workshop?"
            />
            <ul className="mt-6 space-y-4 text-base text-zinc-600">
              <li className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 text-red-600" /> Servicing drivers in {siteConfig.serviceArea}.</li>
              {siteConfig.openingHours ? <li className="flex items-start gap-3"><Clock3 className="mt-1 h-5 w-5 text-red-600" /> {siteConfig.openingHours}</li> : null}
              {siteConfig.phone ? <li className="flex items-start gap-3"><PhoneCall className="mt-1 h-5 w-5 text-red-600" /> {siteConfig.phone}</li> : null}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200">
            <div className="flex h-full min-h-[260px] flex-col justify-end bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-800 via-zinc-900 to-zinc-950 p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300 sm:text-sm">M25 Motors</p>
              <p className="mt-3 max-w-sm text-xl font-bold sm:text-2xl">Straightforward vehicle care, from servicing to repairs.</p>
              <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">Explore services <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
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
              <a
                href={getBookingHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
              >
                Book an appointment
              </a>
              {siteConfig.phone ? <a
                href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
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
