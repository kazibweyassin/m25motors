"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import { getBookingHref, getPhoneHref, siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="flex items-center rounded-xl bg-white px-2 py-1 shadow-sm ring-1 ring-zinc-200 transition-shadow hover:shadow-md" aria-label="M25 Motors home">
          <div className="relative h-9 w-[5.5rem] sm:h-11 sm:w-28">
            <Image
              src="/m25-mark.png"
              alt="M25"
              fill
              sizes="(max-width: 640px) 96px, 112px"
              className="object-contain"
            />
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {getPhoneHref() ? <a
            href={getPhoneHref()}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            <PhoneCall className="h-4 w-4" />
            {siteConfig.phone}
          </a> : null}
          <a
            href={getBookingHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Book a repair
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div id="mobile-navigation" hidden={!menuOpen} className="border-t border-white/10 bg-zinc-950 md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {getPhoneHref() ? <a
              href={getPhoneHref()}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-4 py-3 text-sm font-semibold text-white"
            >
              <PhoneCall className="h-4 w-4" />
              Call the garage
            </a> : <Link href="/contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-3 text-sm font-semibold text-white">Contact the garage</Link>}
          </nav>
      </div>
    </header>
  );
}
