import { getGoogleMapsHref, getMapEmbedUrl } from "@/lib/site";

export function WorkshopMap() {
  const href = getGoogleMapsHref();
  const embedUrl = getMapEmbedUrl();
  if (!href || !embedUrl) return null;

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white shadow-sm">
      <iframe
        title="Map of M25 Motors & Repair Ltd"
        src={embedUrl}
        className="h-72 w-full border-0 sm:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-zinc-900">M25 Motors & Repair Ltd</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-red-700 hover:text-red-900"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
