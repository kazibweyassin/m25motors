import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { getAreaServed, getPostalAddress, services, siteConfig } from "@/lib/site";

const socialImage = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&h=630&q=85";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    languages: { "en-GB": "/" },
    types: { "text/plain": "/llms.txt" },
  },
  title: {
    default: `Car Repairs & Servicing in ${siteConfig.location} | ${siteConfig.businessName}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `Car servicing, diagnostics and repairs in ${siteConfig.location}, ${siteConfig.region}. ${siteConfig.legalName}, ${siteConfig.streetAddress}. Call or WhatsApp to book.`,
  applicationName: siteConfig.businessName,
  keywords: ["car repairs Basildon", "car servicing Basildon", "vehicle diagnostics", "MOT preparation", "mechanic near me", "M25 Motors"],
  authors: [{ name: siteConfig.businessName, url: siteConfig.siteUrl }],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
  category: "Automotive",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: {
    google: "MPM4cZN0uhmRnD_u8qlw4f8UDa9GVnH1oHvUJLUkBUI",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | Car Repairs & Servicing`,
    description: `Car servicing, diagnostics and repairs in ${siteConfig.location}, ${siteConfig.region}. Call or WhatsApp ${siteConfig.businessName} to book.`,
    images: [{ url: socialImage, alt: "Car care and repairs from M25 Motors" }],
  },
  openGraph: {
    title: `${siteConfig.businessName} | Car Repairs & Servicing`,
    description: `Car servicing, vehicle diagnostics and repairs in ${siteConfig.location}, ${siteConfig.region}.`,
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    locale: "en_GB",
    type: "website",
    images: [{ url: socialImage, width: 1200, height: 630, alt: `${siteConfig.businessName} car repairs in ${siteConfig.location}, ${siteConfig.region}` }],
  },
  icons: {
    icon: "/m25-mark.png",
    shortcut: "/m25-mark.png",
    apple: "/m25-mark.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "@id": `${siteConfig.siteUrl}/#business`,
        name: siteConfig.businessName,
        legalName: siteConfig.legalName,
        slogan: siteConfig.slogan,
        url: siteConfig.siteUrl,
        description: `${siteConfig.legalName} provides car servicing, vehicle diagnostics and repairs at its workshop in ${siteConfig.location}, ${siteConfig.region}.`,
        areaServed: getAreaServed(),
        image: socialImage,
        logo: `${siteConfig.siteUrl}/m25-mark.png`,
        currenciesAccepted: "GBP",
        knowsAbout: services.map((service) => service.title),
        ...(siteConfig.email ? { email: siteConfig.email } : {}),
        ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
        ...(siteConfig.address ? { address: getPostalAddress() } : {}),
        ...(siteConfig.googleBusinessProfile ? { hasMap: siteConfig.googleBusinessProfile } : {}),
        ...(siteConfig.mapLatitude !== undefined && siteConfig.mapLongitude !== undefined
          ? {
              geo: {
                "@type": "GeoCoordinates",
                latitude: siteConfig.mapLatitude,
                longitude: siteConfig.mapLongitude,
              },
            }
          : {}),
        ...(siteConfig.openingHours ? { openingHours: siteConfig.openingHours } : {}),
        ...(siteConfig.googleBusinessProfile ? { sameAs: [siteConfig.googleBusinessProfile] } : {}),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          areaServed: "GB",
          availableLanguage: "en-GB",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Vehicle repair and maintenance services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.shortDescription,
              url: `${siteConfig.siteUrl}/services/${service.slug}`,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        name: siteConfig.businessName,
        url: siteConfig.siteUrl,
        publisher: { "@id": `${siteConfig.siteUrl}/#business` },
        inLanguage: "en-GB",
      },
    ],
  };

  return (
    <html lang="en-GB" className="h-full antialiased">
      <body className="min-h-full bg-stone-100 text-zinc-900">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
