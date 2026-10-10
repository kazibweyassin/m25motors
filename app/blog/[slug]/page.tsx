import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, ExternalLink } from "lucide-react";
import { createPageMetadata } from "@/lib/page-metadata";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog";
import { getServiceBySlug, getServiceBookingHref, getWhatsAppHref, siteConfig } from "@/lib/site";

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article not found" };

  const base = createPageMetadata(post.title, post.description, `/blog/${post.slug}`);
  return {
    ...base,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      siteName: siteConfig.businessName,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [siteConfig.businessName],
      images: [{ url: post.image, width: 1500, height: 1000, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const url = `${siteConfig.siteUrl}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [post.image],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "en-GB",
    articleSection: post.category,
    ...(post.model ? { keywords: [post.model, "used car buying guide", "used car review UK"] } : {}),
    author: { "@type": "Organization", name: siteConfig.businessName, url: siteConfig.siteUrl },
    publisher: { "@type": "Organization", name: siteConfig.businessName, url: siteConfig.siteUrl, logo: { "@type": "ImageObject", url: `${siteConfig.siteUrl}/m25-mark.png` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };
  const related = post.relatedServices.filter(({ slug: serviceSlug }) => Boolean(getServiceBySlug(serviceSlug)));
  const isUsedCarReview = post.kind === "used-car";
  const bookingHref = isUsedCarReview
    ? getWhatsAppHref(`Hi M25 Motors, I am considering a used ${post.model ?? "car"}. Can you let me know whether you offer a pre-purchase inspection?`)
    : getServiceBookingHref(related[0]?.title ?? "a vehicle repair");

  return (
    <div className="min-h-screen bg-stone-100">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-500"><Link href="/" className="transition-colors hover:text-red-700">Home</Link><span aria-hidden="true" className="px-2">/</span><Link href="/blog" className="transition-colors hover:text-red-700">Blog</Link><span aria-hidden="true" className="px-2">/</span><span aria-current="page" className="text-zinc-800">{post.category}</span></nav>

        <header className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-700">M25 Motors <span className="px-1 text-zinc-400">/</span> {post.category}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-zinc-950 sm:text-5xl lg:text-6xl">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">{post.introduction}</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
            <span className="inline-flex items-center gap-2"><CalendarDays aria-hidden="true" className="h-4 w-4" /><time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</time></span>
            <span className="inline-flex items-center gap-2"><Clock3 aria-hidden="true" className="h-4 w-4" />{post.readingMinutes} min read</span>
            <span>By {siteConfig.businessName}</span>
          </div>
        </header>

        {isUsedCarReview && post.marketStats ? <section aria-label={`${post.model} used car overview`} className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-4 sm:p-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-red-700">Market snapshot</p><p className="mt-2 text-sm leading-6 text-zinc-700"><strong>#{post.marketStats.rank}</strong> by UK used transactions in {post.marketStats.period} ({post.marketStats.transactions.toLocaleString("en-GB")} sales).</p></div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4 sm:p-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-red-700">May suit</p><p className="mt-2 text-sm leading-6 text-zinc-700">{post.buyerFit}</p></div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4 sm:p-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-red-700">Check carefully</p><p className="mt-2 text-sm leading-6 text-zinc-700">{post.checkFocus}</p></div>
        </section> : null}

        <figure className="relative mx-auto mt-8 aspect-[16/9] max-w-6xl overflow-hidden rounded-[1.25rem] bg-zinc-900 sm:mt-12 sm:rounded-[2rem]">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 1152px" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-zinc-950/25 to-transparent" />
        </figure>

        <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-14">
          <article className="min-w-0">
            <aside aria-labelledby="key-points-title" className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm sm:p-7">
              <h2 id="key-points-title" className="text-lg font-semibold text-zinc-900">Key points</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700 sm:text-base sm:leading-7">{post.keyPoints.map((point) => <li key={point} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />{point}</li>)}</ul>
            </aside>

            <nav aria-label="In this guide" className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-7">
              <h2 className="font-semibold text-zinc-900">In this article</h2>
              <ol className="mt-3 grid gap-2 text-sm leading-6 text-zinc-600 sm:grid-cols-2">{post.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`} className="transition-colors hover:text-red-700">{section.heading}</a></li>)}</ol>
            </nav>

            <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
              {post.sections.map((section, index) => (
                <section key={section.heading} id={`section-${index + 1}`} className="scroll-mt-28">
                  <h2 className="text-2xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                  {section.bullets ? <ul className="mt-5 space-y-3 text-base leading-7 text-zinc-700">{section.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />{bullet}</li>)}</ul> : null}
                  {section.note ? <p className="mt-5 rounded-xl border-l-4 border-red-600 bg-white px-5 py-4 text-sm leading-6 text-zinc-700 sm:text-base">{section.note}</p> : null}
                </section>
              ))}
            </div>

            <section aria-labelledby="faq-title" className="mt-12 border-t border-zinc-200 pt-9 sm:mt-16 sm:pt-12">
              <h2 id="faq-title" className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">Common questions</h2>
              <div className="mt-6 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white px-5 sm:px-7">{post.questions.map((item) => <details key={item.question} className="group py-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold leading-6 text-zinc-900 marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"><span>{item.question}</span><span aria-hidden="true" className="shrink-0 text-xl leading-5 text-red-700 transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 pr-8 text-sm leading-7 text-zinc-600 sm:text-base">{item.answer}</p></details>)}</div>
            </section>

            <section aria-labelledby="sources-title" className="mt-10 rounded-2xl border border-zinc-200 bg-white p-5 sm:mt-12 sm:p-7">
              <h2 id="sources-title" className="text-lg font-semibold text-zinc-900">Official references</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">Use these primary sources for current rules and vehicle-specific guidance.</p>
              <ul className="mt-4 space-y-3">{post.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-sm font-medium leading-6 text-red-700 underline decoration-red-200 underline-offset-4 transition hover:text-red-900"><span>{source.title}</span><ExternalLink aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0" /></a></li>)}</ul>
            </section>
            <p className="mt-6 text-xs leading-5 text-zinc-500">General information only. It is not a diagnosis or a substitute for your vehicle handbook, official guidance or an in-person inspection. If the vehicle may be unsafe, stop somewhere safe and seek professional assistance.</p>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-zinc-950 p-5 text-white sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">{isUsedCarReview ? "Before you buy" : "Need an inspection?"}</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight">{isUsedCarReview ? "Ask about a pre-purchase check" : "Talk through the symptoms"}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{isUsedCarReview ? "Ask M25 Motors whether it can help check this vehicle before you commit; confirm availability and what the check includes." : "Share your vehicle details and what you have noticed to discuss the right next step with the garage."}</p>
              <a href={bookingHref ?? "/contact"} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700">{isUsedCarReview ? "Ask about this car" : "Discuss your car"} <ArrowRight aria-hidden="true" className="h-4 w-4" /></a>
            </div>
            {related.length ? <div className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6"><h2 className="font-semibold text-zinc-900">Related services</h2><ul className="mt-3 space-y-3">{related.map(({ title, slug }) => <li key={slug}><Link href={`/services/${slug}`} className="inline-flex items-center gap-2 text-sm font-medium leading-6 text-zinc-700 transition hover:text-red-700">{title}<ArrowRight aria-hidden="true" className="h-3.5 w-3.5" /></Link></li>)}</ul></div> : null}
            <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-red-700"><ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to the blog</Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
