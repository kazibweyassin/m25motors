import { MessageCircleMore } from "lucide-react";
import { getWhatsAppHref } from "@/lib/site";

export function WhatsAppWidget() {
  const href = getWhatsAppHref();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with M25 Motors on WhatsApp"
      className="whatsapp-widget group fixed bottom-24 right-5 z-40 hidden items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-[0_12px_36px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#1fbd5b] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6 sm:inline-flex"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <span className="whatsapp-widget__pulse absolute inset-0 rounded-full bg-white/20" />
        <MessageCircleMore className="relative h-5 w-5" aria-hidden="true" />
      </span>
      <span className="pr-1">Chat on WhatsApp</span>
    </a>
  );
}
