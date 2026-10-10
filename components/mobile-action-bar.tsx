import { PhoneCall, CalendarDays } from "lucide-react";
import { getBookingHref, getPhoneHref } from "@/lib/site";

export function MobileActionBar() {
  const actionCount = 1 + Number(Boolean(getPhoneHref()));
  return (
    <nav aria-label="Quick contact actions" className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200/80 bg-white/95 px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-12px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:hidden">
      <div className={`grid gap-2 ${actionCount === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
        {getPhoneHref() ? <a
          href={getPhoneHref()}
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-zinc-900 px-3 py-3 text-sm font-semibold text-white transition active:scale-[0.98]"
        >
          <PhoneCall className="h-4 w-4" />
          Call
        </a> : null}
        <a
          href={getBookingHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book an appointment with M25 Motors"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-3 py-3 text-sm font-semibold text-white shadow-sm transition active:scale-[0.98]"
        >
          <CalendarDays className="h-4 w-4" />
          Book
        </a>
      </div>
    </nav>
  );
}
