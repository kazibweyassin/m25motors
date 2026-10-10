import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/site";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.35rem] border border-zinc-200/80 bg-white shadow-[0_12px_36px_rgba(24,24,27,0.045)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(24,24,27,0.13)]">
      <div className="relative h-52 overflow-hidden bg-zinc-900 sm:h-64">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-zinc-950/10" />
        <p className="absolute bottom-4 left-5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/80">M25 Motors <span className="px-1 text-red-300">/</span> London</p>
      </div>
      <div className="space-y-3 p-5 sm:space-y-4 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">{service.title}</h3>
        </div>
        <p className="text-base leading-7 text-zinc-600 sm:min-h-14">{service.shortDescription}</p>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 border-t border-zinc-100 pt-4 text-sm font-bold text-red-700 transition-colors hover:text-red-900"
        >
          Explore service
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
