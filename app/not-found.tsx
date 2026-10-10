import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Page not found</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900">This page isn’t available right now.</h1>
      <p className="mt-4 max-w-lg text-lg text-zinc-600">
        The link may be outdated or the page may have moved. Head back to the homepage to continue browsing the garage services.
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
        Back to homepage
      </Link>
    </div>
  );
}
