import type { ReactNode } from "react";
import { MessageCircleMore } from "lucide-react";

export const bookingButtonClass =
  "inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700";

const compactButtonClass =
  "inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700";

type BookingLinkProps = {
  href: string;
  children?: ReactNode;
  className?: string;
  size?: "default" | "compact";
};

export function BookingLink({ href, children = "Book on WhatsApp", className = "", size = "default" }: BookingLinkProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${size === "compact" ? compactButtonClass : bookingButtonClass} ${className}`}
    >
      <MessageCircleMore className="h-4 w-4" aria-hidden="true" />
      {children}
    </a>
  );
}
