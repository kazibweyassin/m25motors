import Link from "next/link";
import { Clock3, Mail, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/page-metadata";
import { getWhatsAppHref, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  "Contact a London Mechanic",
  `Contact ${siteConfig.businessName} in London about car servicing, diagnostics, repairs or appointment availability.`,
  "/contact",
);

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
        eyebrow="Contact & booking"
        title="Talk to the garage about your vehicle"
        description="Send M25 Motors your vehicle details and preferred appointment date on WhatsApp. Your booking request opens as a message you can review and send."
      />

      <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm sm:rounded-[2rem] sm:p-6">
            <h3 className="text-xl font-bold text-zinc-900">Get in touch</h3>
            <ul className="mt-6 space-y-4 text-base text-zinc-600">
              {siteConfig.email ? <li className="flex items-start gap-3"><Mail className="mt-1 h-5 w-5 text-red-600" /> <a href={`mailto:${siteConfig.email}`} className="hover:text-zinc-900">{siteConfig.email}</a></li> : null}
              {siteConfig.phone ? <li className="flex items-start gap-3"><PhoneCall className="mt-1 h-5 w-5 text-red-600" /> <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-zinc-900">{siteConfig.phone}</a></li> : null}
              {getWhatsAppHref() ? <li className="flex items-start gap-3"><MessageCircleMore className="mt-1 h-5 w-5 text-[#25D366]" /> <a href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900">Chat on WhatsApp</a></li> : null}
              {siteConfig.address ? <li className="flex items-start gap-3"><MapPin className="mt-1 h-5 w-5 text-red-600" /> {siteConfig.address}</li> : null}
              {siteConfig.openingHours ? <li className="flex items-start gap-3"><Clock3 className="mt-1 h-5 w-5 text-red-600" /> {siteConfig.openingHours}</li> : null}
            </ul>
          </div>

          {siteConfig.address ? <div className="rounded-[2rem] border border-zinc-200 bg-zinc-900 p-6 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">Directions</p>
            <p className="mt-4 text-xl font-bold">Visit the workshop in {siteConfig.location}</p>
            <Link
              href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Get directions
            </Link>
          </div> : null}
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
