import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group overflow-hidden rounded-[1.35rem] border border-zinc-200/80 bg-white shadow-[0_12px_36px_rgba(24,24,27,0.045)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(24,24,27,0.13)]">
      <Link href={`/blog/${post.slug}`} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-600" aria-label={`Read ${post.title}`}>
        <div className="relative h-48 overflow-hidden bg-zinc-900 sm:h-56">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-transparent to-zinc-950/10" />
          <p className="absolute bottom-4 left-5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/90">M25 Motors <span className="px-1 text-red-300">/</span> {post.category}</p>
        </div>
        <div className="space-y-3 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
            <Clock3 aria-hidden="true" className="h-3.5 w-3.5" />
            <span>{post.readingMinutes} min read</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}</time>
          </div>
          {post.marketStats ? <p className="text-xs font-semibold text-zinc-500">#{post.marketStats.rank} by UK used transactions <span aria-hidden="true">·</span> {post.marketStats.transactions.toLocaleString("en-GB")} transactions in {post.marketStats.period}</p> : null}
          <h3 className="text-xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-2xl">{post.title}</h3>
          <p className="text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">{post.excerpt}</p>
          <span className="inline-flex items-center gap-2 border-t border-zinc-100 pt-4 text-sm font-bold text-red-700 transition-colors group-hover:text-red-900">
            Read the guide
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}
