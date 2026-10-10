import { PhoneCall } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata(
  "Privacy Information",
  "How M25 Motors' website booking form passes your enquiry details to WhatsApp.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Privacy"
        title="How booking enquiries are handled"
        description="This page explains what happens when you use the vehicle enquiry form on this website."
      />

      <div className="mt-12 space-y-8 rounded-[1.5rem] border border-zinc-200 bg-white p-6 sm:p-10">
        <section>
          <h2 className="text-xl font-semibold text-zinc-900">Details in your message</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            The form prepares a message containing the details you enter: your name and phone number, optional email and registration, vehicle, requested service, issue description, and preferred date if supplied. The form does not send these fields to an M25 Motors website endpoint.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900">Before you send</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            Selecting “Continue to WhatsApp” opens WhatsApp with that message pre-filled. WhatsApp/Meta receives the information needed to open the chat. The message is not sent to M25 Motors until you review it and press Send. WhatsApp handles data under its own terms and privacy information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-zinc-900">Contact the garage another way</h2>
          <p className="mt-3 leading-7 text-zinc-600">
            You can call M25 Motors instead of using the form. Do not include information in a message that you do not want to share with the garage or WhatsApp.
          </p>
          <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="mt-4 inline-flex items-center gap-2 font-semibold text-red-700 hover:text-red-900">
            <PhoneCall className="h-4 w-4" /> {siteConfig.phone}
          </a>
        </section>

        <p className="border-t border-zinc-100 pt-5 text-sm leading-6 text-zinc-500">
          For questions about an enquiry you have sent, contact M25 Motors using the phone number above. The garage’s postal address and a separate privacy contact have not been supplied for publication.
        </p>
      </div>
    </div>
  );
}
