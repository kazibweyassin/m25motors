import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MapPin, PhoneCall } from "lucide-react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getBlogPostsForService } from "@/lib/blog";
import { createPageMetadata } from "@/lib/page-metadata";
import { getServiceBySlug, getPhoneHref, getServiceBookingHref, services, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service not found",
    };
  }

  return createPageMetadata(
    `${service.title} in ${siteConfig.location}`,
    `${service.shortDescription} Contact ${siteConfig.businessName} in ${siteConfig.location} to discuss your vehicle and arrange this service.`,
    `/services/${service.slug}`,
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return notFound();
  }

  const relatedArticles = getBlogPostsForService(slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <Link href="/services" className="mb-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 sm:mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to services
      </Link>

      <div className="grid gap-7 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">Service detail</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-zinc-900 sm:mt-4 sm:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8">{service.description}</p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={getServiceBookingHref(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              {service.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
            {getPhoneHref() ? <a
              href={getPhoneHref()}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-300"
            >
              <PhoneCall className="h-4 w-4" />
              Call the garage
            </a> : null}
          </div>
        </div>
        </Reveal>

        <Reveal delay={0.12} className="relative h-[240px] overflow-hidden rounded-[1.35rem] border border-zinc-200 bg-white shadow-sm sm:h-[360px] lg:h-[420px]">
          <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-8 lg:grid-cols-2">
        <Reveal className="rounded-[1.35rem] border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">When to contact us</p>
          <p className="mt-4 text-lg leading-8 text-zinc-600">{service.whenToBook}</p>
        </Reveal>

        <Reveal delay={0.08} className="rounded-[1.35rem] border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">Local service area</p>
          <div className="mt-4 flex items-start gap-3 text-lg text-zinc-600">
            <MapPin className="mt-1 h-5 w-5 text-red-600" />
            <span>M25 Motors serves drivers in {siteConfig.serviceArea}. Contact the garage to confirm whether it can help with your vehicle and location.</span>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 sm:mt-20">
        <h2 className="text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">Frequently asked questions</h2>
        <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
          {service.faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.08}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="text-lg font-bold text-zinc-900">{faq.question}</h3>
              <p className="mt-3 text-base leading-7 text-zinc-600">{faq.answer}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
      {relatedArticles.length ? (
        <section aria-labelledby="related-articles-title" className="mt-12 border-t border-zinc-200 pt-10 sm:mt-16 sm:pt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">From the M25 Motors blog</p>
          <h2 id="related-articles-title" className="mt-3 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">More advice about {service.title.toLowerCase()}</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {relatedArticles.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block h-full rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">{post.category} <span className="px-1 text-zinc-400">/</span> {post.readingMinutes} min read</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-zinc-900 transition-colors group-hover:text-red-800">{post.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-700">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.description,
        areaServed: siteConfig.serviceArea,
        provider: { "@type": "AutoRepair", name: siteConfig.businessName, url: siteConfig.siteUrl },
      }).replace(/</g, "\\u003c") }} />
    </div>
  );
}
