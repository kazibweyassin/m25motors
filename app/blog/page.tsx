import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, ExternalLink } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/page-metadata";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata(
  "Used Car Reviews, Car Repair & Maintenance Guides",
  `Used-car buying guides for popular UK models plus car servicing, MOT, brake and diagnostic advice for London drivers from ${siteConfig.businessName}.`,
  "/blog",
);

export default function BlogPage() {
  const usedCarReviews = blogPosts.filter((post) => post.kind === "used-car");
  const practicalGuides = blogPosts.filter((post) => post.kind !== "used-car");
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.businessName} car care guides`,
    description: "Used-car buying guides and practical maintenance information for drivers in London and the UK.",
    url: `${siteConfig.siteUrl}/blog`,
    publisher: { "@type": "Organization", name: siteConfig.businessName, url: siteConfig.siteUrl },
    blogPost: blogPosts.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: `${siteConfig.siteUrl}/blog/${post.slug}`, datePublished: post.publishedAt })),
  };

  return (
    <div className="min-h-screen bg-stone-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c") }} />
      <section className="relative isolate overflow-hidden bg-zinc-950 py-16 text-white sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_0%,rgba(185,28,28,0.24),transparent_42%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-400"><Link href="/" className="transition-colors hover:text-white">Home</Link><span aria-hidden="true" className="px-2">/</span><span className="text-white">Blog</span></nav>
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-red-300"><span className="h-px w-8 bg-red-400" /> The M25 Motors journal</p>
            <h1 className="text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl">Straight answers for <span className="font-light italic text-red-300">better car care.</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">Used-car reviews and practical guides to servicing, MOT preparation, brakes and warning lights. Read the checks, compare the exact car and follow links to official UK guidance.</p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-400"><BookOpenCheck aria-hidden="true" className="h-4 w-4 text-red-300" /> Advice first. No guesswork or scare tactics.</p>
          </div>
        </div>
      </section>

      {usedCarReviews.length ? <section id="used-car-reviews" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading eyebrow="Used car reviews" title="Research the model before you buy" description="Start with a model guide, then check the exact car’s history, paperwork, equipment and condition. A popular model is not automatically the right car or a guarantee of reliability." />
        <p className="mt-6 max-w-4xl text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">Our first five reviews cover the most-traded used models in the latest SMMT quarterly table available when these articles were prepared: Q2 2026. Transaction volume describes market popularity, not a quality or reliability rating. <a href="https://www.smmt.co.uk/vehicle-data/used-car-sales/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-red-700 underline underline-offset-4 hover:text-red-900">See SMMT model data <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /></a></p>
        <div className="mt-7 grid gap-5 sm:mt-9 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
          {usedCarReviews.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </section> : null}

      <section id="maintenance-guides" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <SectionHeading eyebrow="Maintenance and repair" title="Useful answers before your next garage visit" description="Start with an article, check its source links, then contact the garage if the vehicle needs attention. Safety guidance here is general; your handbook and an in-person inspection take priority." />
        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-7 md:grid-cols-2 xl:grid-cols-3">
          {practicalGuides.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="flex flex-col gap-6 rounded-[1.5rem] bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-8 md:flex-row md:items-center md:justify-between">
          <div><p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-600">Need help with your car?</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">Tell the garage what you have noticed</h2><p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">Share the vehicle details and symptoms to discuss an inspection or repair enquiry.</p></div>
          <Link href="/contact" className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 sm:w-auto">Contact M25 Motors <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}
