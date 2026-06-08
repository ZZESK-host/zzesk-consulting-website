import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetadata = {
  title: string;
  description?: string;
  path: string;
};

export function createPageMetadata({ title, description = site.defaultDescription, path }: PageMetadata): Metadata {
  const canonical = new URL(path, site.url).toString();
  const metadataTitle = path === "/" ? site.defaultTitle : title;
  const socialTitle = path === "/" ? site.defaultTitle : `${title} | ${site.businessName}`;

  return {
    title: metadataTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: site.businessName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}
