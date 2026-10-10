import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const socialImage = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&h=630&q=85";

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  const shareTitle = `${title} | ${siteConfig.businessName}`;
  const url = new URL(path, siteConfig.siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url,
      siteName: siteConfig.businessName,
      type: "website",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Car care and repairs from M25 Motors in London" }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [socialImage],
    },
  };
}
