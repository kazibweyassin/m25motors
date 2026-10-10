import Link from "next/link";
import Image from "next/image";
import { MapPin, PhoneCall, Mail, Clock3, MessageCircleMore } from "lucide-react";
import { getWhatsAppHref, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950/80 text-zinc-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center">
            <div className="relative h-12 w-28 overflow-hidden rounded-xl bg-white px-2 ring-1 ring-zinc-700">
              <Image src="/m25-mark.png" alt="M25" fill sizes="112px" className="object-contain p-2" />
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-zinc-300">
            Vehicle servicing, diagnostics and repair enquiries for drivers in London and surrounding areas.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Navigation</p>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            {siteConfig.address ? <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-red-500" /> {siteConfig.address}</li> : null}
            {siteConfig.phone ? <li className="flex items-center gap-3"><PhoneCall className="h-4 w-4 text-red-500" /> <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-white">{siteConfig.phone}</a></li> : null}
            {siteConfig.email ? <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-red-500" /> <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a></li> : null}
            {siteConfig.openingHours ? <li className="flex items-center gap-3"><Clock3 className="h-4 w-4 text-red-500" /> {siteConfig.openingHours}</li> : null}
            {getWhatsAppHref() ? <li className="flex items-center gap-3"><MessageCircleMore className="h-4 w-4 text-[#25D366]" /> <a href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp us</a></li> : null}
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs leading-5 text-zinc-400 sm:px-6 sm:text-sm lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 {siteConfig.businessName}. All rights reserved.</p>
          <p>Professional garage services with clear communication and honest advice.</p>
        </div>
      </div>
    </footer>
  );
}
