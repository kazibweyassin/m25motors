import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { services, siteConfig } from "@/lib/site";

const socialImage = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&h=630&q=85";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.businessName} | Car Repairs & Servicing`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `${siteConfig.businessName} provides car servicing, vehicle diagnostics and repairs for drivers in ${siteConfig.location}. Explore services and contact the garage to discuss your vehicle.`,
  applicationName: siteConfig.businessName,
  category: "Automotive",
  robots: { index: true, follow: true },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
twitter: {
      card: "summary_large_image",
      title: `${siteConfig.businessName} | Car Repairs & Servicing`,
      description: `Car servicing, diagnostics and repairs in ${siteConfig.location}. Contact M25 Motors to discuss your vehicle.`,
      images: [{ url: socialImage, alt: "Car care and repairs from M25 Motors" }],
    },
    openGraph: {
      title: `${siteConfig.businessName} | Car Repairs & Servicing`,
      description: `Car servicing, vehicle diagnostics and repairs in ${siteConfig.location}.`,
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    type: "website",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Car care and repairs from M25 Motors in London" }],
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
    "@type": "AutoRepair",
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    description: `${siteConfig.businessName} provides car servicing, vehicle diagnostics and repair services in ${siteConfig.location}.`,
    areaServed: siteConfig.serviceArea,
    image: socialImage,
    logo: `${siteConfig.siteUrl}/m25-mark.png`,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vehicle repair and maintenance services",
      itemListElement: [
        ...new Set(services.map((service) => service.title)),
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-stone-100 text-zinc-900">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
