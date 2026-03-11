import type { Metadata, Viewport } from "next";
import { APP } from "./APP";
import { COPY } from "./LOCALE";

export const VIEWPORT: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: APP.colors.white },
    { media: "(prefers-color-scheme: dark)", color: APP.colors.black },
  ],
};

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const METADATA: Metadata = {
  title: {
    default: APP.titleVerbose,
    template: `%s | ${APP.name}`,
  },
  description: APP.description,
  keywords: APP.keywords.split(", "),
  creator: APP.creator,
  // META
  generator: "Next.js",
  applicationName: APP.name,
  category: "technology",
  classification: "AI Automation",
  referrer: "origin-when-cross-origin",
  publisher: APP.owner,
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  metadataBase: new URL(APP.website),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
  // https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest
  manifest: `/manifest.json`,
  // OPEN GRAPH
  openGraph: {
    type: "website",
    url: APP.website,
    siteName: APP.name,
    title: APP.titleVerbose,
    description: COPY.transform,
    images: {
      url: APP.socialPreview,
      alt: "",
      width: 1280,
      height: 640,
    },
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: APP.titleVerbose,
    description: COPY.transform,
    creator: "@2gbeh",
    images: {
      url: APP.socialPreview,
      alt: "",
    },
  },
  // ROBOTS
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
